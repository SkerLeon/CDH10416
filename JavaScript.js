 //控制服務項目下的清單顯示
function selectdisplay(){ 
    let itemshow = document.getElementById("select-item");
    

    if(itemshow.style.display === "flex"){
        itemshow.style.display ="none";
    } else {
        itemshow.style.display ="flex";
    }
}
document.getElementById("select-serve").onclick = selectdisplay;

//控制服務項目被hover時改變裡面img跟span的樣式
let hovertext = document.getElementById("select-serve-text");
let hoverimg = document.getElementById("select-serve-img");
let hovertrigger = document.getElementById("select-serve");

hovertrigger.addEventListener("mouseenter",function(){
    hovertrigger.style.backgroundColor = "#f9f3f377";  
    hovertrigger.style.borderRadius = "3px";  
    hovertrigger.style.cursor = "pointer";
    hovertext.style.color = "#474143";            
    hoverimg.style.filter ="invert(100%)";
});
hovertrigger.addEventListener("mouseleave",function(){
    hovertrigger.style.backgroundColor = "#00000000";
    hovertext.style.color = "#F2E4E4";
    hoverimg.style.filter ="invert(0%)";
});

//控制紙本收據onclick時的樣式
function yesOrNoOnClick(e) {
    //抓取這兩個class的選取器
    let yesBlock = document.querySelector(".radio-style-checked-yes");
    let noBlock = document.querySelector(".radio-style-checked-no");
    
    //設定判斷式決定按下的是哪個radio再決定顯示什麼樣式
    if (e.target.id === "data-receipt-yes") {
        yesBlock.style.display = "block";
        noBlock.style.display = "none";
    }

    if (e.target.id === "data-receipt-no") {
        yesBlock.style.display = "none";
        noBlock.style.display = "block";
    }
};
//抓取這個名子
let radioButtons = document.getElementsByName("data-receipt");

//利用迴圈給予每個事件物件事件監聽 
//因為class及name不是唯一的就需要這樣給予程式目標執行
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", yesOrNoOnClick);
};

//控制手機mb nav onclick 狀態
let mbhb = document.getElementById("mbhb");
function controlMBnav (){ 
    let mbnavlinkalign = document.getElementById("mbnavlink-align");

    if(mbnavlinkalign.style.right === "-159px"){
        mbnavlinkalign.style.right = "0px";
    } else{
        mbnavlinkalign.style.right = "-159px";
    }
    
}

//控制漢堡樣式
let mbspan = document.querySelector("mb-span-style");
let span1 = document.getElementById("mbhb-span1");
let span2 = document.getElementById("mbhb-span2");
let span3 = document.getElementById("mbhb-span3");

function controlhb(){
    if(span2.style.transform == "scale(1)"){
        span1.style.transform = "rotate(45deg)"
        span1.style.top = "15px"
        span2.style.transform = "scale(0)"
        span3.style.transform = "rotate(-45deg)"
        span3.style.bottom = "15px"  
    } else{
        span1.style.transform = "rotate(0deg)"
        span1.style.top = "0px"
        span2.style.transform = "scale(1)"
        span3.style.transform = "rotate(0deg)"
        span3.style.bottom = "0px" 
    }
}

mbhb.addEventListener("click",controlMBnav);
mbhb.addEventListener("click",controlhb);

//index 介紹圖片動態效果
let indexUniversal = document.getElementsByClassName("index-universal");

let picItemDottedA = document.getElementById("pic-item-dotted-A");
let picItemDottedB = document.getElementById("pic-item-dotted-B");
let picItemDottedC = document.getElementById("pic-item-dotted-C");
let picItemDottedD = document.getElementById("pic-item-dotted-D");

let itemIndeximgA = document.getElementById("item-indeximg-A");
let itemIndeximgB = document.getElementById("item-indeximg-B");
let itemIndeximgC = document.getElementById("item-indeximg-C");
let itemIndeximgD = document.getElementById("item-indeximg-D");

