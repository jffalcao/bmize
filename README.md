# BMIZE

- Alpine  
- NodeJS  
- MongoDB
- Httpie


### Docker cheatsheet

```
$ docker run -v $(pwd):/opt -p 8080:8080 -it bmize 
$ docker exec -it <ContainerID> /bin/sh 
$ docker stop $(docker ps -aq)
$ docker rm $(docker ps -aq)
$ docker images -a
$ docker rmi <imageID>
```
### Running MongoDB in a Container

[Running MongoDB as a Docker container](https://www.thachmai.info/2015/04/30/running-mongodb-container/)

**Staring the container**

```
$ mkdir ~/data
$ sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```
**Connecting to your MongoDB container**

```
# Install the MongoDB client
sudo apt-get install mongodb-clients

# Change mydb to the name of your DB
mongo localhost/mydb
```