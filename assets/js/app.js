$( document ).ready(function() {

    $(this).scrollTop(0);

    setTimeout(function() {
      $('#splash').fadeOut(800);
    }, 2500);

   var movieRecomendations = 'https://www.omdbapi.com/?apikey=7c019c37&s=of%20a&y=2017';

   recomendations(movieRecomendations);
   new movieNet();

});

function ingreso(){

  $('.joinHeader').hide();
  $('.registry').hide();
  $('.userHeader').show();
  $('#recommended').show();
  $('#slide').show();

  $('#userHeader').show();
  $('footer').show();
  $('#titles').empty();

};

$('.smallLogo').click(function(){

  ingreso();
})

function search(input) {

    $.getJSON(input, function(data){

        $.each(data, function(i,v) {
            // console.log(v);
            if ($.isArray(v)){
                // console.log(v);
                $.each(v, function(j,value){
                    // console.log(value.Title);
                    var movieModal = 'https://www.omdbapi.com/?apikey=7c019c37&t=' + value.Title ;
                    getModal(movieModal);

                    //Data para obtener el Modal
                    function getModal(movieModal) {
                        $.getJSON(movieModal, function(data){
                          // console.log(data);
                          $.each(data, function(i,val) {
                                //console.log(data.Released);
                             $('#titles').append(

                            '<div  id="myModal' + j + '" role="dialog" class="modal fade"  tabindex="-'+ j + '" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                            '<div class="modal-dialog" role="document">' +
                            '<div class="modal-content">' +
                            '<div class="modal-header">' +
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                            '<h4 class="modal-title text-uppercase ">' + data.Title + '</h4>' +
                            '<p>' + data.Director + '</p>' +
                            '</div>' +
                            '<div class="modal-body row">' +
                            '<div class="col-md-4 ">' +
                            '<img class="img-fluid " src=" '+data.Poster +'" alt=""> ' +
                            '</div>' +
                            '<div class="col-md-5  col-md-offset-2">' +
                            ' <div class="col-md-12 ">'+
                            '<p><strong>Año: </strong>' + data.Year +
                            '</p>' +
                            '</div>' +
                            '<div class="col-md-12 ">'+
                             '<p><strong>Premios: </strong>' + data.Awards +
                              '</p>' +
                             '</div>' +
                              '<div class="col-md-12 ">'+
                             '<p><strong>Premios: </strong>' + data.Genre +
                              '</p>' +
                             '</div>' +
                             '<div class="col-md-12 plot ">'+
                              '<p>' + data.Plot+ '</p>' +
                             '</div>' +
                             '<div class="col-md-12 plot ">'+
                             '<button type="button" class="btn btn-link btn-lg paitingBottom  " aria-label="Left Align" onclick="saveProfile(&quot;' + data.imdbID + '&quot;, this)">' +
                               '<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir a Mi Librería' +
                             '</button>' +
                              '<button type="button" class="btn btn-link btn-lg paitingBottom " aria-label="Left Align">' +
                              '<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Ver más Tarde' +
                             '</button>' +
                             '</div>' +
                            '</div>' +
                             '</div>' +
                            '<div class="modal-footer">' +
                           ' <button type="button" class="btn btn-link paitingBottom" data-dismiss="modal">Cerrar</button>' +
                            '</div>' +
                            '</div><!-- /.modal-content -->' +
                            '</div><!-- /.modal-dialog -->' +
                            '</div><!-- /.modal -->'

                                        )
                           })
                        })
                    };


                    $('#titles').append(

                      '<div class="">' +
                      '<a  data-toggle="modal" data-target="#myModal' + j + '" >' +
                       '<img src="' + value.Poster + '" class="img-responsive" </a> </div>' +
                      '</div>'+
                    '  <br> '
                    );

                });
            };
        });

    });
};

$('#search').click(function(){
    var input = $('#userTitle').val();

    if(input!==""){
        var movieSearch = 'https://www.omdbapi.com/?apikey=7c019c37&s=' + input;
        //console.log(movieSearch);
        search(movieSearch);
        $('#userTitle').val('');
        $('#titles').empty();
        $('#recommended').hide();
        $('#slide').hide();

        $('#splash').hide();
    }
});