function indexSlideInEffect(e){
    if(e.target.id == "index-universal-A"){
        picItemDottedA.style.transform = "scale(1.1)";
        picItemDottedB.style.transform = "scale(1.1)";
        itemIndeximgA.style.transform = "scale(1.4)"
        itemIndeximgB.style.transform = "scale(1.5)"
    } 

    if(e.target.id == "index-universal-B"){
        picItemDottedC.style.transform = "scale(1.1)";
        picItemDottedD.style.transform = "scale(1.1)";
        itemIndeximgC.style.transform = "scale(1.4)"
        itemIndeximgD.style.transform = "scale(1.4)"
    } 
}

function indexSlideOutEffect(e){
    if(e.target.id == "index-universal-A"){
        picItemDottedA.style.transform = "scale(1)";
        picItemDottedB.style.transform = "scale(1)";
        itemIndeximgA.style.transform = "scale(1.5)"
        itemIndeximgB.style.transform = "scale(1.6)"
    } 

    if(e.target.id == "index-universal-B"){
        picItemDottedC.style.transform = "scale(1)";
        picItemDottedD.style.transform = "scale(1)";
        itemIndeximgC.style.transform = "scale(1.5)"
        itemIndeximgD.style.transform = "scale(1.5)"
    } 
}

//如果尺寸大於768才執行
if(window.innerWidth>768){
    for (let i = 0; i < indexUniversal.length; i++) {
        indexUniversal[i].addEventListener("mouseenter", indexSlideInEffect);
        indexUniversal[i].addEventListener("mouseleave", indexSlideOutEffect);
    };
}

//index 作者圖片動態效果
let user =document.getElementsByClassName("user");

let userImgDottedA = document.getElementById("user-img-dotted-A");
let userImgDottedB = document.getElementById("user-img-dotted-B");
let userImgDottedC = document.getElementById("user-img-dotted-C");

function indexAuthorPictureSlideIn(e){
    if(e.target.id == "user-A"){
        userImgDottedA.style.transform = "rotate(90deg)";
    }
    if(e.target.id == "user-B"){
        userImgDottedB.style.transform = "rotate(90deg)";
    }
    if(e.target.id == "user-C"){
        userImgDottedC.style.transform = "rotate(90deg)";
    }
    
}
function indexAuthorPictureSlideOut(e){
    if(e.target.id == "user-A"){
        userImgDottedA.style.transform = "rotate(0deg)";
    }
    if(e.target.id == "user-B"){
        userImgDottedB.style.transform = "rotate(0deg)";
    }
    if(e.target.id == "user-C"){
        userImgDottedC.style.transform = "rotate(0deg)";
    }
}

if(window.innerWidth>768){
    for (let i = 0; i < user.length; i++) {
        user[i].addEventListener("mouseenter", indexAuthorPictureSlideIn);
        user[i].addEventListener("mouseleave", indexAuthorPictureSlideOut);
    };
}

//pc banner 輪播效果
//banner 圓形link控制banner的圖
let bannerRounds = document.getElementsByClassName("banner-round");
let bannerBgAlign = document.getElementById("banner-bg-align");
let bannerindex = 0;
let bannerRoundA = document.getElementById("banner-round-A")
let bannerRoundB = document.getElementById("banner-round-B")
let bannerRoundC = document.getElementById("banner-round-C")
let bannerRoundD = document.getElementById("banner-round-D")

//宣告這個變數給bannerInterval同時啟動這個計時器
bannerInterval = setInterval(bannerPush, 5000);

//banner 輪播效果
function bannerPush(){

    //偵測position的數值去執行切換效果
    if(bannerindex < 7680){
        if(bannerindex == -1920){
            bannerRoundA.style.backgroundColor = "#8F8686"
            bannerRoundB.style.backgroundColor = "#F7F1F1"
            bannerRoundC.style.backgroundColor = "#F7F1F1"
            bannerRoundD.style.backgroundColor = "#F7F1F1"
        }
        if(bannerindex == 0){
            bannerRoundA.style.backgroundColor = "#F7F1F1"
            bannerRoundB.style.backgroundColor = "#8F8686"
            bannerRoundC.style.backgroundColor = "#F7F1F1"
            bannerRoundD.style.backgroundColor = "#F7F1F1"
        }
        if(bannerindex == 1920){
            bannerRoundA.style.backgroundColor = "#F7F1F1"
            bannerRoundB.style.backgroundColor = "#F7F1F1"
            bannerRoundC.style.backgroundColor = "#8F8686"
            bannerRoundD.style.backgroundColor = "#F7F1F1"
        }
        if(bannerindex == 3840){
            bannerRoundA.style.backgroundColor = "#F7F1F1"
            bannerRoundB.style.backgroundColor = "#F7F1F1"
            bannerRoundC.style.backgroundColor = "#F7F1F1"
            bannerRoundD.style.backgroundColor = "#8F8686"
        }
        
        bannerindex+= 1920;
        bannerBgAlign.style.right =  `${bannerindex}px`;
        bannerBgAlign.style.transition = "1s";
         //當值到7680時5秒後自動設定動畫過度效果為無
        if(bannerindex == 7680){
            bannerRoundA.style.backgroundColor = "#8F8686"
            bannerRoundB.style.backgroundColor = "#F7F1F1"
            bannerRoundC.style.backgroundColor = "#F7F1F1"
            bannerRoundD.style.backgroundColor = "#F7F1F1"

            bannerindex = -1920;
            setTimeout(function(){
                bannerBgAlign.style.transition = "none";
            },5000)
        }
    }
}

