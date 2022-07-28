const { combineReducers } = require("redux");
const userReducer = require("./user");
const postReducer = require("./post");

module.exports = combineReducers({
    //user, post initinalState를 따라감
    user : userReducer,
    posts : postReducer
});