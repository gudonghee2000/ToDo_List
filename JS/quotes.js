const quotes = [
    {
      q : "산다는 것 그것은 치열한 전투이다.", 
      a :  "- 로망로랑 -"
    },
    {
        q : "1퍼센트의 가능성, 그것이 나의 길이다.", 
        a :  "- 나폴레옹 -"
    },
    {
        q : "언제나 현재에 집중 할 수 있다면 행복할 것이다.",
        a : "- 파울로 코엘로 -"
    },
    {
        q : "일을 쫓아라. 일에 쫓기지 말라.",
        a : "- 프랭클린 -"
    },
    {
        q : "할 수 있는 한 훌륭한 인생을 만들라. 인생은 짧고 곧 지나간다.",
        a : "- 오울디즈 -"
    },
    {
        q : "의욕적인 목표가 인생을 즐겁게 한다.",
        a : "- 로버트 슐러 -"
    },
    {
        q : "성공하는 사람은 송곳처럼 어느 한 점을 향하여 일한다.",
        a : "- 보비 -"
    },
    {
        q : "아침에 당신을 벌떡 깨울 수 있는 꿈을 가져야 한다.",
        a : "- 빌리 와일더 -"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.q;
author.innerText =`\n${todaysQuote.a}`;

