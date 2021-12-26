const quotes = [
    {
        quote: "세상의 중요한 일 대부분은 희망이 없어 보였을 떄 끊임 없이 도전한 사람들에 의해 이루어졌다.",
        author: "데일 카네기"
    },
    {
        quote:"우리의 가장 큰 영광은 결코 실패하지않음이 아니라 떨어질때마다 일어서는 것이다",
        author: "공자"
    },
    {
        quote: "듣는 사람은 행복하고, 말하는 사람은 불행하다",
        author: "무명의 어떤 이"
    },
    {
        quote:"행동은 감정보다 앞선다. 내가 미소 짓고 있으면 마음도 미소지을 것이다.",
        author: "어느 책으로부터 발췌"
    },
    {
        quote:"당신 자신에게 자신과 용기를 줄 수 있는 말을 자주 들려주어라",
        author: "어느 책으로부터 발췌"
    },
    {
        quote:"사실 알고보면 지금 내가 가진 이 생각들이 나의 것인지 아니면 다른 사람의 것인지 구분할 수 없는 경우가 많다.",
        author: "어느 책으로부터 발췌"
    },
    {
        quote:"사람은 상대방을 존중하는 만큼 배울 수 있다",
        author: "어느 책으로부터 발췌"
    },
    {
        quote:"반 진실은 가장 비겁한 거짓말이다",
        author:"마크 트웨인"
    },
    {
        quote:"설명하지 마라. 친구라면 설명할 필요 없고 적이라면 어차피 믿으려 하지 않을 테니까",
        author:"엘버트 허버드"
    },
    {
        quote:"누군가가 어떤 일을 할 수 있느냐고 물으면 그 자리에서 할 수 있다고 답하라. 그리고 그 일을 어떻게 할 수 있는지 알아내려 최선을 다하라.",
        author: "테오도 루즈벨트"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

