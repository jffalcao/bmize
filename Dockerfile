# Dockerfile: Debian Jessie

FROM python:2.7.10

LABEL maintainer="José Fernando Falcao (jfribeirofalcao@gmail.com)"

RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list && \
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6 && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --force-yes -q curl python-all wget vim python-pip php-pear php5 php5-mongo php5-dev ruby ruby-dev perl5 npm && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --force-yes httpie mongodb-org nodejs screen && \
    curl -sL https://deb.nodesource.com/setup_4.x |  bash - && \
    apt-get install -y --force-yes nodejs && \
    mkdir -p /data/db

ADD . /opt
WORKDIR /opt

RUN echo "export NODE_PATH=/opt/node_modules" >> /root/.bashrc && \
    npm install

ADD ./MOTD /opt/MOTD

RUN echo "cat /opt/MOTD" >> /root/.bashrc && \
    echo "PS1='BMIZE DevEnv >> '" >> /root/.bashrc && \
    echo "defshell -bash" > /root/.screenrc && \
    cp /usr/bin/mongod /etc/init.d/mongodb && \
    chmod 777 /etc/init.d/mongodb
    
ENTRYPOINT ["/bin/bash"]
