$('#quote').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Quote for ' + recipient)

})




$('.selectpicker').selectpicker();



var slideRight = new Menu({
    wrapper: '.menu-inner',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

var slideRightBtn = document.querySelector('#c-button--slide-right');

slideRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideRight.open();
});


$("#top-m").click(function() {
    $('html,body').animate({
            scrollTop: $("#top-h").offset().top
        },
        2000);
});


$("#aboutus-m").click(function() {
    $('html,body').animate({
            scrollTop: $("#aboutus").offset().top-80
        },
        2000);
});


$("#expertise-m").click(function() {
    $('html,body').animate({
            scrollTop: $("#expertise").offset().top-80
        },
        2000);
});

$("#locate-m").click(function() {
    $('html,body').animate({
            scrollTop: $("#map-body").offset().top-80
        },
        2000);
});


$("#contact-m").click(function() {
    $('html,body').animate({
            scrollTop: $("#contactus").offset().top-80
        },
        2000);
});


<!-- MAP -->


function init_map() {

    var mystyle = [{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#d3d3d3"
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "color": "#BABABA"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#b3b3b3"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }, {
            "weight": 1.8
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#d7d7d7"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ebebeb"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
            "color": "#a7a7a7"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#efefef"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#696969"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#737373"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#545454"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#d6d6d6"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {}, {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#dadada"
        }]
    }];

    var myLatlng = new google.maps.LatLng(34.699690, 135.494701);

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: myLatlng,
        zoom: 10,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    map.setOptions({
        styles: mystyle
    });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">BDJP</h1>' +
        '<div id="bodyContent">' +
        '<p>Level 19 Hilton Plaza West Office Tower <br/> 06-6133-5399</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'BDJP',
        icon: 'img/markery.png',
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', init_map);