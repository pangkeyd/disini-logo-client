const API = 'http://localhost:3000'

async function signUp(url, data, cb) {
  try {
    let res = await fetch(API + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password
      })
    })
    let resJSON = await res.json()
    let resObj = {
      data: resJSON,
      status: 1
    }
    cb(resObj)
  } catch (error) {
    let resObj = {
      data: error,
      status: 0
    }
    cb(resObj)
  }
}

export default signUp