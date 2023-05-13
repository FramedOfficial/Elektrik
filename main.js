//alert("hello");

// --------------------------------------------------------------
// CAROUSEL
// --------------------------------------------------------------

$("#carousel").skippr({
    autoPlayDuration: 1500,
    speed: 500,
    navType: 'bubble',
    arrows: true,
    autoPlay: true
});

// other options for carousel
// autoplayduration is the wait time between each slide 
// speed is the slide speed in milliseconds.
// navType:'bubble' display dots. change to   
// navType:'block'  to display boxes
// arrows:false      will switch off arrows


// --------------------------------------------------------------
// COLOUR CHANGER
// --------------------------------------------------------------

// javascript settings for colour changing the hero h1 tag.

$(".countdown").mousemove(function (e) {
    red = e.pageX;
    green = e.pageY;
    blue = 255;
    rgb = "rgb(" + red + "," + green + "," + blue + ")";
    $(".hero h1").css("color", rgb);
});


// --------------------------------------------------------------
// COUNTDOWN TIMER
// --------------------------------------------------------------

/*

to add a countdown timer to your page, add the  HTML below to your page.
Add it wherever you want the countdown timer to display

  <p id="countdown">   Countdown To Awesomeness!   </p>
  
   Add CSS to your stylesheet to control the display of the text.
   
   for example if you add your HTML code to your hero section, use something like this : 
    
    .hero p{
        color:red;
    }

*/


// Set the date we're counting down to
var countDownDate = new Date("Dec 19, 2023 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "Days " + hours + "hrs " +
        minutes + "m " + seconds + "s ";
    // Enter code.

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "ENJOY";
    };
}, 1000);

$(".richiehawtin img").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "100%")
    $(".richiehawtin h1").css("background-color", "#F3516F")
    $(".richiehawtin p").css("background-color", "#F3516F")
    $(".robagwhrume").css("opacity", "50%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "50%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "50%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "50%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".robagwhrume img").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "50%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "100%")
    $(".robagwhrume h1").css("background-color", "#F3516F")
    $(".robagwhrume p").css("background-color", "#F3516F")
    $(".oscarmulero").css("opacity", "50%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "50%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "50%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".oscarmulero img").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "50%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "50%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "100%")
    $(".oscarmulero h1").css("background-color", "#F3516F")
    $(".oscarmulero p").css("background-color", "#F3516F")
    $(".roberthood").css("opacity", "50%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "50%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".roberthood img").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "50%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "50%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "50%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "100%")
    $(".roberthood h1").css("background-color", "#F3516F")
    $(".roberthood p").css("background-color", "#F3516F")
    $(".surgeon").css("opacity", "50%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".surgeon img").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "50%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "50%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "50%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "50%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "100%")
    $(".surgeon h1").css("background-color", "#F3516F")
    $(".surgeon p").css("background-color", "#F3516F")
})

$(".ticketssection").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "100%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "100%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "100%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "100%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "100%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".ticketssection").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "100%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "100%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "100%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "100%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "100%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})

$(".vibes").on("mouseover", function () {
    $(".richiehawtin").css("opacity", "100%")
    $(".richiehawtin h1").css("background-color", "#212121")
    $(".richiehawtin p").css("background-color", "#212121")
    $(".robagwhrume").css("opacity", "100%")
    $(".robagwhrume h1").css("background-color", "#212121")
    $(".robagwhrume p").css("background-color", "#212121")
    $(".oscarmulero").css("opacity", "100%")
    $(".oscarmulero h1").css("background-color", "#212121")
    $(".oscarmulero p").css("background-color", "#212121")
    $(".roberthood").css("opacity", "100%")
    $(".roberthood h1").css("background-color", "#212121")
    $(".roberthood p").css("background-color", "#212121")
    $(".surgeon").css("opacity", "100%")
    $(".surgeon h1").css("background-color", "#212121")
    $(".surgeon p").css("background-color", "#212121")
})