 var id = e.dataTransfer -getData ('text')
var box1 = document.getElementById( 'box1')
var box2 = document.getElementById( 'box2')
var box3 = document.getElementById( 'box3')
var box4 = document.getElementById( 'box4')
var target1 = document-getElementById ('target1')
var target2 = document-getElementById( 'target2')
var target3 = document-getElementById( 'target3')
var target4 = document-getElementById( 'target4')



box1. addEventListener('dragstart' , (e) => e.dataTransfer.setData( 'text', 'box1'))
target1.addEventListener('dragstart' , (e) =>e.preventDefault()) 

box2. addEventListener('dragstart' , (e) => e.dataTransfer.setData( 'text', 'box2'))
    target2.addEventListener('dragstart' , (e) =>e.preventDefault()) 

    box3. addEventListener ('dragstart' , (e) => e.dataTransfer.setData( 'text', 'box3'))
    target3.addEventListener('dragstart' , (e) =>e.preventDefault()) 
        
    box4. addEventListener ('dragstart' , (e) => e.dataTransfer.setData( 'text', 'box4'))
    target4.addEventListener('dragstart' , (e) =>e.preventDefault()) 

target1.addEventListener('dragover', (e)=> e.preventDefault())
target1.addEventListener('drop',(e) =>{
     var id = e.dataTransfer -getData ('text')
    var element = document-getElementById(id)
    target1. appendChild (element)
}

)

target2.addEventListener('dragover', (e)=> e.preventDefault())

target2.addEventListener('drop',(e) =>{
    var id = e.dataTransfer -getData ('text')
    var element = document-getElementById(id)
    target2. appendChild (element)
}

)
target3.addEventListener('dragover', (e)=> e.preventDefault())
target3.addEventListener('drop',(e) =>{
    var id = e.dataTransfer -getData ('text')
    var element = document-getElementById(id)
    target3. appendChild (element)
}

)


target4.addEventListener('dragover', (e)=> e.preventDefault())
target4.addEventListener('drop',(e) =>{
    var id = e.dataTransfer -getData ('text')
    var element = document-getElementById(id)
    target4. appendChild (element)
}

)


box1.addEventListener('dblclick',()=>{
    orginal.appendChild (box1)
}

)



box2.addEventListener('dblclick',()=>{
    origin1.appendChild (box3)
}

)
box3.addEventListener('dblclick',()=>{
    orgina1.appendChild (box3)
}

)

box4.addEventListener('dblclick',()=>{
    orgina1.appendChild (box4)
}

)




