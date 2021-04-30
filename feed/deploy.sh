echo '---------------------------------------------'
echo 'DEPLOYING FEED'

echo '1. Deploying layer'
cd src/layer
npm run deploy

echo '2. Deploying layer subscriber'
cd ../s3-data-sync/
sls deploy

echo '3. Deploying layer subscriber'
cd ../api
# sls deploy
