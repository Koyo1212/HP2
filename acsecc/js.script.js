$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});

$('#manu a[href]').on('click', function (event) {
  $('.navToggle').trigger('click');
});




function copy() {
  var moji = "https://www.google.co.jp/maps/place/%E3%81%99%E3%81%8D%E5%AE%B6+%E5%AF%8C%E5%A3%AB%E5%AE%AE%E5%BA%97/@35.23992,138.6169151,17z/data=!3m1!4b1!4m5!3m4!1s0x601bd13e1edb3b23:0x6c9ad6796c74283b!8m2!3d35.2399221!4d138.6191478?hl=ja";
  var element = document.createElement("textarea");
  element.setAttribute("id", "target");
  element.setAttribute("type", "hidden");
  element.textContent = moji;
  document.body.appendChild(element);

  element.select();
  document.execCommand('copy');
}