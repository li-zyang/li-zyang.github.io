/*eslint no-extend-native: ["off", { "exceptions": [] }]*/
/*eslint eqeqeq: ["off", { "exceptions": [] }]*/
/*eslint no-unused-vars: ["off", { "exceptions": [] }]*/
/*eslint no-undef: ["off", { "exceptions": [] }]*/
if (DEBUG) console.log("DEBUG: 加载toolkit.js");

String.prototype.hashCode = function() {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
if (DEBUG) console.log("DEBUG: register String.hashCode()");
if (DEBUG)
  console.log("DEBUG: 'HASHHHH'.hashCode = " + "HASHHHH".hashCode().toString());

String.prototype.format = function(...rest) {};

function xhrGET(url, callback, Async = true) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState >= 2) {
      callback();
    }
  };
  xhr.open("GET", url, Async);
  xhr.send(null);
  return xhr;
}

var xhr_in_template = xhrGET("etc/xhrtest", callback_template);
function callback_template() {
  if (xhr_in_template.readyState == 4) {
    // 4 = "DONE", The operation is complete.
    if (xhr_in_template.status == 200) {
      // 200 = OK
      if (DEBUG) console.log(xhr_in_template.responseText);
    } else {
      console.error(
        "Problem retrieving XML data: got status " +
          xhr_in_template.status.toString()
      );
    }
  } else if (xhr_in_template.readyState == 3) {
    // 3 - "LOADING", Downloading; responseText holds partial data.
  } else if (xhr_in_template.readyState == 2) {
    // 2 - "HEADERS-RECIEVED", send() has been called, and headers and status are available.
  }
  /* else if (xhr_in_template.readyState == 1) {
    // 1 - "OPENED", open() has been called.
  } else if (xhr_in_template.readyState == 0) {
    // 0 - "UNSENT" - Client has been created. open() not called yet.
  }*/ // Cannot handle OPENED and UNSENT in this way
}

function genRandStr(
  length,
  // prettier-ignore
  charSet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
) {
  var res = "";
  for (var i = 0; i < length; i++) {
    res += charSet[Math.floor(Math.random() * charSet.length)];
  }
  return res;
}

// 将HTML转义为实体
function escape(html) {
  var elem = document.createElement("div");
  var txt = document.createTextNode(html);
  elem.appendChild(txt);
  return elem.innerHTML;
}
// 将实体转回为HTML
function unescape(str) {
  var elem = document.createElement("div");
  elem.innerHTML = str;
  return elem.innerText || elem.textContent;
}

function insertHTML(parentNode, childNode, HTMLcontent) {
  var newNode = document.createElement("div");
  newNode.outerHTML = HTMLcontent;
  parentNode.insertBefore(newNode, childNode);
}

function getCSSRotation2d(element) {
  var example = "rotate(90.930985deg)";
  var textpattern = /\brotate\((\d|\.)+\w+\)/i;
  var transformation = element.style.transform;
  var rotation = textpattern.exec(transformation);
  if (rotation) {
    return {
      value: parseFloat(/(\d.|\.)+/.exec(rotation)),
      unit: /deg|rad/i.exec(transformation)[0]
    };
  } else {
    return {
      value: 0,
      unit: "rad"
    };
  }
}

function rotateElement(element, angle) {
  var textpattern = /\brotate\((\d|\.)+\w+\)/i;
  var transformation = element.style.transform;
  var get_angle = getCSSRotation2d(element);
  var primary_angle = get_angle.value;
  var unit = get_angle.unit;
  var target_angle = primary_angle + angle;
}
