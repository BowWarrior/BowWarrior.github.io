		//*This is the Difficulty Switcher *//		
		

		//could add this prompt back in if I feel like i wanted it:
		/*
			var sureSwitch = prompt("Are you sure you want to change difficulty to Easy? If you have started a puzzle, you will lose your progress!");
				switch(sureSwitch) {
					case "yes":
						//*This part resets the background in case you won
						document.body.style.setProperty("background-image", "none");
						alert('Easy dub here!');
						selectDifficultyEasy();
						selectedDifficulty = 1;
						break;
					case "no":
						break;
				}
				*/
		
		
		
		
		
		
		let selectedDifficulty = 0; /*this var lets it know that when you click the reset button, which sudoku difficulty it needs to reset */
		
		
		$(document).ready(function(){
			document.getElementsByClassName('easy')[0].onclick = function(){
				//this part will ask you if you want to switch to another puzzle difficulty, and depending on your answer, switch it
				document.body.style.setProperty("background-image", "none");
				alert('Easy dub here!');
				selectDifficultyEasy();
				selectedDifficulty = 1;				
			};
			
			
			document.getElementsByClassName('medium')[0].onclick = function(){
				//this part will ask you if you want to switch to another puzzle difficulty, and depending on your answer, switch it
				document.body.style.setProperty("background-image", "none");
				alert('Good Luck!');
				selectDifficultyMed();
				selectedDifficulty = 2;	
			};	
			
			document.getElementsByClassName('hard')[0].onclick = function(){
				//this part will ask you if you want to switch to another puzzle difficulty, and depending on your answer, switch it
				document.body.style.setProperty("background-image", "none");
				alert('This may take a while...');
				selectDifficultyHard();
				selectedDifficulty = 3;
			};
			
			document.getElementsByClassName('impossible')[0].onclick = function(){
				//this part will ask you if you want to switch to another puzzle difficulty, and depending on your answer, switch it
				document.body.style.setProperty("background-image", "none");
				alert('This one is *very* difficult.');
				selectDifficultyImpossible();
				selectedDifficulty = 4;					
			};
		});
	
		
			function selectDifficultyEasy(){
					document.getElementsByClassName('box1')[0].value = '';
					document.getElementsByClassName('box1')[0].readOnly = false;
					
					document.getElementsByClassName('box2')[0].value = '3';
					document.getElementsByClassName('box2')[0].readOnly = true;
					
					document.getElementsByClassName('box3')[0].value = '';
					document.getElementsByClassName('box3')[0].readOnly = false;
					
					document.getElementsByClassName('box4')[0].value = '';
					document.getElementsByClassName('box4')[0].readOnly = false;
					
					document.getElementsByClassName('box5')[0].value = '9';
					document.getElementsByClassName('box5')[0].readOnly = true;
					
					document.getElementsByClassName('box6')[0].value = '';
					document.getElementsByClassName('box6')[0].readOnly = false;
					
					document.getElementsByClassName('box7')[0].value = '';
					document.getElementsByClassName('box7')[0].readOnly = false;
					
					document.getElementsByClassName('box8')[0].value = '';
					document.getElementsByClassName('box8')[0].readOnly = false;
					
					document.getElementsByClassName('box9')[0].value = '8';
					document.getElementsByClassName('box9')[0].readOnly = true;
		
					document.getElementsByClassName('box10')[0].value = '4';
					document.getElementsByClassName('box10')[0].readOnly = true;
					
					document.getElementsByClassName('box11')[0].value = '';
					document.getElementsByClassName('box11')[0].readOnly = false;
					
					document.getElementsByClassName('box12')[0].value = '';
					document.getElementsByClassName('box12')[0].readOnly = false;
					
					document.getElementsByClassName('box13')[0].value = '1';
					document.getElementsByClassName('box13')[0].readOnly = true;
					
					document.getElementsByClassName('box14')[0].value = '5';
					document.getElementsByClassName('box14')[0].readOnly = true;
					
					document.getElementsByClassName('box15')[0].value = '';
					document.getElementsByClassName('box15')[0].readOnly = false;
					
					document.getElementsByClassName('box16')[0].value = '6';
					document.getElementsByClassName('box16')[0].readOnly = true;
					
					document.getElementsByClassName('box17')[0].value = '';
					document.getElementsByClassName('box17')[0].readOnly = false;
					
					document.getElementsByClassName('box18')[0].value = '9';
					document.getElementsByClassName('box18')[0].readOnly = true;
					
					document.getElementsByClassName('box19')[0].value = '8';
					document.getElementsByClassName('box19')[0].readOnly = true;
					
					document.getElementsByClassName('box20')[0].value = '';
					document.getElementsByClassName('box20')[0].readOnly = false;
					
					document.getElementsByClassName('box21')[0].value = '9';
					document.getElementsByClassName('box21')[0].readOnly = true;
					
					document.getElementsByClassName('box22')[0].value = '';
					document.getElementsByClassName('box22')[0].readOnly = false;
					
					document.getElementsByClassName('box23')[0].value = '';
					document.getElementsByClassName('box23')[0].readOnly = false;
					
					document.getElementsByClassName('box24')[0].value = '3';
					document.getElementsByClassName('box24')[0].readOnly = true;
					
					document.getElementsByClassName('box25')[0].value = '';
					document.getElementsByClassName('box25')[0].readOnly = false;
					
					document.getElementsByClassName('box26')[0].value = '5';
					document.getElementsByClassName('box26')[0].readOnly = true;
					
					document.getElementsByClassName('box27')[0].value = '';
					document.getElementsByClassName('box27')[0].readOnly = false;
					
					document.getElementsByClassName('box28')[0].value = '';
					document.getElementsByClassName('box28')[0].readOnly = false;
					
					document.getElementsByClassName('box29')[0].value = '';
					document.getElementsByClassName('box29')[0].readOnly = false;
					
					document.getElementsByClassName('box30')[0].value = '';
					document.getElementsByClassName('box30')[0].readOnly = false;
					
					document.getElementsByClassName('box31')[0].value = '';
					document.getElementsByClassName('box31')[0].readOnly = false;
					
					document.getElementsByClassName('box32')[0].value = '3';
					document.getElementsByClassName('box32')[0].readOnly = true;
					
					document.getElementsByClassName('box33')[0].value = '7';
					document.getElementsByClassName('box33')[0].readOnly = true;
					
					document.getElementsByClassName('box34')[0].value = '9';
					document.getElementsByClassName('box34')[0].readOnly = true;
					
					document.getElementsByClassName('box35')[0].value = '2';
					document.getElementsByClassName('box35')[0].readOnly = true;
					
					document.getElementsByClassName('box36')[0].value = '';
					document.getElementsByClassName('box36')[0].readOnly = false;
					
					document.getElementsByClassName('box37')[0].value = '7';
					document.getElementsByClassName('box37')[0].readOnly = true;
					
					document.getElementsByClassName('box38')[0].value = '5';
					document.getElementsByClassName('box38')[0].readOnly = true;
					
					document.getElementsByClassName('box39')[0].value = '';
					document.getElementsByClassName('box39')[0].readOnly = false;
					
					document.getElementsByClassName('box40')[0].value = '';
					document.getElementsByClassName('box40')[0].readOnly = false;
					
					document.getElementsByClassName('box41')[0].value = '';
					document.getElementsByClassName('box41')[0].readOnly = false;
					
					document.getElementsByClassName('box42')[0].value = '9';
					document.getElementsByClassName('box42')[0].readOnly = true;
					
					document.getElementsByClassName('box43')[0].value = '';
					document.getElementsByClassName('box43')[0].readOnly = false;
					
					document.getElementsByClassName('box44')[0].value = '';
					document.getElementsByClassName('box44')[0].readOnly = false;
					
					document.getElementsByClassName('box45')[0].value = '';
					document.getElementsByClassName('box45')[0].readOnly = false;
					
					document.getElementsByClassName('box46')[0].value = '2';
					document.getElementsByClassName('box46')[0].readOnly = true;
					
					document.getElementsByClassName('box47')[0].value = '9';
					document.getElementsByClassName('box47')[0].readOnly = true;
					
					document.getElementsByClassName('box48')[0].value = '';
					document.getElementsByClassName('box48')[0].readOnly = false;
					
					document.getElementsByClassName('box49')[0].value = '4';
					document.getElementsByClassName('box49')[0].readOnly = true;
					
					document.getElementsByClassName('box50')[0].value = '1';
					document.getElementsByClassName('box50')[0].readOnly = true;
					
					document.getElementsByClassName('box51')[0].value = '';
					document.getElementsByClassName('box51')[0].readOnly = false;
					
					document.getElementsByClassName('box52')[0].value = '';
					document.getElementsByClassName('box52')[0].readOnly = false;
					
					document.getElementsByClassName('box53')[0].value = '8';
					document.getElementsByClassName('box53')[0].readOnly = true;
					
					document.getElementsByClassName('box54')[0].value = '5';
					document.getElementsByClassName('box54')[0].readOnly = true;
					
					document.getElementsByClassName('box55')[0].value = '5';
					document.getElementsByClassName('box55')[0].readOnly = true;
					
					document.getElementsByClassName('box56')[0].value = '';
					document.getElementsByClassName('box56')[0].readOnly = false;
					
					document.getElementsByClassName('box57')[0].value = '8';
					document.getElementsByClassName('box57')[0].readOnly = true;
					
					document.getElementsByClassName('box58')[0].value = '';
					document.getElementsByClassName('box58')[0].readOnly = false;
					
					document.getElementsByClassName('box59')[0].value = '4';
					document.getElementsByClassName('box59')[0].readOnly = true;
					
					document.getElementsByClassName('box60')[0].value = '';
					document.getElementsByClassName('box60')[0].readOnly = false;
					
					document.getElementsByClassName('box61')[0].value = '1';
					document.getElementsByClassName('box61')[0].readOnly = true;
					
					document.getElementsByClassName('box62')[0].value = '7';
					document.getElementsByClassName('box62')[0].readOnly = true;
					
					document.getElementsByClassName('box63')[0].value = '';
					document.getElementsByClassName('box63')[0].readOnly = false;
					
					document.getElementsByClassName('box64')[0].value = '';
					document.getElementsByClassName('box64')[0].readOnly = false;
					
					document.getElementsByClassName('box65')[0].value = '';
					document.getElementsByClassName('box65')[0].readOnly = false;
					
					document.getElementsByClassName('box66')[0].value = '7';
					document.getElementsByClassName('box66')[0].readOnly = true;
					
					document.getElementsByClassName('box67')[0].value = '3';
					document.getElementsByClassName('box67')[0].readOnly = true;
					
					document.getElementsByClassName('box68')[0].value = '';
					document.getElementsByClassName('box68')[0].readOnly = false;
					
					document.getElementsByClassName('box69')[0].value = '';
					document.getElementsByClassName('box69')[0].readOnly = false;
					
					document.getElementsByClassName('box70')[0].value = '';
					document.getElementsByClassName('box70')[0].readOnly = false;
					
					document.getElementsByClassName('box71')[0].value = '6';
					document.getElementsByClassName('box71')[0].readOnly = true;
					
					document.getElementsByClassName('box72')[0].value = '4';
					document.getElementsByClassName('box72')[0].readOnly = true;
					
					document.getElementsByClassName('box73')[0].value = '3';
					document.getElementsByClassName('box73')[0].readOnly = true;
					
					document.getElementsByClassName('box74')[0].value = '';
					document.getElementsByClassName('box74')[0].readOnly = false;
					
					document.getElementsByClassName('box75')[0].value = '1';
					document.getElementsByClassName('box75')[0].readOnly = true;
					
					document.getElementsByClassName('box76')[0].value = '6';
					document.getElementsByClassName('box76')[0].readOnly = true;
					
					document.getElementsByClassName('box77')[0].value = '';
					document.getElementsByClassName('box77')[0].readOnly = false;
					
					document.getElementsByClassName('box78')[0].value = '5';
					document.getElementsByClassName('box78')[0].readOnly = true;
					
					document.getElementsByClassName('box79')[0].value = '';
					document.getElementsByClassName('box79')[0].readOnly = false;
					
					document.getElementsByClassName('box80')[0].value = '';
					document.getElementsByClassName('box80')[0].readOnly = false;
					
					document.getElementsByClassName('box81')[0].value = '';
					document.getElementsByClassName('box81')[0].readOnly = false;
		}
		
		
		
		
		function selectDifficultyMed(){
					document.getElementsByClassName('box1')[0].value = '';
					document.getElementsByClassName('box1')[0].readOnly = false;
					
					document.getElementsByClassName('box2')[0].value = '';
					document.getElementsByClassName('box2')[0].readOnly = false;
					
					document.getElementsByClassName('box3')[0].value = '4';
					document.getElementsByClassName('box3')[0].readOnly = true;
					
					document.getElementsByClassName('box4')[0].value = '';
					document.getElementsByClassName('box4')[0].readOnly = false;
					
					document.getElementsByClassName('box5')[0].value = '5';
					document.getElementsByClassName('box5')[0].readOnly = true;
					
					document.getElementsByClassName('box6')[0].value = '';
					document.getElementsByClassName('box6')[0].readOnly = false;
					
					document.getElementsByClassName('box7')[0].value = '';
					document.getElementsByClassName('box7')[0].readOnly = false;
					
					document.getElementsByClassName('box8')[0].value = '';
					document.getElementsByClassName('box8')[0].readOnly = false;
					
					document.getElementsByClassName('box9')[0].value = '';
					document.getElementsByClassName('box9')[0].readOnly = false;
		
					document.getElementsByClassName('box10')[0].value = '9';
					document.getElementsByClassName('box10')[0].readOnly = true;
					
					document.getElementsByClassName('box11')[0].value = '';
					document.getElementsByClassName('box11')[0].readOnly = false;
					
					document.getElementsByClassName('box12')[0].value = '';
					document.getElementsByClassName('box12')[0].readOnly = false;
					
					document.getElementsByClassName('box13')[0].value = '7';
					document.getElementsByClassName('box13')[0].readOnly = true;
					
					document.getElementsByClassName('box14')[0].value = '3';
					document.getElementsByClassName('box14')[0].readOnly = true;
					
					document.getElementsByClassName('box15')[0].value = '4';
					document.getElementsByClassName('box15')[0].readOnly = true;
					
					document.getElementsByClassName('box16')[0].value = '6';
					document.getElementsByClassName('box16')[0].readOnly = true;
					
					document.getElementsByClassName('box17')[0].value = '';
					document.getElementsByClassName('box17')[0].readOnly = false;
					
					document.getElementsByClassName('box18')[0].value = '';
					document.getElementsByClassName('box18')[0].readOnly = false;
					
					document.getElementsByClassName('box19')[0].value = '';
					document.getElementsByClassName('box19')[0].readOnly = false;
					
					document.getElementsByClassName('box20')[0].value = '';
					document.getElementsByClassName('box20')[0].readOnly = false;
					
					document.getElementsByClassName('box21')[0].value = '3';
					document.getElementsByClassName('box21')[0].readOnly = true;
					
					document.getElementsByClassName('box22')[0].value = '';
					document.getElementsByClassName('box22')[0].readOnly = false;
					
					document.getElementsByClassName('box23')[0].value = '2';
					document.getElementsByClassName('box23')[0].readOnly = true;
					
					document.getElementsByClassName('box24')[0].value = '1';
					document.getElementsByClassName('box24')[0].readOnly = true;
					
					document.getElementsByClassName('box25')[0].value = '';
					document.getElementsByClassName('box25')[0].readOnly = false;
					
					document.getElementsByClassName('box26')[0].value = '4';
					document.getElementsByClassName('box26')[0].readOnly = true;
					
					document.getElementsByClassName('box27')[0].value = '9';
					document.getElementsByClassName('box27')[0].readOnly = true;
					
					document.getElementsByClassName('box28')[0].value = '';
					document.getElementsByClassName('box28')[0].readOnly = false;
					
					document.getElementsByClassName('box29')[0].value = '3';
					document.getElementsByClassName('box29')[0].readOnly = true;
					
					document.getElementsByClassName('box30')[0].value = '5';
					document.getElementsByClassName('box30')[0].readOnly = true;
					
					document.getElementsByClassName('box31')[0].value = '';
					document.getElementsByClassName('box31')[0].readOnly = false;
					
					document.getElementsByClassName('box32')[0].value = '9';
					document.getElementsByClassName('box32')[0].readOnly = true;
					
					document.getElementsByClassName('box33')[0].value = '';
					document.getElementsByClassName('box33')[0].readOnly = false;
					
					document.getElementsByClassName('box34')[0].value = '4';
					document.getElementsByClassName('box34')[0].readOnly = true;
					
					document.getElementsByClassName('box35')[0].value = '8';
					document.getElementsByClassName('box35')[0].readOnly = true;
					
					document.getElementsByClassName('box36')[0].value = '';
					document.getElementsByClassName('box36')[0].readOnly = false;
					
					document.getElementsByClassName('box37')[0].value = '';
					document.getElementsByClassName('box37')[0].readOnly = false;
					
					document.getElementsByClassName('box38')[0].value = '9';
					document.getElementsByClassName('box38')[0].readOnly = true;
					
					document.getElementsByClassName('box39')[0].value = '';
					document.getElementsByClassName('box39')[0].readOnly = false;
					
					document.getElementsByClassName('box40')[0].value = '';
					document.getElementsByClassName('box40')[0].readOnly = false;
					
					document.getElementsByClassName('box41')[0].value = '';
					document.getElementsByClassName('box41')[0].readOnly = false;
					
					document.getElementsByClassName('box42')[0].value = '';
					document.getElementsByClassName('box42')[0].readOnly = false;
					
					document.getElementsByClassName('box43')[0].value = '';
					document.getElementsByClassName('box43')[0].readOnly = false;
					
					document.getElementsByClassName('box44')[0].value = '3';
					document.getElementsByClassName('box44')[0].readOnly = true;
					
					document.getElementsByClassName('box45')[0].value = '';
					document.getElementsByClassName('box45')[0].readOnly = false;
					
					document.getElementsByClassName('box46')[0].value = '';
					document.getElementsByClassName('box46')[0].readOnly = false;
					
					document.getElementsByClassName('box47')[0].value = '7';
					document.getElementsByClassName('box47')[0].readOnly = true;
					
					document.getElementsByClassName('box48')[0].value = '6';
					document.getElementsByClassName('box48')[0].readOnly = true;
					
					document.getElementsByClassName('box49')[0].value = '';
					document.getElementsByClassName('box49')[0].readOnly = false;
					
					document.getElementsByClassName('box50')[0].value = '1';
					document.getElementsByClassName('box50')[0].readOnly = true;
					
					document.getElementsByClassName('box51')[0].value = '';
					document.getElementsByClassName('box51')[0].readOnly = false;
					
					document.getElementsByClassName('box52')[0].value = '9';
					document.getElementsByClassName('box52')[0].readOnly = true;
					
					document.getElementsByClassName('box53')[0].value = '2';
					document.getElementsByClassName('box53')[0].readOnly = true;
					
					document.getElementsByClassName('box54')[0].value = '';
					document.getElementsByClassName('box54')[0].readOnly = false;
					
					document.getElementsByClassName('box55')[0].value = '3';
					document.getElementsByClassName('box55')[0].readOnly = true;
					
					document.getElementsByClassName('box56')[0].value = '1';
					document.getElementsByClassName('box56')[0].readOnly = true;
					
					document.getElementsByClassName('box57')[0].value = '';
					document.getElementsByClassName('box57')[0].readOnly = false;
					
					document.getElementsByClassName('box58')[0].value = '9';
					document.getElementsByClassName('box58')[0].readOnly = true;
					
					document.getElementsByClassName('box59')[0].value = '7';
					document.getElementsByClassName('box59')[0].readOnly = true;
					
					document.getElementsByClassName('box60')[0].value = '';
					document.getElementsByClassName('box60')[0].readOnly = false;
					
					document.getElementsByClassName('box61')[0].value = '2';
					document.getElementsByClassName('box61')[0].readOnly = true;
					
					document.getElementsByClassName('box62')[0].value = '';
					document.getElementsByClassName('box62')[0].readOnly = false;
					
					document.getElementsByClassName('box63')[0].value = '';
					document.getElementsByClassName('box63')[0].readOnly = false;
					
					document.getElementsByClassName('box64')[0].value = '';
					document.getElementsByClassName('box64')[0].readOnly = false;
					
					document.getElementsByClassName('box65')[0].value = '';
					document.getElementsByClassName('box65')[0].readOnly = false;
					
					document.getElementsByClassName('box66')[0].value = '9';
					document.getElementsByClassName('box66')[0].readOnly = true;
					
					document.getElementsByClassName('box67')[0].value = '1';
					document.getElementsByClassName('box67')[0].readOnly = true;
					
					document.getElementsByClassName('box68')[0].value = '8';
					document.getElementsByClassName('box68')[0].readOnly = true;
					
					document.getElementsByClassName('box69')[0].value = '2';
					document.getElementsByClassName('box69')[0].readOnly = true;
					
					document.getElementsByClassName('box70')[0].value = '';
					document.getElementsByClassName('box70')[0].readOnly = false;
					
					document.getElementsByClassName('box71')[0].value = '';
					document.getElementsByClassName('box71')[0].readOnly = false;
					
					document.getElementsByClassName('box72')[0].value = '3';
					document.getElementsByClassName('box72')[0].readOnly = true;
					
					document.getElementsByClassName('box73')[0].value = '';
					document.getElementsByClassName('box73')[0].readOnly = false;
					
					document.getElementsByClassName('box74')[0].value = '';
					document.getElementsByClassName('box74')[0].readOnly = false;
					
					document.getElementsByClassName('box75')[0].value = '';
					document.getElementsByClassName('box75')[0].readOnly = false;
					
					document.getElementsByClassName('box76')[0].value = '';
					document.getElementsByClassName('box76')[0].readOnly = false;
					
					document.getElementsByClassName('box77')[0].value = '6';
					document.getElementsByClassName('box77')[0].readOnly = true;
					
					document.getElementsByClassName('box78')[0].value = '';
					document.getElementsByClassName('box78')[0].readOnly = false;
					
					document.getElementsByClassName('box79')[0].value = '1';
					document.getElementsByClassName('box79')[0].readOnly = true;
					
					document.getElementsByClassName('box80')[0].value = '';
					document.getElementsByClassName('box80')[0].readOnly = false;
					
					document.getElementsByClassName('box81')[0].value = '';
					document.getElementsByClassName('box81')[0].readOnly = false;
		}


		function selectDifficultyHard(){
					document.getElementsByClassName('box1')[0].value = '6';
					document.getElementsByClassName('box1')[0].readOnly = true;
					
					document.getElementsByClassName('box2')[0].value = '';
					document.getElementsByClassName('box2')[0].readOnly = false;
					
					document.getElementsByClassName('box3')[0].value = '';
					document.getElementsByClassName('box3')[0].readOnly = false;
					
					document.getElementsByClassName('box4')[0].value = '';
					document.getElementsByClassName('box4')[0].readOnly = false;
					
					document.getElementsByClassName('box5')[0].value = '';
					document.getElementsByClassName('box5')[0].readOnly = false;
					
					document.getElementsByClassName('box6')[0].value = '';
					document.getElementsByClassName('box6')[0].readOnly = false;
					
					document.getElementsByClassName('box7')[0].value = '';
					document.getElementsByClassName('box7')[0].readOnly = false;
					
					document.getElementsByClassName('box8')[0].value = '4';
					document.getElementsByClassName('box8')[0].readOnly = true;
					
					document.getElementsByClassName('box9')[0].value = '';
					document.getElementsByClassName('box9')[0].readOnly = false;
		
					document.getElementsByClassName('box10')[0].value = '1';
					document.getElementsByClassName('box10')[0].readOnly = true;
					
					document.getElementsByClassName('box11')[0].value = '8';
					document.getElementsByClassName('box11')[0].readOnly = true;
					
					document.getElementsByClassName('box12')[0].value = '';
					document.getElementsByClassName('box12')[0].readOnly = false;
					
					document.getElementsByClassName('box13')[0].value = '';
					document.getElementsByClassName('box13')[0].readOnly = false;
					
					document.getElementsByClassName('box14')[0].value = '';
					document.getElementsByClassName('box14')[0].readOnly = false;
					
					document.getElementsByClassName('box15')[0].value = '3';
					document.getElementsByClassName('box15')[0].readOnly = true;
					
					document.getElementsByClassName('box16')[0].value = '5';
					document.getElementsByClassName('box16')[0].readOnly = true;
					
					document.getElementsByClassName('box17')[0].value = '';
					document.getElementsByClassName('box17')[0].readOnly = false;
					
					document.getElementsByClassName('box18')[0].value = '';
					document.getElementsByClassName('box18')[0].readOnly = false;
					
					document.getElementsByClassName('box19')[0].value = '3';
					document.getElementsByClassName('box19')[0].readOnly = true;
					
					document.getElementsByClassName('box20')[0].value = '';
					document.getElementsByClassName('box20')[0].readOnly = false;
					
					document.getElementsByClassName('box21')[0].value = '7';
					document.getElementsByClassName('box21')[0].readOnly = true;
					
					document.getElementsByClassName('box22')[0].value = '';
					document.getElementsByClassName('box22')[0].readOnly = false;
					
					document.getElementsByClassName('box23')[0].value = '';
					document.getElementsByClassName('box23')[0].readOnly = false;
					
					document.getElementsByClassName('box24')[0].value = '';
					document.getElementsByClassName('box24')[0].readOnly = false;
					
					document.getElementsByClassName('box25')[0].value = '6';
					document.getElementsByClassName('box25')[0].readOnly = true;
					
					document.getElementsByClassName('box26')[0].value = '8';
					document.getElementsByClassName('box26')[0].readOnly = true;
					
					document.getElementsByClassName('box27')[0].value = '';
					document.getElementsByClassName('box27')[0].readOnly = false;
					
					document.getElementsByClassName('box28')[0].value = '7';
					document.getElementsByClassName('box28')[0].readOnly = true;
					
					document.getElementsByClassName('box29')[0].value = '';
					document.getElementsByClassName('box29')[0].readOnly = false;
					
					document.getElementsByClassName('box30')[0].value = '8';
					document.getElementsByClassName('box30')[0].readOnly = true;
					
					document.getElementsByClassName('box31')[0].value = '';
					document.getElementsByClassName('box31')[0].readOnly = false;
					
					document.getElementsByClassName('box32')[0].value = '';
					document.getElementsByClassName('box32')[0].readOnly = false;
					
					document.getElementsByClassName('box33')[0].value = '';
					document.getElementsByClassName('box33')[0].readOnly = false;
					
					document.getElementsByClassName('box34')[0].value = '';
					document.getElementsByClassName('box34')[0].readOnly = false;
					
					document.getElementsByClassName('box35')[0].value = '6';
					document.getElementsByClassName('box35')[0].readOnly = true;
					
					document.getElementsByClassName('box36')[0].value = '';
					document.getElementsByClassName('box36')[0].readOnly = false;
					
					document.getElementsByClassName('box37')[0].value = '';
					document.getElementsByClassName('box37')[0].readOnly = false;
					
					document.getElementsByClassName('box38')[0].value = '';
					document.getElementsByClassName('box38')[0].readOnly = false;
					
					document.getElementsByClassName('box39')[0].value = '3';
					document.getElementsByClassName('box39')[0].readOnly = true;
					
					document.getElementsByClassName('box40')[0].value = '4';
					document.getElementsByClassName('box40')[0].readOnly = true;
					
					document.getElementsByClassName('box41')[0].value = '';
					document.getElementsByClassName('box41')[0].readOnly = false;
					
					document.getElementsByClassName('box42')[0].value = '';
					document.getElementsByClassName('box42')[0].readOnly = false;
					
					document.getElementsByClassName('box43')[0].value = '';
					document.getElementsByClassName('box43')[0].readOnly = false;
					
					document.getElementsByClassName('box44')[0].value = '';
					document.getElementsByClassName('box44')[0].readOnly = false;
					
					document.getElementsByClassName('box45')[0].value = '';
					document.getElementsByClassName('box45')[0].readOnly = false;
					
					document.getElementsByClassName('box46')[0].value = '';
					document.getElementsByClassName('box46')[0].readOnly = false;
					
					document.getElementsByClassName('box47')[0].value = '';
					document.getElementsByClassName('box47')[0].readOnly = false;
					
					document.getElementsByClassName('box48')[0].value = '';
					document.getElementsByClassName('box48')[0].readOnly = false;
					
					document.getElementsByClassName('box49')[0].value = '';
					document.getElementsByClassName('box49')[0].readOnly = false;
					
					document.getElementsByClassName('box50')[0].value = '5';
					document.getElementsByClassName('box50')[0].readOnly = true;
					
					document.getElementsByClassName('box51')[0].value = '2';
					document.getElementsByClassName('box51')[0].readOnly = true;
					
					document.getElementsByClassName('box52')[0].value = '';
					document.getElementsByClassName('box52')[0].readOnly = false;
					
					document.getElementsByClassName('box53')[0].value = '3';
					document.getElementsByClassName('box53')[0].readOnly = true;
					
					document.getElementsByClassName('box54')[0].value = '';
					document.getElementsByClassName('box54')[0].readOnly = false;
					
					document.getElementsByClassName('box55')[0].value = '';
					document.getElementsByClassName('box55')[0].readOnly = false;
					
					document.getElementsByClassName('box56')[0].value = '';
					document.getElementsByClassName('box56')[0].readOnly = false;
					
					document.getElementsByClassName('box57')[0].value = '';
					document.getElementsByClassName('box57')[0].readOnly = false;
					
					document.getElementsByClassName('box58')[0].value = '';
					document.getElementsByClassName('box58')[0].readOnly = false;
					
					document.getElementsByClassName('box59')[0].value = '4';
					document.getElementsByClassName('box59')[0].readOnly = true;
					
					document.getElementsByClassName('box60')[0].value = '1';
					document.getElementsByClassName('box60')[0].readOnly = true;
					
					document.getElementsByClassName('box61')[0].value = '';
					document.getElementsByClassName('box61')[0].readOnly = false;
					
					document.getElementsByClassName('box62')[0].value = '7';
					document.getElementsByClassName('box62')[0].readOnly = true;
					
					document.getElementsByClassName('box63')[0].value = '9';
					document.getElementsByClassName('box63')[0].readOnly = true;
					
					document.getElementsByClassName('box64')[0].value = '';
					document.getElementsByClassName('box64')[0].readOnly = false;
					
					document.getElementsByClassName('box65')[0].value = '';
					document.getElementsByClassName('box65')[0].readOnly = false;
					
					document.getElementsByClassName('box66')[0].value = '';
					document.getElementsByClassName('box66')[0].readOnly = false;
					
					document.getElementsByClassName('box67')[0].value = '3';
					document.getElementsByClassName('box67')[0].readOnly = true;
					
					document.getElementsByClassName('box68')[0].value = '2';
					document.getElementsByClassName('box68')[0].readOnly = true;
					
					document.getElementsByClassName('box69')[0].value = '';
					document.getElementsByClassName('box69')[0].readOnly = false;
					
					document.getElementsByClassName('box70')[0].value = '';
					document.getElementsByClassName('box70')[0].readOnly = false;
					
					document.getElementsByClassName('box71')[0].value = '';
					document.getElementsByClassName('box71')[0].readOnly = false;
					
					document.getElementsByClassName('box72')[0].value = '';
					document.getElementsByClassName('box72')[0].readOnly = false;
					
					document.getElementsByClassName('box73')[0].value = '';
					document.getElementsByClassName('box73')[0].readOnly = false;
					
					document.getElementsByClassName('box74')[0].value = '';
					document.getElementsByClassName('box74')[0].readOnly = false;
					
					document.getElementsByClassName('box75')[0].value = '';
					document.getElementsByClassName('box75')[0].readOnly = false;
					
					document.getElementsByClassName('box76')[0].value = '';
					document.getElementsByClassName('box76')[0].readOnly = false;
					
					document.getElementsByClassName('box77')[0].value = '';
					document.getElementsByClassName('box77')[0].readOnly = false;
					
					document.getElementsByClassName('box78')[0].value = '';
					document.getElementsByClassName('box78')[0].readOnly = false;
					
					document.getElementsByClassName('box79')[0].value = '2';
					document.getElementsByClassName('box79')[0].readOnly = true;
					
					document.getElementsByClassName('box80')[0].value = '';
					document.getElementsByClassName('box80')[0].readOnly = false;
					
					document.getElementsByClassName('box81')[0].value = '';
					document.getElementsByClassName('box81')[0].readOnly = false;
		}
		
		
		function selectDifficultyImpossible(){
					document.getElementsByClassName('box1')[0].value = '';
					document.getElementsByClassName('box1')[0].readOnly = false;
					
					document.getElementsByClassName('box2')[0].value = '';
					document.getElementsByClassName('box2')[0].readOnly = false;
					
					document.getElementsByClassName('box3')[0].value = '';
					document.getElementsByClassName('box3')[0].readOnly = false;
					
					document.getElementsByClassName('box4')[0].value = '8';
					document.getElementsByClassName('box4')[0].readOnly = true;
					
					document.getElementsByClassName('box5')[0].value = '';
					document.getElementsByClassName('box5')[0].readOnly = false;
					
					document.getElementsByClassName('box6')[0].value = '';
					document.getElementsByClassName('box6')[0].readOnly = false;
					
					document.getElementsByClassName('box7')[0].value = '4';
					document.getElementsByClassName('box7')[0].readOnly = true;
					
					document.getElementsByClassName('box8')[0].value = '2';
					document.getElementsByClassName('box8')[0].readOnly = true;
					
					document.getElementsByClassName('box9')[0].value = '';
					document.getElementsByClassName('box9')[0].readOnly = false;
		
					document.getElementsByClassName('box10')[0].value = '5';
					document.getElementsByClassName('box10')[0].readOnly = true;
					
					document.getElementsByClassName('box11')[0].value = '';
					document.getElementsByClassName('box11')[0].readOnly = false;
					
					document.getElementsByClassName('box12')[0].value = '';
					document.getElementsByClassName('box12')[0].readOnly = false;
					
					document.getElementsByClassName('box13')[0].value = '6';
					document.getElementsByClassName('box13')[0].readOnly = true;
					
					document.getElementsByClassName('box14')[0].value = '7';
					document.getElementsByClassName('box14')[0].readOnly = true;
					
					document.getElementsByClassName('box15')[0].value = '';
					document.getElementsByClassName('box15')[0].readOnly = false;
					
					document.getElementsByClassName('box16')[0].value = '';
					document.getElementsByClassName('box16')[0].readOnly = false;
					
					document.getElementsByClassName('box17')[0].value = '';
					document.getElementsByClassName('box17')[0].readOnly = false;
					
					document.getElementsByClassName('box18')[0].value = '';
					document.getElementsByClassName('box18')[0].readOnly = false;
					
					document.getElementsByClassName('box19')[0].value = '';
					document.getElementsByClassName('box19')[0].readOnly = false;
					
					document.getElementsByClassName('box20')[0].value = '';
					document.getElementsByClassName('box20')[0].readOnly = false;
					
					document.getElementsByClassName('box21')[0].value = '';
					document.getElementsByClassName('box21')[0].readOnly = false;
					
					document.getElementsByClassName('box22')[0].value = '';
					document.getElementsByClassName('box22')[0].readOnly = false;
					
					document.getElementsByClassName('box23')[0].value = '';
					document.getElementsByClassName('box23')[0].readOnly = false;
					
					document.getElementsByClassName('box24')[0].value = '9';
					document.getElementsByClassName('box24')[0].readOnly = true;
					
					document.getElementsByClassName('box25')[0].value = '';
					document.getElementsByClassName('box25')[0].readOnly = false;
					
					document.getElementsByClassName('box26')[0].value = '';
					document.getElementsByClassName('box26')[0].readOnly = false;
					
					document.getElementsByClassName('box27')[0].value = '5';
					document.getElementsByClassName('box27')[0].readOnly = true;
					
					document.getElementsByClassName('box28')[0].value = '7';
					document.getElementsByClassName('box28')[0].readOnly = true;
					
					document.getElementsByClassName('box29')[0].value = '4';
					document.getElementsByClassName('box29')[0].readOnly = true;
					
					document.getElementsByClassName('box30')[0].value = '';
					document.getElementsByClassName('box30')[0].readOnly = false;
					
					document.getElementsByClassName('box31')[0].value = '1';
					document.getElementsByClassName('box31')[0].readOnly = true;
					
					document.getElementsByClassName('box32')[0].value = '';
					document.getElementsByClassName('box32')[0].readOnly = false;
					
					document.getElementsByClassName('box33')[0].value = '';
					document.getElementsByClassName('box33')[0].readOnly = false;
					
					document.getElementsByClassName('box34')[0].value = '';
					document.getElementsByClassName('box34')[0].readOnly = false;
					
					document.getElementsByClassName('box35')[0].value = '';
					document.getElementsByClassName('box35')[0].readOnly = false;
					
					document.getElementsByClassName('box36')[0].value = '';
					document.getElementsByClassName('box36')[0].readOnly = false;
					
					document.getElementsByClassName('box37')[0].value = '';
					document.getElementsByClassName('box37')[0].readOnly = false;
					
					document.getElementsByClassName('box38')[0].value = '';
					document.getElementsByClassName('box38')[0].readOnly = false;
					
					document.getElementsByClassName('box39')[0].value = '9';
					document.getElementsByClassName('box39')[0].readOnly = true;
					
					document.getElementsByClassName('box40')[0].value = '';
					document.getElementsByClassName('box40')[0].readOnly = false;
					
					document.getElementsByClassName('box41')[0].value = '8';
					document.getElementsByClassName('box41')[0].readOnly = true;
					
					document.getElementsByClassName('box42')[0].value = '';
					document.getElementsByClassName('box42')[0].readOnly = false;
					
					document.getElementsByClassName('box43')[0].value = '7';
					document.getElementsByClassName('box43')[0].readOnly = true;
					
					document.getElementsByClassName('box44')[0].value = '';
					document.getElementsByClassName('box44')[0].readOnly = false;
					
					document.getElementsByClassName('box45')[0].value = '';
					document.getElementsByClassName('box45')[0].readOnly = false;
					
					document.getElementsByClassName('box46')[0].value = '';
					document.getElementsByClassName('box46')[0].readOnly = false;
					
					document.getElementsByClassName('box47')[0].value = '';
					document.getElementsByClassName('box47')[0].readOnly = false;
					
					document.getElementsByClassName('box48')[0].value = '';
					document.getElementsByClassName('box48')[0].readOnly = false;
					
					document.getElementsByClassName('box49')[0].value = '';
					document.getElementsByClassName('box49')[0].readOnly = false;
					
					document.getElementsByClassName('box50')[0].value = '';
					document.getElementsByClassName('box50')[0].readOnly = false;
					
					document.getElementsByClassName('box51')[0].value = '7';
					document.getElementsByClassName('box51')[0].readOnly = true;
					
					document.getElementsByClassName('box52')[0].value = '';
					document.getElementsByClassName('box52')[0].readOnly = false;
					
					document.getElementsByClassName('box53')[0].value = '5';
					document.getElementsByClassName('box53')[0].readOnly = true;
					
					document.getElementsByClassName('box54')[0].value = '8';
					document.getElementsByClassName('box54')[0].readOnly = true;
					
					document.getElementsByClassName('box55')[0].value = '8';
					document.getElementsByClassName('box55')[0].readOnly = true;
					
					document.getElementsByClassName('box56')[0].value = '';
					document.getElementsByClassName('box56')[0].readOnly = false;
					
					document.getElementsByClassName('box57')[0].value = '';
					document.getElementsByClassName('box57')[0].readOnly = false;
					
					document.getElementsByClassName('box58')[0].value = '4';
					document.getElementsByClassName('box58')[0].readOnly = true;
					
					document.getElementsByClassName('box59')[0].value = '';
					document.getElementsByClassName('box59')[0].readOnly = false;
					
					document.getElementsByClassName('box60')[0].value = '';
					document.getElementsByClassName('box60')[0].readOnly = false;
					
					document.getElementsByClassName('box61')[0].value = '';
					document.getElementsByClassName('box61')[0].readOnly = false;
					
					document.getElementsByClassName('box62')[0].value = '';
					document.getElementsByClassName('box62')[0].readOnly = false;
					
					document.getElementsByClassName('box63')[0].value = '';
					document.getElementsByClassName('box63')[0].readOnly = false;
					
					document.getElementsByClassName('box64')[0].value = '';
					document.getElementsByClassName('box64')[0].readOnly = false;
					
					document.getElementsByClassName('box65')[0].value = '';
					document.getElementsByClassName('box65')[0].readOnly = false;
					
					document.getElementsByClassName('box66')[0].value = '';
					document.getElementsByClassName('box66')[0].readOnly = false;
					
					document.getElementsByClassName('box67')[0].value = '';
					document.getElementsByClassName('box67')[0].readOnly = false;
					
					document.getElementsByClassName('box68')[0].value = '9';
					document.getElementsByClassName('box68')[0].readOnly = true;
					
					document.getElementsByClassName('box69')[0].value = '8';
					document.getElementsByClassName('box69')[0].readOnly = true;
					
					document.getElementsByClassName('box70')[0].value = '';
					document.getElementsByClassName('box70')[0].readOnly = false;
					
					document.getElementsByClassName('box71')[0].value = '';
					document.getElementsByClassName('box71')[0].readOnly = false;
					
					document.getElementsByClassName('box72')[0].value = '3';
					document.getElementsByClassName('box72')[0].readOnly = true;
					
					document.getElementsByClassName('box73')[0].value = '';
					document.getElementsByClassName('box73')[0].readOnly = false;
					
					document.getElementsByClassName('box74')[0].value = '9';
					document.getElementsByClassName('box74')[0].readOnly = true;
					
					document.getElementsByClassName('box75')[0].value = '5';
					document.getElementsByClassName('box75')[0].readOnly = true;
					
					document.getElementsByClassName('box76')[0].value = '';
					document.getElementsByClassName('box76')[0].readOnly = false;
					
					document.getElementsByClassName('box77')[0].value = '';
					document.getElementsByClassName('box77')[0].readOnly = false;
					
					document.getElementsByClassName('box78')[0].value = '3';
					document.getElementsByClassName('box78')[0].readOnly = true;
					
					document.getElementsByClassName('box79')[0].value = '';
					document.getElementsByClassName('box79')[0].readOnly = false;
					
					document.getElementsByClassName('box80')[0].value = '';
					document.getElementsByClassName('box80')[0].readOnly = false;
					
					document.getElementsByClassName('box81')[0].value = '';
					document.getElementsByClassName('box81')[0].readOnly = false;
		}
