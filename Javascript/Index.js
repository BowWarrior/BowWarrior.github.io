var i = 0;
var x = 0;
var ball = document.getElementsByClassName('ball')[0];
let m = false;
let j = 0;
let sectionTracker = 0;

function myBallDrop() {
    mySectionChange();
    var position = $('#section' + ScrollArr[j]).position();
    var TopOfSection = position.top;
    var sectHeight = $('#section' + ScrollArr[j]).height()/2;
    $(document).ready(function(){
        $('.ball').animate({
            top: ((TopOfSection + sectHeight)),
        }, 1000); 
    });
    j = j+1;
  }

    
ball.addEventListener("click", function(){
    m = true;
    myRandomDiv();
});

//this function will reload the page and scroll to the top
window.addEventListener("load", reloadPageScroll);
function reloadPageScroll(){
    //the commented out line sends a redirect to the same page with a hashtag to get rid
    //of the fake section number in the url:
    //window.location.replace("#");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function myBallMovingRandomly(){
    ball.addEventListener("click", function(){
        if(x < AmountOfSections){
            x++;
        } else{
            x--;
        }
    });

      var useTopOfPage = (sectionTracker === 0);
      var TopPosition, Height;
      if (useTopOfPage) {
          TopPosition = 0;
          Height = $(window).height();
      } else {
          var $currentSection = $('#section' + sectionTracker);
          var position = $currentSection.position();
          if (!position) {
              console.error('Section not found');
              return;
          }
          TopPosition = position.top;
          Height = $currentSection.height();
      }
  
      $('.ball').animate({
          left: (Math.random() * ($(window).width() - 50)),
          top: (TopPosition + Math.random() * (Height - 50))
      }, 5000); 
      $('.ball').css({
          AnimationTimeline: 'linear'
      });
}

function myRandomDiv(){ 
    switch(true){
        case (m === false):
            $('.ball').queue(myBallMovingRandomly());
            break;

        case (m === true):
            $(".ball").click(function(){
                jQuery.fx.off = true;
                jQuery.fx.off = false;
             });
            $('.ball').stop(true)
            $('.ball').queue(myBallDrop());
            $('.ball').stop(true)
            m = false;
            break;        

        default:               
            break;
    }   
}


//switchController will determine whether 'sectionTracker' should be rising or decreasing
let switchController = true;
let ScrollArr = [];

function mySectionChange() {    
    var AmountOfSections = document.querySelectorAll('section').length;

//this part here changes whether sectionTracker should be increasing or decreasing
    if(sectionTracker == 0){
        switchController = true;
    }
    if(sectionTracker == AmountOfSections-1){
        switchController = false;
    }

    
    if(switchController == true){    
        sectionTracker++;
    }else{
        sectionTracker--;
    }

    var BallLink = document.getElementById("BallLink");
    

    switch(true){
        
        case (i < AmountOfSections):
            while(i < AmountOfSections){
                i = i+1;
                ScrollArr.push(i);
            }
            ScrollArr.pop();
            ScrollArr.pop();

        case (i >= AmountOfSections):
            while(i != 0 || i >= AmountOfSections){
                i = i-1;
                ScrollArr.push(i);
            }
        
        let ScrollArrLen = ScrollArr.length;
        if(x < ScrollArrLen){
            BallLink.setAttribute("href", "#section" + ScrollArr[x]);
            x = x+1;
        }
        
            break;      
    }        
}



//this is the infinite loop that makes the ball go every 5sec
setInterval(myRandomDiv, 1000);