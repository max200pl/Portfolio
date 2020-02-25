/* ====================== Modal =====================*/

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
     event.preventDefault();

     let $this = $(this);
     let modalId = $this.data("modal");

     $(modalId).addClass("show");
     $("body").addClass("no-scroll")
     $("body").find(".scrollup").css("display", "none");
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
          $("body").find(".scrollup").css("display", "");
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

/*=======================Modal resume=======================*/

let progress = document.querySelectorAll('[data-progress]');

window.addEventListener('load', () => {
     progress.forEach(element => {

          let progress_width = +(element.getAttribute('data-progress'));

          //Если наши скиллы выше 100%, немного становимся скромнее.
          if (progress_width > 100) {
               progress_width = 100;
          }
          element.style.width = progress_width + '%';
     })
})