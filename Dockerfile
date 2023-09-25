FROM node:18-alpine

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
