const express = require('express');

require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req,res,next)=> {
//     if(req.method == "GET"){
//         res.send('Get request is disabled')
//     }else {
//         next();
//     }
// })

// app.use((req,res,next)=> {
//     res.status(503).send('Status 503. Try later');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, ()=> {
    console.log('Server is up on port ' + port);
})

// const jwt = require('jsonwebtoken');

// const bcrypt = require('bcryptjs');
// const myFucntion = async()=> { 
//     const token = jwt.sign({_id:'nnm9hjk'}, 'thiistest', {expiresIn:'7 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'thiistest');
//     console.log(data);
//     // const password = 'gfgfikzgf';
//     // const hashedPassword = await bcrypt.hash(password, 8);
//     // console.log(password);
//     // console.log(hashedPassword);

//     // const isMatch = await bcrypt.compare('gfgfikzgf', hashedPassword);
//     // console.log(isMatch)
// }
// myFucntion();

// const pet = {
//     name:'Bonya'
// }

// pet.toJSON = function(){
//     console.log(this);
//     return this;
// }

// console.log(JSON.stringify(pet))


// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async()=> {
//     // const task = await Task.findById('5f14125b13d3dd85edc4310c');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);
//     const user = await User.findById('5f140ff4632cd485055ad826');
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()


// const multer = require('multer');

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word'))
//         }
        
//         cb(undefined, true);
//     }
// })

// const errorMiddleware = (req, res, next)=> {
//     throw new Error('From my middleware');
// }
// app.post('/upload', upload.single('upload'), (req, res)=> {
//     res.send()
// }, (error, req, res, next)=> {
//     res.status(400).send({error: error.message});
// });