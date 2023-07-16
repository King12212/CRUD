const connection = require('../config/database')
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require('../services/CRUDService')

const getHomepage =async (req, res)=>{
    //console.log(">>> check rows:" ,results)
    let results = await getAllUsers()
    return res.render('home.ejs',{listUsers: results}) 
}
const getABC = (req, res)=> {
    res.send('Check ABC')
}
const getHoiDanIT = (req, res)=> {
    // res.send('Check abcd')
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email =  ", email, 'name = ', name ,'city = ',city)

    // let{email, name, city} = req.body
    // connection.query(
    //     `INSERT INTO 
    //     Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results){
    //         console.log(results)
    //         res.send('Created user succeed!')
    //     }
    // );
    
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city] 
    );

    console.log(">>> check result: ", results)
    res.send('Created user succeed!')
    // connection.query(
    //     'select * from Users u',
    //     function(err, results, fields){
    //       console.log(">>>result= ",results);
    //       //console.log(">>>fields= ",fields);
    //     }
    // )

    //const [results, fields] =await connection.query('select * from Users u')
    
    
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const  getUpdatePage = async (req, res) => {
    // console.log(">>> req.params:",req.params) 
    //console.log(">>> check results ", results)
    const userId = req.params.id
    let user =await getUserById(userId)
    res.render('edit.ejs',{userEdit : user}); 
}

const postUpdateUser = async (req, res) => {
    // can id de xac dinh nguoi dung can thay doi
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId)

    //console.log(">>> check result: ", results)
    // res.send('Updated user succeed!')
    res.redirect('/')
   
}
const postDeleteUser =async(req, res)=> {
    
    const userId = req.params.id
    let user =await getUserById(userId)
    res.render('delete.ejs',{userEdit : user})
}

const postHandleRemoveUser = async(req,res)=>{
    const id = req.body.userId;

    await deleteUserById(id)
    
    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser,
    postHandleRemoveUser
}