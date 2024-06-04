FROM node:21-alpine3.17 as build01
WORKDIR /app
COPY package*.json .
RUN npm i  
# RUN export NODE_TLS_REJECT_UNAUTHORIZED=0
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]