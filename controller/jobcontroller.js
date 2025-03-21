const Job = require('../models/jobmodel');

exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json({ message: 'Job created' });
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};
