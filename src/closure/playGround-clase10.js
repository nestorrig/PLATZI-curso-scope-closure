/// Crea un closure para guardar datos de mascotas
// Info: https://platzi.com/clases/3213-javascript-closures-scope/55622-playground-closure-para-almacenar-datos-de-mascota/

function createPetList() {
    // Tu código aquí 👈
    const pets = [];
    
    function addPet(pet) {
        if (pet) {
            pets.push(pet);
            return pets
        }
        return pets
    }
    console.log(pets);
    return addPet;
}
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();