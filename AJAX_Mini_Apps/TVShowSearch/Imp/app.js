const form = document.querySelector("#searchForm");
const apiBaseUrl = "https://api.tvmaze.com/search/shows";

const getTvShowImgs = async(searchText) =>{
    const imgs = [];    
    const config = {params: {q: searchText}};
    //get tv show image urls in an array
    try{
        const res = await axios.get(apiBaseUrl, config);
        for(let item of res.data){
            const pic = item.show.image;
            if(pic !== null){
                imgs.push(item.show.image.medium);
            }
        }
    }
    catch(e){
        console.log("Sorry no results available! :(")        
    }

    return imgs;
}

form.addEventListener('submit', async(e)=>{
    //prevent default
    e.preventDefault();

    //clean up previous images and results
    const oldImgs = document.querySelectorAll('img');
    for(let oi of oldImgs){
        if(oi !== null) {oi.remove();}
    }
    const oldH2 = document.querySelector("h2");
    if(oldH2 !== null) {oldH2.remove();}
    
    //create images
    try{
        let images = await getTvShowImgs(form.elements.query.value);
        if(images.length > 0){
            for(let img of images){
                const imgEle = document.createElement("img");
                imgEle.src = img;
                document.body.append(imgEle);
            }
        }
        else{
            const h2Ele = document.createElement("h2");
            h2Ele.innerText = "Sorry no posters available :(";
            document.body.append(h2Ele);
        }
        form.elements.query.value = "";

    }
    catch(e){
        console.log("Sorry no results available! :(");
        console.log(e);
    }    
});