import * as Action from '../redux/resultReducer'
console.log("hello action",Action);
export const PushAnswer = (result)=>async(dispatch)=>{
    try {
        await dispatch(Action.pushResultAction(result))
        
    } catch (error) {
        console.log(error)
        
    }
}

export const updateResult = (index)=>async (dispatch) =>{
    try{
        console.log("hi inside update result")
        dispatch(Action.updateResultAction(index))
        console.log("after update")
    }catch(error){
        console.log(error)
    }
}

