oc new-app postgres POSTGRES_PASSWORD=password -e PGDATA=/tmp/data
oc get all
oc status
oc get pods

PGSQL=$(oc get pods -o name | grep postgres | sed 's/pod\///')

oc describe pod $PGSQL

oc cp ../devops/test-database.sh $PGSQL:/tmp/test-database.sh
oc exec -it $PGSQL bash /tmp/test-database.sh

oc describe pod $PGSQL
oc expose service postgres
oc get svc
oc get route
oc port-forward $PGSQL 5432:5432
node ./server.js

oc get all --selector app=postgres -o name
oc delete all --selector app=postgres

oc new-app . --name=web-app --context-dir=src --strategy=docker

minishift start --network-ipaddress 192.168.1.10 --network-gateway 192.168.1.1 --network-nameserver 8.8.8.8

export http_proxy='http://<username>:<urlencode(pwd>@<PROXY_IP:PORT>'
export https_proxy=$http_proxy

minishift start --http-proxy=http://<username>:<urlencode(pwd>@<PROXY_IP:PORT> --https-proxy=https://<username>:<urlencode(pwd>@<PROXY_IP:PORT> --no-proxy=192.168.99.100,localhost,127.0.0.1
