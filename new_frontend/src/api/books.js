import { API_ENDPOINT } from ".";

export const getJobs = async () => { //getBooks to getJobs
  const response = await fetch(`${API_ENDPOINT}/jobs`); //changed 'books' to 'jobs'
  const books = await response.json();

  return jobs; //changed 'books' to 'jobs'
};

export const addNewJob = async (id, description, submission_date) => { //inserted new parameters. Changed addNewBook to addNewJob.
  const response = await fetch(`${API_ENDPOINT}/jobs`, { //changed 'books' to 'jobs'
    method: "POST",
    body: JSON.stringify({
      id: newId, //substituted new parameters for the previous (lines 14, 15, 16)
      description: description,
      submission_date: new Date(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newJob = await response.json(); //newJob instead of newBook

  return newJob;
};

export const deleteJob = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/jobs/${id}`, {
    method: "DELETE",
  });

  return response.status;
};

export const updateJob = async (id, description, submission_date) => {
  const response = await fetch(`${API_ENDPOINT}/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      description,
      submission_date
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
};
