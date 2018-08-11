
function Colors() {
let H = document.getElementById("H").value;
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
    if (L1>100) {
        L1 = L1-100;
    };
    console.log(L1);
    if (L2>100) {
        L2 = L2-100;
    };
    if (L3>100) {
        L3 = L3-100;
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




