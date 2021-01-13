document.querySelector("#showhide").onclick = function() {
    if (window.getComputedStyle(document.querySelector('#contactHidden')).display=='none'){
    document.querySelector("#contactHidden").style.display="flex";
    } else {
    document.querySelector("#contactHidden").style.display="none";
    }
    }