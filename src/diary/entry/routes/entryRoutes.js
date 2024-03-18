const { Router} = require('express');
const { createEntry } = require('../controllers/createEntry.controller');
const { getEntries } = require('../controllers/getEntries.controller');
const { getOneEntry } = require('../controllers/getSingleEntry.controller');
const { removeOneEntry } = require('../controllers/removeEntry.controller');
const { updateEntry } = require('../controllers/updateEntry.controller');
const { auth } = require('../../../middleware/auth');

const router = Router();

router.post('/', auth, createEntry);
router.get('/', auth, getEntries);
router.get('/:id', auth, getOneEntry);
router.delete('/:id', auth, removeOneEntry);
router.put('/:id', auth, updateEntry)

module.exports = router;