function linkControlBanner(e){
    //在按下link的點點時
    //清除計時器並新增 就會有重置的效果
    clearInterval(bannerInterval);

    if(e.target.id == "banner-round-A"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 0
        bannerBgAlign.style.right = "0px"
    }
    if(e.target.id == "banner-round-B"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 1920
        bannerBgAlign.style.right = "1920px"
    }
    if(e.target.id == "banner-round-C"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 3840
        bannerBgAlign.style.right = "3840px"
    }
    if(e.target.id == "banner-round-D"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#8F8686"
        
        bannerindex = 5760
        bannerBgAlign.style.right = "5760px"
    }

    bannerInterval = setInterval(bannerPush, 5000);
}

//-1920 0 3840 5760 7680 5張圖position的數值
if(window.innerWidth>768){
    for (let i = 0; i < bannerRounds.length; i++) {
        bannerRounds[i].addEventListener("click", linkControlBanner);
    };
}


// DOG SHOW動態效果
let filterItemDog = document.getElementsByClassName("filter-item-dog")

// DOG SHOW 圖片
let dogPicImg01 = document.getElementById("dog-pic-img-01")
let dogPicImg02 = document.getElementById("dog-pic-img-02")
let dogPicImg03 = document.getElementById("dog-pic-img-03")
let dogPicImg04 = document.getElementById("dog-pic-img-04")
let dogPicImg05 = document.getElementById("dog-pic-img-05")
let dogPicImg06 = document.getElementById("dog-pic-img-06")
let dogPicImg07 = document.getElementById("dog-pic-img-07")
let dogPicImg08 = document.getElementById("dog-pic-img-08")
let dogPicImg09 = document.getElementById("dog-pic-img-09")
let dogPicImg10 = document.getElementById("dog-pic-img-10")
let dogPicImg11 = document.getElementById("dog-pic-img-11")
let dogPicImg12 = document.getElementById("dog-pic-img-12")

//DOG SHOW 稱號
let itemDogNickname01 = document.getElementById("item-dog-nickname01")
let itemDogNickname02 = document.getElementById("item-dog-nickname02")
let itemDogNickname03 = document.getElementById("item-dog-nickname03")
let itemDogNickname04 = document.getElementById("item-dog-nickname04")
let itemDogNickname05 = document.getElementById("item-dog-nickname05")
let itemDogNickname06 = document.getElementById("item-dog-nickname06")
let itemDogNickname07 = document.getElementById("item-dog-nickname07")
let itemDogNickname08 = document.getElementById("item-dog-nickname08")
let itemDogNickname09 = document.getElementById("item-dog-nickname09")
let itemDogNickname10 = document.getElementById("item-dog-nickname10")
let itemDogNickname11 = document.getElementById("item-dog-nickname11")
let itemDogNickname12 = document.getElementById("item-dog-nickname12")

