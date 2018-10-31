jQuery(function() {
  jQuery('#Home').on('click',function(){
    jQuery('#HomeContent').show().siblings('div').hide();
    jQuery('#Home').addClass('active').siblings('a').removeClass('active');
  });

  jQuery('#CV').on('click',function(){
    jQuery('#CVContent').show().siblings('div').hide();
    jQuery('#CV').addClass('active').siblings('a').removeClass('active');
  });

  jQuery('#Games').on('click',function(){
    jQuery('#GamesContent').show().siblings('div').hide();
    jQuery('#Games').addClass('active').siblings('a').removeClass('active');
  });

  jQuery('#Links').on('click',function(){
    jQuery('#LinksContent').show().siblings('div').hide();
    jQuery('#Links').addClass('active').siblings('a').removeClass('active');
  });
})
