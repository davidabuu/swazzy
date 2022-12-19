import Header from "../src/components/Header";
import UserWebLayout from "../src/components/UserWebLayout";
import {Button} from 'antd'

export default function Home() {
  return (
    <UserWebLayout webtitle='Solar Plant'>
      <div className="container-landing">
     <div className="img-overlay">
     <Header/>
     <div className="intro-container">
      <h1>Monitoring of Solar Power Plant</h1>
      <div className="btn">
        <Button className="btn">LOGIN</Button>
      </div>
     </div>
     </div>
              </div>
    </UserWebLayout>
  )
}
