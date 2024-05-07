document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('board');
cy.get('.square').click({ force: true });
    // Generate 800 boxes
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        board.appendChild(box);
		

        // Add event listener for smooth color change
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = "#ff0000";
        });

        // Reset color after 1 second
        box.addEventListener('mouseout', function() {
            setTimeout(function() {
                box.style.backgroundColor = "rgb(29, 29, 29)";
            }, 1000);
        });
    }
});

