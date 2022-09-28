import React from 'react'


function MemeForm() {    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
        
    })

    const [allMemeImages, setAllMemeImages] = React.useState({})
    
    React.useEffect(() => {
        console.log("Effect Ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    },[meme.randomImage])
    

    function getMemeImg() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        } )
    }   

    function handleChange(event) {
        const {type, name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    

    return (
        <div className="form">
            <input 
                className="input" 
                id="input-1"
                type="text"
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
            />
            <input 
                className="input" 
                id="input-2"
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
            />
            <button onClick={getMemeImg} className="button">
                Get a new meme image <span>🖼</span>
            </button>
            <div className="imgBox">
               <img 
                    src={meme.randomImage}
                    className="memeImg" 
                /> 
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )   

    
    
}


export default MemeForm