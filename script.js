// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");


  let userPoints = 0
  let cpuPoints = 0

  const audioElement = new Audio('audio/peluit.mp3'); 
// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    audioElement.play(); 
    userResult.src = cpuResult.src = "images/batu.png";
    result.textContent = "Tunggu...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["images/batu.png", "images/kertas.png", "images/gunting.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "Kamu",
        PP: "Draw",
        PR: "Kamu",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "Kamu",
      };

      function score(){
        document.querySelector(".user__score").innerHTML = userPoints
          document.querySelector(".comp__score").innerHTML = cpuPoints
       }
       
      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];
      if(userValue === "P" && cpuValue === "R" || userValue === "R" && cpuValue === "S" || userValue === "S" && cpuValue === "P"){
          userPoints++
          score()
      }else if(userValue === cpuValue){
        score()
      }else{
        cpuPoints++
        score()
      }
      
      // Display the result
      result.textContent = userValue === cpuValue ? "Seri nih !!" : `${outComeValue} Menang!!`;
    }, 2500);

  });
});
function rules(){
  Swal.fire({
    title: 'Cara main',
    html: '✊+🖐️ = 🖐️<br>✊+✌️ = ✊<br>🖐️+✌️ = ✌️',
    icon: 'info'
  });
}
 function reset(){
  window.location.reload();
 }
