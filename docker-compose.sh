#!/bin/bash

ENV="$1"

if [[ "$#" -ne 1 ]];then
echo "[x] run requires only one argument i.e prod/dev"
exit
fi

if [[ "$ENV" == "prod" && "$ENV" == "dev" ]];then
	echo "[x] Invalid argument \"$ENV\" provided. Either \"prod\" \"dev\""
	exit
fi

if [[ "$ENV" == "prod" ]];then
	echo "[i] Running docker compose in production mode..."
	sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
else
	echo "[i] Running docker compose in development mode..."
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
fi