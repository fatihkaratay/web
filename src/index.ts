import { User } from './models/User';

const user = new User({
  name:'Fatih',
  age: 35
});

user.save();