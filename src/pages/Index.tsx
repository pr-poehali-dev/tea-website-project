import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeaVarieties from "@/components/TeaVarieties";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TeaVarieties />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
