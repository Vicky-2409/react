import { useEffect, useState } from "react";

const useCheckStatus = () => {
    const [networkStatus, setnetworkStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("offline",(event)=>{
            setnetworkStatus(false)
        })
    
        window.addEventListener("online",(event)=>{
            setnetworkStatus(true)
        })
    },[])

    return networkStatus
}

export default useCheckStatus;