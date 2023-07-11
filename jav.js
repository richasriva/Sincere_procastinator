const Css =()=>{
    return `<style>
    *{
        border-radius: 5px;
    }
    body{
        margin:0;
        padding:0;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        width:1200px;
        height:600px;
        border-radius:10px;
        onclick:hover;
        margin-top:4px;
    } 
    .img:hover{
        transform:scale(1.3);
        z-index:2;

    }
    </style>`
}
const Html =()=>{
    return `<div class="container">
    <img class="img" src="https://images.unsplash.com/photo-1556327070-9661a89d51db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    alt="sorryimg">
    
    </div>`
}
const blockedUrls =["www.facebook.com","www.instagram.com","www.youtube.com","www.netflix.com","www.primevideo.com","www.zee5.com","www.hotstar.com","www.hd3movies.com"]
const set= new Set(blockedUrls);
if(set.has(window.location.hostname)){
    document.head.innerHTML = Css();
    document.body.innerHTML =Html();
}

//motivation js
const getThoughts = ()=>{
        fetch("https://api.quotable.io/random").then(res =>res.json()).then(result=>{
            console.log(result);
            const MyThought= document.getElementById("motive");
            MyThought.innerHTML = result.content;

        });
        
        
    }
window.addEventListener("load",() =>{
    getThoughts();
});
const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search");
btn.addEventListener("click",() =>{
    let inp =document.getElementById("input1").value;
    console.log(inp);
    fetch(`${url}${inp}`)
    .then((Response)=> Response.json())
    .then((data) =>{
        console.log(data);
        result.innerHTML= `
        <div class="word">
                <h3>${inp}</h3>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
        </div>`
});
});
