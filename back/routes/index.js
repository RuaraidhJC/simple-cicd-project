var express = require('express');
var router = express.Router();

router.get("/secret", (req, res) => {
  const secret = process.env.SECRET_MESSAGE;
  if (!secret)
    return res.statusCode(500)
  return res.json({status: 200, secret: process.env.SECRET_MESSAGE})
})

module.exports = router;
