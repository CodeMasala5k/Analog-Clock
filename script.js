
        const deg = 6, 
        hr = document.getElementById("hr"),
        min = document.getElementById("mn"),
        sec = document.getElementById("sc");

        setInterval(()=>{
            let date = new Date(),
            hh = date.getHours() *30,
            mm = date.getMinutes() * deg,
            ss = date.getSeconds() * deg;
    
            // console.log(`rotateZ(${(hh) + (mm/12)}deg)`)
            // console.log(`rotateZ(${mm}deg)`)
    
            hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
            min.style.transform = `rotateZ(${mm}deg)`
            sec.style.transform = `rotateZ(${ss}deg)`
        })
 
