import { Question, ResultRange } from "../store"
import red from "../assets/images/3.png"
import orange from "../assets/images/2.png"
import green from "../assets/images/1.png"

const quizQuestions: Question[] = [
  {
    question: "Dans le travail, les femmes sont beaucoup plus rigoureuses que les hommes.",
    answers: [
      {
        score: 1,
        content: "Pourquoi plus les femmes que les hommes ?!"
      },
      {
        score: 2,
        content: "C’est plutôt vrai"
      },
      {
        score: 3,
        content: "Complètement d’accord"
      }
    ]
  },
  {
    question: "Les postes à responsabilité sont plus faits pour les hommes que pour les femmes.",
    answers: [
      {
        score: 3,
        content: "Évidemment un homme sera bien meilleur pour prendre des décisions surtout sur des sujets pointus"
      },
      {
        score: 2,
        content: "Manager des hommes, pour une femme c’est loin d’être naturel"
      },
      {
        score: 1,
        content: "Je ne crois pas, cela dépend surtout des personnalités"
      }
    ]
  },
  {
    question: "Que pensez-vous des hommes qui partagent leurs doutes et leurs émotions au travail?",
    answers: [
      {
        score: 3,
        content: "C’est un signe de faiblesse, ils n’évolueront jamais"
      },
      {
        score: 2,
        content: "C’est beaucoup plus accepté de la part des femmes"
      },
      {
        score: 1,
        content: "C’est juste un être humain"
      }
    ]
  },
  {
    question: "Que pensez-vous d’une femme qui s’exprime beaucoup dans une réunion en présence de la direction ?",
    answers: [
      {
        score: 2,
        content: "Elle a les dents qui rayent le parquet ! C’est sûr, elle cherche à se faire bien voir"
      },
      {
        score: 3,
        content: "Elle est tellement loquace que cela en est ridicule"
      },
      {
        score: 1,
        content: "Sacrée implication, le sujet la passionne"
      }
    ]
  }
]

export const plagesResultat: ResultRange[] = [
  {
    scoreMin: 4,
    level: "vert",
    message: "<h3 style='font-size: 25px; line-height:2;'>Vos stéréotypes de genre sont minimes.</h3><p>Pour vous l’égalité entre les hommes et les femmes au travail est une évidence. Les compétences ne dépendent pas du genre d’une personne et le sexisme au travail vous dérange, voire vous parait inacceptable. <br><br>D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. <br><br>N’hésitez pas à en parler à vos collègues et à intervenir lorsque vous êtes témoins d’agissements sexistes au travail.<br><br><b>Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!</b></p>",
    illustration: green,
  },
  {
    scoreMin: 7,
    level: "orange",
    message: "<h3 style='font-size: 25px; line-height:2;'>Vos stéréotypes de genre sont modérés. </h3><p>Des stéréotypes nous en avons tous. Ils se construisent depuis l’enfance, permettent à notre cerveau de décrypter le monde rapidement et sont plus ou moins accentués selon nos croyances et nos schémas normatifs de pensée. <br><br>Vous avez plutôt conscience de ces stéréotypes et c’est important pour ne pas les laisser prendre le pouvoir de notre perception et de nos actes au risque d’inférioriser un sexe par rapport à un autre. <br><br>D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. <br><br><b>Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!</b></p>",
    illustration: orange,
  },
  {
    scoreMin: 10,
    level: "rouge",
    message: "<h3 style='font-size: 25px; line-height:2;'>Vos stéréotypes de genre sont prononcés.</h3><p>Des stéréotypes nous en avons tous. Ils se construisent depuis l’enfance, permettent à notre cerveau de décrypter le monde rapidement et sont plus ou moins accentués selon nos croyances et nos schémas normatifs de pensée.<br><br> Il est très important d’en avoir conscience pour ne pas laisser nos stéréotypes prendre le pouvoir de notre perception et de nos actes au risque d’inférioriser un sexe par rapport à un autre. <br><br>D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. <br><br><b>Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!</b></p>",
    illustration: red,
  },
]

export default quizQuestions
