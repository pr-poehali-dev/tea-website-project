import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-pattern py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-teagreen-dark mb-6">
            Откройте мир <span className="text-teagreen">зеленого чая</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Погрузитесь в многовековые традиции, изысканные вкусы и удивительную пользу различных сортов зеленого чая
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-teagreen hover:bg-teagreen-dark text-white"
              asChild
            >
              <Link to="/varieties">
                Изучить виды чая <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teagreen text-teagreen hover:bg-teagreen/10"
              asChild
            >
              <Link to="/benefits">
                Узнать о пользе
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
