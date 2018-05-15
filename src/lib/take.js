function localStorages(qwerty, email, username, id) {
  let obj = {
    qwerty: qwerty,
    email: email,
    username: username,
    id: id
  }
  getLocalStorage(obj)
}

function getLocalStorage(data) {
  return data
}

export default { localStorages, getLocalStorage }