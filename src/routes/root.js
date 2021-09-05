// create a new express-promise-router, can use async function as route handlers
const router = require('express-promise-router')();

router.get('/', (req, res) => {
    res.send('sniptech-be is live! But shoo shoo!').status(200).end();
});

module.exports = router;