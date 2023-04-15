import React from 'react'
import Image from 'next/image'
import nutritionist1 from '../public/nutritionist1.jpg'
import nutritionist2 from '../public/nutritionist2.jpg'
import nutritionist3 from '../public/nutritionist3.jpg'
import trainer2 from '../public/t2.jpg'
import trainer3 from '../public/t3.jpg'
import trainer1 from '../public/t1.jpg'

function StaffList() {
  return (
    
    <div className='pb-6 mx-4'>
      <hr className='border-cyan-400'/>
      <div className='my-4'>
        <h1 className='text-3xl text-center'>Meet our health specialists</h1>
    </div>
    <h2 className='text-center text-xl py-3 font-bold'>Nutritsionists</h2>
    <div className='flex flex-col place-items-center md:flex-row md:justify-around bg-cyan-100 pt-6 my-4 rounded-2xl'>
     
      <div className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        src={nutritionist1}
        alt="staff"
        />
        <div className='max-w-[350px] min-h-[250px]'>
           <h2 className='text-center py-1'>John Smith</h2>
          <p className='text-center py-2'> Recipe Creator and Chef</p>
          <p className='text-xs'>John Smith is a renowned nutritionist who has been creating healthy and delicious recipes 
            for over a decade. With a background in culinary arts, John knows how to create meals that 
            are both nutritious and satisfying. His recipes have been featured in numerous publications, 
            and he has worked with professional athletes and celebrities to help them achieve their health 
            and fitness goals. In his spare time, John enjoys experimenting with new ingredients and techniques 
            to create innovative and exciting dishes.</p>
        </div>
      </div>
      <div className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        src={nutritionist2}
        alt="staff"
        />
        <div className='max-w-[350px] min-h-[250px]'>
          <h2 className='text-center py-1' >David Lee</h2>
          <p className='text-center py-2'>Yoga and Mindful Eating Expert</p>
          <p className='text-xs'>David Lee is a nutritionist who specializes in the connection between food and mental health.
            With a background in yoga and mindfulness, David believes that what we eat can have a profound 
            impact on our mental and emotional well-being. He works with his clients to create customized
              meal plans that incorporate mindfulness practices and yoga principles. David also offers private 
              yoga sessions to help his clients reduce stress and anxiety.</p>
        </div>
      </div>
      <div className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        src={nutritionist3}
        alt="staff"
        />
        <div className='max-w-[350px] min-h-[250px]'>
           <h2 className='text-center py-1'>Lisa Jones</h2>
          <p className='text-center py-2'>Gut Health Specialist</p>
          <p className='text-xs'>Lisa Chen is a nutritionist who specializes in gut health. She has a PhD in 
            nutrition and has conducted extensive research on the gut microbiome and its 
            impact on overall health. Lisa works with her clients to create customized meal 
            plans that support a healthy gut microbiome. She also offers personalized 
            supplement recommendations and provides guidance on lifestyle factors that can affect 
            gut health, such as stress management and sleep hygiene. Lisa is passionate about educating 
            her clients on the importance of gut health and helping them achieve optimal wellness.</p>
        </div>
      </div>
    </div>
    <h2 className='text-center text-xl py-3 font-bold'>Trainers</h2>
    <div className='flex flex-col place-items-center md:flex-row md:justify-around bg-cyan-100 pt-6 rounded-2xl'>

      <div className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        alt='trainer'
        src={trainer1}
        />
        <div className='max-w-[350px] min-h-[250px]'>
           <h2 className='text-center py-1'>Sarah Lee</h2>
          <p className='text-center py-2'>Pilates and Yoga Instructor</p>
          <p className='text-xs'>Sarah Lee is a personal trainer who specializes in Pilates and yoga. With a 
            background in dance and a passion for movement, Sarah believes in the power 
            of Pilates and yoga to transform the body and mind. She works with her clients to 
            improve flexibility, balance, and core strength, as well as to reduce stress and 
            improve mental clarity. Sarah's training style is gentle yet effective, and she is 
            skilled at modifying exercises to accommodate clients of all fitness levels.</p>
          </div>
      </div>
      <div  className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        alt='trainer'
        src={trainer2}
        />
        <div className='max-w-[350px] min-h-[250px]'>
          <h2 className='text-center py-1'>Ashley Williams</h2>
          <p className='text-center py-2'>High-Intensity Interval Training (HIIT) Coach</p>
          <p className='text-xs'>Ashley Williams is a personal trainer who specializes in high-intensity interval 
            training (HIIT). With a background in sports science and a love of pushing herself 
            to the limit, Ashley is passionate about helping her clients achieve their full potential.
            Her training style is intense and challenging, but also supportive and encouraging. 
            Ashley works with her clients to improve cardiovascular fitness, build lean muscle, and increase 
            overall endurance. She believes that HIIT is one of the most effective ways to achieve a 
            full-body workout in a short amount of time.</p>
        </div>
      </div>
      <div  className='flex flex-col place-items-center'>
        <Image
        className='max-h-[200px] max-w-[300px] rounded-xl'
        alt='trainer'
        src={trainer3}
        />
        <div className='max-w-[350px] min-h-[250px]'>
            <h2 className='text-center py-1' >Mark Davis</h2>
            <p className='text-center py-2'>Strength and Conditioning Coach</p>
            <p className='text-xs'>Mark Davis is a personal trainer who specializes in strength and conditioning. 
              With over 15 years of experience in the fitness industry, Mark has worked with 
              clients of all fitness levels, from beginners to professional athletes. He 
              is passionate about helping his clients achieve their fitness goals, whether that 
              means building strength, increasing endurance, or improving overall fitness. 
              Mark believes in a holistic approach to fitness, incorporating nutrition and 
              lifestyle factors into his training programs.</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default StaffList
