const User = require('./User');
const Guest = require('./Event');
const Location = require('./Location');
const Wedding = require('./Wedding');
const Registry = require('./Registry');
const Event = require('./Event');
const Photos = require('./Photos')


User.hasMany(Guest, {
    foreignKey: 'guest_id',
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

// Wedding.hasMany(Photos, {
//     foreignKey: 'wedding_id',
//     onDelete: 'CASCADE'

// })
// Guest.hasMany(Photos,{
//     foreignKey: 'guest_id'
// })

// Photos.belongsTo(Wedding, {
//     foreignKey: 'wedding_id'
// })

// Photos.belongsTo(Guest, {
//     foreignKey: 'guest_id'

// })

// Location.hasMany(Event, {
//     foreignKey: 'location_id',
//     onDelete: 'CASCADE'
// });

// Event.hasOne(Location, {
//     foreignKey: 'location_id'
// });

Registry.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

module.exports = { User, Guest, Location, Wedding, Registry, Event };
