const initialState = {
    name: "vasudev",
    city: "Hyderabad",
    age: 100,
    country: "India"
}

const UserReducer = (state=initialState, action)=>{
    console.log(action, "UserReducer")
    switch(action.type){
        case 'update_name':{
            return {
                ...state,
                name: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default UserReducer;