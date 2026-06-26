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

// 引入 WOW.js
import "animate.css";
import WOW from "wow.js";

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

  // --------------------------------------------------
  // GSAP sec1 背景影片縮放
  // --------------------------------------------------

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
      let startHeight = isMobile ? "70%" : "80%";
      let startTop = isMobile ? "15%" : "10%";

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
          height: "100%",
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

  // --------------------------------------------------
  // GSAP sec1 背景漸層色漸變
  // --------------------------------------------------

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

  // --------------------------------------------------
  // GSAP sec1 卡片動畫
  // --------------------------------------------------

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

  // ===============================
  // 監聽手機網址列/導覽列收合造成的可視範圍變化
  // 強制 ScrollTrigger 重新測量 pin 高度，並同步告知 Lenis 文件總高度也變了
  // ===============================
  // if (window.visualViewport) {
  //   let vvHeight = window.visualViewport.height;
  //   let resizeTimer;

  //   window.visualViewport.addEventListener("resize", () => {
  //     clearTimeout(resizeTimer);
  //     resizeTimer = setTimeout(() => {
  //       const newHeight = window.visualViewport.height;
  //       if (newHeight !== vvHeight) {
  //         vvHeight = newHeight;
  //         ScrollTrigger.refresh(); // 1. 先讓 GSAP 依新的 dvh 重新量 pin 的高度
  //         lenis.resize(); // 2. 再讓 Lenis 重新量一次新的文件總高度，同步捲動範圍
  //       }
  //     }, 150);
  //   });
  // }

  // --------------------------------------------------
  // GSAP sec3 文字逐字進出動畫
  // --------------------------------------------------

  // const root = document.querySelector('.section3')
  const sentences = document.querySelectorAll(" .sentence");

  const pinHeight = document.querySelector(".section3 .pin-height");
  const sec2Container = document.querySelector(".section3 .sec-container");
  const sec3Bkimg = document.querySelector("#sec3-bkimg");

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

  // --------------------------------------------------
  // GSAP sec3 卡片圖片視差滾動
  // --------------------------------------------------
  const sec3Imgs = document.querySelectorAll(".sec3-img");

  sec3Imgs.forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -15 },
      {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement, // 用外層容器當 trigger，避免被裁切影響判定範圍
          start: "top bottom", // 容器頂部碰到 viewport 底部時開始
          end: "bottom top", // 容器底部離開 viewport 頂部時結束
          scrub: true,
        },
      },
    );
  });

  // --------------------------------------------------
  // GSAP sec3 背景圖視差滾動
  // --------------------------------------------------
  gsap.fromTo(
    sec3Bkimg,
    { yPercent: -10 },
    {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: pinHeight,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    },
  );
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
  wheelMultiplier: 1.8,
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

// 跳轉表單按鈕點擊 → 交給 Lenis 處理平滑捲動
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute("href");
  const targetEl = document.querySelector(targetId);
  if (!targetEl) return;

  e.preventDefault();
  lenis.scrollTo(targetEl, {
    offset: 0,
    duration: 1.2, // 跟你 Lenis 設定的 duration 對齊
  });
});

// ===============================
// 用 JS 鎖定可視高度，取代 dvh/lvh（部分 webview 如 LINE 內建瀏覽器支援不完整）
// 高度只會往「變大」的方向更新，網址列重新跳出來時刻意不縮回去，避免版面反覆抖動
// ===============================
ScrollTrigger.config({ ignoreMobileResize: true }); // 關掉 GSAP 自己對 resize 的自動 refresh，改由下面手動控制

let lastWidth = window.innerWidth;
let maxAppHeight = window.innerHeight;
let appHeightTransitionTimer = null;

function updateAppHeight() {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  // 寬度變了 = 真正的旋轉螢幕或視窗縮放，直接用目前高度重新校正
  if (currentWidth !== lastWidth) {
    lastWidth = currentWidth;
    maxAppHeight = currentHeight;
    document.documentElement.style.setProperty(
      "--app-height",
      `${maxAppHeight}px`,
    );
    ScrollTrigger.refresh();
    lenis.resize();
    return;
  }

  // 寬度沒變、只是高度變大 = 網址列收合，沿用「只增不減」避免版面抖動
  if (currentHeight > maxAppHeight) {
    maxAppHeight = currentHeight;
    document.documentElement.style.setProperty(
      "--app-height",
      `${maxAppHeight}px`,
    );
    removeJarallaxDeviceHelper();

    // 等 h-app-smooth 的 0.6s transition 跑完才重新測量,否則會量到過渡中的中間值
    clearTimeout(appHeightTransitionTimer);
    appHeightTransitionTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.resize();
      window.dispatchEvent(new Event("resize"));
    }, 650); // 比 CSS 的 0.6s 多留一點緩衝

    ScrollTrigger.refresh();
    lenis.resize();
    window.dispatchEvent(new Event("resize"));
  }
}

