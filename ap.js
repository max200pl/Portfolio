$(function () {
    let filter = $("[data-filter]"); // отслеживание клика по data-filter
    filter.on("click", function (event) {
        event.preventDefault(); // убираем стандартное поведение ссылок
        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        }
        else {
            $("[data-cat]").each(function () {
                let work__cat = $(this).data('cat');
                if (work__cat != cat) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});
