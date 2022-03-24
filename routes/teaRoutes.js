import express from 'express';
import teas from './../teadata.js';

//declare the router module 
const router = express.Router();

//using GET (get list of teas)
router.get('/', (req, res) => {
    //status code 200 OK     //send the teas converted into json
    return res.status(200).json(teas);
});

//using GET request with id parameter (request parameter)
router.get('/:id', (req, res) => {
    //look for the tea in the tea array that has this id
    const tea = teas.find(tea => tea.id == req.params.id);

    //No tea with such id 
    if(!tea){
     return res.status(404).json("Tea not found");
    }

    //everything went ok (status code 200) and sen dthe tea we found in the array. 
    return res.status(200).json(tea);

})

//POST request to create a new tea
router.post('/add', (req ,res) => {

    console.log("the body is", req.body)
    //create a new tea object
    const tea = {
        id:req.body.id,
        name:req.body.name
    }
    //enter the tea inside the array.
    teas.push(tea);

    return res.status(201).json({newlist:teas})

})

//PATCH request to update the name of the tea. 
router.patch('/update/:id', (req, res) => {
    //look for the tea in the tea array that has the :id from the entry point. 
    const tea = teas.find(tea => tea.id == req.params.id);

    if(!tea){
        //sending 404 we can't find the resource (the tea)
        return res.status(404).json("Tea not found");
    }
    //update the name of the tea with our body parameter
    tea.name = req.body.name;

    //return status code 200
    return res.status(200).json({updatedlist:teas});
});

//DELETE request 
router.delete('/delete/:id', (req, res) => {
    //look for the tea in the tea array that has the :id from the entry point. 
    const tea = teas.find(tea => tea.id == req.params.id);
 
    if(!tea){
     //sending 404 we can't find the resource (the tea)
     return res.status(404).json("Tea not found");
    }
 
    //remove the tea from the array 
    const index = teas.indexOf(tea);
    //removes the element in the array at the index we found the tea. 
    teas.splice(index,1)
 
    //return a response statuscode 200 it worked out and show the new list of teas
    return res.status(200).json(teas);
 
 });



export default router;
