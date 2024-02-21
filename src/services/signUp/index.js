export default class SignUpApi {
  constructor(account) {
    this.account = account
  }
  async #verifyAccount() {
    try {
      const rawData = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const usersFromDB = await rawData.json()
      const alreadyInUse = usersFromDB.find(userFromDB => userFromDB.email === this.account.email)
      return !alreadyInUse
    } catch (err) {
      console.log({ err })
    }
  }

  async postAccount() {
    if (await this.#verifyAccount()) {
      const post = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.account),
      })
      .then(()=> true)
      .catch((err)=> {
        console.log(err);
        return false
      })
      return await post
    } else {
      return false
    }
  }
}