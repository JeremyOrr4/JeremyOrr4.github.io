$(document).ready(function() {
    const menu = $('#mobile-menu');
    const menuLinks = $('.nav-menu');
    const lastElement = $('a');

    menu.on('click',function() {
        menu.toggleClass('is-active');
        menuLinks.toggleClass('active');
        lastElement.eq(4).toggleClass('bottomBorder');
    });
});