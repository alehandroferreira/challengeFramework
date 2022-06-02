FROM node:16.15.0-slim

WORKDIR /home/node/app

CMD [ "sh", "-c", "yarn && tail -f /dev/null" ]

EXPOSE 3000
