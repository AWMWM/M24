$(function() {
    let flag = true;
    $(window).scroll(function() {
        if (flag) {
            let st = $(this).scrollTop();
            if (st > 200) {
                $("#floorNav").fadeIn();
            } else {
                $("#floorNav").fadeOut();
            }
            $("#floorNav~div").each(function() {
                if (st >= $(this).offset().top - $(this).outerHeight()) {
                    let index = $(this).index();

                    $("#floorNav li").eq(index).addClass("hover").siblings().removeClass(
                        "hover");
                }
            })
        }
    });

    $("#floorNav li:not(:last)").click(function() {
        flag = false;
        let index = $(this).index();
        $("body,html").stop().animate({
            "scrollTop": $("#floorNav ~ div").eq(index).offset().top
        }, 800, function() {
            flag = true;
        });

        $(this).addClass("hover").siblings().removeClass("hover");


    })

    $("#floorNav li:last").click(function() {
        flag = false;
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 800, function() {
            flag = true;
        });

        $("#floorNav").fadeOut();

    })


})