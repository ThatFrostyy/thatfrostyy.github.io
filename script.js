const greetingElement = document.querySelector(".greeting");
greetingElement.textContent = getGreeting();

function getGreeting() {
    const currentTime = new Date().getHours();
 
	if (currentTime < 5) {
		return "🌕 Good night.";
	} else if (currentTime < 12) {
		return "🌇 Good morning.";
	} else if (currentTime < 17) {
		return "☀️ Good afternoon.";
	} else if (currentTime < 24){
		return "🌃 Good evening.";
	} else {
		return "Invalid time.";
	}
}

function toggleContent(contentId) {
    const allContent = document.querySelectorAll('[id$="-content"]');
    allContent.forEach(content => {
        content.classList.remove('box');		
        content.classList.add('hidden');
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove('hidden');
	selectedContent.classList.add('box');
}