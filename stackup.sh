#!/bin/sh

export STACK_NAME='test'

mkdir -p ~/data/${STACK_NAME}/redis

echo "\nStarting core services"
sudo STACK_NAME=${STACK_NAME} docker stack deploy --compose-file compose.yml ${STACK_NAME}

