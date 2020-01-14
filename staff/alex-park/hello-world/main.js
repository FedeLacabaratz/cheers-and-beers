
document.getElementsByTagName("h1")[0].addEventListener("click", function () {
    alert("Hello, World!");
});
document.getElementsByTagName("button")[0].addEventListener("click", function () {
    var goodLuck = [
        "Buen codigo guapo <3",
        "Que no me entere yo que ese culito pasa hambre",
        "Pelo panten",
    ]
    var n = Math.floor(Math.random() * 3)
    alert(goodLuck[n]);
});