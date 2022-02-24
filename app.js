console.log(`I AM LINKED`);

// JQUERY SCRIPT //
$(() => {
    //  action: user clicks menu icon (hamburger)
    $('.nav-control').click(() => {
        //  add new class to menu-aside
        $('.menu-aside').addClass('menu-aside-open');
        console.log(`MENU WAS CLICKED`);
    });
    //  action: user clicks the 'close-menu' x
    $('#menu-aside-close').click(() => {
        //  remove 'menu-aside-open' class
        $('.menu-aside').removeClass('menu-aside-open');
        console.log(`MENU HAS CLOSED`);
    });


});