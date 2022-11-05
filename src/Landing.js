import { useContext } from "react"
import ChangeTheme from "./ChangeTheme";
import light from './light.png'
import dark from './dark.png'

function Landing(){
    const selectedTheme = useContext(ChangeTheme); //დავაკავშიროთ კომპონენტი ჰუკთან ერთად

    return(
        <div className={selectedTheme.theme}> 
        {/* ვიზუალური ცვლილებისთვის გამოვიყენოთ კლასები, რომელიც აღწერილია app.cssში */}
            <nav >
                <img src={light} onClick={() => selectedTheme.setTheme('light')}  className="icon"></img>
                {/* ფოტოზე დაკლიკებისას თემას შევცვლით ქივორდიდან გამომდინარე */}
                <img src={dark} onClick={() => selectedTheme.setTheme('dark')} className="icon"></img>
                    <ul>
                        <li>Home</li>
                        <li>Conact</li>
                        <li>About</li>
                    </ul>       
            </nav>
        </div>
    )
}

export default Landing 
