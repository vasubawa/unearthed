// Call the renderGifts function to display gifts on page load
const renderGifts = async () => {
	// Fetch gift data from the /gifts endpoint
	const response = await fetch('/gifts');
	console.log('Response status:', response.status);
	const data = await response.json();
	// Get the main content element
	const mainContent = document.getElementById('main-content');
	// If data exists, render each gift as a card
	if (data) {
	data.map(gift => {
			// Create a card element for each gift
			const card = document.createElement('div');
			card.classList.add('card');
			// Create the top container for the image
			const topContainer = document.createElement('div');
			topContainer.classList.add('top-container');
			// Set the background image to the gift's image
			topContainer.style.backgroundImage = `url(${gift.image})`;
			// Create the bottom container for details
			const bottomContainer = document.createElement('div');
			bottomContainer.classList.add('bottom-container');
			// Create and append the gift name
			const name = document.createElement('h3');
			name.textContent = gift.name;
			bottomContainer.appendChild(name); // Append name to bottom-container
			// Create and append the price point
			const pricePoint = document.createElement('p');
			pricePoint.textContent = 'Price: ' + gift.pricePoint;
			bottomContainer.appendChild(pricePoint); // Append price to bottom-container
			// Create and append the audience
			const audience = document.createElement('p');
			audience.textContent = 'Great For: ' + gift.audience;
			bottomContainer.appendChild(audience); // Append audience to bottom-container
			// Create and append the Read More link
			const link = document.createElement('a');
			link.textContent = 'Read More >';
			link.setAttribute('role', 'button');
			link.href = `/gifts/${gift.id}`;
			bottomContainer.appendChild(link); // Append link to bottom-container
			// Append the top and bottom containers to the card
			card.appendChild(topContainer); // Append top-container to card
			card.appendChild(bottomContainer); // Append bottom-container to card
			// Append the card to the main content
			mainContent.appendChild(card); // Append card to main-content
	});
	} else {
	// If no data, show a message
	const message = document.createElement('h2');
	message.textContent = 'No Gifts Available 😞';
	mainContent.appendChild(message); // Append message to main-content
	}
}

// Only call renderGifts on the home page, otherwise redirect to 404
const requestedUrl = window.location.pathname.replace(/^\//, '');
if (requestedUrl && requestedUrl !== '') {
	window.location.href = '../404.html';
} else {
	renderGifts();
}
