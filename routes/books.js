const router = require('express').Router()
//initialize knex
const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig)

//get all books
router.get('/',(req,res)=>{
    knex.select('books.id', 'name','borrowed_by', 'author', knex.raw('to_char("borrow_date", \'MM-DD-YYYY\') as "borrow_date"'), 
    knex.raw('to_char("return_date", \'MM-DD-YYYY\') as "return_date"'),
    knex.raw('concat("fname", \' \',"lname") as "student_name"'))
    .table('books').leftJoin('students','students.id','books.borrowed_by')
    .then((data)=>{
      res.json(data)
    })
})

//get one book
router.get('/:id',(req,res)=>{
    knex.select('*',knex.raw('to_char("borrow_date", \'YYYY-MM-DD\') as "borrow_date"'),
    knex.raw('to_char("return_date", \'YYYY-MM-DD\') as "return_date"'))
    .table('books')
    .where('id', req.params.id)
    .then((data)=>{
      res.json(data[0])
    })
})

//Add new Book
router.post('/',(req,res)=>{
    let toAdd = req.body;
    
    // if(!validate(toAdd))
    //   throw new Error('Invalid')
    
    knex.insert(toAdd).into('books')
    .then((data)=>{
        res.json(data)
    })
})

//update a book
router.put('/:id',(req,res)=>{
    let updatedValues = req.body;
    knex.from('books').update(updatedValues).where('id', req.params.id)
    .then((data)=>{
        res.json(data)
    })    
})

//delete a book
router.delete('/:id',(req,res)=>{
    knex.from('books').where('id', req.params.id).del()
    .then((data)=>{
      res.json(data)
    })
})



module.exports = router