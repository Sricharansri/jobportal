const express = require('express');
const { createJob, getJobs } = require('../controller/jobcontroller');
const authenticate = require('../authmiddleware/authmiddleware');
const router = express.Router();

router.post('/create', authenticate, createJob);
router.get('/', authenticate, getJobs);

module.exports = router;
