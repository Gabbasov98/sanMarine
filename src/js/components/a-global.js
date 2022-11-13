$('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });
$(".custom-select").niceSelect()


$(".qa-card__show").click(function () {
    $(this).parents(".qa-card").toggleClass("qa-card--active")
    $(this).siblings(".qa-card__hidden").slideToggle()
})
