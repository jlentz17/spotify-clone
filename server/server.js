const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
  const code = req.body.code

  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '78a55a3cd4624247a87a2159aa7a22c8',
    clientSecret: 'ec910605a8d2424ba7f23c0fbd41a724',
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expires_in: data.body.expires_in,
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})
