// Login Form
$(document).ready(function(){

    $(window).resize(function(){
        var h = $(window).height();
        var w = $(window).width();
        if(w < 1367) {
        $('body').width('1360px');
        }
        if(w > 1366) {
            $('body').width('100%');
            }
    });
});

$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
   
    button.removeAttr('a');
    button.mouseenter(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
      button.mouseleave(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
      box.mouseenter(function()
      {
        $('#password').value('h');
              box.toggle();
        button.toggleClass('active');
      });
       box.mouseleave(function()
      {
              box.toggle();
        button.toggleClass('active');
      });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
            
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
