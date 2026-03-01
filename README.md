# Node-js
# Set up instruction Node js
### Go to nodejs.org and download node LTS Version
### open terminal and run the command to check node is install or not
    node -v
### You will see something like this
    dip-ghosh@dip-ghosh-Extensa-215-54:~/code/Nodejs$ node -v v25.5.0

## installing MongoDB
    Step 1: Download and Extract to Home
    curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2404-8.0.0.tgz

## Extract it
    tar -zxvf mongodb-linux-x86_64-ubuntu2404-8.0.0.tgz

## Rename to something simple
    mv mongodb-linux-x86_64-ubuntu2404-8.0.0 mongodb
    Create Data and Log folders in Home
    Instead of using /data/db (which requires root), we will create these inside your new mongodb folder.

    mkdir -p ~/mongodb/data
    mkdir -p ~/mongodb/log
## Set up the Environment
    nano ~/.bashrc
    
    export PATH="$HOME/mongodb/bin:$PATH"

    Save and exit (Ctrl+O, Enter, Ctrl+X).

## Reload the configuration:

    source ~/.bashrc

## Step 4: Download the Shell (mongosh)

### Download the shell
    curl -O https://downloads.mongodb.com/compass/mongodb-mongosh_2.3.1_amd64.deb
### Extract the contents without installing the deb system-wide
    ar x mongodb-mongosh_2.3.1_amd64.deb
    tar -xf data.tar.xz
### Move the mongosh binary to your home mongodb bin
    cp usr/bin/mongosh ~/mongodb/bin/
### Clean up temp files
    rm data.tar.xz control.tar.gz debian-binary mongodb-mongosh_2.3.1_amd64.deb
    rm -rf usr
### Step 5: Start MongoDB

    mongod --dbpath ~/mongodb/data --logpath ~/mongodb/log/mongod.log --fork
### Step 6: Test it By typing
    mongosh
If you see the test> prompt, you have a fully functional, self-contained MongoDB installation inside your home directory!
