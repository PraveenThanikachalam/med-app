import Content from "./components/organisms/Content";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center items-start">
      <div className="flex w-full lg:w-[1350px] justify-start items-start flex-col">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
