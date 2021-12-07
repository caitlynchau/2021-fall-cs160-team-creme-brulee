FROM node:12-alpine
RUN mkdir -p /TCB/briefcase/backend
WORKDIR /TCB/briefcase/backend
COPY package*.json /TCB/briefcase/backend
RUN npm install
COPY . /TCB/briefcase/backend
CMD ["npm", "run", "dev"]
