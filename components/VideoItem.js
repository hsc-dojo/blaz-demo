import { useEffect } from 'react'


export default function VideoItem({json, chapterName}) {

    useEffect(() => {
        const videos = JSON.parse(JSON.stringify(json))

        let videoNumber = "auto"
        let videoList = ''
        let height = "360"
        let width = "100%"
        let allow = "fullscreen"
        let className="screen"

        videos.map(video => {

            if (video.Chapter === chapterName) {
                videoList +=
                    `
                <li 
                onClick= "{{
                      document.querySelector('.player').innerHTML = '<iframe class=${className} src=${video.Link}  allow=${allow} width=${width}> </iframe> '
                      document.querySelector('.details').innerHTML='  <p>Password:  ${video.password} </p> <h2>${video.QuestionTitle} </h2> ${video.Subject} | ${video.Author} | ${video.Chapter} '
                      window.scrollTo(0,0)
                    }}">
                ${video.QuestionTitle}</li>
             `

                document.querySelector('.video_list').innerHTML = videoList
            }

        })
    })
    return (
        <div className="videoItem">
          <div className="display">
            <div  className = "player" >
                <iframe 
                src = {
                   "/image/brand/brand.svg"
                }
                height = "360"
                        width="100%"
                        allow="fullscreen"
                    frameBorder="0"></iframe>
                
            </div>
            <div className="details"></div>
         </div>
            <div className="playlist">
                 <ul className="video_list">

                 </ul>
            </div>
        </div>
    )
}
