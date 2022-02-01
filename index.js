const express = require('express');
const app = express();
const fetch = require('node-fetch');
const axios = require('axios');
const dotenv = require('dotenv').config();

const Twitter = require('twitter-v2');
// const Client = require('tweets.ts')
// import {Client} from 'twitter.js'

app.use(express.static('public'));
app.use(express.json());

app.get('/', async (req, res) => {
    const tweets = ['1459529591572209674', '1455459418271670275'];

    const client = new Twitter({
        bearer_token: `${process.env.BEARER_TOKEN}`,
    });

    for(let i = 0; i < tweets.length; i++) {
        const {data} = await client.get('tweets', {ids: tweets[i]})
        console.log(data[0].text);
        console.log({url: `https://twitter.com/murtuza_surti/status/${tweets[i]}`})
    }
    res.sendFile('index.html', {root: __dirname});
})

app.listen(process.env.PORT, () => {console.log(`${process.env.PORT} listening`)});

