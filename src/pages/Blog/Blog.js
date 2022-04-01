
import React from 'react'

function BlogList() {
  return (
    <div>
        <div>
        {posts.map((post)=>(
            <div key={post.id} style = {{display: "flex", margin: "20px 0"}}>
                <img src={`/images/${post.image}`} alt="" height={200} width={200} />
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.extract}</p>
                    <button className='btn-contain' style={{alignSelf: "end"}}>Read More</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Blog