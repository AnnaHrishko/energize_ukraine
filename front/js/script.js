 $('.gumb').click(function(){
    $('.header_wrap').toggleClass('open')
});


$("body").on("click","#toup",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});

$("body").on("click","#tout",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});
  