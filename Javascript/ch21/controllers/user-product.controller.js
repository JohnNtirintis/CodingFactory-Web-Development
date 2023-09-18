const User = require('../models/user.model');


exports.findOne = async(req, res) => {
    const username = req.params.username;
    console.log(`Find user: ${username}`);

    try{
        const result = await User.findOne({ username: username}, {username: 1, products: 1});
        res.status(200).json({status:true, data: result});
        console.log(`Successfully read and returned  ${username}'s products.`);
    } catch (err){
        res.status(400).json({status:false, data: err});
        console.log(`Error! Cant find user: ${username} products.`);
    }
}


exports.findAll = async(req, res) => {
    console.log("Find all products");

    try {
        // Will still return the id of the user-product due to the db's settings
        const results = await User.find({},{username: 1, products: 1});
        res.status(200).json({stauts:true, data: results});

        console.log("Successfully found and returned all users!")

    } catch (err){
        res.status(400).json({status:false, data:err});
        console.log("Error! Cant read user's products!");
    }
}

exports.addProduct = async(req, res) => {
    const username =  req.body.username;
    const products = req.body.products;

    console.log(`Insert product for user: ${username}`);

    try{
        const result = await User.updateOne(
            {username: username},
            {
                $push: {
                    products: products
                }
            }
            );
            res.status(200).json({stauts:true, data: results});
            console.log(`Successfully saved product for ${username}`);

    } catch (err) {
        res.status(400).json({status:false, data:err});
        console.log("Error! Couldnt save product for user: ", username);
    }
}

exports.updateProduct = async (req, res) => {
    const username = req.params.username;
    const product_name = req.body.product_name;
    const product_quantity = req.body.product_quantity;

    console.log(`Updating product for ${username}`);

    try {
        const result = await User.updateOne({username: username, "products.product": product_name},
        {
            $set: {
                "products.$.quantity": product_quantity
            }
        });
        res.status(200).json({stauts:true, data: result});
        console.log(`Successfully updated product for ${username}`);
    } catch (err) {
        res.status(400).json({status:false, data:err});
        console.log(`Error! Cant update product for ${username}.`);
    }
}

exports.delete = async(req, res) => {
    const username = req.params.username;
    const product = req.params.product;

    try {
        const result = await User.updateOne(
            {username: username},
            {
                $pull: {
                    products: {product : product}
                }
            }
        )
        res.status(200).json({stauts:true, data: result});
        console.log(`Successfully deleted product ${product}`);

    } catch (err) {
        res.status(400).json({status:false, data:err});
        console.log(`Error! Cant delete product: ${product}.`);
    }
}

exports.stats1 = async (req, res) => {
    console.log("Sum all users by product and count");

    try {
        const result = await User.aggregate(
            [
                {
                    $unwind: "$products"
                },
                {
                    $project: {
                        id: 1,
                        username: 1,
                        products: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            username: '$username',
                            product: '$products.product'
                        },
                        totalAmount : {
                            $sum: {
                                $multiply: ['$products.cost', '$products.quantity']
                            }
                        }
                    }
                }
            ]
        )
        res.status(200).json({stauts:true, data: result});
        console.log("Succesfully returned stats1.");

    } catch (err){
        res.status(400).json({status:true, data: err});
        console.log("Error! Cant access stats!.")
    }
}