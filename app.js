console.log(`I AM LINKED`);

// JQUERY SCRIPT //
$(() => {
    //  on mobile, user clicks hamburger
    $('.nav-hamburger-container').click(() => {
        console.log(`MENU IS CLICKED`);
        // animation on hamburger divs into X
        $('.nav-hamburger').toggleClass('move');
        // add new class to hamburger, or should this only be on menu?
        // $('.nav-hamburger-container').toggleClass('open');
        // create new div, 3rd child to .nav-header
        $('.nav-header').append('<div class="menu-block">');
        //  add toggleClass to nav-link-list 
        const $menuOpen = $('.nav-link-list').toggleClass('open');
        // new open class moved to new div
        $menuOpen.appendTo('.menu-block');
    });

});