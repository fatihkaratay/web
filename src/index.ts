import { User } from './models/User';

const user = new User({
  name:'Fatih',
  age: 35
});

user.events.on('change', () => {
  console.log('change event');
});

user.events.trigger('change');