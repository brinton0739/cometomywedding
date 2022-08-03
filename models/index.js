const User = require('./User');
const Guest = require('./Guest');
<<<<<<< HEAD
=======
const Location = require('./Location');
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b
const Wedding = require('./Wedding');
const Registry = require('./Registry');
const Event = require('./Event');
const Signature = require('./Signature');


User.hasMany(Guest, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Wedding.hasMany(Guest, {
    foreignKey: 'wedding_id',
    onDelete: 'CASCADE'
});

Wedding.hasOne(Registry, {
    foreignKey: 'wedding_id'
});

Guest.belongsTo(User, {
    foreignKey: 'user_id'
});

Guest.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

Registry.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

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

module.exports = { User, Guest, Wedding, Registry, Event, Signature };