// 部分手機瀏覽器在網址列收合時，resize 事件會延遲或不準
// 改成使用者開始滑動時，主動短暫輪詢偵測高度變化，比等事件通知更可靠
let appHeightPollTimer = null;

function startAppHeightPolling() {
  if (appHeightPollTimer) return;

  let pollCount = 0;
  appHeightPollTimer = setInterval(() => {
    updateAppHeight();
    pollCount++;
    if (pollCount > 30) {
      // 輪詢約 3 秒後自動停止，避免持續耗效能
      clearInterval(appHeightPollTimer);
      appHeightPollTimer = null;
    }
  }, 100);
}

window.addEventListener("scroll", startAppHeightPolling, { passive: true });
window.addEventListener("touchmove", startAppHeightPolling, { passive: true });

// jarallax 在手機上會自己生一個隱藏的 100vh 測量用 div，
// 但這個 div 一樣有 LINE 內建瀏覽器的 vh 過期問題，
// 移除它後 jarallax 會自動退回去用 window.innerHeight（我們已經保證它是正確的）
function removeJarallaxDeviceHelper() {
  document.querySelectorAll("div").forEach((div) => {
    if (
      div.style.position === "fixed" &&
      div.style.top === "-9999px" &&
      div.style.width === "0px"
    ) {
      div.remove();
    }
  });
}
removeJarallaxDeviceHelper();

// --------------------------------------------------
// 婚禮倒數天數計算
// --------------------------------------------------

function updateWeddingCountdown() {
  const countdownEl = document.getElementById("countdownDays");
  if (!countdownEl) return;

  // 婚禮日期（年, 月-1, 日）月份是 0-based，10月要寫成 9
  const weddingDate = new Date(2026, 9, 25);

  // 取得今天，並把時間部分清零，避免因為「現在幾點」導致算出誤差
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  weddingDate.setHours(0, 0, 0, 0);

  // 計算相差的毫秒數，再換算成天數
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.round((weddingDate - today) / msPerDay);

  countdownEl.textContent = diffDays > 0 ? diffDays : 0;
}

updateWeddingCountdown();

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

  // 出席與否 - 控制後續欄位是否顯示/必填

  const attendSelect = document.getElementById("attend");
  const attendDetails = document.getElementById("attendDetails");

  function updateAttendDetails() {
    const isAttending = attendSelect.value === "YES！我會出席";

    if (isAttending) {
      attendDetails.classList.remove("grid-rows-[0fr]", "opacity-0");
      attendDetails.classList.add("grid-rows-[1fr]", "opacity-100");
    } else {
      attendDetails.classList.remove("grid-rows-[1fr]", "opacity-100");
      attendDetails.classList.add("grid-rows-[0fr]", "opacity-0");
    }

    // 不出席時，把裡面的欄位都清空、停用，避免殘留資料被誤送出
    attendDetails.querySelectorAll("select, input").forEach((el) => {
      el.disabled = !isAttending;
      if (!isAttending) {
        if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      }
    });

    // 等高度動畫跑完、版面穩定後，重新告知 ScrollTrigger 和 Lenis 目前的真實高度
    attendDetails.addEventListener(
      "transitionend",
      () => {
        ScrollTrigger.refresh();
        lenis.resize();
      },
      { once: true },
    );
  }

  if (attendSelect && attendDetails) {
    attendSelect.addEventListener("change", updateAttendDetails);
    updateAttendDetails(); // 頁面載入時先執行一次，預設是收合的
  }

  // ===============================

  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", function (event) {
    var username = $("#username").val() || "未填寫";
    var email = $("#email").val() || "未填寫";
    var attend = $("#attend").val() || "未填寫";
    var msg = $("#msg").val() || "未填寫";

    if (username == "未填寫") {
      $("#username").focus();
      alert("請填寫姓名");
      return false;
    }

    var emailRegex =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (email == "未填寫" || !emailRegex.test(email)) {
      $("#email").focus();
      alert("請填寫有效的信箱");
      return false;
    }

    if (attend == "未填寫") {
      $("#attend").focus();
      alert("請選擇是否可以參加我們的婚禮");
      return false;
    }

    const isAttending = attend === "YES！我會出席";

    var ceremony = "不適用";
    var people = "不適用";
    var vegan = "不適用";
    var child = "不適用";
    var invitation = "不適用";

    // ===============================
    // 取得欄位真實送出值（若選「其他」，改抓 other input 的值）
    // ===============================
    function getFieldValue(selectId, otherInputId) {
      const selectEl = document.getElementById(selectId);
      const otherEl = document.getElementById(otherInputId);

      if (!selectEl) return "未填寫";

      if (selectEl.value === "__other__") {
        const otherVal = otherEl ? otherEl.value.trim() : "";
        return otherVal !== "" ? otherVal : "未填寫";
      }

      return selectEl.value || "未填寫";
    }

    // 只有出席的人才需要檢查這幾項
    if (isAttending) {
      ceremony = $("#ceremony").val() || "未填寫";
      people = getFieldValue("people", "people_other");
      vegan = getFieldValue("vegan", "vegan_other");
      child = getFieldValue("child", "child_other");
      invitation = getFieldValue("invitation", "invitation_other");

      if (ceremony == "未填寫") {
        $("#ceremony").focus();
        alert("請選擇是否參加證婚儀式");
        return false;
      }
      if (people == "未填寫") {
        $("#people").focus();
        alert("請選擇出席人數");
        return false;
      }
      if (vegan == "未填寫") {
        $("#vegan").focus();
        alert("請選擇是否需要素食餐點");
        return false;
      }
      if (child == "未填寫") {
        $("#child").focus();
        alert("請選擇是否需要兒童座椅");
        return false;
      }
      if (invitation == "未填寫") {
        $("#invitation").focus();
        alert("請選擇是否需要實體喜帖");
        return false;
      }
    }

    var data = {
      "entry.1216513580": username,
      "entry.618175432": email,
      "entry.1324538831": attend,
      "entry.524804797": ceremony,
      "entry.311049374": people,
      "entry.1593018763": vegan,
      "entry.2106988866": child,
      "entry.1970862893": invitation,
      "entry.2056938525": msg,
    };

    $.ajax({
      type: "POST",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSczyiadXQR6ISGD7MAC5z4UVu0KgN2IkvCbvQdNb7qR9gkkwQ/formResponse",
      data: data,
      complete: function () {
        alert("已經成功送出表單，感謝您的填寫！");
        location.href = "index.html";
      },
    });
  });

  // ===============================
  // jarallax套件 視差滾動 設定
  // ===============================
  jarallax(document.querySelectorAll("#section-form"), {
    speed: 0.5,
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
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // 判斷滾動方向
    if (currentScroll > lastScrollTop) {
      // 向下滾動，隱藏 header
      header.style.bottom = "-40px"; // 根據 header 的高度進行調整
      header.style.opacity = "0";
    } else {
      // 向上滾動，顯示 header
      header.style.bottom = "0px"; // 顯示 header
      header.style.opacity = "1";
    }

    // 更新 lastScrollTop 為當前的滾動位置
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止滾動過度
  });

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

