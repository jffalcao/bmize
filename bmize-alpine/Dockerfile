FROM alpine

RUN apk update && \
    apk add --update nodejs nodejs-npm && \
    echo 'http://dl-3.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
    apk upgrade --update && \
    apk add --update openrc && \
    apk add mongodb && \
    mkdir -p /data/db
    # mongod

    # Start MongoDB as a service on Alpine using OpenRC

ADD . /opt
WORKDIR /opt

RUN echo "export NODE_PATH=/opt/node_modules" >> /root/.bashrc
RUN npm install
ADD ./MOTD /opt/MOTD
RUN echo "cat /opt/MOTD" >> /root/.bashrc
RUN echo "PS1='BMIZE container >> '" >> /root/.bashrc

ENTRYPOINT [ "/bin/sh" ]