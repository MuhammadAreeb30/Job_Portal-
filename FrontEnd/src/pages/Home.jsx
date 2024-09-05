import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestJob from "@/components/LatestJob";
import Navbar from "@/components/ui/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
      <Footer />
    </>
  );
};

export default Home;
