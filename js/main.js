
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');



    $("#ok").on("click",function () {
       /* var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }*/


        var data = {};

        data.email = $("input[name=email]").val();
        data.password = $("input[name=pass]").val();
        data.first_name = $("input[name=fname]").val();
        data.last_name = $("input[name=lname]").val();



        $.ajax({

            url: "http://localhost:4001/register",
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(data),
            dataType: "json",
            success: function (data) {
                // var json = JSON.stringify(data);
                /*Cookies.set('token', res.token);*/
                console.log(JSON.stringify(data));

                $.each(data, function (index, element) {
                    if (index == "token") {
                        document.cookie = "token = " + element;
                    };
                    if (index == "_id") {
                        document.cookie = "_id = " + element;
                        
                    };
                });
               
            }
        });
        console.log('form submitted.');
        

    });



    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);