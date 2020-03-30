import Ledger from '@daml/ledger';
import { Credentials, computeCredentials } from './credentials';
import { httpBaseUrl, wsBaseUrl } from './config';
import { Iou, IouTrade } from '@ts/quickstart-0.0.1'

const credentials: Credentials = computeCredentials("Alice");

const ledger = new Ledger({ token: credentials.token, httpBaseUrl, wsBaseUrl });
ledger.lookupByKey(Iou, credentials.party)
    .then(data => console.log(data))
    .catch(error => console.log(error));