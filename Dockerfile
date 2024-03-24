FROM node:21-alpine3.18

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli
RUN yarn install

CMD [ "ng","serve","--host","0.0.0.0" ]