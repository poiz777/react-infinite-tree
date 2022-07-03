"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _infiniteTree = _interopRequireDefault(require("infinite-tree"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list-dmk"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lcfirst = function lcfirst(str) {
  str += '';
  return str.charAt(0).toLowerCase() + str.substr(1);
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "tree", null);

    _defineProperty(_assertThisInitialized(_this), "virtualListRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      nodes: []
    });

    _defineProperty(_assertThisInitialized(_this), "eventHandlers", {
      onContentWillUpdate: null,
      onContentDidUpdate: null,
      onOpenNode: null,
      onCloseNode: null,
      onSelectNode: null,
      onWillOpenNode: null,
      onWillCloseNode: null,
      onWillSelectNode: null
    });

    var children = props.children,
        className = props.className,
        style = props.style,
        el = props.el,
        options = _objectWithoutProperties(props, ["children", "className", "style", "el"]);

    options.rowRenderer = function () {
      return '';
    };

    _this.tree = new _infiniteTree["default"](options); // Filters nodes.
    // https://github.com/cheton/infinite-tree/wiki/Functions:-Tree#filterpredicate-options

    var treeFilter = _this.tree.filter.bind(_this.tree);

    _this.tree.filter = function () {
      setTimeout(function () {
        var virtualList = _this.virtualListRef.current;

        if (virtualList) {
          virtualList.recomputeSizes(0);
        }
      }, 0);
      return treeFilter.apply(void 0, arguments);
    }; // Unfilter nodes.
    // https://github.com/cheton/infinite-tree/wiki/Functions:-Tree#unfilter


    var treeUnfilter = _this.tree.unfilter.bind(_this.tree);

    _this.tree.unfilter = function () {
      setTimeout(function () {
        var virtualList = _this.virtualListRef.current;

        if (virtualList) {
          virtualList.recomputeSizes(0);
        }
      }, 0);
      return treeUnfilter.apply(void 0, arguments);
    }; // Sets the current scroll position to this node.
    // @param {Node} node The Node object.
    // @return {boolean} Returns true on success, false otherwise.


    _this.tree.scrollToNode = function (node) {
      var virtualList = _this.virtualListRef.current;

      if (!_this.tree || !virtualList) {
        return false;
      }

      var nodeIndex = _this.tree.nodes.indexOf(node);

      if (nodeIndex < 0) {
        return false;
      }

      var offset = virtualList.getOffsetForIndex(nodeIndex);
      virtualList.scrollTo(offset);
      return true;
    }; // Gets (or sets) the current vertical position of the scroll bar.
    // @param {number} [value] If the value is specified, indicates the new position to set the scroll bar to.
    // @return {number} Returns the vertical scroll position.


    _this.tree.scrollTop = function (value) {
      var virtualList = _this.virtualListRef.current;

      if (!_this.tree || !virtualList) {
        return;
      }

      if (value !== undefined) {
        virtualList.scrollTo(Number(value));
      }

      return virtualList.getNodeOffset();
    }; // Updates the tree.


    _this.tree.update = function () {
      _this.tree.emit('contentWillUpdate');

      _this.setState(function (state) {
        return {
          nodes: _this.tree.nodes
        };
      }, function () {
        _this.tree.emit('contentDidUpdate');
      });
    };

    Object.keys(_this.eventHandlers).forEach(function (key) {
      if (!_this.props[key]) {
        return;
      }

      var eventName = lcfirst(key.substr(2)); // e.g. onContentWillUpdate -> contentWillUpdate

      _this.eventHandlers[key] = _this.props[key];

      _this.tree.on(eventName, _this.eventHandlers[key]);
    });
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      Object.keys(this.eventHandlers).forEach(function (key) {
        if (!_this2.eventHandlers[key]) {
          return;
        }

        var eventName = lcfirst(key.substr(2)); // e.g. onUpdate -> update

        _this2.tree.removeListener(eventName, _this2.eventHandlers[key]);

        _this2.eventHandlers[key] = null;
      });
      this.tree.destroy();
      this.tree = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          autoOpen = _this$props.autoOpen,
          selectable = _this$props.selectable,
          tabIndex = _this$props.tabIndex,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height,
          rowHeight = _this$props.rowHeight,
          rowRenderer = _this$props.rowRenderer,
          shouldLoadNodes = _this$props.shouldLoadNodes,
          loadNodes = _this$props.loadNodes,
          shouldSelectNode = _this$props.shouldSelectNode,
          scrollOffset = _this$props.scrollOffset,
          scrollToIndex = _this$props.scrollToIndex,
          onScroll = _this$props.onScroll,
          onContentWillUpdate = _this$props.onContentWillUpdate,
          onContentDidUpdate = _this$props.onContentDidUpdate,
          onOpenNode = _this$props.onOpenNode,
          onCloseNode = _this$props.onCloseNode,
          onSelectNode = _this$props.onSelectNode,
          onWillOpenNode = _this$props.onWillOpenNode,
          onWillCloseNode = _this$props.onWillCloseNode,
          onWillSelectNode = _this$props.onWillSelectNode,
          style = _this$props.style,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["autoOpen", "selectable", "tabIndex", "data", "width", "height", "rowHeight", "rowRenderer", "shouldLoadNodes", "loadNodes", "shouldSelectNode", "scrollOffset", "scrollToIndex", "onScroll", "onContentWillUpdate", "onContentDidUpdate", "onOpenNode", "onCloseNode", "onSelectNode", "onWillOpenNode", "onWillCloseNode", "onWillSelectNode", "style", "children"]);

      var render = typeof children === 'function' ? children : rowRenderer;
      var count = this.tree ? this.tree.nodes.length : 0; // VirtualList

      var virtualListProps = {};

      if (scrollOffset !== undefined && count > 0) {
        virtualListProps.scrollOffset = scrollOffset;
      }

      if (scrollToIndex !== undefined && scrollToIndex >= 0 && scrollToIndex < count) {
        virtualListProps.scrollToIndex = scrollToIndex;
      }

      if (typeof onScroll === 'function') {
        virtualListProps.onScroll = onScroll;
      }

      return _react["default"].createElement("div", _extends({}, props, {
        style: _objectSpread({
          outline: 'none'
        }, style),
        tabIndex: tabIndex
      }), _react["default"].createElement(_reactTinyVirtualList["default"], _extends({
        ref: this.virtualListRef,
        width: width,
        height: height,
        itemCount: count,
        itemSize: function itemSize(index) {
          var node = _this3.tree.nodes[index];

          if (node && node.state.filtered === false) {
            return 0;
          }

          if (typeof rowHeight === 'function') {
            return rowHeight({
              node: _this3.tree.nodes[index],
              tree: _this3.tree
            });
          }

          return rowHeight; // Number or Array
        },
        renderItem: function renderItem(_ref) {
          var index = _ref.index,
              style = _ref.style;
          var row = null;

          if (typeof render === 'function') {
            var node = _this3.tree.nodes[index];

            if (node && node.state.filtered !== false) {
              row = render({
                node: _this3.tree.nodes[index],
                tree: _this3.tree
              });
            }
          }

          return _react["default"].createElement("div", {
            key: index,
            style: style
          }, row);
        }
      }, virtualListProps)));
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

