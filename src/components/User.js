import { useEffect, useState } from "react"

const User =({name})=>{


    const [count1]=useState(0);
    const [count2]=useState(1);
return(
    <div className="userInfo">
        {/* <h1>Count:{count1}</h1>
        <h2>Count2:{count2}</h2>
        <h1>name:gaurav</h1> */}
        <h1>{name}</h1>
        {/* <h2>age:25</h2>
        <h2>address: bhopal</h2> */}
    </div>
)
}


export default User