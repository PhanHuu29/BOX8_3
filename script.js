function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const tearEffect = document.getElementById("tearEffect");
    const letterContent = document.getElementById("letterContent");
    
    envelope.classList.add("shake");
    setTimeout(() => {
        envelope.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease";
        envelope.style.transform = "scale(0.5) translateY(-50px) rotateX(20deg) rotateY(10deg)";
        envelope.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        envelope.style.display = "none";
        tearEffect.style.display = "block";
        
        setTimeout(() => {
            tearEffect.classList.add("tear-animation");
            setTimeout(() => {
                tearEffect.style.display = "none";
                letterContent.style.display = "block";
                letterContent.classList.add("fade-in");
                showHearts();
            }, 1000);
        }, 500);
    }, 1300);
}

function showHearts() {
    const heartsContainer = document.getElementById("heartsContainer");
    heartsContainer.innerHTML = "";
    
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "%";
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
