const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    res.render('home', { 
      logged_in: req.session.logged_in,
    });
})

router.get('/profile', withAuth, async (req, res) => {
    try {
    //   const userData = await User.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //   });
    //   const user = userData.get({ plain: true });
      res.render('profile', {
        logged_in: req.session.logged_in,
      });
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

router.get('/logout', async (req, res) => {
    
  console.log(req.session.user_id);

  if (req.session.logged_in) {
    await req.session.destroy(() => {
      res.status(204).end();
    });
    res.redirect('/');
  } else {
    res.status(404).end();
  }
});

module.exports = router;