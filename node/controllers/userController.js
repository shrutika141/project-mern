const {
    User
} = require('../models/index')
const bcrypt = require('bcrypt')
const config = require('../middleware/authentication')
const jwt = require('jsonwebtoken')
module.exports = {

    signup: (req, res) => {
        const data = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
        }

        User.create(data)
            .then(async (result) => {
                let password = await bcrypt.hashSync(req.body.password, 10)
                var token = jwt.sign({
                    id: result.id
                }, config.secret, {
                    expiresIn: 86400
                });

                let updatedData = {
                    password: password,
                    token: token
                }
                User.update(updatedData, {
                    where: {
                        id: result.id
                    }
                }).then(async () => {
                    const response = await User.findByPk(result.id)
                    res.send(response)
                }).catch((err) => console.log(err))

            }).catch((err) => console.log(err))
    },

    login: (req, res) => {

        console.log(req.body)

        User.findAll({
                where: {
                    email: req.body.email,
                }
            })
            .then(async (result) => {
                const auth = await bcrypt.compare(req.body.password, result[0].password)
                if (auth) {
                    res.send(result)
                } else {
                    res.status(403).send({
                        message: 'password does not match',
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },

    userDetails: (req, res) => {
        User.findAll()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}