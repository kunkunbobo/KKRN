/**
 * Created by yzw on 2017/3/28.
 */

import {AsyncStorage} from  'react-native'
export function isEmpty(str) {

    if(str==null || str == undefined || str.length == 0){
        return true;
    }

    if(str.replace(/(^s*)|(s*$)/g, "").length ==0){
        return true;
    }
    return false;
}

export function getToken() {


    // AsyncStorage.getAllKeys((error, keys)=>{
    //
    //     console.log("AsyncStorage keys",keys)
    // })
    
    return AsyncStorage.getItem("reduxPersist:login");
}



