const router = require('express').Router();

router.get('/', async (req, res) =>{
    res.render('homepage');
})


router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;