const img_dog = document.getElementById("doguinho");
document.getElementById("buttondog").addEventListener("click", pesquisarDoguinho);
async function pesquisarDoguinho() {
    const url = `https://api.thedogapi.com/v1/images/search`;
    const deucerto= await fetch(url);

    const data = await deucerto.json();
    console.log(data[0].url)


    const new_url = data[0].url;
    img_dog.src = new_url;

}

async function pesquisarGatinho() {
    const url = `https://api.thecatapi.com/v1/images/search`;
    const deucerto= await fetch(url);

    const data = await deucerto.json();
    console.log(data[0].url)


    const new_url = data[0].url;
    img_cat.src = new_url;

}
const img_cat = document.getElementById("gatinho");
document.getElementById("buttoncat").addEventListener("click", pesquisarGatinho);
