// All data: https://openapi.programming-hero.com/api/ai/tools

// Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

// Single data Example: https://openapi.programming-hero.com/api/ai/tool/01


const fetchAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    const datas = data.data.tools;
    // console.log(data.data.tools);
    showData(datas)
}

fetchAllData();

const showData = (datas) => {
    const data_container = document.getElementById("data-container");
    data_container.innerHTML = "";
    datas.forEach(data => {
        const createdCartDiv = document.createElement("div");
        createdCartDiv.className = `card bg-base-100 shadow-xl`;
        createdCartDiv.innerHTML = `
        <figure><img src="${data.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <ol>
          <li>1. ${data.features[0]}</li>
          <li>2. ${data.features[1]}</li>
          <li>3. ${data.features[2]}</li>
          </ol>
          <hr class="my-4">
          <div class="flex justify-between">
            <div>
                <h2 class="card-title">${data.name}</h2>
                <p><i class="fa-solid fa-calendar-minus mr-3"></i>11/11/2024</p>
            </div>
            <div>
                <button onclick="my_modal_1.showModal();singleDetails('${data.id}')" class="btn"><i class="fa-solid fa-arrow-right text-red-500"></i></button>
            </div>
          </div>
        </div>
        `;

        // '${data.id}'
        // console.log(data.id);


        data_container.appendChild(createdCartDiv);

        // const features = data.features;
        // features.forEach(feature => {
            
        // });


        // const createdLi = document.createElement("li");
        // createdLi.innerHTML = `${}`

        // console.log(features);
    });
}

const singleDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    // console.log(id);
}

// const showSingleDetails = () {

// }

// singleDetails();

