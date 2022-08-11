$(function(){

  
  //menu seleção(barra de baixo)
  
$('.menu_site li').click(function(e) {
$('.menu_site li').removeClass('click_menu');
$(this).addClass('click_menu');
});


$('.menu_site a').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;
      
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 900);
});
  
 
 $(".sobre_obj_metas").click(function() {
    $this = $(this); //Caching. Not really needed for this example. But anyway :)
    $this.children(".sobre_obj_metas_texto").slideToggle("fast");
 });


$('#abrir').click(function(event) {
  event.preventDefault();
  $('.menu_mobile').toggle(300);
});


$('.fechar').click(function(event) {
  event.preventDefault();
  $('.mobile i').removeClass('fas fa-times');
  $('.mobile i').addClass('fas fa-bars');
});

$('.card_equipe').hover(function(){
	    $this = $(this);
		$this.children(".equipe_redes_sociais").toggle();
		  });

});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    /*$('.menu-fixo').css('display','block');*/
    $('.menu').addClass('menu_fixo');
    menu_aparecer.slideDown("fast");
  } else {
    /*$('.menu-fixo').css('display','none');*/
    $('.menu').removeClass('menu_fixo');
    menu_aparecer.slideUp("fast");

}



});