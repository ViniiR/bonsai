// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
"use strict";

var dropdownButtons = document.querySelectorAll("button.dropdown");
var hamburguerMenuButton = document.querySelector("button.hamburguer-menu-button");
var monthYearSwitch = document.querySelector("input#month-year-switch");
var superChargeSubtitle = document.querySelector("article#sub-title > h2");
var addOnsContainer = document.querySelector("section#add-ons-article-container");
var monthYearTrialPrice = document.querySelectorAll("div.month-year-trial-price");
var bonsaiTaxPricingTag = document.querySelector("div#bonsai-tax-pricing-tag");
var partnersPricingTag = document.querySelector("div#partners-pricing-tag");
var bonsaiTaxAccounting = document.querySelector("h3#bonsai-tax-accounting");
var manageTrackExpenses = document.querySelector("p#manage-track-expenses");
var productButton = document.querySelector("#product-button");
var bonsaiWorkflowButton = document.querySelector("#bonsai-workflow-button");
var templatesButton = document.querySelector("#templates-button");
var dropdownLinksArrows = document.querySelectorAll("div.dropdown-arrow");
dropdownLinksArrows.forEach(function (link) {
  link.addEventListener("click", function (event) {
    var menu = this.parentNode.parentNode.querySelector("ul.dropdown-anchor-menus");
    link.isActive = !link.isActive;
    var getMaxHeight = function getMaxHeight(element) {
      element.style.height = "max-content";
      var maxHeight = element.offsetHeight;
      element.style.height = "0px";
      return maxHeight;
    };
    var startTransition = function startTransition(element, maxHeight) {
      link.style.pointerEvents = "none";
      var elementHeight = element.style.height;
      var numberHeight = elementHeight.slice(0, elementHeight.indexOf("p"));
      if (numberHeight >= maxHeight) {
        link.style.pointerEvents = "all";
        return;
      }
      var slicedHeight = elementHeight.slice(0, elementHeight.indexOf("p"));
      element.style.height = Number(slicedHeight) + 10 + "px";
      requestAnimationFrame(function () {
        startTransition(element, maxHeight);
      });
    };
    var reverseTransition = function reverseTransition(element) {
      link.style.pointerEvents = "none";
      var height = element.style.height;
      var numberHeight = height.slice(0, height.indexOf("p"));
      if (numberHeight <= 5) {
        link.style.pointerEvents = "all";
        return;
      }
      element.style.height = Number(numberHeight) - 10 + "px";
      requestAnimationFrame(function () {
        reverseTransition(element);
      });
    };
    if (!link.isActive) {
      reverseTransition(menu);
    } else {
      window.requestAnimationFrame(function () {
        startTransition(menu, getMaxHeight(menu));
      });
    }
  });
});
var buttonAsides = [{
  productButton: productButton,
  aside: document.querySelector("#product-aside")
}, {
  templatesButton: templatesButton,
  aside: document.querySelector("aside#templates-aside")
}, {
  bonsaiWorkflowButton: bonsaiWorkflowButton,
  aside: document.querySelector("#bonsai-workflow-aside")
}];
var setEventListener = function setEventListener(button, aside) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    aside.isActive = aside.style.display === "flex";
    aside.style.display = aside.isActive ? "none" : "flex";
  });
};
buttonAsides.forEach(function (object) {
  setEventListener(Object.values(object)[0], object.aside);
});
monthYearSwitch.addEventListener("change", function (event) {
  var billedYearly = document.querySelectorAll("section.billed-yearly");
  var trialPriceSection = document.querySelectorAll("section.trial-price");
  var moneySpans = document.querySelectorAll("span.money-span");
  var spans = {
    monthly: document.querySelector("span#monthly"),
    yearly: document.querySelector("span#yearly")
  };
  var setYearly = function setYearly() {
    var yearlyValues = [17, 32, 52];
    spans.monthly.style.fontWeight = "normal";
    spans.monthly.style.color = "#8e8f98";
    spans.yearly.style.fontWeight = "bold";
    spans.yearly.style.color = "#4c4d5f";
    superChargeSubtitle.innerText = "Customize your workflow with add-ons";
    addOnsContainer.style.flexDirection = "column-reverse";
    bonsaiTaxPricingTag.innerText = "$100";
    partnersPricingTag.innerText = "$90";
    bonsaiTaxAccounting.innerText = "Accounting & Tax Assistant";
    manageTrackExpenses.innerText = "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.";
    monthYearTrialPrice.forEach(function (div) {
      div.innerText = "/YEAR";
    });
    billedYearly.forEach(function (section) {
      section.style.display = "flex";
    });
    trialPriceSection.forEach(function (section) {
      section.style.height = "110px";
    });
    for (var i in yearlyValues) {
      moneySpans[i].innerText = yearlyValues[i];
    }
  };
  var setMonthly = function setMonthly() {
    var monthlyValues = [24, 39, 79];
    spans.monthly.style.fontWeight = "bold";
    spans.monthly.style.color = "#4c4d5f";
    spans.yearly.style.fontWeight = "normal";
    spans.yearly.style.color = "#8e8f98";
    superChargeSubtitle.innerText = "Super charge your work with add-ons";
    addOnsContainer.style.flexDirection = "column";
    bonsaiTaxPricingTag.innerText = "$10";
    partnersPricingTag.innerText = "$9";
    bonsaiTaxAccounting.innerText = "Bonsai Tax";
    manageTrackExpenses.innerText = "Track expenses, identify write-offs, and estimate quarterly taxes easily.";
    monthYearTrialPrice.forEach(function (div) {
      div.innerText = "/MONTH";
    });
    billedYearly.forEach(function (section) {
      section.style.display = "none";
    });
    trialPriceSection.forEach(function (section) {
      section.style.height = "90px";
    });
    for (var i in monthlyValues) {
      moneySpans[i].innerText = monthlyValues[i];
    }
  };
  if (event.target.checked) {
    setYearly();
  } else {
    setMonthly();
  }
});

