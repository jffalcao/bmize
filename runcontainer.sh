#!/bin/bash

# Make this file executable $ sudo chmod +x runcontainer.sh 
# run bmize container $ ./runcontainer.sh

docker run -v $(pwd):/jfrflabs -P -it bmize:latest