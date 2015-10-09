function loadBanners() {
    var $bannerSection = $('.mainContainer .topSection')

    if ($('#travelRetail').attr('data-country-name') == 'Singapore') {
        
        $bannerSection.addClass('sgBanner');

    } else if ($('#travelRetail').attr('data-country-name') == 'Hongkong') {
        
        $bannerSection.addClass('hkBanner');

    } else if ($('#travelRetail').attr('data-country-name') == 'Japan') {

        $bannerSection.addClass('jpBanner');
    }
    else if ($('#travelRetail').attr('data-country-name') == 'Korea') {

        $bannerSection.addClass('krBanner');
    }
}

function countryUtils() {
    if ($("#travelRetail").attr("data-country-name") == "Singapore") {
        
    } else if ($("#travelRetail").attr("data-country-name") == "Hongkong") {
        
    } else if ($("#travelRetail").attr("data-country-name") == "Japan") {
        //for japan
        $(".whereToShop-btn[data-btn-id='1']").text("请前往免税店购买");
        
    } else if ($("#travelRetail").attr("data-country-name") == "Korea") {
        //for korea

    } else {

    }
}

function slickNavs() {

    var $firstStepPrevBtn = $('div[data-steps="1"] .slick-prev');
    var $firstStepNextBtn = $('div[data-steps="1"] .slick-next');

    var $secondStepPrevBtn = $('div[data-steps="2"] .slick-prev');
    var $secondStepNextBtn = $('div[data-steps="2"] .slick-next');

    var $thirdStepPrevBtn = $('div[data-steps="3"] .slick-prev');
    var $thirdStepNextBtn = $('div[data-steps="3"] .slick-next');

    //this is used on the KR travel retail section that has a slider
    var $travelRetailStepPrevBtn = $('.howToUse .slick-prev');
    var $travelRetailStepNextBtn = $('.howToUse .slick-next');

    $('.slideTest').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var giftItem = $(this).parent().attr('data-steps');

        if ((nextSlide == '2')) {
            
            if (giftItem == 1) {
                $firstStepNextBtn.css('display', 'none');
            } else if ((giftItem == 2)) {
                $secondStepNextBtn.css('display', 'none');
            } else if ((giftItem == 3)) {
                $thirdStepNextBtn.css('display', 'none');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'block');
            }

        } else if ((nextSlide == '0')) {
            
            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'none');
            } else if ((giftItem == 2)) {
                $secondStepNextBtn.css('display', 'block');
                $secondStepPrevBtn.css('display', 'none');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'none');
                $thirdStepNextBtn.css('display', 'block');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'none');
                $travelRetailStepNextBtn.css('display', 'block');
            }

        } else if ((nextSlide == '1')) {

            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'block');
                $firstStepNextBtn.css('display', 'block');
            } else if ((giftItem == 2)) {
                $secondStepPrevBtn.css('display', 'block');
                $secondStepNextBtn.css('display', 'block');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'block');
                $thirdStepNextBtn.css('display', 'none');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'block');
                $travelRetailStepNextBtn.css('display', 'block');
            }

        } else if ((nextSlide == '3')) {

            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'block');
                $firstStepNextBtn.css('display', 'block');
            } else if ((giftItem == 2)) {
                $secondStepPrevBtn.css('display', 'block');
                $secondStepNextBtn.css('display', 'block');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'block');
                $thirdStepNextBtn.css('display', 'none');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'block');
                $travelRetailStepNextBtn.css('display', 'block');
            }

        } else if ((nextSlide == '4')) {

            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'block');
                $firstStepNextBtn.css('display', 'block');
            } else if ((giftItem == 2)) {
                $secondStepPrevBtn.css('display', 'block');
                $secondStepNextBtn.css('display', 'block');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'block');
                $thirdStepNextBtn.css('display', 'none');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'block');
                $travelRetailStepNextBtn.css('display', 'block');
            }


        } else if ((nextSlide == '5')) {

            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'block');
                $firstStepNextBtn.css('display', 'block');
            } else if ((giftItem == 2)) {
                $secondStepPrevBtn.css('display', 'block');
                $secondStepNextBtn.css('display', 'block');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'block');
                $thirdStepNextBtn.css('display', 'none');
            } else if ((giftItem == undefined)) {
                $travelRetailStepPrevBtn.css('display', 'block');
                $travelRetailStepNextBtn.css('display', 'none');
            }


        } else {
            
            if (giftItem == 1) {
                $firstStepPrevBtn.css('display', 'block');
                $firstStepNextBtn.css('display', 'block');
            } else if ((giftItem == 2)) {
                $secondStepPrevBtn.css('display', 'block');
                $secondStepNextBtn.css('display', 'block');
            } else if ((giftItem == 3)) {
                $thirdStepPrevBtn.css('display', 'block');
                $thirdStepNextBtn.css('display', 'none');
            }
        }

    });
}

