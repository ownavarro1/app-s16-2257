const express = require('express');

const router = express.Router();

const users = [
  { id: 0, username: 'Maria', url: 'wedeycode.com' },
  { id: 1, username: 'juanito', url: 'https://google.com' },
  { id: 3, username: 'amina', ulr: 'www.weycode.com' },
];

router.get('/', (req, res) => {
  res.status(200).json(users);
});

module.exports = router;
