const catchError = require('../utils/catchError');
const Genre = require('../models/Genre');

const getAll = catchError(async(req, res) => {
const result = await Genre.findAll()
if(!result) res.sendStatus(404)
    return res.json(result)
});

const create = catchError(async(req, res) => {
    const result = await Genre.create(req.body)
        return res.status(201).json(result)
});

const getOne = catchError(async(req, res ) => {
    const {id} = req.params;

    const result = await Genre.findByPk(id)
    if(!result) res.sendStatus(404)
        return res.json(result)
});

const remove = catchError(async(req, res ) => {
    const {id} = req.params;

    const result = await Genre.destroy({where: {id}})
    if(!result) res.sendStatus(404)
        return res.send('deleted').status(204)
});

const update = catchError(async(req, res) => {
    const {id} = req.params;

    const genre = await Genre.findByPk(id)
    if(!genre) res.sendStatus(404)

    const result = genre.update(req.body)
        return res.send(result)

});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}