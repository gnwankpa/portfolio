const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.set('debug', true);

const PositionSchema = new Schema({
    // very important to store dates in Date format to allow for lighter queries on backend

    maxTime: {type: Date},
    minTime:{type:Date},
    symbol:{type: String},
    budget:{type:Number},
    qty:{type:Number},
    profitGoal:{type:Number},
    stopLoss:{type:Number},
    currentSMA250:{type:Number},
    currentSMA200:{type:Number},
    stopLoss:{type:Number},
    paper:{type:Boolean},
    side:{type:String},
    strategy:{type:String},
    createdAt: {
        type: Date,
        default: Date.now
      },

});

module.exports = mongoose.model('Position', PositionSchema);