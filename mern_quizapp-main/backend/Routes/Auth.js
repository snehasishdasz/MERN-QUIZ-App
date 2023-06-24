const express = require('express');
const router = express.Router();
const User = require('../Models/User')


router.post("/createuser",
    async (req, res) => {
        try {
            
            if(req.body.uname==="" || req.body.email==="" || req.body.pass==="" || req.body.pass.length<5){
                res.json({ success: false });
                return;
            }
            await User.create({
                username: req.body.uname,
                password: req.body.pass,
                email: req.body.email
            });
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false });
            console.log(error);
        }
    }
)

router.post("/loginuser",
    async (req, res) => {
        try {
            let ud = await User.findOne({email:req.body.email});
            if(!ud){
                res.status(400).json({error: "Use correct credentials"});
                return;
            }
            let correctPass = false;
            if(ud.password === req.body.pass)correctPass = true;
            if(!correctPass ){
                res.status(400).json({error: "Use correct credentials"});
                return;
            }
            const authToken = ud.id;
            console.log("user id:"+authToken);
            res.status(200).json({success: true, authToken: authToken,uname: ud.username});
        } catch (error) {
            res.json({ success: false });
            console.log(error);
        }
    }
)

module.exports = router;