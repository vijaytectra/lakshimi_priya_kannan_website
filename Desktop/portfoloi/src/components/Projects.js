import websiteImg1 from '../asserts/web1.jpg';
import websiteImg2 from '../asserts/webimg.jpg';
import websiteImg3 from '../asserts/webimage.jpg';

export default function Projects() {
    const config = {
        projects : [
            {
                image : websiteImg1 ,
                description : 'Learning Management System',
                link : 'https://github.com/ishwaryagopalakrishnan/Learning-Management-System'
            },
             {
                image : websiteImg2,
                description : 'Banking Application',
                link : 'https://github.com/ishwaryagopalakrishnan'
            } ,
             {
                image : websiteImg3,
                description : 'Number guessing game',
                link : 'https://github.com/ishwaryagopalakrishnan'
            }
        
        ]
    }




    return<section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold '>Projects</h1>
            <p>These are some of my best projects. Ihave built these with React, MERN and taildwindCSS. Check them out.
            </p>

        </div>
        

        </div>
        <div  className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((projects) => (
            
                
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={projects.image} />
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{projects.description} </p>
                    <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={projects.link}>View Project</a>
                    </div>
                    </div>
                
               
                </div>
            
                ))}

            
            </div>
            

        </div>
            

    
    </section>
}