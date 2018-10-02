/*
control css variables with js

*/

let controlsObject = [
    {
        idcontrol:'border',
        medidacontrol:'%'
    },
    {
        idcontrol:'blur',
        medidacontrol:'px'
    }
];

    
    controls = Array.prototype.slice.call(document.querySelectorAll('.controls')),
    addcontrol = document.getElementById("addcontrol");
    addcontrol.addEventListener('click',(e)=>{
        if(document.getElementById('addproperty').value == '' || document.getElementById('addmedida').value == ''){
            alert("los campos estan vacios no se puede añadir un nuevo control")
        }
        else{
            let addProperty = document.getElementById('addproperty').value;
            let addmedida =  document.getElementById('addmedida').value;
            setcontrol(addProperty,addmedida)
        }
    })

    let fatherControl = document.getElementById('controls')
    fatherControl.addEventListener('mousemove',(event)=>{
    target = event.target
        for (let i = 0; i < controlsObject.length; i++){
            if(target.id === controlsObject[i].idcontrol){
                setCSS(target.id,controlsObject[i].medidacontrol)
            }
        }
    
     
    })

/* funciones */
function setcontrol(name,medida){
   /*
    let mainDiv = document.getElementById ('controls');
    let newLabel ='<label  for = "">' + name +'</label>' 
    let newSlider = '<input   name="slider" type="range" id="'+name+'" min="0" max="50" class="controls" > ';
    mainDiv.insertAdjacentHTML('afterend',newSlider);
    mainDiv.insertAdjacentHTML( 'afterend', newLabel );
    */

    let mainDiv = document.getElementById ('controls'),
        label = document.createElement('label');
        label.textContent=name;
        input = document.createElement('input');
        input.setAttribute('id',name)
        input.setAttribute('type','range')
        input.setAttribute('name','slider')
        input.setAttribute('min','0')
        input.setAttribute('max','50')
        input.setAttribute('value','0')
        input.setAttribute('class','controls')
        input.setAttribute('class','slider')
        mainDiv.appendChild(label);
        mainDiv.appendChild(input);


    //refresca el array de controls//
     controls = Array.prototype.slice.call(document.querySelectorAll('.controls'))
     controlsObject.push({
         idcontrol:name,
         medidacontrol:medida
     })
   
    
     
}

function setCSS(id,medida){
    console.log(id,medida);
    let control = document.getElementById(id),
     controlcss = document.getElementsByTagName('html')[0];
     controlcss.style.setProperty('--'+id, control.value + medida);
}








    

