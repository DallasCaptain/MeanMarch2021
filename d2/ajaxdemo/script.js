
function haveFun(){
    console.log('before')
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
    })
    .done((data)=>{
        console.log(data)
    })
    console.log('after')
}

// $('#funbutton').click(haveFun)
document.getElementById('funbutton').addEventListener('click',()=>{
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/ditto"
    })
    .done((data)=>{
        holder = document.getElementById('holder')
        img = document.createElement('img')
        img.src = data.sprites.front_default
        holder.after(img)
    })
})


