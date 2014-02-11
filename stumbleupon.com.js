var frame = $('#tb-stumble-frame'),
    src = frame.attr('src');

// most SU sponsored sites are full of bullshit content for the sake
// or content. If site is in this list, stumble again.
var shit_sites = [
    'internetevolution.com',
    'digitalcanvasretail.com'
];
var shit_sites_regex = RegExp(shit_sites.join('|'), 'ig');
if(src.match(shit_sites_regex)){
    window.location.href = "http://www.stumbleupon.com/to/stumble/go/";
}

// Remove stumble upon toolbar from photos so they autoscale
if(frame.length && src.match(/jpg$/)){
    window.location.href = src;
}
