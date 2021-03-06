﻿/*********************************************************************************/
/* Simon js                                                                   */
/*********************************************************************************/

var cheackResult = 0;

$(document).ready(function () {
    /*驗證帳號 後代選擇器*/
    $("#RegisterAccountCol input[name='Account']").blur(function () {
        /*宣告格式*/
        var checkEmailRegex = new RegExp("\\w+([.-]\\w+)*@\\w+([.-]\\w+)+", "gi");
        /*欄位資料*/
        var data = $.trim($("#UserAccount").val());
        console.log("data:" + data);
        /*判斷是否符合格式*/
        var result = checkEmailRegex.test(data);
        console.log("result:" + result);
        /*格式不符時 cheackResult為1*/
        if (!result) {
            cheackResult = 1;
            $("#RegisterAccountCol input[name='Account']").select();
            $("#info #infoMsg").text("電子信箱格式不符");
            console.log("cheackResult:" + cheackResult);
        }
        else {
            $("#info p").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });
    /*驗證姓氏不得超過10個中文字*/
    $("input[name='UserFirstName']").blur(function () {
        var checkUserFirstNameRegex = new RegExp("^\\D{1,10}$");
        var data = $.trim($("#UserFirstName").val());
        var result = checkUserFirstNameRegex.test(data);
        console.log("cheackResult:" + cheackResult);

        if (!result) {
            $("input[name='UserFirstName']").select();
            $("#info #infoMsg").text("姓氏輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#info p").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }

    });
    /*驗證名字不得超過10個中文字*/
    $("input[name='UserLastName']").blur(function () {
        var checkUserLastName = new RegExp("^\\D{1,10}$");
        var data = $.trim($("#UserLastName").val());
        var result = checkUserLastName.test(data);
        if (!result) {
            $("input[name='UserLastName']").select();
            $("#info #infoMsg").text("名字輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#info p").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });
    /*驗證手機聯絡電話格式*/
    $("input[name='Telephone']").blur(function () {
        var checkUserTelephome = new RegExp("^[09]{2}[0-9]{8}$");
        var data = $.trim($("#UserTelephome").val());
        var result = checkUserTelephome.test(data);
        if (!result) {
            $("input[name='Telephone']").select();
            $("#info #infoMsg").text("連絡電話輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#info p").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });
    /*驗證密碼格式 後代選擇器*/
    $("#RegisterPasswordCol input[name='Password']").blur(function () {
        var checkUserPwd = new RegExp("^(?=.*\\w)(?=.*[a-z])(?=.*[A-Z]).{6,12}$");
        var data = $.trim($("#UserPwd").val());
        var result = checkUserPwd.test(data);
        if (!result) {
            $("#RegisterPasswordCol input[name='Password']").select();
            $("#info #infoMsg").text("密碼輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#info p").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });
    /*確認密碼是否正確*/
    $("#ConfirmPwd").blur(function () {
        var pwd = $("#UserPwd").val();
        var confirmPwd = $("#ConfirmPwd").val();

        if (confirmPwd != pwd) {
            $("#info #infoMsg").text("確認密碼錯誤,請重新輸入");
        } else {
            $("#info #infoMsg").text("");
        }
    });
    /*確認資料是否都有填寫 否則不能建立帳號*/
    $("#RegisterBtn").click(function () {
        var userFirstName = $.trim($("#UserFirstName").val());
        var userLastName = $.trim($("#UserLastName").val());
        var userTelephome = $.trim($("#UserTelephome").val());
        var userAccount = $.trim($("#UserAccount").val());
        var userPwd = $.trim($("#UserPwd").val());
        var confirmPwd = $.trim($("#ConfirmPwd").val());
        if (userFirstName == null || userFirstName == "") {
            alert("請填寫姓名欄位");
            return false;
        } else if (userLastName == null || userLastName == "") {
            alert("請填寫名字欄位");
            return false;
        } else if (userTelephome == null || userTelephome == "") {
            alert("請填寫電話欄位");
            return false;
        } else if (userAccount == null || userAccount == "") {
            alert("請填寫帳號欄位");
            return false;
        } else if (userPwd == null || userPwd == "") {
            alert("請填寫密碼欄位");
            return false;
        } else if (confirmPwd == null || confirmPwd == "") {
            alert("請填寫確認密碼欄位");
            return false;
        } else {
            return true;
        };
    });
    /*LoginBtn*/
    $("#LoginBtn").click(function () {
        var loginAccount = $.trim($("#LoginAccount").val());
        var loginPassword = $.trim($("#LoginPassword").val());
        if (loginAccount == null || loginAccount == "") {
            alert("登入錯誤:請輸入帳號");
            return false;
        } else if (loginPassword == null || loginPassword == "") {
            alert("登入錯誤:請輸入密碼");
            return false;
        } else {
            return true;
        }
        /*如果勾選記住我 傳出true*/
        if ($("#LoginRemeber").is(':checked')) {
            $("#LoginRemeberResult").attr("value", "true");
        } else if ($("#LoginRemeber").not(':checked')) {
            $("#LoginRemeberResult").attr("value", "false");
        }
    });

    /*ChangePasswordPage*/
    /*變更密碼選擇取消則跳出對話框提醒*/
    $("#ChangePageBtn #ChangePwdCancelBtn").click(function () {
        var confirmMessage = confirm("取消變更?");
        if (confirmMessage == true) {
            window.location.href = "/Member/Index";
        } else {
            return false;
        };
    });
    /*確認新密碼是否符合規則*/
    $(".ChangePageBtn #NewPassword").blur(function () {
        var checkUserNewPwd = new RegExp("^(?=.*\\w)(?=.*[a-z])(?=.*[A-Z]).{6,12}$");
        var data = $.trim($("#NewPassword").val());
        var result = checkUserNewPwd.test(data);
        if (!result) {
            $("#info #infoMsg").text("密碼輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#info #infoMsg").text("");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });
    /*確認密碼是否正確*/
    $("#CheckNewPassword").keyup(function () {
        var pwd = $("#NewPassword").val();
        var checkNewPwd = $("#CheckNewPassword").val();

        if (checkNewPwd != pwd) {
            $("#info #infoMsg").text("確認密碼錯誤,請重新輸入");
            $('#ChangePwdOkBtn').attr('disabled', true);
        } else {
            /*若密碼正確 1秒後即更改元素值*/
            setTimeout(function () {
                $("#info #infoMsg").text("");
                $('#ChangePwdOkBtn').attr('disabled', false);
            },1000);
            
        }
    });
    /*確認資料是否都有填寫 否則不能變更密碼*/
    $("#ChangePwdOkBtn").click(function () {
        var password = $.trim($("#Password").val());
        var newPassword = $.trim($("#NewPassword").val());
        var checkNewPwd = $.trim($("#CheckNewPassword").val());

        if(password == null || password == ""){
            alert("請輸入舊密碼");
            return false;
        }else if(newPassword == null || newPassword == ""){
            alert("請輸入新密碼");
            return false;
        } else if (checkNewPwd == null || checkNewPwd == "") {
            alert("請確認新密碼");
            return false;
        } else {
            $(window).unbind('beforeunload');
            return true;
        }
    });
});

/*********************************************************************************/
/* Rey js                                                                   */
/*********************************************************************************/


$(document).ready(function () {
    menu();
    memberMenu();
});

function menu() {
    $("#menu a").each(function (index, element) {
        if (element.href == location.href) {
            $('#menu  li:eq(' + index + ')').addClass("current_page_item");
        }
    });
}

function memberMenu() {
    if (getCookie("FoundCity2017") != "") {
        $("#memberLoginbtn").hide();
        $("#memberLogoutbtn").show();
        $("#memberCenter").show();
    } else {
        $("#memberLoginbtn").show();
        $("#memberLogoutbtn").hide();
        $("#memberCenter").hide();
    }
}

function initHome() {
    $.ajax({
        url: "/Home/Data",
        type: "Get",
        success: function (data) {
            debug = data;
            console.log(JSON.stringify(data));

            $.each(data.Pet, function (index, vul) {
                var viewID = "viewPet";
                viewHome(viewID, vul);                
            });
            //homepagephoto();
            //$(".petPhoto").on("click", function (e) {
            //    alert("click");
            //})
            $.each(data.Mom, function (index, vul) {
                var viewID = "viewMom";
                viewHome(viewID, vul);                
            });
            homepagephoto();
        },
        error: function (error) {

        }
    });
}

function viewHome(viewID, data) {

    var viewTime;
    var viewSite;

    switch (viewID) {
        case "viewPet":
            viewTime = "遺失時間：" + data.LostDate;
            viewSite = "遺失地點：" + data.LostPlace1 + data.LostPlace2 + data.LostPlace3;
            break;
        case "viewMom":
            viewTime = "拾獲時間：" + data.FindDate;
            viewSite = "拾獲地點：" + data.FindPlace1 + data.FindPlace2 + data.FindPlace3;
            break;
    }

    //if (viewID == "viewPet") {
    //    var Rows1 = "<a id='petPhotoPet'><img src='../images/" + data.PetPhoto + "'  class='petPhoto' alt='Pet Photo'></a>";
    //}else{
    //    var Rows1 = "<a id='petPhotoMom'><img src='../images/" + data.PetPhoto + "'  class='petPhoto' alt='Pet Photo'></a>";
    //}

    var Rows1 = "<a id='petPhotoPet'><img src='../images/" + data.PetPhoto + "'  class='petPhoto' alt='Pet Photo'></a>";
    
    //alert(Rows1.toString());
    $('#' + viewID).append(
        $('<div>').addClass('col-xs-3 col-sm-3 col-md-3 col-lg-3').append(
             $('<div>').addClass('panel panel-default').append(
                 $('<div>').addClass('panel-body').append(
                     //$('<a>').attr('id', 'petPhoto').append(
                     //    $('<img>').attr('src', '../images/' + data.PetPhoto).attr('alt', 'Image'))),
                     Rows1),
                 $('<div>').addClass('panel-footer').append(
                     $('<div>').addClass('panelFooterTitle').text(viewTime),
                     $('<div>').addClass('panelFooterPrice').text(viewSite))
        )));
}


/*********************************************************************************/
/* Yako js                                                                   */
/*********************************************************************************/

$(document).ready(function () {

    /*驗證手機聯絡電話格式(for聯絡人)*/
    $("input[name='cTelephone']").blur(function () {
        var checkUserTelephome = new RegExp("^[09]{2}[0-9]{8}$");
        var data = $.trim($("#contactTelTextBox").val());
        var result = checkUserTelephome.test(data);
        if (!result) {
            $("input[name='cTelephone']").select();
            $("#cinfo h3 #cinfoMsg").addClass("coninfored");
            $("#cinfo h3 #cinfoMsg").text("電話:輸入格式不符");
            console.log("result:" + result);
        } else {
            $("#cinfoMsg").text("電話:");
            $("#cinfo h3 #cinfoMsg").removeClass("coninfored");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });

    /*驗證日期格式(for聯絡人)*/
    //$("input[name='YDateTextBox']").blur(function () {
    //    var checkUserTelephome = new RegExp("^((19|20)[0-9]{2}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01]))*$");
    //    var data = $.trim($("#lostDateTextBox").val());
    //    var result = checkUserTelephome.test(data);
    //    if (!result) {
    //        $("input[name='YDateTextBox']").select();
    //        $("#findinfo h3 #datainfoMsg").addClass("coninfored");
    //        $("#findinfo h3 #datainfoMsg").text("日期:格式不符");
    //        console.log("result:" + result);
    //    } else {
    //        $("#datainfoMsg").text('走失日期:');
    //        $("#datainfoMsg").prepend('<span class="glyphicon glyphicon-time"></span>');
    //        $("#findinfo h3 #datainfoMsg").removeClass("coninfored");
    //        cheackResult = 0;
    //        console.log("cheackResult:" + cheackResult);
    //    }
    //});

})

//區分兩個view的js
//目前僅做日期格式判斷
function viewCreatePet(viewID) {

    var viewLabelText;

    switch (viewID) {
        case "lost":
            viewLabelText = "走失時間："
            break;
        case "find":
            //console.log(data.FindDate);
            viewLabelText = "拾獲時間："
            break;
    }

    //alert(viewID);

    /*驗證日期格式(for聯絡人)*/
    $("input[name='YDateTextBox']").blur(function () {
        var checkDate = new RegExp("^((19|20)[0-9]{2}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01]))*$");
        var data = $.trim($("#" + viewID + "DateTextBox").val());
        var result = checkDate.test(data);
        if (!result) {
            $("input[name='YDateTextBox']").select();
            $("#findinfo h3 #datainfoMsg").addClass("coninfored");
            $("#findinfo h3 #datainfoMsg").text("日期:格式不符");
            console.log("result:" + result);
        } else {
            $("#datainfoMsg").text(viewLabelText);
            $("#datainfoMsg").prepend('<span class="glyphicon glyphicon-time"></span>');
            $("#findinfo h3 #datainfoMsg").removeClass("coninfored");
            cheackResult = 0;
            console.log("cheackResult:" + cheackResult);
        }
    });

}

function homepagephoto() {
    
    //FindPet首頁載入function2:petPhoto_click(要加權限,暫用ViewData代替)
    $(".petPhoto").on("click", function (e) {
        
        //登入成功才會有反應(顯示)
        if ($("#LoginCheck").val() == "true") {
            alert("test");
            var iIndex = $(this).parent().parent().parent().parent().index();
            //var iIndex = $(this).closest("div").index();
            
            var sRowsImg = "<img src='../images/" + debug.Pet[iIndex].PetPhoto + "' id='petPhoto' class='img-thumbnail petPhoto' alt='Pet Photo' width='50%' height='40%' style='margin-left:25%;'>"
            
            $("#showImg2").empty();
            $("#showImg2").append(sRowsImg);
            
            var sRowsFindPet =
                "<div class='col-sm-12'></div>"
                + "<div class='col-sm-2'></div>"
                + "<div class='col-sm-3'>"
                + "<h4>" + "<span class='glyphicon glyphicon-record'></span>物種:" + debug.Pet[iIndex].Species + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-record'></span>體型:" + debug.Pet[iIndex].Size + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-record'></span>性別:" + debug.Pet[iIndex].Sex + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-record'></span>年紀:" + debug.Pet[iIndex].Age + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-record'></span>毛色:" + debug.Pet[iIndex].HairColor + "</h4>"
                + "</div>"
                + "<div class='col-sm-7'>"
                + "<h4>" + "<span class='glyphicon glyphicon-time'></span>走失日期:" + debug.Pet[iIndex].LostDate + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-map-marker'></span>走失地點:" + debug.Pet[iIndex].LostPlace1 + debug.Pet[iIndex].LostPlace2 + debug.Pet[iIndex].LostPlace3 + "</h4>"
                + "<h4>" + "<span class='glyphicon glyphicon-user'></span>聯絡人:" + debug.Pet[iIndex].ContactMan + "</h4>"
                + "<h4>" + "&nbsp;&nbsp;&nbsp;聯絡人性別:" + debug.Pet[iIndex].ContactSex + "</h4>"
                + "<h4>" + "&nbsp;&nbsp;&nbsp;聯絡人電話:" + debug.Pet[iIndex].ContactTel + "</h4>"
                + "</div>"
                + "<div class='col-sm-7'>&nbsp;</div>"
                + "<div class='col-sm-2'></div>"
                + "<div class='col-sm-6'>"
                + "<h4>" + "<span class='glyphicon glyphicon-bullhorn'></span>備註:" + debug.Pet[iIndex].Characteristic + "</h4>"
                + "</div>"
            
            $("#showImg2").append(sRowsFindPet);
            alert(debug.Pet[iIndex].PetPhoto);
            $("#findPetModal2").modal({ backdrop: "static" });
        }
    })

    //FindMom首頁載入function2:petPhoto_click(要加權限,暫用ViewData代替)
    //$(".petPhotoMom").on("click", function (e) {
    //    //登入成功才會有反應(顯示)
    //    if ($("#LoginCheck").val() == "true") {
    //        var iIndex = $(this).parent().parent().parent().parent().index();
    //        //var iIndex = $(this).closest("div").index();
    //        //alert(iIndex);

    //        var sRowsImg = "<img src='../images/" + debug.Mom[iIndex].PetPhoto + "' id='petPhoto' class='img-thumbnail petPhoto' alt='Pet Photo' width='50%' height='40%' style='margin-left:25%;'>"
    //        $("#showImg2").empty();
    //        $("#showImg2").append(sRowsImg);

    //        var sRowsFindMom =
    //            "<div class='col-sm-12'></div>"
    //            + "<div class='col-sm-2'></div>"
    //            + "<div class='col-sm-3'>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-record'></span>物種:" + debug.Mom[iIndex].Species + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-record'></span>體型:" + debug.Mom[iIndex].Size + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-record'></span>性別:" + debug.Mom[iIndex].Sex + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-record'></span>年紀:" + debug.Mom[iIndex].Age + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-record'></span>毛色:" + debug.Mom[iIndex].HairColor + "</h4>"
    //            + "</div>"
    //            + "<div class='col-sm-7'>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-time'></span>走失日期:" + debug.Mom[iIndex].FindDate + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-map-marker'></span>走失地點:" + debug.Mom[iIndex].FindPlace1 + debug.Mom[iIndex].FindPlace2 + debug.Mom[iIndex].FindPlace3 + "</h4>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-user'></span>聯絡人:" + debug[iIndex].ContactMan + "</h4>"
    //            + "<h4>" + "&nbsp;&nbsp;&nbsp;聯絡人性別:" + debug.Mom[iIndex].ContactSex + "</h4>"
    //            + "<h4>" + "&nbsp;&nbsp;&nbsp;聯絡人電話:" + debug.Mom[iIndex].ContactTel + "</h4>"
    //            + "</div>"
    //            + "<div class='col-sm-7'>&nbsp;</div>"
    //            + "<div class='col-sm-2'></div>"
    //            + "<div class='col-sm-6'>"
    //            + "<h4>" + "<span class='glyphicon glyphicon-bullhorn'></span>備註:" + debug.Mom[iIndex].Characteristic + "</h4>"
    //            + "</div>"
    //        $("#showImg2").append(sRowsFindMom);

    //        $("#FindMomModal2").modal({ backdrop: "static" });
    //    }
    //})
}
