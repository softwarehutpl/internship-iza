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

var flag = 0;
var indicators = $('#carouselExampleIndicators');
$('#btn-onoff').on('click', function() {

    if(flag == 0) {
        indicators.carousel('pause'); /* off carousel */
        flag++;
    } else {
        indicators.carousel('cycle'); /* on carousel */
        flag--;
    }
});
