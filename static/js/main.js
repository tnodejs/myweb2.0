var socket = io.connect();
socket.on('online_list', function (data) {
    var Dom = '';
    for(var i=0; i<data.length; i++){
        Dom = Dom + "<li><a href='javascript:void(0)'>" + data[i] + "</a></li>";
        $(".friend_list").html(Dom);
    }
});

socket.on('msg', function (data) {
    var Dom = " <li><span  class='icon-user'></span><span class='live_user_name text-success'>[danhuang]</span><span class='live_message text-info'>" + data.msg + "</span></li>";
    $($('.live_area').find('ul').find('li').eq(0)).before(Dom);
});

socket.on('live_data', function (data) {
    $('.live_area').find('ul').html(data);
});

$("#send_msg").click(function(){
    var msg = $('textarea').val();
    socket.emit('public',{'msg' : msg});
});
