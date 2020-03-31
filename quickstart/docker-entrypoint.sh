#!/bin/bash

CMD="${1:-bash}"

echo "Command is $CMD"

sandbox() {
    cd quickstart
    daml sandbox --address 0.0.0.0 --wall-clock-time --ledgerid MyLedger --auth-jwt-hs256-unsafe=secret .daml/dist/quickstart-0.0.1.dar
}

jsonapi() {
    MY_POD_IP=$(hostname -i)
    cd quickstart
    daml json-api --address 0.0.0.0 --ledger-host quickstart-sandbox --ledger-port 6865 --http-port 7575 --access-token-file /home/daml/accessToken
}

navigator() {
    cd quickstart
    daml script --dar .daml/dist/quickstart-0.0.1.dar --script-name Setup:initialize --ledger-host quickstart-sandbox --ledger-port 6865 --wall-clock-time --access-token-file /home/daml/accessToken
    daml navigator server --access-token-file /home/daml/accessToken quickstart-sandbox 6865
}

case "$CMD" in
sandbox) 
    sandbox
    ;;
jsonapi)
    jsonapi
    ;;
navigator) 
    navigator
    ;;
*)
    exec "$@"
esac
