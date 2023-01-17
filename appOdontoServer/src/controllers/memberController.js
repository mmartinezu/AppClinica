const Member = require('../models/member')

exports.createMember = async (req, res) => {
    try {
        console.log(req.body)
        const member = new Member(req.body)
        await member.save()
        res.send(member)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al crear el miembro')
    }
}

exports.getMembers = async (req, res) => {
    try {
        const members = await Member.find()
        res.json(members)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener los miembros')
    }
}

exports.getMember = async (req, res) => {
    try{
        const member = await Member.findById(req.params.id)

        if(!member){
            res.status(404).json({msg: 'No existe el miembro'})
        }
        res.json(member)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener el miembro')
    }
}

exports.updateMember = async (req, res) => {
    try {
        const { name, cmp, age, title, university, speciality } = req.body
        let member = await Member.findById(req.params.id)
        if(!member){
            res.status(404).json({msg: 'No existe el miembro'})
        }

        member.name = name
        member.cmp = cmp
        member.age = age
        member.title = title
        member.university = university
        member.speciality = speciality

        member = await Member.findOneAndUpdate({ _id: req.params.id }, member, { new:true })
        res.json(member)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el miembro')
    }
}

exports.deleteMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id)
        if(!member){
            res.status(404).json({msg: 'No existe el miembro'})
        }
        await Member.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Miembro eliminado' })
    
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error al eliminar el miembro')
    }
}