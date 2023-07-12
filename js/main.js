var quots = [
  {
    img: "<img src='images/3565.jpg'/> ",
    author: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },

  {
    img: "<img src='images/4.jpg'/>",
    author: "Albert Einstein",
    quote:
      "“Two things are infinite the universe and human stupidity; and Im not sure about the universe.”",
  },
  {
    img: "<img src='images/3.jpg'/>",
    author: "Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    img: "<img src='images/5.jpg'/>",
    author: "Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    img: "<img src='images/6.jpg'/>",
    author: "Bernard M. Baruch",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    img: "<img src='images/7.jpg'/>",
    author: "William W. Purkey",
    quote:
      "“You've gotta dance like there's nobody watching Love like you'll never be hurtSing like theres nobody listeningAnd live like its heaven on earth.”",
  },
  {
    img: "<img src='images/8.jpg'/>",
    author: "Dr. Seuss",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    img: "<img src='images/9.jpg'/>",
    author: "Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    img: "<img src='images/10.jpg'/>",
    author: "Mahatma Gandhi",
    quote: "“Be the change that you wish to see in the world.”",
  },
  {
    img: "<img src='images/11.jpg'/>",
    author: "Robert Frost",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    img: "<img src='images/12.jpg'/>",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  },
  {
    img: "<img src='images/13.jpg'/>",
    author: "Mahatma Gandhi",
    quote:
      "“Don't walk in front of me… I may not followDon't walk behind me… I may not lead Walk beside me… just be my friend”",
  },
  {
    img: "<img src='images/14.jpg'/>",
    author: "Mark Twain",
    quote: "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    img: "<img src='images/15.jpg'/>",
    author: "Maya Angelou",
    quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  },
];
function getQuots() {
  var num = Math.floor(Math.random() * quots.length + 1);
  document.getElementById("image").innerHTML = quots[num].img;
  document.getElementById("outputQuots").innerHTML = quots[num].quote;
  document.getElementById("authorQuots").innerHTML = quots[num].author;
}
