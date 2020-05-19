import React from 'react';

function FirstComponent(props){
    console.log('this is firstComponent', props.items)
    return(

        <div>
<h1>this is our listing Component!</h1>
        <ul>
            {props.items.map((item, index)=>{
            return <li key = {index}>{props.items[index]}<button>Delete</button></li>
                    })}
                    
        </ul>

        </div>
        
    )
}

export default FirstComponent