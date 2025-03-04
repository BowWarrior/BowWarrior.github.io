function mySpin(){
    var x = 1024; //min value
    var y = 9999; //max value
    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}
//This part above allows the spin button to work


function getSection(){
    var sectionNumber = document.getElementById('NumOSec').value;
    var circle = document.getElementById('box');
    
    while(sectionNumber > 0){            
        if(sectionNumber === 1){
            alert('Having a spinner with one thing in it is like Putins election')
        }


        
        let randColorStr = [];
        for (var i = 0; i < sectionNumber * 2; i++) {
                let random_hex_color_code = () => {
                    let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
                    return '#' + randomColor.slice(0, 6);
                  };
                  
                randColorStr.push(random_hex_color_code());
                randColorStr.push(randColorStr[randColorStr.length - 1]);


            if(i >= 1){
                let lastColorlength = randColorStr.length;
                let lastColor = randColorStr[lastColorlength - 1];
                let secondLastColor = randColorStr[lastColorlength - 2]
                //alert(lastColor);
                
                if(lastColor === secondLastColor){
                    randColorStr.push();
                    
                }
            }    

            i+1; 
        };
        //This part above with the randColorStr and the for loop ensures I cannot have the same color multiple times, and it also ensures the random color is 6 digits because CSS won't accept it otherwise
        


        if(sectionNumber >= 2){
            let degreeArr = [];

            for (var i = 0; i < sectionNumber; i++) {
                let degrees = i * (360/sectionNumber);
                degreeArr.push(degrees);
                degreeArr.push(degrees);
                //alert(degreeArr);

                if(i === sectionNumber - 1){
                    let SectionDetails = [];
                    degreeArr.splice(0, 1);
                    //alert(degreeArr);
                    
                    for(var x = 0; x < (sectionNumber * 2) - 1; x++){
                        SectionDetails.push(randColorStr[x] + ' ' + degreeArr[x]);
                        let manyDegrees = SectionDetails.join('deg, ');
                        //alert(manyDegrees);
                        let lastDeg = 'deg';
                        let FinalStyle = manyDegrees.concat(lastDeg);
                        //alert(FinalStyle);
                        
                        let y = circle.style.background = 'conic-gradient(' + FinalStyle + ')';
                        //alert(y);
                    }            
                }

                i+1;
            }
            break;
        }
        else{
            break;
        }			
    }    
}