var waypoint = new Waypoint({
    element: $('#project'),
    handler: function (direction) {
        if (direction == 'down') {
            $('header').addClass('invert');
        } else {
            $('header').removeClass('invert');
        }
    },
    offset: $('header').innerHeight(),
});
