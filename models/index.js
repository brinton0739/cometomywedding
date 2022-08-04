const User = require('./User');
const Guest = require('./Guest');
const Wedding = require('./Wedding');
const Event = require('./Event');
const Photos = require('./Photos')
const Signature = require('./Signature');


User.hasMany(Guest, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Wedding.hasMany(Guest, {
    foreignKey: 'wedding_id',
    onDelete: 'CASCADE'
});

Guest.belongsTo(User, {
    foreignKey: 'user_id'
});

Guest.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

Wedding.hasMany(Photos, {
    foreignKey: 'wedding_id',
    onDelete: 'CASCADE'

})
Guest.hasMany(Photos,{
    foreignKey: 'guest_id'
})

Photos.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
})

Photos.belongsTo(Guest, {
    foreignKey: 'guest_id'

})

Guest.hasOne(Signature, {
    foreignKey: 'guest_id',
    onDelete: 'CASCADE'
});

Wedding.hasMany(Signature, {
    foreignKey: 'wedding_id',
    onDelete: 'CASCADE'
});

Signature.belongsTo(Guest, {
    foreignKey: 'guest_id'
});

Signature.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

module.exports = { User, Guest, Wedding, Photos, Event, Signature };
