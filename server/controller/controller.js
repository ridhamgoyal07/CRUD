var userDB = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate a request
    if(!req.body){
        res.status(404).send({message: "Content can not be empty!"});
        return;
    } 

    // new user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // save user in database
    user
        .save(user)
        .then(data=>{
            res.redirect("/add_user")
            // res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some Error Occur while making create operation"});
        });
};

// retrieve and return all user / retrieve and return single user
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        userDB.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({
                        message: `User with id = ${id} not found`
                    })
                }else{
                    res.send(data);
                }
            })
            .catch(err=>{
                res.status(500).send({
                    message: `Error in Single user find Operation` 
                });
            });
    }else{
      userDB.find()
        .then(user=>{
            res.send(user);
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "Some Error Occur while making find operation"});
        });
    }
};



// update a new identified user by id 
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(404).send({
            message: "Data to update cannot be empty"
        });
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id , req.body, {useFindAndModify:false} )
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot update the user with ${id}. Maybe user not found ` });
            }else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Error Update User Information"
            });
        });

};

// delete a user ,  identified user by id  in request
exports.delete = (req,res)=>{
    const id = req.params.id;
    userDB.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({
                    message:`Can not delete with ${id}. Maybe Id is Wrong`
                })
            }else{
                res.send({
                    message:`User Deleted Successfully`
                });
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:`Error in Delete Operation `
            });
        });
};