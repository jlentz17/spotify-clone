import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=78a55a3cd4624247a87a2159aa7a22c8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
const Login = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <a className='btn btn-success btn-lg' href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}

export default Login
