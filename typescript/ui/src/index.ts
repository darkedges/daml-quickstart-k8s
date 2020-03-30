import Ledger from '@daml/ledger';
import { Credentials, computeCredentials } from './credentials';
import { httpBaseUrl, wsBaseUrl } from './config';
import { Iou } from '@ts/quickstart-0.0.1'

const credentials: Credentials = computeCredentials("alice");

console.log(credentials);

const ledger = new Ledger({ token: credentials.token, httpBaseUrl, wsBaseUrl });
ledger.lookupByKey(Iou, credentials.party);