function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj[p]) {
      str.push(encodeURIComponent(p) + "/" + encodeURIComponent(obj[p]).replace(/\./g, () => "%2E"));
    }
  return str.join("/");
}

// loadApp() is used outside of the file in index.html
var loadApp = function (defaultUrl) {
  // eslint-disable-line
  function getLaunchUrl() {
    return defaultUrl;
  }

  function launch(url) {
    if (url.length > 0) {
      window.location.href = url;
    } else {
      url = getLaunchUrl();
      window.location.href = url;
    }
  }

  // launchParamsDecoded is provided by ../tmp/launch.js outside of the file
  /* eslint-disable no-undef */
  function parseLaunchParameterJSON(baseUrl) {
    console.info(`parseLaunchParameterJSON: launchParamsDecoded: ${launchParamsDecoded}`);

    // parse the launch parameters and return the url to redirect to...

    return baseUrl;
  }

  try {
    var baseUrl = getLaunchUrl();

    if (typeof launchParamsDecoded === "undefined" || launchParamsDecoded === "") {
      launch(baseUrl);
    } else {
      //deeplink ('epg', 'web' etc.)
      var mainUrl = parseLaunchParameterJSON(baseUrl);
      console.info(`loadApp: mainUrl: ${mainUrl}`);

      launch(mainUrl);
    }
  } catch (err) {
    document.write("<br><h1><pre>        Error</pre></h1><br>");
    document.write(`<pre>                Application launched with parameters :${launchParamsDecoded}</pre>`);
  }
  /* eslint-disable no-undef */
};
