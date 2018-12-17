
  function initMap() {

    // SETTINGS AND IMAGE FOR ICONS
    function addFire(coords) {
      let marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: fireIcon
      })
    }

    function addAmb(coords) {
      let marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: ambIcon
      })
    }
    let fireIcon = {
      url: "https://cdn.emojidex.com/emoji/seal/fire.png?1466441570", // url
      scaledSize: new google.maps.Size(25, 25), // scaled size
      origin: new google.maps.Point(0, 0), //
      anchor: new google.maps.Point(0, 0) //
    }

    let ambIcon = {
      url: "https://images.emojiterra.com/google/android-pie/512px/1f691.png", // url
      scaledSize: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0, 0), //
      anchor: new google.maps.Point(0, 0) //
    }
////////////////

    //OPTIONS FOR THE MAP ITSELF
    let options = {
      zoom: 15,
      center: {
        lat: 40.0150,
        lng: -105.2705,
        mapTypeId : google.maps.MapTypeId.ROADMAP

      }
    }
    let map = new google.maps.Map(document.getElementById('map'), options)


    //
    //// You can copy and paste this guy to add more fires!
    addFire({
      lat: 40.019500,
      lng: -105.280622
    })

  // console.log(do_something())
  ////// do_something is not defined
  ////// begin experimental code
  //////
  function geo_success(position) {
    addAmb({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  console.log(position.coords.latitude, position.coords.longitude)
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);


}
//// experimental code end
