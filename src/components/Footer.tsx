import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teagreen-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="text-2xl">🍵</span>
              <span>ЧайМастер</span>
            </Link>
            <p className="text-teagreen-light/80 mb-4">
              Погрузитесь в удивительный мир зеленого чая: история, польза, традиции и культура
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-teagreen-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-teagreen-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teagreen-light">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-teagreen-light/80 hover:text-white">Главная</Link></li>
              <li><Link to="/varieties" className="text-teagreen-light/80 hover:text-white">Виды чая</Link></li>
              <li><Link to="/benefits" className="text-teagreen-light/80 hover:text-white">Польза</Link></li>
              <li><Link to="/brewing" className="text-teagreen-light/80 hover:text-white">Как заваривать</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Основные виды</h3>
            <ul className="space-y-2">
              <li><Link to="/varieties/sencha" className="text-teagreen-light/80 hover:text-white">Сенча</Link></li>
              <li><Link to="/varieties/matcha" className="text-teagreen-light/80 hover:text-white">Матча</Link></li>
              <li><Link to="/varieties/gunpowder" className="text-teagreen-light/80 hover:text-white">Ганпаудер</Link></li>
              <li><Link to="/varieties/longjing" className="text-teagreen-light/80 hover:text-white">Лунцзин</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <p className="text-teagreen-light/80 mb-2">Электронная почта: info@teamaster.ru</p>
            <p className="text-teagreen-light/80 mb-2">Телефон: +7 (800) 123-45-67</p>
            <p className="text-teagreen-light/80">Адрес: г. Москва, ул. Чайная, 42</p>
          </div>
        </div>
        
        <div className="border-t border-teagreen-light/20 mt-8 pt-8 text-center text-teagreen-light/60">
          <p>© {new Date().getFullYear()} ЧайМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
