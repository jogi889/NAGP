Deploy a database (any database) using stateful sets. 
a. The db should only be accessible from inside the cluster and not outside 
the cluster.
    - A service for mysql is created in file mysql-service.yaml which creates a service of type ClusterIp.
     which would make sure that the mysql instance is accessible from within the cluster only

b. Number of pods running should be 1.
    - screenshot Attached showing only 1 pod is running

c. Data should be persisted, so the pod goes down data should not be lost.
    - DataPresentInPod.png - shows a pod running and data is present in table testtable
    - PODDeleted.png - shows pod is deleted and another pod is created (age is visible), 
        again querying the same table testtable and data is still present.

d. Use ConfigMaps and Secrets to store any configurations like db 
user/pass, connection strings etc. 
    - files attached