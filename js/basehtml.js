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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatNumber(number, decimalPlaces) {
  return number.toFixed(decimalPlaces);
}

function isObjectEmpty(object) {
  return Object.keys(object).length === 0;
}

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

function encodeText(text) {
  return btoa(text);
}

function decodeText(encodedText) {
  return atob(encodedText);
}

function generateRandomText(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function getURLParameters(url) {
  const searchParams = new URLSearchParams(new URL(url).search);
  const params = {};
  for (let [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function getRandomImageUrl(resolution = "1920x1080", imgcategory = "coding,technology") {
  return `https://source.unsplash.com/random/${resolution}/?${imgcategory}`;
}

async function generateRandomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data.content;
}
