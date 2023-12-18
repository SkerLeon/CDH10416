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

    if(window.innerWidth>768){
        //偵測position的數值去執行切換效果
        if(bannerindex < 7680){
            if(bannerindex == -1920){
                bannerRoundA.style.backgroundColor = "#F7F1F1"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(bannerindex == 0){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#F7F1F1"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(bannerindex == 1920){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#F7F1F1"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(bannerindex == 3840){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#F7F1F1"
            }
            
            bannerindex+= 1920;
            bannerBgAlign.style.right =  `${bannerindex}px`;
            bannerBgAlign.style.transition = "1s";
            //當值到7680時5秒後自動設定動畫過度效果為無
            if(bannerindex == 7680){
                bannerRoundA.style.backgroundColor = "#F7F1F1"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"

                bannerindex = -1920;
                setTimeout(function(){
                    bannerBgAlign.style.transition = "none";
                },5000)
            }
        }
    }
}

function linkControlBanner(e){
    //在按下link的點點時
    //清除計時器並新增 就會有重置的效果
    clearInterval(bannerInterval);

    if(e.target.id == "banner-round-A"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#8F8686"

        bannerindex = 0
        bannerBgAlign.style.right = "0px"
    }
    if(e.target.id == "banner-round-B"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#8F8686"

        bannerindex = 1920
        bannerBgAlign.style.right = "1920px"
    }
    if(e.target.id == "banner-round-C"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#8F8686"

        bannerindex = 3840
        bannerBgAlign.style.right = "3840px"
    }
    if(e.target.id == "banner-round-D"){
        bannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#F7F1F1"
        
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


//mb banner 輪播及點擊效果
//banner 圓形link控制banner的圖
let mbBannerBgAlign = document.getElementById("mb-banner-bg-align");
let mbbannerindex = 0;

//宣告這個變數給mbbannerInterval同時啟動這個計時器
mbbannerInterval = setInterval(mbbannerPush, 5000);

//banner 輪播效果
function mbbannerPush(){
    if(window.innerWidth <= 768){
        //偵測position的數值去執行切換效果
        if(mbbannerindex < window.innerWidth*4){
            if(mbbannerindex == window.innerWidth * -1){
                bannerRoundA.style.backgroundColor = "#F7F1F1"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(mbbannerindex == 0){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#F7F1F1"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(mbbannerindex == window.innerWidth*2 ){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#F7F1F1"
                bannerRoundD.style.backgroundColor = "#8F8686"
            }
            if(mbbannerindex == window.innerWidth*3){
                bannerRoundA.style.backgroundColor = "#8F8686"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#F7F1F1"
            }
            
            mbbannerindex+= window.innerWidth;
            mbBannerBgAlign.style.right = `${mbbannerindex}px`;
            mbBannerBgAlign.style.transition = "1s";
            //當值到3072時5秒後自動設定動畫過度效果為無
            if(mbbannerindex == window.innerWidth*4){
                bannerRoundA.style.backgroundColor = "#F7F1F1"
                bannerRoundB.style.backgroundColor = "#8F8686"
                bannerRoundC.style.backgroundColor = "#8F8686"
                bannerRoundD.style.backgroundColor = "#8F8686"

                mbbannerindex = window.innerWidth* -1;
                setTimeout(function(){
                    mbBannerBgAlign.style.transition = "none";
                },5000)
            }
        }
    }
}

function mblinkControlBanner(e){
    //在按下link的點點時
    //清除計時器並新增 就會有重置的效果
    clearInterval(mbbannerInterval);

    if(e.target.id == "banner-round-A"){
        mbBannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#8F8686"

        mbbannerindex = 0
        mbBannerBgAlign.style.right = "0px"
    }
    if(e.target.id == "banner-round-B"){
        mbBannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#8F8686"

        mbbannerindex = window.innerWidth
        mbBannerBgAlign.style.right = `${window.innerWidth}px`
    }
    if(e.target.id == "banner-round-C"){
        mbBannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#8F8686"

        mbbannerindex = window.innerWidth*2
        mbBannerBgAlign.style.right = `${window.innerWidth*2}px`
    }
    if(e.target.id == "banner-round-D"){
        mbBannerBgAlign.style.transition = "1s"
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#F7F1F1"
        
        mbbannerindex = window.innerWidth*3
        mbBannerBgAlign.style.right = `${window.innerWidth*3}px`
    }

    mbbannerInterval = setInterval(mbbannerPush, 5000);
}

//-1920 0 3840 5760 7680 5張圖position的數值
if(window.innerWidth <= 768){
    for (let i = 0; i < bannerRounds.length; i++) {
        bannerRounds[i].addEventListener("click", mblinkControlBanner);
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
        itemDogIntroduce01.style.color = "#7A7677"
        filterItemH201.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-02"){
        dogPicImg02.style.transform = "scale(2)"
        itemDogNickname02.style.color = "#474143"
        itemDogIntroduce02.style.color = "#7A7677"
        filterItemH202.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-03"){
        dogPicImg03.style.transform = "scale(1.4)"
        itemDogNickname03.style.color = "#474143"
        itemDogIntroduce03.style.color = "#7A7677"
        filterItemH203.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-04"){
        dogPicImg04.style.transform = "scale(2)"
        itemDogNickname04.style.color = "#474143"
        itemDogIntroduce04.style.color = "#7A7677"
        filterItemH204.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-05"){
        dogPicImg05.style.transform = "scale(1)"
        itemDogNickname05.style.color = "#474143"
        itemDogIntroduce05.style.color = "#7A7677"
        filterItemH205.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-06"){
        dogPicImg06.style.transform = "scale(1.8)"
        itemDogNickname06.style.color = "#474143"
        itemDogIntroduce06.style.color = "#7A7677"
        filterItemH206.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-07"){
        dogPicImg07.style.transform = "scale(2.2)"
        itemDogNickname07.style.color = "#474143"
        itemDogIntroduce07.style.color = "#7A7677"
        filterItemH207.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-08"){
        dogPicImg08.style.transform = "scale(1)"
        itemDogNickname08.style.color = "#474143"
        itemDogIntroduce08.style.color = "#7A7677"
        filterItemH208.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-09"){
        dogPicImg09.style.transform = "scale(1)"
        itemDogNickname09.style.color = "#474143"
        itemDogIntroduce09.style.color = "#7A7677"
        filterItemH209.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-10"){
        dogPicImg10.style.transform = "scale(1)"
        itemDogNickname10.style.color = "#474143"
        itemDogIntroduce10.style.color = "#7A7677"
        filterItemH210.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-11"){
        dogPicImg11.style.transform = "scale(1)"
        itemDogNickname11.style.color = "#474143"
        itemDogIntroduce11.style.color = "#7A7677"
        filterItemH211.style.backgroundColor ="#3A3967"
    }
    if(e.target.id == "item-dog-12"){
        dogPicImg12.style.transform = "scale(1.2)"
        itemDogNickname12.style.color = "#474143"
        itemDogIntroduce12.style.color = "#7A7677"
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

//dogabout 動態效果
let dogaboutConter = document.getElementsByClassName("dogabout-conter")
let conterPicPentagon01 = document.getElementById("conter-pic-pentagon-01")
let conterPicDotted01 = document.getElementById("conter-pic-dotted-01")
let conterPicPentagon02 = document.getElementById("conter-pic-pentagon-02")
let conterPicDotted02 = document.getElementById("conter-pic-dotted-02")

function dogaboutDynamicEffectIn(e){
    if(e.target.id == "dogabout-conter-A"){
        conterPicPentagon01.style.transform = "scale(1.7)"
        conterPicDotted01.style.transform ="scale(1.4)"
    }
    if(e.target.id == "dogabout-conter-B"){
        conterPicPentagon02.style.transform = "scale(1.1)"
        conterPicDotted02.style.transform ="scale(1.4)"
    }
}

function dogaboutDynamicEffectOut(e){
    if(e.target.id == "dogabout-conter-A"){
        conterPicPentagon01.style.transform = "scale(1.8)"
        conterPicDotted01.style.transform ="scale(1.3)"
    }

    if(e.target.id == "dogabout-conter-B"){
        conterPicPentagon02.style.transform = "scale(1.2)"
        conterPicDotted02.style.transform ="scale(1.3)"
    }
}

if(window.innerWidth>768){
    for (let i = 0; i < dogaboutConter.length; i++) {
        dogaboutConter[i].addEventListener("mouseenter", dogaboutDynamicEffectIn);
        dogaboutConter[i].addEventListener("mouseleave", dogaboutDynamicEffectOut);
    };
}

// 領養需知 動態效果
let dogadoptionDate = document.getElementById("dogadoption-date");
let dogadoptionDateBg = document.getElementById("dogadoption-date-bg");

//確認有抓到這兩個變數在執行
if (dogadoptionDate && dogadoptionDateBg) {
    dogadoptionDate.addEventListener("mouseenter", function () {
        if (window.innerWidth > 768) {
            dogadoptionDateBg.style.transform = "scale(1.05)";
        }
    });

    dogadoptionDate.addEventListener("mouseleave", function () {
        if (window.innerWidth > 768) {
            dogadoptionDateBg.style.transform = "scale(1)";
        }
    });
}

// 領養資料填寫動態效果
let dogadopterConter = document.getElementById("dogadopter-conter");
let dogadopterBg = document.getElementById("dogadopter-bg");

//確認有抓到這兩個變數在執行
if (dogadopterConter && dogadopterBg) {
    dogadopterConter.addEventListener("mouseenter", function () {
        if (window.innerWidth > 768) {
            dogadopterBg.style.transform = "scale(1)";
        }
        if (window.innerWidth > 1300) {
            dogadopterBg.style.transform = "scale(1.1)";
        }
        
    });

    dogadopterConter.addEventListener("mouseleave", function () { 
        
        if (window.innerWidth > 768) {
            dogadopterBg.style.transform = "scale(0.9)";
        }
        if (window.innerWidth > 1300) {
            dogadopterBg.style.transform = "scale(1)";
        }
    });
}

//dog show 篩選系統
//按鈕篩選系統
//建立所有按鈕的class
let radios = document.getElementsByClassName("radio-hover")

//建立抓取按鈕值的變數
let gender = '未選取';
let age = '未選取';
let kg = '未選取';

//把每個狗狗資料建立成陣列
var dogsArray = [
    {
        element: document.getElementById('item-dog-01'),
        dogname:'冰冰',
        doggender:'公',
        dogage:'3~8歲',
        dogkg:'大型犬'
    },
    {
        element: document.getElementById('item-dog-02'),
        dogname:'陽陽',
        doggender:'母',
        dogage:'3~8歲',
        dogkg:'大型犬'
    },
    {
        element: document.getElementById('item-dog-03'),
        dogname:'寶寶',
        doggender:'公',
        dogage:'0~1歲',
        dogkg:'小型犬'
    },
    {
        element: document.getElementById('item-dog-04'),
        dogname:'橘子',
        doggender:'母',
        dogage:'8+歲',
        dogkg:'中型犬'
    },
    {
        element: document.getElementById('item-dog-05'),
        dogname:'智智',
        doggender:'公',
        dogage:'3~8歲',
        dogkg:'中型犬'
    },
    {
        element: document.getElementById('item-dog-06'),
        dogname:'花花',
        doggender:'母',
        dogage:'8+歲',
        dogkg:'小型犬'
    },
    {
        element: document.getElementById('item-dog-07'),
        dogname:'風傲',
        doggender:'母',
        dogage:'3~8歲',
        dogkg:'大型犬'
    },
    {
        element: document.getElementById('item-dog-08'),
        dogname:'大大',
        doggender:'公',
        dogage:'8+歲',
        dogkg:'大型犬'
    },
    {
        element: document.getElementById('item-dog-09'),
        dogname:'多哥',
        doggender:'公',
        dogage:'3~8歲',
        dogkg:'中型犬'
    },
    {
        element: document.getElementById('item-dog-10'),
        dogname:'莫忘',
        doggender:'公',
        dogage:'1~3歲',
        dogkg:'小型犬'    
    },
    {
        element: document.getElementById('item-dog-11'),
        dogname:'雖雖',
        doggender:'公',
        dogage:'8+歲',
        dogkg:'中型犬'
    },
    {
        element: document.getElementById('item-dog-12'),
        dogname:'勇士',
        doggender:'母',
        dogage:'5歲',
        dogkg:'中型犬'
    }
]

//重置搜尋功能的按鈕顯示 隱藏
let filterSearchReset = document.getElementById("filter-search-reset")

//抓取按鈕的值
function genderFetchValue(e){
    gender = e; 
}
function ageFetchValue(e){
    age = e;
}
function kgFetchValue(e){
    kg = e;
}

function ScreeningJudgment(){
    //偵測顯示訊息的數值
    let DetectHiddenValues = 0;

    //抓顯示訊息的div
    let filterMessage = document.getElementById("filter-message")

    for(let i=0;i<dogsArray.length;i++){
        // 把變數變成布林值
        // 變數只有在值等於預設值或是狗狗詳細資料的值跟設定的值一樣時
        //才回傳true 不然只有在狗狗詳細資料跟設定的值不一樣才傳false
        let genderCondition = gender === '未選取' || dogsArray[i].doggender === gender;
        let ageCondition = age === '未選取' || dogsArray[i].dogage === age;
        let kgCondition = kg === '未選取' || dogsArray[i].dogkg === kg;

        // 如果布林值回傳true 就顯示
        if (genderCondition && ageCondition && kgCondition) {
            dogsArray[i].element.style.display = "flex";
        } else {
            dogsArray[i].element.style.display = "none";
            //當物件被隱藏起來時 增加數值
            DetectHiddenValues+=1 ;
            console.log(DetectHiddenValues)
        } 
    }
    
    //判斷顯示訊息跟隱藏
    if(DetectHiddenValues == 12){
        filterMessage.style.display = "block"
    } else{
        filterMessage.style.display = "none"
    }

    //判斷按鈕顯示 隱藏
    if(gender !== '未選取' || age !== '未選取' || kg !== '未選取'){
        filterSearchReset.style.display = "block"
    } else{
        filterSearchReset.style.display = "none"
    }
}

//給予每個按鈕判斷函式
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", ScreeningJudgment);
};


//搜尋名字篩選系統
//建立抓取輸入框的值
let SearchValue = ''

//輸入框的值並抓資料判斷是不是一樣
function SearchNameFilter(){
    //抓取輸入的值
    SearchValue = document.getElementById("filter-search").value

    //判斷輸入的值符不符合
    for(let i = 0;i<dogsArray.length;i++){
        if(dogsArray[i].dogname == SearchValue){
            dogsArray[i].element.style.display = "flex"
        } else {
            dogsArray[i].element.style.display = "none"
        }
    }

    //判斷當沒有輸入內容時全部顯示
    if(SearchValue == ''){
        for(let i = 0;i<dogsArray.length;i++){
            dogsArray[i].element.style.display = "flex"
        }
    }
    
}

//給搜尋的input設定一個偵測Enter鍵有沒有按下的事件監聽
//先抓取目前的頁面
let nowhtml = window.location.href

//在加入判斷當是這個頁面時才執行
if(nowhtml.includes('dogshow.html')){
    document.getElementById("filter-search").addEventListener("keyup",function(e){
        if(e.key == "Enter"){
            SearchNameFilter()
        }
    })
}



//重置按鈕功能設定

let inputradios = document.querySelectorAll('.filter-radio');
function ResetSearch(){
    //把所有的值回歸預設值
    gender = '未選取'
    age = '未選取'
    kg = '未選取'
    SearchValue = ''

    //把按鈕的選中狀態關閉
    for (let i = 0; i < inputradios.length; i++) {
        inputradios[i].checked = false;
    }

    //在執行一次函式去更新頁面上的顯示
    ScreeningJudgment()

} 


//捐款頁面新增輸入自訂金額取消radio效果
let CustomAmount = 0
let donationamountRadioStyle = document.getElementsByClassName("donationamount-radio-style")

function CancelCustomAmount(){
    CustomAmount = document.getElementById("donationamount-customize").value

    if(CustomAmount !== 0){
        for (let i = 0; i < donationamountRadioStyle.length; i++) {
            donationamountRadioStyle[i].checked = false;
        }
    }
}

if(nowhtml.includes('dogdonate.html')){
    document.getElementById("donationamount-customize").addEventListener('keyup',CancelCustomAmount)
}

//狗狗詳細頁面小圖換大圖
let dogdatailsBigimg = document.getElementById("dogdatails-conter-bigimg")
let conterSmallimgImg = document.getElementsByClassName("conter-smallimg-img")
let conterSmallimg1 = document.getElementById("conter-smallimg1")
let conterSmallimg2 = document.getElementById("conter-smallimg2")
let conterSmallimg3 = document.getElementById("conter-smallimg3")

function SmallPictureBecomesBigPicture (e){
    if(e.target.id == "conter-smallimg1"){
        dogdatailsBigimg.src = conterSmallimg1.src
    }
    if(e.target.id == "conter-smallimg2"){
        dogdatailsBigimg.src = conterSmallimg2.src
    }
    if(e.target.id == "conter-smallimg3"){
        dogdatailsBigimg.src = conterSmallimg3.src
    }
}

for (let i = 0; i < conterSmallimgImg.length; i++) {
    conterSmallimgImg[i].addEventListener("click",SmallPictureBecomesBigPicture)
}

//狗狗詳細頁面點擊變化
//變化頁面資料陣列
let dogDogdatailsArray = [
    {
    //狗狗詳細資料大圖
    bigImg:"pic/dogdatails-conter-0-1.jpg",
    //狗狗詳細資料小圖
    smallImg1:"pic/dogdatails-conter-0-1.jpg",
    smallImg2:"pic/dogdatails-conter-0-2.jpg",
    smallImg3:"pic/dogdatails-conter-0-3.jpg",
    
    //狗狗名字
    dogname:'冰冰',
    //狗狗簡介
    dogIntroduction:
    '是一位三歲、25公斤的哈士奇大男孩！冰冰的興趣多采多姿，熱愛戶外活動，尤其是追逐球和探險。他帶著激動的尾巴，總是散發著陽光般的活力。雖然他外表堅毅，但冰冰是一隻溫和友善的狗狗，喜歡與人和其他狗狗建立深厚的友誼。無論何時，冰冰都是活潑歡樂的夥伴！ ',
    //狗狗性格
    CharacterTraits:
    '冰冰是一隻樂觀開朗、充滿活力的哈士奇公狗。他對人類充滿好奇心，時常透露著友善和親和力。冰冰非常社交化，喜歡和其他狗狗互動，也對新環境充滿探險精神。',
    //狗狗醫療史
    medicalHistory:
    '冰冰保持了健康的生活習慣，接受定期的獸醫檢查和疫苗接種。他有良好的飲食習慣，體重穩定在25公斤，毛皮保持著光澤和清潔。',
    //狗狗行為
    BehavioralCharacteristics:
    '這位哈士奇會表現出典型的活潑與好動，喜歡在戶外奔跑、追逐球。他總是保持警惕，對周圍的事物充滿好奇。冰冰的個性使他成為一位極具活力和歡樂的伙伴。',
    //狗狗服從訓練
    obedienceTraining:
    '冰冰接受過基本的服從訓練，對基本指令有良好的反應。他喜歡學習新技能，是一個頗具潛力的訓練對象。與主人的互動中，他展現了良好的合作精神和服從性格。'
},{
    //陽光探險家黃金獵犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-1-1.jpg",
    //陽光探險家黃金獵犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-1-1.jpg",
    smallImg2: "pic/dogdatails-conter-1-2.jpg",
    smallImg3: "pic/dogdatails-conter-1-3.jpg",

    //陽光探險家黃金獵犬名字
    dogname: '陽陽',
    //陽光探險家黃金獵犬簡介
    dogIntroduction:
    '陽陽，一位七歲、30公斤的陽光探險家黃金獵犬女孩。她熱愛戶外冒險，對探險充滿熱情。笑容如陽光，是穩重親人的夥伴。成熟卻充滿活力，陽陽是您家庭的完美選擇。無論是共度悠閒時光還是迎接挑戰，她都是最忠實的伙伴。',

    //陽光探險家黃金獵犬性格
    CharacterTraits:
    '陽陽展現出成熟穩重的性格，笑容中散發著陽光。她對人充滿愛心，是值得信賴的伙伴。陽陽喜歡戶外冒險，對新事物充滿好奇。',

    //陽光探險家黃金獵犬醫療史
    medicalHistory:
    '陽陽的健康狀態良好，接受定期的獸醫檢查和疫苗接種。她保持理想體重，享有良好飲食習慣，展現出卓越的生活品質。',

    //陽光探險家黃金獵犬行為
    BehavioralCharacteristics:
    '陽陽成熟穩重，充滿活力。她對人充滿愛心，是值得信賴的伙伴。陽陽喜歡戶外冒險，對新事物充滿好奇。',

    //陽光探險家黃金獵犬服從訓練
    obedienceTraining:
    '陽陽是一位頗具服從性格的狗狗，接受過基本的服從訓練，對主人的指令有著良好的反應。她喜歡學習新技能，展現出出色的合作精神。'
},{
    //愛心小短腿柯基詳細資料大圖
    bigImg: "pic/dogdatails-conter-2-1.jpg",
    //愛心小短腿柯基詳細資料小圖
    smallImg1: "pic/dogdatails-conter-2-1.jpg",
    smallImg2: "pic/dogdatails-conter-2-2.jpg",
    smallImg3: "pic/dogdatails-conter-2-3.jpg",

    //愛心小短腿柯基名字
    dogname: '寶寶',
    //愛心小短腿柯基簡介
    dogIntroduction:
    '寶寶，是一隻一歲、10公斤的愛心小短腿柯基公狗。這位可愛的小夥伴擁有一顆充滿愛心的心靈，總是帶著歡樂的笑容點綴我們的生活。寶寶喜歡與人和其他狗狗互動，性格陽光可愛，是您家庭中的小太陽。雖然體型小巧，但寶寶的愛心和活力絕對是無限的，成為您生活的最佳伴侶。',

    //愛心小短腿柯基性格
    CharacterTraits:
    '寶寶性格陽光可愛，擁有豐富的愛心。他喜歡與人和其他狗狗互動，是一位充滿活力和友善的伙伴。寶寶總是帶著微笑，為您的生活增添無限的溫暖。',

    //愛心小短腿柯基醫療史
    medicalHistory:
    '寶寶的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並享有良好的飲食習慣。寶寶是一位健康快樂的小夥伴。',

    //愛心小短腿柯基行為
    BehavioralCharacteristics:
    '寶寶性格陽光可愛，總是充滿活力。他對人和其他狗狗都充滿好奇心，是一位熱愛互動的小夥伴。寶寶的笑容總是感染著周圍的每一個人。',

    //愛心小短腿柯基服從訓練
    obedienceTraining:
    '寶寶接受過基本的服從訓練，對主人的指令有著良好的反應。他喜歡學習新技能，展現出頗具潛力的訓練對象。寶寶是一位聰明伶俐的小夥伴，會成為您生活中的愛心明星。'

},{
    //文青少狗柴犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-3-1.jpg",
    //文青少狗柴犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-3-1.jpg",
    smallImg2: "pic/dogdatails-conter-3-2.jpg",
    smallImg3: "pic/dogdatails-conter-3-3.jpg",

    //文青少狗柴犬名字
    dogname: '橘子',
    //文青少狗柴犬簡介
    dogIntroduction:
    '橘子，是一位九歲、15公斤的文青少狗柴犬女孩。她擁有獨特的個性和文青氛圍，成為您生活中的小藝術家。橘子喜歡悠閒的午後，是一位愛好文學和藝術的知性狗狗。她的陶醉表情和溫暖的陪伴，讓您感受到悠然的生活。',

    //文青少狗柴犬性格
    CharacterTraits:
    '橘子擁有獨特的文青氛圍，是一位喜歡悠閒生活的知性狗狗。她喜歡文學和藝術，總是在悠然的午後帶給您愉悅的陪伴。橘子的溫柔和愛心讓她成為您家中的小藝術家。',

    //文青少狗柴犬醫療史
    medicalHistory:
    '橘子的健康狀態良好，接受定期的獸醫檢查和疫苗接種。她保持理想體重，並享有良好的飲食習慣。橘子是一位健康且知性的小夥伴。',

    //文青少狗柴犬行為
    BehavioralCharacteristics:
    '橘子擁有文青的氛圍，喜歡悠閒生活。她在悠然的午後展現出知性的一面，讓您感受到藝術的美好。橘子的陶醉表情成為家中獨特的風景。',

    //文青少狗柴犬服從訓練
    obedienceTraining:
    '橘子是一位知性的小夥伴，接受過基本的服從訓練。她對主人的指令有著良好的反應，展現出溫柔和合作的一面。橘子的知性特質使她成為家中的小藝術家，為您的生活增添色彩。'

},{
    //智慧守護者邊境牧羊犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-4-1.jpg",
    //智慧守護者邊境牧羊犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-4-1.jpg",
    smallImg2: "pic/dogdatails-conter-4-2.jpg",
    smallImg3: "pic/dogdatails-conter-4-3.jpg",

    //智慧守護者邊境牧羊犬名字
    dogname: '智智',
    //智慧守護者邊境牧羊犬簡介
    dogIntroduction:
    '智智，是一隻五歲、18公斤的智慧守護者邊境牧羊犬公狗。他擁有非凡的智慧和堅定的守護精神，是您家庭的最佳守護者。智智對周圍環境充滿警覺，同時展現出友善和溫暖的一面，成為您的家庭成員。',

    //智慧守護者邊境牧羊犬性格
    CharacterTraits:
    '智智擁有非凡的智慧和堅定的守護精神。他對周圍環境充滿警覺，同時展現出友善和溫暖的一面。智智是一位值得信賴的守護者，對家庭充滿愛心。',

    //智慧守護者邊境牧羊犬醫療史
    medicalHistory:
    '智智的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並擁有優良的飲食習慣。智智是一位健康且堅強的守護者。',

    //智慧守護者邊境牧羊犬行為
    BehavioralCharacteristics:
    '智智展現出非凡的智慧和守護精神。他對周圍的事物保持警覺，同時向人類展現友善和愛心。智智是一位堅定而和善的家庭守護者，將帶給您安心和愉快的生活。',

    //智慧守護者邊境牧羊犬服從訓練
    obedienceTraining:
    '智智接受過基本的服從訓練，對主人的指令有著良好的反應。他展現出守護本能，同時保持與家庭成員的親密互動。智智是一位值得信賴且聰明的守護者，將確保您的家庭安全和幸福。'

},{
    //棉花糖公主紅貴賓詳細資料大圖
    bigImg: "pic/dogdatails-conter-5-1.jpg",
    //棉花糖公主紅貴賓詳細資料小圖
    smallImg1: "pic/dogdatails-conter-5-1.jpg",
    smallImg2: "pic/dogdatails-conter-5-2.jpg",
    smallImg3: "pic/dogdatails-conter-5-3.jpg",

    //棉花糖公主紅貴賓名字
    dogname: '花花',
    //棉花糖公主紅貴賓簡介
    dogIntroduction:
    '花花，是一隻十歲、7公斤的棉花糖公主紅貴賓母狗。她擁有優雅的外表和溫暖的心靈，是您家庭的小公主。花花對人充滿愛心，並展現高雅的氛圍，猶如一朵綻放的花朵，將為您的生活帶來愉悅。',

    //棉花糖公主紅貴賓性格
    CharacterTraits:
    '花花性格優雅且充滿愛心。她喜歡與人親密互動，同時展現高貴的氛圍。花花是一位文靜而友善的小公主，將成為您的忠實伴侶。',

    //棉花糖公主紅貴賓醫療史
    medicalHistory:
    '花花的健康狀態良好，接受定期的獸醫檢查和疫苗接種。她保持理想體重，並享有優質的飲食習慣。花花是一位健康且活潑的小公主。',

    //棉花糖公主紅貴賓行為
    BehavioralCharacteristics:
    '花花性格優雅且充滿愛心。她喜歡與人充分親密互動，同時表現出高貴的氛圍。花花是一位文靜而友善的小公主，將成為您生活中的陪伴。',

    //棉花糖公主紅貴賓服從訓練
    obedienceTraining:
    '花花接受過基本的服從訓練，對主人的指令有著良好的反應。她展現出順從和聰明的特質，是一位值得信賴的家庭成員。花花將在您的生活中散發愛心，成為您家庭的小公主。'
},{
    //風雲神獸藏敖詳細資料大圖
    bigImg: "pic/dogdatails-conter-6-1.jpg",
    //風雲神獸藏敖詳細資料小圖
    smallImg1: "pic/dogdatails-conter-6-1.jpg",
    smallImg2: "pic/dogdatails-conter-6-2.jpg",
    smallImg3: "pic/dogdatails-conter-6-3.jpg",

    //風雲神獸藏敖名字
    dogname: '風傲',
    //風雲神獸藏敖簡介
    dogIntroduction:
    '風傲，是一隻三歲、40公斤的風雲神獸藏敖母狗。她擁有傲視群雄的外表和神秘的氛圍，是您家庭的風雲之選。風傲對主人忠心耿耿，同時展現出高貴的特質，將為您的生活帶來莫大的榮耀。',

    //風雲神獸藏敖性格
    CharacterTraits:
    '風傲性格傲視群雄，同時擁有溫馨愛心。她對主人忠心耿耿，展現出高貴的氛圍。風傲是一位神秘而親切的伙伴，將成為您生活中的風雲之選。',

    //風雲神獸藏敖醫療史
    medicalHistory:
    '風傲的健康狀態良好，接受定期的獸醫檢查和疫苗接種。她保持理想體重，並享有健康的飲食習慣。風傲是一位健康且活潑的神獸伙伴。',

    //風雲神獸藏敖行為
    BehavioralCharacteristics:
    '風傲性格傲視群雄，同時擁有溫馨愛心。她對主人忠心耿耿，展現出高貴的特質。風傲是一位神秘而親切的伙伴，將成為您生活中的風雲之選。',

    //風雲神獸藏敖服從訓練
    obedienceTraining:
    '風傲接受過基本的服從訓練，對主人的指令有著良好的反應。她展現出順從和聰明的特質，是一位值得信賴的家庭成員。風傲將為您的生活帶來風雲不減的榮耀，成為您家庭的神獸之選。'

},{
    //溫柔巨獸大丹犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-7-1.jpg",
    //溫柔巨獸大丹犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-7-1.jpg",
    smallImg2: "pic/dogdatails-conter-7-2.jpg",
    smallImg3: "pic/dogdatails-conter-7-3.jpg",

    //溫柔巨獸大丹犬名字
    dogname: '大大',
    //溫柔巨獸大丹犬簡介
    dogIntroduction:
    '大大，是一隻十歲、20公斤的溫柔巨獸大丹犬公狗。他擁有強健的體格和溫和的性格，是一位親切的家庭成員。大大對主人忠誠守護，同時帶有一絲溫柔，成為您生活的巨大溫馨。',

    //溫柔巨獸大丹犬性格
    CharacterTraits:
    '大大性格強健而溫和，是一位充滿愛心的家庭成員。他對主人忠誠守護，同時帶有一絲柔情。大大是一位親切可靠的伙伴，將為您的生活增添巨大的溫馨。',

    //溫柔巨獸大丹犬醫療史
    medicalHistory:
    '大大的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並享有健康的飲食習慣。大大是一位健康且活潑的巨獸伙伴。',

    //溫柔巨獸大丹犬行為
    BehavioralCharacteristics:
    '大大性格強健而溫和，是一位充滿愛心的家庭成員。他對主人忠誠守護，同時帶有一絲柔情。大大是一位親切可靠的伙伴，將為您的生活增添巨大的溫馨。',

    //溫柔巨獸大丹犬服從訓練
    obedienceTraining:
    '大大接受過基本的服從訓練，對主人的指令有著良好的反應。他展現出穩重和順從的特質，是一位值得信賴的家庭成員。大大的守護之心，將為您的生活帶來巨大的安慰和歡樂。'
},{
    //牧羊人救星德國牧羊犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-8-1.jpg",
    //牧羊人救星德國牧羊犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-8-1.jpg",
    smallImg2: "pic/dogdatails-conter-8-2.jpg",
    smallImg3: "pic/dogdatails-conter-8-3.jpg",

    //牧羊人救星德國牧羊犬名字
    dogname: '多哥',
    //牧羊人救星德國牧羊犬簡介
    dogIntroduction:
    '多哥，是一隻四歲、15公斤的牧羊人救星德國牧羊犬公狗。他擁有出色的智慧和卓越的工作能力，是牧羊人的得力助手。多哥性格忠誠且敏捷，將為您的生活增添安全感和活力。',

    //牧羊人救星德國牧羊犬性格
    CharacterTraits:
    '多哥性格忠誠且敏捷，擁有出色的智慧和卓越的工作能力。他是牧羊人的得力助手，對主人充滿忠誠。多哥是一位值得信賴和勇敢的夥伴，將為您的生活帶來安全感和活力。',

    //牧羊人救星德國牧羊犬醫療史
    medicalHistory:
    '多哥的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並享有健康的飲食習慣。多哥是一位健康且活潑的工作夥伴。',

    //牧羊人救星德國牧羊犬行為
    BehavioralCharacteristics:
    '多哥性格忠誠且敏捷，擁有出色的智慧和卓越的工作能力。他是牧羊人的得力助手，對主人充滿忠誠。多哥是一位值得信賴和勇敢的夥伴，將為您的生活帶來安全感和活力。',

    //牧羊人救星德國牧羊犬服從訓練
    obedienceTraining:
    '多哥接受過基本的服從訓練，對主人的指令有著良好的反應。他展現出順從和聰明的特質，是一位優秀的工作夥伴。多哥的助力之心，將為您的生活帶來更多的便利和歡樂。'

},{
    //出來喬阿吉娃娃詳細資料大圖
    bigImg: "pic/dogdatails-conter-9-1.jpg",
    //出來喬阿吉娃娃詳細資料小圖
    smallImg1: "pic/dogdatails-conter-9-1.jpg",
    smallImg2: "pic/dogdatails-conter-9-2.jpg",
    smallImg3: "pic/dogdatails-conter-9-3.jpg",

    //出來喬阿吉娃娃名字
    dogname: '莫忘',
    //出來喬阿吉娃娃簡介
    dogIntroduction:
    '莫忘，是一隻兩歲、2公斤的出來喬阿吉娃娃公狗。他小巧可愛，擁有獨特的個性。莫忘喜歡與人親近，帶給您無盡的歡樂和陪伴。儘管體型微小，他的熱情和活力卻是無限的。',

    //出來喬阿吉娃娃性格
    CharacterTraits:
    '莫忘小巧可愛，擁有獨特的個性。他喜歡與人親近，是一位充滿熱情和活力的小夥伴。莫忘的陽光笑容，將為您的生活帶來無盡的歡樂。',

    //出來喬阿吉娃娃醫療史
    medicalHistory:
    '莫忘的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並享有健康的飲食習慣。莫忘是一位健康且快樂的小夥伴。',

    //出來喬阿吉娃娃行為
    BehavioralCharacteristics:
    '莫忘小巧可愛，擁有獨特的個性。他喜歡與人親近，是一位充滿熱情和活力的小夥伴。莫忘的陽光笑容，將為您的生活帶來無盡的歡樂。',

    //出來喬阿吉娃娃服從訓練
    obedienceTraining:
    '莫忘接受過基本的服從訓練，對主人的指令有著良好的反應。他展現出聰明和順從的特質，是一位容易教導且親近的小夥伴。莫忘的陽光性格，將為您的生活帶來更多的歡笑和愉悅。'

},{
    //整天只會吃的巴哥犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-10-1.jpg",
    //整天只會吃的巴哥犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-10-1.jpg",
    smallImg2: "pic/dogdatails-conter-10-2.jpg",
    smallImg3: "pic/dogdatails-conter-10-3.jpg",

    //整天只會吃的巴哥犬名字
    dogname: '雖雖',
    //整天只會吃的巴哥犬簡介
    dogIntroduction:
    '雖雖，是一隻七歲、15公斤的整天只會吃的巴哥犬公狗。他對美食充滿熱愛，總是樂於享受美味。雖雖性格親人，是一位擁有獨特魅力的小夥伴。儘管整天追求美食，他的愛心和陽光笑容讓人難以抗拒。',

    //整天只會吃的巴哥犬性格
    CharacterTraits:
    '雖雖性格親人，擁有獨特的魅力。他對美食充滿熱愛，是一位整天追求美味的小夥伴。雖雖的陽光笑容，總是為您帶來溫馨和歡笑。',

    //整天只會吃的巴哥犬醫療史
    medicalHistory:
    '雖雖的健康狀態良好，接受定期的獸醫檢查和疫苗接種。他保持理想體重，並享有良好的飲食習慣。雖雖是一位健康且快樂的小夥伴。',

    //整天只會吃的巴哥犬行為
    BehavioralCharacteristics:
    '雖雖性格親人，擁有獨特的魅力。他對美食充滿熱愛，是一位整天追求美味的小夥伴。雖雖的陽光笑容，總是為您帶來溫馨和歡笑。',

    //整天只會吃的巴哥犬服從訓練
    obedienceTraining:
    '雖雖接受過基本的服從訓練，對主人的指令有著良好的反應。他展現出聰明和順從的特質，是一位容易教導且親近的小夥伴。雖雖的愛心和食量，將為您的生活增添更多樂趣和甜蜜回憶。'

},{
    //玩心大汪的英國鬥牛犬詳細資料大圖
    bigImg: "pic/dogdatails-conter-11-1.jpg",
    //玩心大汪的英國鬥牛犬詳細資料小圖
    smallImg1: "pic/dogdatails-conter-11-1.jpg",
    smallImg2: "pic/dogdatails-conter-11-2.jpg",
    smallImg3: "pic/dogdatails-conter-11-3.jpg",

    //玩心大汪的英國鬥牛犬名字
    dogname: '勇士',
    //玩心大汪的英國鬥牛犬簡介
    dogIntroduction:
    '勇士，是一隻五歲、19公斤的玩心大汪的英國鬥牛犬母狗。她擁有一顆玩心大汪的心靈，總是充滿活力和好奇心。勇士是您家庭中的小夥伴，陪伴您一同度過快樂時光。',

    //玩心大汪的英國鬥牛犬性格
    CharacterTraits:
    '勇士性格充滿活力和好奇心，是一位真正的玩心大汪。她喜歡與人互動，是您家庭中的活潑陽光。勇士的愛心和獨特個性，總是讓人難以忘懷。',

    //玩心大汪的英國鬥牛犬醫療史
    medicalHistory:
    '勇士的健康狀態良好，接受定期的獸醫檢查和疫苗接種。她保持理想體重，並享有良好的飲食習慣。勇士是一位健康且快樂的小夥伴。',

    //玩心大汪的英國鬥牛犬行為
    BehavioralCharacteristics:
    '勇士性格充滿活力和好奇心，是一位真正的玩心大汪。她喜歡與人互動，是您家庭中的活潑陽光。勇士的愛心和獨特個性，總是讓人難以忘懷。',

    //玩心大汪的英國鬥牛犬服從訓練
    obedienceTraining:
    '勇士接受過基本的服從訓練，對主人的指令有著良好的反應。她展現出聰明和順從的特質，是一位容易教導且親近的小夥伴。勇士的陽光笑容，將為您的生活增添更多歡笑和美好時光。'

}]
//抓取html標籤
//圖片的id在小圖換大圖就有建立過了
let dogName = document.getElementById("dogname")
let dogIntroduction = document.getElementById("dogIntroduction")
let CharacterTraits = document.getElementById("CharacterTraits")
let medicalHistory = document.getElementById("medicalHistory")
let BehavioralCharacteristics = document.getElementById("BehavioralCharacteristics")
let obedienceTraining = document.getElementById("obedienceTraining")

//設定只有在這個頁面才執行這個功能
if(nowhtml.includes('dogdetails.html')){
    //抓取URL上的值
    const params = new URLSearchParams(window.location.search);
    const dogId = params.get('dog');

    //改變裡面的圖片
    dogdatailsBigimg.src = dogDogdatailsArray[dogId].bigImg;
    conterSmallimg1.src = dogDogdatailsArray[dogId].smallImg1;
    conterSmallimg2.src = dogDogdatailsArray[dogId].smallImg2;
    conterSmallimg3.src = dogDogdatailsArray[dogId].smallImg3;

    //改變裡面的內容
    dogName.innerHTML = dogDogdatailsArray[dogId].dogname;
    dogIntroduction.innerHTML = dogDogdatailsArray[dogId].dogIntroduction;
    CharacterTraits.innerHTML = dogDogdatailsArray[dogId].CharacterTraits;
    medicalHistory.innerHTML = dogDogdatailsArray[dogId].medicalHistory;
    BehavioralCharacteristics.innerHTML = dogDogdatailsArray[dogId].BehavioralCharacteristics;
    obedienceTraining.innerHTML = dogDogdatailsArray[dogId].obedienceTraining;
}

//捐款hover效果

let donationamountDadio = document.getElementById("donationamount-radio")

let radioImg = document.getElementById("radio-img")

function DonationHoverEffectIn(){
    radioImg.style.transform = "scale(1.1)"
}
function DonationHoverEffectOut(){
    radioImg.style.transform = "scale(1)"
}

donationamountDadio.addEventListener("mouseenter",DonationHoverEffectIn)
donationamountDadio.addEventListener("mouseleave",DonationHoverEffectOut)