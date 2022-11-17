const mongoose = require('mongoose')

const TopArtistsSchema = new mongoose.Schema({
    userId: String,
    topArtistsOld: Array,
    topArtistsOldTimestamp: Date,
    topArtistsNew: Array,
    topArtistsNewTimestamp: Date,
})

const topArtistsShort = mongoose.model('TopArtistsShort', TopArtistsSchema)
const topArtistsMedium = mongoose.model('TopArtistsMedium', TopArtistsSchema)
const topArtistsLong = mongoose.model('TopArtistsLong', TopArtistsSchema)

module.exports = { topArtistsShort, topArtistsMedium, topArtistsLong }