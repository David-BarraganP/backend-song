const catchError = require('../utils/catchError');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

const getAll = catchError(async(req, res) => {
    const results = await Album.findAll({include: [Artist]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Album.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Album.findByPk(id, {include: [Artist]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Album.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    
    const album = await Album.findByPk(id)
    if(!album) return res.sendStatus(404);

    const result = album.update(req.body)
    return res.send(result)
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}