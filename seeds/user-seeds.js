const { User } = require('../models');

const userData = [
    {
        username: "justo01",
        twitter: "justo@gmail",
        github: "justo0110",
        email: "eliseo101801@gmail.com",
        password: "password1"
    },

  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;