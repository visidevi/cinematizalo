$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
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
