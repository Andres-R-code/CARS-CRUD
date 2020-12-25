const cars = [
    {
        id: 1,
        brand: "Audi",
        model: "20",
        color: "gray",
        year: 2020,
        price: 912000000,
        img: "https://www.hibridosyelectricos.com/media/hibridos/images/2020/03/26/2020032616552541976.jpg?width=1200&enable=upscale",
    },
    {
        id: 2,
        brand: "Toyota",
        model: "LC200",
        color: "gray",
        year: 2020,
        price: 218000000,
        img: "https://http2.mlstatic.com/toyota-sahara-lc-200-actualizada-2020-refull-D_NQ_NP_601827-MCO43441851715_092020-F.webp",
    },

    {
        id: 3,
        brand: "Hyundai",
        model: "Tucson GI",
        color: "gray",
        year: 2010,
        price: 35000000,
        img: "https://m.media-amazon.com/images/I/71MiAk7XbjL._UY560_.jpg",
    }
]

function printDates() {
    const container = document.getElementById("container-cars");
    let html = "";

    cars.forEach((car) => {
        html += `<tr>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td><img src="${car.img}"  width="250px"></td>
                    <td><button class="btn btn-danger" onclick="deleteCars(${car.id})">Delete</button><br></td>
                </tr>`;
    });

    container.innerHTML = html;
}

function deleteCars(id) {
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    printDates();
    alert("This car will be deleted whit the id ${id}");
}

function addCar() {

    const id = cars[cars.length - 1].id + 1;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;

    const newCar = {
        id,
        brand,
        model,
        color,
        year,
        price,
        img,
    }
    cars.push(newCar);
    printDates();
    document.getElementById("form-car").reset();
}

function update() {
    const inputId = parseInt(document.getElementById("index").value)
    const inputBrand = document.getElementById("brandUpdate").value;
    const inputModel = document.getElementById("ModelUpdate").value;
    const inputColor = document.getElementById("ColorUpdate").value;
    const inputYear = document.getElementById("YearUpdate").value;
    const inputPrice = document.getElementById("PriceUpdate").value;
    const inputImgUrl = document.getElementById("ImageUrlUpdate").value;
    const index = cars.findIndex((car) => car.id == parseInt(inputId));


    if (cars[index]) {
        if (inputBrand !== "") {
            cars[index].brand = inputBrand
        }
        if (inputModel !== "") {
            cars[index].model = inputModel
        }
        if (inputColor !== "") {
            cars[index].color = inputColor
        }
        if (inputYear !== "") {
            cars[index].year = parseInt(inputYear)
        }
        if (inputPrice !== "") {
            cars[index].price = parseInt(inputPrice)
        }
        if (inputImgUrl !== "") {
            cars[index].img = inputImgUrl
        }
    } else {
        console.log(`The car with the id: ${inputId} doesn´t exist`)
    }

    document.getElementById("formUpdate").reset();
    printDates();
}



printDates();