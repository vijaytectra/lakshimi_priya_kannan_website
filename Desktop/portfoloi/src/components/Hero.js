import aboutmeeeImg from '../asserts/about meee .png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle:'Im a Full-stack developer' ,
        social: {
            github : 'https://github.com/ishwaryagopalakrishnan' ,
            linkedin : 'https://www.linkedin.com/in/ishwarya-gopalakrishnan-19a5332a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' 

        }
    }



    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div  className='md:w-1/2 flex flex-col' >
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Ishwarya</span>
        <p className='text-2l'>{config.subtitle}</p>
       </h1>

        
        <div className='flex py-10 '>
            <a href={config.social.github} className='pr-5 hover:text-white' >< AiOutlineGithub size={40}  /></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}  /></a>

        </div>
        </div>
       
       <img  className='md:w-1/3' src={aboutmeeeImg} />
    </section>
}