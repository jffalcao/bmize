FROM alpine

RUN apk update && \
    apk add --update nodejs nodejs-npm && \
    echo 'http://dl-3.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
    apk upgrade --update && \
    apk add mongodb && \
    mkdir /data && \
    mkdir /data/db && \
    mongod
