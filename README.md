# BMIZE

1- Alpine
2- NodeJS
3- MongoDB
4- Httpie
### Docker cheatsheet

$ docker run -v $(pwd):/opt -p 8080:8080 -it bmize 
$ docker exec -it <ContainerID> /bin/sh 
$ docker stop $(docker ps -aq)
$ docker rm $(docker ps -aq)
$ docker images -a
$ docker rmi <imageID>
