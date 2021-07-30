import Layout from "@/components/Layout"
import VideoItem from "@/components/VideoItem"
import numericalProblems from "@/json/physics/numerical_problems"


export default function static_electricity() {
    return (
        <div>
            <Layout physics={true} math={true} title={'Numerical Problems | Giyas Sir'}>
                <h1 style={{ textAlign: "center" }}>
                      Static Electricity
                </h1>
                <VideoItem json={numericalProblems} chapterName={"Static Electricity"} />
              
            </Layout>
            
        </div>
    )
}
