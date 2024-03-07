var _0x3841ba = _0x4e9b;
(function (_0x1e2a1a, _0x5a3d34) {
  var _0x2d0bdd = _0x4e9b,
    _0x4e516f = _0x1e2a1a();
  while (!![]) {
    try {
      var _0x21b13a =
        -parseInt(_0x2d0bdd(0x1ba)) / 0x1 +
        -parseInt(_0x2d0bdd(0x1b1)) / 0x2 +
        -parseInt(_0x2d0bdd(0x18a)) / 0x3 +
        -parseInt(_0x2d0bdd(0x19d)) / 0x4 +
        (parseInt(_0x2d0bdd(0x1c4)) / 0x5) *
          (-parseInt(_0x2d0bdd(0x1b5)) / 0x6) +
        (parseInt(_0x2d0bdd(0x194)) / 0x7) *
          (-parseInt(_0x2d0bdd(0x1b3)) / 0x8) +
        parseInt(_0x2d0bdd(0x196)) / 0x9;
      if (_0x21b13a === _0x5a3d34) break;
      else _0x4e516f["push"](_0x4e516f["shift"]());
    } catch (_0x139a2f) {
      _0x4e516f["push"](_0x4e516f["shift"]());
    }
  }
})(_0x58f9, 0x638d9);
let factor,
  red,
  green,
  blue,
  I = 0x0,
  datas = 0x0,
  k,
  h,
  f_2,
  a,
  lambda,
  appertureLength,
  appertureWidth = 0x0,
  X,
  Y = 0x0,
  absB,
  absH = 0x0,
  diffractionSimulator = null,
  plotting = null,
  lambdaRange = document["getElementById"](_0x3841ba(0x18d)),
  laserToApperture = document[_0x3841ba(0x192)](_0x3841ba(0x193))[0x0],
  toObservationPlane = document[_0x3841ba(0x1a2)](".to-observation-plane"),
  toObservationPlane1 = document[_0x3841ba(0x1a2)](_0x3841ba(0x1a3)),
  toObservationPlane2 = document[_0x3841ba(0x1a2)](_0x3841ba(0x17f)),
  toObservationPlane3 = document[_0x3841ba(0x1a2)](_0x3841ba(0x1c2)),
  toObservationPlane4 = document["querySelector"](_0x3841ba(0x1af));
var container = document[_0x3841ba(0x192)](_0x3841ba(0x189))[0x0];
let loader = document[_0x3841ba(0x192)](_0x3841ba(0x197))[0x0],
  logo = document[_0x3841ba(0x18f)](_0x3841ba(0x180)),
  colorProgress = document["getElementsByClassName"]("color")[0x0];
