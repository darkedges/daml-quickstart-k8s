# daml-quickstart-k8s

```bash
cd sdk
docker build . -t daml/sdk:0.13.55 --no-cache
cd ../quickstart
docker build . -t darkedges/daml-quickstart:0.0.1
cd k8s
kubectl apply -f quickstart.yaml
```