_defineProperty(_default, "displayName", 'InfiniteTree');

_defineProperty(_default, "propTypes", {
  // Whether to open all nodes when tree is loaded.
  autoOpen: _propTypes["default"].bool,
  // Whether or not a node is selectable in the tree.
  selectable: _propTypes["default"].bool,
  // Specifies the tab order to make tree focusable.
  tabIndex: _propTypes["default"].number,
  // Tree data structure, or a collection of tree data structures.
  data: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  // Width of the tree.
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  // Height of the tree.
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  // Either a fixed height, an array containing the heights of all the rows, or a function that returns the height of a row given its index: `(index: number): number`
  rowHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].array, _propTypes["default"].func]).isRequired,
  // A row renderer for rendering a tree node.
  rowRenderer: _propTypes["default"].func,
  // Loads nodes on demand.
  loadNodes: _propTypes["default"].func,
  // Provides a function to determine if a node can be selected or deselected. The function must return `true` or `false`. This function will not take effect if `selectable` is not `true`.
  shouldSelectNode: _propTypes["default"].func,
  // Controls the scroll offset.
  scrollOffset: _propTypes["default"].number,
  // Node index to scroll to.
  scrollToIndex: _propTypes["default"].number,
  // Callback invoked whenever the scroll offset changes.
  onScroll: _propTypes["default"].func,
  // Callback invoked before updating the tree.
  onContentWillUpdate: _propTypes["default"].func,
  // Callback invoked when the tree is updated.
  onContentDidUpdate: _propTypes["default"].func,
  // Callback invoked when a node is opened.
  onOpenNode: _propTypes["default"].func,
  // Callback invoked when a node is closed.
  onCloseNode: _propTypes["default"].func,
  // Callback invoked when a node is selected or deselected.
  onSelectNode: _propTypes["default"].func,
  // Callback invoked before opening a node.
  onWillOpenNode: _propTypes["default"].func,
  // Callback invoked before closing a node.
  onWillCloseNode: _propTypes["default"].func,
  // Callback invoked before selecting or deselecting a node.
  onWillSelectNode: _propTypes["default"].func
});

_defineProperty(_default, "defaultProps", {
  autoOpen: false,
  selectable: true,
  tabIndex: 0,
  data: [],
  width: '100%'
});

;
