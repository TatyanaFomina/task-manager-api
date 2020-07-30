const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useFindAndModify: false,
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required:true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)) {throw new Error('Email is invalid')};
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number');
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: [7,'Password should contain more than 6 symbols'],
//         trim: true,
//         validate(value){
//             if(value.toLowerCase().includes('password')) {
//             throw new Error("Provide more secure password");
//         }
//         }
//     }
// })

// const me = new User({
//     name: 'Tanya',
//     email: 'tankafo@mail.ru',
//     password: 'gfgfikzgf'
// })

// me.save().then((me)=> {
//     console.log(me);
// }).catch((er)=> {
//     console.log('Error', er);
// })

// const Task = mongoose.model('Task',{
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     completed:{
//         type: Boolean,
//         default: false,
//     }
// })

// const task = new Task({
//     description:"   to visit English class  ",
//     completed: true,
// })

// task.save().then((task)=>{
//     console.log(task);
// }).catch((e)=> {
//     console.log("Error", e)
// })
