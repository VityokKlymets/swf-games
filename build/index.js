!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=11)}([function(e,n){e.exports=require("path")},function(e,n){e.exports=require("apollo-server-express")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("mongoose")},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("mkdir-recursive")},function(e,n){e.exports=require("jsonwebtoken")},function(e,n){e.exports=require("dotenv")},function(e,n,r){"use strict";function t(e,n,r,t,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,o)}n.a=function(){var e=function(e){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=e.apply(n,r);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function e(n,r,t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=n.headers.authorization,n.isAdmin=!!o,t();case 3:case"end":return e.stop()}},e,this)}));return function(n,r,t){return e.apply(this,arguments)}}()},function(e,n,r){"use strict";var t=r(4),o=r.n(t),i=r(5),a=r.n(i),u=r(0),c=r.n(u),s=function(e,n,r,t){var i=Buffer.from(e,t),u=c.a.join(n,r),s=c.a.join(process.env.ROOT,n);return o.a.existsSync(s)||a.a.mkdirSync(s),o.a.writeFileSync(c.a.join(s,r),i),u.replace(new RegExp("\\"+c.a.sep,"g"),"/")},p=[{value:"arcade",text:"Аркади",icon:"heart"},{value:"logical",text:"Логічні",icon:"chess"},{value:"gambling",text:"Азартні",icon:"money"},{value:"race",text:"Гонки",icon:"flag checkered"},{value:"anim",text:"Анімації",icon:"info"},{value:"fight",text:"Файтинги",icon:"paw"}],f=r(3),l=r.n(f),v=new l.a.Schema({name:{type:String,required:!0},description:{type:String,required:!0},category:{type:String,required:!0},screenshot:{type:String,required:!0},src:{type:String,required:!0}},{timestamps:!0});v.methods.uploadFile=function(e){var n=e.result,r=e.extension,t="game.".concat(r),o=c.a.join(process.env.GAME_FOLDER_PATH,this.id);this.src=process.env.HOST+s(n,o,t,"binary")},v.methods.uploadScreenshot=function(e){var n=e.result,r=e.extension,t="screenshot.".concat(r),o=c.a.join(process.env.GAME_FOLDER_PATH,this.id);this.screenshot=process.env.HOST+s(n,o,t,"base64")},v.methods.toResJson=function(){var e=this;return{id:this._id.toString(),createdAt:this.createdAt,name:this.name,description:this.description,src:this.src,screenshot:this.screenshot,category:p.find(function(n){return n.value===e.category}).text}};var d=l.a.model("Game",v);function g(e,n,r,t,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,o)}function m(e){return function(){var n=this,r=arguments;return new Promise(function(t,o){var i=e.apply(n,r);function a(e){g(i,t,o,a,u,"next",e)}function u(e){g(i,t,o,a,u,"throw",e)}a(void 0)})}}var y={Query:{category:function(){var e=m(regeneratorRuntime.mark(function e(n,r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.value,e.abrupt("return",p.find(function(e){return e.value===t}));case 2:case"end":return e.stop()}},e,this)}));return function(n,r){return e.apply(this,arguments)}}(),game:function(){var e=m(regeneratorRuntime.mark(function e(n,r){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.next=3,d.findById(t);case 3:return o=e.sent,e.abrupt("return",o.toResJson());case 5:case"end":return e.stop()}},e,this)}));return function(n,r){return e.apply(this,arguments)}}(),categories:function(){var e=m(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),games:function(){var e=m(regeneratorRuntime.mark(function e(n,r){var t,o,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.category,i={},(o=void 0===t?null:t)&&(i.category=o),e.next=5,d.find(i);case 5:return a=e.sent,e.abrupt("return",a.map(function(e){return e.toResJson()}));case 7:case"end":return e.stop()}},e,this)}));return function(n,r){return e.apply(this,arguments)}}()},Mutation:{addGame:function(){var e=m(regeneratorRuntime.mark(function e(n,r){var t,o,i,a,u,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.file,o=r.name,i=r.description,a=r.category,u=r.screenshot,(c=new d).name=o,c.description=i,c.category=a,c.uploadScreenshot(u),c.uploadFile(t),e.next=9,c.save();case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}},e,this)}));return function(n,r){return e.apply(this,arguments)}}()}},h=r(6),S=r.n(h),x=function(e,n){return S.a.sign({email:e,password:n},process.env.JWT_SECRET)},b=function(e,n){return"vityokklymets@gmail.com"===e&&"848965vityok"===n};function O(e,n,r,t,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,o)}var w={Mutation:{login:function(){var e=function(e){return function(){var n=this,r=arguments;return new Promise(function(t,o){var i=e.apply(n,r);function a(e){O(i,t,o,a,u,"next",e)}function u(e){O(i,t,o,a,u,"throw",e)}a(void 0)})}}(regeneratorRuntime.mark(function e(n,r){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.email,o=r.password,!b(t,o)){e.next=5;break}return e.abrupt("return",{token:x(t,o)});case 5:return e.abrupt("return",{token:""});case 6:case"end":return e.stop()}},e,this)}));return function(n,r){return e.apply(this,arguments)}}()}};n.a=[y,w]},function(e,n,r){"use strict";var t=r(1);function o(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    type Query{\n        _: String\n    }\n    type Mutation{\n        _: String\n    }\n    type Subscription{\n        _: String\n    }\n"]);return o=function(){return e},e}var i=Object(t.gql)(o());function a(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    extend type Query{\n        game(id: ID!): Game!\n        categories: [Category!]!\n        games(category: String): [Game!]!\n        category(value: String!): Category!\n    }\n    extend type Mutation{\n        addGame(name: String!, category: String!, description: String!, file: Upload!, screenshot: Upload!): Game!\n    }\n    type Category{\n        value: String!\n        text: String!\n        icon: String!\n    }\n    type Game{\n        id: ID!\n        name: String!\n        category: String!\n        description: String!\n        src: String!\n        screenshot: String!\n        createdAt: String!\n    }\n"]);return a=function(){return e},e}var u=Object(t.gql)(a());function c(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    extend type Mutation{\n        login(email: String!, password: String!): Token!\n    }\n    type Token{\n        token: String!\n    }\n"]);return c=function(){return e},e}var s=Object(t.gql)(c());n.a=[i,u,s]},function(e,n,r){r(12),e.exports=r(13)},function(e,n){e.exports=require("@babel/polyfill")},function(e,n,r){"use strict";r.r(n);r(14)},function(e,n,r){"use strict";(function(e){var n=r(2),t=r.n(n),o=r(1),i=r(3),a=r.n(i),u=r(10),c=r(9),s=r(7),p=r.n(s),f=r(8),l=r(0),v=r.n(l);p.a.config();var d=process.env,g=d.PORT,m=d.IP,y=d.DB_HOST,h=d.DB_NAME,S=d.DB_PORT;process.env.STATIC_FOLDER=v.a.join("static"),process.env.GAMES_FOLDER=v.a.join("games"),process.env.ROOT=e,process.env.GAME_FOLDER_PATH=v.a.join(process.env.STATIC_FOLDER,process.env.GAMES_FOLDER),process.env.HOST="http://".concat(m,":").concat(g,"/"),a.a.connect("mongodb://".concat(y,":").concat(S,"/").concat(h),{useNewUrlParser:!0});var x=t()();x.use("/"+process.env.STATIC_FOLDER,t.a.static(v.a.join(process.env.ROOT,process.env.STATIC_FOLDER))),x.use(t.a.static("client/build")),x.get("*",function(n,r){r.sendFile(v.a.resolve(e,"client","build"))}),x.use(t.a.json({limit:"50mb"})),x.use(t.a.urlencoded({limit:"50mb"})),x.use(f.a),new o.ApolloServer({typeDefs:u.a,resolvers:c.a,playground:!1,context:function(e){return{isAdmin:e.req.isAdmin}},uploads:!0}).applyMiddleware({app:x}),x.listen(g,function(){console.log("🚀  Server ready at ".concat(process.env.HOST))})}).call(this,"/")}]);