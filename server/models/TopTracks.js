const mongoose = require('mongoose')

const TopTracksSchema = new mongoose.Schema({
    userId: String,
    topTracksOld: Array,
    topTracksOldTimestamp: Date,
    topTracksNew: Array,
    topTracksNewTimestamp: Date,
})

const topTracksShort = mongoose.model('TopTracksShort', TopTracksSchema)
const topTracksMedium = mongoose.model('TopTracksMedium', TopTracksSchema)
const topTracksLong = mongoose.model('TopTracksLong', TopTracksSchema)

module.exports = { topTracksShort, topTracksMedium, topTracksLong }