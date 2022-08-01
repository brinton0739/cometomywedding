const User = require('./User');
const Guest = require('./Guest');
const Wedding = require('./Wedding');
const Registry = require('./Registry');
const Event = require('./Event');


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

module.exports = { User, Guest, Wedding, Registry, Event };
