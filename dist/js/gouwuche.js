aa();

function aa() {




    //单个checkbox点击事件

    $(".mains-one").on("click", function() {
        //获取所有单个checkbox
        var checkBox = $("input.mains-one");
        //获取选中的checkbox
        var selectCheckBox = $("input.mains-one:checked");
        //如果个数相同  全选按钮选中
        if (checkBox.length == selectCheckBox.length) {
            $('input[name="selectall"]').prop('checked', true);

        }
        var checkedNum = 0;
        $(".mains-one").each(function() {
            if ($(this).is(':checked')) {
                checkedNum++;
            } else {
                $('input[name="selectall"]').prop('checked', false);
            }

        });


    });

    $('input[name="selectall"]').click(function() {
        // alert(this.checked);  
        //当全选按钮是选中状态
        if ($(this).is(':checked')) {
            //循环下面所有checkbox
            $('.mains-one').each(function() {
                //将checkbox状态改为选中
                $(this).prop("checked", true);
            });
        } else {
            $('.mains-one').each(function() {
                $(this).removeAttr("checked", false);
            });
        }
    });


}