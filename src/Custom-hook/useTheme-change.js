import React,{useState,useEffect} from "react";
const useThemeChange = (initialValue=false) => {
  const [value, setValue] = useState(initialValue);
  
    const toggle = () => {
      setValue( !value);
    };

      useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark'); // or document.body
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [value]);

    return {value, toggle};
}
export default useThemeChange;