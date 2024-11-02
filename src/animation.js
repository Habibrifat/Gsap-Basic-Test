// gsap animation

const tl = gsap.timeline({ ease: "easeOut" });

tl.fromTo(
  ".box",
  { width: "100%", opacity: 0.75 },
  { width: "5%", opacity: 1, duration: 1.5, delay: 0.5 }
);

tl.fromTo(
  ".box1",
  { width: "0%" },
  { width: "100%", opacity: 1, duration: 1, delay: 1.2 },
  "<"
);

tl.fromTo(
  ".hero-content",
  { opacity: 0, y: -200 },
  { y: 0, opacity: 1, duration: 1 }
);

tl.fromTo(
  ".hero-img",
  { opacity: 0, xPercent: 40 },
  { opacity: 1, xPercent: 0, duration: 2 },
  "-=1"
);
tl.fromTo(
  ".variations li",
  { y: "100%" },
  { y: "0%", stagger: 0.7, duration: 1 },
  "-=2"
);

tl.fromTo("header", { y: "-100%" }, { y: "0%", duration: 1 }, "-=1.5");

tl.fromTo(
  ".cart",
  { y: "-100%", rotation: -180 },
  { y: "0%", rotation: 360, duration: 1 },
  "-=1.5"
);

// jQuery
(function ($) {
  // console.log("Hello Jquery");

  colorData = {
    apple: {
      src: "./image/apple.jpg",
      bgColor: "#222",
    },
    blueberry: {
      src: "./image/blueberry.jpg",
      bgColor: "#00008B",
    },
    pomegranate: {
      src: "./image/pomegranate.jpg",
      bgColor: "#E50000",
    },
    lime: {
      src: "./image/lime.jpg",
      bgColor: "#339933",
    },
    tangerine: {
      src: "./image/tangerine.jpg",
      bgColor: "#F58220",
    },
  };

  $("body").on("click", ".color", function () {
    const colorValue = $(this).val();
    const colorInfo = colorData[colorValue];

    console.log(colorInfo);

    if (colorInfo) {
      $(".phone-img").attr("src", colorInfo.src);
      $(".color-value").text(colorValue).css("color", colorInfo.bgColor);
      $(".btn").css({
        backgroundColor: colorInfo.bgColor,
      });
      $(".logo").css("color", colorInfo.bgColor);
    }

    // Apply animation for specific colors if needed
    if (colorInfo.bgColor) {
      tl.fromTo(
        ".box1",
        {
          x: "-50%",
        },
        {
          x: "0%",
          opacity: 0.1,
          clipPath: "circle(50% at 50% 50%)",
          backgroundColor: colorInfo.bgColor,
          duration: 1.5,
          ease: "ease-in",
        }
      );
      tl.fromTo(
        ".box",
        {
          y: "-100%",
        },
        {
          y: "0%",
          backgroundColor: colorInfo.bgColor,
          duration: 2,
          opacity: 0.4,
        },
        "-=1.5"
      );
    }
  });
})(jQuery);
