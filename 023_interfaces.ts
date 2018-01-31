interface User {
  email : string;
  firstname? : string;
  lastName? : string;
}

function profile(user: User) : string {
  return 'welcome, ${user.email}';
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Sam',
  lastName: 'Paul',
};

console.log(profile(realUser));