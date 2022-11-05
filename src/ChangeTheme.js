import { createContext } from "react";

const ChangeTheme = createContext({
    theme: "",
    setTheme: () =>{}
})
// createContext მივაწოდეთ ობიექტი და ფუნქცია რომელის დამუშავების ლოგიკაც აღწერილია landing ის აიკონების დაკლიკებისას
export default ChangeTheme;