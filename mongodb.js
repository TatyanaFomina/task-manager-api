// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectinURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'


MongoClient.connect(connectinURL, {useNewUrlParser: true}, (error, client) => {

if(error) {
     return console.log('Unable to connect to database');
}
    
    const db = client.db(databaseName);


    db.collection('tasks').deleteOne({
        description : "cook a dinner"
    }).then((result)=> {console.log(result)
    }).catch((error)=> {
        console.log(error);
    })
    // db.collection('users').deleteMany({
    //     age:23
    // }).then((result)=> {
    // console.log(result)
    // }).catch((error)=> {
    //     console.log(error);
    // })
    // db.collection('tasks').updateMany({
    //         completed: false
    //     }, {
    //         $set:{
    //             completed:true
    //         }
    //     }
    // ).then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // })
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5ef1aa249e53bb4c78b579cd')
    // }, {
    //         $inc: {
    //             age: 3
    //         }
    // })

    // updatePromise.then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // })


    // db.collection('tasks').findOne({_id: new ObjectID('5ef1ad717b91384e306d37e4')}, (error, task)=> {
    //     if(error){
    //         return console.log("Unable to watch");
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({completed:false}).toArray((error, tasks)=>{
    //     if(error) {
    //         return console.log("Not found");
    //     }
    //     console.log(tasks);
    // })

    // db.collection('users').find({age:23}).count((error, count)=>{
    //     if(error) {
    //         return console.log("Not found");
    //     }
    //     console.log(count);
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name:'Lena',
    //     age: 42,
    // }, (error, result)=> {
    //     if(error) {
    //         return consile.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //     name:'Vadya',
    //     age: 25,
    //     }, {
    //     name:'Nastya',
    //     age: 23,
    //     }
    // ],(error, result)=> {
    //     if(error) {
    //         return consile.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'read the book',
    //         completed: true,
    //     }, {
    //         description: 'do a shopping',
    //         completed: false,
    //     }, {
    //         description: 'cook a dinner',
    //         completed: false,
    //     },
    // ], (error, result)=> {
    //     if(error) {
    //         return console.log("Unable to insert dbTask")
    //     }
    //     console.log(result.ops);
    // })

    
})