/* $(function () {
    $('#playButton').click(function () {
        $('#carouselExampleIndicators').carousel('cycle');
    });
    $('#playButton').click(function () {
        $('#carouselExampleIndicators').carousel('pause');
    });
});
*/
$('.carousel').carousel({
  interval: 1000
});

var i = 0;
var indicators = $('#carouselExampleIndicators');
$('#btn-onoff').on('click', function() {

    if(i == 0) {
        indicators.carousel('pause'); /* off carousel */
        i++;
    } else {
        indicators.carousel('cycle'); /* on carousel */
        i--;
    }
});
