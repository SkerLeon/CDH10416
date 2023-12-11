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
    if(bannerindex < 5760){
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
        bannerindex+= 1920;
        bannerBgAlign.style.right =  `${bannerindex}px`;
        bannerBgAlign.style.transition = "1s";
        
    }

    //當值到5760時5秒後自動設定動畫過度效果為無
    if(bannerindex >= 5760){

        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#8F8686"

        bannerindex = -1920;
        setTimeout(function(){
            bannerBgAlign.style.transition = "none";
        },5000)
    }
}

function linkControlBanner(e){
    //在按下link的點點時
    //清除計時器並新增 就會有重置的效果
    clearInterval(bannerInterval);

    if(e.target.id == "banner-round-A"){
        bannerRoundA.style.backgroundColor = "#8F8686"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 0
        bannerBgAlign.style.right = "0px"
    }
    if(e.target.id == "banner-round-B"){

        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#8F8686"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 1920
        bannerBgAlign.style.right = "1920px"
    }
    if(e.target.id == "banner-round-C"){
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#8F8686"
        bannerRoundD.style.backgroundColor = "#F7F1F1"

        bannerindex = 3840
        bannerBgAlign.style.right = "3840px"
    }
    if(e.target.id == "banner-round-D"){
        bannerRoundA.style.backgroundColor = "#F7F1F1"
        bannerRoundB.style.backgroundColor = "#F7F1F1"
        bannerRoundC.style.backgroundColor = "#F7F1F1"
        bannerRoundD.style.backgroundColor = "#8F8686"
        
        bannerindex = 5760
        bannerBgAlign.style.right = "5760px"
    }

    bannerInterval = setInterval(bannerPush, 5000);
}

//-1920 0 3840 5760 4張圖position的數值
if(window.innerWidth>768){
    for (let i = 0; i < bannerRounds.length; i++) {
        bannerRounds[i].addEventListener("click", linkControlBanner);
    };
}

