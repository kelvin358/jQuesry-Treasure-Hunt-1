$("#shuffle").click(function(){
    $("#deck").attr("src","https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695");
    $("#header").text("TRY AGAIN");
});

$("#deck").hover(function(){
    $("#deck").attr("src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/poker-playing-card-3-heart-miroslav-nemecek.jpg");
     $("#header").text("WRONG CARD");
});

$("#deck").dblclick(function(){
    $("#deck").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png");
     $("#header").text("GREAT JOB!!!");
});

$("#header").dblclick(function(){
    $("#deck").attr("src","https://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif");
     $("#header").text("IT WAS ME, DIO!!!");
});

