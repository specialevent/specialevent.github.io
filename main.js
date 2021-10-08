let a = document.getElementById("bg");
let b = document.getElementById("as");
let c = document.getElementById("myVideo");
a.addEventListener("click", function () {
    a.classList.add("transform");
    setTimeout(() => a.classList.add("dspnone"), 2200);
    setTimeout(() => b.classList.add("dspblock"), 2200);
    setTimeout(() => c.classList.add("dspblock2"), 2200);
});