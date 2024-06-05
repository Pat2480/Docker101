FROM node:alpine
RUN npm install -g newman newman-reporter-htmlextra
WORKDIR /etc/newman
COPY  . .
# RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["sh", "./entrypoint.sh"]
# CMD [ "newman", "run", "backend1.postman_collection.json", "-r", "htmlextra,cli,junit" ]
CMD sh -c "\
  newman run backend1.postman_collection.json -k -r htmlextra,cli,junit --reporter-htmlextra-export='reports/report_backend1.html' --reporter-junit-export='reports/junitReport_backend1.xml' && \
  newman run backend2.postman_collection.json -k -r htmlextra,cli,junit --reporter-htmlextra-export='reports/report_backend2.html' --reporter-junit-export='reports/junitReport_backend2.xml' && \
  newman run third_party.postman_collection.json -k -r htmlextra,cli,junit --reporter-htmlextra-export='reports/report_third_party.html' --reporter-junit-export='reports/junitReport_third_party.xml'"