import { useContext, useEffect } from "react"
import { UsedContext } from "../../App"
import { useNavigate } from "react-router-dom";

function Logout () {

    const {state, dispatch} = useContext(UsedContext);

    const history3 = useNavigate()

    useEffect(() => {
        fetch('/logout', {
            method:'GET',
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            credentials:"include"
        }).then((res) => {
            dispatch({type:'USER',payload:false});
            history3("/login")
            if(!res.status === 200){
                const error = new Error(res.Error)
                throw error;
            }
        }).catch((err) => {
            console.log("error in logout", err)
            dispatch({type:'USER',payload:false});
            history3("/login")
        })
    })

    return (
        <div>Logout</div>
    )
}

export default Logout