function recomendations(apiDAta) {

    $.getJSON(apiDAta, function(data){

        $.each(data, function(i,v) {
            // console.log(v);
            if ($.isArray(v)){
                // console.log(v);
                $.each(v, function(j,value){
                    // console.log(value.Title);

                    var movieModal = 'https://www.omdbapi.com/?apikey=7c019c37&t=' + value.Title ;
                    getModal(movieModal);

                    //Data para obtener el Modal
                    function getModal(movieModal) {
                        $.getJSON(movieModal, function(data){
                          // console.log(data);
                          $('.portfolio-items_one').append(

                              '<div  id="myModal_' + j + '" role="dialog" class="modal fade"  tabindex="-'+ j + '" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                              '<div class="modal-dialog" role="document">' +
                              '<div class="modal-content">' +
                              '<div class="modal-header">' +
                              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                              '<h4 class="modal-title text-uppercase ">' + data.Title + '</h4>' +
                              '<p>' + data.Director + '</p>' +
                              '</div>' +
                              '<div class="modal-body row">' +
                              '<div class="col-md-4 ">' +
                              '<img class="img-fluid " src=" '+data.Poster +'" alt=""> ' +
                              '</div>' +
                              '<div class="col-md-5  col-md-offset-2">' +
                              ' <div class="col-md-12 ">'+
                              '<p><strong>Año: </strong>' + data.Year +
                              '</p>' +
                              '</div>' +
                              '<div class="col-md-12 ">'+
                              '<p><strong>Premios: </strong>' + data.Awards +
                              '</p>' +
                              '</div>' +
                              '<div class="col-md-12 ">'+
                              '<p><strong>Premios: </strong>' + data.Genre +
                              '</p>' +
                              '</div>' +
                              '<div class="col-md-12 plot ">'+
                              '<p>' + data.Plot+ '</p>' +
                              '</div>' +
                              '<div class="col-md-12 plot ">'+
                              '<button type="button" class="btn btn-link btn-lg paitingBottom"  aria-label="Left Align" onclick="saveProfile(&quot;' + data.imdbID + '&quot;, this)">' +
                              '<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Mi Librería' +
                              '</button>' +
                              '<button type="button" class="btn btn-link btn-lg paitingBottom " aria-label="Left Align">' +
                              '<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Ver más Tarde' +
                              '</button>' +
                              '</div>' +
                              '</div>' +
                              '</div>' +
                              '<div class="modal-footer">' +
                              ' <button type="button" class="btn btn-link paitingBottom" data-dismiss="modal">Cerrar</button>' +
                              '</div>' +
                              '</div><!-- /.modal-content -->' +
                              '</div><!-- /.modal-dialog -->' +
                              '</div><!-- /.modal -->'
                          );
                        })
                    };

                    $('.portfolio-items_one').append(

                      '<div class="">' +
                      '<a  data-toggle="modal" data-target="#myModal_' + j + '" >' +
                      '<div class="bestMovie' + j + '">' +
                       '<img src="' + value.Poster + '" class="img-responsive" alt="Project Title"> </a> </div>' +
                      '</div>' +
                      '</div>'+
                    '  <br> '


                    );

                });
            };
        });

    });
};

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

