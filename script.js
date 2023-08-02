let diff = document.getElementsByClassName('difficulty-levels');

for (let i = 0; i<diff.length; i++){
    diff[i].addEventListener('mouseover', ()=>{
        diff[i].style.boxShadow = '1px 7px 1px 7px rgb(230, 230, 230)';
        diff[i].style.color = 'rgb(0, 0, 0)';
    })
    diff[i].addEventListener('mouseout', ()=>{
        diff[i].style.boxShadow = '1px 5px 1px 5px rgb(230, 230, 230)';
        diff[i].style.color = 'rgb(75, 75, 75)';
    })
    diff[i].addEventListener('mousedown', ()=>{
        diff[i].style.boxShadow = '0px 1px 0px 1px rgb(230, 230, 230)';
        diff[i].style.fontSize = '45px';
        window.open('../EasyMode/easymode.html')
        diff[i].addEventListener('mouseup', ()=>{
            diff[i].style.boxShadow = '1px 7px 1px 7px rgb(230, 230, 230)';
            diff[i].style.fontSize = '50px';
        })
    })
}