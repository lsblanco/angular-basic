# Installation Prerequisites

# Index
1. [NodeJS & NPM with admin privileges](#with-admin-privileges)
2. [NodeJS & NPM without admin privileges](#without-admin-privileges)
3. [Proxy Setup](#proxy-setup)

# Prerequisite Installation process

## With Admin privileges

### NodeJS & NPM

Download NodeJS JavaScript runtime from the [NodeJS portal](https://nodejs.org/en/) and install with admin priviledges.

There are two versión avaliable versión LTS (Long Time Support) and Current versión with the latest features.   

Add NodeJS and NPM to the PATH Enviroment variable
```
set PATH=%PATH%;C:\Program Files\nodejs
```

If every works as expected, NodeJS & NPM should be operational.
To check its correct operation, could be tested with the following commands:
```
node -v
v5.10.1

npm -v
3.8.6
```

### Bower

Once NPM is operative, Bower can be downloaded and installed globally as follow: 
```
npm install -g bower
```
From this point, all application Bower dependencies defined in **Bower.json** file could be install with:
```
bower install
```

### Karma  

The recommended approach is to install Karma (and all the plugins your project needs) locally in the project's directory.

> Note: Karma currently works on Node.js 0.10, 0.12.x, 4.x, 5.x, and 6.x. See [FAQ](https://karma-runner.github.io/1.0/intro/faq.html) for more info.

```
# Install Karma:
npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher --save-dev
```
This will install karma, karma-jasmine and karma-chrome-launcher packages into node_modules in your current working directory and also save these as devDependencies in package.json, so that any other developer working on the project will only have to do npm install in order to get all these dependencies installed.
```
# Run Karma:
./node_modules/karma/bin/karma start
```
You might find it useful to install karma-cli globally. You will need to do this if you want to run Karma on Windows from the command line.
```
$ npm install -g karma-cli
```
Then, you can run Karma simply by karma from anywhere and it will always run the local version.

See [the oficial Karma manual](https://karma-runner.github.io/1.0/intro/installation.html) for more info.

### Protractor

Use npm to install Protractor globally with:
```
npm install -g protractor
```
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```
webdriver-manager update
```
Now start up a server with:
```
webdriver-manager start
```
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.

See [the oficial Protractor manual](http://www.protractortest.org/#/) for more info.

## Without Admin privileges

### NodeJS & NPM

The process to install and prep your PC for Node.js development when you don’t have administrator rights.

**Step 1: Get Node.exe**

First you will need to download the Windows Binary. You can get it from Node.js download page or [http://nodejs.org/dist/latest/](http://nodejs.org/dist/latest/). For x64, you will have to download from the appropriate folder. Move the executable to a local folder.

**Step 2: Get NPM**

NPM (Node Package Manager) is the package manager for Node.js and you will need this for your development. You can download NPM from [https://github.com/npm/npm/releases](https://github.com/npm/npm/releases) and extract the zip file to a local folder.

**Step 3: Configure the environment PATH variable.**

You need to set up the PATH variable so that you can call node from anywhere in the system.
```
set PATH=%PATH%;D:\path-to-your-node;D:\path-to-your-npm
```

# Proxy Setup

## Proxy enviroment  

Set
```
set PROXY="http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
set HTTP_PROXY=%PROXY%
set HTTPS_PROXY=%PROXY%
```
Unset
```
set HTTP_PROXY=
set HTTPS_PROXY=
```

## Git Proxy Configuration

Set
```
git config --global http.proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
git config --global https.proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
git config --global url."https://".insteadOf git://
git config --global http.sslVerify false
```
Unset
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## NPM Proxy Configuration

Set
```
npm config set proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
npm config set https-proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
npm config set registry=http://registry.npmjs.org/
npm config set strict-ssl false
```
Unset
```
npm config rm proxy
npm config rm https-proxy
```

## Bower Proxy Configuration

Edit .bowerrc file
```
{
  "directory": "bower_components", 
  "proxy": "http://<PROXY_IP>:<PROXY_PORT>",
  "https-proxy":"http://<PROXY_IP>:<PROXY_PORT>"
}
```

## Continue with the installation...
[Click here to back to installer guide](README.md#Getting-Starter)
