// OOP way:
var user1 = {
  name: 'galileo',
  username: 'lilStarryYoYo',
  age: 233,
  email: 'starman500@aol.com',
  loggedIn: true,
  logout: function() {
    this.loggedIn = false;
  },
  login: function() {
    this.loggedIn = true;
  },
  loginStatus: function() {
    if (this.loggedIn) {
      return `user is logged in`;
    } else {
      return `user is logged out`;
    }
  },
  haveBirthday: function(){
    this.age++;
  },
  getAge: function(){
    return `the users birthday is ${this.age}`
  }
};

console.log(user1.loginStatus());
user1.logout();
console.log(user1.loginStatus());

console.log(user1.getAge());
user1.haveBirthday();
console.log(user1.getAge());

// programmatic way:
/* function login(user) {
  user.loggedIn = true;
}

function logout(user) {
  user.loggedIn = false;
}

logout(user1);
console.log(user1.loggedIn); */