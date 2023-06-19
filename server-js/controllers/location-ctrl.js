const connection = require("../db")

const getRandom = async (req, res) => {
  connection.promise().query(
    'SELECT * FROM `location` ORDER BY RAND() LIMIT 5'
  ).then(([rows, fields]) => {
    return res.status(200).json(rows)
  }).catch(() => {return res.status(400).json({ success: false })});
}

module.exports = {
  getRandom
}