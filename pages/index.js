import Navbar from "../src/compoments/Navbar";
import UserWebLayout from "../src/compoments/UserWebLayout";

export default function Home() {
  return (
    <UserWebLayout webtitle='Home Page'>
      <div className="font-sans img-bg bg-cover bg-center  h-screen">
        <Navbar />
      </div>
    </UserWebLayout>
  );
}
