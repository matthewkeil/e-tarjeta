FROM node:alpine

WORKDIR /usr/app/api

RUN apk add --no-cache --virtual .build-deps make gcc g++ python \
	&& npm install bcrypt \
	&& apk del .build-deps 

COPY ./package.json ./package-lock.json /

RUN npm install --no-optional

COPY ./src/ src/

EXPOSE 4000

CMD [ "nodemon", "src" ]