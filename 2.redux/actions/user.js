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

module.exports = {
    login,
    logOut
}