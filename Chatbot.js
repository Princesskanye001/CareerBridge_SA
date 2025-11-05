// AI Chatbot functionality
function initChatbot() {
  const chatbotButton = document.getElementById('chatbotButton');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const closeChatbot = document.getElementById('closeChatbot');
  const sendMessage = document.getElementById('sendMessage');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');
  
  // Toggle chatbot window
  chatbotButton.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) {
      chatbotInput.focus();
    }
  });
  
  closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
  });
  
  // Close chatbot when clicking outside
  document.addEventListener('click', (e) => {
    if (!chatbotWindow.contains(e.target) && !chatbotButton.contains(e.target)) {
      chatbotWindow.classList.remove('active');
    }
  });
  
  // Send message function
  function sendChatMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
      // Add user message
      addMessage(message, 'user');
      chatbotInput.value = '';
      
      // Generate bot response
      setTimeout(() => {
        const response = generateBotResponse(message);
        addMessage(response, 'bot');
        
        // Add quick replies for certain responses
        if (response.includes('register') || response.includes('simulations') || 
            response.includes('success') || response.includes('about')) {
          addQuickReplies();
        }
      }, 1000);
    }
  }
  
  // Send message on button click
  sendMessage.addEventListener('click', sendChatMessage);
  
  // Send message on Enter key
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendChatMessage();
    }
  });
  
  // Quick reply buttons
  document.querySelectorAll('.quick-reply').forEach(button => {
    button.addEventListener('click', () => {
      const question = button.getAttribute('data-question');
      chatbotInput.value = question;
      sendChatMessage();
    });
  });
  
  // Add message to chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Add quick reply buttons
  function addQuickReplies() {
    // Remove existing quick replies
    const existingReplies = chatbotMessages.querySelector('.quick-replies');
    if (existingReplies) {
      existingReplies.remove();
    }
    
    const quickRepliesDiv = document.createElement('div');
    quickRepliesDiv.className = 'quick-replies';
    quickRepliesDiv.innerHTML = `
      <button class="quick-reply" data-question="How do I register?">How do I register?</button>
      <button class="quick-reply" data-question="What simulations are available?">What simulations are available?</button>
      <button class="quick-reply" data-question="Tell me about success stories">Success Stories</button>
      <button class="quick-reply" data-question="What is CareerBridge about?">About CareerBridge</button>
    `;
    chatbotMessages.appendChild(quickRepliesDiv);
    
    // Reattach event listeners to new buttons
    quickRepliesDiv.querySelectorAll('.quick-reply').forEach(button => {
      button.addEventListener('click', () => {
        const question = button.getAttribute('data-question');
        chatbotInput.value = question;
        sendChatMessage();
      });
    });
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Generate bot response based on user input
  function generateBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm your CareerBridge assistant. How can I help you today?";
    } else if (lowerMessage.includes('register') || lowerMessage.includes('sign up') || lowerMessage.includes('account')) {
      return "To register, click the 'Register' button in the top right corner. You'll need to provide your name, email, and create a password. It only takes a minute!";
    } else if (lowerMessage.includes('simulation') || lowerMessage.includes('course') || lowerMessage.includes('program')) {
      return "We offer various simulations in fields like Finance, Marketing, and Technology. Each simulation takes 5-7 hours to complete and gives you real work experience. You can browse all simulations in the 'Simulations' section.";
    } else if (lowerMessage.includes('work') || lowerMessage.includes('how does') || lowerMessage.includes('process')) {
      return "CareerBridge works in 4 simple steps: 1) Register for free, 2) Choose a simulation that matches your interests, 3) Complete the tasks at your own pace, 4) Showcase your skills to employers and get hired!";
    } else if (lowerMessage.includes('employer') || lowerMessage.includes('company') || lowerMessage.includes('partner')) {
      return "We partner with over 100 South African companies who design our simulations. Employers can discover talent through our platform and view completed work samples. Check the 'Employers' section for more information.";
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('free')) {
      return "CareerBridge is completely free for students and graduates! Our mission is to help South African youth gain work experience without financial barriers.";
    } else if (lowerMessage.includes('success') || lowerMessage.includes('story') || lowerMessage.includes('testimonial')) {
      return "We have many success stories! For example, Lerato M. used our FNB simulation to land a job at Standard Bank, and Sipho K. got hired at Deloitte after completing 3 simulations. Check the 'Success Stories' section for more inspiring stories!";
    } else if (lowerMessage.includes('about') || lowerMessage.includes('what is') || lowerMessage.includes('careerbridge')) {
      return "CareerBridge_SA is a platform dedicated to solving South Africa's youth unemployment crisis. We provide virtual work experience through simulations designed by real companies. Our mission is to bridge the gap between education and employment.";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! You can ask me about registration, simulations, success stories, how the platform works, or anything else about CareerBridge. What would you like to know?";
    } else if (lowerMessage.includes('data') || lowerMessage.includes('saver')) {
      return "Data Saver mode reduces animations and heavy graphics to help you save mobile data. You can toggle it using the 'Data Saver' button in the navigation bar.";
    } else {
      return "I'm not sure I understand. Could you rephrase your question? You can ask me about registration, simulations, success stories, how CareerBridge works, or anything else about our platform.";
    }
  }
}