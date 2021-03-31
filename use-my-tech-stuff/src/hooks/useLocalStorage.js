import  { useState } from "react"



const useLocalStorage = (key,initialValue) => {

    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)){
            return (localStorage.getItem(key))
        }
        localStorage.setItem(key, initialValue);
        return initialValue;
    });

    const setNewValue = value => {
        setValue(value);
        localStorage.setItem(key, value)
    }


    return [value,setNewValue]
}

export default useLocalStorage