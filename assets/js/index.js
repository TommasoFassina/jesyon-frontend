$(document).ready(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('.footer').show();
        $('#navbarDark').show();
    });

    $('#sidebarCollapse').on('click', function () {
        $('.footer').hide();
        $('#navbarDark').hide();
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $("#sidebar").mCustomScrollbar({
    theme: "minimal"
    });
});