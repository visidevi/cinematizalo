$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(800);
   }, 2500);
});

function search(input) {

    $.getJSON(input, function(data){

        $.each(data, function(i,v) {
            // console.log(v);
            if ($.isArray(v)){
                console.log(v);
                $.each(v, function(j,value){
                    console.log(value.Title);
                    $('#titles').append(
                        "<a class='nombre" + j + "' href='#'>" + value.Title + "</a>"


                    );

                })
            }
        });

    });
};

$('#search').click(function(){
    var input = $('#userTitle').val();

    var movieSearch = 'http://www.omdbapi.com/?apikey=3a181f1c&s=' + input;
    console.log(movieSearch);
    search(movieSearch);


});

$('.nombre0').click(function(){
    console.log('hola');

});
//funcion carrusel
$(function() {
    $('.tooltip-carousel').popover();

    $('#carousel-example-generic').on('slide.bs.carousel', function() {
      $('.tooltip-carousel').popover('hide');
      $(this).find('.caraousel-tooltip-item.active').fadeOut(function() {
        $(this).removeClass('active');
      });
    });

    $('#carousel-example-generic').on('slid.bs.carousel', function() {
      var index = $(this).find('.carousel-inner > .item.active').index();
      $(this).find('.caraousel-tooltip-item').eq(index).fadeIn(function() {
        $(this).addClass('active');
      });
    });

    $('.tooltip-carousel').mouseenter(function() {
      $(this).popover('show');
    }).mouseleave(function() {
      $(this).popover('hide');
    });
  });
//funcion carrusel fin
