const axios = require('axios');
const fs = require('fs');

// Initialize Endpoint 
axios.get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', {headers: {Authorization: 'Token 3c48a12f258a6c4b984570cc4fe4ac3284d351a6'}}).then(res => console.log(res)).catch(err => console.log(err))

// Move Endpoint 
// takes in a direction -- must be n, e, w, or s
function moveAroundMap(dir) {
axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', {headers: {Authorization: 'Token 3c48a12f258a6c4b984570cc4fe4ac3284d351a6'}}, {direction: dir}).then(res => console.log(res)).catch(err => console.log(err))
} 

