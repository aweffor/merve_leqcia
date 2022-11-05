import { useState } from 'react';
import './App.css';
import ChangeTheme from './ChangeTheme';
import Landing from './Landing';

function App() {
  const [theme,setTheme] = useState("dark")
 
  return(
    <ChangeTheme.Provider value={{theme,setTheme}}>
  {/* კომპონენტი რომელიც იყენებს useContext საჭიროა გამოვიძახოთ Providerთან ერთად,ხოლო მისი არგუმენტი იყოს ობიექტი */}
      <Landing/>
    </ChangeTheme.Provider>
    
  )
  }
export default App;

