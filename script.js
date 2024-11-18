// Interactive Quiz  
const questions = [  
    { question: "What's your favorite dish?", choices: ["Pizza", "Pasta", "Salad"], correct: 0 },  
    { question: "Do you like spicy food?", choices: ["Yes", "No"], correct: 0 },  
];  

document.getElementById('quiz-button').onclick = function() {  
    const quizContainer = document.getElementById('quiz-container');  
    questions.forEach((q, index) => {  
        const questionDiv = document.createElement('div');  
        questionDiv.innerHTML = `<p>${q.question}</p>`;  
        q.choices.forEach((choice, i) => {  
            questionDiv.innerHTML += `<input type="radio" name="q${index}" value="${i}"> ${choice}<br>`;  
        });  
        quizContainer.appendChild(questionDiv);  
    });  
};  

// Image Carousel  
const images = ["https://tse4.mm.bing.net/th?id=OIP.QD-OWx9DBu_Reu4ECijZBQHaE8&pid=Api&P=0&h=180", "https://tse3.mm.bing.net/th?id=OIP.GYaxPIPpWr8DeHC3ovycPQHaEr&pid=Api&P=0&h=180", "https://tse2.mm.bing.net/th?id=OIP.01NJDcfqeJ1CU1MRDp0CaQHaFj&pid=Api&P=0&h=180"];  
let currentImage = 0;  
const carouselImage = document.getElementById('carousel-image');  

document.getElementById('next').onclick = function() {  
    currentImage = (currentImage + 1) % images.length;  
    carouselImage.src = images[currentImage];  
};  

document.getElementById('prev').onclick = function() {  
    currentImage = (currentImage - 1 + images.length) % images.length;  
    carouselImage.src = images[currentImage];  
};  

// Fetch Data from API (Example)  
async function fetchData() {  
    try {  
        const response = await fetch('https://api.example.com/data'); // Replace with a real API  
        const data = await response.json();  
        console.log(data);  
    } catch (error) {  
        console.error("Error fetching data: ", error);  
    }  
}  

fetchData();







document.getElementById('reservation-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  
    
    // Get form values  
    const name = document.getElementById('name').value;  
    const date = document.getElementById('date').value;  
    const time = document.getElementById('time').value;  
    const guests = document.getElementById('guests').value;  
    
    // Simple confirmation message  
    const confirmationMessage = `  
        Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been booked.  
    `;  
    
    // Display confirmation  
    const confirmationDiv = document.getElementById('confirmation');  
    confirmationDiv.innerHTML = confirmationMessage;  
    confirmationDiv.classList.remove('hidden');  
    
    // Reset form  
    document.getElementById('reservation-form').reset();  
});