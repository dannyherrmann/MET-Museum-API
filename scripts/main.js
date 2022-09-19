import { fetchRenoirArt, renoirArray } from "./data.js";

const displayArt = async () => {
    const array = await fetchRenoirArt(renoirArray)
    let html = ""

    for (const obj of array) {
        html += `
        <article>
        <p><b>${obj.title}</b> by ${obj.artistDisplayName}
        <p><img src="${obj.primaryImageSmall}">
        </article>
        `
    }

    document.getElementById("app").innerHTML = html

}

displayArt()