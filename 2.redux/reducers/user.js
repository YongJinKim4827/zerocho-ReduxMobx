const initialStore = {
    isLogging : false,
    data : null
};// 기본 State

const userReducer = (prevState = initialStore, action) => {
    switch(action.type){
        case "LOG_IN" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                isLogging : true,
                data : action.data
            };
        case "LOG_OUT" :
            return {
                ...prevState,// 기존 객체 얕은 복사
                isLogging : false,
                data : null
            };
        default : //오타등이 발생했을 때..
            return prevState;
    }
};

module.exports = userReducer;