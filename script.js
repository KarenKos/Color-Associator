function Radio() {
    let hRadio = document.getElementById("h-radio").checked;
    let sRadio = document.getElementById("s-radio").checked;
    let lRadio = document.getElementById("l-radio").checked;
    let allRadio = document.querySelector(".radio").checked;
    if (hRadio == true) {

        let back = document.querySelector(".radioh");
        back.style.backgroundColor = "#edb000";
        let backS = document.querySelector(".radios");
        backS.style.backgroundColor = "#fff";
        let backL = document.querySelector(".radiol");
        backL.style.backgroundColor = "#fff";

    }
    else if (sRadio == true) {
        let back = document.querySelector(".radios");
        back.style.backgroundColor = "#edb000";
        let backH = document.querySelector(".radioh");
        backH.style.backgroundColor = "#fff";
        let backL = document.querySelector(".radiol");
        backL.style.backgroundColor = "#fff";
    }
    else if (lRadio == true) {
        let back = document.querySelector(".radiol");
        back.style.backgroundColor = "#edb000";
        let backS = document.querySelector(".radios");
        backS.style.backgroundColor = "#fff";
        let backH = document.querySelector(".radioh");
        backH.style.backgroundColor = "#fff";
};
}


function Colors() {

let x = document.getElementById("h-radio").checked;
console.log(x);
let y = document.getElementById("s-radio").checked;
console.log(y);
let z = document.getElementById("l-radio").checked;
console.log(z);


if (x == true ){

  /**** Colors - H ********/
  let H = document.getElementById("H").value;
  let S = document.getElementById("S").value;
  let L = document.getElementById("L").value;

  let el = document.querySelector(".main");
  el.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L + "%)";

  if (L < 25) {
      let colorS = document.querySelector(".main-hsl");
      colorS.style.color = "#ffffff";
  }

  let mainTxt = document.querySelector(".main-hsl");
  mainTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L + "%)";

  let H1, H2, H3;
  H1 = Number(H) + 90;
  H2 = Number(H) + 180;
  H3 = Number(H) + 270;

  if (H1 > 360) {
      H1 = H1 - 360;
  };

  if (H2 > 360) {
      H2 = H2 - 360;
  };
  if (H3 > 360) {
      H3 = H3 - 360;
  };
  let S1One = document.querySelector(".one");
  S1One.style.backgroundColor = "hsl(" + H1 + ", " + S + "%, " + L + "%)";
  let S2Two = document.querySelector(".two");
  S2Two.style.backgroundColor = "hsl(" + H2 + ", " + S + "%, " + L + "%)";
  let S3Three = document.querySelector(".three");
  S3Three.style.backgroundColor = "hsl(" + H3 + ", " + S + "%, " + L + "%)";

  if (L < 25) {
      let color1 = document.getElementById("one-txt");
      color1.style.color = "#ffffff";
  }
  if (L < 25) {
      let color2 = document.getElementById("two-txt");
      color2.style.color = "#ffffff";
  }
  if (L < 25) {
      let color3 = document.getElementById("three-txt");
      color3.style.color = "#ffffff";
  }

  let oneTxt = document.querySelector("#one-txt");
  oneTxt.innerHTML = "hsl(" + H1 + ", " + S + "%, " + L + "%)";
  let twoTxt = document.querySelector("#two-txt");
  twoTxt.innerHTML = "hsl(" + H2 + ", " + S + "%, " + L + "%)";
  let threeTxt = document.querySelector("#three-txt");
  threeTxt.innerHTML = "hsl(" + H3 + ", " + S + "%, " + L + "%)";
  }
else if (y == true) {
    /**** Colors - S ********/
let H = document.getElementById("H").value;
let S = document.getElementById("S").value;
let L = document.getElementById("L").value;

let el = document.querySelector(".main");
el.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L + "%)";

if (S < 25) {
    let colorS = document.querySelector(".main-hsl");
    colorS.style.color = "#ffffff";
}

let mainTxt = document.querySelector(".main-hsl");
mainTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L + "%)";

let S1, S2, S3;
S1 = Number(S) + 20;
S2 = Number(S) + 40;
S3 = Number(S) + 60;

if (S1 > 100) {
    S1 = S1 - 100;
};

if (S2 > 100) {
    S2 = S2 - 100;
};
if (S3 > 100) {
    S3 = S3 - 100;
};
let S1One = document.querySelector(".one");
S1One.style.backgroundColor = "hsl(" + H + ", " + S1 + "%, " + L + "%)";
let S2Two = document.querySelector(".two");
S2Two.style.backgroundColor = "hsl(" + H + ", " + S2 + "%, " + L + "%)";
let S3Three = document.querySelector(".three");
S3Three.style.backgroundColor = "hsl(" + H + ", " + S3 + "%, " + L + "%)";

if (S1 < 25) {
    let color1 = document.getElementById("one-txt");
    color1.style.color = "#ffffff";
}
if (S2 < 25) {
    let color2 = document.getElementById("two-txt");
    color2.style.color = "#ffffff";
}
if (S3 < 25) {
    let color3 = document.getElementById("three-txt");
    color3.style.color = "#ffffff";
}

let oneTxt = document.querySelector("#one-txt");
oneTxt.innerHTML = "hsl(" + H + ", " + S1 + "%, " + L + "%)";
let twoTxt = document.querySelector("#two-txt");
twoTxt.innerHTML = "hsl(" + H + ", " + S2 + "%, " + L + "%)";
let threeTxt = document.querySelector("#three-txt");
threeTxt.innerHTML = "hsl(" + H + ", " + S3 + "%, " + L + "%)";
}
else if (z == true) {
    /********Colors - L****** */
let H = document.getElementById("H").value;
let S = document.getElementById("S").value;
let L = document.getElementById("L").value;

    let el = document.querySelector(".main");
    el.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L + "%)";

    if (L < 25) {
        let colorL = document.querySelector(".main-hsl");
        colorL.style.color = "#ffffff";
    }

    let mainTxt = document.querySelector(".main-hsl");
    mainTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L + "%)";

    let L1, L2, L3;
    L1 = Number(L) + 20;
    L2 = Number(L) + 40;
    L3 = Number(L) + 60;

    if (L1>100) {
        L1 = L1-100;
    };

    if (L2>100) {
        L2 = L2-100;
    };
    if (L3>100) {
        L3 = L3-100;
    };
    let L1One = document.querySelector(".one");
    L1One.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L1 + "%)";
    let L2Two = document.querySelector(".two");
    L2Two.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L2 + "%)";
    let L3Three = document.querySelector(".three");
    L3Three.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L3 + "%)";

        if (L1 < 25) {
            let color1 = document.getElementById("one-txt");
            color1.style.color = "#ffffff";
        }
        if (L2 < 25) {
            let color2 = document.getElementById("two-txt");
            color2.style.color = "#ffffff";
        }
        if (L3 < 25) {
            let color3 = document.getElementById("three-txt");
            color3.style.color = "#ffffff";
        }

    let oneTxt = document.querySelector("#one-txt");
    oneTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L1 + "%)";
    let twoTxt = document.querySelector("#two-txt");
    twoTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L2 + "%)";
    let threeTxt = document.querySelector("#three-txt");
    threeTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L3 + "%)";
    } else {
        window.alert("Wybierz, która wartość ma być zmieniona");
    }
};


