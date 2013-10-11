// Demote all the _package functions littering the chef docs ToC

$('tr').each(function(){
    var $this = $(this);
    var table = $this.parent();
    if($this.find('a.reference.internal').text().substr(-8) == "_package"){
        $this.appendTo(table).css({opacity: 0.6});
    }
});
