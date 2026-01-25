"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const project = {
    name: "Orto Didattico e Comunitario Sostenibile: Coltiviamo il Futuro",
    context: "Scuole primarie e secondarie, con il coinvolgimento attivo della comunità locale (famiglie, associazioni, anziani).",
    idea: "Il progetto prevede la creazione e la gestione di un orto didattico all'interno degli spazi scolastici o in un'area verde comunale, trasformandolo in un laboratorio a cielo aperto per l'educazione ambientale e un punto di incontro per la comunità. L'orto sarà gestito seguendo principi di agricoltura biologica e sostenibile.",
    objectives: [
      {
        title: "Obiettivo Educativo (Missione 2 - Transizione Ecologica)",
        points: [
          "Sensibilizzare studenti e cittadini sull'importanza della sostenibilità ambientale, dell'agricoltura a km 0, della biodiversità e del consumo consapevole.",
          "Fornire competenze pratiche su tecniche di coltivazione biologica, compostaggio, risparmio idrico e gestione delle risorse naturali.",
          "Promuovere la ricerca e l'innovazione a piccola scala, sperimentando soluzioni ecologiche per la cura dell'orto.",
        ],
      },
      {
        title: "Obiettivo Ambientale (Missione 2 - Rivoluzione Verde)",
        points: [
          "Creare uno spazio verde che aumenti la biodiversità locale (attraendo insetti impollinatori e piccoli animali).",
          "Ridurre l'impronta ecologica attraverso la produzione di cibo a basso impatto ambientale e la riduzione degli sprechi.",
          "Implementare pratiche sostenibili come il compostaggio dei rifiuti organici, l'uso di sistemi di irrigazione efficienti (es. raccolta acqua piovana) e l'eliminazione di pesticidi chimici.",
        ],
      },
      {
        title: "Obiettivo Sociale (Missione 5 - Inclusione e Coesione Sociale)",
        points: [
          "Favorire l'inclusione di studenti con diverse abilità, anziani, volontari e famiglie, creando un ambiente di apprendimento e collaborazione intergenerazionale.",
          "Rafforzare il senso di comunità e appartenenza attraverso attività condivise e la cura collettiva di un bene comune.",
          "Promuovere stili di vita sani e il benessere psicofisico grazie al contatto con la natura e al consumo di prodotti freschi e genuini.",
        ],
      },
    ],
    activities: [
      {
        title: "Fase di Progettazione Partecipata",
        points: [
          "Coinvolgimento di studenti, insegnanti, genitori e esperti agronomi locali per disegnare l'orto (scelta delle colture, layout, sistemi di irrigazione).",
          "Ricerca e selezione di sementi autoctone e resistenti.",
        ],
      },
      {
        title: "Realizzazione e Allestimento",
        points: [
          "Preparazione del terreno, costruzione di aiuole rialzate (se necessario), installazione di un sistema di compostaggio e di un sistema di raccolta dell'acqua piovana.",
          "Piantumazione e semina delle prime colture.",
        ],
      },
      {
        title: "Laboratori Didattici e Pratici",
        points: [
          "Per gli studenti: Lezioni settimanali sull'orto, dalla semina alla raccolta, passando per la cura delle piante, il riconoscimento delle erbe spontanee e la lotta biologica ai parassiti.",
          "Per la comunità: Workshop aperti su temi come il giardinaggio sostenibile, la preparazione di conserve, l'importanza degli impollinatori.",
        ],
      },
      {
        title: "Gestione Comunitario dell'Orto",
        points: [
          "Creazione di un calendario di turni per la cura dell'orto (innaffiatura, diserbo, raccolta) che coinvolga studenti, famiglie e volontari.",
          "Organizzazione di 'Giornate dell'Orto Aperto' per condividere i prodotti e le esperienze.",
        ],
      },
      {
        title: "Monitoraggio e Valutazione",
        points: [
          "Monitoraggio della crescita delle piante, della quantità di rifiuti organici compostati e dell'acqua risparmiata.",
          "Raccolta di feedback dai partecipanti per migliorare il progetto.",
        ],
      },
    ],
    benefits: [
      {
        category: "Ambientali",
        points: [
          "Aumento della Biodiversità: L'orto diventerà un habitat per insetti utili (api, farfalle) e piccoli animali, contribuendo alla salute dell'ecosistema locale.",
          "Riduzione dell'Inquinamento: Minore utilizzo di prodotti chimici (pesticidi, fertilizzanti) e riduzione delle emissioni di CO2 grazie alla produzione a km 0.",
          "Risparmio di Risorse: Ottimizzazione dell'uso dell'acqua attraverso sistemi di raccolta e irrigazione efficienti.",
          "Gestione dei Rifiuti: Trasformazione dei rifiuti organici in compost, riducendo la quantità di scarti destinati alla discarica.",
          "Educazione alla Sostenibilità: Gli studenti e la comunità impareranno pratiche concrete per un futuro più verde.",
        ],
      },
      {
        category: "Sociali",
        points: [
          "Apprendimento Attivo: Gli studenti acquisiranno conoscenze scientifiche e competenze pratiche in modo divertente e coinvolgente.",
          "Coesione Sociale: L'orto diventerà un luogo di incontro e collaborazione, rafforzando i legami tra generazioni e culture diverse.",
          "Inclusione: Offrirà opportunità di partecipazione a persone di tutte le età e abilità, valorizzando il contributo di ciascuno.",
          "Benessere: Il contatto con la natura e l'attività fisica all'aria aperta contribuiranno al benessere psicofisico dei partecipanti.",
          "Alimentazione Sana: Promozione di una dieta più sana grazie alla disponibilità di prodotti freschi e alla consapevolezza sull'origine del cibo.",
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center text-eco-blue-500 hover:text-eco-blue-700 transition-colors mb-6 rounded-full p-2 hover:bg-eco-blue-50">
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span className="font-medium">Torna alla Home</span>
      </Link>

      <Card className="mb-8 rounded-lg shadow-lg border-eco-green-200">
        <CardHeader className="bg-eco-green-500 text-white rounded-t-lg p-6">
          <CardTitle className="text-3xl font-bold text-center">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-eco-gray-700">
          <p className="text-lg mb-4 text-center font-semibold">{project.context}</p>
          <p className="text-md leading-relaxed">{project.idea}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="rounded-lg shadow-md border-eco-blue-200">
          <CardHeader className="bg-eco-blue-500 text-white rounded-t-lg p-4">
            <CardTitle className="text-2xl font-semibold">Obiettivi del Progetto</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {project.objectives.map((obj, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <h3 className="text-xl font-bold text-eco-blue-700 mb-3 flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-eco-blue-100 text-eco-blue-700 rounded-full px-3 py-1 text-sm">
                    {index + 1}
                  </Badge>
                  {obj.title}
                </h3>
                <ul className="list-disc pl-8 space-y-2 text-eco-gray-700">
                  {obj.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-lg shadow-md border-eco-green-200">
          <CardHeader className="bg-eco-green-500 text-white rounded-t-lg p-4">
            <CardTitle className="text-2xl font-semibold">Attività Principali</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {project.activities.map((activity, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <h3 className="text-xl font-bold text-eco-green-700 mb-3 flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-eco-green-100 text-eco-green-700 rounded-full px-3 py-1 text-sm">
                    {index + 1}
                  </Badge>
                  {activity.title}
                </h3>
                <ul className="list-disc pl-8 space-y-2 text-eco-gray-700">
                  {activity.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-lg shadow-lg border-eco-blue-200">
        <CardHeader className="bg-eco-blue-500 text-white rounded-t-lg p-4">
          <CardTitle className="text-2xl font-semibold">Benefici Ambientali e Sociali</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {project.benefits.map((benefitCategory, index) => (
            <div key={index} className="mb-5 last:mb-0">
              <h3 className="text-xl font-bold text-eco-blue-700 mb-3 flex items-center">
                <Badge variant="secondary" className="mr-2 bg-eco-blue-100 text-eco-blue-700 rounded-full px-3 py-1 text-sm">
                  {benefitCategory.category}
                </Badge>
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-eco-gray-700">
                {benefitCategory.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetails;