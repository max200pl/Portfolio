/*FILTER*/
$(function () {
    let filter = $("[data-filter]"); // отслеживание клика по data-filter
    filter.on("click", function (event) {
        event.preventDefault(); // убираем стандартное поведение ссылок
        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let work__cat = $(this).data('cat');
                if (work__cat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    /*MODAL*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) { //при клике вызываем функцию
        event.preventDefault() // отмена свойст кнопки

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show'); //подставляем # селектрой ID
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

    });

    modalClose.on("click", function (event) { //при клике вызываем функцию
        event.preventDefault() // отмена свойст кнопки
        let $this = $(this);
        let modalParent = $this.parents('.modal'); //получаем радительский элемент

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });


        setTimeout(function () {
            modalParent.removeClass('show'); //подставляем # селектрой ID
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function (event) { //при клике вызываем функцию
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });


        setTimeout(function () {
            $this.removeClass('show'); //подставляем # селектрой ID
            $("body").removeClass('no-scroll');
        }, 200);

    });


    $(".modal__dialog").on("click", function (event) { //при клике вызываем функцию
        event.stopPropagation();
    });


});
