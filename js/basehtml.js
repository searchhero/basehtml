function BaseAlert(message, type) {
    const alert = document.querySelector('.alert');
    const closer = '<span class="alert-close" onclick="CloseBaseAlert()">&times;</span>';
    
    alert.style.display = "block";
    alert.innerHTML = closer + message;

    if (type === "error") {
        alert.style.background = "red";
    } else {
        alert.style.background = "#39ff14";
    }
}

function CloseBaseAlert() {
    const alert = document.querySelector('.alert');
    alert.innerHTML = "";
    alert.style.display = "none";
}

function CopyToClipboard(copyData) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = copyData;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempTextarea.value);
    tempTextarea.value = "";
    document.body.removeChild(tempTextarea);
    return true;
}

function typeWriter(htmlinside, text, time, outtype) {
    let i = 0;
    outtype = outtype || "h"; // default value of "h" if not provided

    function writeText() {
        if (i < text.length) {
            if (outtype === "h") {
                htmlinside.innerHTML += text.charAt(i);
            } else {
                htmlinside.value += text.charAt(i);
            }
            i++;
            setTimeout(writeText, time);
        }
    }
  
    writeText();
}

function preloader(action) {
    const preloader = document.querySelector('.preloader');
    if (action === "true") {
        preloader.classList.remove('hidden');
    } else {
        preloader.classList.add('hidden');
    }
}