//DOG SHOW內容
let itemDogIntroduce01 = document.getElementById("item-dog-introduce01")
let itemDogIntroduce02 = document.getElementById("item-dog-introduce02")
let itemDogIntroduce03 = document.getElementById("item-dog-introduce03")
let itemDogIntroduce04 = document.getElementById("item-dog-introduce04")
let itemDogIntroduce05 = document.getElementById("item-dog-introduce05")
let itemDogIntroduce06 = document.getElementById("item-dog-introduce06")
let itemDogIntroduce07 = document.getElementById("item-dog-introduce07")
let itemDogIntroduce08 = document.getElementById("item-dog-introduce08")
let itemDogIntroduce09 = document.getElementById("item-dog-introduce09")
let itemDogIntroduce10 = document.getElementById("item-dog-introduce10")
let itemDogIntroduce11 = document.getElementById("item-dog-introduce11")
let itemDogIntroduce12 = document.getElementById("item-dog-introduce12")

//DOG SHOW按鈕
let filterItemH201 = document.getElementById("filter-item-h201")
let filterItemH202 = document.getElementById("filter-item-h202")
let filterItemH203 = document.getElementById("filter-item-h203")
let filterItemH204 = document.getElementById("filter-item-h204")
let filterItemH205 = document.getElementById("filter-item-h205")
let filterItemH206 = document.getElementById("filter-item-h206")
let filterItemH207 = document.getElementById("filter-item-h207")
let filterItemH208 = document.getElementById("filter-item-h208")
let filterItemH209 = document.getElementById("filter-item-h209")
let filterItemH210 = document.getElementById("filter-item-h210")
let filterItemH211 = document.getElementById("filter-item-h211")
let filterItemH212 = document.getElementById("filter-item-h212")

//滑鼠進入
function DOGSHOWSelectionEffectIn (e){
    if(e.target.id == "item-dog-01"){
        dogPicImg01.style.transform = "scale(1.1)"
        itemDogNickname01.style.color = "#000"
        itemDogIntroduce01.style.color = "#000"
        filterItemH201.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-02"){
        dogPicImg02.style.transform = "scale(2.1)"
        itemDogNickname02.style.color = "#000"
        itemDogIntroduce02.style.color = "#000"
        filterItemH202.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-03"){
        dogPicImg03.style.transform = "scale(1.5)"
        itemDogNickname03.style.color = "#000"
        itemDogIntroduce03.style.color = "#000"
        filterItemH203.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-04"){
        dogPicImg04.style.transform = "scale(2.1)"
        itemDogNickname04.style.color = "#000"
        itemDogIntroduce04.style.color = "#000"
        filterItemH204.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-05"){
        dogPicImg05.style.transform = "scale(1.1)"
        itemDogNickname05.style.color = "#000"
        itemDogIntroduce05.style.color = "#000"
        filterItemH205.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-06"){
        dogPicImg06.style.transform = "scale(1.9)"
        itemDogNickname06.style.color = "#000"
        itemDogIntroduce06.style.color = "#000"
        filterItemH206.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-07"){
        dogPicImg07.style.transform = "scale(2.3)"
        itemDogNickname07.style.color = "#000"
        itemDogIntroduce07.style.color = "#000"
        filterItemH207.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-08"){
        dogPicImg08.style.transform = "scale(1.1)"
        itemDogNickname08.style.color = "#000"
        itemDogIntroduce08.style.color = "#000"
        filterItemH208.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-09"){
        dogPicImg09.style.transform = "scale(1.1)"
        itemDogNickname09.style.color = "#000"
        itemDogIntroduce09.style.color = "#000"
        filterItemH209.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-10"){
        dogPicImg10.style.transform = "scale(1.1)"
        itemDogNickname10.style.color = "#000"
        itemDogIntroduce10.style.color = "#000"
        filterItemH210.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-11"){
        dogPicImg11.style.transform = "scale(1.1)"
        itemDogNickname11.style.color = "#000"
        itemDogIntroduce11.style.color = "#000"
        filterItemH211.style.backgroundColor ="#F4B410"
    }
    if(e.target.id == "item-dog-12"){
        dogPicImg12.style.transform = "scale(1.3)"
        itemDogNickname12.style.color = "#000"
        itemDogIntroduce12.style.color = "#000"
        filterItemH212.style.backgroundColor ="#F4B410"
    }
    
}

