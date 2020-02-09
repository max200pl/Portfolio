/* ====================== Modal =====================*/

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
     event.preventDefault();

     let $this = $(this);
     let modalId = $this.data("modal");

     $(modalId).addClass("show");
     $("body").addClass("no-scroll");

     setTimeout(function () {
          $(modalId)
               .find(".modal__dialog")
               .css({
                    transform: "scale(1)"
               });
     }, 200);

     worksSlider.slick("setPosition");
});

modalClose.on("click", function (event) {
     event.preventDefault();

     let $this = $(this);
     let modalParent = $this.parents(".modal");

     modalParent.find(".modal__dialog").css({
          transform: "scale(0)"
     });

     setTimeout(function () {
          modalParent.removeClass("show");
          $("body").removeClass("no-scroll");
     }, 200);
});

$(".modal").on("click", function (event) {
     let $this = $(this);

     $this.find(".modal__dialog").css({
          transform: "scale(0)"
     });

     setTimeout(function () {
          $this.removeClass("show");
          $("body").removeClass("no-scroll");
     }, 200);
});

$(".modal__dialog").on("click", function (event) {
     event.stopPropagation();
});

/*=====================Button modal form===================*/

$("#btn-form").click(function (event) {
     event.preventDefault();

     setTimeout(function () {
          $(".modal").removeClass("show");
          $("body").removeClass("no-scroll");
     }, 1000);

     $("#modal-success").css("display", "flex");
     $("#modal-success")
          .animate({
               opacity: "1",
               top: "20%"
          }, 2000, "linear").animate({
               opacity: "0",
               top: "-10%"
          }, 2000, "linear");
});