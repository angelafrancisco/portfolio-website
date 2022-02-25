console.log(`I AM LINKED`);

// JQUERY SCRIPT //
$(() => {
    //  on mobile, user clicks hamburger
    $('.nav-hamburger-container').click(() => {
        console.log(`MENU IS CLICKED`);
        // animation on hamburger divs into X
        $('.nav-hamburger').toggleClass('move');
        // check element for .open class
        const $menuOpen = $('.nav-link-list').hasClass('open');
        if ($menuOpen) {
            // if true, remove class .open
            $('.nav-link-list').removeClass('open');
            // move to right container
            $('.nav-link-list').appendTo('.nav-container.right');
            // remove div element
            $('.nav-header').remove('div.menu-block');
        } else {
            // if false, add class .open
            $('.nav-link-list').addClass('open');
            // create new div, 3rd child to .nav-header
            $('.nav-header').append('<div class="menu-block">');
            // new open class moved to new div
            $('.nav-link-list').appendTo('.menu-block');
        }
    });

});