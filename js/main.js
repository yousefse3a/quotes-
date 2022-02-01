"use strict"
"use strict";

$(document).ready(function () {

  check_quote_local();
});
function check_quote_local() {
  if (localStorage.getItem("quotes") == null) {
    var arr_of_quote = [
      {
        saying: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
      },
      {
        saying: "Albert Einstein",
        quote:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      },
      { saying: "Frank Zappa", quote: "So many books, so little time." },
      {
        saying: "Marcus Tullius Cicero",
        quote: " A room without books is like a body without a soul.",
      },
      {
        saying: "Bernard M. Baruch",
        quote:
          " Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      },
      {
        saying: "Dr. Seuss",
        quote:
          "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      },
      {
        saying: "Mae West",
        quote: "You only live once, but if you do it right, once is enough.",
      },
      {
        saying: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world.",
      },
      {
        saying: "Robert Frost",
        quote:
          "In three words I can sum up everything I've learned about life: it goes on.",
      },
    ];
    localStorage.setItem("quotes", JSON.stringify(arr_of_quote));
  }
  var arr_obj_quote = JSON.parse(localStorage.getItem("quotes"));
  display_quote(arr_obj_quote);
}

function display_quote(arr_obj_quote) {
  var length_obj = Object.keys(arr_obj_quote).length;
  var i = Math.floor(Math.random() * length_obj);
  console.log(arr_obj_quote[i].quote);
   
  $("#quote,#saying,#sayingImg,.saying>div").fadeOut(500,function(){
    document.getElementById("quote").innerHTML=arr_obj_quote[i].quote ;
    document.getElementById("saying").innerHTML = arr_obj_quote[i].saying;
    document.getElementById("sayingImg").src = `images/${arr_obj_quote[i].saying}.jpg`;
    $(".dn").removeClass("dn");
    $("#sayingImg").fadeIn(300);
    $(".saying>div").fadeIn(350);
    $("#saying").fadeIn(400);
    $("#quote").fadeIn(500);
  });
  $(".Qoute").css({"display": "flex"});
}

