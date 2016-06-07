var data = [{
  "id": 1,
  "type": "Condo",
  "price": 20069,
  "address": "877 Trailsway Hill",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-1",
  "link": "link"
}, {
  "id": 2,
  "type": "Apartment",
  "price": 34645,
  "address": "788 Annamark Lane",
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-2",
  "link": ""
}, {
  "id": 3,
  "type": "House",
  "price": 62292,
  "address": "90 Onsgard Junction",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-3",
  "link": ""
}, {
  "id": 4,
  "type": "Duplex",
  "price": 38274,
  "address": "901 Shopko Drive",
  "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-4",
  "link": ""
}, {
  "id": 5,
  "type": "House",
  "price": "$73273.77",
  "address": "245 Mitchell Place",
  "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-5",
  "link": ""
}, {
  "id": 6,
  "type": "Condo",
  "price": 11208.28,
  "address": "8 Calypso Crossing",
  "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-6",
  "link": ""
}, {
  "id": 7,
  "type": "Apartment",
  "price": 55726,
  "address": "74734 Forest Dale Hill",
  "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-7",
  "link": ""
}, {
  "id": 8,
  "type": "Apartment",
  "price": 19969,
  "address": "41 Logan Plaza",
  "description": "Sed accumsan felis.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-8",
  "link": ""
}, {
  "id": 9,
  "type": "Condo",
  "price": 53240,
  "address": "14559 Dennis Alley",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-9",
  "link": ""
}, {
  "id": 10,
  "type": "Duplex",
  "price": 6642,
  "address": "3704 Goodland Crossing",
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  "details": {
    "bedrooms": 4,
    "bathrooms": 8,
    "area": 19010
  },
  "image": "house-10",
  "link": ""
}];


var obj = {};
var transfer;

obj.fetch = function(data, callback) {
    callback(data);
    return transfer;
};

obj.fetch(data, function(result) {
  transfer = result;
});


// module.exports = obj;

module.exports = data;
