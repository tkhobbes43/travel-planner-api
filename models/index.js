const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
    // dfine the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // define an alias for when data is retrieved
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
    // define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    //  devine an alias for when data is retrieved
    as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };