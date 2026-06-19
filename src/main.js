// 引入 jQuery
import $ from "jquery";
window.$ = window.jQuery = $;

// 引入 CSS
import "./tailwind-style.css";
import "./style.css";

// 引入 Swiper
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 引入 AOS
import AOS from "aos";
import "aos/dist/aos.css";

// 引入 GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 引入 jarallax
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";

// 引入 lenis
import Lenis from "lenis";

// ===============================
// GSAP套件 平滑滾動 設定
// ===============================
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const sec1Container = document.querySelector(".section1 .sec-container");
  const cardsContainer = sec1Container.querySelector(".cards");
  const cards = document.querySelectorAll(".card-item");
  const distance = cardsContainer.clientWidth - window.innerWidth;

  // gsap.fromTo(
  //   "#sec1Video",
  //   {
  //     width: "80vw",
  //     height: "70vh",
  //     top: "15vh", // 置中：(100vh - 80vh) / 2
  //     left: "10vw", // 置中：(100vw - 80vw) / 2
  //     borderRadius: "20px",
  //   },
  //   {
  //     width: "100vw",
  //     height: "100vh",
  //     top: "0",
  //     left: "0",
  //     borderRadius: "0px",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: sec1Container,
  //       start: "top top",
  //       end: "+=" + distance * 0.3, // 在橫向滾動前 30% 就完成放大
  //       scrub: true,
  //     },
  //   },
  // );

  gsap.matchMedia().add(
    {
      // 手機版：螢幕寬度小於 768px (對應 Tailwind 的 md 以下)
      isMobile: "(max-width: 767px)",
      // 電腦版：螢幕寬度大於等於 768px (對應 Tailwind 的 md 以上)
      isDesktop: "(min-width: 768px)",
    },
    (context) => {
      // 取得當前是哪個版本
      let { isMobile, isDesktop } = context.conditions;

      // 3. 根據版本動態設定初始的 height 與 top
      // 手機版: 70vh (top 15vh 置中) | 電腦版: 80vh (top 10vh 置中)
      let startHeight = isMobile ? "70vh" : "80vh";
      let startTop = isMobile ? "15vh" : "10vh";

      gsap.fromTo(
        "#sec1Video",
        {
          width: "80vw",
          height: startHeight, // 這裡會根據裝置自動帶入 70vh 或 80vh
          top: startTop, // 這裡會自動帶入 15vh 或 10vh
          left: "10vw",
          borderRadius: "24px",
        },
        {
          width: "100vw",
          height: "100vh",
          top: "0",
          left: "0",
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sec1Container,
            start: "top top",
            end: () => "+=" + distance * 0.3,
            scrub: true,
            invalidateOnRefresh: true, // 確保縮放時重新計算數值
          },
        },
      );
    },
  );

  // gsap.matchMedia().add(
  //   {
  //     isMobile: "(max-width: 767px)",
  //     isDesktop: "(min-width: 768px)",
  //   },
  //   (context) => {
  //     let { isMobile } = context.conditions;

  //     // 3. 根據版本動態設定初始的裁切範圍
  //     // 手機版：上下各裁掉 15vh (置中露出 70vh) | 電腦版：上下各裁掉 10vh (置中露出 80vh)
  //     let insetY = isMobile ? "15vh" : "10vh";
  //     let insetX = "10vw"; // 左右兩版都一樣，裁掉各 10vw，露出 80vw

  //     let tween = gsap.fromTo(
  //       "#sec1Video",
  //       {
  //         clipPath: `inset(${insetY} ${insetX} ${insetY} ${insetX} round 20px)`,
  //       },
  //       {
  //         clipPath: "inset(0vh 0vw 0vh 0vw round 0px)",
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: sec1Container,
  //           start: "top top",
  //           // 用 function 包起來，resize 時 invalidateOnRefresh 才會真正重新算 distance
  //           end: () => "+=" + distance * 0.3,
  //           scrub: true,
  //           invalidateOnRefresh: true,
  //         },
  //       },
  //     );

  //     // 4. 斷點切換時，手動清掉舊的 ScrollTrigger（雙重保險，matchMedia 預設也會處理）
  //     return () => tween.scrollTrigger && tween.scrollTrigger.kill();
  //   },
  // );

  // gsap.to(".scroll", {
  //   autoAlpha: 0,
  //   duration: 0.2,
  //   scrollTrigger: {
  //     trigger: cardsContainer,
  //     start: "top top",
  //     end: "top top-=1",
  //     toggleActions: "play none reverse none",
  //   },
  // });

  gsap.fromTo(
    "#section1",
    {
      "--c1": "#D9CAA6",
      "--c2": "#E6E1D5",
      "--p2": "60%",
    },
    {
      "--c1": "#E6E1D5",
      "--c2": "#FFF1CF",
      "--p2": "100%",
      scrollTrigger: {
        trigger: sec1Container,
        start: "top top",
        end: () => "+=" + distance * 0.3,
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
    },

    // {
    //   "--gy": "-1%",
    //   "--sy": "10%",
    // },
    // {
    //   "--gy": "5%",
    //   "--sy": "11%",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: sec1Container,
    //     start: "top top",
    //     end: () => "+=" + distance * 0.3,
    //     scrub: true,
    //     invalidateOnRefresh: true,
    //   },
    // },
  );

  const scrollTween = gsap.to(cardsContainer, {
    x: -distance,
    ease: "none", // linear progression
    // let's pin our container while our cardsContainer is animating
    scrollTrigger: {
      trigger: sec1Container,
      pin: true,
      scrub: true, // progress with the scroll
      start: "top top",
      end: "+=" + distance,
    },
  });

  cards.forEach((card) => {
    const values = {
      // get a value between 30 and 50 or -30 and -50
      x: (Math.random() * 20 + 30) * (Math.random() < 0.5 ? 1 : -1),
      // get a value between 10 and 16 or -16 and -10
      y: (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1),
      // get a value between 10 and 20 or -10 and -20
      rotation: (Math.random() * 10 + 10) * (Math.random() < 0.5 ? 1 : -1),
    };

    gsap.fromTo(
      card,
      {
        // let's start from this 3 values
        rotation: values.rotation,
        xPercent: values.x,
        yPercent: values.y,
      },
      {
        // and finish to its 3 opposite values
        rotation: -values.rotation,
        xPercent: -values.x,
        yPercent: -values.y,
        ease: "none", // linear progression
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween, // our tween will listen to our scrollTween container position
          start: "left 120%",
          end: "right -20%",
          scrub: true, // the animation progress with the scroll
        },
      },
    );
  });

  // const root = document.querySelector('.section2')
  const sentences = document.querySelectorAll(" .sentence");

  const pinHeight = document.querySelector(".section2 .pin-height");
  const sec2Container = document.querySelector(".section2 .sec-container");

  sentences.forEach((sentence) => {
    wrapLettersInSpan(sentence);
  });

  ScrollTrigger.create({
    trigger: pinHeight, // Monitor the position of pin-height
    start: "top top",
    end: "bottom bottom",
    pin: sec2Container, // The pinned section
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinHeight,
      start: "top top",
      end: "bottom bottom",
      scrub: true, // Progress linked to scrolling
    },
  });

  sentences.forEach((sentence, index) => {
    if (sentences[index + 1]) {
      // Move the sentence above the viewport using y & yPercent
      tl.to(sentences[index], {
        yPercent: -50,
        y: "-50vh",
        ease: "power4.in",
      });

      // Move the letters above the sentence using y & yPercent
      tl.to(
        sentences[index].querySelectorAll("span"),
        {
          yPercent: -50,
          y: "-50vh",
          stagger: -0.02, // Stagger in the appearance
          ease: "power2.in",
        },
        "<",
      ); // Means the animation starts at the start of the previous tween

      // Move the next sentence (index+1)
      // to the middle of the viewport using y & yPercent
      tl.from(
        sentences[index + 1],
        {
          yPercent: 50, // Starts at 50 and ends at 0
          y: "50vh", // Starts at 50vh and ends at 0
          ease: "power4.out",
        },
        "<",
      );

      // Move the next letters (index+1)
      // to the middle of the viewport using y & yPercent
      tl.from(
        sentences[index + 1].querySelectorAll("span"),
        {
          yPercent: 50, // Starts at 50 and ends at 0
          y: "50vh", // Starts at 50vh and ends at 0
          ease: "power2.out",
          stagger: -0.02, // Stagger in the appearance
        },
        "<",
      );
    }
  });
});

