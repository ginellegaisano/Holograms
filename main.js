function stop(){
    gest.stop();
}

gest.options.subscribeWithCallback(function(gesture) {
var message = '';
var styles = {
    copy: 'font: normal 35px/1.1 \"Helvetica Neue\", Helvetica, Arial, sans-serif; color: #fff; font-size: 45px; text-align: center;',
     general: 'display: block; background-color: #F0F0F0; z-index: 100; border-radius: 10px;'
    };
var messageContainerStyle = styles.copy + styles.general;

if (gesture.direction) {
    $('#motion_label').text(gesture.direction);
    $('#motion_label').css('style', messageContainerStyle);
    setTimeout(function() {
        $('#motion_label').css('style', 'display: none;');
    }, 3000);

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
