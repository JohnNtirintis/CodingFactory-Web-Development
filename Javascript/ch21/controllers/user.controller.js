// const User = require('../models/user.model')

    exports.findAllUsers = async(req, res) => {
        console.log("Find all users");

        try {
            const result = await User.find();
            res.status(200).json({status:true, data:result})
            console.log("Success! Read all users.")
        } catch(err){
            res.status(400).json({status:false, data: err})
            console.log("Error! Cant read all users.")
        }

        // res.status(200).json({status: true})
    }

    // Function with CallBack

    // exports.findAllUsers = function (req, res) {
    //     console.log("Found all Users");

    //     User.find( (err, results) => {
    //         if(err){
    //             res.status(400).json({status:falase, data:error});
    //             console.log("Error! Cant return all users.");
    //         } else {
    //             res.status(200).json({stauts:true, data:results});
    //             console.log("Successfuly returned all students.")
    //         }
    //     })
    // }

    exports.findOne =  async(req, res) => {
        const username = req.params.username;
        
        console.log(`Find one user with username: ${username}`);

        try {
            const result = await User.findOne({username : username});
            res.status(200).json({status: true, data: 'Find one User'});
        } catch(err){
            res.status(400).json({status:false, data : err});
            console.log(`Error! Cant read user with username: ${username}`)
        }
    }

    exports.create = async(res,req) => {
        
        // User from the model.js
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            address: req.body.address
            // phone: req.body.phone,
            // products: req.body.products
        });

        console.log("Insert user with username: ", req.body.username);

        try{
            const result = await newUser.save();
            res.status(200).json({status: true, data: result});
            console.log("Successfully inserted user with username: ", req.body.username);
        } catch(err){
            res.status(400).json({status:false, data : err});
            console.log(`Error! Cant insert user with username: ${username}`)
        }
    }

    exports.update = async (req, res) => {
        const username = req.body.username;
        console.log("Update user with username: ", username);

        const updateUser = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone
        }

        try{
            const result = await User.findOneAndUpdate({username: username}, updateUser)
            res.status(200).json({status: true, data : result})
            console.log("Successfully found and updated user: ", username);
        } catch (err){
            res.status(400).json({status:false, data : err});
            console.log(`Error! Cant update user with username: ${username}`)
        }
    }

    exports.delete = async (req,res) => {
        const username =  req.parms.username;
        console.log(`Delete user: ${username}`);

        try{
            const result = await User.findOneAndRemove({username: username});
            console.log("Successfuly deleted user: ", username);    
        } catch (err){
            res.status(400).json({status:false, data : err});
            console.log(`Error! Cant delete user: ${username}`)
        }

        console.log("Delete user");
    }