# FROM mhart/alpine-node:latest
FROM node:latest

# RUN useradd --user-group --create-home --shell /bin/false app-user

ENV HOME=/home/app-user

COPY package.json $HOME/app/
# RUN chown -R app-user:app-user $HOME/*

# USER app-user
WORKDIR $HOME/app

RUN npm install

CMD ["npm", "start-server"]
