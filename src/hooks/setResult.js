import * as Action from '../redux/resultReducer'
console.log("hello action",Action);
export const PushAnswer = (question, selectedOption)=>async(dispatch)=>{
    try {
        console.log('Before dispatching action');
        console.log('Action data:', question, selectedOption);
        await dispatch(Action.pushResultAction({question, selectedOption}))
        
    } catch (error) {
        console.log(error)
        
    }
}

