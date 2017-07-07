# Starter-kit-node
Starter kit with node, express, docker to use with Transin Infrastructure

## Prerequisites
1. Configure AWS CLI. 
2. Install PM2 globally. `npm install pm2 -g`

## Setup
1. Clone this starter kit. `git clone https://gitlab.com/transin/starter-kit-node`
2. 

## How to use Authentication for your Routes

## How to run the docker?
1. Clone the repo
2. Check if it runs locally without using docker
3. Build image from code using `docker build -t <Image Name> .`
4. Run the image using `docker run -it -p 3000:3000 -e PORT=3000 -e AWS_ACCESS_KEY="accesskey" -e AWS_SECRET_KEY="secretkey" --name <container name you want> <Image Name>` 

## Logging
1. We are using `winston` and `morgon` for logging
2. Please read [this link](http://www.jyotman.xyz/post/logging-in-node.js-done-right) before proceeding furthur.
3. All server logs can be seen in cloud-watch in AWS, in the foleder `SERVICE_NAME-service`


## This starter kit uses two tutorials for setting up this:
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

Copy the .env.sample to create a .env file
`cp .env.sample .env`
Update the .env details locally

In docker file for production:
global install pm2
RUN npm start

# ToDos
1. Connect to ELastic Search Cluster
2. Connect to RDS ?
3. Connect to Kakfa 
4. Connect to Redis (For using internal caching if needed)
