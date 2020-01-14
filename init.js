/*eslint no-extend-native: ["off", { "exceptions": [] }]*/
/*eslint eqeqeq: ["off", { "exceptions": [] }]*/
/*eslint no-unused-vars: ["off", { "exceptions": [] }]*/
/*eslint no-undef: ["off", { "exceptions": [] }]*/
/*eslint no-redeclare: ["off", { "exceptions": [] }]*/

var lnavi_items = xhrGET("lnavi-items.html", function() {
  if (lnavi_items.readyState == 4) {
    // 4 = "DONE", The operation is complete.
    if (lnavi_items.status == 200) {
      // 200 = OK
      // if (DEBUG) console.log(xhr_in_template.responseText);
      var placeholder = document
        .getElementsByClassName("lnavi")[0]
        .getElementsByClassName("profile-and-links-container")[0]
        .getElementsByClassName("lnavi-item-placeholder")[0];
      placeholder.outerHTML = lnavi_items.response;
    } else {
      console.error(
        "Problem retrieving XML data: got status " +
          xhr_in_template.status.toString()
      );
    }
  }
  global_states.lnavi_is_folded = true;
  if (window.innerWidth / window.innerHeight > SQUARE_SCREEN_THRESHOLD[1]) {
    switchNavigationPanel();
  } else if (
    window.innerWidth / window.innerHeight > SQUARE_SCREEN_THRESHOLD[0] &&
    window.innerWidth / window.innerHeight <= SQUARE_SCREEN_THRESHOLD[1]
  ) {
  } else {
    hideNavigationPannel();
  }
});
