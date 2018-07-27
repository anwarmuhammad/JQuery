$(document).ready(() => {
    $('.shoe-details').show();
    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next().toggle()
    });
    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active')
        $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
    });
    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
        $('.login-button').toggleClass('button-active');
    });
    $('.product-photo').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active')
    })
    $('.menu-button').on('click', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').toggleClass('hide');
    });
})