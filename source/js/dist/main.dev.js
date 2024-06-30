"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMain = initMain;
exports.main = void 0;

var _utils = _interopRequireDefault(require("./utils.js"));

var _typed = _interopRequireDefault(require("./plugins/typed.js"));

var _lightDarkSwitch = _interopRequireDefault(require("./tools/lightDarkSwitch.js"));

var _lazyload = _interopRequireDefault(require("./layouts/lazyload.js"));

var _scrollTopBottom = _interopRequireDefault(require("./tools/scrollTopBottom.js"));

var _localSearch = _interopRequireDefault(require("./tools/localSearch.js"));

var _codeBlock = _interopRequireDefault(require("./tools/codeBlock.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* main function */
var main = {
  themeInfo: {
    theme: "Redefine v".concat(theme.version),
    author: "EvanNotFound&OrionislLi",
    repository: "https://github.com/LemonFan-maker/hexo-theme-renfinimpact"
  },
  localStorageKey: "REDEFINE-THEME-STATUS",
  styleStatus: {
    isExpandPageWidth: false,
    isDark: theme.colors.default_mode && theme.colors.default_mode === "dark",
    fontSizeLevel: 0,
    isOpenPageAside: true
  },
  printThemeInfo: function printThemeInfo() {
    console.log("      ______ __  __  ______  __    __  ______                       \r\n     /\\__  _/\\ \\_\\ \\/\\  ___\\/\\ \"-./  \\/\\  ___\\                      \r\n     \\/_/\\ \\\\ \\  __ \\ \\  __\\\\ \\ \\-./\\ \\ \\  __\\                      \r\n        \\ \\_\\\\ \\_\\ \\_\\ \\_____\\ \\_\\ \\ \\_\\ \\_____\\                    \r\n         \\/_/ \\/_/\\/_/\\/_____/\\/_/  \\/_/\\/_____/                    \r\n                                                               \r\n ______  ______  _____   ______  ______ __  __   __  ______    \r\n/\\  == \\/\\  ___\\/\\  __-./\\  ___\\/\\  ___/\\ \\/\\ \"-.\\ \\/\\  ___\\   \r\n\\ \\  __<\\ \\  __\\\\ \\ \\/\\ \\ \\  __\\\\ \\  __\\ \\ \\ \\ \\-.  \\ \\  __\\   \r\n \\ \\_\\ \\_\\ \\_____\\ \\____-\\ \\_____\\ \\_\\  \\ \\_\\ \\_\\\\\"\\_\\ \\_____\\ \r\n  \\/_/ /_/\\/_____/\\/____/ \\/_____/\\/_/   \\/_/\\/_/ \\/_/\\/_____/\r\n                                                               \r\n  Github: https://github.com/LemonFan-maker/hexo-theme-renfinimpact"); // console log message
  },
  setStyleStatus: function setStyleStatus() {
    localStorage.setItem(main.localStorageKey, JSON.stringify(main.styleStatus));
  },
  getStyleStatus: function getStyleStatus() {
    var temp = localStorage.getItem(main.localStorageKey);

    if (temp) {
      temp = JSON.parse(temp);

      for (var key in main.styleStatus) {
        main.styleStatus[key] = temp[key];
      }

      return temp;
    } else {
      return null;
    }
  },
  refresh: function refresh() {
    (0, _utils["default"])();
    (0, _lightDarkSwitch["default"])();
    (0, _scrollTopBottom["default"])();

    if (theme.home_banner.subtitle.text.length !== 0 && location.pathname === config.root) {
      (0, _typed["default"])("subtitle");
    }

    if (theme.navbar.search.enable === true) {
      (0, _localSearch["default"])();
    }

    if (theme.articles.code_block.copy === true) {
      (0, _codeBlock["default"])();
    }

    if (theme.articles.lazyload === true) {
      (0, _lazyload["default"])();
    }
  }
};
exports.main = main;

function initMain() {
  main.printThemeInfo();
  main.refresh();
}

document.addEventListener("DOMContentLoaded", initMain);

try {
  swup.hooks.on("page:view", function () {
    main.refresh();
  });
} catch (e) {}