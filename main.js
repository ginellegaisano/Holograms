function stop(){
    gest.stop();
}

gest.options.subscribeWithCallback(function(gesture) {
var message = '';
if (gesture.direction) {
    for (var i = 0; i < 5; i++) {
	    setTimeout(function() {directionClick(gesture.direction)}, 100*i);
    }
  console.log(gesture.direction);
} else {
  message = gesture.error.message;
} 

});
gest.start();
// gest.options.debug(true);
// gest.options.skinFilter(true);
