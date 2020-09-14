const express = require('express');
const projectModel = require('./projectModel');

const router = express.Router();

//Create
router.post("/",  (req, res) => {
    const projectInfo = req.body

    projectModel
        .insert(projectInfo)
        .then((project) => {
            res.status(201).json([{ message: "Project was created.", project }])
        });
});

//Read
router.get("/", (req, res) => {
    projectModel
        .get(req.id)
        .then(e => {
            res.status(200).json(e)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting projects." })
        });
});

router.get("/:id", (req, res) => {
    projectModel
        .get(req.params.id)
        .then(e => {
            res.status(200).json(e)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting project." })
        });
});



//Update
router.put("/:id", (req, res) => {
    const projectInfo = req.body;
    const { id } = req.params

    projectModel
        .update(id, projectInfo)
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

//Delete
router.delete("/:id", (req, res) => {
    const { id } = req.params

    projectModel
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