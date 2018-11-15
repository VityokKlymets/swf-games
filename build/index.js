"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _admin = _interopRequireDefault(require("./middlewares/admin"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    IP = _process$env.IP,
    DB_HOST = _process$env.DB_HOST,
    DB_NAME = _process$env.DB_NAME,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_PORT = _process$env.DB_PORT,
    DB_USER = _process$env.DB_USER,
    STATIC_FOLDER = _process$env.STATIC_FOLDER,
    GAMES_FOLDER = _process$env.GAMES_FOLDER;
process.env.ROOT = NODE_ENV === 'development' ? __dirname : process.cwd();
process.env.GAME_FOLDER_PATH = _path.default.join(STATIC_FOLDER, GAMES_FOLDER);
var PORT = NODE_ENV === 'development' ? 3030 : process.env.PORT;
process.env.HOST = NODE_ENV === 'development' ? "http://".concat(IP, ":").concat(PORT, "/") : '';

if (NODE_ENV === 'development') {
  _mongoose.default.connect("mongodb://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, ":").concat(DB_PORT, "/").concat(DB_NAME), {
    useNewUrlParser: true
  });
}

if (NODE_ENV === 'production') {
  _mongoose.default.connect("mongodb://localhost:27017/".concat(DB_NAME), {
    useNewUrlParser: true
  });
}

var app = (0, _express.default)();
app.use('/' + process.env.STATIC_FOLDER, _express.default.static(_path.default.join(process.env.ROOT, process.env.STATIC_FOLDER)));

if (NODE_ENV === 'production') {
  app.use(_express.default.static('client/build'));
  app.get('*', function (req, res) {
    res.sendFile(_path.default.resolve(process.env.ROOT, 'client', 'build', 'index.html'));
  });
}

app.use(_express.default.json({
  limit: '50mb'
}));
app.use(_express.default.urlencoded({
  limit: '50mb'
}));
app.use(_admin.default);
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default,
  playground: NODE_ENV === 'development',
  context: function context(_ref) {
    var req = _ref.req;
    return {
      isAdmin: req.isAdmin
    };
  },
  uploads: true
});
server.applyMiddleware({
  app: app
});
app.listen(PORT, function () {
  console.log("\uD83D\uDE80  Server ready at ".concat(PORT, " port"));
});