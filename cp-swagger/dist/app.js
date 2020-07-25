"use strict";

var _express = _interopRequireDefault(require("express"));

var _apiDoc = _interopRequireDefault(require("./utils/api-doc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/api', _apiDoc["default"]);
app.listen(3000, function () {
  console.log('Server is running at 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiZG9jcyIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsMEJBQVo7QUFHQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFnQkMsa0JBQWhCO0FBRUFGLEdBQUcsQ0FBQ0csTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBTTtBQUNyQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDRCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGRvY3MgZnJvbSAnLi91dGlscy9hcGktZG9jLmpzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cblxuYXBwLnVzZSgnL2FwaScsIGRvY3MpXG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnU2VydmVyIGlzIHJ1bm5pbmcgYXQgMzAwMCcpO1xufSlcblxuIl19