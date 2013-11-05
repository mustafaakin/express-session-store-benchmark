#!/bin/bash


store=( none memory redis mongo)
concurrency=( 1 10 100 500)

for c in "${concurrency[@]}"
do
	echo "Concurrency: ${c}"
	for s in "${store[@]}"
	do
		echo -n -e "${s}\t"
		node "${s}" &
		PID=$!
		sleep 2 # so the server can settle
		ab -c ${c} -n 10000 http://localhost:5000/ 2>/dev/null | grep "Requests per second" | cut -c 22-40
		kill $PID
		wait $PID > /dev/null
	done
done