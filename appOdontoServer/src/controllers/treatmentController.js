const Treatment = require('../models/treatment')

exports.createTreatment = async (req, res) => {
    try {
        console.log(req.body)
        const treatment = new Treatment(req.body)
        await treatment.save()
        res.send(treatment)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al crear el tratamiento')
    }
}

exports.getTreatments = async (req, res) => {
    try {
        const treatments = await Treatment.find()
        res.json(treatments)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener los tratamientos')
    }
}

exports.getTreatment = async (req, res) => {
    try{
        const treatment = await Treatment.findById(req.params.id)

        if(!treatment){
            res.status(404).json({msg: 'No existe el tratamiento'})
        }
        res.json(treatment)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener el tratamiento')
    }
}

exports.updateTreatment = async (req, res) => {
    try {
        const { name, description } = req.body
        let treatment = await Treatment.findById(req.params.id)
        if(!treatment){
            res.status(404).json({msg: 'No existe el tratamiento'})
        }

        treatment.name = name
        treatment.description = description

        treatment = await Treatment.findOneAndUpdate({ _id: req.params.id }, treatment, { new:true })
        res.json(treatment)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el tratamiento')
    }
}

exports.deleteTreatment = async (req, res) => {
    try {
        const treatment = await Treatment.findById(req.params.id)
        if(!treatment){
            res.status(404).json({msg: 'No existe el tratamiento'})
        }
        await Treatment.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Tratamiento eliminado' })
    
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al eliminar el tratamiento')
    }
}