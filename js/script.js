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
document.getElementById("ne-call").addEventListener("click", function () {
    console.log('ne call pressed')
  const coinValue = takeInt("coin");
  if (coinValue <= 20) {
    alert("Insufficient coins");
    return;
  } else {
    alert("avi service says:\ni am ok");
    const upCoinValue = coinValue - 20;
    document.getElementById("coin").innerText = upCoinValue;
  }
});


//   document.getElementById("ne-call").addEventListener("click", function() {
//     alert("avi service says:\ni am ok");
//   });

