const express = require('express');
const router = express.Router();
const Quiz = require('../Models/Quiz');


router.post("/getquestions",async (req,res)=>{
    try{
        const qname = req.body.quizname;
        const questions = await Quiz.find({quizname:qname});
        res.status(200).json({success:true, "questions": questions});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success: false});
    }
});

module.exports = router;