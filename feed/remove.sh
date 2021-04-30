echo '---------------------------------------------'
echo 'REMOVING FEED'

echo '1. Removing layer subscriber'
cd ../api
# sls remove

echo '2. Removing layer subscriber'
cd src/s3-data-sync/
sls remove

echo 'Final. Removing layer'
cd ../layer
sls remove
