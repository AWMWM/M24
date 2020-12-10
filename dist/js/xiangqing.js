$(function() {
    $.ajax({

        url: 'http://jx.xuzhixiang.top/ap/api/detail.php',
        data: {
            id: location.search.split('=')[1],


        },



        success: function(res) {
            console.log(res);
            let html = '';
            html += `
        <div class="mains" >
           <div class="mains-left">
                <img src="${res.data.pimg}" alt="">
                  <div id="zoom"></div>
            </div>
        
            <div class="mains-right">
                <h3>${res.data.pname}</h3>
                    <span>${res.data.pname}</span>
                    <div class="jiage">
                        <span>价格</span>
                        <b>￥${res.data.pprice}</b>
                    </div>
                    <p><span>运费</span> <span>杭州<i class="iconfont icon-down-fill1"></i></span> <span>上城区<i class="iconfont icon-down-fill1"></i></span> <span>满88包邮</span><span>配送规则</span></p>
                    <p><span>重量</span><span>0.237kg</span></p>

                    <div class="pingjia">
                        <a href="#">累计评价 <b>62888</b></a>
                        <a href="#">送天猫积分 <span>1</span></a>
                    </div>
                    <div class="shuliang">
                        <span>数量</span>
                        <input type="text" name="shuliang" id="shuliang" value="1">
                        <div class="anniu">
                            <input type="button" class="button1" value="+">
                            <input type="button"    class="button2" value="-">

                        </div>
                        <span>件</span>
                    </div>
                     <button id="ttt">加入超市购物车</button>
                    <p>
                        配送范围送货范围仅限焦作、南阳、驻马店、洛阳、开封、三门峡、新乡、郑州、鹤壁、周口、安阳、漯河、商丘、濮阳、济源、许昌、平顶山、信阳地区(生鲜类别仅限部分地区) 支付方式  检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。
                    </p>
            </div>
             <div class="mains-bottom">
                <ul>
                    <li>
                        <img src="${res.data.pimg}" alt="">
                    </li>
                    <li>
                        <img src="${res.data.pimg}" alt="">
                    </li>
                    <li>
                        <img src="${res.data.pimg}" alt="">
                    </li>
                    <li>
                        <img src="${res.data.pimg}" alt="">
                    </li>
                    <li>
                        <img src="${res.data.pimg}" alt="">
                    </li>
                </ul>
            </div>
            <p><b>收藏商品 （223945人气）</b> <span>举报</span></p>
               </div> `


            $('.mains').html(html);
            foo()
        }

    });

    function foo() {

        $("#ttt").click(function() {
            //   alert("添加成功");
            $.ajax({
                type: "get",
                url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
                data: {
                    uid: localStorage.getItem("u-id"),
                    pid: location.search.split('=')[1],
                    pnum: num,
                },
                success: function() {
                    location.href = "../html/gouwuches.html";
                }
            })

        });

        //   $('.button1').click(function() {
        //       //   $('#shuliang').val() ++;
        //       console.log($('#shuliang').val() ++);

        //   })
        let num = !2;
        console.log(num);
        $('.button1').click(function() {
            num++;
            $('#shuliang').val(num);
        })
        $('.button2').click(function() {
            if (num <= 1) {
                num = 1;
                return;
            }

            num--;
            $('#shuliang').val(num);
        })

    }

})