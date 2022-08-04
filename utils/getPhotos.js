const { Photos } = require('../models/index');

async function getPhotos(wed) {
    const photosData = await Photos.findAll({
        where: {
            wedding_id: wed
        },
    });
    return photosData.map(photo => {
        return photo.get({ plain: true });
    });
}

module.exports = getPhotos;