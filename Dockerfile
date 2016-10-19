FROM node:latest

COPY . /app
WORKDIR /app

ENV APP_ENV=local
 
RUN ["npm", "install"]
RUN ["npm", "rebuild", "node-sass"]

EXPOSE 9000/tcp
 
ENTRYPOINT ["start.sh", $APP_ENV]