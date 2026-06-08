$(document).ready(function () {
  // ===============================
  // 初始化AOS套件
  // ===============================
  AOS.init();


  // ===============================
  // 初始化lightcase套件
  // ===============================
  // $('.showcase').lightcase();
  $('.showcase').lightcase({
    showCaption: false,  // 關閉下方的 caption 說明文字
  });



  // ===============================
  // 左右滑塊區域
  // ===============================
  /* Swiper 設定開始*/
  // var sec2ThumbSwiper = new Swiper(".sec2ThumbSwiper", {
  //   spaceBetween: 0,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });

  var swiper = new Swiper(".sec3Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".sec3-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //   swiper: sec2ThumbSwiper,
    // },
  });


  var swiper = new Swiper(".sec4Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
    autoplay: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // thumbs: {
    //   swiper: sec2ThumbSwiper,
    // },
    breakpoints: {
      575: { slidesPerView: 1, spaceBetween: 60 },
      576: { slidesPerView: 2, spaceBetween: 40 },
      993: { slidesPerView: 4, spaceBetween: 20 },
      // 1400: { slidesPerView: 2, spaceBetween: 68 },
      // 1200: { slidesPerView: 2, spaceBetween: 32 },
    },
  });


  var swiper = new Swiper(".sec7Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".sec2-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //   swiper: sec2ThumbSwiper,
    // },
  });





  /* Swiper 設定結束*/



  // ===============================
  // 表單連結
  // ===============================
  const checkBox = document.getElementById("invalidCheck");
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", function (event) {
    // 檢查勾選框是否被勾選
    if (!checkBox.checked) {
      // 如果勾選框沒有被勾選，顯示提示訊息
      alert("請勾選同意條款後再提交表單！");
      // 取消提交動作
      event.preventDefault();
    } else {
      // 防止AJAX觸發表單提交
      var username = $("#username").val() || "未填寫";
      var mail = $("#mail").val() || "未填寫";
      var phone = $("#phone").val() || "未填寫";
      var product = $("#product").val() || "未填寫";
      var money = $("#money").val() || "未填寫";
      var msg = $("#msg").val() || "未填寫";


      // 姓名驗證（只允許字母和空格）
      // var usernameRegex = /^[a-zA-Z\u4e00-\u9fa5]{1,6}$/;
      // if (username == "未填寫" || !usernameRegex.test(username)) {
      if (username == "未填寫") {
        $("#username").focus();
        alert("請填寫姓名");
        return false;
      }

      // 信箱驗證
      var emailRegex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (mail == "未填寫" || !emailRegex.test(mail)) {
        $("#mail").focus();
        alert("請填寫有效的信箱");
        return false;
      }

      // 電話驗證（有效的 10 位數字）
      // var phoneRegex = /^0\d{9}$/;
      // if (phone == "未填寫" || !phoneRegex.test(phone)) {
      if (phone == "未填寫") {
        $("#phone").focus();
        alert("請填寫有效的電話號碼");
        return false;
      }

      // 了解產品驗證
      if (product == "未填寫") {
        $("#product").focus();
        alert("請選擇購屋需求");
        return false;
      }

      // 購屋需求驗證
      if (money == "未填寫") {
        $("#money").focus();
        alert("請選擇購總價區間");
        return false;
      }

      // 如果必填項目都填寫了，才觸發AJAX
      var data = {
        "entry.36669906": username,
        "entry.1867877574": mail,
        "entry.1441555859": phone,
        "entry.1294243486": product,
        "entry.2019135253": money,
        "entry.1756854159": msg,
      };

      // 使用AJAX發送表單資料
      $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScdpWxos3HzHEh-9rYJNIX5T5MvTsRb3dY-N6qPQU00S69Leg/formResponse", //填寫google表單連結
        data: data,
        complete: function () {
          alert("已經成功送出表單，我們會盡快請專員與您聯繫，感謝您的填寫！");
          // location.href = "index.php";
          location.href = "index.html";
        },
      });
    }
  });





  // ===============================
  // 置底小圖示navbar設定
  // ===============================

  // 獲取 header 元素
  let header = document.getElementById("header");

  // 記錄上一次的滾動位置
  let lastScrollTop = 0;

  // 當頁面滾動時觸發
  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 判斷滾動方向
    if (currentScroll > lastScrollTop) {
      // 向下滾動，隱藏 header
      header.style.bottom = "0"; // 根據 header 的高度進行調整
    } else {
      // 向上滾動，顯示 header
      header.style.bottom = "-100px"; // 顯示 header
    }

    // 更新 lastScrollTop 為當前的滾動位置
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止滾動過度
  });




  // ===============================
  // 靜音按鈕
  // ===============================
  // var sec1VideoPc = $("#sec1VideoPc")[0];
  // var sec1VideoMb = $("#sec1VideoMb")[0];
  // sec1VideoPc.muted = true;
  // sec1VideoMb.muted = true;
  // sec1VideoPc.play();
  // sec1VideoMb.play();


  // $("#sec1VideoSoundPc").click(function () {
  //   sec1VideoPc.muted = true;
  //   $("#sec1VideoSoundPc").hide();
  //   $("#sec1VideoMutedPc").show();
  // });

  // $("#sec1VideoMutedPc").click(function () {
  //   sec1VideoPc.muted = false;
  //   $("#sec1VideoSoundPc").show();
  //   $("#sec1VideoMutedPc").hide();
  // });


  // $("#sec1VideoSoundMb").click(function () {
  //   sec1VideoMb.muted = true;
  //   $("#sec1VideoSoundMb").hide();
  //   $("#sec1VideoMutedMb").show();
  // });

  // $("#sec1VideoMutedMb").click(function () {  
  //   sec1VideoMb.muted = false;
  //   $("#sec1VideoSoundMb").show();
  //   $("#sec1VideoMutedMb").hide();
  // });



  // const sec1VideoPc = document.getElementById("sec1VideoPc");
  // const sec1VideoMb = document.getElementById("sec1VideoMb");
  // const sec5Video = document.getElementById("sec5Video"); // 你的 sec5 影片
  // const sec8Video = document.getElementById("sec8Video"); // 你的 sec5 影片


  // // 參數說明：
  // // section: 傳入字串，如 'sec1', 'sec5'
  // // device: 傳入字串，如 'Pc', 'Mb' (如果沒有分，可傳入空字串)
  // // videoElement: 傳入對應的影片 DOM 元素
  // // isMute: 傳入布林值 true/false
  // function setVideoMuteState(section, device, videoElement, isMute) {
  //   videoElement.muted = isMute;

  //   // 動態組合出按鈕的 ID，例如 "#sec1VideoSoundPc" 或 "#sec5VideoSoundMb"
  //   const soundBtn = $(`#${section}VideoSound${device}`);
  //   const mutedBtn = $(`#${section}VideoMuted${device}`);

  //   if (isMute) {
  //     soundBtn.hide();
  //     mutedBtn.show();
  //   } else {
  //     soundBtn.show();
  //     mutedBtn.hide();
  //   }
  // }


  // -----sec1影片靜音 start-----
  // const mediaQuery = window.matchMedia("(min-width: 992px)");

  // function handleSec1Playback(e) {
  //   if (e.matches) {
  //     // PC 版
  //     sec1VideoMb.pause();
  //     sec1VideoPc.muted = true;
  //     sec1VideoPc.play().catch(e => console.log("阻擋自動播放", e));
  //     setVideoMuteState('sec1', 'Pc', sec1VideoPc, true);
  //   } else {
  //     // 手機版
  //     sec1VideoPc.pause();
  //     sec1VideoMb.muted = true;
  //     sec1VideoMb.play().catch(e => console.log("阻擋自動播放", e));
  //     setVideoMuteState('sec1', 'Mb', sec1VideoMb, true);
  //   }
  // }
  // mediaQuery.addEventListener("change", handleSec1Playback);
  // handleSec1Playback(mediaQuery);

  // // 綁定 Section 1 按鈕
  // $("#sec1VideoSoundPc").click(() => setVideoMuteState('sec1', 'Pc', sec1VideoPc, true));
  // $("#sec1VideoMutedPc").click(() => setVideoMuteState('sec1', 'Pc', sec1VideoPc, false));
  // $("#sec1VideoSoundMb").click(() => setVideoMuteState('sec1', 'Mb', sec1VideoMb, true));
  // $("#sec1VideoMutedMb").click(() => setVideoMuteState('sec1', 'Mb', sec1VideoMb, false));

  // // -----sec1影片靜音 end-----







  // ===============================
  // backToTop按鈕樣式
  // ===============================
  // var $button = $.backToTop({
  //   theme: 'fawesome'
  // });


  // $(document).ready(function () {
  //   $.extend({
  //     'goAnchor': function (to, time) {
  //       $obj = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
  //       $($obj).animate({
  //         scrollTop: to
  //       }, time);
  //     }
  //   });
  //   $('#click').click(function () {
  //     $.goAnchor($('#target').offset().top, 1000);
  //   });
  //   $('#progress').click(function () {
  //     $.goAnchor($('#target').offset().top, 1000);
  //   });
  // });
  // var bodyClass = document.body.classList,
  //   lastScrollY = 0;
  // window.addEventListener('scroll', function () {
  //   var st = this.scrollY;
  //   /* 判斷是向上捲動，而且捲軸超過 200px */
  //   if (st < lastScrollY) {
  //     bodyClass.remove('hideUp');
  //   } else {
  //     bodyClass.add('hideUp');
  //   }
  //   lastScrollY = st;
  // });



})













