// 1

function responsiveMenu () {
    var $menuTrigger = $('.menu__trigger'),
        $menuContent = $('.menu__content'),
        $menuLink = $('.nav-link'),
        $overlay = $('.overlay'),
        $body = $('body');

    function openMenu() {
        $menuContent.css({
            'right' : '0',
            'transition' : '0.5s'
        });
        $overlay.css('opacity', '0.5').fadeIn();
        $body.css('overflow', 'hidden');

    }
    function closeMenu() {
        $menuContent.css('right','-270px');
        $body.css('overflow','visible');
        $overlay.css('opacity', '0').fadeOut();
        $menuContent.removeClass('menuActive');
    }

    $menuTrigger.on('click', function(e){
        e.preventDefault();
        $menuContent.toggleClass('menuActive');

        if($menuContent.hasClass('menuActive')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    $overlay.on('click', function(){
        closeMenu();
    });

    // $menuLink.on('click', function(e){
    //     e.preventDefault();
    //     var target = $(this).attr('href');
    //     if(target.indexOf('...') > -1) {
    //         var posY = $('.main-section').eq(9).offset().top - 30;
    //     }else{
    //         var posY = $(target).offset().top - 30;
    //     }
    //     $('html, body').animate({
    //         scrollTop: posY
    //     });

    //     $('.nav-link').parent().removeClass('active');
    //     $(this).parent().addClass('active');


    //     closeMenu();
    // })
}

function activeMenu() {
    $(document).scroll(function(){
        var scrollPos = $('body').scrollTop(),
            $section = $('.main-section');
        //console.log(scrollPos);

        $section.each(function(){
            var thisTop = $(this).offset().top - 40,
                thisBottom = $(this).offset().top + $(this).outerHeight();

            if(!$('html, body').is(':animated')){
                if(scrollPos >= thisTop && scrollPos < thisBottom) {
                    $('.nav-link').parent().removeClass('active');
                    $('.nav-link[href="#'+ $(this).attr('id') + '"]').parent().addClass('active');
                }
            }
        });

    })
}

$(document).ready(function(){
    responsiveMenu();
    activeMenu();
});

// 2

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

// 3

const openMenuBtn = document.getElementById("openMenuBtn");
const menu = document.getElementById("menu");

const handleMenuOpen = (event) => {
    menu.classList.toggle('active');
}

openMenuBtn.addEventListener("click", handleMenuOpen);

// form handling

const helpForm = document.getElementById("helpForm");

const handleSubmit = (event) => {
    event.preventDefault();
    const body = {};

    const formData = new FormData(event.target);

    for (const entry of formData.entries()) {
        body[entry[0]] = entry[1];
    }

    console.log(body)

}

helpForm.addEventListener("submit", handleSubmit)

// smooth scroll

const links = document.querySelectorAll('a[href^="#"]')

console.log(links);

const scrollHandler = (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(event.target.getAttribute('href'));

    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
    console.log(targetElement);
}

links.forEach(link => link.addEventListener('click', scrollHandler))


// carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




const changeThemeButton = document.getElementById('change-theme');
const wrapper = document.querySelector('.wrapper');

const handleClick = () => {
    wrapper.classList.toggle('dark-theme');
}

changeThemeButton.addEventListener('click', handleClick)

// 4

var ff = 0
var titles = ['D',
'Da',
'Daz',
'Dazy',
'Dazy ',
'Dazy  S',
'Dazy  So',
'Dazy  Sof',
'Dazy  Soft',
'Dazy  Softw',
'Dazy  Softwa',
'Dazy  Softwar',
'Dazy  Software',
'Dazy  Software']


setInterval(() => {
	document.title = titles[ff]
	ff = ff+1
	if(ff > titles.length-1) ff = titles.length-2
}, 450)

