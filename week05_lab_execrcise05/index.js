const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/


router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


/*
- Return all details from user.json file to client as JSON format
*/


router.get('/profile', (req, res) => {
  const filePath = path.join(__dirname, 'user.json');

  fs.readFile(filePath, (error, data) => {
    if (error) {
      return res.status(500).json({ error: "Error in reading user.json" });
    }
    try {
      const user = JSON.parse(data);
      res.status(200).json(user);
    } catch (parseError) {
      res.status(500).json({ error: "Error in parsing user.json" });
    }
  });
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req, res) => {
  const { username, password } = req.query;
  const filePath = path.join(__dirname, 'user.json');

  fs.readFile(filePath, (error, data) => {
    if (error) {
      return res.status(500).json({ error: "Error in reading user.json" });
    }
    
    try {
      const user = JSON.parse(data); 
      
 
      if (user.username !== username) {
        return res.status(200).json({
          status: false,
          message: "User Name is invalid"
        });
      }

   
      if (user.password !== password) {
        return res.status(200).json({
          status: false,
          message: "Password is invalid"
        });
      }

      res.status(200).json({
        status: true,
        message: "User Is valid"
      });

    } catch (parseError) {
      res.status(500).json({ error: "Error in parsing user.json" });
    }
  });
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
  const username = req.params.username; // Correct way to access route parameters

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const logoutMessage = `<b>${username} successfully logged out.</b>`;
  res.send(logoutMessage); 
});

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port ' + (process.env.port || 3000));
