$(function () {
    var animated = true;
    var audioplayer = document.getElementById("player");
    player.play();
    $('.blue-arrow-btn').hover(
        function () {
            $('.sergii-text').show();
        },
        function () {
            $('.sergii-text').hide();
        }
    );

    $('.yellow-arrow-btn').hover(
        function () {
            $('.pasha-text').show();
        },
        function () {
            $('.pasha-text').hide();
        }
    );

//    box start/stop
     $('.boom-box').click(function(){
         if(animated){
             stopAnimation(this);
             audioplayer.pause();
             animated=false;
         }
         else
         {
             startAnimation(this);
             audioplayer.play();
             animated=true;
         }
     });
    function stopAnimation(element)
    {
        $(element).css("-webkit-animation", "none");
        $(element).css("-moz-animation", "none");
        $(element).css("-ms-animation", "none");
        $(element).css("animation", "none");
    }
    function startAnimation(element)
    {
        var ANIMATION = "play .4s steps(4) infinite";
        $(element).css("-webkit-animation", ANIMATION);
        $(element).css("-moz-animation", ANIMATION);
        $(element).css("-ms-animation", ANIMATION);
        $(element).css("animation", ANIMATION);
    }
});
