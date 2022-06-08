
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    
    

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }


        return check;

    });

    $("#ok").click(function (e) {
        var data = {};

        data.email = $("input[name=email]").val();
        data.password = $("input[name=pass]").val();
        data.first_name = "test7";
        data.last_name = "lasttest";
        
        

        $.ajax({

            url: "http://localhost:4001/register",
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(data),
            dataType: "json",
            success: function (data) {
               // var json = JSON.stringify(data);
                /*Cookies.set('token', res.token);*/

                 $.each(data, function(index, element) {
                     if (index == "token") {
                         document.cookie = "token = "+element;
                             console.log("element = " + element);
                     }
                    });
               //console.log('form submitted.' + json[6].name);
            }
        });



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