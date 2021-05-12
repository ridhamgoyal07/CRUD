const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/*
* @description Home Page
* GET method
*/
route.get('/', services.homeRoutes);

/*
* @description Add User
* GET method /add_user
*/
route.get('/add_user',services.add_user);

/*
* @description Update User
* GET method /update_user
*/ 
route.get('/update_user',services.update_user);

// API 
route.post('/api/users', controller.create); 
route.get('/api/users', controller.find); 
route.put('/api/users/:id', controller.update); 
route.delete('/api/users/:id', controller.delete); 

// exporting the route variable 
module.exports = route;