// JavaScript source code
const keo = document.getElementById("keo");
const bua = document.getElementById("bua");
const bao = document.getElementById("bao");

let res = "";
let botres = "";
let ketqua = "";

const hinhnguoi = document.getElementById("res");
const hinhmay = document.getElementById("botres");
const ket = document.getElementById("ketqua");


function playgame(choice) {
    res = choice;

    let x = Math.floor(Math.random() * 3) + 1;

    if (x === 1) {
        botres = "keo";
    }
    else if (x === 2) {
        botres = "bua";
    }
    else {
        botres = "bao";
    }

    if (botres === "keo") {
        hinhmay.textContent = "✌️";
        if (res === "keo") {
            ketqua = "Hòa";
            hinhnguoi.textContent = "✌️";
        }
        else if (res === "bua") {
            ketqua = "Thắng";
            hinhnguoi.textContent = "✊";
        }
        else {
            ketqua = "Thua";
            hinhnguoi.textContent = "🖐️";
        }
    }
    else if (botres === "bua") {
        hinhmay.textContent = "✊";
        if (res === "keo") {
            ketqua = "Thua";
            hinhnguoi.textContent = "✌️";
        }
        else if (res === "bua") {
            ketqua = "Hòa";
            hinhnguoi.textContent = "✊";
        }
        else {
            ketqua = "Thắng";
            hinhnguoi.textContent = "🖐️";
        }
    }
    else {
        hinhmay.textContent = "🖐️";
        if (res === "keo") {
            ketqua = "Thắng";
            hinhnguoi.textContent = "✌️";
        }
        else if (res === "bua") {
            ketqua = "Thua";
            hinhnguoi.textContent = "✊";
        }
        else {
            ketqua = "Hòa";
            hinhnguoi.textContent = "🖐️";
        }
    }

    ket.textContent = ketqua;
}


keo.onclick = function () {
    playgame("keo");
};

bua.onclick = function () {
    playgame("bua");
};


bao.onclick = function () {
    playgame("bao");
};

