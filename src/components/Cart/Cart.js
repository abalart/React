import { NoteAddSharp, ProductionQuantityLimits } from "@mui/icons-material";
import React, { version } from "react";
import { Context} from "../../Context/CustomContext";

export const Cart = () => {

    const {cart} = useContext(Context)

    if(cart.leght === 0){
        return (<h1> No agregaste No agregaste nada,puede ver 
            <Link to= '/'> aca </Link></h1>)
    }

    return (
        <>
            {cart.map((proucto)=>{

                return <h1 key={proucto.id}>{proucto.title}</h1>
            })}
         
        </>
       
    )

}