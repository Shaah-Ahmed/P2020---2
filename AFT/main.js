// Top wing

anime({
  targets: ".top",
  translateX: anime.stagger(10, { grid: [14, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [14, 5], from: "center", axis: "y" }),
  rotateZ: anime.stagger([0, 20], {
    grid: [14, 5],
    from: "center",
    axis: "x",
  }),
  delay: anime.stagger(1000, { grid: [14, 5], from: "first" }),
  easing: "easeInOutCubic",
  loop: true,
  direction: "alternate",
});

anime({
  targets: ".below",
  translateX: anime.stagger(-10, { grid: [14, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(-10, { grid: [14, 5], from: "center", axis: "y" }),
  rotateZ: anime.stagger([0, 20], {
    grid: [14, 5],
    from: "center",
    axis: "x",
  }),
  delay: anime.stagger(1000, { grid: [14, 5], from: "last" }),
  easing: "easeInOutCubic",
  loop: true,
  direction: "alternate",
});

// Wave

anime({
  targets: "#wave",
  d: [
    {
      value: [
        "M2 8.77926C26.3623 31.046 61.7004 -6.7498 86.8018 8.77926C111.903 24.3083 145.81 -12.4222 156 8.77926",
      ],
    },
    {
      value: [
        "M2 8.77926C26.3623 31.046 93.8987 -6.7498 119 8.77926C144.101 24.3083 145.81 -12.4222 156 8.77926",
      ],
    },
    {
      value:
        "M2 15.7792C26.3623 38.046 109.16 -19.1858 131.5 10.5C153.84 40.1858 143.21 2.61841 156 10.5",
    },
    {
      value:
        "M2 16.0272C26.3623 38.294 91.6597 -18.9378 114 10.748C136.34 40.4337 143.21 2.86638 156 10.748",
    },
    {
      value:
        "M2 16.2752C26.3623 38.5419 57.6597 -18.6899 80 10.9959C102.34 40.6817 143.21 3.11435 156 10.9959",
    },
    {
      value:
        "M2 16.5232C26.3623 38.7899 25.6597 -18.4419 48 11.2439C70.3403 40.9297 143.21 3.36233 156 11.2439",
    },
    {
      value:
        "M2 15.7712C26.3623 38.0379 9.6597 -19.1939 32 10.4919C54.3403 40.1777 143.21 2.61032 156 10.4919",
    },
    {
      value:
        "M2 16.0191C26.3623 38.2859 43.6597 -18.9459 66 10.7399C88.3403 40.4257 143.21 2.85831 156 10.7399",
    },
    {
      value:
        "M2 16.2671C26.3623 38.5339 53.6597 -18.6979 76 10.9879C98.3403 40.6737 143.21 3.10629 156 10.9879",
    },
    {
      value: [
        "M2 8.77926C26.3623 31.046 61.7004 -6.7498 86.8018 8.77926C111.903 24.3083 145.81 -12.4222 156 8.77926",
      ],
    },
  ],
  easing: "linear",
  duration: 6000,
  loop: true,
  direction: "reverse",
});

anime({
  targets: ".container",
  translateY: -15,
  duration: 1500,
  loop: true,
  easing: "easeInOutQuad",
  direction: "alternate",
});

anime({
  targets: ".el",

  rotateZ: anime.stagger([0, 180], {
    grid: [3, 3],
    from: "center",
    axis: "x",
  }),

  duration: 6000,
  loop: true,
  easing: "easeInOutQuad",
  direction: "alternate",
});
