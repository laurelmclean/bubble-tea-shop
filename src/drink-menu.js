import data from './drink-menu.json';

// loops over the data and adds a new id property to each object.
data.forEach((obj, i) => {
    obj.id = i
})

export default data;