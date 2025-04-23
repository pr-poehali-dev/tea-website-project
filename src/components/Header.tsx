import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teagreen-light/50 backdrop-blur-sm sticky top-0 z-50 border-b border-teagreen/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-teagreen-dark font-bold text-2xl flex items-center gap-2">
            <span className="text-3xl">🍵</span>
            <span>ЧайМастер</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-teagreen-dark"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-teagreen-dark hover:text-teagreen font-medium">
            Главная
          </Link>
          <Link to="/varieties" className="text-teagreen-dark hover:text-teagreen font-medium">
            Виды чая
          </Link>
          <Link to="/benefits" className="text-teagreen-dark hover:text-teagreen font-medium">
            Польза
          </Link>
          <Link to="/brewing" className="text-teagreen-dark hover:text-teagreen font-medium">
            Как заваривать
          </Link>
          <Button variant="default" className="bg-teagreen hover:bg-teagreen-dark">
            Подписаться
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-teagreen/20 animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="text-teagreen-dark hover:text-teagreen font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/varieties" 
                className="text-teagreen-dark hover:text-teagreen font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Виды чая
              </Link>
              <Link 
                to="/benefits" 
                className="text-teagreen-dark hover:text-teagreen font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Польза
              </Link>
              <Link 
                to="/brewing" 
                className="text-teagreen-dark hover:text-teagreen font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Как заваривать
              </Link>
              <Button variant="default" className="bg-teagreen hover:bg-teagreen-dark w-full">
                Подписаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
