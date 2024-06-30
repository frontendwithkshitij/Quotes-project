const quotes = [
    {
        name: 'Mahatma Gandhi',
        quote: ['The future depends on what we do in the present.', 'Our greatest ability as humans is not to change the world, but to change ourselves', 'Service without humility is selfishness and egotism.'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg'
    },
    {
        name: 'Jawaharlal Nehru',
        quote: ['Time is not measured by the passing of years but by what one does, what one feels, and what one achieves.', 'There is no end to the adventures that we can have if only we seek them with our eyes open', 'The policy of being too cautious is the greatest risk of all.', 'Life is like a game of cards'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jnehru.jpg/220px-Jnehru.jpg'
    },
    {
        name: 'Bhagat Singh',
        quote: ['Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking.', 'Labor is the real sustainer of society.', 'I am a man and all that affects mankind concerns me.', 'If the deaf have to hear, the sound has to be very loud'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bhagat_Singh_1929.jpg/220px-Bhagat_Singh_1929.jpg'
    },
    {
        name: 'Subhas Chandra Bose',
        quote: ['Give me blood, and I shall give you freedom.', 'It is blood alone that can pay the price of freedom.', 'One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg'
    },
    {
        name: 'Chandra Shekhar Azad',
        quote: ["We will face the bullets of the enemy.", "My name is 'Azad', my father's name is 'Swatantra' and my residence is 'jail'.", "If your blood does not rage, it is water that flows in your vein."],
        img: 'https://i.pinimg.com/564x/c3/c0/4b/c3c04ba11b107aa125cb03ce3de755c5.jpg'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const imgElement = document.querySelector('.img img'); 

document.addEventListener('DOMContentLoaded',()=>{
    displayQuote();
})


quoteBtn.addEventListener('click', displayQuote);


function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.textContent = quotes[number].name;
    quote.innerHTML = '';
    quotes[number].quote.forEach((element) => {
        quote.innerHTML += `<ul><li>${element}</li></ul>`;
    });
    imgElement.setAttribute('src', quotes[number].img);
}
