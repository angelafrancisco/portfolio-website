console.log(`I AM LINKED`);

// JQUERY SCRIPT //
$(() => {
    //  on mobile, user clicks hamburger
    $('.nav-hamburger-container').click(() => {
        // animation on hamburger divs into X
        $('.nav-hamburger').toggleClass('move');
        // add new class to hamburger, or should this only be on menu?
        // $('.nav-hamburger-container').toggleClass('open');
        //  nav-link-list gets toggleClass
        $('.nav-link-list').toggleClass('open');
        console.log(`MENU IS CLICKED`);

    });

});