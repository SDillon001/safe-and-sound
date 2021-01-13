// Update food quantity solution from SO - https://stackoverflow.com/questions/65635399/update-incremented-quantity-in-order-item-total/65643408#65643408


// $(function() {
//   $('.food-container .qty-icon').click(function() {
//     var num = $(this);
//     num.text(parseInt(num.text()) + 1);
//     var qty = 0;
//     var total = 0;
    
//     //loop through your food conatiner divs
//     $(".food-container").each(function() {
//       //add total qty on evry iteration
//       qty += parseInt($(this).find(".qty-icon").text())
//       //get actual qty
//       var qty_of_item = parseInt($(this).find(".qty-icon").text())
//       //mutliply it with price add total
//       total += parseInt($(this).find('.price').text().replace('$', '')) * qty_of_item;
//     })
    
//     $(".order-but-container.one .bold-cash").text(qty); //set new qty
//     $("#total").text("$" + total) //set total
//   });
// });

// Preloader

function fade() {
$(".preloader").fadeOut("slow");
}
setTimeout(fade, 1500); 

$("flexContainer").ready(function() {
    $("container");
})

// Drinks qty and order panel
$('div.drink-container').click(function() {
    $('div.qty-icon-drink', this).addClass('show');
    $('div.add-order-panel').removeClass('down');
    $('div.add-order-panel').addClass('up');
});

// Add to Order Button Update
$('div.drink-container.draft').click(function() {
  // Update item total
  $(".order-but-container.one .bold-cash").text(2);
  $(".order-but-container.one #update-item").text('Items');
  $("#total").text("$" + 12);
});

// Order Received Animation Up
$('div.order-but-container.two.confirm').click(function() {
    $('div.add-order-panel').removeClass('up');
    $('div.add-order-panel').addClass('down');
    $('div.order-received-drinks-panel').removeClass('down');
    $('div.order-received-drinks-panel').addClass('up');
});

// Food qty and order panel
// $('div.food-container').click(function() {
//     $('div.qty-icon', this).toggleClass('show hide');
//     $('div.add-order-panel').toggleClass('up down');
// });

// Update drink quantity
// $(function() {
//     $('.drink-container').click( function() {
//         var num = $(this).find('.qty-icon-drink');
//         num.text( parseInt(num.text()) + 1 );
//     });
// });

