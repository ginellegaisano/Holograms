function stop(){
    gest.stop();
}

gest.options.subscribeWithCallback(function(gesture) {
var message = '';

if (gesture.direction) {
    $('#motion_label').text(gesture.direction);
    $('#motion_label').css('color', '#fff');
    setTimeout(function() {
        $('#motion_label').css('color', 'rgba(54, 25, 25, .5)');
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
//

function changeImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            render(e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
