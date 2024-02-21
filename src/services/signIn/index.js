export default class SignInApi {
  async verifySign(login) {
    if (Object.keys(login).length !== 2) {
      return false
    }
    try {
      const res = await fetch('http://localhost:8080/users', { method: 'GET' })
      const loginFromDB = await res.json()
      const verifyLogin = loginFromDB.find(userFromDB =>
        userFromDB.email === login.email &&
        userFromDB.password === login.password
      )
      return verifyLogin
    } catch(err){
      console.log(err);
      return 'err'
    }
  }
}