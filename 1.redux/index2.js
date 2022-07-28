const {createStore} = require('redux');

//action을 받아서 새로운 state를 만들어 줌 새로운 녀석으로 대체가 됨
const reducer = (prevState = initialStore, action) => {
    switch(action.type){
        case "LOG_IN" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                user : action.data
            };
        case "LOG_OUT" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                user : null,
                posts : null
            };
        case "ADD_POST" : 
            return {
                ...prevState,
                posts : [...prevState.posts, action.data]
            }
        default : //오타등이 발생했을 때..
            return prevState;
    }
};

const login = (data) => {//action Creator
    return  { //action
        type : "LOG_IN",
        data
    }
}

const logOut = () => {
    return {
        type : 'LOG_OUT'
    }
}

const addPost = (data) => {
    return {
        type : 'ADD_POST',
        data
    }
}

const initialStore = {
    user : null,
    posts : []
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