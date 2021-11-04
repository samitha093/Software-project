const router = require('express').Router();
const testmdel = require('../models/test.model');



router.route('/er').get((req,res) => {
    testmdel.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});
router.route('/er/:id').get((req,res) => {
    testmdel.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});
router.route('/er').post((req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const status = req.body.status
    const newmodel = new testmdel({
        name,
        age,
        status
    });
    newmodel.save()
        .then(()=> res.status(200).json("data saved"))
        .catch(err => res.status(400).json(err))
    
});
router.route('/er/:id').put((req,res) => {
    const Name = req.body.name;
    const Age = req.body.age;
    const Status = req.body.status
    testmdel.findById(req.params.id)
        .then(data =>{
            data.name = Name;
            data.age = Age;
            data.status = Status;

            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});
router.route('/er/:id').delete((req,res) => {
    testmdel.findByIdAndDelete(req.params.id)
        .then(()=> res.status(200).json("data deleted"))
        .catch(err => res.status(400).json(err))
});

module.exports = router;