//滑鼠移出
function DOGSHOWSelectionEffectOut (e){
    if(e.target.id == "item-dog-01"){
        dogPicImg01.style.transform = "scale(1)"
        itemDogNickname01.style.color = "#474143"
        itemDogIntroduce01.style.color = "#474143"
        filterItemH201.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-02"){
        dogPicImg02.style.transform = "scale(2)"
        itemDogNickname02.style.color = "#474143"
        itemDogIntroduce02.style.color = "#474143"
        filterItemH202.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-03"){
        dogPicImg03.style.transform = "scale(1.4)"
        itemDogNickname03.style.color = "#474143"
        itemDogIntroduce03.style.color = "#474143"
        filterItemH203.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-04"){
        dogPicImg04.style.transform = "scale(2)"
        itemDogNickname04.style.color = "#474143"
        itemDogIntroduce04.style.color = "#474143"
        filterItemH204.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-05"){
        dogPicImg05.style.transform = "scale(1)"
        itemDogNickname05.style.color = "#474143"
        itemDogIntroduce05.style.color = "#474143"
        filterItemH205.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-06"){
        dogPicImg06.style.transform = "scale(1.8)"
        itemDogNickname06.style.color = "#474143"
        itemDogIntroduce06.style.color = "#474143"
        filterItemH206.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-07"){
        dogPicImg07.style.transform = "scale(2.2)"
        itemDogNickname07.style.color = "#474143"
        itemDogIntroduce07.style.color = "#474143"
        filterItemH207.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-08"){
        dogPicImg08.style.transform = "scale(1)"
        itemDogNickname08.style.color = "#474143"
        itemDogIntroduce08.style.color = "#474143"
        filterItemH208.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-09"){
        dogPicImg09.style.transform = "scale(1)"
        itemDogNickname09.style.color = "#474143"
        itemDogIntroduce09.style.color = "#474143"
        filterItemH209.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-10"){
        dogPicImg10.style.transform = "scale(1)"
        itemDogNickname10.style.color = "#474143"
        itemDogIntroduce10.style.color = "#474143"
        filterItemH210.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-11"){
        dogPicImg11.style.transform = "scale(1)"
        itemDogNickname11.style.color = "#474143"
        itemDogIntroduce11.style.color = "#474143"
        filterItemH211.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-12"){
        dogPicImg12.style.transform = "scale(1.2)"
        itemDogNickname12.style.color = "#474143"
        itemDogIntroduce12.style.color = "#474143"
        filterItemH212.style.backgroundColor ="#3A3967"
    }
}

if(window.innerWidth>768){
    for (let i = 0; i < filterItemDog.length; i++) {
        filterItemDog[i].addEventListener("mouseenter", DOGSHOWSelectionEffectIn);

        filterItemDog[i].addEventListener("mouseleave", DOGSHOWSelectionEffectOut);
    };
}

//dog activity 動態效果
let activityItem = document.getElementsByClassName("activity-item")

let activityItemImg01 =document.getElementById("activity-item-img-01")
let activityItemImg02 =document.getElementById("activity-item-img-02")
let activityItemImg03 =document.getElementById("activity-item-img-03")
let activityItemImg04 =document.getElementById("activity-item-img-04")

function dogActivityDynamicEffectIn (e){
    if(e.target.id == "activity-item-01"){
        activityItemImg01.style.transform = "scale(1.1)"
    }
    if(e.target.id == "activity-item-02"){
        activityItemImg02.style.transform = "scale(1.1)"
    }
    if(e.target.id == "activity-item-03"){
        activityItemImg03.style.transform = "scale(1.1)"
    }
    if(e.target.id == "activity-item-04"){
        activityItemImg04.style.transform = "scale(1.1)"
    }
} 

function dogActivityDynamicEffectOut (e){
    if(e.target.id == "activity-item-01"){
        activityItemImg01.style.transform = "scale(1)"
    }
    if(e.target.id == "activity-item-02"){
        activityItemImg02.style.transform = "scale(1)"
    }
    if(e.target.id == "activity-item-03"){
        activityItemImg03.style.transform = "scale(1)"
    }
    if(e.target.id == "activity-item-04"){
        activityItemImg04.style.transform = "scale(1)"
    }
}

if(window.innerWidth>768){
    for (let i = 0; i < activityItem.length; i++) {
        activityItem[i].addEventListener("mouseenter", dogActivityDynamicEffectIn);

        activityItem[i].addEventListener("mouseleave", dogActivityDynamicEffectOut);
    };
}