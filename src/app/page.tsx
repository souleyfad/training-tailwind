import Image from "next/image";
import Header from "@/components/layout/header";
import Banner from "@/components/banner";
import About from "@/components/about";
import AgeCategories from "@/components/age_categorie";
import ProgramList from "@/components/programmes";
import ComingSection from "@/components/coming_section";
import Temoignages from "@/components/temoignages";
import Partener from "@/components/partener";
import ArchivesList from "@/components/archives";
import InfoSection from "@/components/infosection";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <div className="container mx-auto px-4 md:px-2 bg-gradient-to-br">
        <Header />
        <Banner></Banner>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div className="bg-white mx-auto px-4 md:px-2 p-16">
        <AgeCategories></AgeCategories>
      </div>
      <div id="programmes">
        <ProgramList></ProgramList>
      </div>
      <div id="news">
        <ComingSection></ComingSection>
      </div>
        <Temoignages></Temoignages>
        <Partener></Partener>
      <div className="bg-[#F4F4F4] mx-auto">
        <ArchivesList></ArchivesList>
      </div>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </main>
  );
}
