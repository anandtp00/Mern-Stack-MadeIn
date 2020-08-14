const User = require('../models/usermodel');

module.exports = {
    index: (req, res) => {

    },

    adduser: async (req,res) => {
        var username = req.body.username;
        var email = req.body.username;
        var password = req.body.password;
        var mobile = Number(req.body.mobile);
        await User.findOne(
            {
                email: email
            }).then(user => {
                if (user) {
                    return res.json({
                        status : 'error',
                        msg: 'Already Exists'
                    })
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
                            return res.json({
                                status : 'error',
                                msg: 'Server error'
                            })
                            return res.json({
                                status:'success',
                                msg:'user added'
                            })
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