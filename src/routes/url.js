const router = require('express-promise-router')();
const db = require('../db/pg-util');
const { isProduction } = require('../db/pg-util');
const { getShortUrl, getLongUrlPK } = require('../method-helper');

router.post('/posturl', async function (req, res, next) {
    const { url } = req.body;
    const domain = isProduction ? "https://sniptech-be.herokuapp.com/" : "localhost:4200/";

    db.query("SELECT nextval(pg_get_serial_sequence($1, $2))", ['urls', 'urlid'], (err, result) => {
        if (err) {
            return next(err);
        }
        else {
            const shortPath = result.rows[0].nextval;
            const shortUrl = domain + getShortUrl(Number(shortPath) + 1); // +1 due to the nextval() method called prior

            db.query("INSERT INTO urls (longurl, shorturl) VALUES ($1, $2)",
                [url, shortUrl], (err, result) => {
                    if (err) {
                        return next(err);
                    }
                    res.send(shortUrl);
                }
            )
        }
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