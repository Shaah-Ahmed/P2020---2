var ema = anime.timeline({
  duration: 800,
  easing: "easeInOutQuad",
  loop: true,
  direction: "alternate",
});

ema.add({
  targets: ".box",
  translateX: anime.stagger(50, { grid: [3, 3], from: "center", axis: "x" }),
  translateY: anime.stagger(50, { grid: [3, 3], from: "center", axis: "y" }),
  rotateZ: anime.stagger([0, 90], { grid: [3, 3], from: "center", axis: "y" }),
  scale: 1.5,
  backgroundColor: "black",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutExpo",
  delay: anime.stagger(50, {
    from: "center",
    direction: "reverse",
  }),
});

ema.add({
  targets: ".box",
  translateX: anime.stagger(100, { grid: [3, 3], from: "center", axis: "x" }),
  translateY: anime.stagger(100, { grid: [3, 3], from: "center", axis: "y" }),
  rotateZ: anime.stagger([0, 90], { grid: [3, 3], from: "center", axis: "y" }),
  easing: "easeInOutQuad",
  // delay: anime.stagger(20, {
  //   from: "center",
  //   direction: "reverse",
  // }),
});
