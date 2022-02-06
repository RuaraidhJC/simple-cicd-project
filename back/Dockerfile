FROM node:lts-alpine3.14

ARG SECRET_MESSAGE="MielpOps un jour, MielpOps toujours"
ENV SECRET_MESSAGE=${SECRET_MESSAGE}

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . ./

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
