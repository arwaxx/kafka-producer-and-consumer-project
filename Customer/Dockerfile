#specifies the base image to use, which in this case is the official Node.js image based on Alpine Linux.
FROM node:alpine
#sets the working directory to /usr/src/app in the container.  
WORKDIR /usr/src/app
#copies the package.json and package-lock.json files from the host to the container's working directory. The . indicates the current directory.
COPY package*.json . 
#runs the npm ci command in the container to install the dependencies listed in the package-lock.json file. This command is preferred over npm install in production, as it ensures that the exact same versions of packages are installed every time.
RUN npm ci
#copies all the files and directories from the host to the container's working directory. This includes the application code and any other files needed by the application.
COPY . . 
#sets the default command to run when the container starts. In this case, it runs the npm start command, which is expected to start the Node.js application.
CMD ["npm", "start"]
