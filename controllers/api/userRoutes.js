const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.users_id = userData.id;

      res.status(200).json(userData);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;