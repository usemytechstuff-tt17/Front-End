import  { useState } from "react"

const useLocalStorage = (key,initialValue) => {

    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)){
            return (localStorage.getItem(key))
        }
        if (initialValue !== false)
        localStorage.setItem(key, initialValue);
        return initialValue;
    });

    const setNewValue = value => {
        setValue(value);
        if (value !== false){
        localStorage.setItem(key, value)
        }
    }

    return [value,setNewValue]
}

export default useLocalStorage