function loadingProgress() {
  var _0x47fff2 = _0x3841ba;
  (document[_0x47fff2(0x192)](_0x47fff2(0x189))[0x0][_0x47fff2(0x19b)][
    _0x47fff2(0x1aa)
  ] = _0x47fff2(0x18b)),
    (document[_0x47fff2(0x1ad)](_0x47fff2(0x1b6))[0x0][_0x47fff2(0x19b)][
      _0x47fff2(0x1aa)
    ] = "none"),
    (document[_0x47fff2(0x190)][_0x47fff2(0x19b)][_0x47fff2(0x18e)] = "21em"),
    (document[_0x47fff2(0x190)][_0x47fff2(0x19b)][_0x47fff2(0x1c0)] =
      _0x47fff2(0x1a4)),
    (document["body"]["style"][_0x47fff2(0x19a)] = _0x47fff2(0x1bc)),
    (document[_0x47fff2(0x190)][_0x47fff2(0x19b)][_0x47fff2(0x1b4)] =
      _0x47fff2(0x19c));
}
setTimeout(loadingOff, 0xfa0);
function loadingOff() {
  var _0x458f45 = _0x3841ba;
  console[_0x458f45(0x182)](_0x458f45(0x1bd)),
    (loader[_0x458f45(0x19b)][_0x458f45(0x1aa)] = _0x458f45(0x18b)),
    (logo[_0x458f45(0x19b)][_0x458f45(0x1aa)] = _0x458f45(0x18b)),
    (document["body"][_0x458f45(0x19b)]["backgroundColor"] = _0x458f45(0x1c3)),
    (document["body"][_0x458f45(0x19b)]["marginLeft"] = "0"),
    (document[_0x458f45(0x190)][_0x458f45(0x19b)][_0x458f45(0x18e)] = "0"),
    (document[_0x458f45(0x190)][_0x458f45(0x19b)][_0x458f45(0x1c0)] = "0"),
    (document[_0x458f45(0x192)](_0x458f45(0x189))[0x0][_0x458f45(0x19b)][
      _0x458f45(0x1aa)
    ] = _0x458f45(0x181)),
    (document[_0x458f45(0x1ad)](_0x458f45(0x1b6))[0x0]["style"][
      _0x458f45(0x1aa)
    ] = _0x458f45(0x181)),
    (document[_0x458f45(0x1ad)](_0x458f45(0x1b6))[0x0]["style"][
      "backgroundColor"
    ] = "#000");
}
function myRange1() {
  var _0x17da40 = _0x3841ba;
  return (
    (document["getElementById"](_0x17da40(0x1be))[_0x17da40(0x1b9)] =
      _0x17da40(0x1cc) +
      document[_0x17da40(0x18f)](_0x17da40(0x1a7))[_0x17da40(0x187)] +
      "nm"),
    (lambda = document[_0x17da40(0x18f)]("range1")["value"] * 1e-9),
    lambda
  );
}
function myRange2() {
  var _0x37765a = _0x3841ba;
  return (
    (b =
      document[_0x37765a(0x18f)](_0x37765a(0x1b2))[_0x37765a(0x187)] * 0.00001),
    (appertureLength = b * 0x3e8),
    (document[_0x37765a(0x18f)](_0x37765a(0x185))[_0x37765a(0x1b9)] =
      _0x37765a(0x1a5) + appertureLength[_0x37765a(0x1a9)](0x2) + "mm"),
    (b, appertureLength)
  );
}
function myRange3() {
  var _0x9a7cc = _0x3841ba;
  return (
    (h = document["getElementById"](_0x9a7cc(0x1cb))["value"] * 0.00001),
    (appertureWidth = h * 0x3e8),
    (document[_0x9a7cc(0x18f)](_0x9a7cc(0x1bf))[_0x9a7cc(0x1b9)] =
      _0x9a7cc(0x1a8) + appertureWidth[_0x9a7cc(0x1a9)](0x2) + "mm"),
    (h, appertureWidth)
  );
}
function myRange4() {
  var _0x2534d9 = _0x3841ba;
  return (
    (document[_0x2534d9(0x18f)]("range4-value")["innerHTML"] =
      _0x2534d9(0x1b7) +
      document[_0x2534d9(0x18f)](_0x2534d9(0x19e))[_0x2534d9(0x187)]),
    (d = document[_0x2534d9(0x18f)]("range4")["value"]),
    d
  );
}
function _0x58f9() {
  var _0x254f9d = [
    "60414KwRsRy",
    "footer",
    "d:apperture\x20to\x20observation\x20plane(m)\x20=\x20",
    "heatmap",
    "innerHTML",
    "561172zbmtux",
    "addEventListener",
    "31%",
    "euadjasjd",
    "range1-value",
    "range3-value",
    "marginBottom",
    "y-I\x20data",
    ".to-observation-plane3",
    "white",
    "10MgRCYM",
    "diffraction-chart-rotate",
    "diffraction\x20Plot",
    "rgb(0,0,0)",
    "rectangular\x20apperture",
    "range5",
    "rgb(255,255,255)",
    "range3",
    "λ\x20=\x20",
    "sin",
    ".to-observation-plane2",
    "logo",
    "contents",
    "log",
    "react",
    "round",
    "range2-value",
    "abs",
    "value",
    "lines",
    "container",
    "2439717LKyTEh",
    "none",
    "best",
    "range1-container",
    "marginTop",
    "getElementById",
    "body",
    "input",
    "getElementsByClassName",
    "laser-to-apperture",
    "35JOWqFv",
    "plotDiv",
    "31593042hmTPgM",
    "progress",
    "range5-value",
    "x,y",
    "marginLeft",
    "style",
    "black",
    "2560536oOBLTB",
    "range4",
    "blue",
    "pow",
    "rgb(",
    "querySelector",
    ".to-observation-plane1",
    "18%",
    "apperture\x20length\x20=\x20",
    "setProperty",
    "range1",
    "apperture\x20width\x20=\x20",
    "toFixed",
    "display",
    "apperture-chart-rotate",
    "rgb(0,\x200,\x200)",
    "getElementsByTagName",
    "diffraction-chart",
    ".to-observation-plane4",
    "apperture-chart",
    "536032UntCvn",
    "range2",
    "1279792CBJRLS",
    "backgroundColor",
  ];
  _0x58f9 = function () {
    return _0x254f9d;
  };
  return _0x58f9();
}
function _0x4e9b(_0x5e1bd7, _0x45beb2) {
  var _0x58f97a = _0x58f9();
  return (
    (_0x4e9b = function (_0x4e9b59, _0x29b0b9) {
      _0x4e9b59 = _0x4e9b59 - 0x17f;
      var _0x1894b3 = _0x58f97a[_0x4e9b59];
      return _0x1894b3;
    }),
    _0x4e9b(_0x5e1bd7, _0x45beb2)
  );
}
function myRange5() {
  var _0x2c0389 = _0x3841ba;
  return (
    (a = document[_0x2c0389(0x18f)](_0x2c0389(0x1c9))["value"] * 0.01),
    (document[_0x2c0389(0x18f)](_0x2c0389(0x198))[_0x2c0389(0x1b9)] =
      "x\x20&\x20y\x20axis\x20in\x20pattern\x20=\x20" +
      a["toFixed"](0x2) +
      "m"),
    a
  );
}
document[_0x3841ba(0x1bb)](
  "load",
  (myRange1(),
  myRange2(),
  myRange3(),
  myRange4(),
  myRange5(),
  calculate(),
  loadingProgress())
),
  document["addEventListener"](_0x3841ba(0x191), calculate);
