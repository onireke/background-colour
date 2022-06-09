var i = 0;

function changeColor(){
    let colours = ['red', 'pink', 'green', 'grey', 'blue', 'black', 'blue']
    document.getElementsByTagName('body')[0].style.background = colours[i++]
    if ( i > colours.length -1)
       i = 0;
}