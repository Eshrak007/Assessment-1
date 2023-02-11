jQuery(document).ready( function () {
// sticky navbar
  jQuery(document).scroll(function(){
      let secheight = jQuery('.creative').height();
      var documentHeight = jQuery(document).scrollTop();
      //console.log(documentHeight);
      if(documentHeight>secheight){
        jQuery('#nav').addClass("fixed-top").css({"background":"rgba(235,235,235,.9)"});
      }else{
        jQuery('#nav').removeClass("fixed-top").css({"background":"#fff"});
      }
     });
    //  smooth Scrolling
     jQuery(".navbar .nav-item .nav-link").click(function (e) {
      e.preventDefault();
      var target = jQuery(this).attr('href');
      var pos = jQuery(target).offset().top;
      jQuery('html, body').animate({ scrollTop: pos }, 500);

  });
})