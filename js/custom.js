/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
            $("#joinville").addClass("ativo");
            $(".label-titulo").text("09-OUT-2015");
            $(".label-sub-titulo").text("Bovary Snooker Pub");
                
            $("a[rel=example_group]").fancybox();
            
            $(".button-custom").click(function(){
                $($(this)).removeAttr('ativo');
                $("#joinville").removeClass("ativo");
                
                switch($(this).val()){
                    case "joinville": $(".label-titulo").text("09-OUT-2015");
                                      $(".label-sub-titulo").text("Bovary Snooker Pub");
                    break;
                    case "camboriu": $(".label-titulo").text("16-out-2015");
                                      $(".label-sub-titulo").text("TJ's");
                    break;
                    case "florianopolis": $(".label-titulo").text("22-out-2015");
                                      $(".label-sub-titulo").text("Food Truck da LAGOA DA CONCEIÇÃO");
                    break;
                    case "floripa": $(".label-titulo").text("25-out-2015");
                                      $(".label-sub-titulo").text("POUSADA VILA GAIA, NORTE SHORE");
                    break;
                    case "curitiba": $(".label-titulo").text("15-out-2015");
                                      $(".label-sub-titulo").text("Espaço Surf Curitiba");
                    break;
                    case "portoalegre": $(".label-titulo").text("14-nov-2015");
                                      $(".label-sub-titulo").text("MIMPI Film Fest");
                    break;
                    case "rio": $(".label-titulo").text("20-nov-2015");
                                      $(".label-sub-titulo").text("MIMPI Film Fest");
                    break;
                    case "saopaulo": $(".label-titulo").text("25-nov-2015");
                                      $(".label-sub-titulo").text("Bolovo");
                    break;
                }
            }); 


            $('.myform').submit(function(e) {
              var $this = $(this);
              $.ajax({
                  type: "GET", // GET & url for json slightly different
                  url: "http://welcomesurftrips.us8.list-manage.com/subscribe/post-json?c=?",
                  data: $this.serialize(),
                  dataType    : 'json',
                  contentType: "application/json; charset=utf-8",
                  error       : function(err) { alert("Erro ao cadastrar seu e-mail, por favor tente em alguns minutos."); },
                  success     : function(data) {
                      if (data.result != "success") {
                          alert('Email já cadastrado.');
                      } else {
                          $('#modal-email').modal('show');
                      }
                  }
              });
              return false;
            });


			$('#email').keypress(function (e) {
              if (e.which == 13) {
                  if($('#email')[0].checkValidity()){
                    $('.myform').submit();
                    return false;   
                  }
              }
            });
    
    });