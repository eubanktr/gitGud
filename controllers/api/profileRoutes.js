const router = require('express').Router();
const { Users } = require('../../models');


router.put('/:id', async (req, res) =>{
    try {
        const userTags = await Users.update({
            gamertag: req.body.gamertag,
            psn: req.body.psn,
            steamId: req.body.steamId,
            system_id: req.body.system_id,
        },
        {
            where: {
                id: req.session.user_id
            },
        }
        )
        
        res.status(200).json(userTags);
    } catch (err) {
        res.status(500).json(err);
    }
});

