#!/bin/bash

flowId=$(curl -s -X GET \
    -H "Accept: application/json" \
    http://127.0.0.1:4433/self-service/login/api | jq -r '.id')

curl -s -X GET \
    -H "Accept: application/json" \
    "http://127.0.0.1:4433/self-service/login/flows?id=$flowId" | jq
