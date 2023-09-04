// Sample JavaScript code for interactivity, including a concept for the chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Add interactivity here
    const featuredResources = document.querySelector('.featured-resources');
    const allResources = document.querySelector('.all-resources');

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

document.addEventListener('DOMContentLoaded', function() {
    // ... Your existing code ...

    // Get references to the navigation links and the "Back to Home" button
    const homeLink = document.querySelector('a[href="/"]');
    const backButton = document.getElementById('back-to-home');

    // Function to handle the navigation link clicks
    function handleNavLinkClick(event) {
        // Prevent the default link behavior (navigation)
        event.preventDefault();

        // Show the "Back to Home" button
        backButton.style.display = 'block';
    }

    // Add click event listeners to the navigation links
    homeLink.addEventListener('click', handleNavLinkClick);
    
    // Function to handle the "Back to Home" button click
    function handleBackButtonClick() {
        // Navigate back to the main page (Home)
        window.location.href = '/';
    }

    // Add a click event listener to the "Back to Home" button
    backButton.addEventListener('click', handleBackButtonClick);
});

