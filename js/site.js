//====== Carousel function =======//

$(document).ready(function() {
	$("#theCarousel").carousel();
});

//====== Email validation ======//
$(document).ready(function() {

	$('#form1').validate({
		rules : {
			firstname: {
				required: true,
				minlength: 3
			},
			lastname: {
				required: true,
				minlength: 3
			},
			email : {
				email: true,
				required : true
			},
			messages: {
				firstname: "Please enter your firstname",
				lastname: "Please enter your lastname",
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				email: "Please enter a valid email address",
				agree: "Please accept our policy"
			},
		}
	});
});

