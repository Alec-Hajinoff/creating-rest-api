const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
//A list of all jobs that exist along with their submission & completion dates.
let ALL_JOBS = [
  {
    id: uuidv4(),
    description: 'Repair potholes in St Mary\'s Close',
    submission_date: new Date(2021, 10, 1).toISOString(),
    completion_date: null,
  }
];
//Feature 1: Getting a list of jobs
router.get("/", (req, res) => {
  res.json(ALL_JOBS);
});
//Feature 2: Getting a specific job
router.get("/:id", (req, res) => {
  const { id } = req.params;
// Find the job with the matching id.
  const job = ALL_JOBS.find((job) => job.id === id);
//If the job doesn't exist return appropriate status.
  if (!job) {
    res.sendStatus(404);
    return;
  }
  res.json(job);
});
//Feature 3: Adding a new job:
router.post("/", (req, res) => {
  const { body } = req;
  const { description } = body; //However the completion date isn't known at this point, how do we account for this?
//Generate a unique ID for the new job.
  const newId = uuidv4();
  const newJob = {
    id: newId,
    description: description,
    submission_date: new Date(),
  };
//Add the new job to the list of jobs.
  ALL_JOBS.push(newJob);
  res.json(newJob);
});
//Feature 4: Deleting a job.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const newListOFJobs = ALL_JOBS.filter(
    (job) => job.id !== id
  );
  // The user tried to delete a job that doesn't exist.
  if (ALL_JOBS.length === newListOfJobs.length) {
    res.sendStatus(404);
    return;
  }
  ALL_JOBS = newListOfJobs;
  res.sendStatus(200);
});
//Feature 5: Updating the description of a job.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newDescription, complete } = req.body;
  const job = ALL_JOBS.find((job) => job.id === id);
  if (!job) {
    res.sendStatus(404);
    return;
  }
  if(newDescription) {
    job.description = newDescription;
  }
  if(complete) {
    job.completion_date = new Date();
  }
  res.sendStatus(200);
});
module.exports = router;

