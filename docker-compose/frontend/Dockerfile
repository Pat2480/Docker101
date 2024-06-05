FROM node:21-alpine3.17 as build01
# ที่เก็บงานสร้างappขึ้นมา
WORKDIR /app  
COPY package*.json .
RUN npm i
# ก๊อปไฟล์ทั้งหมดเข้าไปในfolder app
COPY . .
RUN npm run build

# เรียกว่า multi state รับไฟล์จากข้างบนมาไปใส่ในไฟล์nginx
FROM nginx:1.21.3-alpine
COPY nginx_reverse.conf /etc/nginx/conf.d/default.conf
COPY --from=build01 /app/dist /usr/share/nginx/html
EXPOSE 80