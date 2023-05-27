// const demo = document.querySelector('.demo')

// window.addEventListener("keydown",(e)=>{
//     if(e.keyCode == 13){
//         let audio1 = new Audio("24-piano-keys/key01.ogg")
        // audio1.play()
//     }
    
// })

const a1 = document.querySelector('.a1'),
a2 = document.querySelector('.a2'),
a3 = document.querySelector('.a3'),
a4 = document.querySelector('.a4'),
a5 = document.querySelector('.a5'),
a6 = document.querySelector('.a6'),
a7 = document.querySelector('.a7'),
a8 = document.querySelector('.a8'),
a9 = document.querySelector('.a9'),
a10 = document.querySelector('.a10'),
a11= document.querySelector('.a11'),
a12 = document.querySelector('.a12'),
a13 = document.querySelector('.a13'),
a14 = document.querySelector('.a14'),
a15 = document.querySelector('.a15'),
a16 = document.querySelector('.a16'),
a17 = document.querySelector('.a17'),
a18 = document.querySelector('.a18'),
a19 = document.querySelector('.a19'),
a20 = document.querySelector('.a20'),
a21 = document.querySelector('.a21'),
a22 = document.querySelector('.a22'),
a23= document.querySelector('.a23'),
a24 = document.querySelector('.a24');


window.addEventListener("keydown",(e)=>{
    if(e.keyCode == 81){
        let audio1 = new Audio("24-piano-keys/key01.ogg")
        audio1.play()
    } else if(e.keyCode == 87){
        let audio1 = new Audio("24-piano-keys/key02.ogg")
        audio1.play()
    } else if(e.keyCode == 69){
        let audio1 = new Audio("24-piano-keys/key03.ogg")
        audio1.play()
    } else if(e.keyCode == 82){
        let audio1 = new Audio("24-piano-keys/key04.ogg")
        audio1.play()
    } else if(e.keyCode == 84){
        let audio1 = new Audio("24-piano-keys/key05.ogg")
        audio1.play()
    } else if(e.keyCode == 89){
        let audio1 = new Audio("24-piano-keys/key06.ogg")
        audio1.play()
    } else if(e.keyCode == 85){
        let audio1 = new Audio("24-piano-keys/key07.ogg")
        audio1.play()
    } else if(e.keyCode == 73){
        let audio1 = new Audio("24-piano-keys/key08.ogg")
        audio1.play()
    }else if(e.keyCode == 79){
        let audio1 = new Audio("24-piano-keys/key09.ogg")
        audio1.play()
    }else if(e.keyCode == 80){
        let audio1 = new Audio("24-piano-keys/key010.ogg")
        audio1.play()
    }else if(e.keyCode == 65){
        let audio1 = new Audio("24-piano-keys/key11.ogg")
        audio1.play()
    }else if(e.keyCode == 83){
        let audio1 = new Audio("24-piano-keys/key12.ogg")
        audio1.play()
    }else if(e.keyCode == 68){
        let audio1 = new Audio("24-piano-keys/key13.ogg")
        audio1.play()
    }else if(e.keyCode == 70){
        let audio1 = new Audio("24-piano-keys/key14.ogg")
        audio1.play()
    }else if(e.keyCode == 71){
        let audio1 = new Audio("24-piano-keys/key15.ogg")
        audio1.play()
    } else if(e.keyCode == 72){
        let audio1 = new Audio("24-piano-keys/key16.ogg")
        audio1.play()
    }else if(e.keyCode == 74){
        let audio1 = new Audio("24-piano-keys/key17.ogg")
        audio1.play()
    } else if(e.keyCode == 75){
        let audio1 = new Audio("24-piano-keys/key18.ogg")
        audio1.play()
    } else if(e.keyCode == 76){
        let audio1 = new Audio("24-piano-keys/key19.ogg")
        audio1.play()
    } else if(e.keyCode == 90){
        let audio1 = new Audio("24-piano-keys/key20.ogg")
        audio1.play()
    } else if(e.keyCode == 88){
        let audio1 = new Audio("24-piano-keys/key21.ogg")
        audio1.play()
    } else if(e.keyCode == 67){
        let audio1 = new Audio("24-piano-keys/key22.ogg")
        audio1.play()
    } else if(e.keyCode == 86){
        let audio1 = new Audio("24-piano-keys/key23.ogg")
        audio1.play()
    } else if(e.keyCode == 66){
        let audio1 = new Audio("24-piano-keys/key24.ogg")
        audio1.play()
        
    } else if(e.keyCode == 78){
        // // let audio1 = new Audio("24-piano-keys/key25.ogg")
        // audio1.play()
    }
    
})

// background-color: rgb(130, 130, 60);
a1.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key01.ogg")
        audio1.play()
        setTimeout(() => {
            a1.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a1.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
    
})
a2.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key02.ogg")
        audio1.play()
        setTimeout(() => {
            a2.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a2.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a3.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key03.ogg")
        audio1.play()
        setTimeout(() => {
            a3.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a3.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a4.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key04.ogg")
        audio1.play()
        setTimeout(() => {
            a4.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a4.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a5.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key05.ogg")
        audio1.play()
        setTimeout(() => {
            a5.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a5.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a6.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key06.ogg")
        audio1.play()
        setTimeout(() => {
            a6.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a6.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a7.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key07.ogg")
        audio1.play()
        setTimeout(() => {
            a7.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a7.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a8.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key08.ogg")
        audio1.play()
        setTimeout(() => {
            a8.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a8.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a9.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key09.ogg")
        audio1.play()
        setTimeout(() => {
            a9.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a9.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a10.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key10.ogg")
        audio1.play()
        setTimeout(() => {
            a10.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a10.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a11.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key11.ogg")
        audio1.play()
        setTimeout(() => {
            a11.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a11.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a12.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key12.ogg")
        audio1.play()
        setTimeout(() => {
            a12.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a12.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a13.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key13.ogg")
        audio1.play()
        setTimeout(() => {
            a13.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a13.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a14.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key14.ogg")
        audio1.play()
        setTimeout(() => {
            a14.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a14.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a15.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key15.ogg")
        audio1.play()
        setTimeout(() => {
            a15.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a15.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a16.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key16.ogg")
        audio1.play()
        setTimeout(() => {
            a16.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a16.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a17.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key17.ogg")
        audio1.play()
        setTimeout(() => {
            a17.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a17.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a18.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key18.ogg")
        audio1.play()
        setTimeout(() => {
            a18.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a18.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a19.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key19.ogg")
        audio1.play()
        setTimeout(() => {
            a19.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a19.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a20.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key20.ogg")
        audio1.play()
        setTimeout(() => {
            a20.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a20.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a21.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key21.ogg")
        audio1.play()
        setTimeout(() => {
            a21.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a21.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})

a22.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key22.ogg")
        audio1.play()
        setTimeout(() => {
            a22.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a22.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a23.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key23.ogg")
        audio1.play()
        setTimeout(() => {
            a23.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a23.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
})
a24.addEventListener('click', ()=>{
    let audio1 = new Audio("24-piano-keys/key24.ogg")
        audio1.play()
        setTimeout(() => {
            a24.style.backgroundColor = "rgb(130, 130, 60)"
            setInterval(() => {
                a24.style.backgroundColor = "rgb(255, 255, 195)"
            }, 1500);
        }, 1);
        
    
})