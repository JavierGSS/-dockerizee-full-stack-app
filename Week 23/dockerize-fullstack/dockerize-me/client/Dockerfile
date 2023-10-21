FROM node:slim




# Step 3.1 - Add working directory
WORKDIR /appclient


# Step 3.2 - Copy npm dependencies
COPY package.json /appclient/packages.json
COPY ./scr/index.js /appclient/index.js


# Step 3.3 - Install dependencies
RUN npm install



# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 3000