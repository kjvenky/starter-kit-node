# starter-kit-node
Starter kit with node, express, docker 
This starter kit uses two tutorials for setting up this:
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
http://www.jyotman.xyz/post/logging-in-node.js-done-right
Install pm2 globally
Create .env file and values of PORT etc into it or pass them as docker environment variables


In docker file for production:
global install pm2
RUN npm start


How to run the docker?
1. Clone the repo
2. Check if it runs locally without using docker
3. Build image from code using `docker build -t <Image Name> .`
4. Run the image using `docker run -it -p 3000:3000 -e PORT=3000 -e AWS_ACCESS_KEY="accesskey" -e AWS_SECRET_KEY="secretkey" --name <container name you want> <Image Name>` 



