FROM node:lts-alpine3.14

WORKDIR /home/node/app

COPY package*.json ./

ARG SECRET_MESSAGE="MielpOps un jour, MielpOps toujours"
ENV SECRET_MESSAGE=${SECRET_MESSAGE}

RUN mkdir -p /opt/secrets/ && echo "${SECRET_MESSAGE}" > /opt/secrets/secret.txt

RUN npm i

COPY . ./

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
