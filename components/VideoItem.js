import styles from '@/styles/VideoItem.module.css'
import { useEffect } from 'react'


export default function VideoItem() {

    useEffect(() => {
        const videos = JSON.parse(JSON.stringify(
           [{
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Work, Energy and Power",
                   "QuestionTitle": "Numerical Problem 32",
                   "Link": "https://player.vimeo.com/video/552232437",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 1",
                   "Link": "https://player.vimeo.com/video/580661838",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 2",
                   "Link": "https://player.vimeo.com/video/580661905",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 3",
                   "Link": "https://player.vimeo.com/video/580661974",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 4",
                   "Link": "https://player.vimeo.com/video/580766548",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 5",
                   "Link": "https://player.vimeo.com/video/580766670",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 6",
                   "Link": "https://player.vimeo.com/video/580766808",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 7",
                   "Link": "https://player.vimeo.com/video/580767106",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 8",
                   "Link": "https://player.vimeo.com/video/580662457",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 9",
                   "Link": "",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 10",
                   "Link": "https://player.vimeo.com/video/580662520",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 11",
                   "Link": "https://player.vimeo.com/video/580662580",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 12",
                   "Link": "",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 13",
                   "Link": "https://player.vimeo.com/video/580662668",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 14",
                   "Link": "https://player.vimeo.com/video/580662723",
                   "password": "N/A"
               },
               {
                   "Subject": "Physics",
                   "Author": "Dr. Md. Giyasuddin Ahmed",
                   "Chapter": "Static Electricity",
                   "QuestionTitle": "Numerical Problem 15",
                   "Link": "https://player.vimeo.com/video/580662791",
                   "password": "N/A"
               }
           ]
        ))

        let videoNumber = "auto"
        let videoList = ''
        let height = "360"
        let width = "100%"
        let allow = "fullscreen"
        let className="screen"

        videos.map(video => {

            if (video.Chapter === "Static Electricity") {
                videoList +=
                    `
                <li 
                onClick= "{{
                      document.querySelector('.player').innerHTML = '<iframe class=${className} src=${video.Link}  allow=${allow} width=${width}> </iframe> '
                      document.querySelector('.details').innerHTML='  <p>Password:  ${video.password} </p> <h2>${video.QuestionTitle} </h2> ${video.Subject} | ${video.Author} | ${video.Chapter} '
                    
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
