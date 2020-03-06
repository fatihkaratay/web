import { User } from './models/User';

const user = User.buildUser({id: 5});
// const user = User.buildUser({id: 5, name: 'alidesidero', age: 50});


user.on('change', () => {
  console.log(user);
});

user.fetch();