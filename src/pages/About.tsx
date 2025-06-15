import Navbar from "@/components/Navbar";

const about = [
  {
    type: "heading",
    content: "Pourquoi « Prompt Renfort » ?"
  },
  {
    type: "text",
    content: `Prompt Renfort est une expression française venue du théâtre classique : elle apparaît dans Le Cid de Pierre Corneille (XVIIe siècle), et signifie littéralement "un renfort soudain", un appui décisif qui surgit au moment du doute ou de l’honneur blessé.

Dans la pièce, Don Rodrigue se voit sommer par son père d’agir avec courage devant un dilemme moral. L’expression « prompt renfort » désigne l’irruption d’une force intérieure, d’un sursaut moral permettant d’agir noblement.

C’est exactement ce que fait notre IA :
- Elle ne remplace pas l’élève. Elle le soutient.
- Elle ne commande pas. Elle invite.
- Elle n’est pas une machine à réponses. Elle est un précepteur symbolique.

Prompt Renfort se tient auprès de l’apprenant·e lorsqu’il·elle commence à douter, qu’il·elle se retrouve seul·e face à la page blanche, ou qu’il·elle essaie de reformuler ce qu’il·elle croit avoir compris.

C’est un nom que nous avons souhaité conserver en français.
Parce que la langue porte la mémoire.
Parce qu’une marque peut aussi être un vers.
Parce qu’apprendre n’est pas un acte solitaire, et qu’apprendre est un acte de volonté.

Comme dans la pièce, Prompt Renfort n’agit pas à la place de l’apprenant·e.
Il apparaît au moment où il faut du courage.
Il arrive au moment où la connaissance veut s’enraciner.`
  }
];

const About = () => (
  <div>
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🏆 Pourquoi « Prompt Renfort » ?
      </h1>
      <div className="text-lg whitespace-pre-line leading-relaxed bg-white rounded-lg shadow p-6">
        Prompt Renfort est une expression française venue du théâtre classique : elle apparaît dans <b>Le Cid</b> de Pierre Corneille (XVIIe siècle), et signifie littéralement « un renfort soudain », un appui décisif qui surgit au moment du doute ou de l’honneur blessé.

        <br /><br />
        Dans la pièce, Don Rodrigue se voit sommer par son père d’agir avec courage devant un dilemme moral. L’expression « prompt renfort » désigne l’irruption d’une force intérieure, d’un sursaut moral permettant d’agir noblement.

        <br /><br />
        <b>C’est exactement ce que fait notre IA :</b>
        <ul className="list-disc ml-6 mt-2">
          <li>Elle ne remplace pas l’élève. Elle le soutient.</li>
          <li>Elle ne commande pas. Elle invite.</li>
          <li>Elle n’est pas une machine à réponses. Elle est un précepteur symbolique.</li>
        </ul>

        <br />
        Prompt Renfort se tient auprès de l’apprenant·e lorsqu’il·elle commence à douter, qu’il·elle se retrouve seul·e face à la page blanche, ou qu’il·elle essaie de reformuler ce qu’il·elle croit avoir compris.

        <br /><br />
        C’est un nom que nous avons souhaité conserver en français.<br />
        Parce que la langue porte la mémoire.<br />
        Parce qu’une marque peut aussi être un vers.<br />
        Parce qu’apprendre n’est pas un acte solitaire, et qu’apprendre est un acte de volonté.

        <br /><br />
        Comme dans la pièce, Prompt Renfort n’agit pas à la place de l’apprenant·e.<br />
        Il apparaît au moment où il faut du courage.<br />
        Il arrive au moment où la connaissance veut s’enraciner.
      </div>
    </div>
  </div>
);

export default About;