function calculate() {
  var _0x617ed3 = _0x3841ba;
  (k = (0x2 * Math["PI"]) / lambda),
    nmToRGB(lambda * 0x3b9aca00),
    (lambdaRange["style"][_0x617ed3(0x1b4)] = RGB),
    (laserToApperture[_0x617ed3(0x19b)][_0x617ed3(0x1b4)] = RGB),
    (toObservationPlane[_0x617ed3(0x19b)][_0x617ed3(0x1b4)] = RGB),
    (toObservationPlane1[_0x617ed3(0x19b)]["backgroundColor"] = RGB),
    (toObservationPlane2[_0x617ed3(0x19b)][_0x617ed3(0x1b4)] = RGB),
    (toObservationPlane3[_0x617ed3(0x19b)][_0x617ed3(0x1b4)] = RGB),
    (toObservationPlane4[_0x617ed3(0x19b)][_0x617ed3(0x1b4)] = RGB),
    toObservationPlane3[_0x617ed3(0x19b)][_0x617ed3(0x1a6)]("--RGB", RGB),
    toObservationPlane4[_0x617ed3(0x19b)][_0x617ed3(0x1a6)]("--RGB", RGB);
  var _0x4a84f4 = 0x191,
    _0x331bde = new Array(_0x4a84f4),
    _0x35898d = new Array(_0x4a84f4),
    _0xbe09f3 = new Array(_0x4a84f4),
    _0x3da372,
    _0x23ba27;
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    (_0x331bde[_0x3da372] = _0x35898d[_0x3da372] =
      -a / 0x2 + ((a / 0x2) * 0x2 * _0x3da372) / _0x4a84f4),
      (_0xbe09f3[_0x3da372] = new Array(_0x4a84f4));
  }
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    for (_0x23ba27 = 0x0; _0x23ba27 < _0x4a84f4; _0x23ba27++) {
      (X = (k * b * _0x331bde[_0x3da372]) / (0x2 * d)),
        (Y = (k * h * _0x35898d[_0x23ba27]) / (0x2 * d)),
        (_0xbe09f3[_0x3da372][_0x23ba27] =
          (Math[_0x617ed3(0x1cd)](X) / X) ** 0x2 *
          (Math[_0x617ed3(0x1cd)](Y) / Y) ** 0x2);
    }
  }
  var _0x4dfbaa = [
      {
        z: _0xbe09f3,
        x: _0x331bde,
        y: _0x35898d,
        zsmooth: _0x617ed3(0x18c),
        type: _0x617ed3(0x1b8),
        colorscale: [
          [0x0, "rgb(0,0,0)"],
          [0.005, RGB],
          [0x1, RGB],
        ],
        showscale: ![],
        hoverinfo: _0x617ed3(0x18b),
        hoverongaps: ![],
      },
    ],
    _0x312599 = {
      autosize: ![],
      margin: { b: 0x0, r: 0x0, l: 0x28, t: 0x28 },
      width: 0xe6,
      height: 0xe6,
      title: {
        text: "fraunhofer\x20diffraction",
        font: { color: _0x617ed3(0x19f), size: "18" },
      },
      xaxis: { range: [-a / 0x2, a / 0x2], fixedrange: !![], visible: ![] },
      yaxis: { range: [-a / 0x2, a / 0x2], fixedrange: !![], visible: ![] },
    };
  Plotly["react"](_0x617ed3(0x1ae), _0x4dfbaa, _0x312599, { showgrid: ![] });
  var _0x4a84f4 = 0x10f,
    _0x331bde = new Array(_0x4a84f4),
    _0x35898d = new Array(_0x4a84f4),
    _0xbe09f3 = new Array(_0x4a84f4),
    _0x3da372,
    _0x23ba27;
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    (_0x331bde[_0x3da372] = _0x35898d[_0x3da372] =
      -a / 0x2 + ((a / 0x2) * 0x2 * _0x3da372) / _0x4a84f4),
      (_0xbe09f3[_0x3da372] = new Array(_0x4a84f4));
  }
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    for (_0x23ba27 = 0x0; _0x23ba27 < _0x4a84f4; _0x23ba27++) {
      (X = (k * b * _0x331bde[_0x3da372]) / (0x2 * d)),
        (Y = (k * h * _0x35898d[_0x23ba27]) / (0x2 * d)),
        (_0xbe09f3[_0x3da372][_0x23ba27] =
          (Math[_0x617ed3(0x1cd)](X) / X) ** 0x2 *
          (Math[_0x617ed3(0x1cd)](Y) / Y) ** 0x2);
    }
  }
  var _0x4dfbaa = [
      {
        z: _0xbe09f3,
        x: _0x331bde,
        y: _0x35898d,
        zsmooth: _0x617ed3(0x18c),
        type: "heatmap",
        colorscale: [
          [0x0, _0x617ed3(0x1c7)],
          [0.01, RGB],
          [0x1, RGB],
        ],
        showscale: ![],
        hoverinfo: "none",
        hoverongaps: ![],
      },
    ],
    _0x312599 = {
      autosize: ![],
      margin: { b: 0x0, r: 0x0, t: 0x0, l: 0x0 },
      width: 0x32,
      height: 0x6e,
      xaxis: { range: [-a / 0x2, a / 0x2], fixedrange: !![], visible: ![] },
      yaxis: { range: [-a / 0x2, a / 0x2], fixedrange: !![], visible: ![] },
    };
  Plotly[_0x617ed3(0x183)](_0x617ed3(0x1c5), _0x4dfbaa, _0x312599, {
    showgrid: ![],
  });
  var _0x4a84f4 = 0xc9,
    _0x331bde = new Array(_0x4a84f4),
    _0x35898d = new Array(_0x4a84f4),
    _0xbe09f3 = new Array(_0x4a84f4),
    _0x3da372,
    _0x23ba27;
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    (_0x331bde[_0x3da372] = _0x35898d[_0x3da372] =
      -0x2 * a + (a * 0x2 * 0x2 * _0x3da372) / _0x4a84f4),
      (_0xbe09f3[_0x3da372] = new Array(_0x4a84f4));
  }
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    for (_0x23ba27 = 0x0; _0x23ba27 < _0x4a84f4; _0x23ba27++) {
      (X = Math["abs"](_0x331bde[_0x3da372]) / 0x64),
        (Y = Math[_0x617ed3(0x186)](_0x35898d[_0x23ba27]) / 0x64),
        (absB = Math[_0x617ed3(0x186)](appertureLength) / 0x64),
        (absH = Math[_0x617ed3(0x186)](appertureWidth) / 0x64),
        X <= absB && Y <= absH
          ? (_0xbe09f3[_0x3da372][_0x23ba27] = 0x1)
          : (_0xbe09f3[_0x3da372][_0x23ba27] = 0x0);
    }
  }
  var _0x3d9da4 = [
      {
        z: _0xbe09f3,
        x: _0x331bde,
        y: _0x35898d,
        zsmooth: _0x617ed3(0x18c),
        type: "heatmap",
        colorscale: [
          [0x0, _0x617ed3(0x1c7)],
          [0.005, _0x617ed3(0x1ca)],
          [0x1, _0x617ed3(0x1ca)],
        ],
        showscale: ![],
        hoverinfo: _0x617ed3(0x18b),
        hoverongaps: ![],
      },
    ],
    _0x5feee6 = {
      autosize: ![],
      margin: { b: 0x0, r: 0x0, l: 0x28, t: 0x28 },
      width: 0xe6,
      height: 0xe6,
      title: { text: _0x617ed3(0x1c8), font: { color: "blue", size: "18" } },
      xaxis: { range: [-0x2 * a, 0x2 * a], fixedrange: !![], visible: ![] },
      yaxis: { range: [-0x2 * a, 0x2 * a], fixedrange: !![], visible: ![] },
    };
  Plotly["react"](_0x617ed3(0x1b0), _0x3d9da4, _0x5feee6, { showgrid: ![] });
  var _0x4a84f4 = 0x97,
    _0x331bde = new Array(_0x4a84f4),
    _0x35898d = new Array(_0x4a84f4),
    _0xbe09f3 = new Array(_0x4a84f4),
    _0x3da372,
    _0x23ba27;
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    (_0x331bde[_0x3da372] = _0x35898d[_0x3da372] =
      -0x2 * a + (a * 0x2 * 0x2 * _0x3da372) / _0x4a84f4),
      (_0xbe09f3[_0x3da372] = new Array(_0x4a84f4));
  }
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    for (_0x23ba27 = 0x0; _0x23ba27 < _0x4a84f4; _0x23ba27++) {
      (X = Math[_0x617ed3(0x186)](_0x331bde[_0x3da372]) / 0x64),
        (Y = Math[_0x617ed3(0x186)](_0x35898d[_0x23ba27]) / 0x64),
        (absB = Math[_0x617ed3(0x186)](appertureLength) / 0x64),
        (absH = Math["abs"](appertureWidth) / 0x64),
        X <= absB && Y <= absH
          ? (_0xbe09f3[_0x3da372][_0x23ba27] = 0x1)
          : (_0xbe09f3[_0x3da372][_0x23ba27] = 0x0);
    }
  }
  var _0x3d9da4 = [
      {
        z: _0xbe09f3,
        x: _0x331bde,
        y: _0x35898d,
        zsmooth: _0x617ed3(0x18c),
        type: _0x617ed3(0x1b8),
        colorscale: [
          [0x0, _0x617ed3(0x1c7)],
          [0.0005, _0x617ed3(0x1ca)],
          [0x1, "rgb(255,255,255)"],
        ],
        showscale: ![],
        hoverinfo: _0x617ed3(0x18b),
        hoverongaps: ![],
      },
    ],
    _0x5feee6 = {
      autosize: ![],
      margin: { b: 0x0, r: 0x0, t: 0x0, l: 0x0 },
      width: 0x3c,
      height: 0x1e,
      xaxis: { range: [-0x2 * a, 0x2 * a], fixedrange: !![], visible: ![] },
      yaxis: { range: [-0x2 * a, 0x2 * a], fixedrange: !![], visible: ![] },
    };
  Plotly[_0x617ed3(0x183)](_0x617ed3(0x1ab), _0x3d9da4, _0x5feee6, {
    showgrid: ![],
  });
  var _0x4a84f4 = 0x258,
    _0x2fc57c = new Array(_0x4a84f4),
    _0x52b9db = new Array(_0x4a84f4),
    _0x5d5cc4 = new Array(_0x4a84f4);
  _0x3da372;
  for (var _0x3da372 = 0x0; _0x3da372 < _0x4a84f4; _0x3da372++) {
    (_0x2fc57c[_0x3da372] =
      -a / 0x2 + ((a / 0x2) * 0x2 * _0x3da372) / _0x4a84f4),
      (X1 = (k * b * _0x2fc57c[_0x3da372]) / (0x2 * d)),
      (Y1 = (k * h * _0x2fc57c[_0x3da372]) / (0x2 * d)),
      (_0x52b9db[_0x3da372] = (Math[_0x617ed3(0x1cd)](X1) / X1) ** 0x2),
      (_0x5d5cc4[_0x3da372] = (Math[_0x617ed3(0x1cd)](Y1) / Y1) ** 0x2);
  }
  var _0xc62339 = {
      x: _0x2fc57c,
      y: _0x52b9db,
      type: _0x617ed3(0x188),
      name: _0x617ed3(0x1c1),
      line: { color: _0x617ed3(0x1ac), width: 0x1 },
    },
    _0x4123ee = {
      x: _0x2fc57c,
      y: _0x5d5cc4,
      mode: _0x617ed3(0x188),
      name: "x-I\x20data",
    },
    _0x2a7127 = [_0xc62339, _0x4123ee],
    _0x322f75 = {
      autosize: ![],
      margin: { r: 0x28, t: 0x28, b: 0x28, l: 0x28 },
      width: 0x118,
      height: 0x118,
      title: {
        text: _0x617ed3(0x1c6),
        x: 0.2,
        font: { color: _0x617ed3(0x19f), size: "18" },
      },
      xaxis: { title: _0x617ed3(0x199), fixedrange: !![] },
      yaxis: { title: "I", fixedrange: !![] },
    };
  Plotly["react"](_0x617ed3(0x195), _0x2a7127, _0x322f75);
}
function nmToRGB(_0x5d81a1) {
  var _0x363a4c = _0x3841ba,
    _0x4de522 = 0.8,
    _0x2d18b5 = 0xff;
  if (_0x5d81a1 >= 0x17c && _0x5d81a1 < 0x1b8)
    (red = -(_0x5d81a1 - 0x1b8) / (0x1b8 - 0x17c)), (green = 0x0), (blue = 0x1);
  else {
    if (_0x5d81a1 >= 0x1b8 && _0x5d81a1 < 0x1ea)
      (red = 0x0),
        (green = (_0x5d81a1 - 0x1b8) / (0x1ea - 0x1b8)),
        (blue = 0x1);
    else {
      if (_0x5d81a1 >= 0x1ea && _0x5d81a1 < 0x1fe)
        (red = 0x0),
          (green = 0x1),
          (blue = -(_0x5d81a1 - 0x1fe) / (0x1fe - 0x1ea));
      else {
        if (_0x5d81a1 >= 0x1fe && _0x5d81a1 < 0x244)
          (red = (_0x5d81a1 - 0x1fe) / (0x244 - 0x1fe)),
            (green = 0x1),
            (blue = 0x0);
        else {
          if (_0x5d81a1 >= 0x244 && _0x5d81a1 < 0x285)
            (red = 0x1),
              (green = -(_0x5d81a1 - 0x285) / (0x285 - 0x244)),
              (blue = 0x0);
          else
            _0x5d81a1 >= 0x285 && _0x5d81a1 < 0x30d
              ? ((red = 0x1), (green = 0x0), (blue = 0x0))
              : ((red = 0x0), (green = 0x0), (blue = 0x0));
        }
      }
    }
  }
  if (_0x5d81a1 >= 0x17c && _0x5d81a1 < 0x1a4)
    factor = 0.3 + (0.7 * (_0x5d81a1 - 0x17c)) / (0x1a4 - 0x17c);
  else {
    if (_0x5d81a1 >= 0x1a4 && _0x5d81a1 < 0x2bd) factor = 0x1;
    else
      _0x5d81a1 >= 0x2bd && _0x5d81a1 < 0x30d
        ? (factor = 0.3 + (0.7 * (0x30c - _0x5d81a1)) / (0x30c - 0x2bc))
        : (factor = 0x0);
  }
  return (
    red !== 0x0 &&
      (red = Math[_0x363a4c(0x184)](
        _0x2d18b5 * Math["pow"](red * factor, _0x4de522)
      )),
    green !== 0x0 &&
      (green = Math[_0x363a4c(0x184)](
        _0x2d18b5 * Math[_0x363a4c(0x1a0)](green * factor, _0x4de522)
      )),
    blue !== 0x0 &&
      (blue = Math[_0x363a4c(0x184)](
        _0x2d18b5 * Math[_0x363a4c(0x1a0)](blue * factor, _0x4de522)
      )),
    (RGB = _0x363a4c(0x1a1) + red + "," + green + "," + blue + ")"),
    RGB
  );
}
