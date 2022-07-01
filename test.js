const commissionText = function (message) {
  document.querySelector(".commission").textContent = message;
};
const commissionText2 = function (message) {
  document.querySelector(".commission2").textContent = message;
};
const dataText = function (message) {
  document.querySelector(".dataText").textContent = message;
};

function CommissionRate(price, year, age) {
  let total = 0;
  let percen = 0;

  if (year == 1) {
    if (age >= 51 && age <= 60) {
      total = (price * 2) / 100;
      percen = 2;
    } else if (age <= 50) {
      total = (price * 2) / 100;
      percen = 2;
    }
  } else if(year == 2){
    if (age >= 51 && age <= 60) {
        total = (price * 2) / 100;
        percen = 2;
      } else if (age <= 50) {
        total = (price * 1) / 100;
        percen = 1;
      }
  } else {
    total = (price * 1) / 100;
    percen = 1;
  }

  return `Your Commission is ${total} Bath and is ${percen}%`;
}

console.log(CommissionRate(2000,1,55));
console.log(CommissionRate(2000,2,55));
console.log(CommissionRate(2000,3,55));


function OveridingRate(price, age, status) {
    let total = 0;
    let percen = 0;
  
    if (status == 'Annual' || status == 'annual') {
      if (age >= 51 && age <= 60) {
        total = (price * 13) / 100;
        percen = 13;
      } else if (age <= 50) {
        total = (price * 20) / 100;
        percen = 20;
      }
    } else if(status == 'nonAnnual' || status == 'NonAnnual'){
      if (age >= 51 && age <= 60) {
          total = (price * 13) / 100;
          percen = 13;
        } else if (age <= 50) {
          total = (price * 16) / 100;
          percen = 16;
        }
    } else {
      total = (price * 1) / 100;
      percen = 1;
    }
  
    return `Your Overidding Rate is ${percen}% and is ${total} Bath`;
  }
  
  console.log(OveridingRate(2000,15,'annual'));
  console.log(OveridingRate(2000,20,'nonAnnual'));
  console.log(OveridingRate(2000,55,'annual'));





document.querySelector(".btn-cal").addEventListener("click", function () {
  const Year = document.querySelector(".year").value;
  const Price = document.querySelector(".price").value;
  const Age = document.querySelector(".age").value;
  commissionText(CommissionRate(Price, Year, Age));
});

document.querySelector(".btn-cal2").addEventListener("click", function () {
  const Status = document.querySelector(".status2").value;
  const Price = document.querySelector(".price2").value;
  const Age = document.querySelector(".age2").value;
  commissionText2(OveridingRate(Price, Age, Status));
});



const GetData = () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((result) => {
      let dataTable = document.querySelector("#data-output");
      let show = "";

      for (results of result) {
        show += `<tr>
            <td>${results.id}</td>
            <td>${results.policy}</td>
            <td>${results.policyNo}</td>
            <td>${results.policyType}</td>
            <td>${results.status}</td>
            <td>${results.agentID}</td>
            </tr>
            `;
      }
      dataTable.innerHTML = show;
      console.log(result);

      //  dataText(`your name is ${result}`)
    });
};

document.querySelector(".btn-get").addEventListener("click", GetData);



