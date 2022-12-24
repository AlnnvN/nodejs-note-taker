# nodejs-note-taker
A simple bootstrap-based note taker using node.js, express.js and mysql (sequelize) for back-end.

![image](https://user-images.githubusercontent.com/108158031/198747371-1801ee31-31dc-48b8-80d3-9c45f5f513fa.png)
![image](https://user-images.githubusercontent.com/108158031/198747628-437f3a08-09e3-4b10-b5b5-9dac9bbc1146.png)



#How to run it:
 
It is required to have MySQL and NodeJS installed. Once cloned, <nodejs-note-taker/database/database.js/> needs to be adjusted to your own MySQL settings - as of now it expects a database schema called 'notetaker' and will try to log in using user 'root' and the password '123456'. Change the parameters as needed: ![image](https://user-images.githubusercontent.com/108158031/209033261-300b452e-118f-4954-93ac-b3e5f055e24d.png)

Once the setup is done, type 'npm install' on the terminal so all the dependencies can be installed - 
{
    "bootstrap": "^5.2.2",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "mysql2": "^2.3.3",
    "sequelize": "^6.25.3"
  }

Finally, type 'node index.js' so the server can run - it's hosted by default at http://localhost:3000/ / http://127.0.0.1:3000/
