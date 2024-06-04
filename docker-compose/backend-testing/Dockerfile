FROM node:alpine
RUN npm install -g newman newman-reporter-htmlextra
WORKDIR /etc/newman
COPY  . .
CMD [ "newman", "run", "api-test.postman_collection.json", "-r", "htmlextra,cli,junit" ]