const peopleSelect = document.getElementById("people");
const peopleOtherInput = document.getElementById("people_other");

if (peopleSelect && peopleOtherInput) {
  peopleSelect.addEventListener("change", () => {
    const showOther = peopleSelect.value === "__other__";
    peopleOtherInput.style.display = showOther ? "block" : "none";
    peopleOtherInput.required = showOther;
    if (!showOther) peopleOtherInput.value = "";
  });
}

const veganSelect = document.getElementById("vegan");
const veganOtherInput = document.getElementById("vegan_other");

if (veganSelect && veganOtherInput) {
  veganSelect.addEventListener("change", () => {
    const showOther = veganSelect.value === "__other__";
    veganOtherInput.style.display = showOther ? "block" : "none";
    veganOtherInput.required = showOther;
    if (!showOther) veganOtherInput.value = "";
  });
}

const childSelect = document.getElementById("child");
const childOtherInput = document.getElementById("child_other");

if (childSelect && childOtherInput) {
  childSelect.addEventListener("change", () => {
    const showOther = childSelect.value === "__other__";
    childOtherInput.style.display = showOther ? "block" : "none";
    childOtherInput.required = showOther;
    if (!showOther) childOtherInput.value = "";
  });
}

const invitationSelect = document.getElementById("invitation");
const invitationOtherInput = document.getElementById("invitation_other");

if (invitationSelect && invitationOtherInput) {
  invitationSelect.addEventListener("change", () => {
    const showOther = invitationSelect.value === "__other__";
    invitationOtherInput.style.display = showOther ? "block" : "none";
    invitationOtherInput.required = showOther;
    if (!showOther) invitationOtherInput.value = "";
  });
}

// ===============================
// 初始化 WOW
// ===============================
const wow = new WOW({
  boxClass: "wow", // 需要套用動畫的類別名稱 (預設是 'wow')
  animateClass: "animate__animated", // Animate.css v4+ 的核心類別名稱 (關鍵！)
  offset: 0, // 距離瀏覽器底部多少像素時觸發動畫 (預設是 0)
  mobile: true, // 是否在手機版裝置上觸發動畫 (預設是 true)
  live: true, // 是否異步檢查新加入的 DOM 元素 (預設是 true)
});

wow.init();
