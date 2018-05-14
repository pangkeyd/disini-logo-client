import { API_URL } from '../env/env'

const API = API_URL

async function uniqueEmail(url, data, cb) {
  try {
    let res = await fetch(API + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let resJSON = await res.json()
    cb(resJSON)
  } catch(error) {
    console.error(error)
  }
}

async function uniqueUsername(url, data, cb) {
  try {
    let res = await fetch(API + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let resJSON = await res.json()
    cb(resJSON)
  } catch(error) {
    console.error(error)
  }
}

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
    if (!resJSON.error) {
      let resObj = {
        data: resJSON,
        status: 1
      }
      cb(resObj)
    } else if (resJSON.error === 'Email udah ada yang pake!') {
      let resObj = {
        data: resJSON,
        status: 2
      }
      cb(resObj)
    } else if (resJSON.error === 'Username udah ada yang pake!') {
      let resObj = {
        data: resJSON,
        status: 3
      }
      cb(resObj)
    }
  } catch(error) {
    let resObj = {
      data: error,
      status: 0
    }
    cb(resObj)
  }
}

async function signIn(url, data, cb) {
  function validateEmail(email) {
    var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(data.input)) {
    try {
      let res = await fetch(API + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.input,
          password: data.password
        })
      })
      let resJSON = await res.json()
      if (!resJSON.error) {
        let resObj = {
          data: resJSON,
          status: 1
        }
        cb(resObj)
      } else if (resJSON.error === 'Email / Username atau Password Salah!') {
        let resObj = {
          data: resJSON,
          status: 2
        }
        cb(resObj)
      }
    } catch(error) {
      let resObj = {
        data: error,
        status: 0
      }
      cb(resObj)
    }
  } else {
    try {
      let res = await fetch(API + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.input,
          password: data.password
        })
      })
      let resJSON = await res.json()
      if (!resJSON.error) {
        let resObj = {
          data: resJSON,
          status: 1
        }
        cb(resObj)
      } else if (resJSON.error === 'Email / Username atau Password Salah!') {
        let resObj = {
          data: resJSON,
          status: 2
        }
        cb(resObj)
      }
    } catch(error) {
      let resObj = {
        data: error,
        status: 0
      }
      cb(resObj)
    }
  }
}

export default { uniqueEmail, uniqueUsername, signUp, signIn }