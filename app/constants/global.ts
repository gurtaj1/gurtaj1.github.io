import IconClassifier from "../assets/icon-classifier-1.jpg";
import KovImage from "../assets/kov-screen.jpg";
import Rgby from "../assets/rgby-screen.jpg";
import Pomodoro from "../assets/pomodoro-screen.jpg";
import OsAndXs from "../assets/osandxs-screen.jpg";
import Calculator from "../assets/calculator-screen.jpg";

export const projects = [
  {
    id: "icon-classifer",
    title: "Image Classification Model",
    image: IconClassifier,
    link: "https://gurtaj1.github.io/blog/2021/09/04/first_post_icon_classifier.html",
    site: "https://huggingface.co/spaces/gurtaj/icon-classifier-hugging-face-hosted",
    description: "This is a working Image Classification AI model",
    technologies: "fast.ai, PyTorch, Python",
    background:
      "This was the first project I persued in my learning of creating and training Machine Learning Models",
    details:
      "The Celebrity Icon Classifier was my first real experience of putting all the theory I had learned on AI/ML into practice. It is fairly high level with a lot of fast.ai utilities that allowed me to see the bigger picture of what it takes to create and train a model. My further projects after this allowed me to go deeper into what goes on within the PyTorch and Python side of things.",
  },
  {
    id: "shopping-website",
    title: "Shopping Website",
    image: KovImage,
    link: "https://github.com/gurtaj1/KOV",
    site: "https://gurtaj1.github.io/KOV/",
    description:
      "The Front-End of an eCommerce Site specialising in Vape Goods",
    technologies: "ReactJS, React-Router, React-Redux, Bootstrap, CSS",
    background: "Made for King of Vape's Company Website",
    details:
      "This was my favourite creation back in 2018 during my early days of Web Devolpment. The task was to Develop the Front-End for an eCommerce website. I found that ReactJS worked really well for cutting out large amounts of repetitive work. All of the product lists, and individual product pages were essentially just the same components but with different props. I utilised React-Redux to store all the information on the products, to allow for the ability to filter by product types, and to search through products using keywords. I also used React-Router to set a path for each page. Due to the lack of a Back-End Developer, the company eventually opted to use a well known eCommerce platform (also setup by myself). I hope to come back to this project one day, when I have more knowledge on Back-End technologies, and offer it as a fully bespoke option.",
  },
  {
    id: "memory-game",
    title: "Memory Game",
    image: Rgby,
    link: "https://github.com/gurtaj1/rgby",
    site: "https://gurtaj1.github.io/rgby/",
    description: "Recreation of the Simon Game, popular in the 70's and 80's",
    technologies: "HTML, CSS, JavaScript",
    background:
      "Created as one of my projects for Free Code Camp's Front End Development Program",
    details:
      "This project took a lot of extra thought and careful planning with regards to function and ease of use. The toughest part of this project was probably the need for audio feedback. I wanted the audio to sound for as long as any of the buttons were 'held down', since this is how the Simon Game behaves in real life. I researched several different ways to do this with the mp3 files that were given in the project outline, but in the end I decided that creating my own frequencies would make for a better user experience. After a little research and trial-and-error, I had successfully managed to create a web audio API context within the JavaScript code and assigned a frequency to each colour-button within the game. If I was to go back to this project now, I would look at optimising it across more browsers since, currently, sounds are not being reproduced as expected on the mobile version of chrome.",
  },
  {
    id: "pomodoro-clock",
    title: "Pomodoro Clock",
    image: Pomodoro,
    link: "https://github.com/gurtaj1/pomodoro",
    site: "https://gurtaj1.github.io/pomodoro/",
    description: "Emulation of a Pomodoro Clock",
    technologies: "HTML, CSS, JavaScript",
    background:
      "Created as one of my projects for Free Code Camp's Front End Development Program",
    details:
      "This project required a lot of consideration into the actual use of a real-life pomodoro clock. The toughest part of this project was actually in deciding what kind of functionality (besides starting a countdown, and then waiting for it to alarm) an end-user would need in such a device. I made three different versions of the clock but in the end I stuck with the one that could interchange between session and break periods, and change timer settings during a countdown without affecting the current countdown. If I was to go back to this project now, I would alter the timer functions to rely on date methods rather than setTimeout(), due to the inaccuracies associated with it.",
  },
  {
    id: "noughts-and-crosses",
    title: "Noughts and Crosses",
    image: OsAndXs,
    link: "https://github.com/gurtaj1/osandxs",
    site: "https://gurtaj1.github.io/osandxs/",
    description: "Noughts and Crosses game with Unbeatable AI",
    technologies: "HTML, CSS, JavaScript",
    background:
      "Created as one of my projects for Free Code Camp's Front End Development Program",
    details:
      "This project showed me the level of sophistication that is associated with even the simplest of algorithms. The project was initially completed without a great deal of research being performed. Even though I was very impressed with the fact that I had managed to do this, I was not happy about the fact that my AI was so easy to beat (chose empty slots at random). It was for this reason that I decided to work at my project some more before submitting it. I learnt about the Minimax Algorithm and in doing so I got a glimpse of the true beauty in programming. I then had nothing left to do but to implement the algorithm into my own code. If I was to go back and do this project again, the only thing I would change would be the styling, particularly the fonts used, and the re-sizing of divs when viewing on different-sized screens.",
  },
  {
    id: "calculator",
    title: "Calculator",
    image: Calculator,
    link: "https://github.com/gurtaj1/calculator",
    site: "https://gurtaj1.github.io/calculator/",
    description: "Non-Scientific Calculator",
    technologies: "HTML, CSS, JavaScript",
    background:
      "Created as one of my projects for Free Code Camp's Front End Development Program",
    details:
      "This project allowed me to put my coding skills into practice, whilst exercising my knowledge of basic calculator functionality. This project was coded using just my core knowledge and some trial-and-error. I did read-up on some jQuery and CSS notation, but only to jog my memory, the logic applied was all my own. I state this, not for the sake of being boastful, but rather to show how this project was very important in solidifying my confidence as a developer, and in motivating me to push further. One thing I would change if I was to do this project again, would be the precision of the outputted answer. Currently, the answer's precision is based on that of the most precise number entered into the sum. Instead I would base the precision on the amount of screen space available, and the difference between the 'exact' answer, and its closest integer value.",
  },
];
