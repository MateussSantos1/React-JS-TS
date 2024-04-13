import { useEffect, useRef } from "react";

export default function useIntervalo(callback: () => void, delay: number = 0){


    const savedCallback = useRef< () => void>();


    useEffect(() => {

        savedCallback.current = callback

    }, [callback]);

    useEffect(() =>{
        function tick(){
            //O ! confirma que terá esse evento!
            savedCallback.current!()
        }

        if( delay !== null){
            let id = setInterval(tick, delay)

            return () => clearInterval (id)
        }


    },[delay]);


}