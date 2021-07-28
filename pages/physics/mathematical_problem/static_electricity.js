import Layout from "@/components/Layout"
import VideoItem from "@/components/VideoItem"
export default function static_electricity() {
    return (
        <div>
            <Layout physics={true} math={true}>
                <h1 style={{ textAlign: "center" }}>
                      Static Electricity
                </h1>
                <VideoItem/>
              
            </Layout>
            
        </div>
    )
}
