import { Question, ResultRange } from "../store"
import red from "../assets/images/3.png"
import orange from "../assets/images/2.png"
import green from "../assets/images/1.png"

const quizQuestions: Question[] = [
  {
    question: "Pascal ne cesse de faire les yeux doux à votre collègue pour qui il a de l’attirance alors qu’elle lui a déjà dit être en couple.",
    answers: [
      {
        score: 1,
        content: "Son refus était pourtant clair, à répétition cela devient du harcèlement."
      },
      {
        score: 2,
        content: "Il doit vraiment être accro pour revenir à la charge comme ça, c’est limite attendrissant."
      },
      {
        score: 3,
        content: "Il n’y a pas de mal à vouloir séduire, sur un malentendu sait-on jamais !"
      }
    ]
  },
  {
    question: "A la pause, les collègues de Paul lui font régulièrement remarquer qu’il a de « belles fesses ».",
    answers: [
      {
        score: 3,
        content: "C’est plutôt flatteur."
      },
      {
        score: 2,
        content: "C’est un peu gênant mais pas très grave."
      },
      {
        score: 1,
        content: "Cela peut être qualifié de harcèlement sexuel."
      }
    ]
  },
  {
    question: "Une stagiaire sortant de l’ascenseur se fait caresser les fesses par un collègue sous le regard rieur des autres collègues.",
    answers: [
      {
        score: 3,
        content: "C’est drôle, il tente sa chance."
      },
      {
        score: 2,
        content: "C’est un peu déplacé."
      },
      {
        score: 1,
        content: "C’est humiliant et de l’ordre de l’agression sexuelle."
      }
    ]
  },
  {
    question: "Lors d’un afterwork, un manager propose une promotion à une collaboratrice en échange de faveurs sexuelles.",
    answers: [
      {
        score: 2,
        content: "C’est désobligeant."
      },
      {
        score: 3,
        content: "Rien d’étonnant vu ses attributs physiques."
      },
      {
        score: 1,
        content: "C’est une pression grave, il risque gros et même la prison."
      }
    ]
  }
]

export const plagesResultat: ResultRange[] = [
  {
    scoreMin: 4,
    level: "vert",
    message: "<h3 style='font-size: 25px; line-height:1.5;'>Bravo ! Pour vous la différence entre la drague, l’agression sexuelle et le harcèlement sexuel est bien claire.</h3><p>Vous avez bien compris que quand un(e) collègue dit « non » à des avances, le fait d’insister de façon répétée crée une situation intimidante, voire offensante.<br><br>Restons vigilants car les personnes victimes n’osent pas toujours exprimer leur non-consentement. Pourtant, il peut aussi s’agir de harcèlement sexuel.<br><br>Les propos ou comportements à connotation sexuelle ou sexiste imposés à un(e) collègue sont passibles de sanctions pénales, civiles et disciplinaires, y compris s’ils sont commis en dehors du travail.<br><br><b>Pour en savoir plus, visionnez la vidéo « Sexisme, harcèlement sexuel » sur l’Intranet et contactez vos référents entreprise ou CSE.<br><br>Ensemble luttons contre le sexisme et le harcèlement sexuel au travail !</b></p>",
    illustration: green,
  },
  {
    scoreMin: 7,
    level: "orange",
    message: "<h3 style='font-size: 25px; line-height:1.5;'>Attention, vous avez tendance minimiser la gravité de certains actes !</h3><p>Quand un(e) collègue dit « non » à des avances, le fait d’insister de façon répétée crée une situation intimidante, voire offensante et conduit à du harcèlement sexuel.<br><br>Les propos ou comportements à connotation sexuelle ou sexiste imposés à un(e) collègue sont passibles de sanctions pénales, civiles et disciplinaires, y compris s’ils sont commis en dehors du travail.<br><br><b>Pour en savoir plus, visionnez la vidéo « Sexisme, harcèlement sexuel » sur l’Intranet et contactez vos référents entreprise ou CSE.<br><br>Ensemble luttons contre le sexisme et le harcèlement sexuel au travail !</b></p>",
    illustration: orange,
  },
  {
    scoreMin: 10,
    level: "rouge",
    message: "<h3 style='font-size: 25px; line-height:1.5;'>Attention, vous confondez séduction et harcèlement sexuel !</h3><p>Pour vous une personne qui se fait draguer avec insistance et se fait caresser les fesses au travail n’a qu’à savoir dire « non ».<br><br>Pourtant ce type de comportements est offensant, voire humiliant et peut intimider ou inférioriser. Il s’agit bien de harcèlement sexuel ou d’agression sexuelle selon les cas.<br><br>Ces propos ou comportements imposés à un(e) collègue sont passibles de sanctions pénales, civiles et disciplinaires.<br><br><b>Pour en savoir plus, visionnez la vidéo « Sexisme, harcèlement sexuel » sur l’Intranet et contactez vos référents entreprise ou CSE.<br><br>Ensemble luttons contre le sexisme et le harcèlement sexuel au travail !</b></p>",
    illustration: red,
  },
]

export default quizQuestions
