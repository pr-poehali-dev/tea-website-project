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
    description: "Самый популярный зеленый чай в Японии, с освежающим вкусом и травянистыми нотами.",
    image: "/placeholder.svg"
  },
  {
    id: "matcha",
    name: "Матча",
    origin: "Япония",
    description: "Молотый порошковый чай с ярким вкусом и высоким содержанием антиоксидантов.",
    image: "/placeholder.svg"
  },
  {
    id: "gunpowder",
    name: "Ганпаудер",
    origin: "Китай",
    description: "Чай, скрученный в маленькие шарики, напоминающие порох, с дымным ароматом.",
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый сорт зеленого чая обладает уникальными характеристиками, вкусом и ароматом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <CardDescription>{tea.description}</CardDescription>
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
