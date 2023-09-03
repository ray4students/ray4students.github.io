// Sample JavaScript code for interactivity, including a concept for the chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Add interactivity here
    const featuredResources = document.querySelector('.featured-resources');
    const allResources = document.querySelector('.all-resources');

    // Sample: Load featured resources dynamically
    const featuredResourceData = [
        { title: 'Advanced JavaScript Course', url: '/courses/js-advanced' },
        { title: 'Machine Learning Basics', url: '/courses/ml-basics' },
    ];

    featuredResourceData.forEach(resource => {
        const link = document.createElement('a');
        link.href = resource.url;
        link.textContent = resource.title;
        featuredResources.appendChild(link);
    });

    // Sample: Load all resources dynamically (from an API, database, etc.)
    fetch('/api/resources')
        .then(response => response.json())
        .then(data => {
            data.forEach(resource => {
                const link = document.createElement('a');
                link.href = resource.url;
                link.textContent = resource.title;
                allResources.appendChild(link);
            });
        })
        .catch(error => {
            console.error('Error fetching resources:', error);
        });

    // Concept for an AI-powered chatbot
    function chatBotResponse(userInput) {
        // You would integrate this with a chatbot service like Dialogflow or Watson Assistant
        // For simplicity, here's a basic response:
        const botResponse = "I'm a friendly chatbot! How can I assist you today?";
        return botResponse;
    }

    const chatButton = document.getElementById('chat-button');
    const chatOutput = document.getElementById('chat-output');
    const chatInput = document.getElementById('chat-input');

    chatButton.addEventListener('click', function() {
        const userInput = chatInput.value;
        const botResponse = chatBotResponse(userInput);
        chatOutput.innerHTML += `<div class="chat-message user">${userInput}</div>`;
        chatOutput.innerHTML += `<div class="chat-message bot">${botResponse}</div>`;
        chatInput.value = '';
    });
});
