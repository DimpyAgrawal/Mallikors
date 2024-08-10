const express = require('express');
const app = express();
const router = express.Router();
const ApplicationModel = require('../models/application');
const authenticate = require('../middleware/middleware');
const User = require('../models/user');


router.post('/createJob',authenticate,async(req,res)=>{
    const{ownerName,jobTitle,salary,duration,location} = req.body;
    console.log(ownerName+" "+jobTitle+" "+salary+" "+duration+" "+location);
    if(!ownerName || !jobTitle || !salary || !duration || !location)
        return res.send({error:"Fill all the details"});
    
    try{
        const newJob = await ApplicationModel.create({
            ownerName: ownerName,
            jobTitle: jobTitle,
            salary:salary,
            duration:duration,
            location:location,
            postedBy: req.user._id
        });
        console.log('inside create job')
        
        const saveJob = await newJob.save();
         res.status(200).json(saveJob); 

    }catch(error){
        return res.status(400).json({ data: "Error occurred posting job", error });

    }
})


router.get('/getAllJobData',authenticate,async(req,res)=>{

    try{
        const jobData = await ApplicationModel.find().populate('postedBy');
        return res.status(200).json(jobData.reverse()); 


    }catch(error){
        return res.status(400).json({ data: "Error occurred during fetching job details", error });

    }
})


router.put('/addResponse', authenticate, async (req, res) => {
    const { userId, ownerId, foundationName, role } = req.body;
    console.log('inside add response');
    console.log(userId, ownerId, foundationName,role);
    try {
        console.log("inside addresponse " + userId + " " + ownerId);

        const responseObject = {
            userId,
            foundationName,
            role
        };

        const data = await User.findByIdAndUpdate(
            ownerId,
            { $push: { jobresponses: responseObject } },
            { new: true }
        );

        console.log(data);
        console.log(data.jobresponses);
        return res.status(200).json({ message: "Response added successfully", data });
    } catch (error) {
        console.log("Error:", error);
        return res.status(400).json({ message: "Error occurred during add response", error });
    }
});


router.get('/getResponse/:userId', authenticate, async (req, res) => {
    const userId = req.params.userId;
    if (!userId) return res.status(404).json({ message: "userId not found" });
    
    try {
        const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // Extract jobresponses data with required fields
        const jobResponses = userData.jobresponses.map(response => ({
            userId: response.userId,
            foundationName: response.foundationName,
            role: response.role,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
        }));

        res.status(200).json(jobResponses);
    } catch (error) {
        return res.status(400).json({ message: "Error occurred during get response", error });
    }
});





router.get('/getDataById/:userId',authenticate,async(req,res)=>{
    const userId  = req.params.userId;
    console.log(userId);
    if (!userId) return res.status(404).json({ message: "userId not found" });

    try{
        const data = await User.findById(userId);
        console.log(data);
        res.status(200).json({data});

    }catch (error) {
        return res.status(500).json({ message: "Error occurred during getting userData", error });
    }

})



module.exports = router;