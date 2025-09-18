
// creates header variable to that points to header tag
const header = document.querySelector('header')

// creates a div container with class name header-container
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// creates a div container with class header-left
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// creates a img container with src pointing to logo.png
const imageContainer = document.createElement('img')
imageContainer.src = '/logo.png'

// creates h1 container and sets the text to UnEarthed
const h1Container = document.createElement('h1')
h1Container.textContent = 'UnEarthed'

// Append the logo and the title to the div with the class name header-left.
headerLeft.append(imageContainer)
headerLeft.append(h1Container)

// Create a div element with a class name header-right
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Create a button element and set its text content to Home. Register a 
// click event listener to the button that redirects the window to the root page
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// Append the button to the div with the class name header-right
headerRight.appendChild(headerButton);

// Append the left and right header div elements to the div with the 
// class name header-container.
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Append the header-container element to the header element.
header.appendChild(headerContainer);

