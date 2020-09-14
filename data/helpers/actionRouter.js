const express = require('express');
const actionModel = require('./actionModel');

const router = express.Router();

//CREATE
router.post("/",  (req, res) => {
    const actionInfo = req.body

    actionModel
        .insert(actionInfo)
        .then((action) => {
            res.status(201).json([{ message: "An action was created.", action }])
        });
});

//READ
router.get("/", (req, res) => {
    actionModel
        .get(req.id)
        .then(e => {
            res.status(200).json(e)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving actions." })
        });
});

router.get("/:id", (req, res) => {
    actionModel
        .get(req.params.id)
        .then(e => {
            res.status(200).json(e)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting action." })
        });
});

//UPDATE
router.put("/:id", (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params

    actionModel
        .update(id, actionInfo)
        .then(e => {
            if(e){
                res.status(200).json({ message: "The project has been updated." })
            } else {
                res.status(404).json({ message: "The project could not be updated, project not found." })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "There was an error updating the project." })
        });
});

//DELETE
router.delete("/:id", (req, res) => {
    const { id } = req.params

    actionModel
        .remove(id)
        .then(e => {
            if(e > 0){
                res.status(200).json({ message: "The project has been deleted." })
            } else {
                res.status(404).json({ message: "The project was not found." })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error deleting the project." })
        });
});

module.exports = router;