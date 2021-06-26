echo "---- Building ----"
apt-get install figlet
figlet "HareSRV"
docker build -t haresrv/microcontroller_detector:v1 .
figlet "Pushing"
docker tag haresrv/microcontroller_detector:v1 registry.heroku.com/microcon-detector/web
docker push registry.heroku.com/microcon-detector/web
heroku container:release web --app microcon-detector