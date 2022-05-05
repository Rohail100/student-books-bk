const router = require('express').Router()
//initialize knex
const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig)

//get all books
router.get('/',(req,res)=>{
    knex.select().table('books')
    .then((data)=>{
      res.json(data)
    })
})

//get one book
router.get('/:id',(req,res)=>{
    knex.select().table('books').where('id', req.params.id)
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

//delete a book
router.delete('/:id',(req,res)=>{
    knex.from('books').where('id', req.params.id).del()
    .then((data)=>{
      res.json(data)
    })
})



module.exports = router