function createSlides() {

    //we initialize the slides inside the tab after clicking the tab

    $('#ui-id-2').click(function () {
        var flag = true;
        $('div[data-steps="1"] .slideTest').slick({
            infinite: false,
            draggable: false
        });
        slickNavs();
        
        var $firstStepPrevBtn = $('div[data-steps="1"] .slick-prev');

        if ($('.step1[data-slick-index="0"]').hasClass('slick-active')) {
            $firstStepPrevBtn.css('display', 'none');
        }
        
    });

    $('#ui-id-5').click(function () {
        $('div[data-steps="2"] .slideTest').slick({
            infinite: false,
            draggable: false
        });
        slickNavs();

        var $secondStepPrevBtn = $('div[data-steps="2"] .slick-prev');

        if ($('.step1[data-slick-index="0"]').hasClass('slick-active')) {
            $secondStepPrevBtn.css('display', 'none');
        }
    });

    $('#ui-id-14').click(function () {

        $('div[data-steps="3"] .slideTest').slick({
            infinite: false,
            draggable: false
        });
        slickNavs();

        var $thirdStepPrevBtn = $('div[data-steps="3"] .slick-prev');
        
        if ($('.step1[data-slick-index="0"]').hasClass('slick-active')) {
            $thirdStepPrevBtn.css('display', 'none');
        }
    });

    $('#ui-id-8').click(function () {
        $('.howToUse .slideTest').slick({
            infinite: false,
            draggable: false
        });
        slickNavs();
        var $travelRetailStepPrevBtn = $('.howToUse .slick-prev');
        $travelRetailStepPrevBtn.css('display', 'none');
    });

    //$('.whereToBuySection .hover .slide ul').slick({
    //    vertical: true,
    //    slidesToShow: 4,
    //    slidesToScroll: 2,
    //    infinite: false

    //});

    $('#travelRetail[data-country-name="Japan"] .whereToBuyThumbnail[data-thumbnail="1"] .hover .slide ul').slick({
            vertical: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            infinite: false
    });
    $('#travelRetail[data-country-name="Japan"] .whereToBuyThumbnail[data-thumbnail="3"] .hover .slide ul').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false
    });

    $('.whereToBuySection .hover .slide ul').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false

    });
 
    //$('.whereToBuySection .hover .arrowUp').on('click', function () {
    //    $('.whereToBuyThumbnail .slick-next').click();
    //});

    //$('.whereToBuySection .hover .arrowDown').on('click', function () {
    //    $('.whereToBuyThumbnail .slick-prev').click();
    //});

    $('.slick-prev').each(function () {
        var text = $(this).text();
        $(".slick-prev").text(text.replace('Previous', ''));        
    });
    $('.slick-next').each(function () {
        var text = $(this).text();
        $(".slick-next").text(text.replace('Next', ''));
    });
    for (var i = 1; i <= $('.whereToBuyThumbnail').length; i++) {
        $('.whereToBuyThumbnail[data-thumbnail="' + i + '"] .hover .slide .slick-slider').each(function () {
            //console.log($(this).find('.slick-slide:not(.slick-cloned)').size());
            var count = $(this).find('.slick-slide:not(.slick-cloned)').size();

            if (count <= 4) {
                $('.whereToBuyThumbnail[data-thumbnail="' + i + '"] .hover .arrowContainer').css('display', 'none');
            } else {
                $('.whereToBuyThumbnail[data-thumbnail="' + i + '"] .hover .arrowContainer').css('display', 'block');
            }
        })
    }
    
}

function createTabs() {
    var init = true;
    $("#tabs1, #tabs2, #tabs3, #tabs4, #tabs5, #tabs6").tabs();
}

function loadJSON() {

    if ($("#travelRetail").attr("data-country-name") == "Singapore") {
        var data_file = "../../OP/json/travel-retail-sg.json";
    } else if ($("#travelRetail").attr("data-country-name") == "Hongkong") {
        var data_file = "../OP/json/travel-retail-hk.json";
    } else {
        //other country
    }

    var http_request = new XMLHttpRequest();

    try {
        // FF, CHROME, SAFARI
        http_request = new XMLHttpRequest();
    } catch (e) {
        // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                console.log("browser not compatible");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            //console.log(jsonObj);

            var template = $("#viewTemplate").html();
            var html = Mustache.to_html(template, jsonObj);
            $(".contentSection").html(html);

            howToUseSlick();
        }
    }


    http_request.open("GET", data_file, true);
    http_request.send();

}

