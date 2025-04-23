import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6 text-teagreen">🍵</div>
          <h1 className="text-4xl font-bold text-teagreen-dark mb-4">Страница не найдена</h1>
          <p className="text-gray-600 mb-8">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Button asChild className="bg-teagreen hover:bg-teagreen-dark">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
