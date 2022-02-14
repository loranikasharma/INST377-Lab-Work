document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div')
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10
    //The Tetrominoes
    const lTetromino = [[1, width + 1, width * 2 +1, 2],
    [width, width+1, width+2, width*2+2], [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]]
    const zTetromino=[[0, width, width+1, width*2+1], [width+1, width+2, width*2, width*2+1]
    [0, width, width+1, width*2+1], [width+1, width+2, width*2, width*2+1]]
    const tTetromino=[[1, width, width+1, width+2], [1, width+1,width+2,width*2+1]
    [width, width+1, width+2, width*2+1], [1, width, width+1, width*2+1]]
    const oTetromino=[[0, 1, width, width+1], [0, 1, width, width+1], [0, 1, width, width+1
    ],[0, 1, width, width+1]]
    const iTetromino=[[1, width+1, width*2+1, width*3+1], [width, width+1, width+2, width+3]
    [1, width+1, width*2+1, width*3+1], [width, width+1, width+2, width+3]]

    
   const theTetromino=[lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]
    let currentPosition=4
    let currentRotation=0
    let random=Math.floor(Math.random()*theTetromino.length)
    let current=theTetromino[random][currentRotation]

    function draw(){
        current.forEach(index => {
            squares[currentPosition+index].classList.add('tetromino')
        })
    }
    function undraw(){
        current.forEach(index => {
            squares[currentPosition+index].classList.remove('tetromino')
        })
    }
    timerId = setInterval(moveDown, 1000)
    function control(e){
        if(e.keyCode == 37){
            moveLeft()
        }
        
    }

    function moveDown(){
        undraw()
        currentPosition+=width
        draw()
        freeze()
    }
    function freeze(){
        if(current.some(index => squares[currentPosition+index+width].classList.contains('taken'))){
            current.forEach(index => squares[currentPosition+index].classList.add('taken'))
            random = Math.floor(Math.random()*theTetromino.length)
            current=theTetromino[random][currentPosition]
            currentPosition=4
            draw()
        }
    }
    function moveLeft(){
        undraw()
        const IsAtLeftEdge=current.some(index =>(currentPosition+index)%width == 0)
        if(!IsAtLeftEdge) currentPosition -=1
        if (current.some(index=>squares[currentPosition+index].classList.contains('taken')))
        currentPosition+=1
    }
    draw()

});