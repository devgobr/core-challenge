import React from 'react';
import styled from 'styled-components';
import tokens from '../../tokens';

function _extends() {
  _extends = Object.assign || function (target) {
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

var Base = styled.button.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1cdyp-0"
})(["border:none;font-size:", ";line-height:", ";border-radius:", ";padding:", ";font-family:", ";font-weight:", ";color:", ";background-color:", ";:hover{background-color:", ";}"], tokens.fontSizeSm, tokens.lineHeightTight, tokens.borderRadiusNone, tokens.spacingSquishXs, tokens.fontFamilyBase, tokens.fontWeightMedium, tokens.colorNeutral05, tokens.colorBrandPrimary03, tokens.colorBrandPrimary02);

var ButtonPrimary = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/React.createElement(Base, _extends({
    ref: ref,
    onClick: handleClick
  }, props), children);
});
ButtonPrimary.displayName = 'ButtonPrimary';

var Base$1 = styled.h6.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1fmnisv-0"
})(["font-size:", ";font-family:", ";font-weight:", ";color:", ";"], tokens.fontSizeLg, tokens.fontFamilyBase, tokens.fontWeightBold, tokens.colorNeutral01);

var HeadingSmall = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React.createElement(Base$1, props, children);
});
HeadingSmall.displayName = 'HeadingSmall';

var Base$2 = styled.h1.withConfig({
  displayName: "styles__Base",
  componentId: "sc-160fr3d-0"
})(["font-size:", ";line-height:", ";font-family:", ";font-weight:", ";color:", ";"], tokens.fontSizeMd, tokens.lineHeightMedium, tokens.fontFamilyBase, tokens.fontWeightMedium, tokens.colorNeutral02);

var SubtitleSmall = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React.createElement(Base$2, props, children);
});
SubtitleSmall.displayName = 'SubtitleSmall';

var Base$3 = styled.p.withConfig({
  displayName: "styles__Base",
  componentId: "sc-1homdav-0"
})(["font-size:", ";line-height:", ";font-family:", ";font-weight:", ";color:", ";"], tokens.fontSizeXs, tokens.lineHeightDistant, tokens.fontFamilyBase, tokens.fontWeightRegular, tokens.colorNeutral02);

var Paragraph = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React.createElement(Base$3, props, children);
});
Paragraph.displayName = 'Paragraph';

var Base$4 = styled.div.withConfig({
  displayName: "styles__Base",
  componentId: "x10833-0"
})(["border-radius:", ";padding:", ";border-width:", ";border-color:", ";background-color:", ";"], tokens.borderRadiusNone, tokens.spacingInsetLg, tokens.borderWidthThin, tokens.colorNeutral04, tokens.colorNeutral05);

var Shape = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick"]);

  return /*#__PURE__*/React.createElement(Base$4, props, children);
});
Shape.displayName = 'Shape';

var HeadingSmall$1 = styled(HeadingSmall).withConfig({
  displayName: "styles__HeadingSmall",
  componentId: "jvhtjh-0"
})(["margin-bottom:", ";margin-top:", ";"], tokens.spacingStackXxxs, tokens.spacingStackXxxs);
var SubtitleSmall$1 = styled(SubtitleSmall).withConfig({
  displayName: "styles__SubtitleSmall",
  componentId: "jvhtjh-1"
})(["margin-bottom:", ";"], tokens.spacingStackXxs);
var Paragraph$1 = styled(Paragraph).withConfig({
  displayName: "styles__Paragraph",
  componentId: "jvhtjh-2"
})(["margin-bottom:", ";"], tokens.spacingStackSm);

var CardContent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      heading = _ref.heading,
      subtitle = _ref.subtitle,
      paragraph = _ref.paragraph;

  var handleClick = function handleClick(event) {
    onClick(event);
  };

  return /*#__PURE__*/React.createElement(Shape, null, /*#__PURE__*/React.createElement(HeadingSmall$1, null, heading), /*#__PURE__*/React.createElement(SubtitleSmall$1, null, subtitle), /*#__PURE__*/React.createElement(Paragraph$1, null, paragraph), /*#__PURE__*/React.createElement(ButtonPrimary, {
    onClick: handleClick
  }, label));
});
CardContent.displayName = 'CardContent';

export { ButtonPrimary, CardContent, HeadingSmall, Paragraph, Shape, SubtitleSmall };
