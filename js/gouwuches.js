$(function() {


    function show() {

        $.ajax({
            type: "Get",

            url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
            data: {
                id: localStorage.getItem("u-id"),
            },

            success: function(res) {
                console.log(res.data);
                let products = res.data;
                var str = '';
                products.forEach(v => {
                    var nums = v.pprice * v.pnum;
                    str += `
                
                  <div class="mains" mains_id="${v.pid}" >
                        <div class="zuixins"  >
                            <input type="checkbox" id="one" class="mains-one">
                            <span><a>${v.pname}</a></span>
                            <span><img src="${v.pimg}" width="80px" height='80px' /></span>
                            <span>${v.pprice}</span>
                            <span><button class="jian">-</button><input type="text" data-num="${v.pnum}" id="vs" value="${v.pnum}" />
                                <button class="jia">+</button>
                            </span>
                            <span class="dels"><a href="#">删除</a></span>
                        </div>
                    </div>
                    
                    
        `
                })
                $('.main').html(str);
                updata();
                del();
            }
        })



    }
    show();



    function del() {
        var all = $('.dels')
        console.log(all);
        $.each(all, function(index, obj) {
            // console.log(obj);
            $(all).click(function() {
                $(this).parent().parent().remove();
                console.log($(this).parent().parent().attr("mains_id"))
                let mmm = $(this).parent().parent().attr("mains_id");
                $.ajax({
                    type: "Get",
                    url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    data: {
                        uid: localStorage.getItem("u-id"),
                        pid: mmm
                    },
                    // async: false,

                })
            })

        })

        // var mains = $('.mains');
        // $.each(mains, function(index, obj) {
        //     // console.log(index, obj);
        //     var a = $(mains)[index]
        //         // console.log(a);
        //     var b = a.getAttribute("mains_id");
        //     // b = Number(b);
        //     // console.log(b);


        // })
    }


    //修改商品

    // function update() {

    //     let jian = $('.jian');
    //     let jia = $('.jia');

    //     console.log(jian);
    //     console.log(jia);


    //     $.each(jia, function(index, obj) {
    //         let num = Number($('#vs').val());
    //         // console.log(num);
    //         var c = $(jia)[index];
    //         // console.log(c);
    //         // console.log(jia);
    //         $(jia[index]).click(function() {
    //             console.log($('#vs').val(), index);
    //             let num = ($('#vs').val());
    //             // console.log(num);
    //             num++;
    //             $('#vs').val(num);


    //         });

    //     })

    //     $.each(jian, function(index, obj) {
    //         // let num = Number($('#vs').val());
    //         // console.log(num);
    //         // var c = $(jia)[index];
    //         // console.log(jia);

    //         $(jian[index]).click(function() {
    //             let num = Number($('#vs').val());
    //             console.log(num);
    //             if (num <= 1) {
    //                 num = 1;
    //                 return;
    //             }

    //             num--;
    //             $('#vs').val(num);
    //         })

    //     })




    // }
    // update();


    function updata() {
        $('.jia').click(function() {


            let nowNum = $(this).prev().attr('data-num');
            console.log(nowNum);
            $(this).prev().attr('data-num', nowNum - 0 + 1);
            console.log(nowNum);
            $(this).prev().val(nowNum - 0 + 1);
            let a = $(this).prev().val(nowNum - 0 + 1);





            $.ajax({
                    url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                    type: "Get",
                    data: {
                        uid: localStorage.getItem('u-id'),
                        pid: $(this).attr('mains-id'),
                        pnum: +nowNum + 1
                    },
                    success: () => {

                    },
                    // error: (error) => {
                    //     $(this).prev().val($(this).prev().val() - 0 + 1);
                    //     $(this).parent().next().html(parseInt($(this).parent().prev().html()) * $(this).prev().val());

                    // }
                })
                // console.log(nowNum)
        })


        $('.jian').click(function() {


            let nowNum = $(this).next().attr('data-num');
            if ($(this).next().val() - 0 == 1) {
                return
            }
            console.log(nowNum);
            $(this).next().attr('data-num', nowNum - 1);
            console.log(nowNum);
            $(this).next().val(nowNum - 1);
            let a = $(this).next().val(nowNum - 1);

            $.ajax({
                url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                type: "Get",
                data: {
                    uid: localStorage.getItem('u-id'),
                    pid: $(this).attr('mains-id'),
                    pnum: nowNum - 1,

                },

                // success: () => {
                //     $(this).next().val($(this).next().val() - 1)
                //     $(this).parent().next().html(parseInt(parseInt($(this).parent().prev().html()) * $(this).next().val()))

                // },
                error: (error) => {
                    console.log(error)
                }
            })


            // console.log(nowNum)
        })

    }
})