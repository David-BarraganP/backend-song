const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");


//table pivot

Genre.belongsToMany(Artist, {through: 'genreArtist'})
Artist.belongsToMany(Genre, {through: 'genreArtist'})

Song.belongsToMany(Artist, {through: 'songArtist'})
Artist.belongsToMany(Song, {through: 'songArtist'})

Song.belongsToMany(Genre, {through: 'songGenre'})
Genre.belongsToMany(Song, {through: 'songGenre'})


Album.belongsTo(Artist) // Album -> artistId
Artist.hasMany(Album)

Song.belongsTo(Album) // Song -> albumId
Album.hasMany(Song)

// Song.belongsTo(Genre) // Song -> 
// Genre.hasMany(Song)