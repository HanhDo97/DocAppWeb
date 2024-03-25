FROM node:21-alpine3.18

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

CMD npm install -g @angular/cli && npm install && ng serve --host 0.0.0.0
