import { Button } from '@mui/material'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] h-full flex items-center flex-col">
      <p className="text-white tracking-wider text-2xl mb-10 p-5">proudly presenting</p>
      <h1 className="text-orange-500 font-bold text-3xl m-10">The Amaatra Academy</h1>
      <h1 className="text-yellow-500 font-bold text-7xl">Grad 2022</h1>
      <p className="text-white tracking-widest text-2xl mb-10 p-5 text-center">Congratulation class of 2022</p>
      <p className="text-yellow-400 tracking-wider text-2xl mb-10 p-5"> Saturday, March 12, 2022</p>
      <a href='https://www.google.com/maps/place/Aurum+Brew+Works/@12.9107114,77.6768953,15z/data=!4m9!1m2!2m1!1saurum+sarjapur!3m5!1s0x3bae13afe6ef787f:0x77ece6ff5c3e32c6!8m2!3d12.9107114!4d77.68565!15sCg5hdXJ1bSBzYXJqYXB1cloQIg5hdXJ1bSBzYXJqYXB1cpIBB2JyZXdwdWI'>
      <p className="text-yellow-400 tracking-wider text-2xl mb-10 p-5 text-center"> @ Aurum Sarjapur</p>
      <p className="text-white tracking-wider text-2xl mb-10 p-5 text-center"> Kindly Pay the Rs. 1000 by March 9, 2022</p>
      </a> 
      <div className='mb-10'>
      <Button variant='contained' className='bg-yellow-500 text-black' onClick={()=> router.push("/payNow")} >Pay now. 1000/-</Button>
    </div>
    <div className='mb-10'>
      <Button variant='contained' className='bg-yellow-500 text-black ' onClick={()=> router.push('https://drive.google.com/file/d/1VrycOBf1P03m1HQV8Fw-Huz7ofco1kz3/view?usp=sharing')} >download invite!!</Button>
      </div>
      <div className='mb-10'>
      <Button variant='contained' className='bg-yellow-500 text-black ' onClick={()=>router.push('https://aurumbrew.works/')} >check venue!!</Button>
      </div>
      <div className='mb-10'>
      <Button variant='contained' className='bg-yellow-500 text-black ' onClick={()=>router.push('/nameList')} >Check who all are coming</Button>
     </div> 
      
          </div>
  )
}
