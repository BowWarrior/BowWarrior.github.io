var degreeArr;
var randColorStr;
var sectionNumber;
let sectionNames = [];




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

    //adds delay to make the winning answer show after the spin stops
    setTimeout(function(){
        //need this to normalize for negative values:
        let normalizedDeg = ((90 - deg) % 360 + 360) % 360;
        let nameAt90 = getSectionNameAtDegree(degreeArr, normalizedDeg);
        alert("Color at 90°: "+ nameAt90 + " Wins!");
    }, 5500);
}
//This part above allows the spin button to work


function getSection(){
    //reset the section names array when you change number of sections
    sectionNames = [];
    sectionNumber = document.getElementById('NumOSec').value;
    var circle = document.getElementById('box');

    //gets user input for section names of game board spinner
    for (let i = 0; i < sectionNumber; i++) {
        let name = prompt(`Enter a name for section ${i + 1}`);
        if (!name) {
            name = `Section ${i + 1}`;
        }
        sectionNames.push({name});
        sectionNames.push({name});
    }


    //writes text in section corresponding to user input
    let labelContainer = document.getElementById("labels-container");
    labelContainer.innerHTML = ""; 

    for (let i = 0; i < sectionNumber; i++) {
        let label = document.createElement("div");
        label.className = "label";
        label.innerText = sectionNames[i*2]; // because I pushed each name twice

        let angle = (360 / sectionNumber) * i + (360 / sectionNumber) / 2;

        // Rotate label to align with section, then push out, and counter-rotate for upright text
        label.style.transform = `rotate(${angle}deg) translateX(45vmin) rotate(${-angle}deg)`;
        
        let h = sectionNames[i*2].name.toString();
        console.log(h);
        console.log(typeof(h));
        labelContainer.appendChild(h);
        //labelContainer.appendChild(sectionNames[i].name.toString()); // push the name to the label container
    }


    while(sectionNumber > 0){            
        if(sectionNumber == 1){
            alert('Having a spinner with one thing in it is like Putins election')
        }


        
        randColorStr = [];
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
            degreeArr = [];

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
                        
                        circle.style.background = 'conic-gradient(' + FinalStyle + ')';
                        //alert(circle.style.background);
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





function getSectionNameAtDegree(degreeArr, targetDeg) {
    //normalize target degree in case of negative values
    targetDeg = (targetDeg % 360 + 360) % 360;

    for (let i = 0; i < degreeArr.length - 1; i++) {
        let start = degreeArr[i];
        let end = degreeArr[(i + 1) % degreeArr.length];

        if ((start < end && targetDeg >= start && targetDeg < end) ||
            (start > end && (targetDeg >= start || targetDeg < end))) {
            return sectionNames[i].name; // returns {name}
        }
    }

    // Final slice: from last degree to 360
    let lastIndex = degreeArr.length - 1;
    if (targetDeg >= degreeArr[lastIndex] && targetDeg < 360) {
        return sectionNames[lastIndex].name;
    }

    //returns null if not found
    return null;
}








function mapColorsToUserInput(){
    
}