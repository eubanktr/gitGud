const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    res.render('home');
})

router.get('/profile', withAuth, async (req, res) => {
    try {
    //   const userData = await User.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //   });
    //   const user = userData.get({ plain: true });
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;