import Layout from "@/components/Layout"
import VideoItem from "@/components/VideoItem"
import numericalProblems from "@/json/physics/numerical_problems"
export default function static_electricity() {
    return (
        <div>
            <Layout physics={true} math={true}>
                <h1 style={{ textAlign: "center" }}>
                      Work Energy and power
                </h1>
                <VideoItem json={numericalProblems} chapterName={"Work, Energy and Power"}/>
              
            </Layout>
            
        </div>
    )
}
