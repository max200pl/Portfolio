$(function () {

    /* Scroll offset ==============*/
    $('.nav a[href^="#"]').click(function () {
        let offset = $(".header").innerHeight();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 500);
        return false;
    });

    /* Filter works=====================*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data("filter");

        if (cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data("cat");

                if (workCat != cat) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });

    /* Mobli nav ========================*/
    const nav = $("#nav");

    $("#navToggle").on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // /*==================Accordeon modal-resume========================*/

});