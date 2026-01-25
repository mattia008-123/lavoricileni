import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-eco-green-100">
        <h1 className="text-5xl font-extrabold mb-6 text-eco-green-700 leading-tight">
          Benvenuto nel tuo Spazio Progetti Sostenibili
        </h1>
        <p className="text-xl text-eco-gray-600 mb-8">
          Esplora idee innovative per la transizione ecologica e la coesione sociale, ispirate al PNRR.
        </p>
        <Link to="/project-details">
          <Button className="bg-eco-green-500 hover:bg-eco-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Scopri il Progetto "Orto Didattico"
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;