document.addEventListener('DOMContentLoaded', () => {
    // --- Common Music Logic ---
    const bgMusic = document.getElementById('bgMusic');
    let musicPlayed = false;

    // --- Envelope Page (index.html) Logic ---
    if (document.querySelector('.envelope-container')) {
        const envelope = document.querySelector('.envelope');
        const revealBtn = document.getElementById('revealBtn');

        window.openEnvelope = function() {
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                
                // Show button after a short delay for animation
                setTimeout(() => {
                    revealBtn.style.display = 'block';
                    revealBtn.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }, 800); 

                if (!musicPlayed) {
                    bgMusic.play().catch(e => console.log("Music play blocked:", e));
                    musicPlayed = true;
                }
            }
        };
    }

    // --- Surprise Page (surprise.html) Logic ---
    if (document.querySelector('.gift-box-container')) {
        const giftBox = document.querySelector('.gift-box');
        const heartAnimationArea = document.querySelector('.heart-animation-area');
        
        // Start music on surprise page load
        if (!musicPlayed) {
            bgMusic.play().catch(e => console.log("Music play blocked:", e));
            musicPlayed = true;
        }

        window.openGiftBox = function() {
            if (!giftBox.classList.contains('open')) {
                giftBox.classList.add('open');
                // Start heart animation
                setTimeout(startHeartAnimation, 500); 
            }
        };

        // Floating Hearts for Surprise Page
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖'; 
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 4 + 's'; // 4-6 seconds
            heart.style.animationDelay = Math.random() * 2 + 's'; // Stagger start
            
            heartAnimationArea.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        let heartInterval;
        function startHeartAnimation() {
            if (!heartInterval) {
                heartInterval = setInterval(createHeart, 200); // More frequent hearts
            }
        }
    }
});

// Keyframe for button fadeIn (add this to your CSS or use a global style)
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);