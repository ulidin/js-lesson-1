import React from 'react';

function UserDataInfo(props){
return(
    <p onClick={()=>alert(props.userData)}>{props.userData}</p>
)
}

export default UserDataInfo;