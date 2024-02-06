import React from 'react'
import { useState,useEffect } from 'react';
const useOnLine = () => {
    const [isOnLine,setisOnLine]=useState(true);

    useEffect(()=>{
        const handleOnLine=()=>{
            setisOnLine(true);
        };

        const handleOffLine=()=>{
            setisOnLine(false);
        }
        window.addEventListener('online',handleOnLine);
        window.addEventListener('offline',handleOffLine);
    
        return()=>{
            window.removeEventListener('online',handleOnLine);
            window.removeEventListener('offline',handleOffLine);
        }

        
    },[]);

    return isOnLine;
}

export default useOnLine;
