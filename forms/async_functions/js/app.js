let adatok = await loadData('adatok.json')

async function loadData(fajl) {
    const res = await fetch(fajl)
    return res.json()
}