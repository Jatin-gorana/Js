let superheroes = [
    {
        name: "Thor",
        age: 1500,
        planet: "asgard",
        weapon: ["mjolinar", "stormbreaker"]
    },
    {
        name: "Ironman",
        age: 1200,
        planet: "Earth",
        weapon: ["Armour", "jarvis", "Friday"]
    },
    {
        name: "Superman",
        age: 34,
        planet: "Krypton",
        weapon: []
    }
];

function display() {
    let rows = "";

    for (let i = 0; i < superheroes.length; i++) {
        let superhero = superheroes[i];


        // rows += "<tr><td>" + superhero.name + "</td><td>" + superhero.age + "</td><td>" + superhero.planet + "</td><td>" + superhero.weapon[0] + "</td></tr>"
        
        rows += 
        `<tr>
            <td>${superhero.name}</td>
            <td>${superhero.age}</td>
            <td>${superhero.planet}</td>
            <td>${superhero.weapon.join(", ")}</td>
            <td><button onclick = "deleteSuperhero(${i})">Delete</button</td>
        </tr>`;
    }

    // console.log(rows);
    document.getElementById("data").innerHTML = rows;


}

display();  

function deleteSuperhero(index){
    console.log(index);
    superheroes.splice(index, 1);
    display();
}


function addSuperhero(){
    let superhero = {};

    superhero.name = document.getElementById("name").value;
    superhero.age = Number(document.getElementById("age").value);
    superhero.planet = document.getElementById("planet").value;
    let weaponsList = document.getElementById("weapon").value;
    superhero.weapon = weaponsList.split(", ");
    
    superheroes.push(superhero);

    display();
}

// console.log(superhero);   
// console.log(weapons);
// console.log(weapons.split(", "));
