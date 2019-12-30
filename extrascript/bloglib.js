/*eslint no-extend-native: ["off", { "exceptions": [] }]*/
/*eslint eqeqeq: ["off", { "exceptions": [] }]*/
/*eslint no-unused-vars: ["off", { "exceptions": [] }]*/
/*eslint no-undef: ["off", { "exceptions": [] }]*/
/*eslint no-throw-literal: ["off", { "exceptions": [] }]*/

function genBlogId(callback) {
  if (DEBUG) console.log("genBlogId() called");
  var blog_id = null;
  var xhr = xhrGET("/blog-info.json", function() {
    if (DEBUG) console.log("callback function called: ", xhr.readyState);
    if (xhr.readyState == 4) {
      // 4 = "DONE", The operation is complete.
      if (xhr.status == 200) {
        // 200 = OK
        if (DEBUG) console.log("response:", xhr.responseText);
        var blog_info = JSON.parse(xhr.responseText);
        var raw_id = null;
        if (DEBUG) console.log("begin to check duplication");
        do {
          raw_id = genRandStr(12);
          var duplicated = false;
          if (DEBUG) console.log("generated raw id:", raw_id);
          for (var i = 0; i < blog_info.length; i++) {
            if (DEBUG) console.log('checking "' + blog_info[i].id + '"');
            if (raw_id == blog_info[i].id) {
              if (DEBUG) console.log("duplicated");
              duplicated = true;
              break;
            }
          }
          if (duplicated == true) {
            continue;
          }
        } while (false);
        if (DEBUG) console.log("final id generated:", raw_id);
        blog_id = raw_id;
      } else {
        console.error(
          "Problem retrieving XML data: got status " + xhr.status.toString()
        );
      }
    }
    callback(blog_id);
  });
}

function fetchBlogsInfo(callback) {
  // CAUTION: No Complete!
  var blogs = null;
  var blogs_info = xhrGET("/blog-info.json", function() {
    if (blogs_info.readyState == 4) {
      // 4 = "DONE", The operation is complete.
      if (blogs_info.status == 200) {
        // 200 = OK
        if (DEBUG) console.log(blogs_info.responseText);
        callback(JSON.parse(blogs_info.responseText));
      } else {
        console.error(
          "Problem retrieving XML data: got status " +
            blogs_info.status.toString()
        );
      }
    }
  });
}

function getBlogInfoById(id, blogsInfo) {
  for (var i = 0; i < blogsInfo.length; i++) {
    if (blogsInfo[i].id == id) {
      return blogsInfo[i];
    }
  }
  throw {
    name: "ReferenceNoFound",
    message: 'artical of id "' + id + '" cannot be found.'
  };
}

function insertCover(id) {
  var cover = xhrGET("blog-covers/" + id + ".html", function() {
    var container = document.getElementById("container-" + id);
    if (cover.readyState == 4) {
      // 4 = "DONE", The operation is complete.
      if (cover.status == 200) {
        // 200 = OK
        var placeholder = container.getElementsByClassName("blog-cover")[0];
        container.style.display = "flex";
        placeholder.outerHTML = cover.response;
      } else {
        console.error(
          "Problem retrieving XML data: got status " + cover.status.toString()
        );
      }
    }
  });
}

function insertExtraButton(id) {
  var extra_button = xhrGET("blog-extra-buttons/" + id + ".svg", function() {
    var container = document.getElementById("container-" + id);
    if (extra_button.readyState == 4) {
      // 4 = "DONE", The operation is complete.
      if (extra_button.status == 200) {
        // 200 = OK
        var placeholder = container.getElementsByClassName("extra-button")[0];
        placeholder.outerHTML = extra_button.response;
      } else {
        console.error(
          "Problem retrieving XML data: got status " +
            extra_button.status.toString()
        );
      }
    }
  });
}

function insertAllCovers(blogsInfo) {
// CAUTION: No complete
  for (var i = 0; i < blogsInfo.length; i++) {}
}

function diaplayArticle(id) {}
