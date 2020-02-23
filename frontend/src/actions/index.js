
import {SetUser,GetUser} from '../util/constant'

 const  setUser = (param) =>{
    return{
        type: SetUser,
        data :param
    };
};

const getUser = (param)=>{
    return{
        type: GetUser,
        data:param
    }
};




