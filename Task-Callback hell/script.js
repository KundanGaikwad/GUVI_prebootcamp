function timer(count) {
    console.log(count)
    let counter = setInterval(() => {
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            return;
        }
        console.log(count)
    }, 1000);
    
}

timer(10);