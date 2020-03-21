
$(function () {

    let card = $('.card');
    let cardHeader = $('.card-header');
    let cardImg = $('.card-img');
    let cardText = $('.card-text');
    let aCardFooter = $('.card-footer a');

    card.hide();
    card.fadeIn(2000);

    cardHeader.hide();
    cardHeader.fadeIn(3000);

    cardImg.attr('style', 'left: 0px;');
    cardImg.attr('style', 'width: 100%;');
    cardImg.animate({
        width: '60%'
    }, 1000);

    cardText.attr('style', 'left: 0px;font-family: teko');
    cardText.hide();
    cardText.fadeIn(2000);
    cardText.animate({
        fontSize: '20px'
    }, 1000);

    aCardFooter.hide();
    aCardFooter.fadeIn(2000, function(){
        aCardFooter.animate({
            left: '0px',
            opacity: '1'
        }, 2000, function(){
            aCardFooter.fadeIn(1000);
        });
    });
    
});