


function clickHandler(){

    const colors = ['lightcoral' , 'beige' , 'black' , 'white' , 'cadetblue' ,'lightskyblue' , 'pink', 'red' , 'yellow']

    const outerDiv = document.querySelector('.outer-box');
    const innerDiv = document.querySelector('.inner-box');

    const outerWidth = outerDiv.clientWidth;
    const outerHeight = outerDiv.clientHeight;

    const innerWidth = innerDiv.clientWidth;
    const innterHeight = innerDiv.clientHeight;


    const maxX = outerWidth - innerWidth;
    const maxY = outerHeight - innterHeight;


    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    const randomCol = Math.floor(Math.random() * (colors.length))

    innerDiv.style.left = `${randomX}px`;
    innerDiv.style.top = `${randomY}px`;
    innerDiv.style.backgroundColor = colors[randomCol];
    

}