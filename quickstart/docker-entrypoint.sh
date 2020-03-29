#!/bin/bash

CMD="${1:-bash}"

echo "Command is $CMD"

sandbox() {
    MY_POD_IP=$(hostname -i)
    cd quickstart
    daml sandbox -a $MY_POD_IP .daml/dist/quickstart-0.0.1.dar
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
navigator) 
    navigator
    ;;
*)
    exec "$@"
esac
