const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

export const renoirArray = [438815, 438011, 438014, 437430, 437432]

export const fetchRenoirArt = async (array) => {
    let dataArray = []

    for (const obj of array) {
        let art = await fetch(`${API}${obj}`)
        let artData = await art.json()
        dataArray.push(artData)
    }
    return dataArray
}