//set global resize window variable
var resizeCount = false;

$(document).ready(function() {

    //get first child src
    var firstChild = $('.thumbnails li:first-child').find('img').attr('src')

    //change image placeholer to the first image
    $('.imagePlaceholder img').attr('src', firstChild);

    //click event on the thumbnail to change main image
    $("body").on("click", ".js-thumbnail", function(e) {
        e.preventDefault();

        var src = $(this).children("img").attr('src');

        $('.imagePlaceholder img').attr('src', src);

    })

    //click event to make the image popout fill size
    $('.js-popout').click(function(e) {
        e.preventDefault();
        $('.imagePlaceholder').addClass('popout')

    })


    //run slider function
    slider()




});

$(window).resize(function() {
    //set resize variable to true so i know the page has been resized
    resizeCount = true;
    
    //put the slider back to position one
    $('.panel-inner').css({
        "left": '0'
    });
});

function slider() {

    var count = 0;
    var slider = $('.panel-inner');
    var firstLi = $('.panel-inner li:first-child').html()
    $(slider).append('<li>'+firstLi+'</li>');
    //position first child
    var PFC = $('.panel-inner:first-child').position();
    //left position of first child
    var LPFC = PFC.left;
    //work out how many thumbnails their are
    var thumbnails = $('.panel-inner li').length;
    //work out the width - the two navigation buttons
    var containerWidth = parseInt($('.container').width() - 40);
  
    var maxcount = false;
    var mincount = false;
    // work out what number to stop at when scrolling
    var stopCount = Math.floor(thumbnails - (containerWidth / 100))

    
    //slider click
    $('.button a').click(function(e) {
        e.preventDefault();

       if (resizeCount) {
         count = 0;
         maxcount = false;
         mincount = false;
         containerWidth = parseInt($('.container').width() - 40);
          stopCount = Math.floor(thumbnails - (containerWidth / 100))
         resizeCount = false;
         
       }

        if ($(this).data('direction') == 'right') {
            if (!maxcount) {
                count = count + 1;
            }
         

            if (count == stopCount) {
                if (!maxcount) {
                    $(slider).animate({
                        "left": '-=100'
                    });
                    $('.rightBtn').addClass('disabled')
                    maxcount = true;

                    return false;
                }
            } else {
                



                $(slider).animate({
                    "left": '-=100'
                });
                $('.leftBtn').removeClass('disabled')
                 mincount = false;
                return false;
            }


        } else {
            if (!mincount) {
                count = count - 1;
            }
            console.log('count = ' + count)

            if (count == 0) {
                if (!mincount) {
                    $('.leftBtn').addClass('disabled')
                    $(slider).animate({
                        "left": '+=100'
                    });
                    mincount = true;

                    return false;
                }
            } else {
                $(slider).animate({
                    "left": '+=100'
                });
                $('.rightBtn').removeClass('disabled')
                maxcount = false;
            }

        }
    })
}