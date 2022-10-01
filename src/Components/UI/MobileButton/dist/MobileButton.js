"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var MobileButton_module_css_1 = require("./MobileButton.module.css");
var arrow_svg_1 = require("./arrow.svg");
var classnames_1 = require("classnames");
var router_1 = require("next/router");
var MobileButton = function (_a) {
    var _b, _c;
    var mobile = _a.mobile, setMobile = _a.setMobile, props = __rest(_a, ["mobile", "setMobile"]);
    var router = router_1.useRouter();
    function mob() {
        setMobile(!mobile);
    }
    return (react_1["default"].createElement("button", __assign({ onTouchStart: mob }, props, { className: MobileButton_module_css_1["default"].btn }),
        react_1["default"].createElement("div", { className: MobileButton_module_css_1["default"].contentBtn },
            react_1["default"].createElement("div", { className: MobileButton_module_css_1["default"].svg },
                react_1["default"].createElement("div", { className: classnames_1["default"](MobileButton_module_css_1["default"].arrows) },
                    react_1["default"].createElement("span", { className: classnames_1["default"](MobileButton_module_css_1["default"].arrowTop, (_b = {},
                            _b[MobileButton_module_css_1["default"].arrowTopTrue] = mobile === true,
                            _b[MobileButton_module_css_1["default"].arrowsJs] = router.pathname.startsWith('/js'),
                            _b[MobileButton_module_css_1["default"].arrowsReact] = router.pathname.startsWith('/react'),
                            _b[MobileButton_module_css_1["default"].arrowsTs] = router.pathname.startsWith('/ts'),
                            _b)) },
                        react_1["default"].createElement(arrow_svg_1["default"], null)),
                    react_1["default"].createElement("span", { className: classnames_1["default"](MobileButton_module_css_1["default"].arrowDown, (_c = {},
                            _c[MobileButton_module_css_1["default"].arrowDownTrue] = mobile === true,
                            _c[MobileButton_module_css_1["default"].arrowsJs] = router.pathname.startsWith('/js'),
                            _c[MobileButton_module_css_1["default"].arrowsReact] = router.pathname.startsWith('/react'),
                            _c[MobileButton_module_css_1["default"].arrowsTs] = router.pathname.startsWith('/ts'),
                            _c)) },
                        react_1["default"].createElement(arrow_svg_1["default"], null)))))));
};
exports["default"] = MobileButton;