function loadXML() {

    if ($("#travelRetail").attr("data-country-name") == "Singapore") {
        var data_file = "../../OP/xml/travel-retail-sg.xml";
    } else if ($("#travelRetail").attr("data-country-name") == "Hongkong") {
        var data_file = "../../OP/xml/travel-retail-hk.xml";
    } else if ($("#travelRetail").attr("data-country-name") == "Japan") {
        var data_file = "../../OP/xml/travel-retail-jp.xml";
    } else if ($("#travelRetail").attr("data-country-name") == "Korea") {
        var data_file = "../../OP/xml/travel-retail-kr.xml";
    } else {

    }

    $.ajax({
        type: "GET",
        url: data_file,
        dataType: "xml",
        success: function (data) {

            var result = $.xml2json(data);
            var template = $("#viewTemplate").html();
            var html = Mustache.to_html(template, result);

            $(".contentSection").html(html);

            createTabs();
            createSlides()
            countryUtils();
            navigationAnchorActions();

            //console.log(result);
           
        }
    });

}

function slideToSections() {
    
    //this the initial implementation if we are to use query string on urls
    //on the template make sure that the anchor is set to javascript:void(0)

    if (/^(.*)\/singapore\.aspx\?gift-set\=1$/.test(window.location.href) || /^(.*)\/hongkong\.aspx\?gift-set\=1$/.test(window.location.href) || /^(.*)\/japan\.aspx\?gift-set\=1$/.test(window.location.href) || /^(.*)\/korea\.aspx\?gift-set\=1$/.test(window.location.href)) {
        $('html, body').animate({
            scrollTop: $("#giftSet").offset().top - 150
        }, 1500);
    } else if (/^(.*)\/singapore\.aspx\?travel-set\=1$/.test(window.location.href) || /^(.*)\/hongkong\.aspx\?travel-set\=1$/.test(window.location.href) || /^(.*)\/japan\.aspx\?travel-set\=1$/.test(window.location.href) || /^(.*)\/korea\.aspx\?travel-set\=1$/.test(window.location.href)) {
        $('html, body').animate({
            scrollTop: $("#travelSet").offset().top - 150
        }, 1500);
    } else if (/^(.*)\/singapore\.aspx\?where-to-buy\=1$/.test(window.location.href) || /^(.*)\/hongkong\.aspx\?where-to-buy\=1$/.test(window.location.href) || /^(.*)\/japan\.aspx\?where-to-buy\=1$/.test(window.location.href) || /^(.*)\/korea\.aspx\?where-to-buy\=1$/.test(window.location.href)) {
        $('html, body').animate({
            scrollTop: $("#whereToBuy").offset().top - 150
        }, 1500);
    } else {

    }

    //this is the hash implementation where the page don't reload
    //on the template make sure that the anchor is set to the id of the element

    if (window.location.hash == '#giftSet') {
        $('html, body').animate({
            scrollTop: $("#giftSet").offset().top - 150
        }, 1500);
    } else if (window.location.hash == '#travelSet') {
        $('html, body').animate({
            scrollTop: $("#travelSet").offset().top - 150
        }, 1500);
    } else if (window.location.hash == '#whereToBuy') {
        $('html, body').animate({
            scrollTop: $("#whereToBuy").offset().top - 150
        }, 1500);
    } else {

    }

}

function navigationAnchorActions() {

    if ($('#travelRetail').attr('data-country-name') == 'Singapore') {
        var country = 'singapore';
    } else if ($('#travelRetail').attr('data-country-name') == 'Hongkong') {
        var country = 'hongkong';
    } else if ($('#travelRetail').attr('data-country-name') == 'Japan') {
        var country = 'japan';
    } else if ($('#travelRetail').attr('data-country-name') == 'Korea') {
        var country = 'korea';
    }

    $('a.giftSection').click(function () {
        //location.href = country + '.aspx?gift-set=1';
        $('html, body').animate({
            scrollTop: $("#giftSet").offset().top - 150
        }, 1500);
        location.href = country + '.aspx#giftSet';
    });

    $('a.travelSection').click(function () {
        //location.href = country + '.aspx?travel-set=1';
        $('html, body').animate({
            scrollTop: $("#travelSet").offset().top - 150
        }, 1500);
        location.href = country + '.aspx#travelSet';
    });

    $('a.whereToSection').click(function () {
        //location.href = country + '.aspx?where-to-buy=1';
        $('html, body').animate({
            scrollTop: $("#whereToBuy").offset().top - 150
        }, 1500);
        location.href = country + '.aspx#whereToBuy';
    });

    //per item CTA button
    $('a.whereToShop-btn').click(function () {
        $('html, body').animate({
            scrollTop: $("#whereToBuy").offset().top - 150
        }, 1500);
        location.href = country + '.aspx#whereToBuy';
    });

}

$(document).ready(function () {

    $('.btnArrow').click(function (e) {
        //e.preventDefault();
        $(".dropdownContent").slideToggle();
        $(this).toggleClass('iarrowRight, arrowDown');
    });

    loadXML();
   
    loadBanners()

    setTimeout(slideToSections, 50);
})