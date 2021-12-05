FROM node:12-alpine
RUN mkdir -p /TCB/briefcase/frontend
WORKDIR /TCB/briefcase/frontend 
COPY package*.json /TCB/briefcase/frontend
RUN npm install
COPY . /TCB/briefcase/frontend
CMD ["npm", "start"]
