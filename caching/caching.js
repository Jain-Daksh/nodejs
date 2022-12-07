const express = require('express')
const app = express()
const redis = require('redis')
const fetch = require('node-fetch-commonjs')
const Port = 3000
const redis_Port = 6379

const client = redis.createClient(redis_Port)
 client.connect();

//set response
function setResponse(username, repos) {
  return `<h2>${username} has ${repos} </h2>`
}


//make request to github
async function getRepos(req, res, next) {
  try {
    console.log('fetching')
    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    const repos = data.public_repos;

    //send data to redis
    client.setEx(username, 3600, repos)


    res.send(setResponse(username, repos));

  } catch (error) {
    console.log(error)
  }
}

app.get('/repos/:username', getRepos)

app.listen(Port, () => {
  console.log("server running")
})