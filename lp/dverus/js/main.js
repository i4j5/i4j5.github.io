window._color = $('.color:radio').val();
window._glass = $('.glass:checkbox').is(':checked');
window._model = $('.model:radio').val();

window.__model = $('[value='+_model+']').attr('name');
window.__collection = $('.act').attr('name');
window.__color = $('.color:radio').attr('name');
window.__furnirura = $('#furnirura :checkbox').is(':checked');
window.__install = $('#install :checkbox').is(':checked');

window.switchText =  $('#val').html();


function tel(){
  window.location='tel:83022397530';
  //yaCounter24844460.reachGoal('phone');
  return false;
}

function config(){

  if(_glass){
    var g = '_1';
  }
  else{
    var g = '';
  }

  var config = _model +'/'+ _color +g+'.jpg';
  $('#config-img').attr('src', 'img/d/' + config);

  //yaCounter24844460.reachGoal('config');

}

$(document).ready(function(){

  var burl = location.href.replace("http://","").split("/")[0];
  var utm = location.href.replace("http://"+burl,"").split("?")[1]
  if(utm){
    var utm = utm.split("&");

    var comment = '';
    for (var i in utm){
      comment = utm[i]+'  '+comment;
    }

    $('form').each(function(){
      $(this).prepend("<input type='hidden' name='result' value='"+comment+"'>");
    });
  }

  $('#config-button').click(function(){
    switchText =  $('#val').html();
    var __config = __collection+'  '+__model+'  Цвет: '+__color+'  Количество: '+switchText;

    if(_glass){
      __config = __config + '  Cтекло';
    }

    if(__furnirura){
      __config = __config + '  Фурнитура';
    }

    if(__install){
      __config = __config + '  Установка';
    }

    $('#pr-c').val(__config);
    $('#pr').modal('show');
  });

/////////////////////

  $('.glass:checkbox').change(function(){
    _glass = $(this).is(':checked');
    config();
  });

  $('#furnirura:checkbox').change(function(){
    __furnirura = $(this).is(':checked');
  });

  $('#install:checkbox').change(function(){
    __install = $(this).is(':checked');
  });

  $('.color:radio').change(function(){
    _color = $(this).val();
    __color = $(this).attr('name');
    config();
  });

  $('.model:radio').change(function(){
    _model = $(this).val();
    __model = $(this).attr('name');
    config();
  });

  $('#p').click(function(){
    switchText =  $('#val').html();
    switchText = Number(switchText);
    $('#val').html(switchText+1);
  });

  $('#m').click(function(){
    switchText =  $('#val').html();
    switchText = Number(switchText);
    if(switchText != 1){
      $('#val').html(switchText-1);
    }
  });

  $('.nav-config').click(function(){
    $('.nav-config').removeClass('act');
    $(this).addClass('act');
    var data =  $(this).attr('data');
    $('.collection').css('display', 'none')
    $('.collection-'+data+' :first').click();
    $('.collection-'+data).css('display', 'block');
    __collection = $(this).attr('name');
    //config();
  });
//////////////////////////////
  $('.img-lg').click(function(){
    var src = $(this).attr('data-src');
    $('#img-lg').attr('src', src);
    $('#img').modal('show');
  });

   $(".bxslider").bxSlider({
    auto: true,
    speed: 400,
    pause: 5000,
    //mode: "vertical",
    pagerCustom: "#makeMeScrollable",
    controls: false
  });

  $("div#makeMeScrollable").smoothDivScroll({
    //mousewheelScrolling: "allDirections",
    autoScrollingMode: "onStart"
  });


  //var navLi = $('nav li');

  // $('.thing').waypoint(function() {
  //   var hash = $(this).attr('id');
  //   $.each(navLi, function(){
  //     if( $(this).children('a').attr('href').slice(1) == hash ){
  //       $('.current').removeClass('current');
  //       $(this).children('a').addClass('current');
  //     }
  //   })
  // }, {offset: '2px'});

  var now = new Date();
  var aDate = now.getDate();
  if(aDate != 31){
    var aDate = now.getDate() + 1;
  }
  var aMonth = now.getMonth()
  switch(aMonth){
    case 0:
      aMonth = 'января'
      break;
    case 1:
      aMonth = 'февраля'
      break;
    case 2:
      aMonth = 'марта'
      break;
    case 3:
      aMonth = 'апрель'
      break;
    case 4:
      aMonth = 'мая'
      break;
    case 5:
      aMonth = 'июля'
      break;
    case 6:
      aMonth = 'июня'
      break;
    case 7:
      aMonth = 'августа'
      break;
    case 8:
      aMonth = 'сентября'
      break;
    case 9:
      aMonth = 'октября'
      break;
    case 10:
      aMonth = 'ноября'
      break;
    case 11:
      aMonth = 'декабря'
      break;
  }

  $('.action-html').html('акция действует до  '+aDate+' '+aMonth+'!');

  var endTS = now.getTime()+94176000;
  setInterval(function(){
      now = new Date();
      var totalRemains = (endTS-now.getTime());
      if (totalRemains>1){ 
          var RemainsSec=(parseInt(totalRemains/1000)); 
          var RemainsFullDays=(parseInt(RemainsSec/(24*60*60))); 
          var secInLastDay=RemainsSec-RemainsFullDays*24*3600; 
          var RemainsFullHours=(parseInt(secInLastDay/3600)); 
          if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours}; 
          var secInLastHour=secInLastDay-RemainsFullHours*3600; 
          var RemainsMinutes=(parseInt(secInLastHour/60)); 
          if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes}; 
          var lastSec=secInLastHour-RemainsMinutes*60; 
          if (lastSec<10){lastSec="0"+lastSec}; 
          if (RemainsFullDays<10){RemainsFullDays="0"+RemainsFullDays};
          $('.digits').html("<span>"+RemainsFullDays+"</span> <span>"+RemainsFullHours+"</span> <span>"+RemainsMinutes+"</span> <span>"+lastSec+"</span>");
      } 
      else {$(".timer").remove();} 
  },1000);


  // var v = $(".CheckBoxClass:radio").val();
  //  $(".CheckBoxClass:radio").change(function(){
  //   v = $(this).val();
  //   $(".CheckBoxClass:radio + .r").removeClass("rr"); 
  //       $(this).next("label").addClass("rr");
  //  });

  var navLi = $('.nav li');

  $('.thing').waypoint(function() {
    var hash = $(this).attr('id');
    $.each(navLi, function(){
      if( $(this).children('a').attr('href').slice(1) == hash ){
        $('.current').removeClass('current');
        $(this).children('a').addClass('current');
      }
    })
  }, {offset: '300px'});




  $('.scroll').click(function(){
      var idscroll = $(this).attr('href');
      $.scrollTo(idscroll, 2000);
      return false;
  });


  // $('.pr').click(function(){
  //   var s = 'Площадь потолка: ' + $('#s').val();
  //   var vv = 'Вид потолка: ' + v;
  //   var n = 'Количество светильников: ' + $('#n').val();

  //   $('#pr-c').val(s+' М2;  '+vv+';  '+n+' шт')
  //   $('#pr').modal('show');
  // });

  $('.ajax').each(function(){
    $(this).validate({
      unhighlight: function (element, errorClass) {
        $(element).addClass('success').removeClass('error');
      },
      submitHandler: function(form, e) {
        e.preventDefault();
        var form = $(form),
        submitBtn = form.find('.button')
        str = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');
        submitBtn.attr('data-loading-text', 'Обработка...');
        submitBtn.button('loading');
        $.ajax({
          url: './',
          type: 'get',
          data: str
        })
        .done(function() {
           $('#call').modal('hide');
           $('#pr').modal('hide');
           $('#ok').modal('show');
           //yaCounter24844460.reachGoal('order');
        })
        .always(function() {
          submitBtn.button('reset');
        });
      },
      rules: {
        'phone': {
          required: true,
        },
        'name': {
          required: true
        },
        'email': {
          required: true
        }
      },
      errorPlacement: function(error, element){
        $(element).addClass('error').removeClass('success');
      }
    });//validate
  });//ajax


  $('.view_images img').click(function() {
      var src = $(this).attr('src');
      
      var view = $(this)
        .parent()
        .parent()
        .children('.view')
        .children().get(0);
      $(view).attr('src', src);
  });


  $('.img-lg img').click(function(){
    var srcLg = $(this).attr('data-src');
    var srcLg = $(this).attr('src');
    $('#img-lg').attr('src', srcLg);
    $('#img').modal('show');
  });


});//


$(window).scroll(function () {
  // var top = $(window).scrollTop();
  // if(top > 300 && screen.width >= 1040){
  //   $('nav').addClass('menu');
  // }else{
  //   $('nav').removeClass('menu');
  // }
});


