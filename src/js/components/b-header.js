$(".header-service__show").click(function () {
    if(window.innerWidth>992){
        $(this).addClass("_active")
    } else{
        $(this).toggleClass("_active")
        $(".header-service__hidden").slideToggle()
    }
})

if(window.innerWidth>992) {
    $(document).mouseup(function (e) {
        var div = $('.header-service__hidden');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header-service__show").hasClass("_active")) {
                $(".header-service__show").removeClass("_active")
            }
        }
    });
}

$(".header__burger").click(function () {
    $(".header").addClass("header--active")
})

$(".header-mob__close").click(function () {
    $(".header").removeClass("header--active")
})

$(".header__contacts-toggle").click(function () {
    $(".header__contacts-toggle").addClass("_disable")
    $(".header-top").addClass("_active")
})

$(".header-top__close").click(function () {
    closeHeaderContactsPopup()
})

function closeHeaderContactsPopup(){
    $(".header__contacts-toggle").removeClass("_disable")
    $(".header-top").removeClass("_active")
}

$(document).mouseup(function (e) {
    var div = $('.header-top');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        if ($(".header-top").hasClass("_active")) {
            closeHeaderContactsPopup()
        }
    }
});