// ===============================
// sec6空拍圖置中
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  function centeringHorizontalScrollbarAll() {
    // 獲取當前視窗寬度
    let winWidth = window.innerWidth;

    let wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach(function (wrapper) {
      // 取得 wrapper 內的 .landscape 圖片
      let landscape = wrapper.querySelector(".landscape");
      if (landscape) {
        let winWidth = window.innerWidth;
        // 假設圖片是背景圖片，則取得圖片的寬度 (背景圖片寬度可以通過 CSS 來設置)
        let imageWidth = landscape.offsetWidth;
        let winHalfWidth = winWidth / 2;
        // 計算滾動位置，使圖片居中
        let scrollPosition = (imageWidth / 2 - winHalfWidth) - (winWidth / 4.5); //圖片不在正中間所以後面再加寬度來手動置中
        // let scrollPosition = (imageWidth / 2 - winHalfWidth); //圖片不在正中間所以後面再加寬度來手動置中
        wrapper.scrollLeft = scrollPosition;
      } else {
        console.error("未找到 .landscape 元素於 .wrapper 內。");
      }
    });
  }

  // 在文檔加載完成後執行 centeringHorizontalScrollbar2
  centeringHorizontalScrollbarAll();

  // 如果需要在窗口大小變化時重新調整滾動位置
  window.addEventListener("resize", function () {
    centeringHorizontalScrollbarAll();
  });
});






