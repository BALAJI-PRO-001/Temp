

export default class User { 

  signup(data) {
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


  delete(id) {
    const users = this.getUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        users.splice(i, i+1);
        break;
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
  }

  
  update(id, data) {
    const users = this.getUsers();
    const updatedUser = {id: id, ...data};
    for (let i = 0; i <= users.length; i++) {
      if (users[i].id == id) {
        users[i] = updatedUser;
        break;
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
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
    const signinInformation = {
      status: false,
      email: false,
      password: false
    };

    for (let user of users) {
      if (user.email == email) signinInformation.email = true;
      if (user.password == password) signinInformation.password = true;
    }
    
    if (signinInformation.email && signinInformation.password) 
      signinInformation.status = true;

    return signinInformation;
  }

}