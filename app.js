// Import necessary modules
const express = require('express');
const cors = require ('cors')
const app = express();

app.use(cors())

// Define email address and GitHub URL
const registeredEmail = 'goodlucketim94@gmail.com';
const githubURL = 'https://github.com/Goodlucketi/HNG_Tasks';

// Define the API route
app.get('/', (req, res)=>{
    res.send("Api Running")
})
app.get('/api/info', (req, res) => {
    res.json({
        email: registeredEmail,
        current_datetime: new Date().toISOString(),
        github_url: githubURL
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
