var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
    name: {type: String, required: true, min: 3, max: 100},
});

// Virtual Genre's URL
GenreSchema.virtual('url')
.get(function(){
    return '/catalog/book/' + this._id;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);