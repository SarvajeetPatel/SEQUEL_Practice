const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

require('./models')
var userController = require('./controller/userController');

app.get('/getAllUsers', userController.getUsers)
app.post('/addUsers' , userController.addUsers)
app.get('/getUsers/:id', userController.getUsersByID)
app.patch('/updateUsers/:id' , userController.updateUser)
app.delete('/deleteUsers/:id' , userController.deleteUser)

app.listen(4000, () => {
    console.log('App wil run on port 4000');
})