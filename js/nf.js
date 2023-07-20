$(document).ready(function(){
    $('.detailSlider').bxSlider({
       speed: 750,
       auto: true,
       infiniteLoop: true,
       pause: 4000
    });

    $('.storeSlider').bxSlider({
        speed: 2000,
        auto: true,
        infiniteLoop: true,
        pause: 5000
     });

    panelControl("header input[value*='menu']","#menuPanel input.closeBtn");
    panelControl("header input[value*='cart']","#cartPanel h2 input.closeBtn");
    panelControl("input[value^='Add to Cart']","#cartPanel h2 input.closeBtn");
    respVideos(".videoContent");
    permissionCut();
    tabUI(".tabMenu li input",".detailContainer > div:first-of-type > div:first-of-type div");
    popupControl(".mypageContainer input[value='Add a New Address']","#addressPopup .closeBtn");
    toggleUI("#menuPanel nav div");
    toggleUI(".sortNav ul > li input[type='button']");
    toggleUI("footer > div > div:nth-of-type(2) div h3");
    toggleUI("input[value='favorite_border']");
    searchPanel();
    quickMenu();
    backBtn();
    numberComponent();
});

function permissionCut(){
    $(".beforeIndex a").click(function(){
        $("#loginPopup").addClass("active");
    });
    
    $("#loginPopup input.closeBtn").click(function(){
        $("#loginPopup").removeClass("active");
    });
}

function panelControl(btn,closeBtn){
    var currentPanel = null;
    $(btn).click(function(){
        currentPanel = "#" + $(this).attr("data-panelName");
        $(currentPanel).addClass("active");
    });
    
    $(closeBtn).click(function(){
        $(currentPanel).removeClass("active");
    });
}

function respVideos(target){
    $(target).fitVids();
}

function tabUI(tabMenu,tabPage){
    $(tabMenu).click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        $(tabMenu).removeClass("activated");
        $(this).addClass("activated");
        
        $(tabPage).removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}

function popupControl(btn,closeBtn){
    var popup = null;
    $(btn).click(function(){
        popup = "#" + $(this).attr("data-popupName");
        $(popup).addClass("active");
    });
    $(closeBtn).click(function(){
        $(popup).removeClass("active");
    });
}

function toggleUI(btn){
    $(btn).click(function(){
        $(this).toggleClass("active");
    });
}

function searchPanel(){
    $("header > div:first-of-type ul li input[value='search']").click(function(){
        $(this).toggleClass("active");
        $("#searchPanel").toggleClass("active");
    });
}

function quickMenu(){
    var checkStatus = false;

    $("#expandList div input").click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $(this).attr("value","expand_less");
        }else{
            $(this).attr("value","expand_more");
        }

        $("#expandList").toggleClass("active");
    });
}

function backBtn(){
    $(".backBtn").click(function(){
        history.back();
    });
}

function numberComponent(){
    $(".numberComponent > input.countDown").click(function(){        
        var count = $(this).parent(".numberComponent").children("span").text();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".numberComponent").children("span").text(num);
    });

    $(".numberComponent > input.countUp").click(function(){
        var count = $(this).parent(".numberComponent").children("span").text();
        var num = Number(count);

        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent(".numberComponent").children("span").text(num);
    });
}