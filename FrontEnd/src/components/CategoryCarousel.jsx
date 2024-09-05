import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";

const CategoryCarousel = () => {
  const category = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Data Scientist",
    "UX/UI Designer",
    "Graphic Designer",
  ];

  return (
    <section className="w-full py-10">
      <Carousel
        className="w-full max-w-xl mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline">{item}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CategoryCarousel;
