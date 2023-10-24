"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) =>
    function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
    };
  var __commonJS = (cb, mod) =>
    function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if ((module && typeof module === "object") || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, {
            get: () => module[key],
            enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
          });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return (
        (cache && cache.get(module)) ||
        ((temp = __reExport(__markAsModule({}), module, 1)), cache && cache.set(module, temp), temp)
      );
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // dist/tsc/as/http.js
  var require_http = __commonJS({
    "dist/tsc/as/http.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.post = exports.get = void 0;
      var address = document.ethan_as_ip_address || "stb";
      var port = document.ethan_as_port || 9005;
      var asAddress = "http://".concat(address, ":").concat(port, "/as/");
      var get = function (method) {
        return fetch(asAddress + method).then(function (resp) {
          if (resp.ok) return resp.json();
          return Promise.reject(new Error(resp.statusText));
        });
      };
      exports.get = get;
      var post = function (method, data) {
        return fetch(asAddress + method, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then(function (resp) {
          if (resp.ok) return resp.json();
          return Promise.reject(new Error(resp.statusText));
        });
      };
      exports.post = post;
    },
  });

  // dist/tsc/as/getAudioSettingHDMIAudioFormat.js
  var require_getAudioSettingHDMIAudioFormat = __commonJS({
    "dist/tsc/as/getAudioSettingHDMIAudioFormat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getAudioSettingHDMIAudioFormat = void 0;
      var http_1 = require_http();
      var getAudioSettingHDMIAudioFormat = function () {
        return (0, http_1.get)("audio/setting/HDMIAudioFormat");
      };
      exports.getAudioSettingHDMIAudioFormat = getAudioSettingHDMIAudioFormat;
    },
  });

  // dist/tsc/as/getAudioSettingOpticalAudioFormat.js
  var require_getAudioSettingOpticalAudioFormat = __commonJS({
    "dist/tsc/as/getAudioSettingOpticalAudioFormat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getAudioSettingOpticalAudioFormat = void 0;
      var http_1 = require_http();
      var getAudioSettingOpticalAudioFormat = function () {
        return (0, http_1.get)("audio/setting/OpticalAudioFormat");
      };
      exports.getAudioSettingOpticalAudioFormat = getAudioSettingOpticalAudioFormat;
    },
  });

  // dist/tsc/as/getDeviceInformation.js
  var require_getDeviceInformation = __commonJS({
    "dist/tsc/as/getDeviceInformation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDeviceInformation = void 0;
      var http_1 = require_http();
      var getDeviceInformation = function () {
        return (0, http_1.get)("system/deviceinformation");
      };
      exports.getDeviceInformation = getDeviceInformation;
    },
  });

  // dist/tsc/as/getDisplaySettingResolution.js
  var require_getDisplaySettingResolution = __commonJS({
    "dist/tsc/as/getDisplaySettingResolution.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDisplaySettingResolution = void 0;
      var http_1 = require_http();
      var getDisplaySettingResolution = function () {
        return (0, http_1.get)("display/setting/resolution");
      };
      exports.getDisplaySettingResolution = getDisplaySettingResolution;
    },
  });

  // dist/tsc/as/getPlayersSettingSubtitles.js
  var require_getPlayersSettingSubtitles = __commonJS({
    "dist/tsc/as/getPlayersSettingSubtitles.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getPlayersSettingSubtitles = void 0;
      var http_1 = require_http();
      var getPlayersSettingSubtitles = function () {
        return (0, http_1.get)("players/setting/subtitles");
      };
      exports.getPlayersSettingSubtitles = getPlayersSettingSubtitles;
    },
  });

  // dist/tsc/as/getSystemHDMI.js
  var require_getSystemHDMI = __commonJS({
    "dist/tsc/as/getSystemHDMI.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getSystemHDMI = void 0;
      var http_1 = require_http();
      var getSystemHDMI = function () {
        return (0, http_1.get)("system/hdmi");
      };
      exports.getSystemHDMI = getSystemHDMI;
    },
  });

  // dist/tsc/as/getSystemInformation.js
  var require_getSystemInformation = __commonJS({
    "dist/tsc/as/getSystemInformation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getSystemInformation = void 0;
      var http_1 = require_http();
      var getSystemInformation = function () {
        return (0, http_1.get)("system/information");
      };
      exports.getSystemInformation = getSystemInformation;
    },
  });

  // dist/tsc/as/postOttResumePoints.js
  var require_postOttResumePoints = __commonJS({
    "dist/tsc/as/postOttResumePoints.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.postOttResumePoints = void 0;
      var http_1 = require_http();
      var postOttResumePoints = function (data) {
        return (0, http_1.post)("ott/resumepoints", data);
      };
      exports.postOttResumePoints = postOttResumePoints;
    },
  });

  // dist/tsc/as/index.js
  var require_as = __commonJS({
    "dist/tsc/as/index.js"(exports) {
      "use strict";
      var __createBinding =
        (exports && exports.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              o[k2] = m[k];
            });
      var __exportStar =
        (exports && exports.__exportStar) ||
        function (m, exports2) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_getAudioSettingHDMIAudioFormat(), exports);
      __exportStar(require_getAudioSettingOpticalAudioFormat(), exports);
      __exportStar(require_getDeviceInformation(), exports);
      __exportStar(require_getDisplaySettingResolution(), exports);
      __exportStar(require_getPlayersSettingSubtitles(), exports);
      __exportStar(require_getSystemHDMI(), exports);
      __exportStar(require_getSystemInformation(), exports);
      __exportStar(require_postOttResumePoints(), exports);
    },
  });

  // dist/tsc/ftl/accessibility/closedCaptions.js
  var require_closedCaptions = __commonJS({
    "dist/tsc/ftl/accessibility/closedCaptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.closedCaptions = void 0;
      var as_1 = require_as();
      var closedCaptions = function () {
        return (0, as_1.getPlayersSettingSubtitles)().then(function (json) {
          return { enabled: json.subtitles === "on" };
        });
      };
      exports.closedCaptions = closedCaptions;
    },
  });

  // dist/tsc/ftl/accessibility/voiceGuidance.js
  var require_voiceGuidance = __commonJS({
    "dist/tsc/ftl/accessibility/voiceGuidance.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.voiceGuidance = void 0;
      var voiceGuidance = function () {
        return Promise.resolve({ enabled: false });
      };
      exports.voiceGuidance = voiceGuidance;
    },
  });

  // dist/tsc/ftl/accessibility/index.js
  var require_accessibility = __commonJS({
    "dist/tsc/ftl/accessibility/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.accessibility = void 0;
      var closedCaptions_1 = require_closedCaptions();
      var voiceGuidance_1 = require_voiceGuidance();
      exports.accessibility = {
        closedCaptions: closedCaptions_1.closedCaptions,
        voiceGuidance: voiceGuidance_1.voiceGuidance,
      };
    },
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  function rng() {
    if (!getRandomValues) {
      getRandomValues =
        (typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        (typeof msCrypto !== "undefined" &&
          typeof msCrypto.getRandomValues === "function" &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (!getRandomValues) {
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      }
    }
    return getRandomValues(rnds8);
  }
  var getRandomValues, rnds8;
  var init_rng = __esm({
    "node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds8 = new Uint8Array(16);
    },
  });

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default;
  var init_regex = __esm({
    "node_modules/uuid/dist/esm-browser/regex.js"() {
      regex_default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    },
  });

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default;
  var init_validate = __esm({
    "node_modules/uuid/dist/esm-browser/validate.js"() {
      init_regex();
      validate_default = validate;
    },
  });

  // node_modules/uuid/dist/esm-browser/stringify.js
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (
      byteToHex[arr[offset + 0]] +
      byteToHex[arr[offset + 1]] +
      byteToHex[arr[offset + 2]] +
      byteToHex[arr[offset + 3]] +
      "-" +
      byteToHex[arr[offset + 4]] +
      byteToHex[arr[offset + 5]] +
      "-" +
      byteToHex[arr[offset + 6]] +
      byteToHex[arr[offset + 7]] +
      "-" +
      byteToHex[arr[offset + 8]] +
      byteToHex[arr[offset + 9]] +
      "-" +
      byteToHex[arr[offset + 10]] +
      byteToHex[arr[offset + 11]] +
      byteToHex[arr[offset + 12]] +
      byteToHex[arr[offset + 13]] +
      byteToHex[arr[offset + 14]] +
      byteToHex[arr[offset + 15]]
    ).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var byteToHex, i, stringify_default;
  var init_stringify = __esm({
    "node_modules/uuid/dist/esm-browser/stringify.js"() {
      init_validate();
      byteToHex = [];
      for (i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).substr(1));
      }
      stringify_default = stringify;
    },
  });

  // node_modules/uuid/dist/esm-browser/v1.js
  function v1(options, buf, offset) {
    var i = (buf && offset) || 0;
    var b = buf || new Array(16);
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      var seedBytes = options.random || (options.rng || rng)();
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
      if (clockseq == null) {
        clockseq = _clockseq = ((seedBytes[6] << 8) | seedBytes[7]) & 16383;
      }
    }
    var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
    var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt < 0 && options.clockseq === void 0) {
      clockseq = (clockseq + 1) & 16383;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 122192928e5;
    var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b[i++] = (tl >>> 24) & 255;
    b[i++] = (tl >>> 16) & 255;
    b[i++] = (tl >>> 8) & 255;
    b[i++] = tl & 255;
    var tmh = ((msecs / 4294967296) * 1e4) & 268435455;
    b[i++] = (tmh >>> 8) & 255;
    b[i++] = tmh & 255;
    b[i++] = ((tmh >>> 24) & 15) | 16;
    b[i++] = (tmh >>> 16) & 255;
    b[i++] = (clockseq >>> 8) | 128;
    b[i++] = clockseq & 255;
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }
    return buf || stringify_default(b);
  }
  var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
  var init_v1 = __esm({
    "node_modules/uuid/dist/esm-browser/v1.js"() {
      init_rng();
      init_stringify();
      _lastMSecs = 0;
      _lastNSecs = 0;
      v1_default = v1;
    },
  });

  // node_modules/uuid/dist/esm-browser/parse.js
  function parse(uuid) {
    if (!validate_default(uuid)) {
      throw TypeError("Invalid UUID");
    }
    var v;
    var arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = (v >>> 16) & 255;
    arr[2] = (v >>> 8) & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = ((v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776) & 255;
    arr[11] = (v / 4294967296) & 255;
    arr[12] = (v >>> 24) & 255;
    arr[13] = (v >>> 16) & 255;
    arr[14] = (v >>> 8) & 255;
    arr[15] = v & 255;
    return arr;
  }
  var parse_default;
  var init_parse = __esm({
    "node_modules/uuid/dist/esm-browser/parse.js"() {
      init_validate();
      parse_default = parse;
    },
  });

  // node_modules/uuid/dist/esm-browser/v35.js
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    var bytes = [];
    for (var i = 0; i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }
  function v35_default(name, version2, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
      if (typeof value === "string") {
        value = stringToBytes(value);
      }
      if (typeof namespace === "string") {
        namespace = parse_default(namespace);
      }
      if (namespace.length !== 16) {
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      }
      var bytes = new Uint8Array(16 + value.length);
      bytes.set(namespace);
      bytes.set(value, namespace.length);
      bytes = hashfunc(bytes);
      bytes[6] = (bytes[6] & 15) | version2;
      bytes[8] = (bytes[8] & 63) | 128;
      if (buf) {
        offset = offset || 0;
        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = bytes[i];
        }
        return buf;
      }
      return stringify_default(bytes);
    }
    try {
      generateUUID.name = name;
    } catch (err) {}
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
  }
  var DNS, URL;
  var init_v35 = __esm({
    "node_modules/uuid/dist/esm-browser/v35.js"() {
      init_stringify();
      init_parse();
      DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    },
  });

  // node_modules/uuid/dist/esm-browser/md5.js
  function md5(bytes) {
    if (typeof bytes === "string") {
      var msg = unescape(encodeURIComponent(bytes));
      bytes = new Uint8Array(msg.length);
      for (var i = 0; i < msg.length; ++i) {
        bytes[i] = msg.charCodeAt(i);
      }
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
  }
  function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = "0123456789abcdef";
    for (var i = 0; i < length32; i += 8) {
      var x = (input[i >> 5] >>> i % 32) & 255;
      var hex = parseInt(hexTab.charAt((x >>> 4) & 15) + hexTab.charAt(x & 15), 16);
      output.push(hex);
    }
    return output;
  }
  function getOutputLength(inputLength8) {
    return (((inputLength8 + 64) >>> 9) << 4) + 14 + 1;
  }
  function wordsToMd5(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }
  function bytesToWords(input) {
    if (input.length === 0) {
      return [];
    }
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for (var i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input[i / 8] & 255) << i % 32;
    }
    return output;
  }
  function safeAdd(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 65535);
  }
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  var md5_default;
  var init_md5 = __esm({
    "node_modules/uuid/dist/esm-browser/md5.js"() {
      md5_default = md5;
    },
  });

  // node_modules/uuid/dist/esm-browser/v3.js
  var v3, v3_default;
  var init_v3 = __esm({
    "node_modules/uuid/dist/esm-browser/v3.js"() {
      init_v35();
      init_md5();
      v3 = v35_default("v3", 48, md5_default);
      v3_default = v3;
    },
  });

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = (rnds[6] & 15) | 64;
    rnds[8] = (rnds[8] & 63) | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default;
  var init_v4 = __esm({
    "node_modules/uuid/dist/esm-browser/v4.js"() {
      init_rng();
      init_stringify();
      v4_default = v4;
    },
  });

  // node_modules/uuid/dist/esm-browser/sha1.js
  function f(s, x, y, z) {
    switch (s) {
      case 0:
        return (x & y) ^ (~x & z);
      case 1:
        return x ^ y ^ z;
      case 2:
        return (x & y) ^ (x & z) ^ (y & z);
      case 3:
        return x ^ y ^ z;
    }
  }
  function ROTL(x, n) {
    return (x << n) | (x >>> (32 - n));
  }
  function sha1(bytes) {
    var K = [1518500249, 1859775393, 2400959708, 3395469782];
    var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof bytes === "string") {
      var msg = unescape(encodeURIComponent(bytes));
      bytes = [];
      for (var i = 0; i < msg.length; ++i) {
        bytes.push(msg.charCodeAt(i));
      }
    } else if (!Array.isArray(bytes)) {
      bytes = Array.prototype.slice.call(bytes);
    }
    bytes.push(128);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for (var _i = 0; _i < N; ++_i) {
      var arr = new Uint32Array(16);
      for (var j = 0; j < 16; ++j) {
        arr[j] =
          (bytes[_i * 64 + j * 4] << 24) |
          (bytes[_i * 64 + j * 4 + 1] << 16) |
          (bytes[_i * 64 + j * 4 + 2] << 8) |
          bytes[_i * 64 + j * 4 + 3];
      }
      M[_i] = arr;
    }
    M[N - 1][14] = ((bytes.length - 1) * 8) / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = ((bytes.length - 1) * 8) & 4294967295;
    for (var _i2 = 0; _i2 < N; ++_i2) {
      var W = new Uint32Array(80);
      for (var t = 0; t < 16; ++t) {
        W[t] = M[_i2][t];
      }
      for (var _t = 16; _t < 80; ++_t) {
        W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
      }
      var a = H[0];
      var b = H[1];
      var c = H[2];
      var d = H[3];
      var e = H[4];
      for (var _t2 = 0; _t2 < 80; ++_t2) {
        var s = Math.floor(_t2 / 20);
        var T = (ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2]) >>> 0;
        e = d;
        d = c;
        c = ROTL(b, 30) >>> 0;
        b = a;
        a = T;
      }
      H[0] = (H[0] + a) >>> 0;
      H[1] = (H[1] + b) >>> 0;
      H[2] = (H[2] + c) >>> 0;
      H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0;
    }
    return [
      (H[0] >> 24) & 255,
      (H[0] >> 16) & 255,
      (H[0] >> 8) & 255,
      H[0] & 255,
      (H[1] >> 24) & 255,
      (H[1] >> 16) & 255,
      (H[1] >> 8) & 255,
      H[1] & 255,
      (H[2] >> 24) & 255,
      (H[2] >> 16) & 255,
      (H[2] >> 8) & 255,
      H[2] & 255,
      (H[3] >> 24) & 255,
      (H[3] >> 16) & 255,
      (H[3] >> 8) & 255,
      H[3] & 255,
      (H[4] >> 24) & 255,
      (H[4] >> 16) & 255,
      (H[4] >> 8) & 255,
      H[4] & 255,
    ];
  }
  var sha1_default;
  var init_sha1 = __esm({
    "node_modules/uuid/dist/esm-browser/sha1.js"() {
      sha1_default = sha1;
    },
  });

  // node_modules/uuid/dist/esm-browser/v5.js
  var v5, v5_default;
  var init_v5 = __esm({
    "node_modules/uuid/dist/esm-browser/v5.js"() {
      init_v35();
      init_sha1();
      v5 = v35_default("v5", 80, sha1_default);
      v5_default = v5;
    },
  });

  // node_modules/uuid/dist/esm-browser/nil.js
  var nil_default;
  var init_nil = __esm({
    "node_modules/uuid/dist/esm-browser/nil.js"() {
      nil_default = "00000000-0000-0000-0000-000000000000";
    },
  });

  // node_modules/uuid/dist/esm-browser/version.js
  function version(uuid) {
    if (!validate_default(uuid)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(uuid.substr(14, 1), 16);
  }
  var version_default;
  var init_version = __esm({
    "node_modules/uuid/dist/esm-browser/version.js"() {
      init_validate();
      version_default = version;
    },
  });

  // node_modules/uuid/dist/esm-browser/index.js
  var esm_browser_exports = {};
  __export(esm_browser_exports, {
    NIL: () => nil_default,
    parse: () => parse_default,
    stringify: () => stringify_default,
    v1: () => v1_default,
    v3: () => v3_default,
    v4: () => v4_default,
    v5: () => v5_default,
    validate: () => validate_default,
    version: () => version_default,
  });
  var init_esm_browser = __esm({
    "node_modules/uuid/dist/esm-browser/index.js"() {
      init_v1();
      init_v3();
      init_v4();
      init_v5();
      init_nil();
      init_version();
      init_validate();
      init_stringify();
      init_parse();
    },
  });

  // dist/tsc/ftl/utils/index.js
  var require_utils = __commonJS({
    "dist/tsc/ftl/utils/index.js"(exports) {
      "use strict";
      var __awaiter =
        (exports && exports.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
      var __generator =
        (exports && exports.__generator) ||
        function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f2,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f2 = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.utils = void 0;
      var uuid_1 = (init_esm_browser(), __toCommonJS(esm_browser_exports));
      var as_1 = require_as();
      var hardware;
      var getHardwareName = function (force) {
        if (force === void 0) {
          force = false;
        }
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (hardware && !force) return [2, Promise.resolve(hardware)];
                return [4, (0, as_1.getDeviceInformation)()];
              case 1:
                result = _a.sent();
                switch (result.hardwareName.toLowerCase()) {
                  case "xi1":
                    hardware = "ALPACA";
                    break;
                  case "llama":
                    hardware = "LLAMA";
                    break;
                  default:
                    hardware = "DTH";
                    break;
                }
                return [2, hardware];
            }
          });
        });
      };
      var setHardwareName = function (name) {
        hardware = name;
      };
      var isSoIP = function (hardware2) {
        return hardware2 === "ALPACA" || hardware2 === "LLAMA";
      };
      var callback;
      var setCallback = function (cb) {
        callback = cb;
      };
      var doCallback = function (id, result) {
        var json = JSON.stringify({ jsonrpc: "2.0", id, result });
        return callback(json);
      };
      var getUUID = function (key) {
        return new Promise(function (resolve) {
          var value = localStorage.getItem(key);
          if (!value) {
            value = (0, uuid_1.v4)();
            localStorage.setItem(key, value);
            console.log('no stored value for "'.concat(key, '", generated "').concat(value, '"'));
          }
          resolve(value);
        });
      };
      var getError = function (message) {
        if (message === void 0) {
          message = "Not supported";
        }
        return {
          error: {
            code: -32601,
            message,
          },
        };
      };
      var listeners = {};
      var getActiveListenersByEventName = function (eventName) {
        var active = [];
        for (var _i = 0, _a = Object.entries(listeners); _i < _a.length; _i++) {
          var _b = _a[_i],
            key = _b[0],
            value = _b[1];
          if (value.eventName === eventName && value.listen) {
            active.push(value);
          }
        }
        return active;
      };
      var onListener = function (id, method, listen) {
        var eventName = method.split(".")[1].substr(2);
        eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
        listeners[id] = {
          id,
          method,
          eventName,
          listen,
        };
        return true;
      };
      var sendEvent = function (eventName, result) {
        var activeListeners = getActiveListenersByEventName(eventName);
        console.log(
          "%c[FTL] sendEvent",
          "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
          eventName,
          result
        );
        activeListeners.forEach(function (listener) {
          doCallback(listener.id, result);
        });
      };
      if (!window.wpeQuery) {
        console.log("window.wpeQuery not found");
        window.wpeQuery = function (args) {
          var request = args.request,
            onSuccess = args.onSuccess;
          switch (request) {
            case "firebolt.close.error":
            case "firebolt.close.remoteButton":
            case "firebolt.close.REMOTE_BUTTON":
            case "firebolt.close.userExit":
            case "firebolt.close.USER_EXIT":
              return onSuccess("unloading");
            case "firebolt.lifecycleState":
              return onSuccess("foreground");
            case "firebolt.launchMethod":
              return onSuccess("Local");
            case "firebolt.launchArgs":
              return onSuccess(
                btoa(
                  JSON.stringify({
                    version: "1",
                    durableAppId: "com.sky.all4",
                    action: "playback",
                    data: {
                      assetId: "XYZ123",
                      entityId: "ABC987",
                      seriesId: "ABC987",
                    },
                    context: {
                      source: "browse",
                    },
                  })
                )
              );
          }
        };
      }
      var wpeQuery = function (request) {
        return new Promise(function (resolve, reject) {
          window.wpeQuery({
            request,
            onSuccess: resolve,
            onFailure: function (err) {
              return reject(new Error(err));
            },
          });
        });
      };
      var getLifecycleState = function () {
        return wpeQuery("firebolt.lifecycleState")
          .then(function (state) {
            console.log(
              "%c[FTL] lifecycleState",
              "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
              state
            );
            return state;
          })
          .catch(function (e) {
            console.log("lifecycleState.onFailure", e);
            throw e;
          });
      };
      var getLaunchMethod = function () {
        return wpeQuery("firebolt.launchMethod")
          .then(function (method) {
            console.log(
              "%c[FTL] launchMethod",
              "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
              method
            );
            return method;
          })
          .catch(function (e) {
            console.log("launchMethod.onFailure", e);
            throw e;
          });
      };
      var getClose = function (reason) {
        return wpeQuery("firebolt.close.".concat(reason))
          .then(function () {
            console.log(
              "%c[FTL] getClose",
              "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
              reason
            );
            return reason;
          })
          .catch(function (e) {
            console.log("firebolt.close.onFailure", e);
            throw e;
          });
      };
      var parseLaunchArgs = function (b64Args) {
        try {
          var args = b64Args && b64Args.length > 1 ? atob(b64Args) : "{}";
          var json = JSON.parse(args);
          var launchArgs = json.args
            ? document.overrideLaunchArgs
              ? document.overrideLaunchArgs(json.args)
              : json.args
            : document.overrideLaunchArgs
            ? document.overrideLaunchArgs(json)
            : json;
          console.log(
            "%c[FTL] parseLaunchArgs",
            "color: white; background: orange; padding: 2px 4px; border-radius: 2px",
            launchArgs
          );
          return launchArgs;
        } catch (e) {
          console.log(
            "%c[FTL] parseLaunchArgs: INVALID",
            "color: white; background: orange; padding: 2px 4px; border-radius: 2px",
            b64Args
          );
          return {};
        }
      };
      var getLaunchArgs = function () {
        return wpeQuery("firebolt.launchArgs")
          .then(function (args) {
            var parsedArgs = parseLaunchArgs(args);
            console.log(
              "%c[FTL] getLaunchArgs",
              "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
              parsedArgs
            );
            return parsedArgs;
          })
          .catch(function (e) {
            console.log("getLaunchArgs.onFailure", e);
            throw e;
          });
      };
      exports.utils = {
        doCallback,
        getError,
        getHardwareName,
        setHardwareName,
        getUUID,
        isSoIP,
        onListener,
        sendEvent,
        setCallback,
        getClose,
        getLifecycleState,
        getLaunchMethod,
        getLaunchArgs,
        parseLaunchArgs,
      };
    },
  });

  // dist/tsc/ftl/advertising/advertisingId.js
  var require_advertisingId = __commonJS({
    "dist/tsc/ftl/advertising/advertisingId.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.advertisingId = void 0;
      var utils_1 = require_utils();
      var advertisingId = function (hardware) {
        if (utils_1.utils.isSoIP(hardware)) {
          return utils_1.utils.getUUID("advertisingID").then(function (ifa) {
            return {
              ifa,
              ifa_type: "idfa",
              lmt: "1",
            };
          });
        }
        return Promise.reject({});
      };
      exports.advertisingId = advertisingId;
    },
  });

  // dist/tsc/ftl/advertising/policy.js
  var require_policy = __commonJS({
    "dist/tsc/ftl/advertising/policy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.policy = void 0;
      var utils_1 = require_utils();
      var policy = function (hardware) {
        if (utils_1.utils.isSoIP(hardware)) {
          return Promise.resolve({ skipRestriction: "none" });
        }
        return Promise.reject({});
      };
      exports.policy = policy;
    },
  });

  // dist/tsc/ftl/advertising/index.js
  var require_advertising = __commonJS({
    "dist/tsc/ftl/advertising/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.advertising = void 0;
      var advertisingId_1 = require_advertisingId();
      var policy_1 = require_policy();
      exports.advertising = {
        advertisingId: advertisingId_1.advertisingId,
        policy: policy_1.policy,
      };
    },
  });

  // dist/tsc/ftl/device/audio.js
  var require_audio = __commonJS({
    "dist/tsc/ftl/device/audio.js"(exports) {
      "use strict";
      var __awaiter =
        (exports && exports.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
      var __generator =
        (exports && exports.__generator) ||
        function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f2,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f2 = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.audio = void 0;
      var as_1 = require_as();
      var audio = function (device) {
        return __awaiter(void 0, void 0, void 0, function () {
          var settings, hdmi, optical;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (device === "LLAMA") {
                  return [
                    2,
                    Promise.resolve({
                      dolbyAtmos: true,
                      dolbyDigital: true,
                      dolbyDigitalPlus: true,
                      stereo: true,
                    }),
                  ];
                }
                settings = {
                  stereo: true,
                  dolbyDigital: false,
                  dolbyDigitalPlus: false,
                  dolbyAtmos: false,
                };
                return [4, (0, as_1.getAudioSettingHDMIAudioFormat)()];
              case 1:
                hdmi = _a.sent();
                switch (hdmi.HDMIAudioFormat) {
                  case "Dolby Digital":
                    settings.dolbyDigital = true;
                    break;
                  case "Dolby Digital Plus":
                    settings.dolbyDigital = true;
                    settings.dolbyDigitalPlus = true;
                    break;
                  case "Dolby Atmos":
                    settings.dolbyAtmos = true;
                    settings.dolbyDigital = true;
                    settings.dolbyDigitalPlus = true;
                    break;
                  default:
                }
                if (device === "ALPACA") {
                  return [2, Promise.resolve(settings)];
                }
                return [4, (0, as_1.getAudioSettingOpticalAudioFormat)()];
              case 2:
                optical = _a.sent();
                switch (optical.OpticalAudioFormat) {
                  case "Dolby Digital":
                    settings.dolbyDigital = true;
                    break;
                  case "Dolby Digital Plus":
                    settings.dolbyDigital = true;
                    settings.dolbyDigitalPlus = true;
                    break;
                  case "Dolby Atmos":
                    settings.dolbyAtmos = true;
                    settings.dolbyDigital = true;
                    settings.dolbyDigitalPlus = true;
                    break;
                  default:
                }
                return [2, Promise.resolve(settings)];
            }
          });
        });
      };
      exports.audio = audio;
    },
  });

  // dist/tsc/ftl/device/hdcp.js
  var require_hdcp = __commonJS({
    "dist/tsc/ftl/device/hdcp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hdcp = void 0;
      var as_1 = require_as();
      var hdcp = function (hardware) {
        if (hardware === "LLAMA") {
          return Promise.resolve({ "hdcp1.4": true, "hdcp2.2": true });
        } else {
          return (0, as_1.getSystemHDMI)()
            .then(function (json) {
              return json.hdmi.authenticatedHDCP;
            })
            .then(function (authenticatedHDCP) {
              return {
                "hdcp1.4": authenticatedHDCP === "1.4",
                "hdcp2.2": authenticatedHDCP === "2.2",
              };
            });
        }
      };
      exports.hdcp = hdcp;
    },
  });

  // dist/tsc/ftl/device/hdr.js
  var require_hdr = __commonJS({
    "dist/tsc/ftl/device/hdr.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hdr = void 0;
      var as_1 = require_as();
      var hdr = function (device) {
        if (device === "LLAMA") {
          return Promise.resolve({
            hdr10: true,
            hdr10Plus: false,
            dolbyVision: true,
            hlg: true,
          });
        } else {
          var data_1;
          return (0, as_1.getDisplaySettingResolution)()
            .then(function (json) {
              return (data_1 = json);
            })
            .then(function () {
              return (0, as_1.getSystemHDMI)();
            })
            .then(function (json) {
              var _a = json.hdmi,
                sinkHLG = _a.sinkHLG,
                authenticatedHDCP = _a.authenticatedHDCP;
              var is2160p10bitCapable = json.hdmi["2160p10bitCapable"];
              var isAuthenticatedHDCP = authenticatedHDCP === "2.2";
              var isResolutionValid = data_1.resolution.indexOf("2160p") !== -1;
              var isSupported = sinkHLG && is2160p10bitCapable && isAuthenticatedHDCP && isResolutionValid;
              return {
                hdr10: isSupported,
                hdr10Plus: false,
                dolbyVision: false,
                hlg: isSupported,
              };
            });
        }
      };
      exports.hdr = hdr;
    },
  });

  // dist/tsc/ftl/device/model.js
  var require_model = __commonJS({
    "dist/tsc/ftl/device/model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.model = void 0;
      var as_1 = require_as();
      var model = function () {
        return (0, as_1.getDeviceInformation)().then(function (json) {
          return json.modelNumber;
        });
      };
      exports.model = model;
    },
  });

  // dist/tsc/ftl/device/network.js
  var require_network = __commonJS({
    "dist/tsc/ftl/device/network.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.network = void 0;
      var network = function () {
        return Promise.resolve({
          state: "Connected",
          type: "WIFI",
        });
      };
      exports.network = network;
    },
  });

  // dist/tsc/ftl/device/distributor.js
  var require_distributor = __commonJS({
    "dist/tsc/ftl/device/distributor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.distributor = void 0;
      var distributor = function () {
        return Promise.resolve("Sky");
      };
      exports.distributor = distributor;
    },
  });

  // dist/tsc/ftl/device/platform.js
  var require_platform = __commonJS({
    "dist/tsc/ftl/device/platform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.platform = void 0;
      var utils_1 = require_utils();
      var platform = function (hardware) {
        if (utils_1.utils.isSoIP(hardware)) {
          return Promise.resolve("SoIP");
        }
        return Promise.resolve("Sky Q");
      };
      exports.platform = platform;
    },
  });

  // dist/tsc/ftl/device/screenResolution.js
  var require_screenResolution = __commonJS({
    "dist/tsc/ftl/device/screenResolution.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.screenResolution = void 0;
      var as_1 = require_as();
      var screenResolution = function (device) {
        if (device === "LLAMA") {
          return Promise.resolve([3840, 2160]);
        } else {
          return (0, as_1.getDisplaySettingResolution)()
            .then(function (json) {
              return json.resolution;
            })
            .then(function (resolution) {
              if (resolution.startsWith("576")) return [1024, 576];
              if (resolution.startsWith("720")) return [1208, 720];
              if (resolution.startsWith("1080")) return [1920, 1080];
              if (resolution.startsWith("2160")) return [3840, 2160];
            });
        }
      };
      exports.screenResolution = screenResolution;
    },
  });

  // dist/tsc/ftl/device/type.js
  var require_type = __commonJS({
    "dist/tsc/ftl/device/type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.type = void 0;
      var type = function (hardware) {
        return Promise.resolve(hardware === "LLAMA" ? "TV" : "STB");
      };
      exports.type = type;
    },
  });

  // dist/tsc/ftl/device/uid.js
  var require_uid = __commonJS({
    "dist/tsc/ftl/device/uid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uid = void 0;
      var utils_1 = require_utils();
      var uid = function () {
        return utils_1.utils.getUUID("deviceID");
      };
      exports.uid = uid;
    },
  });

  // dist/tsc/ftl/device/version.js
  var require_version = __commonJS({
    "dist/tsc/ftl/device/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.version = void 0;
      var version2 = function () {
        return Promise.resolve({
          sdk: {
            major: 0,
            minor: 1,
            patch: 0,
            readable: "Firebolt JS SDK v1.0.0",
          },
          os: {
            major: 0,
            minor: 1,
            patch: 0,
            readable: "Firebolt OS v1.0.0",
          },
          debug: "",
        });
      };
      exports.version = version2;
    },
  });

  // dist/tsc/ftl/device/videoResolution.js
  var require_videoResolution = __commonJS({
    "dist/tsc/ftl/device/videoResolution.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.videoResolution = void 0;
      var as_1 = require_as();
      var videoResolution = function (device) {
        if (device === "LLAMA") {
          return Promise.resolve([3840, 2160]);
        } else {
          var data_1;
          return (0, as_1.getDisplaySettingResolution)()
            .then(function (json) {
              return (data_1 = json);
            })
            .then(function () {
              return (0, as_1.getSystemHDMI)();
            })
            .then(function (json) {
              var _a = json.hdmi,
                uhdConfigured = _a.uhdConfigured,
                authenticatedHDCP = _a.authenticatedHDCP;
              var isAuthenticatedHDCP = authenticatedHDCP === "2.2";
              var is2160 = data_1.resolution.indexOf("2160") !== -1;
              var isUHD = uhdConfigured && isAuthenticatedHDCP && is2160;
              return isUHD ? [3840, 2160] : [1920, 1080];
            });
        }
      };
      exports.videoResolution = videoResolution;
    },
  });

  // dist/tsc/ftl/device/index.js
  var require_device = __commonJS({
    "dist/tsc/ftl/device/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.device = void 0;
      var audio_1 = require_audio();
      var hdcp_1 = require_hdcp();
      var hdr_1 = require_hdr();
      var model_1 = require_model();
      var network_1 = require_network();
      var distributor_1 = require_distributor();
      var platform_1 = require_platform();
      var screenResolution_1 = require_screenResolution();
      var type_1 = require_type();
      var uid_1 = require_uid();
      var version_1 = require_version();
      var videoResolution_1 = require_videoResolution();
      exports.device = {
        audio: audio_1.audio,
        hdcp: hdcp_1.hdcp,
        hdr: hdr_1.hdr,
        model: model_1.model,
        network: network_1.network,
        distributor: distributor_1.distributor,
        platform: platform_1.platform,
        screenResolution: screenResolution_1.screenResolution,
        type: type_1.type,
        uid: uid_1.uid,
        version: version_1.version,
        videoResolution: videoResolution_1.videoResolution,
      };
    },
  });

  // dist/tsc/ftl/discovery/entitlements.js
  var require_entitlements = __commonJS({
    "dist/tsc/ftl/discovery/entitlements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.entitlements = void 0;
      var entitlements = function () {
        return Promise.resolve(true);
      };
      exports.entitlements = entitlements;
    },
  });

  // dist/tsc/ftl/discovery/launch.js
  var require_launch = __commonJS({
    "dist/tsc/ftl/discovery/launch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.launch = void 0;
      var launch = function () {
        return Promise.resolve(true);
      };
      exports.launch = launch;
    },
  });

  // dist/tsc/ftl/discovery/watched.js
  var require_watched = __commonJS({
    "dist/tsc/ftl/discovery/watched.js"(exports) {
      "use strict";
      var __awaiter =
        (exports && exports.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
      var __generator =
        (exports && exports.__generator) ||
        function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f2,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f2 = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.watched = void 0;
      var as_1 = require_as();
      var utils_1 = require_utils();
      var _appId;
      var watched = function (device, params) {
        return __awaiter(void 0, void 0, void 0, function () {
          var durableAppId, reqData;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!utils_1.utils.isSoIP(device)) {
                  return [2, Promise.resolve()];
                }
                if (_appId) return [3, 2];
                return [4, utils_1.utils.getLaunchArgs()];
              case 1:
                durableAppId = _a.sent().durableAppId;
                _appId = durableAppId;
                _a.label = 2;
              case 2:
                console.log(
                  "discovery.watched - App ID: ".concat(_appId, " - Params: ").concat(JSON.stringify(params))
                );
                reqData = {
                  appId: _appId,
                  assetId: params.entityId,
                  streamPosition: params.progress,
                  completed: !!params.completed,
                };
                return [
                  2,
                  (0, as_1.postOttResumePoints)(reqData)
                    .then(function () {
                      return true;
                    })
                    .catch(function () {
                      return false;
                    }),
                ];
            }
          });
        });
      };
      exports.watched = watched;
    },
  });

  // dist/tsc/ftl/discovery/watchNext.js
  var require_watchNext = __commonJS({
    "dist/tsc/ftl/discovery/watchNext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.watchNext = void 0;
      var watchNext = function () {
        return Promise.resolve(true);
      };
      exports.watchNext = watchNext;
    },
  });

  // dist/tsc/ftl/discovery/index.js
  var require_discovery = __commonJS({
    "dist/tsc/ftl/discovery/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.discovery = void 0;
      var entitlements_1 = require_entitlements();
      var launch_1 = require_launch();
      var watched_1 = require_watched();
      var watchNext_1 = require_watchNext();
      exports.discovery = {
        entitlements: entitlements_1.entitlements,
        launch: launch_1.launch,
        watched: watched_1.watched,
        watchNext: watchNext_1.watchNext,
      };
    },
  });

  // ../../node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    },
  });

  // ../../node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../../node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }
      module.exports = eq;
    },
  });

  // ../../node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    },
  });

  // ../../node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    },
  });

  // ../../node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    },
  });

  // ../../node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    },
  });

  // ../../node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__,
          index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    },
  });

  // ../../node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../../node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    },
  });

  // ../../node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../../node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    },
  });

  // ../../node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../../node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__,
          result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    },
  });

  // ../../node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../../node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    },
  });

  // ../../node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../../node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    },
  });

  // ../../node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    },
  });

  // ../../node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../../node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    },
  });

  // ../../node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../../node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    },
  });

  // ../../node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../../node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    },
  });

  // ../../node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../../node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    },
  });

  // ../../node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    },
  });

  // ../../node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../../node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    },
  });

  // ../../node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../../node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    },
  });

  // ../../node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../../node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    },
  });

  // ../../node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../../node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = (function () {
        var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    },
  });

  // ../../node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../../node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return func + "";
          } catch (e) {}
        }
        return "";
      }
      module.exports = toSource;
    },
  });

  // ../../node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" +
          funcToString
            .call(hasOwnProperty)
            .replace(reRegExpChar, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    },
  });

  // ../../node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../../node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    },
  });

  // ../../node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../../node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    },
  });

  // ../../node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../../node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map = getNative(root, "Map");
      module.exports = Map;
    },
  });

  // ../../node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    },
  });

  // ../../node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../../node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    },
  });

  // ../../node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../../node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    },
  });

  // ../../node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../../node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    },
  });

  // ../../node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../../node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    },
  });

  // ../../node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../../node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    },
  });

  // ../../node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../../node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    },
  });

  // ../../node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash(),
          map: new (Map || ListCache)(),
          string: new Hash(),
        };
      }
      module.exports = mapCacheClear;
    },
  });

  // ../../node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../../node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean"
          ? value !== "__proto__"
          : value === null;
      }
      module.exports = isKeyable;
    },
  });

  // ../../node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../../node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    },
  });

  // ../../node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    },
  });

  // ../../node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    },
  });

  // ../../node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    },
  });

  // ../../node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
          size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    },
  });

  // ../../node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../../node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    },
  });

  // ../../node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../../node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    },
  });

  // ../../node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../../node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = (this.__data__ = new ListCache(entries));
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    },
  });

  // ../../node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "../../node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1,
          length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    },
  });

  // ../../node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../../node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = (function () {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {}
      })();
      module.exports = defineProperty;
    },
  });

  // ../../node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../../node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true,
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    },
  });

  // ../../node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../../node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === void 0 && !(key in object))) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    },
  });

  // ../../node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "../../node_modules/lodash/_copyObject.js"(exports, module) {
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1,
          length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      module.exports = copyObject;
    },
  });

  // ../../node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../../node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1,
          result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    },
  });

  // ../../node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../../node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    },
  });

  // ../../node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    },
  });

  // ../../node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../../node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(
        (function () {
          return arguments;
        })()
      )
        ? baseIsArguments
        : function (value) {
            return (
              isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee")
            );
          };
      module.exports = isArguments;
    },
  });

  // ../../node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../../node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    },
  });

  // ../../node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../../node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    },
  });

  // ../../node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../../node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    },
  });

  // ../../node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../../node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return (
          !!length &&
          (type == "number" || (type != "symbol" && reIsUint.test(value))) &&
          value > -1 &&
          value % 1 == 0 &&
          value < length
        );
      }
      module.exports = isIndex;
    },
  });

  // ../../node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../../node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    },
  });

  // ../../node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] =
        typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] =
        typedArrayTags[int16Tag] =
        typedArrayTags[int32Tag] =
        typedArrayTags[uint8Tag] =
        typedArrayTags[uint8ClampedTag] =
        typedArrayTags[uint16Tag] =
        typedArrayTags[uint32Tag] =
          true;
      typedArrayTags[argsTag] =
        typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] =
        typedArrayTags[boolTag] =
        typedArrayTags[dataViewTag] =
        typedArrayTags[dateTag] =
        typedArrayTags[errorTag] =
        typedArrayTags[funcTag] =
        typedArrayTags[mapTag] =
        typedArrayTags[numberTag] =
        typedArrayTags[objectTag] =
        typedArrayTags[regexpTag] =
        typedArrayTags[setTag] =
        typedArrayTags[stringTag] =
        typedArrayTags[weakMapTag] =
          false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    },
  });

  // ../../node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../../node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    },
  });

  // ../../node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function () {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {}
      })();
      module.exports = nodeUtil;
    },
  });

  // ../../node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../../node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    },
  });

  // ../../node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;
        for (var key in value) {
          if (
            (inherited || hasOwnProperty.call(value, key)) &&
            !(
              skipIndexes &&
              (key == "length" ||
                (isBuff && (key == "offset" || key == "parent")) ||
                (isType && (key == "buffer" || key == "byteLength" || key == "byteOffset")) ||
                isIndex(key, length))
            )
          ) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    },
  });

  // ../../node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../../node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor,
          proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    },
  });

  // ../../node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../../node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    },
  });

  // ../../node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    },
  });

  // ../../node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../../node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    },
  });

  // ../../node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../../node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    },
  });

  // ../../node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../../node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    },
  });

  // ../../node_modules/lodash/_baseAssign.js
  var require_baseAssign = __commonJS({
    "../../node_modules/lodash/_baseAssign.js"(exports, module) {
      var copyObject = require_copyObject();
      var keys = require_keys();
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      module.exports = baseAssign;
    },
  });

  // ../../node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "../../node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    },
  });

  // ../../node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "../../node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object),
          result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    },
  });

  // ../../node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "../../node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    },
  });

  // ../../node_modules/lodash/_baseAssignIn.js
  var require_baseAssignIn = __commonJS({
    "../../node_modules/lodash/_baseAssignIn.js"(exports, module) {
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      module.exports = baseAssignIn;
    },
  });

  // ../../node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "../../node_modules/lodash/_cloneBuffer.js"(exports, module) {
      var root = require_root();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module.exports = cloneBuffer;
    },
  });

  // ../../node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "../../node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1,
          length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    },
  });

  // ../../node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    },
  });

  // ../../node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../../node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    },
  });

  // ../../node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../../node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols
        ? stubArray
        : function (object) {
            if (object == null) {
              return [];
            }
            object = Object(object);
            return arrayFilter(nativeGetSymbols(object), function (symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
      module.exports = getSymbols;
    },
  });

  // ../../node_modules/lodash/_copySymbols.js
  var require_copySymbols = __commonJS({
    "../../node_modules/lodash/_copySymbols.js"(exports, module) {
      var copyObject = require_copyObject();
      var getSymbols = require_getSymbols();
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      module.exports = copySymbols;
    },
  });

  // ../../node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../../node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1,
          length = values.length,
          offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    },
  });

  // ../../node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "../../node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    },
  });

  // ../../node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "../../node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols
        ? stubArray
        : function (object) {
            var result = [];
            while (object) {
              arrayPush(result, getSymbols(object));
              object = getPrototype(object);
            }
            return result;
          };
      module.exports = getSymbolsIn;
    },
  });

  // ../../node_modules/lodash/_copySymbolsIn.js
  var require_copySymbolsIn = __commonJS({
    "../../node_modules/lodash/_copySymbolsIn.js"(exports, module) {
      var copyObject = require_copyObject();
      var getSymbolsIn = require_getSymbolsIn();
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      module.exports = copySymbolsIn;
    },
  });

  // ../../node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    },
  });

  // ../../node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    },
  });

  // ../../node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "../../node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    },
  });

  // ../../node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../../node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    },
  });

  // ../../node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../../node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    },
  });

  // ../../node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../../node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module.exports = Set;
    },
  });

  // ../../node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../../node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    },
  });

  // ../../node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../../node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (
        (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map()) != mapTag) ||
        (Promise2 && getTag(Promise2.resolve()) != promiseTag) ||
        (Set && getTag(new Set()) != setTag) ||
        (WeakMap2 && getTag(new WeakMap2()) != weakMapTag)
      ) {
        getTag = function (value) {
          var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : void 0,
            ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    },
  });

  // ../../node_modules/lodash/_initCloneArray.js
  var require_initCloneArray = __commonJS({
    "../../node_modules/lodash/_initCloneArray.js"(exports, module) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length,
          result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      module.exports = initCloneArray;
    },
  });

  // ../../node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    },
  });

  // ../../node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "../../node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
      var Uint8Array2 = require_Uint8Array();
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      module.exports = cloneArrayBuffer;
    },
  });

  // ../../node_modules/lodash/_cloneDataView.js
  var require_cloneDataView = __commonJS({
    "../../node_modules/lodash/_cloneDataView.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      module.exports = cloneDataView;
    },
  });

  // ../../node_modules/lodash/_cloneRegExp.js
  var require_cloneRegExp = __commonJS({
    "../../node_modules/lodash/_cloneRegExp.js"(exports, module) {
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      module.exports = cloneRegExp;
    },
  });

  // ../../node_modules/lodash/_cloneSymbol.js
  var require_cloneSymbol = __commonJS({
    "../../node_modules/lodash/_cloneSymbol.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      module.exports = cloneSymbol;
    },
  });

  // ../../node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "../../node_modules/lodash/_cloneTypedArray.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module.exports = cloneTypedArray;
    },
  });

  // ../../node_modules/lodash/_initCloneByTag.js
  var require_initCloneByTag = __commonJS({
    "../../node_modules/lodash/_initCloneByTag.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      var cloneDataView = require_cloneDataView();
      var cloneRegExp = require_cloneRegExp();
      var cloneSymbol = require_cloneSymbol();
      var cloneTypedArray = require_cloneTypedArray();
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      module.exports = initCloneByTag;
    },
  });

  // ../../node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "../../node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = (function () {
        function object() {}
        return function (proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      })();
      module.exports = baseCreate;
    },
  });

  // ../../node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "../../node_modules/lodash/_initCloneObject.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var getPrototype = require_getPrototype();
      var isPrototype = require_isPrototype();
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      module.exports = initCloneObject;
    },
  });

  // ../../node_modules/lodash/_baseIsMap.js
  var require_baseIsMap = __commonJS({
    "../../node_modules/lodash/_baseIsMap.js"(exports, module) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var mapTag = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      module.exports = baseIsMap;
    },
  });

  // ../../node_modules/lodash/isMap.js
  var require_isMap = __commonJS({
    "../../node_modules/lodash/isMap.js"(exports, module) {
      var baseIsMap = require_baseIsMap();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      module.exports = isMap;
    },
  });

  // ../../node_modules/lodash/_baseIsSet.js
  var require_baseIsSet = __commonJS({
    "../../node_modules/lodash/_baseIsSet.js"(exports, module) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var setTag = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      module.exports = baseIsSet;
    },
  });

  // ../../node_modules/lodash/isSet.js
  var require_isSet = __commonJS({
    "../../node_modules/lodash/isSet.js"(exports, module) {
      var baseIsSet = require_baseIsSet();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      module.exports = isSet;
    },
  });

  // ../../node_modules/lodash/_baseClone.js
  var require_baseClone = __commonJS({
    "../../node_modules/lodash/_baseClone.js"(exports, module) {
      var Stack = require_Stack();
      var arrayEach = require_arrayEach();
      var assignValue = require_assignValue();
      var baseAssign = require_baseAssign();
      var baseAssignIn = require_baseAssignIn();
      var cloneBuffer = require_cloneBuffer();
      var copyArray = require_copyArray();
      var copySymbols = require_copySymbols();
      var copySymbolsIn = require_copySymbolsIn();
      var getAllKeys = require_getAllKeys();
      var getAllKeysIn = require_getAllKeysIn();
      var getTag = require_getTag();
      var initCloneArray = require_initCloneArray();
      var initCloneByTag = require_initCloneByTag();
      var initCloneObject = require_initCloneObject();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isMap = require_isMap();
      var isObject = require_isObject();
      var isSet = require_isSet();
      var keys = require_keys();
      var keysIn = require_keysIn();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_FLAT_FLAG = 2;
      var CLONE_SYMBOLS_FLAG = 4;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag] =
        cloneableTags[arrayTag] =
        cloneableTags[arrayBufferTag] =
        cloneableTags[dataViewTag] =
        cloneableTags[boolTag] =
        cloneableTags[dateTag] =
        cloneableTags[float32Tag] =
        cloneableTags[float64Tag] =
        cloneableTags[int8Tag] =
        cloneableTags[int16Tag] =
        cloneableTags[int32Tag] =
        cloneableTags[mapTag] =
        cloneableTags[numberTag] =
        cloneableTags[objectTag] =
        cloneableTags[regexpTag] =
        cloneableTags[setTag] =
        cloneableTags[stringTag] =
        cloneableTags[symbolTag] =
        cloneableTags[uint8Tag] =
        cloneableTags[uint8ClampedTag] =
        cloneableTags[uint16Tag] =
        cloneableTags[uint32Tag] =
          true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat
                ? copySymbolsIn(value, baseAssignIn(result, value))
                : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet(value)) {
          value.forEach(function (subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function (subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : isFlat ? keysIn : keys;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach(props || value, function (subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      module.exports = baseClone;
    },
  });

  // ../../node_modules/lodash/cloneDeep.js
  var require_cloneDeep = __commonJS({
    "../../node_modules/lodash/cloneDeep.js"(exports, module) {
      var baseClone = require_baseClone();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_SYMBOLS_FLAG = 4;
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      module.exports = cloneDeep;
    },
  });

  // ../../node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    },
  });

  // ../../node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    },
  });

  // ../../node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../../node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1,
          length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    },
  });

  // ../../node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../../node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1,
          length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    },
  });

  // ../../node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../../node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    },
  });

  // ../../node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../../node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1,
          result = true,
          seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index],
            othValue = other[index];
          if (customizer) {
            var compared = isPartial
              ? customizer(othValue, arrValue, index, other, array, stack)
              : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (
              !arraySome(other, function (othValue2, othIndex) {
                if (
                  !cacheHas(seen, othIndex) &&
                  (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))
                ) {
                  return seen.push(othIndex);
                }
              })
            ) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    },
  });

  // ../../node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../../node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1,
          result = Array(map.size);
        map.forEach(function (value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    },
  });

  // ../../node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../../node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set) {
        var index = -1,
          result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    },
  });

  // ../../node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../../node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    },
  });

  // ../../node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../../node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key],
            othValue = other[key];
          if (customizer) {
            var compared = isPartial
              ? customizer(othValue, objValue, key, other, object, stack)
              : customizer(objValue, othValue, key, object, other, stack);
          }
          if (
            !(compared === void 0
              ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)
              : compared)
          ) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor,
            othCtor = other.constructor;
          if (
            objCtor != othCtor &&
            "constructor" in object &&
            "constructor" in other &&
            !(
              typeof objCtor == "function" &&
              objCtor instanceof objCtor &&
              typeof othCtor == "function" &&
              othCtor instanceof othCtor
            )
          ) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    },
  });

  // ../../node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object)
            ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
            : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    },
  });

  // ../../node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    },
  });

  // ../../node_modules/lodash/isEqual.js
  var require_isEqual = __commonJS({
    "../../node_modules/lodash/isEqual.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      module.exports = isEqual;
    },
  });

  // dist/tsc/ftl/lifecycle/index.js
  var require_lifecycle = __commonJS({
    "dist/tsc/ftl/lifecycle/index.js"(exports) {
      "use strict";
      var __importDefault =
        (exports && exports.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.lifecycle = void 0;
      var utils_1 = require_utils();
      var cloneDeep_1 = __importDefault(require_cloneDeep());
      var isEqual_1 = __importDefault(require_isEqual());
      var prevLaunchArgs = {};
      var prevState = "inactive";
      window.addEventListener(
        "firebolt.lifecycleStateChange",
        function (event) {
          var detail = event.detail;
          console.log("firebolt.lifecycleStateChange", detail);
          var oldState = detail.oldState;
          prevState = oldState;
          var newState = detail.newState;
          var launchArgs = utils_1.utils.parseLaunchArgs(detail.launchArgs);
          var changed = !(0, isEqual_1.default)(launchArgs, prevLaunchArgs);
          console.log(
            "%c[FTL] firebolt.lifecycleStateChange",
            "color: white; background: blue; padding: 2px 4px; border-radius: 2px",
            oldState,
            newState,
            launchArgs,
            changed,
            detail
          );
          prevLaunchArgs = (0, cloneDeep_1.default)(launchArgs);
          utils_1.utils.sendEvent(newState, { state: newState, previous: oldState });
        },
        false
      );
      var prevLaunchDetails = {};
      window.addEventListener(
        "firebolt.launchDetailsChange",
        function (event) {
          var detail = event.detail;
          var changed = !(0, isEqual_1.default)(detail, prevLaunchDetails);
          console.log(
            "%c[FTL] firebolt.launchDetailsChange",
            "color: white; background: blue; padding: 2px 4px; border-radius: 2px",
            detail,
            "Changed",
            changed,
            prevLaunchDetails
          );
          if (changed) {
            var launchArgs = utils_1.utils.parseLaunchArgs(detail.launchArgs);
            utils_1.utils.sendEvent("navigateTo", launchArgs);
          }
          prevLaunchDetails = (0, cloneDeep_1.default)(detail);
        },
        false
      );
      exports.lifecycle = {
        ready: function (device) {
          if (utils_1.utils.isSoIP(device)) {
            var currState_1 = "foreground";
            return utils_1.utils
              .getLifecycleState()
              .then(function (state) {
                return (currState_1 = state);
              })
              .then(function () {
                return utils_1.utils.getLaunchArgs();
              })
              .then(function (launchArgs) {
                if (currState_1 === "foreground" || currState_1 === "background") {
                  utils_1.utils.sendEvent("navigateTo", launchArgs);
                }
              })
              .catch(function (e) {
                return console.log("lifecycle.ready", e);
              })
              .then(function () {
                console.log("lifecycle.ready update", currState_1);
                utils_1.utils.sendEvent(currState_1, { state: currState_1, previous: prevState });
              });
          } else {
            console.log("lifecycle.ready sendEvent force to foreground");
            utils_1.utils.sendEvent("foreground", { state: "foreground", previous: prevState });
            return Promise.resolve();
          }
        },
        close: function (device, args) {
          var reason = args.reason;
          var reasonSdk = reason == "userExit" ? "USER_EXIT" : reason == "remoteButton" ? "REMOTE_BUTTON" : reason;
          console.log("lifecycle.close event", reason, "mapped to", reasonSdk);
          if (utils_1.utils.isSoIP(device)) {
            return utils_1.utils
              .getClose(reasonSdk)
              .then(function (ftlReason) {
                return console.log("lifecycle.closed!", ftlReason);
              })
              .catch(function (e) {
                return console.log("lifecycle.close", e);
              });
          } else {
            console.log("lifecycle.close calling window.close()");
            window.close();
            console.log("lifecycle.close window.closed");
            return Promise.resolve();
          }
        },
        finished: function () {},
      };
    },
  });

  // dist/tsc/ftl/localization/countryCode.js
  var require_countryCode = __commonJS({
    "dist/tsc/ftl/localization/countryCode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.countryCode = void 0;
      var as_1 = require_as();
      var countryCode = function () {
        return (0, as_1.getDeviceInformation)().then(function (json) {
          switch (json.countryCode) {
            case "GBR":
              return "UK";
            case "IRL":
              return "IE";
            case "ITA":
              return "IT";
            case "DEU":
              return "DE";
          }
        });
      };
      exports.countryCode = countryCode;
    },
  });

  // dist/tsc/ftl/localization/language.js
  var require_language = __commonJS({
    "dist/tsc/ftl/localization/language.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.language = void 0;
      var as_1 = require_as();
      var language = function () {
        return (0, as_1.getDeviceInformation)().then(function (json) {
          switch (json.countryCode) {
            case "GBR":
            case "IRL":
              return "en";
            case "ITA":
              return "it";
            case "DEU":
              return "de";
          }
        });
      };
      exports.language = language;
    },
  });

  // dist/tsc/ftl/localization/locale.js
  var require_locale = __commonJS({
    "dist/tsc/ftl/localization/locale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.locale = void 0;
      var countryCode_1 = require_countryCode();
      var language_1 = require_language();
      var locale = function () {
        return Promise.all([(0, language_1.language)(), (0, countryCode_1.countryCode)()]).then(function (data) {
          return "".concat(data[0], "-").concat(data[1]);
        });
      };
      exports.locale = locale;
    },
  });

  // dist/tsc/ftl/localization/additionalInfo.js
  var require_additionalInfo = __commonJS({
    "dist/tsc/ftl/localization/additionalInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.additionalInfo = void 0;
      var as_1 = require_as();
      var additionalInfo = function () {
        return (0, as_1.getDeviceInformation)().then(function (json) {
          return { subBouquet: json.subbouquet };
        });
      };
      exports.additionalInfo = additionalInfo;
    },
  });

  // dist/tsc/ftl/localization/index.js
  var require_localization = __commonJS({
    "dist/tsc/ftl/localization/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.localization = void 0;
      var countryCode_1 = require_countryCode();
      var language_1 = require_language();
      var locale_1 = require_locale();
      var additionalInfo_1 = require_additionalInfo();
      exports.localization = {
        countryCode: countryCode_1.countryCode,
        language: language_1.language,
        locale: locale_1.locale,
        additionalInfo: additionalInfo_1.additionalInfo,
      };
    },
  });

  // dist/tsc/ftl/metrics/sendMetric.js
  var require_sendMetric = __commonJS({
    "dist/tsc/ftl/metrics/sendMetric.js"(exports) {
      "use strict";
      var __awaiter =
        (exports && exports.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
      var __generator =
        (exports && exports.__generator) ||
        function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f2,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f2 = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sendMetric = void 0;
      var as_1 = require_as();
      var utils_1 = require_utils();
      var admittedEvents = ["mediaPlay", "mediaEnded", "mediaProgress"];
      var _localStoredEntityId = "";
      var _localStoredProgress;
      var _appId;
      var sendMetric = function (device, params) {
        return __awaiter(void 0, void 0, void 0, function () {
          var ottReqs, durableAppId;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                console.log(
                  "%c[FTL] sendMetric",
                  "color: white; background: green; padding: 2px 4px; border-radius: 2px",
                  params
                );
                if (!(params.event && admittedEvents.includes(params.event))) return [3, 3];
                ottReqs = [];
                if (_appId) return [3, 2];
                return [4, utils_1.utils.getLaunchArgs()];
              case 1:
                durableAppId = _a.sent().durableAppId;
                _appId = durableAppId;
                _a.label = 2;
              case 2:
                if (_localStoredEntityId !== params.entityId) {
                  if (_localStoredEntityId !== "") {
                    console.log(
                      "metrics."
                        .concat(params.event, " - Previous : App ID: ")
                        .concat(_appId, " - EntityId: ")
                        .concat(_localStoredEntityId, ", Progress: ")
                        .concat(_localStoredProgress)
                    );
                    ottReqs.push(
                      (0, as_1.postOttResumePoints)({
                        appId: _appId,
                        assetId: _localStoredEntityId,
                        streamPosition: _localStoredProgress,
                      })
                    );
                  }
                  _localStoredEntityId = params.entityId;
                  _localStoredProgress = void 0;
                }
                if (params.event === "mediaProgress") {
                  _localStoredProgress = params.progress;
                }
                console.log(
                  "metrics."
                    .concat(params.event, " - App ID: ")
                    .concat(_appId, " - EntityId: ")
                    .concat(params.entityId, ", Progress: ")
                    .concat(params.progress)
                );
                ottReqs.push(
                  (0, as_1.postOttResumePoints)({
                    appId: _appId,
                    assetId: params.entityId,
                    streamPosition: params.progress,
                  })
                );
                return [
                  2,
                  Promise.all(ottReqs)
                    .then(function () {
                      return true;
                    })
                    .catch(function () {
                      return false;
                    }),
                ];
              case 3:
                return [2, Promise.resolve(false)];
            }
          });
        });
      };
      exports.sendMetric = sendMetric;
    },
  });

  // dist/tsc/ftl/metrics/index.js
  var require_metrics = __commonJS({
    "dist/tsc/ftl/metrics/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.metrics = void 0;
      var sendMetric_1 = require_sendMetric();
      exports.metrics = {
        sendMetric: sendMetric_1.sendMetric,
      };
    },
  });

  // dist/tsc/ftl/index.js
  var require_ftl = __commonJS({
    "dist/tsc/ftl/index.js"(exports) {
      "use strict";
      var __awaiter =
        (exports && exports.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
      var __generator =
        (exports && exports.__generator) ||
        function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f2,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f2 = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FTL = void 0;
      var accessibility_1 = require_accessibility();
      var advertising_1 = require_advertising();
      var device_1 = require_device();
      var discovery_1 = require_discovery();
      var lifecycle_1 = require_lifecycle();
      var localization_1 = require_localization();
      var metrics_1 = require_metrics();
      var utils_1 = require_utils();
      exports.FTL = {
        send: function (msg) {
          return __awaiter(void 0, void 0, void 0, function () {
            var _a, id, method, params, _b, moduleMethod, listen, isSupported, req, hardware, result, error_1;
            return __generator(this, function (_c) {
              switch (_c.label) {
                case 0:
                  (_a = JSON.parse(msg)), (id = _a.id), (method = _a.method), (params = _a.params);
                  console.log(
                    "%c[FTL] send",
                    "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
                    method,
                    params
                  );
                  (_b = method.split(".")), (moduleMethod = _b[1]);
                  if (moduleMethod && moduleMethod.match(/^on[A-Z]/)) {
                    listen = params.listen;
                    isSupported = utils_1.utils.onListener(id, method, listen);
                    if (isSupported) {
                      return [
                        2,
                        utils_1.utils.doCallback(id, {
                          event: method,
                          listening: true,
                        }),
                      ];
                    } else {
                      return [2, utils_1.utils.doCallback(id, utils_1.utils.getError())];
                    }
                  }
                  switch (method) {
                    case "advertising.policy":
                      req = advertising_1.advertising.policy;
                      break;
                    case "advertising.advertisingId":
                      req = advertising_1.advertising.advertisingId;
                      break;
                    case "device.platform":
                      req = device_1.device.platform;
                      break;
                    case "device.distributor":
                      req = device_1.device.distributor;
                      break;
                    case "device.uid":
                      req = device_1.device.uid;
                      break;
                    case "device.type":
                      req = device_1.device.type;
                      break;
                    case "device.model":
                      req = device_1.device.model;
                      break;
                    case "device.version":
                      req = device_1.device.version;
                      break;
                    case "device.hdcp":
                      req = device_1.device.hdcp;
                      break;
                    case "device.hdr":
                      req = device_1.device.hdr;
                      break;
                    case "device.audio":
                      req = device_1.device.audio;
                      break;
                    case "device.screenResolution":
                      req = device_1.device.screenResolution;
                      break;
                    case "device.videoResolution":
                      req = device_1.device.videoResolution;
                      break;
                    case "device.network":
                      req = device_1.device.network;
                      break;
                    case "lifecycle.close":
                      req = lifecycle_1.lifecycle.close;
                      break;
                    case "lifecycle.finished":
                      req = lifecycle_1.lifecycle.finished;
                      break;
                    case "lifecycle.ready":
                      req = lifecycle_1.lifecycle.ready;
                      break;
                    case "localization.countryCode":
                      req = localization_1.localization.countryCode;
                      break;
                    case "localization.language":
                      req = localization_1.localization.language;
                      break;
                    case "localization.locale":
                      req = localization_1.localization.locale;
                      break;
                    case "localization.additionalInfo":
                      req = localization_1.localization.additionalInfo;
                      break;
                    case "accessibility.closedCaptions":
                      req = accessibility_1.accessibility.closedCaptions;
                      break;
                    case "accessibility.voiceGuidance":
                      req = accessibility_1.accessibility.voiceGuidance;
                      break;
                    case "discovery.entitlements":
                      req = discovery_1.discovery.entitlements;
                      break;
                    case "discovery.launch":
                      req = discovery_1.discovery.launch;
                      break;
                    case "discovery.watched":
                      req = discovery_1.discovery.watched;
                      break;
                    case "discovery.watchNext":
                      req = discovery_1.discovery.watchNext;
                      break;
                    case "metrics.ready":
                    case "metrics.signIn":
                    case "metrics.signOut":
                    case "metrics.startContent":
                    case "metrics.stopContent":
                    case "metrics.page":
                    case "metrics.action":
                    case "metrics.error":
                    case "metrics.mediaLoadStart":
                    case "metrics.mediaPlay":
                    case "metrics.mediaPlaying":
                    case "metrics.mediaEnded":
                    case "metrics.mediaPause":
                    case "metrics.mediaWaiting":
                    case "metrics.mediaProgress":
                    case "metrics.mediaSeeking":
                    case "metrics.mediaRateChange":
                    case "metrics.mediaRenditionChange":
                      params.event = method.split(".")[1];
                      req = metrics_1.metrics.sendMetric;
                      break;
                    default:
                      req = function () {
                        return Promise.reject({});
                      };
                  }
                  _c.label = 1;
                case 1:
                  _c.trys.push([1, 4, , 5]);
                  return [4, utils_1.utils.getHardwareName()];
                case 2:
                  hardware = _c.sent();
                  return [4, req(hardware, params)];
                case 3:
                  result = _c.sent();
                  console.log(
                    "%c[FTL] send result",
                    "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
                    result
                  );
                  return [2, utils_1.utils.doCallback(id, result)];
                case 4:
                  error_1 = _c.sent();
                  console.log(
                    "%c[FTL] send error",
                    "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
                    error_1
                  );
                  console.log(
                    "%c[FTL] send error message",
                    "color: white; background: purple; padding: 2px 4px; border-radius: 2px",
                    utils_1.utils.getError(error_1.message)
                  );
                  return [2, utils_1.utils.doCallback(id, utils_1.utils.getError(error_1.message))];
                case 5:
                  return [2];
              }
            });
          });
        },
        receive: function (cb) {
          utils_1.utils.setCallback(cb);
        },
      };
    },
  });

  // dist/tsc/index.js
  var require_tsc = __commonJS({
    "dist/tsc/index.js"(exports) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var ftl_1 = require_ftl();
      if (!window.__firebolt) {
        window.__firebolt = {};
      }
      if (window.__firebolt.setTransportLayer) {
        window.__firebolt.setTransportLayer(ftl_1.FTL);
      } else {
        window.__firebolt.getTransportLayer = function () {
          delete window.__firebolt;
          return ftl_1.FTL;
        };
      }
    },
  });
  ("use strict");
  require_tsc();
})();
