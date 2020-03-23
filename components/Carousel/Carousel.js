/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const tree = document.createElement('img')
  const turntable = document.createElement('img')
  const rightButton = document.createElement('div')

  let index = 0;

  imgArr = [mountains, computer, tree, turntable]
  mountains.src = "./assets/carousel/mountains.jpeg"
  computer.src = "./assets/carousel/computer.jpeg"
  tree.src = "./assets/carousel/trees.jpeg"
  turntable.src = "./assets/carousel/turntable.jpeg"

  
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  mountains.classList.add('image', 'active-img');
  computer.classList.add('image')
  tree.classList.add('image')
  turntable.classList.add('image')

  const right = "\u2192";
  const left = "\u2190";
  leftButton.textContent = left;
  rightButton.textContent = right;
  const cycle = () =>{
    imgArr[Math.abs(index % imgArr.length)].classList.toggle('active-img')
  }

  leftButton.addEventListener('click', () => {
    //turn off current image
    cycle()
    //update index number
    index = index - 1;
    //turn on current image
    cycle()
  })
  rightButton.addEventListener('click', () =>{
    //turn off current image
    cycle()
    //update index number
    index = index + 1;
    //turn on new image
    cycle()
  })


  carousel.append(leftButton, mountains, computer, tree, turntable, rightButton);

  return carousel
}
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(createCarousel())