const img = document.querySelector('img');

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=2Mrrc6OUM1eMGO20UFUr16Wl802EK11L&s=cats', {mode: 'cors'})
    const catData = await response.json();
    img.src = catData.data.images.original.url;

}

getCats();

