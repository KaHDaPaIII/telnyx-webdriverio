# telnyx-webdriverio
## About the project
Implementation of 20 test cases using WebdriverIO.  
Site used for testing: https://telnyx.com/  
Test cases are described [here](https://docs.google.com/document/d/1jZXDEiyJRGAz_poi4AAjvAzbb8hVvF38rOIZNUPaX4k/edit?usp=sharing).

## Getting started
### Prerequisites
- Node.js  
- Java 8 or above, Allure Report require Java 8 or higher  
- Git  
#### Optional
- Docker

### Installation  

1. Clone the repo using:  
```sh
git clone https://github.com/KaHDaPaIII/telnyx-webdriverio
```
2. Navigate to folder:
```sh
cd telnyx-webdriverio
```
3. Install npm packages using:
```sh
npm install
```

## Usage  
- Run tests:  
```sh
npm run wdio
```
- Generate and open allure report:  
```sh
npm run allure:generate
```

## Run tests in Docker
- Build image:  
```sh
docker build -t mytest -f Dockerfile .
```
- Run container:  
```sh
docker run -it mytest
```