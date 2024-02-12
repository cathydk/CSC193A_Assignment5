document.getElementById("fancyShmancy").addEventListener("change", fancy);
document.getElementById("BoringBetty").addEventListener("change", boring);

function alerted(){
    alert("Hello, world!");
}

function makeBigger(){
    document.getElementById("enterText").style.fontSize="24px";
}

function changed(){
    alert("Change occured.");
}

function fancy(){
    document.getElementById("enterText").style.fontWeight="bold";
    document.getElementById("enterText").style.color="blue";
    document.getElementById("enterText").style.textDecoration="underline";
}

function boring(){
    document.getElementById("enterText").style.fontWeight="normal";
    document.getElementById("enterText").style.color="black";
    document.getElementById("enterText").style.textDecoration="none";
}

function moo(){
    document.getElementById("moo");
    document.getElementById("enterText").style.textTransform="uppercase";
    var mooSuffix = "-Moo";
    var input = document.getElementById("enterText").value;
    var splitting = input.split(".");
    input = splitting.join(mooSuffix);
    document.getElementById("enterText").value = input + ".";
}