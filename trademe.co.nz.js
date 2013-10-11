// in list view some items do not have images because the user did not pay
// to have the image show up in the list.
// This script grabs the image from the details view and inserts it so you
// browse visually!


if(window.location.pathname.match(/^\/Browse/)){
    $('.listingImage a').each(function(){
        var $this = $(this);
        if($this.find('img').attr('src').match('hasPhoto')){
            $this.load($this.attr('href')+' #mainImgLink', function(){
                $(this).find('img').css({height: '118px', border: '1px solid #060'});
            });
        }
    });
}
