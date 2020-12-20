setInterval(() => {
    for(let i = 10; i > 0; i--){
        document.getElementById('timer').innerText = i;
    }
},1000)