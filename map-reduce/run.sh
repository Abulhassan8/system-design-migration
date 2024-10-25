rm -f host1/map_results/*.txt
rm -f host2/map_results/*.txt
rm -f map_results/*.txt
rm -f reduce_results/*.txt

HOST=host1 node map.js &
HOST=host2 node map.js &

wait

HOSTS=host1,host2 node shuffle.js

node reduce.js

cat reduce_results/results.txt