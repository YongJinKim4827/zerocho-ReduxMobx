const initialStore = [];// 기본 State

const postReducer = (prevState = initialStore, action) => {
    switch(action.type){
        case "ADD_POST" : 
        return [...prevState, action.data]
        
        default : //오타등이 발생했을 때..
            return prevState;
    }
}

module.exports = postReducer;