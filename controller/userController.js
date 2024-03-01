var db = require('../models')
var User = db.user;

var addUsers = async (req, res) => {
    var postData = req.body;

    if (postData.length > 1) {
        var data = await User.bulkCreate(postData)
    } else {
        var data = await User.create(postData)
    }

    res.json({ data: data })
}

var getUsers = async (req, res) => {
    const data = await User.findAll({})
    res.json({ data: data })
}

var getUsersByID = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({ data: data })
}

var deleteUser = async (req, res) => {
    const data = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({ data: data })
}

var updateUser = async (req, res) => {
    var updatedData = req.body
    const data = await User.update(updatedData, {
        where: {
            id: req.params.id
        }
    })
    res.json({ data: data })
}

module.exports = {
    addUsers,
    getUsers,
    getUsersByID,
    deleteUser,
    updateUser
}