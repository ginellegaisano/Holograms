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
var file = 'catTest.jpg'
function changeImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var sliderValue = document.getElementById("distanceFromMiddle").value;
        reader.onload = function (e) {
            file = e.target.result; //save the target for later.
            render(e.target.result, sliderValue);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function changeSlider(input){
    // console.log(input.value);
    render(file, input.value);
}