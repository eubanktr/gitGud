const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await Users.create(req.body);

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
      const userData = await Users.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


  router.post('/register', async (req, res) => {
    try{
      const newUser = await Users.create({
        ...req.body,
         
      });
      
      res.status(200).json({message: 'You are now logged in'});

    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
