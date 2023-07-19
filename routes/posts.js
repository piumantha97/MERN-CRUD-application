const express = require("express");

const Posts = require("../models/posts");

const router = express.Router();

// save posts

//first parameter = end point
//second  parameter = callback function

router.post('/post', (req, res) => {
    const userData = req.body;
  
    Posts.create(userData)
      .then((user) => {
        res.status(201).json(user); // Send a success response with the created user data
      })
      .catch((error) => {
        // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });


// router.post("/post/save", (req, res) => {
//   // instantiating the Schema model
//   let newPost = new Posts(req.body);
//   newPost.save() 

//     .then(() => {
//         return res.status(200).json({
//             success: "Posts saved successfully",
//     })
//     .catch((error) => {
//         return res.status(400).json({
//             error: "Internal Server Error" });
// })
//     })
// })
    // if (err) {
    //   return res.status(400).json({
    //     error: err,
    //   });
    // }
    // return res.status(200).json({
    //   success: "Posts saved successfully",



//get POst



router.get('/post',(req,res) => {
    Posts.find().then((posts) => {
        // res.send("hello piumanta  you have connected the frontend to back end")
         res.json(posts); // Respond with the retrieved posts
      })
      .catch((error) => {
        // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
});



   });

//router.put('post/update')

router.put('post/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
  
  Posts.findByIdAndUpdate(userId, updatedData)
      .then(() => {
        res.sendStatus(204); // Send a success response with no content
      })
      .catch((error) => {
        // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });


  /// Delete post

  router.delete('/post/:id', (req, res) => {
    const userId = req.params.id;
  
   Posts.findByIdAndDelete(userId)
      .then(() => {
        res.sendStatus(204); // Send a success response with no content
      })
      .catch((error) => {
        // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });






module.exports = router;

