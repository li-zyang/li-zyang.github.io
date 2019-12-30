/*eslint no-extend-native: ["off", { "exceptions": [] }]*/
/*eslint eqeqeq: ["off", { "exceptions": [] }]*/
/*eslint no-unused-vars: ["off", { "exceptions": [] }]*/
/*eslint no-undef: ["off", { "exceptions": [] }]*/
/*eslint no-redeclare: ["off", { "exceptions": [] }]*/

function clearAnimation0(element) {
  element.style["animation-name"] = "";
  element.style["animation-duration"] = "";
  element.style["animation-timing-function"] = "";
  element.style["animation-delay"] = "";
  element.style["animation-iteration-count"] = "";
  element.style["animation-direction"] = "";
  element.style["animation-play-state"] = "";
  element.style["animation-fill-mode"] = "";
  element.style["animation"] = "";
  if (DEBUG)
    console.log(
      "animation after deletion",
      element.style.animation,
      "animation-iteration-count:",
      element.style["animation-iteration-count"]
    );
}

function clearAnimation(element) {
  /*
  if (DEBUG) console.log("clearAnimation: ", element.classList);
  var parent = element.parentElement;
  var cloned = element.cloneNode(true);
  parent.replaceChild(cloned, element);
  if (DEBUG)
    console.log(
      "animation after deletion",
      element.style.animation,
      "animation-iteration-count:",
      element.style["animation-iteration-count"]
    );
  */
}

function showInfoPanel() {
  document.getElementById("info-panel-background").style.display = "flex";
}

function hideInfoPanel() {
  document.getElementById("info-panel-background").style.display = "none";
}

function switchNavigationPanel() {
  if (global_states.navi_is_folded == false) {
    // unfolded
    var animation_element_pool = [];
    var navi = document.getElementsByClassName("navi")[0];
    clearAnimation(navi);
    navi.style.animation = "spreadNavi 0.5s both reverse";
    if (DEBUG)
      console.log(
        "spreadNavi added: ",
        navi.style.animation,
        navi.style["animation-name"]
      );
    animation_element_pool.push(navi);

    var navi_items = navi.getElementsByClassName("navi-item");
    for (var j = 0; j < navi_items.length; j++) {
      var navi_item_span = navi_items[j].getElementsByTagName("span");
      for (var i = 0; i < navi_item_span.length; i++) {
        clearAnimation(navi_item_span[i]);
        navi_item_span[i].style.animation =
          "squzeeX 0.5s both, fadein_black 0.5s both linear reverse";
        animation_element_pool.push(navi_item_span[i]);
      }
    }

    var navi_func_labels = navi.getElementsByClassName("navi-func-label");
    for (var i = 0; i < navi_func_labels.length; i++) {
      clearAnimation(navi_func_labels[i]);
      navi_func_labels[i].style.animation =
        "squzeeX 0.5s both, fadein_black 0.5s both linear reverse";
      animation_element_pool.push(navi_func_labels[i]);
    }
    var intro = document.getElementById("intro");
    var intro_name = intro.getElementsByClassName("name")[0];
    clearAnimation(intro_name);
    intro_name.style.animation =
      "squzeeX 0.5s both, fadein_black 0.5s both linear reverse";
    animation_element_pool.push(intro_name);
    var brief_intro = intro.getElementsByClassName("brief-intro")[0];
    clearAnimation(brief_intro);
    brief_intro.style.animation =
      "squzeeX 0.5s both, fadein_black 0.5s both linear reverse";
    animation_element_pool.push(brief_intro);
    var profile_photo = document.getElementById("profile-photo");
    clearAnimation(profile_photo);
    profile_photo.style.animation = "spreadProfile 0.5s both reverse";
    animation_element_pool.push(profile_photo);

    for (var i = 0; i < animation_element_pool.length; i++) {
      animation_element_pool[i].style["animation-play-state"] = "running";
    }
    global_states.navi_is_folded = true;
  } else {
    // folded
    var animation_element_pool = [];
    var navi = document.getElementsByClassName("navi")[0];
    clearAnimation(navi);
    navi.style.animation = "spreadNavi 0.5s both";
    animation_element_pool.push(navi);

    var navi_items = navi.getElementsByClassName("navi-item");
    for (var j = 0; j < navi_items.length; j++) {
      var navi_item_span = navi_items[j].getElementsByTagName("span");
      for (var i = 0; i < navi_item_span.length; i++) {
        clearAnimation(navi_item_span[i]);
        navi_item_span[i].style.animation =
          "squzeeX 0.5s both reverse, fadein_black 0.5s both linear";
        animation_element_pool.push(navi_item_span[i]);
      }
    }

    var navi_func_labels = navi.getElementsByClassName("navi-func-label");
    for (var i = 0; i < navi_func_labels.length; i++) {
      clearAnimation(navi_func_labels[i]);
      navi_func_labels[i].style.animation =
        "squzeeX 0.5s both reverse, fadein_black 0.5s both linear";
      animation_element_pool.push(navi_func_labels[i]);
    }
    var intro = document.getElementById("intro");
    var intro_name = intro.getElementsByClassName("name")[0];
    clearAnimation(intro_name);
    intro_name.style.animation =
      "squzeeX 0.5s both reverse, fadein_black 0.5s both linear";
    animation_element_pool.push(intro_name);
    var brief_intro = intro.getElementsByClassName("brief-intro")[0];
    clearAnimation(brief_intro);
    brief_intro.style.animation =
      "squzeeX 0.5s both reverse, fadein_black 0.5s both linear";
    animation_element_pool.push(brief_intro);
    var profile_photo = document.getElementById("profile-photo");
    clearAnimation(profile_photo);
    profile_photo.style.animation = "spreadProfile 0.5s both";
    animation_element_pool.push(profile_photo);

    for (var i = 0; i < animation_element_pool.length; i++) {
      animation_element_pool[i].style["animation-play-state"] = "running";
    }
    global_states.navi_is_folded = false;
  }
}

function hideNavigationPannel() {
  var navi = document.getElementsByClassName("navi")[0];
  clearAnimation(navi);
  navi.style.animation = "hideNavi 0.5s both";
}
function showNavigationPannel() {
  var navi = document.getElementsByClassName("navi")[0];
  clearAnimation(navi);
  navi.style.animation = "hideNavi 0.5s both reverse";
}

function loadLandScapeLayout() {}

function loadPortraitLayout() {}

function loadSquareScreenLayout() {}
