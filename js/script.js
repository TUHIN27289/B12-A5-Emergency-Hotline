function takeInt(id) {
  const recValue = document.getElementById(id);
  const recValueString = recValue.innerText;
  const recValueInt = parseInt(recValueString);
  return recValueInt;
}


// heart

// document.getElementById('heart').addEventListener('click',function(){
//     // console.log('heart pressed');
//     // const heartValue=document.getElementById('heart_up').innerText;
//     const val=takeInt('heart_up');
//     console.log(val);
//     const upHeartValueInt=val+1;
//     console.log(upHeartValueInt);
//     document.getElementById('heart_up').innerText=upHeartValueInt;
// })

const hearts = document.querySelectorAll(".h1");
for (const hrt of hearts) {
  hrt.addEventListener("click", function () {
    const id = hrt.getAttribute("target");
    const heartValue = document.getElementById("heart_up").innerText;
    const val = takeInt("heart_up");
    const upHeartValueInt = val + 1;
    document.getElementById("heart_up").innerText = upHeartValueInt;
  });
}

// const avialbaleCoin = takeInt("coin");
// console.log(avialbaleCoin);
// if (avialbaleCoin < 20) {
//   alert("Insufficient coins");
//   return;
// }



// document.getElementById("ne-call").addEventListener("click", function () {
//     console.log('ne call pressed')
//   const coinValue = takeInt("coin");
//   if (coinValue <= 20) {
//     alert("Insufficient coins");
//     return;
//   } else {
//     alert("emergency-service.netlify.app.says:");
//     const upCoinValue = coinValue - 20;
//     document.getElementById("coin").innerText = upCoinValue;
//   }
// });


//   document.getElementById("ne-call").addEventListener("click", function() {
//     alert("avi service says:\ni am ok");
//   });

function showCustomAlert(message) {
  document.querySelector("#custom-alert p").innerHTML = message;
  document.getElementById("custom-alert").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
}

// Add event listener to ALL call buttons
const callButtons = document.querySelectorAll('.call-btn');
for(const calBtn of callButtons){
    calBtn.addEventListener('click',function(){
        const coinValue = takeInt("coin");
        const card = this.closest("div.bg-white");
         const title = card.querySelector("h1").innerText;   
    const number = card.querySelectorAll("h1")[1].innerText;
        if (coinValue <= 20) {
            showCustomAlert(`Insufficient coins for: ${title}`);
            return;
          }
          
          const upCoinValue = coinValue - 20;
          document.getElementById("coin").innerText = upCoinValue;
          showCustomAlert(`<i class="fa-solid fa-phone mr-2 ml-4 text-red-700"></i>Calling  ${title} ${number}`);
    

    })
}







// callButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const coinValue = takeInt("coin");

//     if (coinValue <= 20) {
//     //   alert("Insufficient coins");
//     showCustomAlert()
//     console.log('hi');
//       return;
//     }

//     // Show custom alert
//     showCustomAlert();
//     // Deduct coins
//     const updatedCoins = coinValue - 20;
//     document.getElementById("coin").innerText = updatedCoins;
//   });
// });
