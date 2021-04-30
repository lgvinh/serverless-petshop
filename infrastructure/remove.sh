echo '---------------------------------------------'
echo 'REMOVING INFRASTRUCTURE'

echo '#. Removing message-broker'
cd src/message-broker
sls remove

echo '#. Removing auth'
cd ../auth
# sls remove

echo '#. Removing database'
cd ../database
sls remove

echo '#. Removing init'
cd ../init
# sls remove
