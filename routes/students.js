const router = require('express').Router()
//initialize knex
const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig)

//get all students
router.get('/',(req,res)=>{
    knex.select().table('students')
    .then((data)=>{
      res.json(data)
    })
})

//get one student
router.get('/:id',(req,res)=>{
    knex.select().table('students').where('id', req.params.id)
    .then((data)=>{
      res.json(data[0])
    })
})

//Add new student
router.post('/',(req,res)=>{
    let toAdd = req.body;
    
    // if(!validate(toAdd))
    //   throw new Error('Invalid')
    
    knex.insert(toAdd).into('students')
    .then((data)=>{
        res.json(data)
    })
})

//update a student
router.put('/:id',(req,res)=>{
    let updatedValues = req.body;
    knex.from('students').update(updatedValues).where('id', req.params.id)
    .then((data)=>{
        res.json(data)
    })    
})

//delete a student
router.delete('/:id',(req,res)=>{
    //updating books before deleting student
    const borrowed_by=null
    knex.from('books').update({borrowed_by}).where('borrowed_by', req.params.id)
    .then(()=>{
        knex.from('students').where('id', req.params.id)
        .del()
        .then((data)=>{
          res.json(data)
        })
    })    
})




module.exports = router