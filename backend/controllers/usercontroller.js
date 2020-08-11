const User = require('../models/usermodel');

module.exports = {
    index: (req, res) => {

    },

    adduser: async () => {
        var username = req.body.username;
        var email = req.body.username;
        var password = req.body.password;
        var mobile = Number(req.body.mobile);
        await User.findOne(
            {
                email: user_data.email
            }).then(user => {
                if (user) {
                    return
                }
                const newUser = new User({ 
                    username,
                    email,
                    password,
                    mobile
                 });
                newUser.save()
                    .then(added => {
                        if (!added) {

                        }

                    }).catch(err => {
                        console.log(err);
                    })
            }).catch(err => {
                console.log(err);
            })
    },

    dashboard: (req, res) => {

    }
}