import styles from '@/styles/VideoItem.module.css'
import { useEffect } from 'react'


export default function VideoItem() {

    useEffect(() => {
        const videos = JSON.parse(JSON.stringify(
            [{
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-1",
                    "Link": "https://player.vimeo.com/video/542031038",
                    "password": "crashphysics2k2k"
                },
                {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-2",
                    "Link": "https://player.vimeo.com/video/542029310",
                    "password": "crashphysics2k2k"
                },
                {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-3",
                    "Link": "https://player.vimeo.com/video/542029433",
                    "password": "crashphysics2k2k"
                },
                {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-4",
                    "Link": "https:/player.vimeo.com/video/542029566",
                    "password": "crashphysics2k2k"
                },
                {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.2,
                    "QuestionTitle": "SU-5",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                },

                {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-6",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }, {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-7",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }, {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-8",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }, {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-9",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }, {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-10",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }, {
                    "Subject": "Math",
                    "Author": "SU Ahmed",
                    "Chapter": 1.1,
                    "QuestionTitle": "SU-11",
                    "Link": "https://player.vimeo.com/video/542029690",
                    "password": "crashphysics2k2k"
                }
            ]
        ))

        let videoNumber = 1
        let videoList = ''
        let height = 460
        let width = "100%"

        videos.map(video => {

            if (video.Chapter === 1.1) {
                videoList +=
                    `
                <li 
                onClick= "{{
                      document.querySelector('.player').innerHTML = '<iframe src=${video.Link} height=${height} width=${width}> </iframe> '
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
            <div className="player">
                <iframe src="https://player.vimeo.com/video/542029310" height="360" width="100%"
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
