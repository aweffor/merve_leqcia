import { useContext } from "react"
import ChangeTheme from "./ChangeTheme";

const users =[
    {
        "id":7,
        "email":"michael.lawson@reqres.in",
        "first_name":"Michael",
        "last_name":"Lawson",
        "avatar":"https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id":8,
        "email":"lindsay.ferguson@reqres.in",
        "first_name":"Lindsay",
        "last_name":"Ferguson",
        "avatar":"https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id":9,
        "email":"tobias.funke@reqres.in",
        "first_name":"Tobias",
        "last_name":"Funke",
        "avatar":"https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id":9,
        "email":"tobias.funke@reqres.in",
        "first_name":"Tobias",
        "last_name":"Funke",
        "avatar":"https://reqres.in/img/faces/9-image.jpg"
    }
]
function DivElement(){
    const selectedTheme = useContext(ChangeTheme);

    return(
        <div  className={selectedTheme.theme}>
            {
                users.map(element =>(
                
                <div key={element.id}  className="userDiv" >
                    {element.first_name + " " + element.last_name }
                    <img src={element.avatar}></img>
                    <button>Add Friend</button>
                </div>
                ))
                
            }
            <button onClick={() => selectedTheme.setTheme('light')}>Light</button>
            <button onClick={() => selectedTheme.setTheme('dark')}>Dark</button>
        </div>
    )
}

export default DivElement // აუცილებლად უნდა გამოვიყენოთ forwardRef 
