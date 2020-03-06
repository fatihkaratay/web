import { User } from './models/User';

const user = new User({id: 5, name: 'alidesidero', age: 50});


user.on('save', () => {
  console.log(user);
});

user.save();