//TODO: clean this sht pls
hamburguerMenuButton.addEventListener("click", function () {
  var asideMenu = this.parentNode.querySelector("aside#hamburguer-menu");
  asideMenu.isActive = asideMenu.style.transform === "translateX(0%)";
  var spans = {
    first: hamburguerMenuButton.querySelector("span#first-span"),
    second: hamburguerMenuButton.querySelector("span#second-span"),
    third: hamburguerMenuButton.querySelector("span#third-span")
  };
  var hideInnerMenus = function hideInnerMenus() {
    var productsAside = document.querySelector("aside#product-aside");
    var workflowAside = document.querySelector("aside#bonsai-workflow-aside");
    var templatesAside = document.querySelector("aside#templates-aside");
    for (var _i = 0, _arr = [productsAside, workflowAside, templatesAside]; _i < _arr.length; _i++) {
      var aside = _arr[_i];
      aside.style.display = "none";
    }
  };
  var setButtonDisabledState = function setButtonDisabledState(state) {
    hamburguerMenuButton.disabled = state;
  };
  var setXButton = function setXButton() {
    setButtonDisabledState(true);
    var delay = 200;
    spans.first.style.top = "10.5px";
    spans.second.style.backgroundColor = "transparent";
    spans.third.style.bottom = "10.5px";
    setTimeout(function () {
      spans.first.style.transform = "rotate(45deg)";
    }, delay);
    setTimeout(function () {
      spans.third.style.transform = "rotate(-45deg)";
    }, delay);
    setTimeout(function () {
      setButtonDisabledState(false);
    }, 500);
  };
  var setHamburguerButton = function setHamburguerButton() {
    hideInnerMenus();
    setButtonDisabledState(true);
    var delay = 200;
    spans.first.style.transform = "rotate(0deg)";
    spans.third.style.transform = "rotate(0deg)";
    setTimeout(function () {
      spans.first.style.top = "0px";
      spans.second.style.backgroundColor = "#4c4d5f";
      spans.third.style.bottom = "0px";
    }, delay);
    setTimeout(function () {
      setButtonDisabledState(false);
    }, 500);
  };
  var toggleMenuVisibility = function toggleMenuVisibility(menu, state) {
    var visibilityState = state ? "translateX(100%)" : "translateX(0%)";
    menu.style.transform = visibilityState;
  };
  if (asideMenu.isActive) {
    toggleMenuVisibility(asideMenu, true);
    setHamburguerButton();
  } else {
    toggleMenuVisibility(asideMenu, false);
    setXButton();
  }
});
dropdownButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var parentArticle = this.parentNode;
    var asideMenu = parentArticle.querySelector("aside");
    var isActive = asideMenu.style.display === "block" ? true : false;
    if (isActive) {
      asideMenu.style.display = "none";
    } else {
      asideMenu.style.display = "block";
    }
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57779" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map