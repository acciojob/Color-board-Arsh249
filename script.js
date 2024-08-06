 document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById('container');

        // Create 800 squares
        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }

        // Add hover event to squares
        container.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('square')) {
                e.target.classList.add('hovered');
                setTimeout(() => {
                    e.target.classList.remove('hovered');
                }, 1000);
            }
        });
    });