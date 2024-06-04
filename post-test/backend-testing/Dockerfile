FROM node:alpine
RUN npm install -g newman newman-reporter-htmlextra
WORKDIR /etc/newman
COPY  . .
# ENTRYPOINT ["sh", "./entrypoint.sh"]
CMD [ "newman", "run", "backend1.postman_collection.json", "-r", "htmlextra,cli,junit" ]