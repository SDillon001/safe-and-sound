// Preloader
function fade() {
$(".preloader").fadeOut("slow");
}
setTimeout(fade, 1500); 

$("flexContainer").ready(function(){
    $("container");
})

// Drinks qty and order panel
$('div.drink-container').click(function()
{
    $('div.qty-icon-drink', this).toggleClass('show hide');
    // $('div.add-order-panel').toggleClass('up down');
});

// Food qty and order panel
$('div.food-container').click(function()
{
    $('div.qty-icon', this).toggleClass('show hide');
    // $('div.add-order-panel').toggleClass('up down');
});