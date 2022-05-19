import * as UsersModel from '../../../services/users/users.service.js'

function find(req, res) {
    UsersModel.find()
        .then(function(users) {
            res.status(200).json(users)
        })
}

export default {
    find
}