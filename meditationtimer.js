var meditationTime = 60;

var meditate = function () {
    setInterval(function () {
        if (meditationTime >= 60) {
            meditationTime--;
            $("#meditationButton").html("<h3>Breathe.....</h3>" + '<div id="meditationTimer"><h5>' + meditationTime + "</div>")
        } else if (meditationTime = 0) {
            meditationTime = 60
        }
    }, 1000)

}

$(document).on("click", "#meditationButton", function () {


    meditate();
    
})


``
// I'll include a link to download a PSD of something I mocked up. I would like to have you make a few changes like the background color. As you will see It is just one page that scrolls down. There are a couple elements I want to include that you will see in the mock up: a counter/timer and a chime sound when the one minute is done. The PSD was a free template in Photoshop I only edited the site not the mobil version, Im guessing you have your own template for this kind of site. There is a big gap in the PSD that I left because I’m lazy and didn’t want to edit to much if you are going to use a different template. 

// I have a few elements from a style guide that I would like to stick with such as fonts and background colors. Im going to include the colors from style guide that we tested a few years ago so I only want to keep the fonts and color pallet. The font I would like to use is Lucida Grande - #666 and #333 for shades of gray depending on background. 

// I would also like to know how many people click on the Meditate Now  button and once we have a large number then I would like to display that at the bottom of the page somewhere. 

// There is a FaceBook page for the site that has about 70,000 followers and I would like to include a link to that at the bottom of the page too. We can put that in the footer with a link to email as well “service@meditation.com"

// The issue that has plagued the site is the bounce rate. I would like to make sure the site is on point with SEO.

// Im totally open for ideas and creativity if anything jumps out at you that you think would be cool. My main goal is to test this idea and see how much traction we get with it. Clean and simple with one feature is what I want.

// “Meditate now” is a registered trademark so please add the ® whenever it is used 

//  Let me know what you can do for a “share button”. Maybe a personalized little message can be sent to through text, social media or email “Take a minute for YOU” with a link back to the site.  

// Im not great with web layout so you can probably make all of the fonts smaller. 

// So, take a look at everything and shoot me questions or give me a call any time. Also send me a price estimate and anything you feel that Im missing or ideas you have to make it better. Looking forward to working with someone local. I live in Ojai and was raised here. I have had a hard time finding good web people locally. This domain has been a passion project for the last 7-8 years I have tried several sites and nothing has really stuck or did very well. I took a break for the last year and a half and let Sura take a stab at it. She didn’t get much traction from it ether. 

// Download the PSD and logo here - https://d.pr/f/a0wylE


// I have Wordpress hosting at GoDaddy and can give you access anytime. We can use a service like Wix too. 

// Let me know if this looks easy and if you want to tackle it and how much you would charge me. 

// Cheers, 

// Mike

var timer;
function myTimer() {
    var sec = 60
    clearInterval(timer);
    timer = setInterval(function () {
        $('#meditationTime').text(sec--);
        if (sec == -1) {
            clearInterval(timer);

        }
    }, 1000);

}

$("#meditationButton").click(function () {
    $("#meditationTime").append('<button id= "reset">Reset</button>')
    myTimer();
});

$(document).on("click", "#reset", function () {
    myTimer();
});
    


//pseudocode the timer---