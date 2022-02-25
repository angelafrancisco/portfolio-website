console.log(`I AM LINKED`);

// JQUERY SCRIPT //
$(() => {
    //  action: user clicks menu icon (hamburger)
    $('.nav-hamburger-container').click(() => {
        //  add new class to nav
        $('.nav-link-list').addClass('menu-open');
        console.log(`MENU WAS CLICKED`);
        // hide or swap? hamburger for X

    });
    //  action: user clicks the X to close menu
    $('.menu-close').click(() => {
        //  remove 'menu-open' class
        $('.nav-link-list').removeClass('menu-open');
        console.log(`MENU HAS CLOSED`);
    });

});