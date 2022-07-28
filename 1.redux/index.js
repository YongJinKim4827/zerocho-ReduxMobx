const {createStore} = require('redux');

//action을 받아서 새로운 state를 만들어 줌 새로운 녀석으로 대체가 됨
const reducer = (prevState = initialStore, action) => {
    switch(action.type){
        case "CHANGE_COMPA" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                compA : action.data
            };
        case "CHANGE_COMPB" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                compB : action.data
            };
        default : //오타등이 발생했을 때..
            return prevState;
    }
};
const initialStore = {
    compA : 'a',
    compB : 12,
    compC : null
}
const store = createStore(reducer, initialStore);
console.log("1st : ", store.getState());
const changeCompA = (data) => {
    return  { //action
        type : "CHANGE_COMPA",
        data
    }
}

const changeCompB = (data) => {
    return  { //action
        type : "CHANGE_COMPB",
        data
    }
}


store.dispatch(changeCompA('b'));
store.dispatch(changeCompB(15));

console.log("2nd : ", store.getState());

store.subscribe(()=> {//react-redux안에 있음, 에러디버깅할때만 거의 사용하거 거진 사용하지 않음
    //화면 바꿔주는 코드 입력
    console.log("subscribe change")
});