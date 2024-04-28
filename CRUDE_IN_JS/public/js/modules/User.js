

export default class User { 

  add(data) {
    if (data) {
      const isKeyAlreadyExists = (localStorage.getItem("users") == null) ? false : true;

      if (!isKeyAlreadyExists) {
        const newUser = {id: 1, ...data};
        const users = [newUser];
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        const users = this.getUsers();
        const id = users[users.length -1].id + 1;
        const newUser = {id: id, ...data};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      }

    } else {
      throw new Error("Given user data is null or empty ....");
    }
  }


  getUsers() {
    return JSON.parse(localStorage.getItem("users"));
  }

  getUsersCount() {
    const users = JSON.parse(localStorage.getItem("users"));
    return (users != null) ? users.length : 0;
  }


  isEmailAlreadyExists(email) {
    const users = this.getUsers();
    for (let user of users) {
      if (user.email == email) return true;
    }
    return false;
  }


  signin(email, password) {
    const users = this.getUsers();
    const siginInformation = {
      status: false,
      email: false,
      password: false
    };

    for (let user of users) {
      if (user.email == email) siginInformation.email = true;
      if (user.password == password) siginInformation.password = true;
    }
    
    if (siginInformation.email && siginInformation.password) 
      siginInformation.status = true;

    return siginInformation;
  }

}