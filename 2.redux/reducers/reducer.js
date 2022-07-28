
//순수함수
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

module.exports = reducer;