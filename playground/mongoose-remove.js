const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Both return a record
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('asdf').then((todo) => {
//   console.log(todo);
// });
