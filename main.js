function stop(){
    gest.stop();
}

gest.options.subscribeWithCallback(function(gesture) {
var message = '';
if (gesture.direction) {
	directionClick(gesture.direction);
  console.log(gesture.direction);
} else {
  message = gesture.error.message;
} 

});
gest.start();
// gest.options.debug(true);
// gest.options.skinFilter(true);
