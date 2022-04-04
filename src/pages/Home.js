import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='banner'>
      <h1>Welcome to my webpage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis!</p>
      <div className='action-wrap'>
        <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
        <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>
      </div>
      </div>
    </div>
  )
}

export default withLayout(Home)