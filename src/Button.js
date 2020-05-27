import React from 'react';


function Button(props) {
    return(
        props.results.map((obj,index) => {
            if(obj.sex == "m") {
                return(
                    <button key = {index} className = "male lg-col-1 md-col-3 sm-col-2">{obj.name}</button>
                )
            }else{
                return(
                <button key = {index} className = "female lg-col-1 md-col-3 sm-col-2">{obj.name}</button>
                )
            }
        }) 

        

    )
}
export default Button;