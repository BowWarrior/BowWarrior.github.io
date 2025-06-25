		//*This is the code for running the reset, and running the win check *//		
		function myReset(){
			document.body.style.setProperty("background-image", "none");
			if(selectedDifficulty == 1){
				selectDifficultyEasy();
			} else if(selectedDifficulty == 2){
				selectDifficultyMed();
			} else if(selectedDifficulty == 3){
				selectDifficultyHard();
			} else if(selectedDifficulty == 4){
				selectDifficultyImpossible();
			}
			myResetBoxColor();
		}
		
		//resets background of boxes when they are wrong and you click the reset button
		function myResetBoxColor(){
			$(document).ready(function(){
				$(".BoxOutline1, .BoxOutline2, .BoxOutline3, .BoxOutline4, .BoxOutline5, .BoxOutline6, .BoxOutline7, .BoxOutline8, .BoxOutline9, .BoxOutline10, .BoxOutline11, .BoxOutline12, .BoxOutline13, .BoxOutline14, .BoxOutline15, .BoxOutline16, .BoxOutline17, .BoxOutline18, .BoxOutline19, .BoxOutline20, .BoxOutline21, .BoxOutline22, .BoxOutline23, .BoxOutline24, .BoxOutline25, .BoxOutline26, .BoxOutline27, .BoxOutline28, .BoxOutline29, .BoxOutline30, .BoxOutline31, .BoxOutline32, .BoxOutline33, .BoxOutline34, .BoxOutline35, .BoxOutline36, .BoxOutline37, .BoxOutline38, .BoxOutline39, .BoxOutline40, .BoxOutline41, .BoxOutline42, .BoxOutline43, .BoxOutline44, .BoxOutline45, .BoxOutline46, .BoxOutline47, .BoxOutline48, .BoxOutline49, .BoxOutline50, .BoxOutline51, .BoxOutline52, .BoxOutline53, .BoxOutline54, .BoxOutline55, .BoxOutline56, .BoxOutline57, .BoxOutline58, .BoxOutline59, .BoxOutline60, .BoxOutline61, .BoxOutline62, .BoxOutline63, .BoxOutline64, .BoxOutline65, .BoxOutline66, .BoxOutline67, .BoxOutline68, .BoxOutline69, .BoxOutline70, .BoxOutline71, .BoxOutline72, .BoxOutline73, .BoxOutline74, .BoxOutline75, .BoxOutline76, .BoxOutline77, .BoxOutline78, .BoxOutline79, .BoxOutline80, .BoxOutline81").css("border-color", "");
			});
		}
		
		
		function myCheck() {
			myBlankBox();
			if(winCount == 27){
				var imageUrl = "./Images/confetti.gif";
				$(document).ready(function(){
					$('.body').css("background-image", "url(" + imageUrl + ")");
				});
				console.log(winCount);
				alert('You Win!!!');
				wincount = 0;
			}
		}
