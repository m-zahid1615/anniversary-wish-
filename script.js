document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const revealBtn = document.getElementById('revealBtn');
    const bgMusic = document.getElementById('bgMusic');
    let musicPlayed = false;

    // Function to open the envelope and show the button
    window.openEnvelope = function() {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            revealBtn.style.display = 'block';
            if (!musicPlayed) {
                bgMusic.play().catch(e => console.log("Music play blocked:", e));
                musicPlayed = true;
            }
        }
    };
});