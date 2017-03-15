The following steps are the instruction of running the system.
System is using PostgreSQL. Please install PostgreSQL as guide:
https://help.ubuntu.com/community/PostgreSQL

Install node-gyp:
sudo npm install node-gyp -g
sudo apt-get install python
sudo apt-get install make
sudo apt-get install g++

Install Sequelize:
sudo npm install -g sequelize-cli

Run npm project:
npm install

Run migrate:
sequelize db:migrate
Run seeder:
sequelize db:migrate:all

// The following step to config the environment for the system
Config env:
Copy file .env.example to .env
Config db:
Edit file server/config.json

Run server:
node server/index.js
or nodejs server/index.js

Run React App:
npm start







