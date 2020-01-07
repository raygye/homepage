document.getElementById("mail").onmouseover = function() {
    document.getElementById("mailText").style.opacity = "1";
}
document.getElementById("mail").onmouseout = function() {
        document.getElementById("mailText").style.opacity = "0";
        document.getElementById("mailText").innerHTML = "Click to copy my email to your clipboard";
}
document.getElementById("mail").onclick = function() {
    let mail = document.getElementById("invis");
    mail.select();
    document.execCommand("copy");
    document.getElementById("mailText").innerHTML = "Copied!";
}