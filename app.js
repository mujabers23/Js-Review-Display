const reviewContainer = document.getElementById('review-container')

// keep the images landscape images
const reviews = [
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt: "Profile picture of Muhammad Saiful Mujab ",
        text: "I really this enjoyed this course! It was fun and interactive as well as educational. I learnt alot",
        name: "Muhammad Saiful Mujab"
    },

    {
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt: "Profile picture of Mujab ",
        text: "I really this enjoyed this course! It was fun and interactive as well as educational. I learnt alot",
        name: "Mujab"
    },

    {
        img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
        alt: "Profile picture of Angsana",
        text: "I really this enjoyed this course! It was fun and interactive as well as educational. I learnt alot",
        name: "Angsana"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        document.createElement('div')
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard )
        cardElement.addEventListener('mouseleave', blurCard )

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)


        reviewContainer.append(cardElement)
        
    })
}
populateDisplay()

function showCard (){
    this.classList.add('active')
}

function blurCard (){
    this.classList.remove('active')
}