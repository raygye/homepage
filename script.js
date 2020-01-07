document.getElementById("mail").onmouseover = function() {
    document.getElementById("mailText").style.opacity = "1";
}
document.getElementById("mail").onmouseout = function() {
        document.getElementById("mailText").style.opacity = "0";
        document.getElementById("mailText").innerHTML = "Click to copy my email to your clipboard";
}
document.getElementById("mail").onclick = function() {
    navigator.clipboard.writeText("r22ye@uwaterloo.ca");
    document.getElementById("mailText").innerHTML = "Copied!";
}