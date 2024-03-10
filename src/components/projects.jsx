import { useState } from "react"
import {NextUIProvider} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter,Image} from "@nextui-org/react";
export default function Projects()
{
const [projs,setproj] = useState([{
    image : "https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/b1cc4e063288e5161b14edad3569c5cb/best-to-do-list-apps.jpg",
    title : "Todo App",
    timeline : "Feb 2024",
    description : "Implemented a MERN stack app where the user can perform CRUD operations in the todo list",
    live : "",
    Github : "https://github.com/Himral/todo"
},{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYefC9l1MQEh85ffCB_0p5bIn4YegqHK_1Q&usqp=CAU",
    title : "Notes App",
    timeline : "Jan 2024",
    description : "Created a note taking app where the user can create , add , delete and search notes",
    live : "",
    Github : "https://github.com/Himral/notes-app"
},{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWNgoYXtJ7YIoUObSAsirhGsfutLftARXTg&usqp=CAU",
    title : "Chat Analyser",
    timeline : "Dec 2023",
    description : "Developed a WhatsApp chat analyser web application enabling quantitative analysis of chats via diverse visualization plots.",
    live : "",
    Github : "https://github.com/Himral/Chat-Analyser"
},{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAt-RnDpnHXAFPdMrYUsnZc86rp2jUymj1w&usqp=CAU",
    title : "Sorting Visualiser",
    timeline : "Dec 2023",
    description : "A React app to demonstrate sorting algorithms, showcasing their visualizations.",
    live : "",
    Github : "https://github.com/Himral/Sorting-Visualiser"
},{
    image : "https://plugins-media.makeupar.com/smb/blog/post/2022-03-01/8a82b89f-5ce9-4ee6-af45-f239b4d657ec.jpg",
    title : "Meme Generator",
    timeline : "June 2023",
    description : "This website allows the user to generate memes through writing text on a image",
    live : "https://memegenerator-himral.netlify.app/",
    Github : "https://github.com/Himral/Meme_Generator"
},{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwVBsh44oyMWqZXpHUASsKrh378uYi9keNg&usqp=CAU",
    title : "Travel Website",
    timeline : "June 2023",
    description : "This is a simple website showcasing differnt travel locations",
    live : "https://himral-travel-website.netlify.app/",
    Github : "https://github.com/Himral/travel-journal"
}])
    return (<div className="projects">
        {
            projs.map(function(project){
                return <div className="project-card">
                    <img src = {project.image}/>
                    <div className="project-header">
                        <p>{project.title}</p>
                    <p>{project.timeline}</p>
                        </div>
                    
                    <p>{project.description}</p>
                    <div className="project-footer">
                        <a href = {project.Github} target = "_blank"><button > Github</button></a>
                    <a href = {project.live} target = "_blank"><button> Live Link</button></a>
                    
                        </div>
                    
                    </div>
            })
        }
    </div>)
}