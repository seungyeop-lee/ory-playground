#!/bin/bash

flowId=$(curl -s -X GET \
    -H "Accept: application/json" \
    http://127.0.0.1:4433/self-service/registration/api | jq -r '.id')

curl -s -X GET \
    -H "Accept: application/json" \
    "http://127.0.0.1:4433/self-service/registration/flows?id=$flowId" | jq
