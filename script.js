const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");


  let userPoints = 0
  let cpuPoints = 0

const audioElement = new Audio('audio/peluit.mp3'); 

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    audioElement.play(); 
    userResult.src = cpuResult.src = "images/batu.png";
    result.textContent = "Tunggu...";

   
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;
     
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/batu.png", "images/kertas.png", "images/gunting.png"];
      cpuResult.src = cpuImages[randomNumber];
      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];
      let outcomes = {
        RR: "Draw",
        RP: "Komputer",
        RS: "Kamu",
        PP: "Draw",
        PR: "Kamu",
        PS: "Komputer",
        SS: "Draw",
        SR: "Komputer",
        SP: "Kamu",
      };

      function score(){
        document.querySelector(".user__score").innerHTML = userPoints
          document.querySelector(".comp__score").innerHTML = cpuPoints
       }
       
     
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
