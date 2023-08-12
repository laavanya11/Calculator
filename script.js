//for input value
let input=document.getElementById('input-data');
//for buttons selected
let buttons=document.querySelectorAll('button') ;
//an empty string is taken
let string="";  
//making array of all buttons using frunction Array.from()
let arr=Array.from(buttons);

arr.forEach(button =>{      
    button.addEventListener('click' , (e)=>{

        if(e.target.innerHTML=="." && string.includes('.'))  //checks if mutiple times continuous decimal is not pressed
        return;

        if(e.target.innerHTML == '=')
        {
            string= eval(string);      //inbuilt function to evalute
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string="";                //clear string
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string= string.substring(0, string.length()-1);  //inbuilt function to get substring
            input.value = string;
        }
        else
        {
            string += e.target.innerHTML;        //add input to string
            input.value = string;
        }
    })
})

