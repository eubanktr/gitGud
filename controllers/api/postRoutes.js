const router = require('express').Router();
const { Posts } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
    });
    const posts = postData.map((post) => post.get({ plain: true}));
      res.render('posts', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});


// router.get('/', async (req, res) => {
//   try {
//   res.render('posts');

//   } catch (err) {
//     res.status(500).json(err);

//   }
// })

router.post('/', async (req, res) => {
  try {
    const newPost = await Posts.create({
      ...req.body,
    });

    res.status(200).json({message: 'Post has been uploaded'});

  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router
