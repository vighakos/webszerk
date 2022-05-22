$('document').ready(function() {
    contentLoad('home')

    $('#hirdetesszam').html(animals.length+" db")
})

function contentLoad(page){
    $('#content').load(page+'.html');

    setTimeout(function() {
        $('#'+page).html(getAnimals(page));
    }, 500)
}

let infos = {
   "address": "6500 Baja, Bácska tér 1.",
    "email": "valami@valami.hu",
    "phone": "06203345656"
}

let animals = [
    {
        "categories": "cats",
        "name": "Cirmi",
        "age": 2,
        "gender": "kandúr",
        "picture": "cirmi.jpg",
        "description": "sdfs dfhdshf ajsdhf adsg fhsda fhj sdafhads fjsa dfhads fkjlasdf asdéklfhasédkf kasdljféalskdfad",
        "phone": "06703332255",
        "price": 15000
    },
    {
        "categories": "cats",
        "name": "Mici",
        "age": 1,
        "gender": "nőstény",
        "picture": "mici.jpg",
        "description": "adsfasdfhasd fa hsdjkfhaksdlfhaékjsdfh aékjlsdhfajksdhf ajksdhflakjsdfh alksdjfhalkjsdf h",
        "phone": "06301112233",
        "price": 12000
    },
    {
        "categories": "cats",
        "name": "Dörmi",
        "age": 4,
        "gender": "female",
        "picture": "dormi.jpg",
        "descripttion": "dfsdjfshd fjadsh fjkasdhfjkla hsdjfkhasdjklfh aluksdjfh alkjsdfa",
        "phone": "06203334455",
        "price": 8000
    },
    {
        "categories": "dogs",
        "name": "Dörmi",
        "age": 4,
        "gender": "female",
        "picture": "bloki.jpg",
        "descripttion": "dfsdjfshd fjadsh fjkasdhfjkla hsdjfkhasdjklfh aluksdjfh alkjsdfa",
        "phone": "06203334455",
        "price": 8000
    },
    {
        "categories": "dogs",
        "name": "Dörmi",
        "age": 4,
        "gender": "female",
        "picture": "satan.jpg",
        "descripttion": "dfsdjfshd fjadsh fjkasdhfjkla hsdjfkhasdjklfh aluksdjfh alkjsdfa",
        "phone": "0624515656",
        "price": 8000
    },
];


function getAnimals(categories)
{
    let str = '';
    animals.forEach(animal => {
        if (animal.categories == categories){
            str += `<div class="card" style="width: 18rem;">
            <img src="animals/${animal.picture}" class="card-img-top" alt="#">
            <div class="card-body">
            <h5 class="card-title">${animal.name}</h5>
            <p class="card-text">${animal.description}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${animal.gender}</li>
            <li class="list-group-item">${animal.phone}</li>
            <li class="list-group-item">${animal.age} éves</li>
            <li class="list-group-item">${animal.price} Ft</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Megveszem</a>
              </div>
            </div>`
        }
    });

    return str;
}