function movieNet() {

    // DOM elements//
    this.messageList = document.getElementById('messages');
    this.messageForm = document.getElementById('message-form');
    this.messageInput = document.getElementById('message');
    this.submitButton = document.getElementById('submit');
    this.submitImageButton = document.getElementById('submitImage');
    this.imageForm = document.getElementById('image-form');
    this.mediaCapture = document.getElementById('mediaCapture');
    this.userPic = document.getElementById('user-pic');
    this.modalPic = document.getElementById('modal-pic');
    this.userName = document.getElementById('user-name');
    this.modalName = document.getElementById('modal-name');
    this.signInButton = document.getElementById('sign-in');
    this.signOutButton = document.getElementById('sign-out');
    this.feed = document.getElementById('feed');
    this.save = document.getElementById('save');
    this.account = document.getElementById('account');

    this.userUid = 0;

    // Guardar mensajes del input al presionar submit//
    this.messageForm.addEventListener('submit', saveMessage.bind(this));
    this.signOutButton.addEventListener('click', this.signOut.bind(this));
    this.signInButton.addEventListener('click', this.signIn.bind(this));
    this.account.addEventListener('click', loadProfile.bind(this));

    // subir una imagen en el feed//
    this.submitImageButton.addEventListener('click', function(e) {
      e.preventDefault();
      this.mediaCapture.click();
    }.bind(this));
    this.mediaCapture.addEventListener('change', this.saveImageMessage.bind(this));

    this.initFirebase();
}

  // inicializar firebase y los productos a usar//
  movieNet.prototype.initFirebase = function() {
      // productos de firebase//
      this.auth = firebase.auth();
      this.database = firebase.database();
      this.storage = firebase.storage();
      // escuchar si hay cambios en el estado de usuario.//
      this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
  };

  // cargar mensajes desde la base de datos//
  movieNet.prototype.loadMessages = function() {
      // /messages/ database path.
      this.messagesRef = this.database.ref('messages');
      // Make sure we remove all previous listeners.
      this.messagesRef.off();


      // cargar solo los ultimos 12 y escuchar si hay nuevos//
      var setMessage = function(data) {
        var val = data.val();
        //console.log(val.name);
        this.displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
      }.bind(this);
      this.messagesRef.limitToLast(12).on('child_added', setMessage);
      this.messagesRef.limitToLast(12).on('child_changed', setMessage);
  };


  //Guardar mensaje nuevo en firebase//
  var saveMessage = function(e) {
    e.preventDefault();

    // chequear por mensaje nuevo y usuario logeado//
    if (this.messageInput.value && this.checkSignedInWithMessage()) {

        var currentUser = this.auth.currentUser;
       // nueva entrada en la database//
       this.messagesRef.push({
         name: currentUser.displayName,
         text: this.messageInput.value,
         photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
       }).then(function() {
         // borrar input para que quede vacio//
         movieNet.resetMaterialTextfield(this.messageInput);
         this.toggleButton();
       }.bind(this)).catch(function(error) {
         // console.log('5');
       });
    }
  };
  //cargar perfil de usuario
  var loadProfile = function(){
      var profRef = firebase.database().ref('profile');
      var currentUser = firebase.auth().currentUser;

      var searchId = function(snapshot) {
          var obj = snapshot.val();

          for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                  if (currentUser) {
                      if (currentUser.uid === obj[key].userUid) {

                          $('#movieProfile').empty();
                          var movieData = 'https://www.omdbapi.com/?apikey=7c019c37&i=' + obj[key].movieID;
                          // console.log(movieData);

                          $.getJSON(movieData, function(data){

                              $('#movieProfile').append(
                                  '<div class="display-col">' +
                                  '<h5>' + data.Title + '</h5>' +
                                   '<img src="' + data.Poster + '" class="img-responsive"' +
                                  '</div>'


                              );
                              // console.log(data.Title);
                          });
                          // console.log("Found match!!");
                      }
                  }
              }
          }
      };
      profRef.on("value", searchId);
  };
  //guardar profile en firebase
   var saveProfile = function(movieID,btn) {
       console.log(firebase.auth().currentUser);
       var user = firebase.auth().currentUser;

       if ($(user).length){
           console.log('funcion saveProfile activated');
           btn.style.color = 'green';
           var profileRef = firebase.database().ref('profile');
           profileRef.off();

           var currentUser = firebase.auth().currentUser;
           profileRef.push({
               movieID: movieID,
               userUid: currentUser.uid,
           });

       } else {
           alert('Por favor inicia sesion primero.')
       }



       //var btn = document.getElementById(btnID);
       //console.log(btnID);


  };

  // Sets URL de la imagen uplodeada con el url de la imagen que ahora esta guardada en firebase storage//
  movieNet.prototype.setImageUrl = function(imageUri, imgElement) {
      // si la imagen esta en firebase su url comenzara con gs:// y rescatamos este url de la base datos.
      if (imageUri.startsWith('gs://')) {
        imgElement.src = movieNet.LOADING_IMAGE_URL; // imagen de espera mientras carga//
        this.storage.refFromURL(imageUri).getMetadata().then(function(metadata) {
          imgElement.src = metadata.downloadURLs[0];
        });
      } else {
        imgElement.src = imageUri;
      }
  };

  // Guardar el nuevo mensaje con la imagen

  movieNet.prototype.saveImageMessage = function(event) {
    event.preventDefault();
    var file = event.target.files[0];

    // borrar la seleccion.
    this.imageForm.reset();

    // chequear si el archivo enviado es una imagen//
    if (!file.type.match('image.*')) {
        alert('Solo puedes compartir imagenes');
      return;
    }
    // si el usuario esta logeado//
    if (this.checkSignedInWithMessage()) {

        // se guarda la imagen en el storage de firebase, de nuevo imagen de cargando mientras se guarda la imagen
           var currentUser = this.auth.currentUser;
           this.messagesRef.push({
             name: currentUser.displayName,
             imageUrl: movieNet.LOADING_IMAGE_URL,
             photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
           }).then(function(data) {

             var filePath = currentUser.uid + '/' + data.key + '/' + file.name;
             return this.storage.ref(filePath).put(file).then(function(snapshot) {

               var fullPath = snapshot.metadata.fullPath;
               return data.update({imageUrl: this.storage.ref(fullPath).toString()});
             }.bind(this));
           }.bind(this)).catch(function(error) {
             console.error('There was an error uploading a file to Cloud Storage:', error);
           });
    }
  };

  // loguarse en la pagina
  movieNet.prototype.signIn = function() {
      // se usa cuenta de google para acceder
        var provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopup(provider);
  };

  // Signs-out de la pagina//
  movieNet.prototype.signOut = function() {
      // Sign out de Firebase.//
     this.auth.signOut();

  };

  // activa eventos cunado hay cambios en el estado de usuario, si esta logeado o no
  movieNet.prototype.onAuthStateChanged = function(user) {
    if (user) { // si el usuario esta signed in//
      // se toma el su foto de perfil de google y su nombre//
      var profilePicUrl = user.photoURL;
      var userName = user.displayName;
      this.userUid = user.uid;

      // se coloca nombre y foto en la pagina//
      this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
      this.modalPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
      this.userName.textContent = userName;
      this.modalName.textContent = userName;

      // se muestra el boton de sign out  y se muestra info del usuario y feed y se oculta el boton de sing in
      this.userName.classList.remove('hide');
      this.userPic.classList.remove('hide');
      this.feed.classList.remove('hide');
      // this.about.classList.add('hide');
      // this.info.classList.add('hide');

      this.signOutButton.classList.remove('hide');
      this.signInButton.classList.add('hide');

      // se cargan los mensajes de la base de datos//
      this.loadMessages();
      // loadProfile();

  } else { // si el usuario esta signed out//
      // se oculta boton de sign out e informacion del usuario y feed, se muentra el boton de sign in
      this.userName.classList.add('hide');
      this.userPic.classList.add('hide');
      this.feed.classList.add('hide');
      // this.about.classList.remove('hide');
      // this.info.classList.remove('hide');

      this.signOutButton.classList.add('hide');
      this.signInButton.classList.remove('hide');
    }
  };

  // retorna true si el usuario esta signed in
  movieNet.prototype.checkSignedInWithMessage = function() {

      if (this.auth.currentUser) {
       return true;
      } else {
       return false;
      }
  };


  // limpia o borra input de mensajes
  movieNet.resetMaterialTextfield = function(element) {
    element.value = '';
    element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
  };

  // plantilla para los mensajes anadidos//
  movieNet.MESSAGE_TEMPLATE =
      '<div class="message-container">' +
        '<div class="spacing"><div class="pic"></div></div>' +
        '<div class="message"></div>' +
        '<div class="name"></div>' +
      '</div>';

  //imagen de espera
  movieNet.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

  // mostrar mensajes en la pagina
  movieNet.prototype.displayMessage = function(key, name, text, picUrl, imageUri) {
    var div = document.getElementById(key);

    if (!div) {
      var container = document.createElement('div');
      container.innerHTML = movieNet.MESSAGE_TEMPLATE;
      div = container.firstChild;
      div.setAttribute('id', key);
      this.messageList.appendChild(div);
    }
    if (picUrl) {
      div.querySelector('.pic').style.backgroundImage = 'url(' + picUrl + ')';
    }
    div.querySelector('.name').textContent = name;
    var messageElement = div.querySelector('.message');
    if (text) { //si el mensaje es texto
      messageElement.textContent = text;
      // reemplazar cambio de linea con <br>//
      messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  } else if (imageUri) { // si es una imagen//
      var image = document.createElement('img');
      image.addEventListener('load', function() {
        this.messageList.scrollTop = this.messageList.scrollHeight;
      }.bind(this));
      this.setImageUrl(imageUri, image);
      messageElement.innerHTML = '';
      messageElement.appendChild(image);
    }
  };

  //desabilitar y habilitar boton de enviar
  movieNet.prototype.toggleButton = function() {
    if (this.messageInput.value) {
      this.submitButton.classList.remove('disabled');
    } else {
      this.submitButton.classList.add('disabled');
    }
  };

  // chequear si el sdk de firebase esta correcto
  movieNet.prototype.checkSetup = function() {
    if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
      window.alert('You have not configured and imported the Firebase SDK. ' +
          'Make sure you go through the codelab setup instructions and make ' +
          'sure you are running the codelab using `firebase serve`');
    }
  };
