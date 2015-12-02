function stop(){
    gest.stop();
}

gest.options.subscribeWithCallback(function(gesture) {
var message = '';

if (gesture.direction) {
    $('#motion_label').text(gesture.direction);
    $('#motion_label').css('color', '#fff');
    setTimeout(function() {
        $('#motion_label').css('color', '#000');
    }, 500);

    for (var i = 0; i < 5; i++) {
	    setTimeout(function() {directionClick(gesture.direction)}, 100*i);
    }
} else {
  message = gesture.error.message;
} 

});
gest.start();
// gest.options.debug(true);
// gest.options.skinFilter(true);
//
