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
            $("#saopaulo").addClass("ativo");
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
                                      $(".label-sub-titulo").text("Food Truck da Lagoa da Conceição");
                    break;
                    case "floripa": $(".label-titulo").text("25-out-2015");
                                      $(".label-sub-titulo").text("Pousada Vila Gaia, North Shore");
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






        $('.loading').hide();
        $('.mailchimp').ajaxChimp({
            callback: mailchimpCallback,
            url: "http://welcomesurftrips.us8.list-manage.com/subscribe/post?u=4b3eb08571c0a6747815ffb1c&amp;id=c012a84ddd"

        });

    function mailchimpCallback(resp) {
        $('.loading').fadeIn("fast");;
        if (resp.result === 'success') {
             $('#modal-email').modal('show');
            $('.mailchimp-error').fadeOut(500);
        } else if (resp.result === 'error') {
           $('.mailchimp-error').fadeIn(1000);

        }
        $('.loading').delay(1000).fadeOut("fast");
    }
});