function Show(kat) {

    let H = kat;
    let S = document.getElementById("S").value;
    let L = document.getElementById("L").value;

    let el = document.querySelector(".main");
    el.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L + "%)";
    console.log("HSL(" + H + ", " + S + "%, " + L + "%);");

    let mainTxt = document.querySelector(".main-hsl");
    mainTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L + "%)";

    let L1, L2, L3;
    L1 = Number(L) + 20;
    L2 = Number(L) + 40;
    L3 = Number(L) + 60;
    console.log(L1);
    if (L1 > 100) {
        L1 = L1 - 100;
    };
    console.log(L1);
    if (L2 > 100) {
        L2 = L2 - 100;
    };
    if (L3 > 100) {
        L3 = L3 - 100;
    };
    let L1One = document.querySelector(".one");
    L1One.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L1 + "%)";
    console.log("HSL(" + H + ", " + S + "%, " + L1 + "%);");
    let L2Two = document.querySelector(".two");
    L2Two.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L2 + "%)";
    let L3Three = document.querySelector(".three");
    console.log("HSL(" + H + ", " + S + "%, " + L2 + "%);");
    L3Three.style.backgroundColor = "hsl(" + H + ", " + S + "%, " + L3 + "%)";
    console.log(L3);


    let oneTxt = document.querySelector("#one-txt");
    oneTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L1 + "%)";
    let twoTxt = document.querySelector("#two-txt");
    twoTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L2 + "%)";
    let threeTxt = document.querySelector("#three-txt");
    threeTxt.innerHTML = "hsl(" + H + ", " + S + "%, " + L3 + "%)";
};
//background-color: HSL_(180, 100%, 50%);

function Pokaz() {
    let kat;
    for (kat = 0; kat <= 360; kat++) {

        Show(kat);
        let x = 0;
        for (t = 0; t <= 1000000; t++) {
            x = x + 1
        }
        //setTimeout(Show(kat), 1000);
    };
};

