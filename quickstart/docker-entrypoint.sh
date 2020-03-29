#!/bin/bash

CMD="${1:-bash}"

echo "Command is $CMD"

sandbox() {
    MY_POD_IP=$(hostname -i)
    cd quickstart
    daml sandbox --address $MY_POD_IP --wall-clock-time --ledgerid MyLedger .daml/dist/quickstart-0.0.1.dar
}

jsonapi() {
    MY_POD_IP=$(hostname -i)
    cd quickstart
    daml json-api --address $MY_POD_IP --ledger-host quickstart-sandbox --ledger-port 6865 --http-port 7575
}

navigator() {
    cd quickstart
    daml script --dar .daml/dist/quickstart-0.0.1.dar --script-name Setup:initialize --ledger-host quickstart-sandbox --ledger-port 6865 --static-time
    daml navigator server quickstart-sandbox 6865
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
