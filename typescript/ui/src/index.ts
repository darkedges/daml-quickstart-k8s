import Ledger from '@daml/ledger';
import { Credentials, computeCredentials } from './credentials';
import { httpBaseUrl, wsBaseUrl } from './config';
import { Iou } from '@ts/quickstart-0.0.1'

const credentials: Credentials = computeCredentials("Alice");

const ledger = new Ledger({ token: credentials.token, httpBaseUrl, wsBaseUrl });
// const iou: Iou = {
//     issuer: "Alice",
//     owner: "Alice",
//     currency: "AliceCoin",
//     amount: "1.0",
//     observers: []
// };
// ledger.create(Iou, iou)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
ledger.query(Iou)
    .then(data => console.log(data))
    .catch(error => console.log(error));
