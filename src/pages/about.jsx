import React from 'react'

const About = () => {
  return (
    <div>
      
      <h1>紹介ページ </h1>
      {/* 講義動画と文章などを適当に */}
      {/* <iframe width="500" height="300" margin="20"
        src="https://www.youtube.com/embed/v=ubdmNbGy160" frameborder="1px">
      </iframe> */}
      <iframe width="530" height="330" 
        src="https://www.youtube.com/embed/Oo7GoLAFow0" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

          
       </iframe>
   
        <h3>前回の講義の様子</h3>
        <h2>前回は、Githubを利用して作業することを想定し、ブランチを切るなどをしました！</h2>
        </div>
  )
}

export default About
