Deploy an API service which with 3 pods using replica sets.
a. The APIs will be accessible from outside the cluster.
    - A node port service is created (nodeportservice.yaml), which would expose the service externally

b. The API will retrieve records from the above database.
    - A node solution , which is connecting to mysql using the user name and password proided in mysql-configmap.yaml and mysql-secret.yaml
    is created in Problem2 Prj folder. 
    - This solution has a endpoint data (shown in attached image "accessing data from other Pod.png") which retrievs the data from 
    mysql table "testtable" which was created in problem 1 (please refer images)

c. Use headless clusterIP service for connectivity with the database.
    - A headless service "mysql-headless" is created using mysql-headless-serice which allows communication between the POD (mysql-0) created via stateful sets
    in problem 1 runnung my sql instance and PODs (api-replicaset-6n92g,api-replicaset-jptv9,api-replicaset-qrm9k) created via replicaset and running the node end point.

d. Number of pods running should be 3.
    - At a given time 3 pods are running visible with name "api-replicaset" in image "3ReplicaPods.png" .

e. Use ConfigMaps and Secrets to store any configurations like db 
user/pass, connection strings etc.
    - Configmap and secrets are reutilized from the files already uploaded in problem 1 "mysql-configmap.yaml" and "mysql-secret.yaml"