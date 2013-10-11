// convert cals to Kilojoules

$('.calories').each(function(){
    var $this=$(this);
    var cals = parseInt($this.find('.value').text().split(' ')[0]);
    var kj = cals * 4.190;
    $this.find('.value').text(Math.round(kj*100)/100 + ' kJ');
    $this.find('.label').text('Kilojoules');
});
