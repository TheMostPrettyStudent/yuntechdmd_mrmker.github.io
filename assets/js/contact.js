$(document).ready(function() {
    setTimeout(function() {
        $('ul#time-line li').each(function () {
            var stop = $(window).scrollTop() + $(window).height() / 1.2;
            var litop = $(this).offset().top;
            if (stop > litop) {
                $(this).addClass('visibility');
            }
        });
    }, 2000); // 2000 milliseconds = 2 seconds

    $(window).scroll(function () {
        $('ul#time-line li').each(function () {
            var stop = $(window).scrollTop() + $(window).height() / 1.2;
            var litop = $(this).offset().top;
            if (stop > litop) {
                $(this).addClass('visibility');
            } else {
                $(this).removeClass('visibility');
            };
            console.log(litop + ' - ' + stop);
        });
    });
});

$(window).scroll(function() {
    // 取得#con_contact元素的位置和高度
    var Contact = $('#contact');
    var ContactHalfHeight = Contact.offset().top + Contact.outerHeight() / 2;

    // 如果滾動位置超過#con_contact元素的一半高度
    if ($(window).scrollTop() + $(window).height() > ContactHalfHeight) {
        $('body').addClass('light-background'); // 添加藍色背景的類別
    } else {
        $('body').removeClass('light-background'); // 移除藍色背景的類別
    }
});