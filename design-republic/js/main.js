
//form validators function
$('form').validate({
        rules: {
            
            email: {

                minlength: 3,
                maxlength: 15,
                required: true,
                validators: {
                    
                }
            },

             password: {

                minlength: 3,
                maxlength: 15,
                required: true,
            },

        },
    });