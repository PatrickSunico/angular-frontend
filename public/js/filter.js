
app.filter('currencyFilter', function() {

  return function(listings, priceInfo) {
    var filtered = [];
    var min = priceInfo.min;
    var max = priceInfo.max;

    angular.forEach(listings, function(listing){

      // console.log(listing.image);
        if(listing.price >= min && listing.price <= max) {
          filtered.push(listing);
        }
    });

    return filtered;
  }
});
