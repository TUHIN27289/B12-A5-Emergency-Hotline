
// integer conversion function
function takeInt(id) {
  const recValue = document.getElementById(id);
  const recValueString = recValue.innerText;
  const recValueInt = parseInt(recValueString);
  return recValueInt;
}

// hear update

const hearts = document.querySelectorAll(".h1");
for (const hrt of hearts) {
  hrt.addEventListener("click", function (e) {
    e.preventDefault();
    const heartValue = document.getElementById("heart_up").innerText;
    const val = takeInt("heart_up");
    const upHeartValueInt = val + 1;
    document.getElementById("heart_up").innerText = upHeartValueInt;
  });
}


// custom alert message 
function showCustomAlert(message) {
  document.querySelector("#custom-alert p").innerHTML = message;
  document.getElementById("custom-alert").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
}

// call button and call history

const transactionData = [];

const callButtons = document.querySelectorAll(".call-btn");
for (const calBtn of callButtons) {
  calBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const coinValue = takeInt("coin");

    const card = this.closest("div.bg-white");
    const title = card.querySelector("h1").innerText;
    const number = card.querySelectorAll("h1")[1].innerText;
    if (coinValue < 20) {
      showCustomAlert(`Insufficient coins for: ${title}`);
      return;
    }

    const upCoinValue = coinValue - 20;
    document.getElementById("coin").innerText = upCoinValue;

    const data = {
      name: title,
      serviceNumber: number,
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    // console.log(transactionData);
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    const div = document.createElement("div");
    for (const i of transactionData) {
      div.innerHTML = `
      <div class="flex justify-between items-center bg-[#F4F5F7] h-16 p-3 rounded-2xl mt-3">
            <div class="">
              <div class="flex justify-center items-center gap-x-3">
                
                <div>
                  <h1 class="inter-font text-sm font-medium text-[#080808] ">${i.name}</h1>
                  <h1 class="hind-madurai-font  text-sm font-normal text-[#080808B3] ">${i.serviceNumber}</h1>
                  
                </div>
              </div>
            </div>
            <div class="">
              <p class="outfit-font text-xs font-normal text-[#080808B3] mt-0.5">${i.date}</p>
            </div>
          </div>
      
      `;
    }
    transactionContainer.appendChild(div);

    showCustomAlert(
      `<i class="fa-solid fa-phone mr-2 ml-4 text-red-700"></i>Calling  ${title} ${number}`
    );
  });
}

// copy section
const cops = document.querySelectorAll(".c1");
for (const cop of cops) {
  cop.addEventListener("click", function (e) {
    e.preventDefault();
      const val = takeInt("copy_up");
    const upCopyValueInt = val + 1;
    document.getElementById("copy_up").innerText = upCopyValueInt;

    
  });
}

// copy button 
const copyButtons = document.querySelectorAll(".copy-btn");

// hover copy button
for(const copBtn of copyButtons){
  copBtn.addEventListener("mouseenter",function(e){
    e.preventDefault();
    this.style.backgroundColor="lightgreen";
    copBtn.addEventListener("mouseleave", function () {
    this.style.backgroundColor = ""; 
  });
  })
}

for (const button of copyButtons) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const card = button.closest(".b");
    const clickedButton = e.currentTarget; 
    const numberElem = card.querySelector("h1.roboto-font.font-bold.text-4xl.mt-5");
    const hotlineNumber = numberElem.innerText;

    navigator.clipboard.writeText(hotlineNumber).then(() => {
      showCustomAlert(`Copied hotline number: ${hotlineNumber}`);
      const copyCountElem = card.querySelector(".copy-count");
    });
  });
}




// clear button
document.getElementById("clear-btn").addEventListener('click',function(e){
  e.preventDefault();
  transactionData.length = 0; 
  document.getElementById("transaction-container").innerHTML = ""; 
})

 
