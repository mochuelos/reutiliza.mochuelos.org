(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  // Solicitud

  var municipios = ['Acebeda, La', 'Ajalvir', 'Alameda del Valle', 'Álamo, El', 'Alcalá de Henares', 'Alcobendas', 'Alcorcón', 'Aldea del Fresno', 'Algete', 'Alpedrete', 'Ambite', 'Anchuelo', 'Aranjuez', 'Arganda del Rey', 'Arroyomolinos', 'Atazar, El', 'Batres', 'Becerril de la Sierra', 'Belmonte de Tajo', 'Berrueco, El', 'Berzosa del Lozoya', 'Boadilla del Monte', 'Boalo, El', 'Braojos', 'Brea de Tajo', 'Brunete', 'Buitrago del Lozoya', 'Bustarviejo', 'Cabanillas de la Sierra', 'Cabrera, La', 'Cadalso de los Vidrios', 'Camarma de Esteruelas', 'Campo Real', 'Canencia', 'Carabaña', 'Casarrubuelos', 'Cenicientos', 'Cerceda', 'Cercedilla', 'Cervera de Buitrago', 'Chapinería', 'Chinchón', 'Ciempozuelos', 'Cobeña', 'Collado Mediano', 'Collado Villalba', 'Colmenar de Oreja', 'Colmenar del Arroyo', 'Colmenar Viejo', 'Colmenarejo', 'Corpa', 'Coslada', 'Cubas de la Sagra', 'Daganzo de Arriba', 'Escorial, El', 'Estremera', 'Fresnedillas de la Oliva', 'Fresno de Torote', 'Fuenlabrada', 'Fuente el Saz de Jarama', 'Fuentidueña de Tajo', 'Galapagar', 'Garganta de los Montes', 'Gargantilla del Lozoya y Pinilla de Buitrago', 'Gascones', 'Getafe', 'Griñón', 'Guadalix de la Sierra', 'Guadarrama', 'Hiruela, La', 'Horcajo de la Sierra-Aoslos', 'Horcajuelo de la Sierra', 'Hoyo de Manzanares', 'Humanes de Madrid', 'Leganés', 'Loeches', 'Lozoya', 'Lozoyuela-Navas-Sieteiglesias', 'Madarcos', 'Madrid', 'Majadahonda', 'Manzanares el Real', 'Mataelpino', 'Meco', 'Mejorada del Campo', 'Miraflores de la Sierra', 'Molar, El', 'Molinos, Los', 'Montejo de la Sierra', 'Moraleja de Enmedio', 'Moralzarzal', 'Morata de Tajuña', 'Móstoles', 'Navacerrada', 'Navalafuente', 'Navalagamella', 'Navalcarnero', 'Navarredonda y San Mamés', 'Navas del Rey', 'Nuevo Baztán', 'Olmeda de las Fuentes', 'Orusco de Tajuña', 'Paracuellos de Jarama', 'Parla', 'Patones', 'Pedrezuela', 'Pelayos de la Presa', 'Perales de Tajuña', 'Pezuela de las Torres', 'Pinilla del Valle', 'Pinto', 'Piñuécar-Gandullas', 'Pozuelo de Alarcón', 'Pozuelo del Rey', 'Prádena del Rincón', 'Puebla de la Sierra', 'Puentes Viejas', 'Quijorna', 'Rascafría', 'Redueña', 'Ribatejada', 'Rivas-Vaciamadrid', 'Robledillo de la Jara', 'Robledo de Chavela', 'Robregordo', 'Rozas de Madrid, Las', 'Rozas de Puerto Real', 'San Agustín del Guadalix', 'San Fernando de Henares', 'San Lorenzo de El Escorial', 'San Martín de la Vega', 'San Martín de Valdeiglesias', 'San Sebastián de los Reyes', 'Santa María de la Alameda', 'Santorcaz', 'Santos de la Humosa, Los', 'Serna del Monte, La', 'Serranillos del Valle', 'Sevilla la Nueva', 'Somosierra', 'Soto del Real', 'Talamanca de Jarama', 'Tielmes', 'Titulcia', 'Torrejón de Ardoz', 'Torrejón de la Calzada', 'Torrejón de Velasco', 'Torrelaguna', 'Torrelodones', 'Torremocha de Jarama', 'Torres de la Alameda', 'Tres Cantos', 'Valdaracete', 'Valdeavero', 'Valdelaguna', 'Valdemanco', 'Valdemaqueda', 'Valdemorillo', 'Valdemoro', 'Valdeolmos-Alalpardo', 'Valdepiélagos', 'Valdetorres de Jarama', 'Valdilecha', 'Valverde de Alcalá', 'Velilla de San Antonio', 'Vellón, El', 'Venturada', 'Villa del Prado', 'Villaconejos', 'Villalbilla', 'Villamanrique de Tajo', 'Villamanta', 'Villamantilla', 'Villanueva de la Cañada', 'Villanueva de Perales', 'Villanueva del Pardillo', 'Villar del Olmo', 'Villarejo de Salvanés', 'Villaviciosa de Odón', 'Villavieja del Lozoya', 'Zarzalejo'];
  for (var i in municipios) {
    if (municipios[i].endsWith(', El')) {
      municipios[i] = 'El ' + municipios[i].slice(0, -', El'.length);
    }
  }
  var municipiosReutiliza = {
    'El Boalo': 'bocema.reutiliza.eco',
    'Cerceda': 'bocema.reutiliza.eco',
    'Mataelpino': 'bocema.reutiliza.eco',
  }
  var contactoAyuntamientos = {
    'Alcobendas': 'contacto@alcobendas.es',
  }
  $("#query").typeahead({
      source: municipios,
      afterSelect: function(selection) {
        var msg;
        if (selection in municipiosReutiliza) {
          msg = $('#disponible-template').clone();
        } else if (selection in contactoAyuntamientos){
          msg = $('#solicitud-template').clone();
        } else {
          msg = $('#desconocido-template').clone();
        }
        $('#query-result').html(msg.html());
        console.log(selection);
      }
  });
  $('#solicitudModal').on('shown.bs.modal', function() {
    $(this).find('#query').focus();
  });

  // if (window.location.href.indexOf('#solicitudModal') != -1) {
  //   $('#solicitudModal').modal('show');
  // }
})(jQuery); // End of use strict
