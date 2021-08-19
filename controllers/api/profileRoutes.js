const router = require('express').Router();
const { Users } = require('../../models');

router.get('/profile', async (req, res) => {
    res.render('profile')
})

router.put('/', async (req, res) =>{
      console.log(req.session);
      console.log(req.session.user_id);
      try {
        const userTags = await Users.update(req.body,
        {
            where: {
                id: req.session.user_id
            },
        })
        
        res.status(200).json(userTags);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;