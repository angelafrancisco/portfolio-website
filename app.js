// console.log(`I AM LINKED`);
// JQUERY SCRIPT //
$(() => {
    // 1. mobile hamburger click animation to open hidden menu //
    $('.nav-hamburger-container').click(() => {
        // console.log(`MENU IS CLICKED`);
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
            $('div.menu-block').remove();
        } else {
            // if false, add class .open
            $('.nav-link-list').addClass('open');
            // create new div, 3rd child to .nav-header
            $('.nav-header').append('<div class="menu-block">');
            // new open class moved to new div
            $('.nav-link-list').appendTo('.menu-block');
        }
    });
    // 2. on current page, show a border-bottom on active link //
    // this code ended up much shorter than my original attempts as I was using each to target the wrong element
    // use each to go through each li (aim is to match id to pathname)
    $('.nav-menu-link').each(function () {
        // console.log(this.id);
        // create array for all pages
        const $pagesArray = window.location.pathname.split("/");
        // console.log($pagesArray)
        // variable for finding current page from last item in pagesArray
        const $currentPage = $pagesArray[$pagesArray.length - 1];
        // console.log($currentPage)
        if ($currentPage === this.id) {
            // add new class to current page
            $(this).addClass('active');
        }
    });
    // 3. for each project div, hover over img and display hidden modal //
    $('.grid-box').hover(function () {
        // add new class to div after hover
        $(this).last().addClass('show');
    }, function () {
        $(this).last().removeClass('show');
    });


});