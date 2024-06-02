const greetingElement = document.querySelector(".greeting");
greetingElement.textContent = getGreeting();

function getGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
        return "🌇 Good morning, stalker.";
    } else if (currentTime < 18) {
        return "☀️ Good afternoon, stalker.";
    } else {
        return "🌃 Good evening, stalker.";
    }
}

function toggleContent(contentId) {
    const allContent = document.querySelectorAll('[id$="-content"]');
    allContent.forEach(content => {
        content.classList.add('hidden');
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove('hidden');
}

function openDiscordServer() {
    const discordServerLink = 'https://discord.gg/JuZMZGMRMd';
    window.open(discordServerLink, '_blank');
}