const router = require('express-promise-router')();
const db = require('../db/pg-util');
const { getShortUrl, getLongUrlPK } = require('../method-helper');

router.post('/posturl', async function (req, res, next) {
    const { url } = req.body;

    db.query("INSERT INTO urls (longurl) VALUES ($1) RETURNING urlid",
        [url], (err, result) => {
            if (err) {
                return next(err);
            }

            res.send(`${getShortUrl(result.rows[0].urlid)}`)
            res.end();
        });
});

router.get('/geturl/:shorturl', async function (req, res, next) {
    const priKey = getLongUrlPK(req.params["shorturl"]);

    db.query("select longurl from urls where urlid = ($1)",
        [priKey], (err, result) => {
            if (err) {
                return next(err);
            }
            if (result.rows.length > 0) {
                res.send(`${result.rows[0].longurl}`).end();
            }

            res.status(404).end();
        }
    );
});

module.exports = router;