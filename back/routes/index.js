var express = require('express');
var router = express.Router();
const readSecret = require("../utils/readSecret");

router.get("/secret", (req, res) => {
  const data = readSecret("/opt/secrets/secret.txt")
  if (!data)
    return res.sendStatus(500);
  return res.status(200).send("<p> " + data + " </p>")
})

module.exports = router;
