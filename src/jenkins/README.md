## Jenkins CI/CD Server

Reference: [https://docs.okd.io/3.11/using_images/other_images/jenkins.html](https://docs.okd.io/3.11/using_images/other_images/jenkins.html)

Create the App:

```
oc adm policy add-role-to-user admin -z default
oc new-app -e JENKINS_PASSWORD=password openshift/jenkins-2-centos7
oc expose svc jenkins-2-centos7 --name=jenkins --port=8080-tcp
oc get pods
oc logs --follow pod/jenkins-2-centos7-1-hjfjh
```

Remove all:

- `oc delete all --selector app=jenkins-2-centos7`
