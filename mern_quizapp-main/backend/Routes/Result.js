const express = require('express');
const router = express.Router();
const Result = require('../Models/Result');


router.post("/addresult",async (req,res)=>{
    try{
        const uname = req.body.uname;
        const qname = req.body.qname;
        const score = req.body.score;
        await Result.create({
            username: uname,
            score: score,
            quizname: qname
        }).then(() => {
            res.json({ success: true })
        }).catch((e)=>{
            console.log(e)
            res.status(400).json({success:false})
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({success: false});
    }
});


router.post("/getresults",async (req,res)=>{
    try{
        const results = await Result.find({});
        res.status(200).json({success:true, "results": results});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success: false});
    }
});


module.exports = router;