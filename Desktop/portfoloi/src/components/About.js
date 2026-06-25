import AboutmeeImage from '../asserts/About mee.png'

export default function About () {
    const config ={
        line1:'NPTEL gold eligt with topper 5% in Java and have silver elit in Object oriented programming , Cloud computing, Internet of things and Discipline star certificate',
        line2:'Iam well and good in Java programming ,html, css , javascript , react , cloud computing , internet of thing and eagerly learning things',
        line3:'I have also complete two internships and current working as an intern in Tectra Technology',

    }



    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutmeeImage} />
        </div>
        <div className=' md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
             <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold '>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
        </div>
           
        </div>
    </section>

}