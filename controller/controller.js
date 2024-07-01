const bcrypt = require('bcrypt');
const users = [

]


const signin = async (req, res)=>{
    
    
    const {username, password} = req.body;
    const hash = await bcrypt.hashSync(password, 13);
     users.push({
        username,
        password: hash
    })
    console.log(users);
   

    res.status(200).send('success');
    

};

module.exports = signin;
