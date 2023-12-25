FROM 370927314021.dkr.ecr.ap-southeast-1.amazonaws.com/node:14-alpine
WORKDIR /app
COPY . .
RUN npm install -g typescript &&\
    npm install
EXPOSE 4000
CMD [ "sh", "-c", "npm start" ]