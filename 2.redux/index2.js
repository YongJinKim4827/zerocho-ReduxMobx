const { createStore } = require('redux');
const reducer = require('./reducers/reducer');
const { login, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialStore = {
    user : {
        isLogging : true,
        data : null
    },
    posts : [],
    comment : [],
    favorites : [],
    history : [],
    likes: [],
    follwers:[]
}

const store = createStore(reducer, initialStore);
store.dispatch(login({
    id : 1,
    name : "YongJin",
    admin : true
    }
));
console.log("LOGIN : ",store.getState());

store.dispatch(addPost({
    id : 1,
    writer : store.getState().user.name,
    content : "바로 나여라~"
    }
));
console.log("ADD POST(1) : ",store.getState());

store.dispatch(addPost({
    id : 2,
    writer : store.getState().user.name,
    content : "바로 너여라~"
    }
));
console.log("ADD POST(2) : ",store.getState());

store.dispatch(logOut({
    type : "LOG_OUT"
}))
console.log("LOGOUT", store.getState())
store.subscribe(()=> {//react-redux안에 있음, 에러디버깅할때만 거의 사용하거 거진 사용하지 않음
    //화면 바꿔주는 코드 입력
    console.log("subscribe change")
});