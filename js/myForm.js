/*Modal form validate for jQuery.validator */

$("#myform").validate({
          rules: {
               // проверка input c name="name"  
               name: {
                    required: true, // обязательное пле ввода 
                    minlength: 3 // минимальное количество симолов 3
               },

               // проверка input c name="name" 
               email: {
                    required: true, // обязательное пле ввода
                    email: true // проверка на правильный ввод email
               }

          },
          // в созданном label показуем название ошибки  
          messages: {
               name: {
                    required: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
               },
               email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
               }
          },

          ignoreTitle: true, //игнорирование 

          highlight: function (element, error, valid) {
               $(element).addClass(error).removeClass(valid);
               $(element.form).find("label[for=" + element.id + "]")
                    .addClass(error);
          },

          // ignoreTitle: true,

          unhighlight: function (element, error, valid) {
               $(element).removeClass(error).addClass(valid);
               $(element.form).find("label[for=" + element.id + "]")
                    .removeClass(error);
          },

          onkeyup: function () {
               this.checkForm();
               if (this.valid()) { // checks form for validity
                    $("#btn-form").addClass("light").attr("disabled", false); //Button enable if all fields valid
               } else {
                    $("#btn-form").removeClass("light").attr("disabled", true); //button will disbale if any field not valid
               }
          }

          // success: function () {
          //      $("#btn-form").addClass("light")
          // }

          // submitHandler: function () {
          //      $("#btn-form").addClass("light");
          // }
     }

);