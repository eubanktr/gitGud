const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    res.render('homepage');
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;