import CategoryCarousel from "@/components/CategoryCarousel";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/ui/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
    </>
  );
};

export default Home;
