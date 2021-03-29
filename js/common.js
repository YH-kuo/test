
$(document).ready(function() {
    // GoTop按鈕時的事件
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.go-top').css('opacity', '1');
        } else {
            $('.go-top').css('opacity', '0');
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    })
    // GoTop按鈕時的事件  END

    // 經歷內容展開
    $('.list').find('span').hide();
    $('.list').click(function(event) {
        $(this).find('span').toggle(150);
    })


    // 履歷icon跟隨
    "use strict";
  
    var elements = document.getElementsByClassName('icon');

    for (var i = 0; i < elements.length; i++) {
      new hcSticky(elements[i], {
        stickTo: elements[i].parentNode,
        top: 20,
        bottomEnd: 30
      });
    }


    //篩選套件isotope

$(document).ready(function() {
    // external js: isotope.pkgd.js
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
        }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });
    

    });

});