import Layout from "@/components/Layout"
import englishlitQuestions from "../../json/math/ShortQuestions"
import { useEffect } from "react"
   

export default function PhysicsPage() {
    
    useEffect(() => {
        let questionNumber = 1
        let questionContent = ``

        englishlitQuestions.map(question => {
            questionContent += `
        <div class='card'> 
            <div class='card-body'>
                <div  class = 'Chronologyfront-${questionNumber}'>
                  <h5 class='text-primary'> ${question.question} </h5>
                  <button class='btn btn-danger' onClick="{{
                      document.querySelector('.Chronologyfront-${questionNumber}').classList.toggle('d-none')
                      document.querySelector('.Chronologyback-${questionNumber}').classList.toggle('d-none')
                  }}"> Read </button>
                </div>
                <div class = 'Chronologyback-${questionNumber} d-none'>
                 <h6 class="font-weight-bold lead">${question.question} </h6>
                  <p>  ${question.answer} </p>
                 
                  <button  class = 'btn btn-danger'
                  onClick = "{{
                  document.querySelector('.Chronologyfront-${questionNumber}').classList.toggle('d-none')
                  document.querySelector('.Chronologyback-${questionNumber}').classList.toggle('d-none')
                  }
                  }
                  "> Try Again </button>
                </div>
            </div>
        </div>
    `
            document.querySelector('.short-questions').innerHTML = questionContent
            questionNumber++
        })

   })
     
   
    return (
        <div>
            <Layout math={true}>
                <h1 style={{textAlign:'center'}}>Physics</h1>
                <h2 className="short-questions card-columns"></h2>
               
            </Layout>
            
        </div>
    )
}
