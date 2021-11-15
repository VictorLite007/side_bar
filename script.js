$('.feat-btn').click( () => {
    $('.feat-show').toggleClass('show')
    $('nav ul li .first i').toggleClass('rotate')
})

$('.serv-btn').click( () => {
    $('.serv-show').toggleClass('show1')
    $('nav ul li .second i').toggleClass('rotate')
})

$('.btn').click( () => {
    $('.btn').toggleClass('click')
    $('.sidebar').toggleClass('active')
})