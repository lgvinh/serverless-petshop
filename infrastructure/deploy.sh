echo '---------------------------------------------'
echo 'DEPLOYING INFRASTRUCTURE'

echo '1. Deploying init'
cd src/init
# sls deploy

echo '2. Deploying database'
cd ../database
sls deploy

echo '3. Deploying auth'
cd ../auth
# sls deploy

echo '4. Deploying message-broker'
cd ../message-broker
sls deploy
