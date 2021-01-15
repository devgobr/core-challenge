'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var tokens = require('../../tokens');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var tokens__default = /*#__PURE__*/_interopDefaultLegacy(tokens);

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

var Base = styled__default['default'].button.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1cdyp-0"
})(["border:none;font-size:", ";line-height:", ";border-radius:", ";padding:", ";font-family:", ";font-weight:", ";color:", ";background-color:", ";:hover{background-color:", ";}"], tokens__default['default'].fontSizeSm, tokens__default['default'].lineHeightTight, tokens__default['default'].borderRadiusNone, tokens__default['default'].spacingSquishXs, tokens__default['default'].fontFamilyBase, tokens__default['default'].fontWeightMedium, tokens__default['default'].colorNeutral05, tokens__default['default'].colorBrandPrimary03, tokens__default['default'].colorBrandPrimary02);

var ButtonPrimary = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      props = objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/React__default['default'].createElement(Base, _extends_1({
    ref: ref,
    onClick: handleClick
  }, props), children);
});
ButtonPrimary.displayName = 'ButtonPrimary';

var Base$1 = styled__default['default'].h6.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1fmnisv-0"
})(["font-size:", ";font-family:", ";font-weight:", ";color:", ";"], tokens__default['default'].fontSizeLg, tokens__default['default'].fontFamilyBase, tokens__default['default'].fontWeightBold, tokens__default['default'].colorNeutral01);

var HeadingSmall = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React__default['default'].createElement(Base$1, props, children);
});
HeadingSmall.displayName = 'HeadingSmall';

var Base$2 = styled__default['default'].h1.withConfig({
  displayName: "styles__Base",
  componentId: "sc-160fr3d-0"
})(["font-size:", ";line-height:", ";font-family:", ";font-weight:", ";color:", ";"], tokens__default['default'].fontSizeMd, tokens__default['default'].lineHeightMedium, tokens__default['default'].fontFamilyBase, tokens__default['default'].fontWeightMedium, tokens__default['default'].colorNeutral02);

var SubtitleSmall = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React__default['default'].createElement(Base$2, props, children);
});
SubtitleSmall.displayName = 'SubtitleSmall';

var Base$3 = styled__default['default'].p.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1homdav-0"
})(["font-size:", ";line-height:", ";font-family:", ";font-weight:", ";color:", ";"], tokens__default['default'].fontSizeXs, tokens__default['default'].lineHeightDistant, tokens__default['default'].fontFamilyBase, tokens__default['default'].fontWeightRegular, tokens__default['default'].colorNeutral02);

var Paragraph = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React__default['default'].createElement(Base$3, props, children);
});
Paragraph.displayName = 'Paragraph';

var Base$4 = styled__default['default'].div.withConfig({
  displayName: "styles__Base",
  componentId: "x10833-0"
})(["border-radius:", ";padding:", ";border-width:", ";border-color:", ";background-color:", ";"], tokens__default['default'].borderRadiusNone, tokens__default['default'].spacingInsetLg, tokens__default['default'].borderWidthThin, tokens__default['default'].colorNeutral04, tokens__default['default'].colorNeutral05);

var Shape = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React__default['default'].createElement(Base$4, props, children);
});
Shape.displayName = 'Shape';

var HeadingSmall$1 = styled__default['default'](HeadingSmall).withConfig({
  displayName: "styles__HeadingSmall",
  componentId: "jvhtjh-0"
})(["margin-bottom:", ";margin-top:", ";"], tokens__default['default'].spacingStackXxxs, tokens__default['default'].spacingStackXxxs);
var SubtitleSmall$1 = styled__default['default'](SubtitleSmall).withConfig({
  displayName: "styles__SubtitleSmall",
  componentId: "jvhtjh-1"
})(["margin-bottom:", ";"], tokens__default['default'].spacingStackXxs);
var Paragraph$1 = styled__default['default'](Paragraph).withConfig({
  displayName: "styles__Paragraph",
  componentId: "jvhtjh-2"
})(["margin-bottom:", ";"], tokens__default['default'].spacingStackSm);

var CardContent = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      heading = _ref.heading,
      subtitle = _ref.subtitle,
      paragraph = _ref.paragraph;

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/React__default['default'].createElement(Shape, null, /*#__PURE__*/React__default['default'].createElement(HeadingSmall$1, null, heading), /*#__PURE__*/React__default['default'].createElement(SubtitleSmall$1, null, subtitle), /*#__PURE__*/React__default['default'].createElement(Paragraph$1, null, paragraph), /*#__PURE__*/React__default['default'].createElement(ButtonPrimary, {
    onClick: handleClick
  }, label));
});
CardContent.displayName = 'CardContent';

exports.ButtonPrimary = ButtonPrimary;
exports.CardContent = CardContent;
exports.HeadingSmall = HeadingSmall;
exports.Paragraph = Paragraph;
exports.Shape = Shape;
exports.SubtitleSmall = SubtitleSmall;
