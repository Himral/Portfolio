import logo from '../assets/mainphoto.png'
export default function Home()
{
    return (
    <div className="home">
       <img className= 'main-img'src={logo} alt="Logo" />
       <div className='home-content'>
        <h1>Hey, I'm Himral</h1>
       <p>An aspiring software developer, always eager to pick up new skills. A good listener. Loves working on new technologies.Grateful for the journey of learning and excited about the opportunities ahead in the world of software development.</p>
       
       </div>
       
    </div>
    )
}