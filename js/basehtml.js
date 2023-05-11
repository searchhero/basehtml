function BaseAlert(message, type) {
    const alert = document.querySelector('.alert'),
        closer = '<span onclick="CloseBaseAlert()"> &times; </span>';
    alert.style = "display: block;";
    if (type == "error") {
        alert.style = "background: red;";
        alert.innerHTML = closer + message;
    } else {
        alert.style = "background: #39ff14;";
        alert.innerHTML = closer + message;
    }
}
function CloseBaseAlert() {
    const alert = document.querySelector('.alert');
    alert.innerHTML = "";
    alert.style = "display: none;";
}

function CopyToClipboard(copyData) {
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = copyData;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempTextarea.value);
    tempTextarea.value = "";
    document.body.removeChild(tempTextarea);
    return true;
}
function CopyToClipboard(copyData) {
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = copyData;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempTextarea.value);
    tempTextarea.value = "";
    document.body.removeChild(tempTextarea);
    return true;
}

function typeWriter(htmlinside ,text, time) {
    var i = 0;
    function writeText() {
      if (i < text.length) {
        htmlinside.innerHTML += text.charAt(i);
        i++;
        setTimeout(writeText, time);
      }
    }
    writeText();
  }
