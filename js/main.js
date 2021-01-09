// Preloader
function fade() {
$(".preloader").fadeOut("slow");
}
setTimeout(fade, 1500); 

$("flexContainer").ready(function() {
    $("container");
})

// Drinks qty and order panel
// $('div.drink-container').click(function() {
//     $('div.qty-icon-drink', this).toggleClass('show hide');
//     $('div.add-order-panel').toggleClass('up down');
// });

// Food qty and order panel
// $('div.food-container').click(function() {
//     $('div.qty-icon', this).toggleClass('show hide');
//     $('div.add-order-panel').toggleClass('up down');
// });

// Update food quantity
$(function() {
    $('.food-container').click( function() {
        var price = 0;
        var price_pizza = 5;

        // var num = +($(this).find('.qty-icon').text());
        // num.text( parseInt(num.text()) + 1 );
        // console.log("num"+num);

        var num = $(this).find('.qty-icon');
        num.text( parseInt(num.text()) + 1 );
        console.log(num);

        var price = price + price_pizza;
        document.getElementById("total").innerHTML = price;
        console.log(price);

        var qty = 1;
        document.getElementById("items").innerHTML = qty;
    });
});

// Update drink quantity
$(function() {
    $('.drink-container').click( function() {
        var num = $(this).find('.qty-icon-drink');
        num.text( parseInt(num.text()) + 1 );
    });
});