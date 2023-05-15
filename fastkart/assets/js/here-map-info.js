
function addMarkerToGroup(group, coordinate, html) {
    var marker = new H.map.Marker(coordinate, { icon: icon });
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}
var yourMarker = './assets/icons/png/map-pin.png';
var icon = new H.map.Icon(yourMarker);
var markersData = {
    'location': [
        {
            name: 'you order',
            location_latitude: 25.222578,
            location_longitude: 55.319011,

        },
    ]
};
function addInfoBubble(map) {
    var group = new H.map.Group();
    map.addObject(group);
    window.addEventListener('resize', () => map.getViewPort().resize());

    for (var key in markersData)
        markersData[key].forEach(function (item) {
            addMarkerToGroup(group, { lat: item.location_latitude, lng: item.location_longitude },

            );
        })
}
var platform = new H.service.Platform({
    'apikey': 'ElOm77yzgasZvSGlnpiqwE-D5sbtTwgMYzSFiBV-6pc'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
    center: { lat: 25.222578, lng: 55.319011 },
    zoom: 14,
    pixelRatio: window.devicePixelRatio || 1
});
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

addInfoBubble(map);
























