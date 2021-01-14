import { Question } from "../store"

const quizQuestions: Question[] = [
  {
    question: "Dans le travail, les femmes sont beaucoup plus rigoureuses que les hommes.",
    answers: [
      {
        score: 1,
        content: "Pas vraiment non"
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
        content: "Elle a les dents qui rayent le parquet! C’est sûr, elle cherche à sefaire bien voir"
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

export const plagesResultat = [
  {
    scoreMin: 4,
    message: "Vos stéréotypes de genre sont minimes. Pour vous l’égalité entre les hommes et les femmes au travail est une évidence. Les compétences ne dépendent pas du genre d’une personne et le sexisme au travail vous dérange, voire vous parait inacceptable. D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. N’hésitez pas à en parler à vos collègues et à intervenir lorsque vous êtes témoins d’agissements sexistes au travail. Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!"
  },
  {
    scoreMin: 7,
    message: "Vos stéréotypes de genre sont modérés. Des stéréotypes nous en avons tous. Ils se construisent depuis l’enfance, permettent à notre cerveau de décrypter le monde rapidement et sont plus ou moins accentués selon nos croyances et nos schémas normatifs de pensée. Vous avez plutôt conscience de ces stéréotypes et c’est important pour ne pas les laisser prendre le pouvoir de notre perception et de nos actes au risque d’inférioriser un sexe par rapport à un autre. D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!"
  },
  {
    scoreMin: 10,
    message: "Vos stéréotypes de genre sont prononcés. Des stéréotypes nous en avons tous. Ils se construisent depuis l’enfance, permettent à notre cerveau de décrypter le monde rapidement et sont plus ou moins accentués selon nos croyances et nos schémas normatifs de pensée. Il est très important d’en avoir conscience pour ne pas laisser nos stéréotypes prendre le pouvoir de notre perception et de nos actes au risque d’inférioriser un sexe par rapport à un autre. D’ailleurs, depuis une loi du 17 août 2015, les agissements sexistes, plus connus sous le nom de sexisme ordinaire, sont pénalement condamnables. Rendez-vous la semaine prochaine sur l’intranet pour poursuivre la sensibilisation sur le sexisme!"
  },
]

export default quizQuestions
