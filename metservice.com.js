// Put a dot on the rain radar where Hamilton is
// Not reliable

if(window.location.pathname == "/maps-radar/rain-radar/bay-of-plenty"){

    $(document.body).append(
        $('<div>').css({
            'background': '#F00',
            'width': 3,
            'height': 3,
            'position': 'absolute',
            'top': 661,
            'left': '50%',
            'margin-left': -236,
            'z-index': 99999
        })
    );
}
