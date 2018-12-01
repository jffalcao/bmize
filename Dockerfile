FROM node

LABEL maintainer="jfribeirofalcao@gmail.com" 

ADD . /jfrflabs
WORKDIR /jfrflabs

ADD ./MOTD /opt/MOTD
RUN echo "cat /opt/MOTD" >> /root/.bashrc && \
    echo "PS1='<bmize>:\w >> '" >> /root/.bashrc && \
    echo "defshell -bash" > /root/.screenrc && \
    npm install

EXPOSE 3000

ENTRYPOINT ["/bin/bash"]