function wrapLettersInSpan(element) {
  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map((char) =>
      char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`,
    )
    .join(" ");
}

// ===============================
// Lenis套件 平滑滾動 設定
// ===============================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  autoRaf: false,
});

// Lenis 滾動時同步更新 ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// 用 GSAP ticker 統一驅動
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

window.addEventListener("load", () => {
  lenis.resize();
  AOS.refresh();
});

$(document).ready(function () {
  // ===============================
  // 初始化AOS套件
  // ===============================
  AOS.init();

  // ===============================
  // Swiper 輪播圖套件 左右滑塊區域
  // ===============================
  /* Swiper 設定開始*/
  // var sec2ThumbSwiper = new Swiper(".sec2ThumbSwiper", {
  //   spaceBetween: 0,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });

  // const sec3Swiper = new Swiper(".sec3Swiper", {
  //   modules: [Navigation, Pagination, Autoplay],

  //   slidesPerView: "auto",
  //   spaceBetween: 0,
  //   loop: true,
  //   autoplay: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  // const sec4Swiper = new Swiper(".sec4Swiper", {
  //   modules: [Navigation, Pagination, Autoplay],

  //   slidesPerView: "auto",
  //   spaceBetween: 0,
  //   loop: true,
  //   autoplay: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  /* Swiper 設定結束*/

  // ===============================
  // 表單連結
  // ===============================
  // const checkBox = document.getElementById("invalidCheck");
  // const submitBtn = document.getElementById("submit");

  // submitBtn.addEventListener("click", function (event) {
  //   // 檢查勾選框是否被勾選
  //   if (!checkBox.checked) {
  //     // 如果勾選框沒有被勾選，顯示提示訊息
  //     alert("請勾選同意條款後再提交表單！");
  //     // 取消提交動作
  //     event.preventDefault();
  //   } else {
  //     // 防止AJAX觸發表單提交
  //     var username = $("#username").val() || "未填寫";
  //     var phone = $("#phone").val() || "未填寫";
  //     var contactTime = $("#contactTime").val() || "未填寫";
  //     var product = $("#product").val() || "未填寫";
  //     var msg = $("#msg").val() || "未填寫";

  //     // 姓名驗證（只允許字母和空格）
  //     // var usernameRegex = /^[a-zA-Z\u4e00-\u9fa5]{1,6}$/;
  //     // if (username == "未填寫" || !usernameRegex.test(username)) {
  //     if (username == "未填寫") {
  //       $("#username").focus();
  //       alert("請填寫姓名");
  //       return false;
  //     }

  //     // 電話驗證（有效的 10 位數字）
  //     // var phoneRegex = /^0\d{9}$/;
  //     // if (phone == "未填寫" || !phoneRegex.test(phone)) {
  //     if (phone == "未填寫") {
  //       $("#phone").focus();
  //       alert("請填寫有效的電話號碼");
  //       return false;
  //     }

  //     // 方便聯絡時段驗證
  //     if (contactTime == "未填寫") {
  //       $("#contactTime").focus();
  //       alert("請選擇方便聯絡時段");
  //       return false;
  //     }

  //     // 了解產品驗證
  //     if (product == "未填寫") {
  //       $("#product").focus();
  //       alert("請選擇購屋需求");
  //       return false;
  //     }

  //     // 如果必填項目都填寫了，才觸發AJAX
  //     var data = {
  //       "entry.2126348613": username,
  //       "entry.479019153": phone,
  //       "entry.231631390": contactTime,
  //       "entry.399790567": product,
  //       "entry.169184883": msg,
  //     };

  //     // 使用AJAX發送表單資料
  //     $.ajax({
  //       type: "POST",
  //       url: "https://docs.google.com/forms/d/e/1FAIpQLSdm0MlshrL8_sohCn6_hAP4WxZa4Ct41J4FdHNbG3WP_gAdiQ/formResponse", //填寫google表單連結
  //       data: data,
  //       complete: function () {
  //         alert("已經成功送出表單，我們會盡快請專員與您聯繫，感謝您的填寫！");
  //         // location.href = "index.php";
  //         location.href = "index.html";
  //       },
  //     });
  //   }
  // });

  // ===============================
  // jarallax套件 視差滾動 設定
  // ===============================
  // jarallax(document.querySelectorAll("#section3"), {
  //   speed: 0.5,
  // });

  // jarallax(document.querySelectorAll("#section4"), {
  //   speed: 0.8,
  // });

  // jarallax(document.querySelectorAll("#section-form"), {
  //   speed: 0.5,
  // });

  // ===============================
  // 置底小圖示navbar設定
  // ===============================

  // // 獲取 header 元素
  // let header = document.getElementById("header");

  // // 記錄上一次的滾動位置
  // let lastScrollTop = 0;

  // // 當頁面滾動時觸發
  // window.addEventListener("scroll", function () {
  //   let currentScroll =
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   // 判斷滾動方向
  //   if (currentScroll > lastScrollTop) {
  //     // 向下滾動，隱藏 header
  //     header.style.bottom = "0"; // 根據 header 的高度進行調整
  //   } else {
  //     // 向上滾動，顯示 header
  //     header.style.bottom = "-100px"; // 顯示 header
  //   }

  //   // 更新 lastScrollTop 為當前的滾動位置
  //   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止滾動過度
  // });

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
});

// gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(
//   ".sec3-parallax-bk",
//   {
//     yPercent: -20,
//   },
//   {
//     yPercent: 0,
//     scrollTrigger: {
//       trigger: "#section3",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//     },
//   },
// );
