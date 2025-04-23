import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TeaType {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
}

const teaTypes: TeaType[] = [
  {
    id: "sencha",
    name: "Сенча",
    origin: "Япония",
    description: "Самый популярный зеленый чай в Японии, с освежающим вкусом и травянистыми нотами. Листья обрабатываются паром, что позволяет сохранить яркий зеленый цвет и максимум полезных веществ.",
    image: "/placeholder.svg"
  },
  {
    id: "matcha",
    name: "Матча",
    origin: "Япония",
    description: "Молотый порошковый чай с ярким вкусом и высоким содержанием антиоксидантов. Традиционно используется в японской чайной церемонии. Содержит много L-теанина, который способствует расслаблению и концентрации одновременно.",
    image: "/placeholder.svg"
  },
  {
    id: "gunpowder",
    name: "Ганпаудер",
    origin: "Китай",
    description: "Чай, скрученный в маленькие шарики, напоминающие порох, с дымным ароматом. Его плотная скрутка позволяет сохранять свежесть намного дольше. При заваривании листья разворачиваются, образуя яркий настой с лёгкой терпкостью.",
    image: "/placeholder.svg"
  },
  {
    id: "dragonwell",
    name: "Лунцзин (Колодец дракона)",
    origin: "Китай",
    description: "Элитный китайский чай с ровными, плоскими листьями. Отличается мягким, сладковатым вкусом с ореховыми нотами и нежным ароматом. Считается одним из лучших сортов зеленого чая в Китае, имеет древнюю историю и высоко ценится знатоками.",
    image: "/placeholder.svg"
  },
  {
    id: "gyokuro",
    name: "Гёкуро",
    origin: "Япония",
    description: "Премиальный японский чай, выращиваемый в тени перед сбором. Этот метод увеличивает содержание теина и L-теанина, придавая чаю сладковатый вкус с умами (пятый вкус) и минимальной горечью. Считается одним из самых изысканных японских чаев.",
    image: "/placeholder.svg"
  },
  {
    id: "biluochun",
    name: "Билочунь",
    origin: "Китай",
    description: "Знаменитый китайский зеленый чай с характерными спиралевидными листьями. Отличается фруктовым ароматом и нежным вкусом с цветочными нотами. Традиционно собирается ранней весной, когда чайные почки только начинают раскрываться.",
    image: "/placeholder.svg"
  }
];

const TeaVarieties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teagreen-dark mb-4">
            Популярные виды зеленого чая
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Каждый сорт зеленого чая обладает уникальными характеристиками, вкусом и ароматом. Различия возникают 
            благодаря региону произрастания, методам обработки и сбора листьев.
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Зеленый чай отличается от черного тем, что не подвергается процессу ферментации. После сбора листья 
            быстро высушивают или пропаривают, что позволяет сохранить больше антиоксидантов и полифенолов, 
            обеспечивающих многочисленные полезные свойства этого напитка.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaTypes.map((tea) => (
            <Card key={tea.id} className="hover:shadow-lg transition-shadow duration-300 border-teagreen/30">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={tea.image} 
                  alt={tea.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-teagreen-dark text-xl">{tea.name}</CardTitle>
                  <span className="inline-block px-2 py-1 bg-teagreen/10 text-teagreen text-sm rounded-md">
                    {tea.origin}
                  </span>
                </div>
                <CardDescription className="mt-2">{tea.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-teagreen text-teagreen hover:bg-teagreen/10"
                  asChild
                >
                  <Link to={`/varieties/${tea.id}`}>
                    Подробнее
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-teagreen/5 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-teagreen-dark mb-4">Как правильно заваривать зеленый чай</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-teagreen-dark mb-2">Основные правила заваривания:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Используйте воду температурой 70-85°C (не кипяток!)</li>
                <li>Предварительно прогрейте чайник или гайвань</li>
                <li>Соблюдайте пропорции: обычно 3-5 г чая на 200 мл воды</li>
                <li>Время заваривания: от 1 до 3 минут в зависимости от сорта</li>
                <li>Японские чаи обычно требуют более низкой температуры, чем китайские</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-teagreen-dark mb-2">Особенности разных видов:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Сенча:</span> 70°C, 1-2 минуты</li>
                <li><span className="font-medium">Матча:</span> 70-80°C, взбивается бамбуковым венчиком</li>
                <li><span className="font-medium">Лунцзин:</span> 75-80°C, 1-2 минуты</li>
                <li><span className="font-medium">Гёкуро:</span> 50-60°C, до 2 минут</li>
                <li><span className="font-medium">Ганпаудер:</span> 80-85°C, 2-3 минуты</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-teagreen hover:bg-teagreen-dark"
            asChild
          >
            <Link to="/varieties">
              Посмотреть все виды
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeaVarieties;
