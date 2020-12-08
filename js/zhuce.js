$(".submit").click(function() {
    var zh = $(".text").val();
    // console.log(zh);
    var mi = $(".password").val();
    console.log(mi);
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        type: "GET",
        data: {
            username: $('.text').val(),
            password: $('.password').val()

        },
        success: function(res) {
            console.log(res);

            // 根据注册响应结果判断，执行不同的数据提示
            if (res.code == 1 && res.msg === '注册成功') {
                //注册成功
                alert("恭喜你！注册成功")

                //注册成功跳转到登录页面
                location.href = "../html/denglu.html";
                localStorage.setItem("id", res);


                localStorage.setItem("name", $(".text").val());
                localStorage.setItem("password", $(".password").val());

                localStorage.setItem("endTime", new Date().getTime() + 20 * 1000);

            } else {
                //注册失败
                alert("注册失败")
            }

        }
    })
})

// ajax账户重复
// $('.text').blur(function() {
//     var a = localStorage.getItem("name", $(".text").val());
//     // console.log(a);
//     for (var i in a);
//     console.log(a[i]);
//     $.ajax({
//         url: "http://jx.xuzhixiang.top/ap/api/reg.php",
//         type: "GET",
//         data: {
//             name: $('.text').val(),
//         },
//         success: function(res) {
//             //根据注册响应结果判断，执行不同的数据提示
//             if (res.msg === a) {

//                 // $(".yzsjh").replaceWith("<p class='yzsjh'>手机号被注册</p>").removeClass('off');

//                 console.log(name);
//                 alert("用户已注册")

//             }
//         }
//     })
// })