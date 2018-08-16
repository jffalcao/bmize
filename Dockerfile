FROM alpine

RUN apk update && \
    apk add --update nodejs nodejs-npm && \
    echo 'http://dl-3.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
    apk upgrade --update && \
    apk add mongodb && \
    mkdir -p /data/db
    # mongod

    # Install openrc
    # $ apk add --update openrc
    # 
    # Start a service
    # rc-service mongod start 

ADD . /opt
WORKDIR /opt

RUN echo "export NODE_PATH=/opt/node_modules" >> /root/.bashrc
RUN npm install
ADD ./MOTD /opt/MOTD
RUN echo "cat /opt/MOTD" >> /root/.bashrc
RUN echo "PS1='Hapi.js API Course >> '" >> /root/.bashrc

ENTRYPOINT [ "/bin/sh" ]