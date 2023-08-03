let diff = document.getElementsByClassName('difficulty-levels');

for (let i = 0; i<diff.length; i++){
    diff[i].addEventListener('mouseover', ()=>{
        diff[i].style.boxShadow = '1px 7px 1px 7px rgb(230, 230, 230)';
        diff[i].style.cssText = 
        `
        box-shadow: 2px 5px 1px 5px rgb(90, 90, 90);
        transition-duration: 0.5s;
    }   `
    })
    diff[i].addEventListener('mouseout', ()=>{
        diff[i].style.boxShadow = '1px 5px 1px 5px rgb(230, 230, 230)';
        diff[i].style.color = 'rgb(75, 75, 75)';
    })
    diff[i].addEventListener('mousedown', ()=>{
        diff[i].style.boxShadow = '0px 1px 0px 1px rgb(90, 90, 90)';
        diff[i].style.fontSize = '45px';
        diff[i].addEventListener('mouseup', ()=>{
            diff[i].style.cssText = 
        `
        box-shadow: 2px 5px 1px 5px rgb(90, 90, 90);
        transition-duration: 0.5s;
    }   `
        })
    })
}

diff[0].addEventListener('click', ()=>{
    window.open('./EasyMode/easymode.html')
})

diff[1].addEventListener('click', ()=>{
    window.open('./MediumMode/mediummode.html')
})