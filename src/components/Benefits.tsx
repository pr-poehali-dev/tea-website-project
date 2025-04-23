import { Shield, Brain, Heart, Leaf } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="p-6 bg-teagreen-light/50 rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="bg-teagreen/20 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-teagreen">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-teagreen-dark mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Иммунная система",
      description: "Антиоксиданты в зеленом чае помогают укрепить иммунитет и защитить организм от болезней."
    },
    {
      icon: <Brain size={24} />,
      title: "Когнитивные функции",
      description: "Регулярное употребление зеленого чая может улучшить память, концентрацию и общие когнитивные способности."
    },
    {
      icon: <Heart size={24} />,
      title: "Здоровье сердца",
      description: "Снижает риск сердечно-сосудистых заболеваний и помогает поддерживать здоровый уровень холестерина."
    }
  ];

  return (
    <section className="py-16 bg-teagreen/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-teagreen" />
              <span className="text-teagreen font-medium">Полезные свойства</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teagreen-dark mb-6">
              Польза зеленого чая для здоровья
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Зеленый чай богат полифенолами, катехинами и другими антиоксидантами, которые оказывают благотворное влияние на организм. Вот лишь некоторые из многочисленных преимуществ регулярного употребления зеленого чая:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Польза зеленого чая"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
