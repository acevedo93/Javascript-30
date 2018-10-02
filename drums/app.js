 /* ---------------------------------------------------------//
 Drum pad  activado por Teclas
 
 /----------------------------------------------------------*/
'use strict'
let drumSound = [{
    nameKit : 'kit1',
    instruments:[
        {
            name:'kick',
            fileWav:'files/kick.wav',
            keyCode: 65
        },
        {
           name:'snare',
           fileWav:'files/snare.wav',
           keyCode: 83
       },
       {
           name:'hit-hat',
           fileWav:'files/hit-hat.wav',
           keyCode:68
       },
       {
           name:'tom1',
           fileWav:'files/tom1.wav',
           keyCode:70
       },
       {
           name:'tom2',
           fileWav:'files/tom2.wav',
           keyCode:71
       },
       {
           name:'splash',
           fileWav:'files/crash.wav',
           keyCode:74
       }

    ]
      
},
{
    nameKit : 'kit2',
    instruments:[
        {
            name:'kick',
            fileWav:'files/kick.wav',
            keyCode: 65
        },
        {
           name:'snare',
           fileWav:'files/snare.wav',
           keyCode: 83
       },
       {
           name:'hit-hat',
           fileWav:'files/hit-hat.wav',
           keyCode:68
       },
       {
           name:'tom1',
           fileWav:'files/tom1.wav',
           keyCode:70
       },
       {
           name:'tom2',
           fileWav:'files/tom2.wav',
           keyCode:71
       },
       {
           name:'splash',
           fileWav:'files/crash.wav',
           keyCode:74
       }

    ]
      
},
{
    nameKit : 'kit3',
    instruments:[
        {
            name:'kick',
            fileWav:'files/kick.wav',
            keyCode: 65
        },
        {
           name:'snare',
           fileWav:'files/snare.wav',
           keyCode: 83
       },
       {
           name:'hit-hat',
           fileWav:'files/hit-hat.wav',
           keyCode:68
       },
       {
           name:'tom1',
           fileWav:'files/tom1.wav',
           keyCode:70
       },
       {
           name:'tom2',
           fileWav:'files/tom2.wav',
           keyCode:71
       },
       {
           name:'splash',
           fileWav:'files/crash.wav',
           keyCode:74
       }

    ]
      
},
{
    nameKit : 'kit4',
    instruments:[
        {
            name:'kick',
            fileWav:'files/kick.wav',
            keyCode: 65
        },
        {
           name:'snare',
           fileWav:'files/snare.wav',
           keyCode: 83
       },
       {
           name:'hit-hat',
           fileWav:'files/hit-hat.wav',
           keyCode:68
       },
       {
           name:'tom1',
           fileWav:'files/tom1.wav',
           keyCode:70
       },
       {
           name:'tom2',
           fileWav:'files/tom2.wav',
           keyCode:71
       },
       {
           name:'splash',
           fileWav:'files/crash.wav',
           keyCode:74
       }
    ]  
},
]
  let kitSelect ;

    let makeChange = document.getElementById('change')
kitSelect.addEventListener('change', function(){
     kitSelect = document.getElementById('kit').value
})

makeChange.addEventListener('click',function(event){
  playDrums(kitSelect)
})



function playDrums(kitName){
        let drumsContainer = document.getElementById('drumsContainer')
        drumsContainer.addEventListener('click',event =>{
            let nameEvent =  event.target.id
            for(let i = 0; i < drumSound.length; i++){
                if( drumSound[i].nameKit  ===  kitName){
                    for( let j = 0; j < drumSound[i].instruments.length; j++){
                        if(drumSound[i].instruments[j].name === nameEvent ){
                                new Audio (drumSound[i].instruments[j].fileWav).play()
                        }
                    }
                }
            }
            
        })
        window.onkeydown = function(key){
            for( let i = 0; i < drumSound.length; i++){
                if( drumSound[i].nameKit === kitName){
                    for(let j = 0 ; j < drumSound[i].instruments.length; j++){
                        if(drumSound[i].instruments[j].keyCode === key.keyCode){
                            let soundClick = document.getElementById( drumSound[i].instruments[j].name);
                            soundClick.click()
                            soundClick.classList.add('keydown')
                            setTimeout(function(){
                                soundClick.classList.remove('keydown')
                            },100)
                        }
                    }
                }           
            }
        }
}


