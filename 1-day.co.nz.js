/*
 * Make sold out items still clickable so you can see what they were
 */
$('.sold_home_product, .product_sold').css('pointer-events', 'none');


/*
 * Demote items that I'm not interested in
 */

// Demote items with these words
var whole_words = [
    'golf',
    'fishing',
    'soccer',
    'pet',

    'toys?',
    'fisher price',
    'playmobil',
    'barbies?',
    'baby.?s?',
    'children.?s?',
    'kid.?s?',
    'infant.?s?',
    'toddler.?s?',
    'teething',
    'disney',
    'nappies',
    'huggies',

    'mestige',
    'handbags?',
    'purse',
    'makeup',
    'revlon',
    'nail polish',
    'maybelline',
    'l.oreal',
    'mascara',
    'beauty',
    'bra',
    'nail art',
    'earings?',
    'necklace',
    'blouse',
    'fragrences?',
    'ladies',
    'women.?s?',
    'wmns?',
    'yoga',
    'skinni',
    'royal doulton',
    'massager',

    'fat',
    'candles?',
    '533ml'  // some shitty drink bottles they sell
];

// Demote items BEGINNING with these words
var word_beginnings = [
    'reflexolog'  // Quackery
];

// Demote items ENDING with these words
var word_endings = [
    'bolica'  // Supliments like "anabolica"
];

var whole_words_regex = RegExp('\\b(' + whole_words.join('|') + ')\\b', 'ig');
var word_beginnings_regex = RegExp('\\b(' + word_beginnings.join('|') + ')', 'ig');
var word_endings_regex = RegExp('(' + word_endings.join('|') + ')\\b', 'ig');

var catalogue = $('.catalogue');

$('.catalogue-product').each(function(){
    var $this = $(this),
        text = $this.find('.title').text();

    // Sold out
    if($this.find('.sold_home_product').length){
        $this.appendTo(catalogue).css('opacity', 0.3);
    }

    // whole words
    if(text.match(whole_words_regex)){
        $this.appendTo(catalogue).css('opacity', 0.3);
    }
    // word beginnings
    if(text.match(word_beginnings_regex)){
        $this.appendTo(catalogue).css('opacity', 0.3);
    }
    // word endings
    if(text.match(word_endings_regex)){
        $this.appendTo(catalogue).css('opacity', 0.3);
    }
});
