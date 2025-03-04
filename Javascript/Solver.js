		//*This will solve the Sudoku *//
		
		
		//*The way it removes possibilities is that it takes the value from the box and changes it from whatever value it was to a negative one, keeping
		//*the size of the string, then it will keep doing that for each number in each box. Then, it will remove the negative ones, making the Array
		//*equal to the actual values that the box can be.
		
		
		$(document).ready(function(){
			document.getElementsByClassName('solve')[0].onclick = function(){
					getBlanks();
			};
		});
		
			
			
			
			
			
			
			
			
			
			
			
			
		function getBlanks(){
			
			
			
			var B1 = document.getElementsByClassName('box1')[0].value; //*alert(B1);
			var B2 = document.getElementsByClassName('box2')[0].value;
			var B3 = document.getElementsByClassName('box3')[0].value;
			var B4 = document.getElementsByClassName('box4')[0].value;
			var B5 = document.getElementsByClassName('box5')[0].value;
			var B6 = document.getElementsByClassName('box6')[0].value;
			var B7 = document.getElementsByClassName('box7')[0].value;
			var B8 = document.getElementsByClassName('box8')[0].value;
			var B9 = document.getElementsByClassName('box9')[0].value;
			
			var B10 = document.getElementsByClassName('box10')[0].value;
			var B11 = document.getElementsByClassName('box11')[0].value;
			var B12 = document.getElementsByClassName('box12')[0].value;
			var B13 = document.getElementsByClassName('box13')[0].value;
			var B14 = document.getElementsByClassName('box14')[0].value;
			var B15 = document.getElementsByClassName('box15')[0].value;
			var B16 = document.getElementsByClassName('box16')[0].value;
			var B17 = document.getElementsByClassName('box17')[0].value;
			var B18 = document.getElementsByClassName('box18')[0].value;
			
			var B19 = document.getElementsByClassName('box19')[0].value;
			var B20 = document.getElementsByClassName('box20')[0].value;
			var B21 = document.getElementsByClassName('box21')[0].value;
			var B22 = document.getElementsByClassName('box22')[0].value;
			var B23 = document.getElementsByClassName('box23')[0].value;
			var B24 = document.getElementsByClassName('box24')[0].value;
			var B25 = document.getElementsByClassName('box25')[0].value;
			var B26 = document.getElementsByClassName('box26')[0].value;
			var B27 = document.getElementsByClassName('box27')[0].value;
			
			var B28 = document.getElementsByClassName('box28')[0].value;
			var B29 = document.getElementsByClassName('box29')[0].value;
			var B30 = document.getElementsByClassName('box30')[0].value;
			var B31 = document.getElementsByClassName('box31')[0].value;
			var B32 = document.getElementsByClassName('box32')[0].value;
			var B33 = document.getElementsByClassName('box33')[0].value;
			var B34 = document.getElementsByClassName('box34')[0].value;
			var B35 = document.getElementsByClassName('box35')[0].value;
			var B36 = document.getElementsByClassName('box36')[0].value;
			
			var B37 = document.getElementsByClassName('box37')[0].value;
			var B38 = document.getElementsByClassName('box38')[0].value;
			var B39 = document.getElementsByClassName('box39')[0].value;
			var B40 = document.getElementsByClassName('box40')[0].value;
			var B41 = document.getElementsByClassName('box41')[0].value;
			var B42 = document.getElementsByClassName('box42')[0].value;
			var B43 = document.getElementsByClassName('box43')[0].value;
			var B44 = document.getElementsByClassName('box44')[0].value;
			var B45 = document.getElementsByClassName('box45')[0].value;
			
			var B46 = document.getElementsByClassName('box46')[0].value;
			var B47 = document.getElementsByClassName('box47')[0].value;
			var B48 = document.getElementsByClassName('box48')[0].value;
			var B49 = document.getElementsByClassName('box49')[0].value;
			var B50 = document.getElementsByClassName('box50')[0].value;
			var B51 = document.getElementsByClassName('box51')[0].value;
			var B52 = document.getElementsByClassName('box52')[0].value;
			var B53 = document.getElementsByClassName('box53')[0].value;
			var B54 = document.getElementsByClassName('box54')[0].value;
			
			var B55 = document.getElementsByClassName('box55')[0].value;
			var B56 = document.getElementsByClassName('box56')[0].value;
			var B57 = document.getElementsByClassName('box57')[0].value;
			var B58 = document.getElementsByClassName('box58')[0].value;
			var B59 = document.getElementsByClassName('box59')[0].value;
			var B60 = document.getElementsByClassName('box60')[0].value;
			var B61 = document.getElementsByClassName('box61')[0].value;
			var B62 = document.getElementsByClassName('box62')[0].value;
			var B63 = document.getElementsByClassName('box63')[0].value;
			
			var B64 = document.getElementsByClassName('box64')[0].value;
			var B65 = document.getElementsByClassName('box65')[0].value;
			var B66 = document.getElementsByClassName('box66')[0].value;
			var B67 = document.getElementsByClassName('box67')[0].value;
			var B68 = document.getElementsByClassName('box68')[0].value;
			var B69 = document.getElementsByClassName('box69')[0].value;
			var B70 = document.getElementsByClassName('box70')[0].value;
			var B71 = document.getElementsByClassName('box71')[0].value;
			var B72 = document.getElementsByClassName('box72')[0].value;
			
			var B73 = document.getElementsByClassName('box73')[0].value;
			var B74 = document.getElementsByClassName('box74')[0].value;
			var B75 = document.getElementsByClassName('box75')[0].value;
			var B76 = document.getElementsByClassName('box76')[0].value;
			var B77 = document.getElementsByClassName('box77')[0].value;
			var B78 = document.getElementsByClassName('box78')[0].value;
			var B79 = document.getElementsByClassName('box79')[0].value;
			var B80 = document.getElementsByClassName('box80')[0].value;
			var B81 = document.getElementsByClassName('box81')[0].value;
			



			
			const B1Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B2Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B3Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B4Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B5Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B6Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B7Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B8Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B9Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B10Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B11Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B12Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B13Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B14Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B15Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B16Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B17Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B18Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B19Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B20Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B21Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B22Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B23Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B24Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B25Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B26Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B27Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B28Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B29Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B30Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B31Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B32Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B33Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B34Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B35Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B36Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B37Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B38Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B39Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B40Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B41Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B42Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B43Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B44Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B45Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B46Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B47Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B48Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B49Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B50Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B51Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B52Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B53Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B54Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B55Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B56Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B57Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B58Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B59Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B60Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B61Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B62Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B63Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B64Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B65Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B66Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B67Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B68Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B69Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B70Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B71Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B72Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			const B73Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B74Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B75Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B76Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B77Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B78Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B79Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B80Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const B81Possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			
			
			
			
			
			
			var BoxResult = '';
			var solveBox = '';
			
			//* These arrays will be used to kick numbers out of the BoxPossibilities arrays right above
			
			const Row1 = [];
			const Row2 = [];
			const Row3 = [];
			const Row4 = [];
			const Row5 = [];
			const Row6 = [];
			const Row7 = [];
			const Row8 = [];
			const Row9 = [];
			
			
			const Column1 = [];
			const Column2 = [];
			const Column3 = [];
			const Column4 = [];
			const Column5 = [];
			const Column6 = [];
			const Column7 = [];
			const Column8 = [];
			const Column9 = [];
			
			
			const Section1 = [];
			const Section2 = [];
			const Section3 = [];
			const Section4 = [];
			const Section5 = [];
			const Section6 = [];
			const Section7 = [];
			const Section8 = [];
			const Section9 = [];
			
			
			
			//* The minus one makes it become equal to its actual value, so when we push that value into it's array, it will eventually kick the correct number
			//* from the Boxs array
			
				Row1.push(B1 - 1);
				Row1.push(B2 - 1);
				Row1.push(B3 - 1);
				Row1.push(B4 - 1);
				Row1.push(B5 - 1);
				Row1.push(B6 - 1);
				Row1.push(B7 - 1);
				Row1.push(B8 - 1);
				Row1.push(B9 - 1);
				
				Row2.push(B10 - 1);
				Row2.push(B11 - 1);
				Row2.push(B12 - 1);
				Row2.push(B13 - 1);
				Row2.push(B14 - 1);
				Row2.push(B15 - 1);
				Row2.push(B16 - 1);
				Row2.push(B17 - 1);
				Row2.push(B18 - 1);
				
				Row3.push(B19 - 1);
				Row3.push(B20 - 1);
				Row3.push(B21 - 1);
				Row3.push(B22 - 1);
				Row3.push(B23 - 1);
				Row3.push(B24 - 1);
				Row3.push(B25 - 1);
				Row3.push(B26 - 1);
				Row3.push(B27 - 1);
				
				Row4.push(B28 - 1);
				Row4.push(B29 - 1);
				Row4.push(B30 - 1);
				Row4.push(B31 - 1);
				Row4.push(B32 - 1);
				Row4.push(B33 - 1);
				Row4.push(B34 - 1);
				Row4.push(B35 - 1);
				Row4.push(B36 - 1);
				
				Row5.push(B37 - 1);
				Row5.push(B38 - 1);
				Row5.push(B39 - 1);
				Row5.push(B40 - 1);
				Row5.push(B41 - 1);
				Row5.push(B42 - 1);
				Row5.push(B43 - 1);
				Row5.push(B44 - 1);
				Row5.push(B45 - 1);
				
				Row6.push(B46 - 1);
				Row6.push(B47 - 1);
				Row6.push(B48 - 1);
				Row6.push(B49 - 1);
				Row6.push(B50 - 1);
				Row6.push(B51 - 1);
				Row6.push(B52 - 1);
				Row6.push(B53 - 1);
				Row6.push(B54 - 1);
				
				Row7.push(B55 - 1);
				Row7.push(B56 - 1);
				Row7.push(B57 - 1);
				Row7.push(B58 - 1);
				Row7.push(B59 - 1);
				Row7.push(B60 - 1);
				Row7.push(B61 - 1);
				Row7.push(B62 - 1);
				Row7.push(B63 - 1);
				
				Row8.push(B64 - 1);
				Row8.push(B65 - 1);
				Row8.push(B66 - 1);
				Row8.push(B67 - 1);
				Row8.push(B68 - 1);
				Row8.push(B69 - 1);
				Row8.push(B70 - 1);
				Row8.push(B71 - 1);
				Row8.push(B72 - 1);
				
				Row9.push(B73 - 1);
				Row9.push(B74 - 1);
				Row9.push(B75 - 1);
				Row9.push(B76 - 1);
				Row9.push(B77 - 1);
				Row9.push(B78 - 1);
				Row9.push(B79 - 1);
				Row9.push(B80 - 1);
				Row9.push(B81 - 1);
				
				
				
				
				
				Column1.push(B1 - 1);
				Column1.push(B10 - 1);
				Column1.push(B19 - 1);
				Column1.push(B28 - 1);
				Column1.push(B37 - 1);
				Column1.push(B46 - 1);
				Column1.push(B55 - 1);
				Column1.push(B64 - 1);
				Column1.push(B73 - 1);
				
				Column2.push(B2 - 1);
				Column2.push(B11 - 1);
				Column2.push(B20 - 1);
				Column2.push(B29 - 1);
				Column2.push(B38 - 1);
				Column2.push(B47 - 1);
				Column2.push(B56 - 1);
				Column2.push(B65 - 1);
				Column2.push(B74 - 1);
				
				Column3.push(B3 - 1);
				Column3.push(B12 - 1);
				Column3.push(B21 - 1);
				Column3.push(B30 - 1);
				Column3.push(B39 - 1);
				Column3.push(B48 - 1);
				Column3.push(B57 - 1);
				Column3.push(B66 - 1);
				Column3.push(B75 - 1);
				
				Column4.push(B4 - 1);
				Column4.push(B13 - 1);
				Column4.push(B22 - 1);
				Column4.push(B31 - 1);
				Column4.push(B40 - 1);
				Column4.push(B49 - 1);
				Column4.push(B58 - 1);
				Column4.push(B67 - 1);
				Column4.push(B76 - 1);
				
				Column5.push(B5 - 1);
				Column5.push(B14- 1);
				Column5.push(B23 - 1);
				Column5.push(B32 - 1);
				Column5.push(B41 - 1);
				Column5.push(B50 - 1);
				Column5.push(B59 - 1);
				Column5.push(B68 - 1);
				Column5.push(B77 - 1);
				
				Column6.push(B6 - 1);
				Column6.push(B15 - 1);
				Column6.push(B24 - 1);
				Column6.push(B33 - 1);
				Column6.push(B42 - 1);
				Column6.push(B51 - 1);
				Column6.push(B60 - 1);
				Column6.push(B69 - 1);
				Column6.push(B78 - 1);
				
				Column7.push(B7 - 1);
				Column7.push(B16 - 1);
				Column7.push(B25 - 1);
				Column7.push(B34 - 1);
				Column7.push(B43 - 1);
				Column7.push(B52 - 1);
				Column7.push(B61 - 1);
				Column7.push(B70 - 1);
				Column7.push(B79 - 1);
				
				Column8.push(B8 - 1);
				Column8.push(B17 - 1);
				Column8.push(B26 - 1);
				Column8.push(B35 - 1);
				Column8.push(B44 - 1);
				Column8.push(B53 - 1);
				Column8.push(B62 - 1);
				Column8.push(B71 - 1);
				Column8.push(B80 - 1);
				
				Column9.push(B9 - 1);
				Column9.push(B18 - 1);
				Column9.push(B27 - 1);
				Column9.push(B36 - 1);
				Column9.push(B45 - 1);
				Column9.push(B54 - 1);
				Column9.push(B63 - 1);
				Column9.push(B72 - 1);
				Column9.push(B81 - 1);
				
				
				
				
				//* Instead of doing the matrix, here I did all of the box values so I wouldn't have to do 9 matrices for each box
				Section1.push(B1 - 1);
				Section1.push(B2 - 1);
				Section1.push(B3 - 1);
				Section1.push(B10 - 1);
				Section1.push(B11 - 1);
				Section1.push(B12 - 1);
				Section1.push(B19 - 1);
				Section1.push(B20 - 1);
				Section1.push(B21 - 1);
				
				Section2.push(B4 - 1);
				Section2.push(B5 - 1);
				Section2.push(B6 - 1);
				Section2.push(B13 - 1);
				Section2.push(B14 - 1);
				Section2.push(B15 - 1);
				Section2.push(B22 - 1);
				Section2.push(B23 - 1);
				Section2.push(B24 - 1);
				
				Section3.push(B7 - 1);
				Section3.push(B8 - 1);
				Section3.push(B9 - 1);
				Section3.push(B16 - 1);
				Section3.push(B17 - 1);
				Section3.push(B18 - 1);
				Section3.push(B25 - 1);
				Section3.push(B26 - 1);
				Section3.push(B27 - 1);
				
				Section4.push(B28 - 1);
				Section4.push(B29 - 1);
				Section4.push(B30 - 1);
				Section4.push(B37 - 1);
				Section4.push(B38 - 1);
				Section4.push(B39 - 1);
				Section4.push(B46 - 1);
				Section4.push(B47 - 1);
				Section4.push(B48 - 1);
				
				Section5.push(B31 - 1);
				Section5.push(B32 - 1);
				Section5.push(B33 - 1);
				Section5.push(B40 - 1);
				Section5.push(B41 - 1);
				Section5.push(B42 - 1);
				Section5.push(B49 - 1);
				Section5.push(B50 - 1);
				Section5.push(B51 - 1);
				
				Section6.push(B34 - 1);
				Section6.push(B35 - 1);
				Section6.push(B36 - 1);
				Section6.push(B43 - 1);
				Section6.push(B44 - 1);
				Section6.push(B45 - 1);
				Section6.push(B52 - 1);
				Section6.push(B53 - 1);
				Section6.push(B54 - 1);
				
				Section7.push(B55 - 1);
				Section7.push(B56 - 1);
				Section7.push(B57 - 1);
				Section7.push(B64 - 1);
				Section7.push(B65 - 1);
				Section7.push(B66 - 1);
				Section7.push(B73 - 1);
				Section7.push(B74 - 1);
				Section7.push(B75 - 1);
				
				Section8.push(B58 - 1);
				Section8.push(B59 - 1);
				Section8.push(B60 - 1);
				Section8.push(B67 - 1);
				Section8.push(B68 - 1);
				Section8.push(B69 - 1);
				Section8.push(B76 - 1);
				Section8.push(B77 - 1);
				Section8.push(B78 - 1);
				
				Section9.push(B61 - 1);
				Section9.push(B62 - 1);
				Section9.push(B63 - 1);
				Section9.push(B70 - 1);
				Section9.push(B71 - 1);
				Section9.push(B72 - 1);
				Section9.push(B79 - 1);
				Section9.push(B80 - 1);
				Section9.push(B81 - 1);
			
			
			
			
			
			while(B1 < 1){
				function B1PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B1Possibilities[Row1[0]];
				delete B1Possibilities[Row1[1]];
				delete B1Possibilities[Row1[2]];
				delete B1Possibilities[Row1[3]];
				delete B1Possibilities[Row1[4]];
				delete B1Possibilities[Row1[5]];
				delete B1Possibilities[Row1[6]];
				delete B1Possibilities[Row1[7]];
				delete B1Possibilities[Row1[8]];
				
				delete B1Possibilities[Column1[0]];
				delete B1Possibilities[Column1[1]];
				delete B1Possibilities[Column1[2]];
				delete B1Possibilities[Column1[3]];
				delete B1Possibilities[Column1[4]];
				delete B1Possibilities[Column1[5]];
				delete B1Possibilities[Column1[6]];
				delete B1Possibilities[Column1[7]];
				delete B1Possibilities[Column1[8]];
				
				delete B1Possibilities[Section1[0]];
				delete B1Possibilities[Section1[1]];
				delete B1Possibilities[Section1[2]];
				delete B1Possibilities[Section1[3]];
				delete B1Possibilities[Section1[4]];
				delete B1Possibilities[Section1[5]];
				delete B1Possibilities[Section1[6]];
				delete B1Possibilities[Section1[7]];
				delete B1Possibilities[Section1[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B1PossibilitiesRemove(B1Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 1;
				SolveBox();
				break;
			}
			
			
			
			
			
			while(B2 < 1){
				function B2PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B2Possibilities[Row1[0]];
				delete B2Possibilities[Row1[1]];
				delete B2Possibilities[Row1[2]];
				delete B2Possibilities[Row1[3]];
				delete B2Possibilities[Row1[4]];
				delete B2Possibilities[Row1[5]];
				delete B2Possibilities[Row1[6]];
				delete B2Possibilities[Row1[7]];
				delete B2Possibilities[Row1[8]];
				
				delete B2Possibilities[Column2[0]];
				delete B2Possibilities[Column2[1]];
				delete B2Possibilities[Column2[2]];
				delete B2Possibilities[Column2[3]];
				delete B2Possibilities[Column2[4]];
				delete B2Possibilities[Column2[5]];
				delete B2Possibilities[Column2[6]];
				delete B2Possibilities[Column2[7]];
				delete B2Possibilities[Column2[8]];
				
				delete B2Possibilities[Section1[0]];
				delete B2Possibilities[Section1[1]];
				delete B2Possibilities[Section1[2]];
				delete B2Possibilities[Section1[3]];
				delete B2Possibilities[Section1[4]];
				delete B2Possibilities[Section1[5]];
				delete B2Possibilities[Section1[6]];
				delete B2Possibilities[Section1[7]];
				delete B2Possibilities[Section1[8]];
				//* alert(B2Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B2PossibilitiesRemove(B2Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 2;
				SolveBox();
				break;
			}
			
			
			
			while(B3 < 1){
				function B3PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B3Possibilities[Row1[0]];
				delete B3Possibilities[Row1[1]];
				delete B3Possibilities[Row1[2]];
				delete B3Possibilities[Row1[3]];
				delete B3Possibilities[Row1[4]];
				delete B3Possibilities[Row1[5]];
				delete B3Possibilities[Row1[6]];
				delete B3Possibilities[Row1[7]];
				delete B3Possibilities[Row1[8]];
				
				delete B3Possibilities[Column3[0]];
				delete B3Possibilities[Column3[1]];
				delete B3Possibilities[Column3[2]];
				delete B3Possibilities[Column3[3]];
				delete B3Possibilities[Column3[4]];
				delete B3Possibilities[Column3[5]];
				delete B3Possibilities[Column3[6]];
				delete B3Possibilities[Column3[7]];
				delete B3Possibilities[Column3[8]];
				
				delete B3Possibilities[Section1[0]];
				delete B3Possibilities[Section1[1]];
				delete B3Possibilities[Section1[2]];
				delete B3Possibilities[Section1[3]];
				delete B3Possibilities[Section1[4]];
				delete B3Possibilities[Section1[5]];
				delete B3Possibilities[Section1[6]];
				delete B3Possibilities[Section1[7]];
				delete B3Possibilities[Section1[8]];
				//* alert(B2Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B3PossibilitiesRemove(B3Possibilities, -1);
				
				
				
				solveBox = 3;
				SolveBox();
				break;
			}
			
			
			while(B4 < 1){
				function B4PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B4Possibilities[Row1[0]];
				delete B4Possibilities[Row1[1]];
				delete B4Possibilities[Row1[2]];
				delete B4Possibilities[Row1[3]];
				delete B4Possibilities[Row1[4]];
				delete B4Possibilities[Row1[5]];
				delete B4Possibilities[Row1[6]];
				delete B4Possibilities[Row1[7]];
				delete B4Possibilities[Row1[8]];
				
				delete B4Possibilities[Column4[0]];
				delete B4Possibilities[Column4[1]];
				delete B4Possibilities[Column4[2]];
				delete B4Possibilities[Column4[3]];
				delete B4Possibilities[Column4[4]];
				delete B4Possibilities[Column4[5]];
				delete B4Possibilities[Column4[6]];
				delete B4Possibilities[Column4[7]];
				delete B4Possibilities[Column4[8]];
				
				delete B4Possibilities[Section2[0]];
				delete B4Possibilities[Section2[1]];
				delete B4Possibilities[Section2[2]];
				delete B4Possibilities[Section2[3]];
				delete B4Possibilities[Section2[4]];
				delete B4Possibilities[Section2[5]];
				delete B4Possibilities[Section2[6]];
				delete B4Possibilities[Section2[7]];
				delete B4Possibilities[Section2[8]];
				//* alert(BPossibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B4PossibilitiesRemove(B4Possibilities, -1);
				
				
				
				solveBox = 4;
				SolveBox();
				break;
			}
			
			while(B5 < 1){
				function B5PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B5Possibilities[Row1[0]];
				delete B5Possibilities[Row1[1]];
				delete B5Possibilities[Row1[2]];
				delete B5Possibilities[Row1[3]];
				delete B5Possibilities[Row1[4]];
				delete B5Possibilities[Row1[5]];
				delete B5Possibilities[Row1[6]];
				delete B5Possibilities[Row1[7]];
				delete B5Possibilities[Row1[8]];
				
				delete B5Possibilities[Column5[0]];
				delete B5Possibilities[Column5[1]];
				delete B5Possibilities[Column5[2]];
				delete B5Possibilities[Column5[3]];
				delete B5Possibilities[Column5[4]];
				delete B5Possibilities[Column5[5]];
				delete B5Possibilities[Column5[6]];
				delete B5Possibilities[Column5[7]];
				delete B5Possibilities[Column5[8]];
				
				delete B5Possibilities[Section2[0]];
				delete B5Possibilities[Section2[1]];
				delete B5Possibilities[Section2[2]];
				delete B5Possibilities[Section2[3]];
				delete B5Possibilities[Section2[4]];
				delete B5Possibilities[Section2[5]];
				delete B5Possibilities[Section2[6]];
				delete B5Possibilities[Section2[7]];
				delete B5Possibilities[Section2[8]];
				//* alert(B5Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B5PossibilitiesRemove(B5Possibilities, -1);
				
				
				
				solveBox = 5;
				SolveBox();
				break;
			}
			
			while(B6 < 1){
				function B6PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B6Possibilities[Row1[0]];
				delete B6Possibilities[Row1[1]];
				delete B6Possibilities[Row1[2]];
				delete B6Possibilities[Row1[3]];
				delete B6Possibilities[Row1[4]];
				delete B6Possibilities[Row1[5]];
				delete B6Possibilities[Row1[6]];
				delete B6Possibilities[Row1[7]];
				delete B6Possibilities[Row1[8]];
				
				delete B6Possibilities[Column6[0]];
				delete B6Possibilities[Column6[1]];
				delete B6Possibilities[Column6[2]];
				delete B6Possibilities[Column6[3]];
				delete B6Possibilities[Column6[4]];
				delete B6Possibilities[Column6[5]];
				delete B6Possibilities[Column6[6]];
				delete B6Possibilities[Column6[7]];
				delete B6Possibilities[Column6[8]];
				
				delete B6Possibilities[Section2[0]];
				delete B6Possibilities[Section2[1]];
				delete B6Possibilities[Section2[2]];
				delete B6Possibilities[Section2[3]];
				delete B6Possibilities[Section2[4]];
				delete B6Possibilities[Section2[5]];
				delete B6Possibilities[Section2[6]];
				delete B6Possibilities[Section2[7]];
				delete B6Possibilities[Section2[8]];
				//* alert(B6Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B6PossibilitiesRemove(B6Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 6;
				SolveBox();
				break;
			}
			
			
			while(B7 < 1){
				function B7PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B7Possibilities[Row1[0]];
				delete B7Possibilities[Row1[1]];
				delete B7Possibilities[Row1[2]];
				delete B7Possibilities[Row1[3]];
				delete B7Possibilities[Row1[4]];
				delete B7Possibilities[Row1[5]];
				delete B7Possibilities[Row1[6]];
				delete B7Possibilities[Row1[7]];
				delete B7Possibilities[Row1[8]];
				
				delete B7Possibilities[Column7[0]];
				delete B7Possibilities[Column7[1]];
				delete B7Possibilities[Column7[2]];
				delete B7Possibilities[Column7[3]];
				delete B7Possibilities[Column7[4]];
				delete B7Possibilities[Column7[5]];
				delete B7Possibilities[Column7[6]];
				delete B7Possibilities[Column7[7]];
				delete B7Possibilities[Column7[8]];
				
				delete B7Possibilities[Section3[0]];
				delete B7Possibilities[Section3[1]];
				delete B7Possibilities[Section3[2]];
				delete B7Possibilities[Section3[3]];
				delete B7Possibilities[Section3[4]];
				delete B7Possibilities[Section3[5]];
				delete B7Possibilities[Section3[6]];
				delete B7Possibilities[Section3[7]];
				delete B7Possibilities[Section3[8]];
				//* alert(B7Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B7PossibilitiesRemove(B7Possibilities, -1);
				
				
				
				solveBox = 7;
				SolveBox();
				break;
			}
			
			while(B8 < 1){
				function B8PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B8Possibilities[Row1[0]];
				delete B8Possibilities[Row1[1]];
				delete B8Possibilities[Row1[2]];
				delete B8Possibilities[Row1[3]];
				delete B8Possibilities[Row1[4]];
				delete B8Possibilities[Row1[5]];
				delete B8Possibilities[Row1[6]];
				delete B8Possibilities[Row1[7]];
				delete B8Possibilities[Row1[8]];
				
				delete B8Possibilities[Column8[0]];
				delete B8Possibilities[Column8[1]];
				delete B8Possibilities[Column8[2]];
				delete B8Possibilities[Column8[3]];
				delete B8Possibilities[Column8[4]];
				delete B8Possibilities[Column8[5]];
				delete B8Possibilities[Column8[6]];
				delete B8Possibilities[Column8[7]];
				delete B8Possibilities[Column8[8]];
				
				delete B8Possibilities[Section3[0]];
				delete B8Possibilities[Section3[1]];
				delete B8Possibilities[Section3[2]];
				delete B8Possibilities[Section3[3]];
				delete B8Possibilities[Section3[4]];
				delete B8Possibilities[Section3[5]];
				delete B8Possibilities[Section3[6]];
				delete B8Possibilities[Section3[7]];
				delete B8Possibilities[Section3[8]];
				//* alert(B8Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B8PossibilitiesRemove(B8Possibilities, -1);
				
				
				
				solveBox = 8;
				SolveBox();
				break;
			}
			
			
			
			while(B9 < 1){
				function B9PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B9Possibilities[Row1[0]];
				delete B9Possibilities[Row1[1]];
				delete B9Possibilities[Row1[2]];
				delete B9Possibilities[Row1[3]];
				delete B9Possibilities[Row1[4]];
				delete B9Possibilities[Row1[5]];
				delete B9Possibilities[Row1[6]];
				delete B9Possibilities[Row1[7]];
				delete B9Possibilities[Row1[8]];
				
				delete B9Possibilities[Column9[0]];
				delete B9Possibilities[Column9[1]];
				delete B9Possibilities[Column9[2]];
				delete B9Possibilities[Column9[3]];
				delete B9Possibilities[Column9[4]];
				delete B9Possibilities[Column9[5]];
				delete B9Possibilities[Column9[6]];
				delete B9Possibilities[Column9[7]];
				delete B9Possibilities[Column9[8]];
				
				delete B9Possibilities[Section3[0]];
				delete B9Possibilities[Section3[1]];
				delete B9Possibilities[Section3[2]];
				delete B9Possibilities[Section3[3]];
				delete B9Possibilities[Section3[4]];
				delete B9Possibilities[Section3[5]];
				delete B9Possibilities[Section3[6]];
				delete B9Possibilities[Section3[7]];
				delete B9Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B9PossibilitiesRemove(B9Possibilities, -1);
				
				
				
				solveBox = 9;
				SolveBox();
				break;
			}

			while(B10 < 1){
				function B10PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B10Possibilities[Row2[0]];
				delete B10Possibilities[Row2[1]];
				delete B10Possibilities[Row2[2]];
				delete B10Possibilities[Row2[3]];
				delete B10Possibilities[Row2[4]];
				delete B10Possibilities[Row2[5]];
				delete B10Possibilities[Row2[6]];
				delete B10Possibilities[Row2[7]];
				delete B10Possibilities[Row2[8]];
				
				delete B10Possibilities[Column1[0]];
				delete B10Possibilities[Column1[1]];
				delete B10Possibilities[Column1[2]];
				delete B10Possibilities[Column1[3]];
				delete B10Possibilities[Column1[4]];
				delete B10Possibilities[Column1[5]];
				delete B10Possibilities[Column1[6]];
				delete B10Possibilities[Column1[7]];
				delete B10Possibilities[Column1[8]];
				
				delete B10Possibilities[Section1[0]];
				delete B10Possibilities[Section1[1]];
				delete B10Possibilities[Section1[2]];
				delete B10Possibilities[Section1[3]];
				delete B10Possibilities[Section1[4]];
				delete B10Possibilities[Section1[5]];
				delete B10Possibilities[Section1[6]];
				delete B10Possibilities[Section1[7]];
				delete B10Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B10PossibilitiesRemove(B10Possibilities, -1);
				
				
				
				solveBox = 10;
				SolveBox();
				break;
			}


			while(B11 < 1){
				function B11PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B11Possibilities[Row2[0]];
				delete B11Possibilities[Row2[1]];
				delete B11Possibilities[Row2[2]];
				delete B11Possibilities[Row2[3]];
				delete B11Possibilities[Row2[4]];
				delete B11Possibilities[Row2[5]];
				delete B11Possibilities[Row2[6]];
				delete B11Possibilities[Row2[7]];
				delete B11Possibilities[Row2[8]];
				
				delete B11Possibilities[Column2[0]];
				delete B11Possibilities[Column2[1]];
				delete B11Possibilities[Column2[2]];
				delete B11Possibilities[Column2[3]];
				delete B11Possibilities[Column2[4]];
				delete B11Possibilities[Column2[5]];
				delete B11Possibilities[Column2[6]];
				delete B11Possibilities[Column2[7]];
				delete B11Possibilities[Column2[8]];
				
				delete B11Possibilities[Section1[0]];
				delete B11Possibilities[Section1[1]];
				delete B11Possibilities[Section1[2]];
				delete B11Possibilities[Section1[3]];
				delete B11Possibilities[Section1[4]];
				delete B11Possibilities[Section1[5]];
				delete B11Possibilities[Section1[6]];
				delete B11Possibilities[Section1[7]];
				delete B11Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B11PossibilitiesRemove(B11Possibilities, -1);
				
				
				
				solveBox = 11;
				SolveBox();
				break;
			}
			
			
			while(B12 < 1){
				function B12PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B12Possibilities[Row2[0]];
				delete B12Possibilities[Row2[1]];
				delete B12Possibilities[Row2[2]];
				delete B12Possibilities[Row2[3]];
				delete B12Possibilities[Row2[4]];
				delete B12Possibilities[Row2[5]];
				delete B12Possibilities[Row2[6]];
				delete B12Possibilities[Row2[7]];
				delete B12Possibilities[Row2[8]];
				
				delete B12Possibilities[Column3[0]];
				delete B12Possibilities[Column3[1]];
				delete B12Possibilities[Column3[2]];
				delete B12Possibilities[Column3[3]];
				delete B12Possibilities[Column3[4]];
				delete B12Possibilities[Column3[5]];
				delete B12Possibilities[Column3[6]];
				delete B12Possibilities[Column3[7]];
				delete B12Possibilities[Column3[8]];
				
				delete B12Possibilities[Section1[0]];
				delete B12Possibilities[Section1[1]];
				delete B12Possibilities[Section1[2]];
				delete B12Possibilities[Section1[3]];
				delete B12Possibilities[Section1[4]];
				delete B12Possibilities[Section1[5]];
				delete B12Possibilities[Section1[6]];
				delete B12Possibilities[Section1[7]];
				delete B12Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B12PossibilitiesRemove(B12Possibilities, -1);
				
				
				
				solveBox = 12;
				SolveBox();
				break;
			}
			
			
			while(B13 < 1){
				function B13PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B13Possibilities[Row2[0]];
				delete B13Possibilities[Row2[1]];
				delete B13Possibilities[Row2[2]];
				delete B13Possibilities[Row2[3]];
				delete B13Possibilities[Row2[4]];
				delete B13Possibilities[Row2[5]];
				delete B13Possibilities[Row2[6]];
				delete B13Possibilities[Row2[7]];
				delete B13Possibilities[Row2[8]];
				
				delete B13Possibilities[Column4[0]];
				delete B13Possibilities[Column4[1]];
				delete B13Possibilities[Column4[2]];
				delete B13Possibilities[Column4[3]];
				delete B13Possibilities[Column4[4]];
				delete B13Possibilities[Column4[5]];
				delete B13Possibilities[Column4[6]];
				delete B13Possibilities[Column4[7]];
				delete B13Possibilities[Column4[8]];
				
				delete B13Possibilities[Section2[0]];
				delete B13Possibilities[Section2[1]];
				delete B13Possibilities[Section2[2]];
				delete B13Possibilities[Section2[3]];
				delete B13Possibilities[Section2[4]];
				delete B13Possibilities[Section2[5]];
				delete B13Possibilities[Section2[6]];
				delete B13Possibilities[Section2[7]];
				delete B13Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B13PossibilitiesRemove(B13Possibilities, -1);
				
				
				
				solveBox = 13;
				SolveBox();
				break;
			}
			
			while(B14 < 1){
				function B14PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B14Possibilities[Row2[0]];
				delete B14Possibilities[Row2[1]];
				delete B14Possibilities[Row2[2]];
				delete B14Possibilities[Row2[3]];
				delete B14Possibilities[Row2[4]];
				delete B14Possibilities[Row2[5]];
				delete B14Possibilities[Row2[6]];
				delete B14Possibilities[Row2[7]];
				delete B14Possibilities[Row2[8]];
				
				delete B14Possibilities[Column5[0]];
				delete B14Possibilities[Column5[1]];
				delete B14Possibilities[Column5[2]];
				delete B14Possibilities[Column5[3]];
				delete B14Possibilities[Column5[4]];
				delete B14Possibilities[Column5[5]];
				delete B14Possibilities[Column5[6]];
				delete B14Possibilities[Column5[7]];
				delete B14Possibilities[Column5[8]];
				
				delete B14Possibilities[Section2[0]];
				delete B14Possibilities[Section2[1]];
				delete B14Possibilities[Section2[2]];
				delete B14Possibilities[Section2[3]];
				delete B14Possibilities[Section2[4]];
				delete B14Possibilities[Section2[5]];
				delete B14Possibilities[Section2[6]];
				delete B14Possibilities[Section2[7]];
				delete B14Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B14PossibilitiesRemove(B14Possibilities, -1);
				
				
				
				solveBox = 14;
				SolveBox();
				break;
			}
			
			while(B15 < 1){
				function B15PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B15Possibilities[Row2[0]];
				delete B15Possibilities[Row2[1]];
				delete B15Possibilities[Row2[2]];
				delete B15Possibilities[Row2[3]];
				delete B15Possibilities[Row2[4]];
				delete B15Possibilities[Row2[5]];
				delete B15Possibilities[Row2[6]];
				delete B15Possibilities[Row2[7]];
				delete B15Possibilities[Row2[8]];
				
				delete B15Possibilities[Column6[0]];
				delete B15Possibilities[Column6[1]];
				delete B15Possibilities[Column6[2]];
				delete B15Possibilities[Column6[3]];
				delete B15Possibilities[Column6[4]];
				delete B15Possibilities[Column6[5]];
				delete B15Possibilities[Column6[6]];
				delete B15Possibilities[Column6[7]];
				delete B15Possibilities[Column6[8]];
				
				delete B15Possibilities[Section2[0]];
				delete B15Possibilities[Section2[1]];
				delete B15Possibilities[Section2[2]];
				delete B15Possibilities[Section2[3]];
				delete B15Possibilities[Section2[4]];
				delete B15Possibilities[Section2[5]];
				delete B15Possibilities[Section2[6]];
				delete B15Possibilities[Section2[7]];
				delete B15Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B15PossibilitiesRemove(B15Possibilities, -1);
				
				
				
				solveBox = 15;
				SolveBox();
				break;
			}
			
			while(B16 < 1){
				function B16PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B16Possibilities[Row2[0]];
				delete B16Possibilities[Row2[1]];
				delete B16Possibilities[Row2[2]];
				delete B16Possibilities[Row2[3]];
				delete B16Possibilities[Row2[4]];
				delete B16Possibilities[Row2[5]];
				delete B16Possibilities[Row2[6]];
				delete B16Possibilities[Row2[7]];
				delete B16Possibilities[Row2[8]];
				
				delete B16Possibilities[Column7[0]];
				delete B16Possibilities[Column7[1]];
				delete B16Possibilities[Column7[2]];
				delete B16Possibilities[Column7[3]];
				delete B16Possibilities[Column7[4]];
				delete B16Possibilities[Column7[5]];
				delete B16Possibilities[Column7[6]];
				delete B16Possibilities[Column7[7]];
				delete B16Possibilities[Column7[8]];
				
				delete B16Possibilities[Section3[0]];
				delete B16Possibilities[Section3[1]];
				delete B16Possibilities[Section3[2]];
				delete B16Possibilities[Section3[3]];
				delete B16Possibilities[Section3[4]];
				delete B16Possibilities[Section3[5]];
				delete B16Possibilities[Section3[6]];
				delete B16Possibilities[Section3[7]];
				delete B16Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B16PossibilitiesRemove(B16Possibilities, -1);
				
				
				
				solveBox = 16;
				SolveBox();
				break;
			}
			
			while(B17 < 1){
				function B17PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B17Possibilities[Row2[0]];
				delete B17Possibilities[Row2[1]];
				delete B17Possibilities[Row2[2]];
				delete B17Possibilities[Row2[3]];
				delete B17Possibilities[Row2[4]];
				delete B17Possibilities[Row2[5]];
				delete B17Possibilities[Row2[6]];
				delete B17Possibilities[Row2[7]];
				delete B17Possibilities[Row2[8]];
				
				delete B17Possibilities[Column8[0]];
				delete B17Possibilities[Column8[1]];
				delete B17Possibilities[Column8[2]];
				delete B17Possibilities[Column8[3]];
				delete B17Possibilities[Column8[4]];
				delete B17Possibilities[Column8[5]];
				delete B17Possibilities[Column8[6]];
				delete B17Possibilities[Column8[7]];
				delete B17Possibilities[Column8[8]];
				
				delete B17Possibilities[Section3[0]];
				delete B17Possibilities[Section3[1]];
				delete B17Possibilities[Section3[2]];
				delete B17Possibilities[Section3[3]];
				delete B17Possibilities[Section3[4]];
				delete B17Possibilities[Section3[5]];
				delete B17Possibilities[Section3[6]];
				delete B17Possibilities[Section3[7]];
				delete B17Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B17PossibilitiesRemove(B17Possibilities, -1);
				
				
				
				solveBox = 17;
				SolveBox();
				break;
			}
			
			while(B18 < 1){
				function B18PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B18Possibilities[Row2[0]];
				delete B18Possibilities[Row2[1]];
				delete B18Possibilities[Row2[2]];
				delete B18Possibilities[Row2[3]];
				delete B18Possibilities[Row2[4]];
				delete B18Possibilities[Row2[5]];
				delete B18Possibilities[Row2[6]];
				delete B18Possibilities[Row2[7]];
				delete B18Possibilities[Row2[8]];
				
				delete B18Possibilities[Column9[0]];
				delete B18Possibilities[Column9[1]];
				delete B18Possibilities[Column9[2]];
				delete B18Possibilities[Column9[3]];
				delete B18Possibilities[Column9[4]];
				delete B18Possibilities[Column9[5]];
				delete B18Possibilities[Column9[6]];
				delete B18Possibilities[Column9[7]];
				delete B18Possibilities[Column9[8]];
				
				delete B18Possibilities[Section3[0]];
				delete B18Possibilities[Section3[1]];
				delete B18Possibilities[Section3[2]];
				delete B18Possibilities[Section3[3]];
				delete B18Possibilities[Section3[4]];
				delete B18Possibilities[Section3[5]];
				delete B18Possibilities[Section3[6]];
				delete B18Possibilities[Section3[7]];
				delete B18Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B18PossibilitiesRemove(B18Possibilities, -1);
				
				
				
				solveBox = 18;
				SolveBox();
				break;
			}
			
			while(B19 < 1){
				function B19PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B19Possibilities[Row3[0]];
				delete B19Possibilities[Row3[1]];
				delete B19Possibilities[Row3[2]];
				delete B19Possibilities[Row3[3]];
				delete B19Possibilities[Row3[4]];
				delete B19Possibilities[Row3[5]];
				delete B19Possibilities[Row3[6]];
				delete B19Possibilities[Row3[7]];
				delete B19Possibilities[Row3[8]];
				
				delete B19Possibilities[Column1[0]];
				delete B19Possibilities[Column1[1]];
				delete B19Possibilities[Column1[2]];
				delete B19Possibilities[Column1[3]];
				delete B19Possibilities[Column1[4]];
				delete B19Possibilities[Column1[5]];
				delete B19Possibilities[Column1[6]];
				delete B19Possibilities[Column1[7]];
				delete B19Possibilities[Column1[8]];
				
				delete B19Possibilities[Section1[0]];
				delete B19Possibilities[Section1[1]];
				delete B19Possibilities[Section1[2]];
				delete B19Possibilities[Section1[3]];
				delete B19Possibilities[Section1[4]];
				delete B19Possibilities[Section1[5]];
				delete B19Possibilities[Section1[6]];
				delete B19Possibilities[Section1[7]];
				delete B19Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B19PossibilitiesRemove(B19Possibilities, -1);
				
				
				
				solveBox = 19;
				SolveBox();
				break;
			}
			
			while(B20 < 1){
				function B20PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B20Possibilities[Row3[0]];
				delete B20Possibilities[Row3[1]];
				delete B20Possibilities[Row3[2]];
				delete B20Possibilities[Row3[3]];
				delete B20Possibilities[Row3[4]];
				delete B20Possibilities[Row3[5]];
				delete B20Possibilities[Row3[6]];
				delete B20Possibilities[Row3[7]];
				delete B20Possibilities[Row3[8]];
				
				delete B20Possibilities[Column2[0]];
				delete B20Possibilities[Column2[1]];
				delete B20Possibilities[Column2[2]];
				delete B20Possibilities[Column2[3]];
				delete B20Possibilities[Column2[4]];
				delete B20Possibilities[Column2[5]];
				delete B20Possibilities[Column2[6]];
				delete B20Possibilities[Column2[7]];
				delete B20Possibilities[Column2[8]];
				
				delete B20Possibilities[Section1[0]];
				delete B20Possibilities[Section1[1]];
				delete B20Possibilities[Section1[2]];
				delete B20Possibilities[Section1[3]];
				delete B20Possibilities[Section1[4]];
				delete B20Possibilities[Section1[5]];
				delete B20Possibilities[Section1[6]];
				delete B20Possibilities[Section1[7]];
				delete B20Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B20PossibilitiesRemove(B20Possibilities, -1);
				
				
				
				solveBox = 20;
				SolveBox();
				break;
			}
			
			
			while(B21 < 1){
				function B21PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B21Possibilities[Row3[0]];
				delete B21Possibilities[Row3[1]];
				delete B21Possibilities[Row3[2]];
				delete B21Possibilities[Row3[3]];
				delete B21Possibilities[Row3[4]];
				delete B21Possibilities[Row3[5]];
				delete B21Possibilities[Row3[6]];
				delete B21Possibilities[Row3[7]];
				delete B21Possibilities[Row3[8]];
				
				delete B21Possibilities[Column3[0]];
				delete B21Possibilities[Column3[1]];
				delete B21Possibilities[Column3[2]];
				delete B21Possibilities[Column3[3]];
				delete B21Possibilities[Column3[4]];
				delete B21Possibilities[Column3[5]];
				delete B21Possibilities[Column3[6]];
				delete B21Possibilities[Column3[7]];
				delete B21Possibilities[Column3[8]];
				
				delete B21Possibilities[Section1[0]];
				delete B21Possibilities[Section1[1]];
				delete B21Possibilities[Section1[2]];
				delete B21Possibilities[Section1[3]];
				delete B21Possibilities[Section1[4]];
				delete B21Possibilities[Section1[5]];
				delete B21Possibilities[Section1[6]];
				delete B21Possibilities[Section1[7]];
				delete B21Possibilities[Section1[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B21PossibilitiesRemove(B21Possibilities, -1);
				
				
				
				solveBox = 21;
				SolveBox();
				break;
			}
			
			while(B22 < 1){
				function B22PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B22Possibilities[Row3[0]];
				delete B22Possibilities[Row3[1]];
				delete B22Possibilities[Row3[2]];
				delete B22Possibilities[Row3[3]];
				delete B22Possibilities[Row3[4]];
				delete B22Possibilities[Row3[5]];
				delete B22Possibilities[Row3[6]];
				delete B22Possibilities[Row3[7]];
				delete B22Possibilities[Row3[8]];
				
				delete B22Possibilities[Column4[0]];
				delete B22Possibilities[Column4[1]];
				delete B22Possibilities[Column4[2]];
				delete B22Possibilities[Column4[3]];
				delete B22Possibilities[Column4[4]];
				delete B22Possibilities[Column4[5]];
				delete B22Possibilities[Column4[6]];
				delete B22Possibilities[Column4[7]];
				delete B22Possibilities[Column4[8]];
				
				delete B22Possibilities[Section2[0]];
				delete B22Possibilities[Section2[1]];
				delete B22Possibilities[Section2[2]];
				delete B22Possibilities[Section2[3]];
				delete B22Possibilities[Section2[4]];
				delete B22Possibilities[Section2[5]];
				delete B22Possibilities[Section2[6]];
				delete B22Possibilities[Section2[7]];
				delete B22Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B22PossibilitiesRemove(B22Possibilities, -1);
				
				
				
				solveBox = 22;
				SolveBox();
				break;
			}
			
			while(B23 < 1){
				function B23PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B23Possibilities[Row3[0]];
				delete B23Possibilities[Row3[1]];
				delete B23Possibilities[Row3[2]];
				delete B23Possibilities[Row3[3]];
				delete B23Possibilities[Row3[4]];
				delete B23Possibilities[Row3[5]];
				delete B23Possibilities[Row3[6]];
				delete B23Possibilities[Row3[7]];
				delete B23Possibilities[Row3[8]];
				
				delete B23Possibilities[Column5[0]];
				delete B23Possibilities[Column5[1]];
				delete B23Possibilities[Column5[2]];
				delete B23Possibilities[Column5[3]];
				delete B23Possibilities[Column5[4]];
				delete B23Possibilities[Column5[5]];
				delete B23Possibilities[Column5[6]];
				delete B23Possibilities[Column5[7]];
				delete B23Possibilities[Column5[8]];
				
				delete B23Possibilities[Section2[0]];
				delete B23Possibilities[Section2[1]];
				delete B23Possibilities[Section2[2]];
				delete B23Possibilities[Section2[3]];
				delete B23Possibilities[Section2[4]];
				delete B23Possibilities[Section2[5]];
				delete B23Possibilities[Section2[6]];
				delete B23Possibilities[Section2[7]];
				delete B23Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B23PossibilitiesRemove(B23Possibilities, -1);
				
				
				
				solveBox = 23;
				SolveBox();
				break;
			}
			
			while(B24 < 1){
				function B24PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B24Possibilities[Row3[0]];
				delete B24Possibilities[Row3[1]];
				delete B24Possibilities[Row3[2]];
				delete B24Possibilities[Row3[3]];
				delete B24Possibilities[Row3[4]];
				delete B24Possibilities[Row3[5]];
				delete B24Possibilities[Row3[6]];
				delete B24Possibilities[Row3[7]];
				delete B24Possibilities[Row3[8]];
				
				delete B24Possibilities[Column6[0]];
				delete B24Possibilities[Column6[1]];
				delete B24Possibilities[Column6[2]];
				delete B24Possibilities[Column6[3]];
				delete B24Possibilities[Column6[4]];
				delete B24Possibilities[Column6[5]];
				delete B24Possibilities[Column6[6]];
				delete B24Possibilities[Column6[7]];
				delete B24Possibilities[Column6[8]];
				
				delete B24Possibilities[Section2[0]];
				delete B24Possibilities[Section2[1]];
				delete B24Possibilities[Section2[2]];
				delete B24Possibilities[Section2[3]];
				delete B24Possibilities[Section2[4]];
				delete B24Possibilities[Section2[5]];
				delete B24Possibilities[Section2[6]];
				delete B24Possibilities[Section2[7]];
				delete B24Possibilities[Section2[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B24PossibilitiesRemove(B24Possibilities, -1);
				
				
				
				solveBox = 24;
				SolveBox();
				break;
			}
			
			while(B25 < 1){
				function B25PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B25Possibilities[Row3[0]];
				delete B25Possibilities[Row3[1]];
				delete B25Possibilities[Row3[2]];
				delete B25Possibilities[Row3[3]];
				delete B25Possibilities[Row3[4]];
				delete B25Possibilities[Row3[5]];
				delete B25Possibilities[Row3[6]];
				delete B25Possibilities[Row3[7]];
				delete B25Possibilities[Row3[8]];
				
				delete B25Possibilities[Column7[0]];
				delete B25Possibilities[Column7[1]];
				delete B25Possibilities[Column7[2]];
				delete B25Possibilities[Column7[3]];
				delete B25Possibilities[Column7[4]];
				delete B25Possibilities[Column7[5]];
				delete B25Possibilities[Column7[6]];
				delete B25Possibilities[Column7[7]];
				delete B25Possibilities[Column7[8]];
				
				delete B25Possibilities[Section3[0]];
				delete B25Possibilities[Section3[1]];
				delete B25Possibilities[Section3[2]];
				delete B25Possibilities[Section3[3]];
				delete B25Possibilities[Section3[4]];
				delete B25Possibilities[Section3[5]];
				delete B25Possibilities[Section3[6]];
				delete B25Possibilities[Section3[7]];
				delete B25Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B25PossibilitiesRemove(B25Possibilities, -1);
				
				
				
				solveBox = 25;
				SolveBox();
				break;
			}
			
			while(B26 < 1){
				function B26PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B26Possibilities[Row3[0]];
				delete B26Possibilities[Row3[1]];
				delete B26Possibilities[Row3[2]];
				delete B26Possibilities[Row3[3]];
				delete B26Possibilities[Row3[4]];
				delete B26Possibilities[Row3[5]];
				delete B26Possibilities[Row3[6]];
				delete B26Possibilities[Row3[7]];
				delete B26Possibilities[Row3[8]];
				
				delete B26Possibilities[Column8[0]];
				delete B26Possibilities[Column8[1]];
				delete B26Possibilities[Column8[2]];
				delete B26Possibilities[Column8[3]];
				delete B26Possibilities[Column8[4]];
				delete B26Possibilities[Column8[5]];
				delete B26Possibilities[Column8[6]];
				delete B26Possibilities[Column8[7]];
				delete B26Possibilities[Column8[8]];
				
				delete B26Possibilities[Section3[0]];
				delete B26Possibilities[Section3[1]];
				delete B26Possibilities[Section3[2]];
				delete B26Possibilities[Section3[3]];
				delete B26Possibilities[Section3[4]];
				delete B26Possibilities[Section3[5]];
				delete B26Possibilities[Section3[6]];
				delete B26Possibilities[Section3[7]];
				delete B26Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B26PossibilitiesRemove(B26Possibilities, -1);
				
				
				
				solveBox = 26;
				SolveBox();
				break;
			}
			
			while(B27 < 1){
				function B27PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B27Possibilities[Row3[0]];
				delete B27Possibilities[Row3[1]];
				delete B27Possibilities[Row3[2]];
				delete B27Possibilities[Row3[3]];
				delete B27Possibilities[Row3[4]];
				delete B27Possibilities[Row3[5]];
				delete B27Possibilities[Row3[6]];
				delete B27Possibilities[Row3[7]];
				delete B27Possibilities[Row3[8]];
				
				delete B27Possibilities[Column9[0]];
				delete B27Possibilities[Column9[1]];
				delete B27Possibilities[Column9[2]];
				delete B27Possibilities[Column9[3]];
				delete B27Possibilities[Column9[4]];
				delete B27Possibilities[Column9[5]];
				delete B27Possibilities[Column9[6]];
				delete B27Possibilities[Column9[7]];
				delete B27Possibilities[Column9[8]];
				
				delete B27Possibilities[Section3[0]];
				delete B27Possibilities[Section3[1]];
				delete B27Possibilities[Section3[2]];
				delete B27Possibilities[Section3[3]];
				delete B27Possibilities[Section3[4]];
				delete B27Possibilities[Section3[5]];
				delete B27Possibilities[Section3[6]];
				delete B27Possibilities[Section3[7]];
				delete B27Possibilities[Section3[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B27PossibilitiesRemove(B27Possibilities, -1);
				
				
				
				solveBox = 27;
				SolveBox();
				break;
			}
			
			while(B28 < 1){
				function B28PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B28Possibilities[Row4[0]];
				delete B28Possibilities[Row4[1]];
				delete B28Possibilities[Row4[2]];
				delete B28Possibilities[Row4[3]];
				delete B28Possibilities[Row4[4]];
				delete B28Possibilities[Row4[5]];
				delete B28Possibilities[Row4[6]];
				delete B28Possibilities[Row4[7]];
				delete B28Possibilities[Row4[8]];
				
				delete B28Possibilities[Column1[0]];
				delete B28Possibilities[Column1[1]];
				delete B28Possibilities[Column1[2]];
				delete B28Possibilities[Column1[3]];
				delete B28Possibilities[Column1[4]];
				delete B28Possibilities[Column1[5]];
				delete B28Possibilities[Column1[6]];
				delete B28Possibilities[Column1[7]];
				delete B28Possibilities[Column1[8]];
				
				delete B28Possibilities[Section4[0]];
				delete B28Possibilities[Section4[1]];
				delete B28Possibilities[Section4[2]];
				delete B28Possibilities[Section4[3]];
				delete B28Possibilities[Section4[4]];
				delete B28Possibilities[Section4[5]];
				delete B28Possibilities[Section4[6]];
				delete B28Possibilities[Section4[7]];
				delete B28Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B28PossibilitiesRemove(B28Possibilities, -1);
				
				
				
				solveBox = 28;
				SolveBox();
				break;
			}
			
			while(B29 < 1){
				function B29PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B29Possibilities[Row4[0]];
				delete B29Possibilities[Row4[1]];
				delete B29Possibilities[Row4[2]];
				delete B29Possibilities[Row4[3]];
				delete B29Possibilities[Row4[4]];
				delete B29Possibilities[Row4[5]];
				delete B29Possibilities[Row4[6]];
				delete B29Possibilities[Row4[7]];
				delete B29Possibilities[Row4[8]];
				
				delete B29Possibilities[Column2[0]];
				delete B29Possibilities[Column2[1]];
				delete B29Possibilities[Column2[2]];
				delete B29Possibilities[Column2[3]];
				delete B29Possibilities[Column2[4]];
				delete B29Possibilities[Column2[5]];
				delete B29Possibilities[Column2[6]];
				delete B29Possibilities[Column2[7]];
				delete B29Possibilities[Column2[8]];
				
				delete B29Possibilities[Section4[0]];
				delete B29Possibilities[Section4[1]];
				delete B29Possibilities[Section4[2]];
				delete B29Possibilities[Section4[3]];
				delete B29Possibilities[Section4[4]];
				delete B29Possibilities[Section4[5]];
				delete B29Possibilities[Section4[6]];
				delete B29Possibilities[Section4[7]];
				delete B29Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B29PossibilitiesRemove(B29Possibilities, -1);
				
				
				
				solveBox = 29;
				SolveBox();
				break;
			}
			
			while(B30 < 1){
				function B30PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B30Possibilities[Row4[0]];
				delete B30Possibilities[Row4[1]];
				delete B30Possibilities[Row4[2]];
				delete B30Possibilities[Row4[3]];
				delete B30Possibilities[Row4[4]];
				delete B30Possibilities[Row4[5]];
				delete B30Possibilities[Row4[6]];
				delete B30Possibilities[Row4[7]];
				delete B30Possibilities[Row4[8]];
				
				delete B30Possibilities[Column3[0]];
				delete B30Possibilities[Column3[1]];
				delete B30Possibilities[Column3[2]];
				delete B30Possibilities[Column3[3]];
				delete B30Possibilities[Column3[4]];
				delete B30Possibilities[Column3[5]];
				delete B30Possibilities[Column3[6]];
				delete B30Possibilities[Column3[7]];
				delete B30Possibilities[Column3[8]];
				
				delete B30Possibilities[Section4[0]];
				delete B30Possibilities[Section4[1]];
				delete B30Possibilities[Section4[2]];
				delete B30Possibilities[Section4[3]];
				delete B30Possibilities[Section4[4]];
				delete B30Possibilities[Section4[5]];
				delete B30Possibilities[Section4[6]];
				delete B30Possibilities[Section4[7]];
				delete B30Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B30PossibilitiesRemove(B30Possibilities, -1);
				
				
				
				solveBox = 30;
				SolveBox();
				break;
			}
			
			while(B31 < 1){
				function B31PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B31Possibilities[Row4[0]];
				delete B31Possibilities[Row4[1]];
				delete B31Possibilities[Row4[2]];
				delete B31Possibilities[Row4[3]];
				delete B31Possibilities[Row4[4]];
				delete B31Possibilities[Row4[5]];
				delete B31Possibilities[Row4[6]];
				delete B31Possibilities[Row4[7]];
				delete B31Possibilities[Row4[8]];
				
				delete B31Possibilities[Column4[0]];
				delete B31Possibilities[Column4[1]];
				delete B31Possibilities[Column4[2]];
				delete B31Possibilities[Column4[3]];
				delete B31Possibilities[Column4[4]];
				delete B31Possibilities[Column4[5]];
				delete B31Possibilities[Column4[6]];
				delete B31Possibilities[Column4[7]];
				delete B31Possibilities[Column4[8]];
				
				delete B31Possibilities[Section5[0]];
				delete B31Possibilities[Section5[1]];
				delete B31Possibilities[Section5[2]];
				delete B31Possibilities[Section5[3]];
				delete B31Possibilities[Section5[4]];
				delete B31Possibilities[Section5[5]];
				delete B31Possibilities[Section5[6]];
				delete B31Possibilities[Section5[7]];
				delete B31Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B31PossibilitiesRemove(B31Possibilities, -1);
				
				
				
				solveBox = 31;
				SolveBox();
				break;
			}
			
			while(B32 < 1){
				function B32PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B32Possibilities[Row4[0]];
				delete B32Possibilities[Row4[1]];
				delete B32Possibilities[Row4[2]];
				delete B32Possibilities[Row4[3]];
				delete B32Possibilities[Row4[4]];
				delete B32Possibilities[Row4[5]];
				delete B32Possibilities[Row4[6]];
				delete B32Possibilities[Row4[7]];
				delete B32Possibilities[Row4[8]];
				
				delete B32Possibilities[Column5[0]];
				delete B32Possibilities[Column5[1]];
				delete B32Possibilities[Column5[2]];
				delete B32Possibilities[Column5[3]];
				delete B32Possibilities[Column5[4]];
				delete B32Possibilities[Column5[5]];
				delete B32Possibilities[Column5[6]];
				delete B32Possibilities[Column5[7]];
				delete B32Possibilities[Column5[8]];
				
				delete B32Possibilities[Section5[0]];
				delete B32Possibilities[Section5[1]];
				delete B32Possibilities[Section5[2]];
				delete B32Possibilities[Section5[3]];
				delete B32Possibilities[Section5[4]];
				delete B32Possibilities[Section5[5]];
				delete B32Possibilities[Section5[6]];
				delete B32Possibilities[Section5[7]];
				delete B32Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B32PossibilitiesRemove(B32Possibilities, -1);
				
				
				
				solveBox = 32;
				SolveBox();
				break;
			}
			
			while(B33 < 1){
				function B33PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B33Possibilities[Row4[0]];
				delete B33Possibilities[Row4[1]];
				delete B33Possibilities[Row4[2]];
				delete B33Possibilities[Row4[3]];
				delete B33Possibilities[Row4[4]];
				delete B33Possibilities[Row4[5]];
				delete B33Possibilities[Row4[6]];
				delete B33Possibilities[Row4[7]];
				delete B33Possibilities[Row4[8]];
				
				delete B33Possibilities[Column6[0]];
				delete B33Possibilities[Column6[1]];
				delete B33Possibilities[Column6[2]];
				delete B33Possibilities[Column6[3]];
				delete B33Possibilities[Column6[4]];
				delete B33Possibilities[Column6[5]];
				delete B33Possibilities[Column6[6]];
				delete B33Possibilities[Column6[7]];
				delete B33Possibilities[Column6[8]];
				
				delete B33Possibilities[Section5[0]];
				delete B33Possibilities[Section5[1]];
				delete B33Possibilities[Section5[2]];
				delete B33Possibilities[Section5[3]];
				delete B33Possibilities[Section5[4]];
				delete B33Possibilities[Section5[5]];
				delete B33Possibilities[Section5[6]];
				delete B33Possibilities[Section5[7]];
				delete B33Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B33PossibilitiesRemove(B33Possibilities, -1);
				
				
				
				solveBox = 33;
				SolveBox();
				break;
			}
			
			while(B34 < 1){
				function B34PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B34Possibilities[Row4[0]];
				delete B34Possibilities[Row4[1]];
				delete B34Possibilities[Row4[2]];
				delete B34Possibilities[Row4[3]];
				delete B34Possibilities[Row4[4]];
				delete B34Possibilities[Row4[5]];
				delete B34Possibilities[Row4[6]];
				delete B34Possibilities[Row4[7]];
				delete B34Possibilities[Row4[8]];
				
				delete B34Possibilities[Column7[0]];
				delete B34Possibilities[Column7[1]];
				delete B34Possibilities[Column7[2]];
				delete B34Possibilities[Column7[3]];
				delete B34Possibilities[Column7[4]];
				delete B34Possibilities[Column7[5]];
				delete B34Possibilities[Column7[6]];
				delete B34Possibilities[Column7[7]];
				delete B34Possibilities[Column7[8]];
				
				delete B34Possibilities[Section6[0]];
				delete B34Possibilities[Section6[1]];
				delete B34Possibilities[Section6[2]];
				delete B34Possibilities[Section6[3]];
				delete B34Possibilities[Section6[4]];
				delete B34Possibilities[Section6[5]];
				delete B34Possibilities[Section6[6]];
				delete B34Possibilities[Section6[7]];
				delete B34Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B34PossibilitiesRemove(B34Possibilities, -1);
				
				
				
				solveBox = 34;
				SolveBox();
				break;
			}
			
			while(B35 < 1){
				function B35PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B35Possibilities[Row4[0]];
				delete B35Possibilities[Row4[1]];
				delete B35Possibilities[Row4[2]];
				delete B35Possibilities[Row4[3]];
				delete B35Possibilities[Row4[4]];
				delete B35Possibilities[Row4[5]];
				delete B35Possibilities[Row4[6]];
				delete B35Possibilities[Row4[7]];
				delete B35Possibilities[Row4[8]];
				
				delete B35Possibilities[Column8[0]];
				delete B35Possibilities[Column8[1]];
				delete B35Possibilities[Column8[2]];
				delete B35Possibilities[Column8[3]];
				delete B35Possibilities[Column8[4]];
				delete B35Possibilities[Column8[5]];
				delete B35Possibilities[Column8[6]];
				delete B35Possibilities[Column8[7]];
				delete B35Possibilities[Column8[8]];
				
				delete B35Possibilities[Section6[0]];
				delete B35Possibilities[Section6[1]];
				delete B35Possibilities[Section6[2]];
				delete B35Possibilities[Section6[3]];
				delete B35Possibilities[Section6[4]];
				delete B35Possibilities[Section6[5]];
				delete B35Possibilities[Section6[6]];
				delete B35Possibilities[Section6[7]];
				delete B35Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B35PossibilitiesRemove(B35Possibilities, -1);
				
				
				
				solveBox = 35;
				SolveBox();
				break;
			}
			
			while(B36 < 1){
				function B36PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B36Possibilities[Row4[0]];
				delete B36Possibilities[Row4[1]];
				delete B36Possibilities[Row4[2]];
				delete B36Possibilities[Row4[3]];
				delete B36Possibilities[Row4[4]];
				delete B36Possibilities[Row4[5]];
				delete B36Possibilities[Row4[6]];
				delete B36Possibilities[Row4[7]];
				delete B36Possibilities[Row4[8]];
				
				delete B36Possibilities[Column9[0]];
				delete B36Possibilities[Column9[1]];
				delete B36Possibilities[Column9[2]];
				delete B36Possibilities[Column9[3]];
				delete B36Possibilities[Column9[4]];
				delete B36Possibilities[Column9[5]];
				delete B36Possibilities[Column9[6]];
				delete B36Possibilities[Column9[7]];
				delete B36Possibilities[Column9[8]];
				
				delete B36Possibilities[Section6[0]];
				delete B36Possibilities[Section6[1]];
				delete B36Possibilities[Section6[2]];
				delete B36Possibilities[Section6[3]];
				delete B36Possibilities[Section6[4]];
				delete B36Possibilities[Section6[5]];
				delete B36Possibilities[Section6[6]];
				delete B36Possibilities[Section6[7]];
				delete B36Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B36PossibilitiesRemove(B36Possibilities, -1);
				
				
				
				solveBox = 36;
				SolveBox();
				break;
			}
			
			while(B37 < 1){
				function B37PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B37Possibilities[Row5[0]];
				delete B37Possibilities[Row5[1]];
				delete B37Possibilities[Row5[2]];
				delete B37Possibilities[Row5[3]];
				delete B37Possibilities[Row5[4]];
				delete B37Possibilities[Row5[5]];
				delete B37Possibilities[Row5[6]];
				delete B37Possibilities[Row5[7]];
				delete B37Possibilities[Row5[8]];
				
				delete B37Possibilities[Column1[0]];
				delete B37Possibilities[Column1[1]];
				delete B37Possibilities[Column1[2]];
				delete B37Possibilities[Column1[3]];
				delete B37Possibilities[Column1[4]];
				delete B37Possibilities[Column1[5]];
				delete B37Possibilities[Column1[6]];
				delete B37Possibilities[Column1[7]];
				delete B37Possibilities[Column1[8]];
				
				delete B37Possibilities[Section4[0]];
				delete B37Possibilities[Section4[1]];
				delete B37Possibilities[Section4[2]];
				delete B37Possibilities[Section4[3]];
				delete B37Possibilities[Section4[4]];
				delete B37Possibilities[Section4[5]];
				delete B37Possibilities[Section4[6]];
				delete B37Possibilities[Section4[7]];
				delete B37Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B37PossibilitiesRemove(B37Possibilities, -1);
				
				
				
				solveBox = 37;
				SolveBox();
				break;
			}
			
			while(B38 < 1){
				function B38PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B38Possibilities[Row5[0]];
				delete B38Possibilities[Row5[1]];
				delete B38Possibilities[Row5[2]];
				delete B38Possibilities[Row5[3]];
				delete B38Possibilities[Row5[4]];
				delete B38Possibilities[Row5[5]];
				delete B38Possibilities[Row5[6]];
				delete B38Possibilities[Row5[7]];
				delete B38Possibilities[Row5[8]];
				
				delete B38Possibilities[Column2[0]];
				delete B38Possibilities[Column2[1]];
				delete B38Possibilities[Column2[2]];
				delete B38Possibilities[Column2[3]];
				delete B38Possibilities[Column2[4]];
				delete B38Possibilities[Column2[5]];
				delete B38Possibilities[Column2[6]];
				delete B38Possibilities[Column2[7]];
				delete B38Possibilities[Column2[8]];
				
				delete B38Possibilities[Section4[0]];
				delete B38Possibilities[Section4[1]];
				delete B38Possibilities[Section4[2]];
				delete B38Possibilities[Section4[3]];
				delete B38Possibilities[Section4[4]];
				delete B38Possibilities[Section4[5]];
				delete B38Possibilities[Section4[6]];
				delete B38Possibilities[Section4[7]];
				delete B38Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B38PossibilitiesRemove(B38Possibilities, -1);
				
				
				
				solveBox = 38;
				SolveBox();
				break;
			}
			
			while(B39 < 1){
				function B39PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B39Possibilities[Row5[0]];
				delete B39Possibilities[Row5[1]];
				delete B39Possibilities[Row5[2]];
				delete B39Possibilities[Row5[3]];
				delete B39Possibilities[Row5[4]];
				delete B39Possibilities[Row5[5]];
				delete B39Possibilities[Row5[6]];
				delete B39Possibilities[Row5[7]];
				delete B39Possibilities[Row5[8]];
				
				delete B39Possibilities[Column3[0]];
				delete B39Possibilities[Column3[1]];
				delete B39Possibilities[Column3[2]];
				delete B39Possibilities[Column3[3]];
				delete B39Possibilities[Column3[4]];
				delete B39Possibilities[Column3[5]];
				delete B39Possibilities[Column3[6]];
				delete B39Possibilities[Column3[7]];
				delete B39Possibilities[Column3[8]];
				
				delete B39Possibilities[Section4[0]];
				delete B39Possibilities[Section4[1]];
				delete B39Possibilities[Section4[2]];
				delete B39Possibilities[Section4[3]];
				delete B39Possibilities[Section4[4]];
				delete B39Possibilities[Section4[5]];
				delete B39Possibilities[Section4[6]];
				delete B39Possibilities[Section4[7]];
				delete B39Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B39PossibilitiesRemove(B39Possibilities, -1);
				
				
				
				solveBox = 39;
				SolveBox();
				break;
			}
			
			while(B40 < 1){
				function B40PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B40Possibilities[Row5[0]];
				delete B40Possibilities[Row5[1]];
				delete B40Possibilities[Row5[2]];
				delete B40Possibilities[Row5[3]];
				delete B40Possibilities[Row5[4]];
				delete B40Possibilities[Row5[5]];
				delete B40Possibilities[Row5[6]];
				delete B40Possibilities[Row5[7]];
				delete B40Possibilities[Row5[8]];
				
				delete B40Possibilities[Column4[0]];
				delete B40Possibilities[Column4[1]];
				delete B40Possibilities[Column4[2]];
				delete B40Possibilities[Column4[3]];
				delete B40Possibilities[Column4[4]];
				delete B40Possibilities[Column4[5]];
				delete B40Possibilities[Column4[6]];
				delete B40Possibilities[Column4[7]];
				delete B40Possibilities[Column4[8]];
				
				delete B40Possibilities[Section5[0]];
				delete B40Possibilities[Section5[1]];
				delete B40Possibilities[Section5[2]];
				delete B40Possibilities[Section5[3]];
				delete B40Possibilities[Section5[4]];
				delete B40Possibilities[Section5[5]];
				delete B40Possibilities[Section5[6]];
				delete B40Possibilities[Section5[7]];
				delete B40Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B40PossibilitiesRemove(B40Possibilities, -1);
				
				
				
				solveBox = 40;
				SolveBox();
				break;
			}
			
			while(B41 < 1){
				function B41PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B41Possibilities[Row5[0]];
				delete B41Possibilities[Row5[1]];
				delete B41Possibilities[Row5[2]];
				delete B41Possibilities[Row5[3]];
				delete B41Possibilities[Row5[4]];
				delete B41Possibilities[Row5[5]];
				delete B41Possibilities[Row5[6]];
				delete B41Possibilities[Row5[7]];
				delete B41Possibilities[Row5[8]];
				
				delete B41Possibilities[Column5[0]];
				delete B41Possibilities[Column5[1]];
				delete B41Possibilities[Column5[2]];
				delete B41Possibilities[Column5[3]];
				delete B41Possibilities[Column5[4]];
				delete B41Possibilities[Column5[5]];
				delete B41Possibilities[Column5[6]];
				delete B41Possibilities[Column5[7]];
				delete B41Possibilities[Column5[8]];
				
				delete B41Possibilities[Section5[0]];
				delete B41Possibilities[Section5[1]];
				delete B41Possibilities[Section5[2]];
				delete B41Possibilities[Section5[3]];
				delete B41Possibilities[Section5[4]];
				delete B41Possibilities[Section5[5]];
				delete B41Possibilities[Section5[6]];
				delete B41Possibilities[Section5[7]];
				delete B41Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B41PossibilitiesRemove(B41Possibilities, -1);
				
				
				
				solveBox = 41;
				SolveBox();
				break;
			}
			
			while(B42 < 1){
				function B42PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B42Possibilities[Row5[0]];
				delete B42Possibilities[Row5[1]];
				delete B42Possibilities[Row5[2]];
				delete B42Possibilities[Row5[3]];
				delete B42Possibilities[Row5[4]];
				delete B42Possibilities[Row5[5]];
				delete B42Possibilities[Row5[6]];
				delete B42Possibilities[Row5[7]];
				delete B42Possibilities[Row5[8]];
				
				delete B42Possibilities[Column6[0]];
				delete B42Possibilities[Column6[1]];
				delete B42Possibilities[Column6[2]];
				delete B42Possibilities[Column6[3]];
				delete B42Possibilities[Column6[4]];
				delete B42Possibilities[Column6[5]];
				delete B42Possibilities[Column6[6]];
				delete B42Possibilities[Column6[7]];
				delete B42Possibilities[Column6[8]];
				
				delete B42Possibilities[Section5[0]];
				delete B42Possibilities[Section5[1]];
				delete B42Possibilities[Section5[2]];
				delete B42Possibilities[Section5[3]];
				delete B42Possibilities[Section5[4]];
				delete B42Possibilities[Section5[5]];
				delete B42Possibilities[Section5[6]];
				delete B42Possibilities[Section5[7]];
				delete B42Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B42PossibilitiesRemove(B42Possibilities, -1);
				
				
				
				solveBox = 42;
				SolveBox();
				break;
			}
			
			while(B43 < 1){
				function B43PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B43Possibilities[Row5[0]];
				delete B43Possibilities[Row5[1]];
				delete B43Possibilities[Row5[2]];
				delete B43Possibilities[Row5[3]];
				delete B43Possibilities[Row5[4]];
				delete B43Possibilities[Row5[5]];
				delete B43Possibilities[Row5[6]];
				delete B43Possibilities[Row5[7]];
				delete B43Possibilities[Row5[8]];
				
				delete B43Possibilities[Column7[0]];
				delete B43Possibilities[Column7[1]];
				delete B43Possibilities[Column7[2]];
				delete B43Possibilities[Column7[3]];
				delete B43Possibilities[Column7[4]];
				delete B43Possibilities[Column7[5]];
				delete B43Possibilities[Column7[6]];
				delete B43Possibilities[Column7[7]];
				delete B43Possibilities[Column7[8]];
				
				delete B43Possibilities[Section6[0]];
				delete B43Possibilities[Section6[1]];
				delete B43Possibilities[Section6[2]];
				delete B43Possibilities[Section6[3]];
				delete B43Possibilities[Section6[4]];
				delete B43Possibilities[Section6[5]];
				delete B43Possibilities[Section6[6]];
				delete B43Possibilities[Section6[7]];
				delete B43Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B43PossibilitiesRemove(B43Possibilities, -1);
				
				
				
				solveBox = 43;
				SolveBox();
				break;
			}
			
			while(B44 < 1){
				function B44PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B44Possibilities[Row5[0]];
				delete B44Possibilities[Row5[1]];
				delete B44Possibilities[Row5[2]];
				delete B44Possibilities[Row5[3]];
				delete B44Possibilities[Row5[4]];
				delete B44Possibilities[Row5[5]];
				delete B44Possibilities[Row5[6]];
				delete B44Possibilities[Row5[7]];
				delete B44Possibilities[Row5[8]];
				
				delete B44Possibilities[Column8[0]];
				delete B44Possibilities[Column8[1]];
				delete B44Possibilities[Column8[2]];
				delete B44Possibilities[Column8[3]];
				delete B44Possibilities[Column8[4]];
				delete B44Possibilities[Column8[5]];
				delete B44Possibilities[Column8[6]];
				delete B44Possibilities[Column8[7]];
				delete B44Possibilities[Column8[8]];
				
				delete B44Possibilities[Section6[0]];
				delete B44Possibilities[Section6[1]];
				delete B44Possibilities[Section6[2]];
				delete B44Possibilities[Section6[3]];
				delete B44Possibilities[Section6[4]];
				delete B44Possibilities[Section6[5]];
				delete B44Possibilities[Section6[6]];
				delete B44Possibilities[Section6[7]];
				delete B44Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B44PossibilitiesRemove(B44Possibilities, -1);
				
				
				
				solveBox = 44;
				SolveBox();
				break;
			}
			
			while(B45 < 1){
				function B45PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B45Possibilities[Row5[0]];
				delete B45Possibilities[Row5[1]];
				delete B45Possibilities[Row5[2]];
				delete B45Possibilities[Row5[3]];
				delete B45Possibilities[Row5[4]];
				delete B45Possibilities[Row5[5]];
				delete B45Possibilities[Row5[6]];
				delete B45Possibilities[Row5[7]];
				delete B45Possibilities[Row5[8]];
				
				delete B45Possibilities[Column9[0]];
				delete B45Possibilities[Column9[1]];
				delete B45Possibilities[Column9[2]];
				delete B45Possibilities[Column9[3]];
				delete B45Possibilities[Column9[4]];
				delete B45Possibilities[Column9[5]];
				delete B45Possibilities[Column9[6]];
				delete B45Possibilities[Column9[7]];
				delete B45Possibilities[Column9[8]];
				
				delete B45Possibilities[Section6[0]];
				delete B45Possibilities[Section6[1]];
				delete B45Possibilities[Section6[2]];
				delete B45Possibilities[Section6[3]];
				delete B45Possibilities[Section6[4]];
				delete B45Possibilities[Section6[5]];
				delete B45Possibilities[Section6[6]];
				delete B45Possibilities[Section6[7]];
				delete B45Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B45PossibilitiesRemove(B45Possibilities, -1);
				
				
				
				solveBox = 45;
				SolveBox();
				break;
			}
			
			while(B46 < 1){
				function B46PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B46Possibilities[Row6[0]];
				delete B46Possibilities[Row6[1]];
				delete B46Possibilities[Row6[2]];
				delete B46Possibilities[Row6[3]];
				delete B46Possibilities[Row6[4]];
				delete B46Possibilities[Row6[5]];
				delete B46Possibilities[Row6[6]];
				delete B46Possibilities[Row6[7]];
				delete B46Possibilities[Row6[8]];
				
				delete B46Possibilities[Column1[0]];
				delete B46Possibilities[Column1[1]];
				delete B46Possibilities[Column1[2]];
				delete B46Possibilities[Column1[3]];
				delete B46Possibilities[Column1[4]];
				delete B46Possibilities[Column1[5]];
				delete B46Possibilities[Column1[6]];
				delete B46Possibilities[Column1[7]];
				delete B46Possibilities[Column1[8]];
				
				delete B46Possibilities[Section4[0]];
				delete B46Possibilities[Section4[1]];
				delete B46Possibilities[Section4[2]];
				delete B46Possibilities[Section4[3]];
				delete B46Possibilities[Section4[4]];
				delete B46Possibilities[Section4[5]];
				delete B46Possibilities[Section4[6]];
				delete B46Possibilities[Section4[7]];
				delete B46Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B46PossibilitiesRemove(B46Possibilities, -1);
				
				
				
				solveBox = 46;
				SolveBox();
				break;
			}
			
			while(B47 < 1){
				function B47PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B47Possibilities[Row6[0]];
				delete B47Possibilities[Row6[1]];
				delete B47Possibilities[Row6[2]];
				delete B47Possibilities[Row6[3]];
				delete B47Possibilities[Row6[4]];
				delete B47Possibilities[Row6[5]];
				delete B47Possibilities[Row6[6]];
				delete B47Possibilities[Row6[7]];
				delete B47Possibilities[Row6[8]];
				
				delete B47Possibilities[Column2[0]];
				delete B47Possibilities[Column2[1]];
				delete B47Possibilities[Column2[2]];
				delete B47Possibilities[Column2[3]];
				delete B47Possibilities[Column2[4]];
				delete B47Possibilities[Column2[5]];
				delete B47Possibilities[Column2[6]];
				delete B47Possibilities[Column2[7]];
				delete B47Possibilities[Column2[8]];
				
				delete B47Possibilities[Section4[0]];
				delete B47Possibilities[Section4[1]];
				delete B47Possibilities[Section4[2]];
				delete B47Possibilities[Section4[3]];
				delete B47Possibilities[Section4[4]];
				delete B47Possibilities[Section4[5]];
				delete B47Possibilities[Section4[6]];
				delete B47Possibilities[Section4[7]];
				delete B47Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B47PossibilitiesRemove(B47Possibilities, -1);
				
				
				
				solveBox = 47;
				SolveBox();
				break;
			}
			
			while(B48 < 1){
				function B48PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B48Possibilities[Row6[0]];
				delete B48Possibilities[Row6[1]];
				delete B48Possibilities[Row6[2]];
				delete B48Possibilities[Row6[3]];
				delete B48Possibilities[Row6[4]];
				delete B48Possibilities[Row6[5]];
				delete B48Possibilities[Row6[6]];
				delete B48Possibilities[Row6[7]];
				delete B48Possibilities[Row6[8]];
				
				delete B48Possibilities[Column3[0]];
				delete B48Possibilities[Column3[1]];
				delete B48Possibilities[Column3[2]];
				delete B48Possibilities[Column3[3]];
				delete B48Possibilities[Column3[4]];
				delete B48Possibilities[Column3[5]];
				delete B48Possibilities[Column3[6]];
				delete B48Possibilities[Column3[7]];
				delete B48Possibilities[Column3[8]];
				
				delete B48Possibilities[Section4[0]];
				delete B48Possibilities[Section4[1]];
				delete B48Possibilities[Section4[2]];
				delete B48Possibilities[Section4[3]];
				delete B48Possibilities[Section4[4]];
				delete B48Possibilities[Section4[5]];
				delete B48Possibilities[Section4[6]];
				delete B48Possibilities[Section4[7]];
				delete B48Possibilities[Section4[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B48PossibilitiesRemove(B48Possibilities, -1);
				
				
				
				solveBox = 48;
				SolveBox();
				break;
			}
			
			while(B49 < 1){
				function B49PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B49Possibilities[Row6[0]];
				delete B49Possibilities[Row6[1]];
				delete B49Possibilities[Row6[2]];
				delete B49Possibilities[Row6[3]];
				delete B49Possibilities[Row6[4]];
				delete B49Possibilities[Row6[5]];
				delete B49Possibilities[Row6[6]];
				delete B49Possibilities[Row6[7]];
				delete B49Possibilities[Row6[8]];
				
				delete B49Possibilities[Column4[0]];
				delete B49Possibilities[Column4[1]];
				delete B49Possibilities[Column4[2]];
				delete B49Possibilities[Column4[3]];
				delete B49Possibilities[Column4[4]];
				delete B49Possibilities[Column4[5]];
				delete B49Possibilities[Column4[6]];
				delete B49Possibilities[Column4[7]];
				delete B49Possibilities[Column4[8]];
				
				delete B49Possibilities[Section5[0]];
				delete B49Possibilities[Section5[1]];
				delete B49Possibilities[Section5[2]];
				delete B49Possibilities[Section5[3]];
				delete B49Possibilities[Section5[4]];
				delete B49Possibilities[Section5[5]];
				delete B49Possibilities[Section5[6]];
				delete B49Possibilities[Section5[7]];
				delete B49Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B49PossibilitiesRemove(B49Possibilities, -1);
				
				
				
				solveBox = 49;
				SolveBox();
				break;
			}
			
			while(B50 < 1){
				function B50PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B50Possibilities[Row6[0]];
				delete B50Possibilities[Row6[1]];
				delete B50Possibilities[Row6[2]];
				delete B50Possibilities[Row6[3]];
				delete B50Possibilities[Row6[4]];
				delete B50Possibilities[Row6[5]];
				delete B50Possibilities[Row6[6]];
				delete B50Possibilities[Row6[7]];
				delete B50Possibilities[Row6[8]];
				
				delete B50Possibilities[Column5[0]];
				delete B50Possibilities[Column5[1]];
				delete B50Possibilities[Column5[2]];
				delete B50Possibilities[Column5[3]];
				delete B50Possibilities[Column5[4]];
				delete B50Possibilities[Column5[5]];
				delete B50Possibilities[Column5[6]];
				delete B50Possibilities[Column5[7]];
				delete B50Possibilities[Column5[8]];
				
				delete B50Possibilities[Section5[0]];
				delete B50Possibilities[Section5[1]];
				delete B50Possibilities[Section5[2]];
				delete B50Possibilities[Section5[3]];
				delete B50Possibilities[Section5[4]];
				delete B50Possibilities[Section5[5]];
				delete B50Possibilities[Section5[6]];
				delete B50Possibilities[Section5[7]];
				delete B50Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B50PossibilitiesRemove(B50Possibilities, -1);
				
				
				
				solveBox = 50;
				SolveBox();
				break;
			}
			
			while(B51 < 1){
				function B51PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B51Possibilities[Row6[0]];
				delete B51Possibilities[Row6[1]];
				delete B51Possibilities[Row6[2]];
				delete B51Possibilities[Row6[3]];
				delete B51Possibilities[Row6[4]];
				delete B51Possibilities[Row6[5]];
				delete B51Possibilities[Row6[6]];
				delete B51Possibilities[Row6[7]];
				delete B51Possibilities[Row6[8]];
				
				delete B51Possibilities[Column6[0]];
				delete B51Possibilities[Column6[1]];
				delete B51Possibilities[Column6[2]];
				delete B51Possibilities[Column6[3]];
				delete B51Possibilities[Column6[4]];
				delete B51Possibilities[Column6[5]];
				delete B51Possibilities[Column6[6]];
				delete B51Possibilities[Column6[7]];
				delete B51Possibilities[Column6[8]];
				
				delete B51Possibilities[Section5[0]];
				delete B51Possibilities[Section5[1]];
				delete B51Possibilities[Section5[2]];
				delete B51Possibilities[Section5[3]];
				delete B51Possibilities[Section5[4]];
				delete B51Possibilities[Section5[5]];
				delete B51Possibilities[Section5[6]];
				delete B51Possibilities[Section5[7]];
				delete B51Possibilities[Section5[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B51PossibilitiesRemove(B51Possibilities, -1);
				
				
				
				solveBox = 51;
				SolveBox();
				break;
			}
			
			while(B52 < 1){
				function B52PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B52Possibilities[Row6[0]];
				delete B52Possibilities[Row6[1]];
				delete B52Possibilities[Row6[2]];
				delete B52Possibilities[Row6[3]];
				delete B52Possibilities[Row6[4]];
				delete B52Possibilities[Row6[5]];
				delete B52Possibilities[Row6[6]];
				delete B52Possibilities[Row6[7]];
				delete B52Possibilities[Row6[8]];
				
				delete B52Possibilities[Column7[0]];
				delete B52Possibilities[Column7[1]];
				delete B52Possibilities[Column7[2]];
				delete B52Possibilities[Column7[3]];
				delete B52Possibilities[Column7[4]];
				delete B52Possibilities[Column7[5]];
				delete B52Possibilities[Column7[6]];
				delete B52Possibilities[Column7[7]];
				delete B52Possibilities[Column7[8]];
				
				delete B52Possibilities[Section6[0]];
				delete B52Possibilities[Section6[1]];
				delete B52Possibilities[Section6[2]];
				delete B52Possibilities[Section6[3]];
				delete B52Possibilities[Section6[4]];
				delete B52Possibilities[Section6[5]];
				delete B52Possibilities[Section6[6]];
				delete B52Possibilities[Section6[7]];
				delete B52Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B52PossibilitiesRemove(B52Possibilities, -1);
				
				
				
				solveBox = 52;
				SolveBox();
				break;
			}
			
			while(B53 < 1){
				function B53PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B53Possibilities[Row6[0]];
				delete B53Possibilities[Row6[1]];
				delete B53Possibilities[Row6[2]];
				delete B53Possibilities[Row6[3]];
				delete B53Possibilities[Row6[4]];
				delete B53Possibilities[Row6[5]];
				delete B53Possibilities[Row6[6]];
				delete B53Possibilities[Row6[7]];
				delete B53Possibilities[Row6[8]];
				
				delete B53Possibilities[Column8[0]];
				delete B53Possibilities[Column8[1]];
				delete B53Possibilities[Column8[2]];
				delete B53Possibilities[Column8[3]];
				delete B53Possibilities[Column8[4]];
				delete B53Possibilities[Column8[5]];
				delete B53Possibilities[Column8[6]];
				delete B53Possibilities[Column8[7]];
				delete B53Possibilities[Column8[8]];
				
				delete B53Possibilities[Section6[0]];
				delete B53Possibilities[Section6[1]];
				delete B53Possibilities[Section6[2]];
				delete B53Possibilities[Section6[3]];
				delete B53Possibilities[Section6[4]];
				delete B53Possibilities[Section6[5]];
				delete B53Possibilities[Section6[6]];
				delete B53Possibilities[Section6[7]];
				delete B53Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B53PossibilitiesRemove(B53Possibilities, -1);
				
				
				
				solveBox = 53;
				SolveBox();
				break;
			}
			
			while(B54 < 1){
				function B54PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B54Possibilities[Row6[0]];
				delete B54Possibilities[Row6[1]];
				delete B54Possibilities[Row6[2]];
				delete B54Possibilities[Row6[3]];
				delete B54Possibilities[Row6[4]];
				delete B54Possibilities[Row6[5]];
				delete B54Possibilities[Row6[6]];
				delete B54Possibilities[Row6[7]];
				delete B54Possibilities[Row6[8]];
				
				delete B54Possibilities[Column9[0]];
				delete B54Possibilities[Column9[1]];
				delete B54Possibilities[Column9[2]];
				delete B54Possibilities[Column9[3]];
				delete B54Possibilities[Column9[4]];
				delete B54Possibilities[Column9[5]];
				delete B54Possibilities[Column9[6]];
				delete B54Possibilities[Column9[7]];
				delete B54Possibilities[Column9[8]];
				
				delete B54Possibilities[Section6[0]];
				delete B54Possibilities[Section6[1]];
				delete B54Possibilities[Section6[2]];
				delete B54Possibilities[Section6[3]];
				delete B54Possibilities[Section6[4]];
				delete B54Possibilities[Section6[5]];
				delete B54Possibilities[Section6[6]];
				delete B54Possibilities[Section6[7]];
				delete B54Possibilities[Section6[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B54PossibilitiesRemove(B54Possibilities, -1);
				
				
				
				solveBox = 54;
				SolveBox();
				break;
			}
			
			
			while(B55 < 1){
				function B55PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B55Possibilities[Row7[0]];
				delete B55Possibilities[Row7[1]];
				delete B55Possibilities[Row7[2]];
				delete B55Possibilities[Row7[3]];
				delete B55Possibilities[Row7[4]];
				delete B55Possibilities[Row7[5]];
				delete B55Possibilities[Row7[6]];
				delete B55Possibilities[Row7[7]];
				delete B55Possibilities[Row7[8]];
				
				delete B55Possibilities[Column1[0]];
				delete B55Possibilities[Column1[1]];
				delete B55Possibilities[Column1[2]];
				delete B55Possibilities[Column1[3]];
				delete B55Possibilities[Column1[4]];
				delete B55Possibilities[Column1[5]];
				delete B55Possibilities[Column1[6]];
				delete B55Possibilities[Column1[7]];
				delete B55Possibilities[Column1[8]];
				
				delete B55Possibilities[Section7[0]];
				delete B55Possibilities[Section7[1]];
				delete B55Possibilities[Section7[2]];
				delete B55Possibilities[Section7[3]];
				delete B55Possibilities[Section7[4]];
				delete B55Possibilities[Section7[5]];
				delete B55Possibilities[Section7[6]];
				delete B55Possibilities[Section7[7]];
				delete B55Possibilities[Section7[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B55PossibilitiesRemove(B55Possibilities, -1);
				
				
				
				solveBox = 55;
				SolveBox();
				break;
			}
			
			while(B56 < 1){
				function B56PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B56Possibilities[Row7[0]];
				delete B56Possibilities[Row7[1]];
				delete B56Possibilities[Row7[2]];
				delete B56Possibilities[Row7[3]];
				delete B56Possibilities[Row7[4]];
				delete B56Possibilities[Row7[5]];
				delete B56Possibilities[Row7[6]];
				delete B56Possibilities[Row7[7]];
				delete B56Possibilities[Row7[8]];
				
				delete B56Possibilities[Column2[0]];
				delete B56Possibilities[Column2[1]];
				delete B56Possibilities[Column2[2]];
				delete B56Possibilities[Column2[3]];
				delete B56Possibilities[Column2[4]];
				delete B56Possibilities[Column2[5]];
				delete B56Possibilities[Column2[6]];
				delete B56Possibilities[Column2[7]];
				delete B56Possibilities[Column2[8]];
				
				delete B56Possibilities[Section7[0]];
				delete B56Possibilities[Section7[1]];
				delete B56Possibilities[Section7[2]];
				delete B56Possibilities[Section7[3]];
				delete B56Possibilities[Section7[4]];
				delete B56Possibilities[Section7[5]];
				delete B56Possibilities[Section7[6]];
				delete B56Possibilities[Section7[7]];
				delete B56Possibilities[Section7[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B56PossibilitiesRemove(B56Possibilities, -1);
				
				
				
				solveBox = 56;
				SolveBox();
				break;
			}
			
			while(B57 < 1){
				function B57PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B57Possibilities[Row7[0]];
				delete B57Possibilities[Row7[1]];
				delete B57Possibilities[Row7[2]];
				delete B57Possibilities[Row7[3]];
				delete B57Possibilities[Row7[4]];
				delete B57Possibilities[Row7[5]];
				delete B57Possibilities[Row7[6]];
				delete B57Possibilities[Row7[7]];
				delete B57Possibilities[Row7[8]];
				
				delete B57Possibilities[Column3[0]];
				delete B57Possibilities[Column3[1]];
				delete B57Possibilities[Column3[2]];
				delete B57Possibilities[Column3[3]];
				delete B57Possibilities[Column3[4]];
				delete B57Possibilities[Column3[5]];
				delete B57Possibilities[Column3[6]];
				delete B57Possibilities[Column3[7]];
				delete B57Possibilities[Column3[8]];
				
				delete B57Possibilities[Section7[0]];
				delete B57Possibilities[Section7[1]];
				delete B57Possibilities[Section7[2]];
				delete B57Possibilities[Section7[3]];
				delete B57Possibilities[Section7[4]];
				delete B57Possibilities[Section7[5]];
				delete B57Possibilities[Section7[6]];
				delete B57Possibilities[Section7[7]];
				delete B57Possibilities[Section7[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B57PossibilitiesRemove(B57Possibilities, -1);
				
				
				
				solveBox = 57;
				SolveBox();
				break;
			}
			
			while(B58 < 1){
				function B58PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B58Possibilities[Row7[0]];
				delete B58Possibilities[Row7[1]];
				delete B58Possibilities[Row7[2]];
				delete B58Possibilities[Row7[3]];
				delete B58Possibilities[Row7[4]];
				delete B58Possibilities[Row7[5]];
				delete B58Possibilities[Row7[6]];
				delete B58Possibilities[Row7[7]];
				delete B58Possibilities[Row7[8]];
				
				delete B58Possibilities[Column4[0]];
				delete B58Possibilities[Column4[1]];
				delete B58Possibilities[Column4[2]];
				delete B58Possibilities[Column4[3]];
				delete B58Possibilities[Column4[4]];
				delete B58Possibilities[Column4[5]];
				delete B58Possibilities[Column4[6]];
				delete B58Possibilities[Column4[7]];
				delete B58Possibilities[Column4[8]];
				
				delete B58Possibilities[Section8[0]];
				delete B58Possibilities[Section8[1]];
				delete B58Possibilities[Section8[2]];
				delete B58Possibilities[Section8[3]];
				delete B58Possibilities[Section8[4]];
				delete B58Possibilities[Section8[5]];
				delete B58Possibilities[Section8[6]];
				delete B58Possibilities[Section8[7]];
				delete B58Possibilities[Section8[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B58PossibilitiesRemove(B58Possibilities, -1);
				
				
				
				solveBox = 58;
				SolveBox();
				break;
			}
			
			while(B59 < 1){
				function B59PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B59Possibilities[Row7[0]];
				delete B59Possibilities[Row7[1]];
				delete B59Possibilities[Row7[2]];
				delete B59Possibilities[Row7[3]];
				delete B59Possibilities[Row7[4]];
				delete B59Possibilities[Row7[5]];
				delete B59Possibilities[Row7[6]];
				delete B59Possibilities[Row7[7]];
				delete B59Possibilities[Row7[8]];
				
				delete B59Possibilities[Column5[0]];
				delete B59Possibilities[Column5[1]];
				delete B59Possibilities[Column5[2]];
				delete B59Possibilities[Column5[3]];
				delete B59Possibilities[Column5[4]];
				delete B59Possibilities[Column5[5]];
				delete B59Possibilities[Column5[6]];
				delete B59Possibilities[Column5[7]];
				delete B59Possibilities[Column5[8]];
				
				delete B59Possibilities[Section8[0]];
				delete B59Possibilities[Section8[1]];
				delete B59Possibilities[Section8[2]];
				delete B59Possibilities[Section8[3]];
				delete B59Possibilities[Section8[4]];
				delete B59Possibilities[Section8[5]];
				delete B59Possibilities[Section8[6]];
				delete B59Possibilities[Section8[7]];
				delete B59Possibilities[Section8[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B59PossibilitiesRemove(B59Possibilities, -1);
				
				
				
				solveBox = 59;
				SolveBox();
				break;
			}
			
			while(B60 < 1){
				function B60PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B60Possibilities[Row7[0]];
				delete B60Possibilities[Row7[1]];
				delete B60Possibilities[Row7[2]];
				delete B60Possibilities[Row7[3]];
				delete B60Possibilities[Row7[4]];
				delete B60Possibilities[Row7[5]];
				delete B60Possibilities[Row7[6]];
				delete B60Possibilities[Row7[7]];
				delete B60Possibilities[Row7[8]];
				
				delete B60Possibilities[Column6[0]];
				delete B60Possibilities[Column6[1]];
				delete B60Possibilities[Column6[2]];
				delete B60Possibilities[Column6[3]];
				delete B60Possibilities[Column6[4]];
				delete B60Possibilities[Column6[5]];
				delete B60Possibilities[Column6[6]];
				delete B60Possibilities[Column6[7]];
				delete B60Possibilities[Column6[8]];
				
				delete B60Possibilities[Section8[0]];
				delete B60Possibilities[Section8[1]];
				delete B60Possibilities[Section8[2]];
				delete B60Possibilities[Section8[3]];
				delete B60Possibilities[Section8[4]];
				delete B60Possibilities[Section8[5]];
				delete B60Possibilities[Section8[6]];
				delete B60Possibilities[Section8[7]];
				delete B60Possibilities[Section8[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B60PossibilitiesRemove(B60Possibilities, -1);
				
				
				
				solveBox = 60;
				SolveBox();
				break;
			}
			
			while(B61 < 1){
				function B61PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B61Possibilities[Row7[0]];
				delete B61Possibilities[Row7[1]];
				delete B61Possibilities[Row7[2]];
				delete B61Possibilities[Row7[3]];
				delete B61Possibilities[Row7[4]];
				delete B61Possibilities[Row7[5]];
				delete B61Possibilities[Row7[6]];
				delete B61Possibilities[Row7[7]];
				delete B61Possibilities[Row7[8]];
				
				delete B61Possibilities[Column7[0]];
				delete B61Possibilities[Column7[1]];
				delete B61Possibilities[Column7[2]];
				delete B61Possibilities[Column7[3]];
				delete B61Possibilities[Column7[4]];
				delete B61Possibilities[Column7[5]];
				delete B61Possibilities[Column7[6]];
				delete B61Possibilities[Column7[7]];
				delete B61Possibilities[Column7[8]];
				
				delete B61Possibilities[Section9[0]];
				delete B61Possibilities[Section9[1]];
				delete B61Possibilities[Section9[2]];
				delete B61Possibilities[Section9[3]];
				delete B61Possibilities[Section9[4]];
				delete B61Possibilities[Section9[5]];
				delete B61Possibilities[Section9[6]];
				delete B61Possibilities[Section9[7]];
				delete B61Possibilities[Section9[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B61PossibilitiesRemove(B61Possibilities, -1);
				
				
				
				solveBox = 61;
				SolveBox();
				break;
			}
			
			while(B62 < 1){
				function B62PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B62Possibilities[Row7[0]];
				delete B62Possibilities[Row7[1]];
				delete B62Possibilities[Row7[2]];
				delete B62Possibilities[Row7[3]];
				delete B62Possibilities[Row7[4]];
				delete B62Possibilities[Row7[5]];
				delete B62Possibilities[Row7[6]];
				delete B62Possibilities[Row7[7]];
				delete B62Possibilities[Row7[8]];
				
				delete B62Possibilities[Column8[0]];
				delete B62Possibilities[Column8[1]];
				delete B62Possibilities[Column8[2]];
				delete B62Possibilities[Column8[3]];
				delete B62Possibilities[Column8[4]];
				delete B62Possibilities[Column8[5]];
				delete B62Possibilities[Column8[6]];
				delete B62Possibilities[Column8[7]];
				delete B62Possibilities[Column8[8]];
				
				delete B62Possibilities[Section9[0]];
				delete B62Possibilities[Section9[1]];
				delete B62Possibilities[Section9[2]];
				delete B62Possibilities[Section9[3]];
				delete B62Possibilities[Section9[4]];
				delete B62Possibilities[Section9[5]];
				delete B62Possibilities[Section9[6]];
				delete B62Possibilities[Section9[7]];
				delete B62Possibilities[Section9[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B62PossibilitiesRemove(B62Possibilities, -1);
				
				
				
				solveBox = 62;
				SolveBox();
				break;
			}
			
			while(B63 < 1){
				function B63PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B63Possibilities[Row7[0]];
				delete B63Possibilities[Row7[1]];
				delete B63Possibilities[Row7[2]];
				delete B63Possibilities[Row7[3]];
				delete B63Possibilities[Row7[4]];
				delete B63Possibilities[Row7[5]];
				delete B63Possibilities[Row7[6]];
				delete B63Possibilities[Row7[7]];
				delete B63Possibilities[Row7[8]];
				
				delete B63Possibilities[Column9[0]];
				delete B63Possibilities[Column9[1]];
				delete B63Possibilities[Column9[2]];
				delete B63Possibilities[Column9[3]];
				delete B63Possibilities[Column9[4]];
				delete B63Possibilities[Column9[5]];
				delete B63Possibilities[Column9[6]];
				delete B63Possibilities[Column9[7]];
				delete B63Possibilities[Column9[8]];
				
				delete B63Possibilities[Section9[0]];
				delete B63Possibilities[Section9[1]];
				delete B63Possibilities[Section9[2]];
				delete B63Possibilities[Section9[3]];
				delete B63Possibilities[Section9[4]];
				delete B63Possibilities[Section9[5]];
				delete B63Possibilities[Section9[6]];
				delete B63Possibilities[Section9[7]];
				delete B63Possibilities[Section9[8]];
				//* alert(B9Possibilities);
				
				
				//* this removes the -1 that comes when there are blank spaces
				BoxResult = B63PossibilitiesRemove(B63Possibilities, -1);
				
				
				
				solveBox = 63;
				SolveBox();
				break;
			}
			
			while(B64 < 1){
				function B64PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B64Possibilities[Row8[0]];
				delete B64Possibilities[Row8[1]];
				delete B64Possibilities[Row8[2]];
				delete B64Possibilities[Row8[3]];
				delete B64Possibilities[Row8[4]];
				delete B64Possibilities[Row8[5]];
				delete B64Possibilities[Row8[6]];
				delete B64Possibilities[Row8[7]];
				delete B64Possibilities[Row8[8]];
				
				delete B64Possibilities[Column1[0]];
				delete B64Possibilities[Column1[1]];
				delete B64Possibilities[Column1[2]];
				delete B64Possibilities[Column1[3]];
				delete B64Possibilities[Column1[4]];
				delete B64Possibilities[Column1[5]];
				delete B64Possibilities[Column1[6]];
				delete B64Possibilities[Column1[7]];
				delete B64Possibilities[Column1[8]];
				
				delete B64Possibilities[Section7[0]];
				delete B64Possibilities[Section7[1]];
				delete B64Possibilities[Section7[2]];
				delete B64Possibilities[Section7[3]];
				delete B64Possibilities[Section7[4]];
				delete B64Possibilities[Section7[5]];
				delete B64Possibilities[Section7[6]];
				delete B64Possibilities[Section7[7]];
				delete B64Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B64PossibilitiesRemove(B64Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 64;
				SolveBox();
				break;
			}
			
			while(B65 < 1){
				function B65PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B65Possibilities[Row8[0]];
				delete B65Possibilities[Row8[1]];
				delete B65Possibilities[Row8[2]];
				delete B65Possibilities[Row8[3]];
				delete B65Possibilities[Row8[4]];
				delete B65Possibilities[Row8[5]];
				delete B65Possibilities[Row8[6]];
				delete B65Possibilities[Row8[7]];
				delete B65Possibilities[Row8[8]];
				
				delete B65Possibilities[Column2[0]];
				delete B65Possibilities[Column2[1]];
				delete B65Possibilities[Column2[2]];
				delete B65Possibilities[Column2[3]];
				delete B65Possibilities[Column2[4]];
				delete B65Possibilities[Column2[5]];
				delete B65Possibilities[Column2[6]];
				delete B65Possibilities[Column2[7]];
				delete B65Possibilities[Column2[8]];
				
				delete B65Possibilities[Section7[0]];
				delete B65Possibilities[Section7[1]];
				delete B65Possibilities[Section7[2]];
				delete B65Possibilities[Section7[3]];
				delete B65Possibilities[Section7[4]];
				delete B65Possibilities[Section7[5]];
				delete B65Possibilities[Section7[6]];
				delete B65Possibilities[Section7[7]];
				delete B65Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B65PossibilitiesRemove(B65Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 65;
				SolveBox();
				break;
			}
			
			while(B66 < 1){
				function B66PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B66Possibilities[Row8[0]];
				delete B66Possibilities[Row8[1]];
				delete B66Possibilities[Row8[2]];
				delete B66Possibilities[Row8[3]];
				delete B66Possibilities[Row8[4]];
				delete B66Possibilities[Row8[5]];
				delete B66Possibilities[Row8[6]];
				delete B66Possibilities[Row8[7]];
				delete B66Possibilities[Row8[8]];
				
				delete B66Possibilities[Column3[0]];
				delete B66Possibilities[Column3[1]];
				delete B66Possibilities[Column3[2]];
				delete B66Possibilities[Column3[3]];
				delete B66Possibilities[Column3[4]];
				delete B66Possibilities[Column3[5]];
				delete B66Possibilities[Column3[6]];
				delete B66Possibilities[Column3[7]];
				delete B66Possibilities[Column3[8]];
				
				delete B66Possibilities[Section7[0]];
				delete B66Possibilities[Section7[1]];
				delete B66Possibilities[Section7[2]];
				delete B66Possibilities[Section7[3]];
				delete B66Possibilities[Section7[4]];
				delete B66Possibilities[Section7[5]];
				delete B66Possibilities[Section7[6]];
				delete B66Possibilities[Section7[7]];
				delete B66Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B66PossibilitiesRemove(B66Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 66;
				SolveBox();
				break;
			}
			
			while(B67 < 1){
				function B67PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B67Possibilities[Row8[0]];
				delete B67Possibilities[Row8[1]];
				delete B67Possibilities[Row8[2]];
				delete B67Possibilities[Row8[3]];
				delete B67Possibilities[Row8[4]];
				delete B67Possibilities[Row8[5]];
				delete B67Possibilities[Row8[6]];
				delete B67Possibilities[Row8[7]];
				delete B67Possibilities[Row8[8]];
				
				delete B67Possibilities[Column4[0]];
				delete B67Possibilities[Column4[1]];
				delete B67Possibilities[Column4[2]];
				delete B67Possibilities[Column4[3]];
				delete B67Possibilities[Column4[4]];
				delete B67Possibilities[Column4[5]];
				delete B67Possibilities[Column4[6]];
				delete B67Possibilities[Column4[7]];
				delete B67Possibilities[Column4[8]];
				
				delete B67Possibilities[Section8[0]];
				delete B67Possibilities[Section8[1]];
				delete B67Possibilities[Section8[2]];
				delete B67Possibilities[Section8[3]];
				delete B67Possibilities[Section8[4]];
				delete B67Possibilities[Section8[5]];
				delete B67Possibilities[Section8[6]];
				delete B67Possibilities[Section8[7]];
				delete B67Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B67PossibilitiesRemove(B67Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 67;
				SolveBox();
				break;
			}
			
			while(B68 < 1){
				function B68PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B68Possibilities[Row8[0]];
				delete B68Possibilities[Row8[1]];
				delete B68Possibilities[Row8[2]];
				delete B68Possibilities[Row8[3]];
				delete B68Possibilities[Row8[4]];
				delete B68Possibilities[Row8[5]];
				delete B68Possibilities[Row8[6]];
				delete B68Possibilities[Row8[7]];
				delete B68Possibilities[Row8[8]];
				
				delete B68Possibilities[Column5[0]];
				delete B68Possibilities[Column5[1]];
				delete B68Possibilities[Column5[2]];
				delete B68Possibilities[Column5[3]];
				delete B68Possibilities[Column5[4]];
				delete B68Possibilities[Column5[5]];
				delete B68Possibilities[Column5[6]];
				delete B68Possibilities[Column5[7]];
				delete B68Possibilities[Column5[8]];
				
				delete B68Possibilities[Section8[0]];
				delete B68Possibilities[Section8[1]];
				delete B68Possibilities[Section8[2]];
				delete B68Possibilities[Section8[3]];
				delete B68Possibilities[Section8[4]];
				delete B68Possibilities[Section8[5]];
				delete B68Possibilities[Section8[6]];
				delete B68Possibilities[Section8[7]];
				delete B68Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B68PossibilitiesRemove(B68Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 68;
				SolveBox();
				break;
			}
			
			while(B69 < 1){
				function B69PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B69Possibilities[Row8[0]];
				delete B69Possibilities[Row8[1]];
				delete B69Possibilities[Row8[2]];
				delete B69Possibilities[Row8[3]];
				delete B69Possibilities[Row8[4]];
				delete B69Possibilities[Row8[5]];
				delete B69Possibilities[Row8[6]];
				delete B69Possibilities[Row8[7]];
				delete B69Possibilities[Row8[8]];
				
				delete B69Possibilities[Column6[0]];
				delete B69Possibilities[Column6[1]];
				delete B69Possibilities[Column6[2]];
				delete B69Possibilities[Column6[3]];
				delete B69Possibilities[Column6[4]];
				delete B69Possibilities[Column6[5]];
				delete B69Possibilities[Column6[6]];
				delete B69Possibilities[Column6[7]];
				delete B69Possibilities[Column6[8]];
				
				delete B69Possibilities[Section8[0]];
				delete B69Possibilities[Section8[1]];
				delete B69Possibilities[Section8[2]];
				delete B69Possibilities[Section8[3]];
				delete B69Possibilities[Section8[4]];
				delete B69Possibilities[Section8[5]];
				delete B69Possibilities[Section8[6]];
				delete B69Possibilities[Section8[7]];
				delete B69Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B69PossibilitiesRemove(B69Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 69;
				SolveBox();
				break;
			}
			
			while(B70 < 1){
				function B70PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B70Possibilities[Row8[0]];
				delete B70Possibilities[Row8[1]];
				delete B70Possibilities[Row8[2]];
				delete B70Possibilities[Row8[3]];
				delete B70Possibilities[Row8[4]];
				delete B70Possibilities[Row8[5]];
				delete B70Possibilities[Row8[6]];
				delete B70Possibilities[Row8[7]];
				delete B70Possibilities[Row8[8]];
				
				delete B70Possibilities[Column7[0]];
				delete B70Possibilities[Column7[1]];
				delete B70Possibilities[Column7[2]];
				delete B70Possibilities[Column7[3]];
				delete B70Possibilities[Column7[4]];
				delete B70Possibilities[Column7[5]];
				delete B70Possibilities[Column7[6]];
				delete B70Possibilities[Column7[7]];
				delete B70Possibilities[Column7[8]];
				
				delete B70Possibilities[Section9[0]];
				delete B70Possibilities[Section9[1]];
				delete B70Possibilities[Section9[2]];
				delete B70Possibilities[Section9[3]];
				delete B70Possibilities[Section9[4]];
				delete B70Possibilities[Section9[5]];
				delete B70Possibilities[Section9[6]];
				delete B70Possibilities[Section9[7]];
				delete B70Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B70PossibilitiesRemove(B70Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 70;
				SolveBox();
				break;
			}
			
			while(B71 < 1){
				function B71PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B71Possibilities[Row8[0]];
				delete B71Possibilities[Row8[1]];
				delete B71Possibilities[Row8[2]];
				delete B71Possibilities[Row8[3]];
				delete B71Possibilities[Row8[4]];
				delete B71Possibilities[Row8[5]];
				delete B71Possibilities[Row8[6]];
				delete B71Possibilities[Row8[7]];
				delete B71Possibilities[Row8[8]];
				
				delete B71Possibilities[Column8[0]];
				delete B71Possibilities[Column8[1]];
				delete B71Possibilities[Column8[2]];
				delete B71Possibilities[Column8[3]];
				delete B71Possibilities[Column8[4]];
				delete B71Possibilities[Column8[5]];
				delete B71Possibilities[Column8[6]];
				delete B71Possibilities[Column8[7]];
				delete B71Possibilities[Column8[8]];
				
				delete B71Possibilities[Section9[0]];
				delete B71Possibilities[Section9[1]];
				delete B71Possibilities[Section9[2]];
				delete B71Possibilities[Section9[3]];
				delete B71Possibilities[Section9[4]];
				delete B71Possibilities[Section9[5]];
				delete B71Possibilities[Section9[6]];
				delete B71Possibilities[Section9[7]];
				delete B71Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B71PossibilitiesRemove(B71Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 71;
				SolveBox();
				break;
			}
			
			while(B72 < 1){
				function B72PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B72Possibilities[Row7[0]];
				delete B72Possibilities[Row7[1]];
				delete B72Possibilities[Row7[2]];
				delete B72Possibilities[Row7[3]];
				delete B72Possibilities[Row7[4]];
				delete B72Possibilities[Row7[5]];
				delete B72Possibilities[Row7[6]];
				delete B72Possibilities[Row7[7]];
				delete B72Possibilities[Row7[8]];
				
				delete B72Possibilities[Column9[0]];
				delete B72Possibilities[Column9[1]];
				delete B72Possibilities[Column9[2]];
				delete B72Possibilities[Column9[3]];
				delete B72Possibilities[Column9[4]];
				delete B72Possibilities[Column9[5]];
				delete B72Possibilities[Column9[6]];
				delete B72Possibilities[Column9[7]];
				delete B72Possibilities[Column9[8]];
				
				delete B72Possibilities[Section9[0]];
				delete B72Possibilities[Section9[1]];
				delete B72Possibilities[Section9[2]];
				delete B72Possibilities[Section9[3]];
				delete B72Possibilities[Section9[4]];
				delete B72Possibilities[Section9[5]];
				delete B72Possibilities[Section9[6]];
				delete B72Possibilities[Section9[7]];
				delete B72Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B72PossibilitiesRemove(B72Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 72;
				SolveBox();
				break;
			}
			
			while(B73 < 1){
				function B73PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B73Possibilities[Row9[0]];
				delete B73Possibilities[Row9[1]];
				delete B73Possibilities[Row9[2]];
				delete B73Possibilities[Row9[3]];
				delete B73Possibilities[Row9[4]];
				delete B73Possibilities[Row9[5]];
				delete B73Possibilities[Row9[6]];
				delete B73Possibilities[Row9[7]];
				delete B73Possibilities[Row9[8]];
				
				delete B73Possibilities[Column1[0]];
				delete B73Possibilities[Column1[1]];
				delete B73Possibilities[Column1[2]];
				delete B73Possibilities[Column1[3]];
				delete B73Possibilities[Column1[4]];
				delete B73Possibilities[Column1[5]];
				delete B73Possibilities[Column1[6]];
				delete B73Possibilities[Column1[7]];
				delete B73Possibilities[Column1[8]];
				
				delete B73Possibilities[Section7[0]];
				delete B73Possibilities[Section7[1]];
				delete B73Possibilities[Section7[2]];
				delete B73Possibilities[Section7[3]];
				delete B73Possibilities[Section7[4]];
				delete B73Possibilities[Section7[5]];
				delete B73Possibilities[Section7[6]];
				delete B73Possibilities[Section7[7]];
				delete B73Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B73PossibilitiesRemove(B73Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 73;
				SolveBox();
				break;
			}
			
			while(B74 < 1){
				function B74PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B74Possibilities[Row9[0]];
				delete B74Possibilities[Row9[1]];
				delete B74Possibilities[Row9[2]];
				delete B74Possibilities[Row9[3]];
				delete B74Possibilities[Row9[4]];
				delete B74Possibilities[Row9[5]];
				delete B74Possibilities[Row9[6]];
				delete B74Possibilities[Row9[7]];
				delete B74Possibilities[Row9[8]];
				
				delete B74Possibilities[Column2[0]];
				delete B74Possibilities[Column2[1]];
				delete B74Possibilities[Column2[2]];
				delete B74Possibilities[Column2[3]];
				delete B74Possibilities[Column2[4]];
				delete B74Possibilities[Column2[5]];
				delete B74Possibilities[Column2[6]];
				delete B74Possibilities[Column2[7]];
				delete B74Possibilities[Column2[8]];
				
				delete B74Possibilities[Section7[0]];
				delete B74Possibilities[Section7[1]];
				delete B74Possibilities[Section7[2]];
				delete B74Possibilities[Section7[3]];
				delete B74Possibilities[Section7[4]];
				delete B74Possibilities[Section7[5]];
				delete B74Possibilities[Section7[6]];
				delete B74Possibilities[Section7[7]];
				delete B74Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B74PossibilitiesRemove(B74Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 74;
				SolveBox();
				break;
			}
			
			while(B75 < 1){
				function B75PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B75Possibilities[Row9[0]];
				delete B75Possibilities[Row9[1]];
				delete B75Possibilities[Row9[2]];
				delete B75Possibilities[Row9[3]];
				delete B75Possibilities[Row9[4]];
				delete B75Possibilities[Row9[5]];
				delete B75Possibilities[Row9[6]];
				delete B75Possibilities[Row9[7]];
				delete B75Possibilities[Row9[8]];
				
				delete B75Possibilities[Column3[0]];
				delete B75Possibilities[Column3[1]];
				delete B75Possibilities[Column3[2]];
				delete B75Possibilities[Column3[3]];
				delete B75Possibilities[Column3[4]];
				delete B75Possibilities[Column3[5]];
				delete B75Possibilities[Column3[6]];
				delete B75Possibilities[Column3[7]];
				delete B75Possibilities[Column3[8]];
				
				delete B75Possibilities[Section7[0]];
				delete B75Possibilities[Section7[1]];
				delete B75Possibilities[Section7[2]];
				delete B75Possibilities[Section7[3]];
				delete B75Possibilities[Section7[4]];
				delete B75Possibilities[Section7[5]];
				delete B75Possibilities[Section7[6]];
				delete B75Possibilities[Section7[7]];
				delete B75Possibilities[Section7[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B75PossibilitiesRemove(B75Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 75;
				SolveBox();
				break;
			}
			
			while(B76 < 1){
				function B76PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B76Possibilities[Row9[0]];
				delete B76Possibilities[Row9[1]];
				delete B76Possibilities[Row9[2]];
				delete B76Possibilities[Row9[3]];
				delete B76Possibilities[Row9[4]];
				delete B76Possibilities[Row9[5]];
				delete B76Possibilities[Row9[6]];
				delete B76Possibilities[Row9[7]];
				delete B76Possibilities[Row9[8]];
				
				delete B76Possibilities[Column4[0]];
				delete B76Possibilities[Column4[1]];
				delete B76Possibilities[Column4[2]];
				delete B76Possibilities[Column4[3]];
				delete B76Possibilities[Column4[4]];
				delete B76Possibilities[Column4[5]];
				delete B76Possibilities[Column4[6]];
				delete B76Possibilities[Column4[7]];
				delete B76Possibilities[Column4[8]];
				
				delete B76Possibilities[Section8[0]];
				delete B76Possibilities[Section8[1]];
				delete B76Possibilities[Section8[2]];
				delete B76Possibilities[Section8[3]];
				delete B76Possibilities[Section8[4]];
				delete B76Possibilities[Section8[5]];
				delete B76Possibilities[Section8[6]];
				delete B76Possibilities[Section8[7]];
				delete B76Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B76PossibilitiesRemove(B76Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 76;
				SolveBox();
				break;
			}
			
			while(B77 < 1){
				function B77PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B77Possibilities[Row9[0]];
				delete B77Possibilities[Row9[1]];
				delete B77Possibilities[Row9[2]];
				delete B77Possibilities[Row9[3]];
				delete B77Possibilities[Row9[4]];
				delete B77Possibilities[Row9[5]];
				delete B77Possibilities[Row9[6]];
				delete B77Possibilities[Row9[7]];
				delete B77Possibilities[Row9[8]];
				
				delete B77Possibilities[Column5[0]];
				delete B77Possibilities[Column5[1]];
				delete B77Possibilities[Column5[2]];
				delete B77Possibilities[Column5[3]];
				delete B77Possibilities[Column5[4]];
				delete B77Possibilities[Column5[5]];
				delete B77Possibilities[Column5[6]];
				delete B77Possibilities[Column5[7]];
				delete B77Possibilities[Column5[8]];
				
				delete B77Possibilities[Section8[0]];
				delete B77Possibilities[Section8[1]];
				delete B77Possibilities[Section8[2]];
				delete B77Possibilities[Section8[3]];
				delete B77Possibilities[Section8[4]];
				delete B77Possibilities[Section8[5]];
				delete B77Possibilities[Section8[6]];
				delete B77Possibilities[Section8[7]];
				delete B77Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B77PossibilitiesRemove(B77Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 77;
				SolveBox();
				break;
			}
			
			while(B78 < 1){
				function B78PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B78Possibilities[Row9[0]];
				delete B78Possibilities[Row9[1]];
				delete B78Possibilities[Row9[2]];
				delete B78Possibilities[Row9[3]];
				delete B78Possibilities[Row9[4]];
				delete B78Possibilities[Row9[5]];
				delete B78Possibilities[Row9[6]];
				delete B78Possibilities[Row9[7]];
				delete B78Possibilities[Row9[8]];
				
				delete B78Possibilities[Column6[0]];
				delete B78Possibilities[Column6[1]];
				delete B78Possibilities[Column6[2]];
				delete B78Possibilities[Column6[3]];
				delete B78Possibilities[Column6[4]];
				delete B78Possibilities[Column6[5]];
				delete B78Possibilities[Column6[6]];
				delete B78Possibilities[Column6[7]];
				delete B78Possibilities[Column6[8]];
				
				delete B78Possibilities[Section8[0]];
				delete B78Possibilities[Section8[1]];
				delete B78Possibilities[Section8[2]];
				delete B78Possibilities[Section8[3]];
				delete B78Possibilities[Section8[4]];
				delete B78Possibilities[Section8[5]];
				delete B78Possibilities[Section8[6]];
				delete B78Possibilities[Section8[7]];
				delete B78Possibilities[Section8[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B78PossibilitiesRemove(B78Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 78;
				SolveBox();
				break;
			}
			
			while(B79 < 1){
				function B79PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B79Possibilities[Row9[0]];
				delete B79Possibilities[Row9[1]];
				delete B79Possibilities[Row9[2]];
				delete B79Possibilities[Row9[3]];
				delete B79Possibilities[Row9[4]];
				delete B79Possibilities[Row9[5]];
				delete B79Possibilities[Row9[6]];
				delete B79Possibilities[Row9[7]];
				delete B79Possibilities[Row9[8]];
				
				delete B79Possibilities[Column7[0]];
				delete B79Possibilities[Column7[1]];
				delete B79Possibilities[Column7[2]];
				delete B79Possibilities[Column7[3]];
				delete B79Possibilities[Column7[4]];
				delete B79Possibilities[Column7[5]];
				delete B79Possibilities[Column7[6]];
				delete B79Possibilities[Column7[7]];
				delete B79Possibilities[Column7[8]];
				
				delete B79Possibilities[Section9[0]];
				delete B79Possibilities[Section9[1]];
				delete B79Possibilities[Section9[2]];
				delete B79Possibilities[Section9[3]];
				delete B79Possibilities[Section9[4]];
				delete B79Possibilities[Section9[5]];
				delete B79Possibilities[Section9[6]];
				delete B79Possibilities[Section9[7]];
				delete B79Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B79PossibilitiesRemove(B79Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 79;
				SolveBox();
				break;
			}
			
			while(B80 < 1){
				function B80PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B80Possibilities[Row9[0]];
				delete B80Possibilities[Row9[1]];
				delete B80Possibilities[Row9[2]];
				delete B80Possibilities[Row9[3]];
				delete B80Possibilities[Row9[4]];
				delete B80Possibilities[Row9[5]];
				delete B80Possibilities[Row9[6]];
				delete B80Possibilities[Row9[7]];
				delete B80Possibilities[Row9[8]];
				
				delete B80Possibilities[Column8[0]];
				delete B80Possibilities[Column8[1]];
				delete B80Possibilities[Column8[2]];
				delete B80Possibilities[Column8[3]];
				delete B80Possibilities[Column8[4]];
				delete B80Possibilities[Column8[5]];
				delete B80Possibilities[Column8[6]];
				delete B80Possibilities[Column8[7]];
				delete B80Possibilities[Column8[8]];
				
				delete B80Possibilities[Section9[0]];
				delete B80Possibilities[Section9[1]];
				delete B80Possibilities[Section9[2]];
				delete B80Possibilities[Section9[3]];
				delete B80Possibilities[Section9[4]];
				delete B80Possibilities[Section9[5]];
				delete B80Possibilities[Section9[6]];
				delete B80Possibilities[Section9[7]];
				delete B80Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B80PossibilitiesRemove(B80Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 80;
				SolveBox();
				break;
			}
			
			while(B81 < 1){
				function B81PossibilitiesRemove(arr, value) {
					return arr.filter(function(ele){
						return ele != value; 
					});
				}
				
				
				
				
				//* This makes each item in the row/column/sections array equal to the boxs possibilities
				//*	alert(Section1);
				delete B81Possibilities[Row9[0]];
				delete B81Possibilities[Row9[1]];
				delete B81Possibilities[Row9[2]];
				delete B81Possibilities[Row9[3]];
				delete B81Possibilities[Row9[4]];
				delete B81Possibilities[Row9[5]];
				delete B81Possibilities[Row9[6]];
				delete B81Possibilities[Row9[7]];
				delete B81Possibilities[Row9[8]];
				
				delete B81Possibilities[Column9[0]];
				delete B81Possibilities[Column9[1]];
				delete B81Possibilities[Column9[2]];
				delete B81Possibilities[Column9[3]];
				delete B81Possibilities[Column9[4]];
				delete B81Possibilities[Column9[5]];
				delete B81Possibilities[Column9[6]];
				delete B81Possibilities[Column9[7]];
				delete B81Possibilities[Column9[8]];
				
				delete B81Possibilities[Section9[0]];
				delete B81Possibilities[Section9[1]];
				delete B81Possibilities[Section9[2]];
				delete B81Possibilities[Section9[3]];
				delete B81Possibilities[Section9[4]];
				delete B81Possibilities[Section9[5]];
				delete B81Possibilities[Section9[6]];
				delete B81Possibilities[Section9[7]];
				delete B81Possibilities[Section9[8]];
				//* alert(B1Possibilities);
				
				
				//*this removes the -1 that comes when there are blank spaces
				BoxResult = B81PossibilitiesRemove(B81Possibilities, -1);
				//* alert(BoxResult);
				
				
				solveBox = 81;
				SolveBox();
				break;
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			function SolveBox(){
				if(solveBox == 1 && BoxResult.length == 1){
					document.getElementsByClassName('box1')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 2 && BoxResult.length == 1){
					document.getElementsByClassName('box2')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 3 && BoxResult.length == 1){
					document.getElementsByClassName('box3')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 4 && BoxResult.length == 1){
					document.getElementsByClassName('box4')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 5 && BoxResult.length == 1){
					document.getElementsByClassName('box5')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 6 && BoxResult.length == 1){
					document.getElementsByClassName('box6')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 7 && BoxResult.length == 1){
					document.getElementsByClassName('box7')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 8 && BoxResult.length == 1){
					document.getElementsByClassName('box8')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 9 && BoxResult.length == 1){
					document.getElementsByClassName('box9')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 10 && BoxResult.length == 1){
					document.getElementsByClassName('box10')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 11 && BoxResult.length == 1){
					document.getElementsByClassName('box11')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 12 && BoxResult.length == 1){
					document.getElementsByClassName('box12')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 13 && BoxResult.length == 1){
					document.getElementsByClassName('box13')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 14 && BoxResult.length == 1){
					document.getElementsByClassName('box14')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 15 && BoxResult.length == 1){
					document.getElementsByClassName('box15')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 16 && BoxResult.length == 1){
					document.getElementsByClassName('box16')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 17 && BoxResult.length == 1){
					document.getElementsByClassName('box17')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 18 && BoxResult.length == 1){
					document.getElementsByClassName('box18')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 19 && BoxResult.length == 1){
					document.getElementsByClassName('box19')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 20 && BoxResult.length == 1){
					document.getElementsByClassName('box20')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 21 && BoxResult.length == 1){
					document.getElementsByClassName('box21')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 22 && BoxResult.length == 1){
					document.getElementsByClassName('box22')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 23 && BoxResult.length == 1){
					document.getElementsByClassName('box23')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 24 && BoxResult.length == 1){
					document.getElementsByClassName('box24')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 25 && BoxResult.length == 1){
					document.getElementsByClassName('box25')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 26 && BoxResult.length == 1){
					document.getElementsByClassName('box26')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 27 && BoxResult.length == 1){
					document.getElementsByClassName('box27')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 28 && BoxResult.length == 1){
					document.getElementsByClassName('box28')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 29 && BoxResult.length == 1){
					document.getElementsByClassName('box29')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 30 && BoxResult.length == 1){
					document.getElementsByClassName('box30')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 31 && BoxResult.length == 1){
					document.getElementsByClassName('box31')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 32 && BoxResult.length == 1){
					document.getElementsByClassName('box32')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 33 && BoxResult.length == 1){
					document.getElementsByClassName('box33')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 34 && BoxResult.length == 1){
					document.getElementsByClassName('box34')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 35 && BoxResult.length == 1){
					document.getElementsByClassName('box35')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 36 && BoxResult.length == 1){
					document.getElementsByClassName('box36')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 37 && BoxResult.length == 1){
					document.getElementsByClassName('box37')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 38 && BoxResult.length == 1){
					document.getElementsByClassName('box38')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 39 && BoxResult.length == 1){
					document.getElementsByClassName('box39')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 40 && BoxResult.length == 1){
					document.getElementsByClassName('box40')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 41 && BoxResult.length == 1){
					document.getElementsByClassName('box41')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 42 && BoxResult.length == 1){
					document.getElementsByClassName('box42')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 43 && BoxResult.length == 1){
					document.getElementsByClassName('box43')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 44 && BoxResult.length == 1){
					document.getElementsByClassName('box44')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 45 && BoxResult.length == 1){
					document.getElementsByClassName('box45')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 46 && BoxResult.length == 1){
					document.getElementsByClassName('box46')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 47 && BoxResult.length == 1){
					document.getElementsByClassName('box47')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 48 && BoxResult.length == 1){
					document.getElementsByClassName('box48')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 49 && BoxResult.length == 1){
					document.getElementsByClassName('box49')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 50 && BoxResult.length == 1){
					document.getElementsByClassName('box50')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 51 && BoxResult.length == 1){
					document.getElementsByClassName('box51')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 52 && BoxResult.length == 1){
					document.getElementsByClassName('box52')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 53 && BoxResult.length == 1){
					document.getElementsByClassName('box53')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 54 && BoxResult.length == 1){
					document.getElementsByClassName('box54')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 55 && BoxResult.length == 1){
					document.getElementsByClassName('box55')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 56 && BoxResult.length == 1){
					document.getElementsByClassName('box56')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 57 && BoxResult.length == 1){
					document.getElementsByClassName('box57')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 58 && BoxResult.length == 1){
					document.getElementsByClassName('box58')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 59 && BoxResult.length == 1){
					document.getElementsByClassName('box59')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 60 && BoxResult.length == 1){
					document.getElementsByClassName('box60')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 61 && BoxResult.length == 1){
					document.getElementsByClassName('box61')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 62 && BoxResult.length == 1){
					document.getElementsByClassName('box62')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 63 && BoxResult.length == 1){
					document.getElementsByClassName('box63')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 64 && BoxResult.length == 1){
					document.getElementsByClassName('box64')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 65 && BoxResult.length == 1){
					document.getElementsByClassName('box65')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 66 && BoxResult.length == 1){
					document.getElementsByClassName('box66')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 67 && BoxResult.length == 1){
					document.getElementsByClassName('box67')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 68 && BoxResult.length == 1){
					document.getElementsByClassName('box68')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 69 && BoxResult.length == 1){
					document.getElementsByClassName('box69')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 70 && BoxResult.length == 1){
					document.getElementsByClassName('box70')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 71 && BoxResult.length == 1){
					document.getElementsByClassName('box71')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 72 && BoxResult.length == 1){
					document.getElementsByClassName('box72')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 73 && BoxResult.length == 1){
					document.getElementsByClassName('box73')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 74 && BoxResult.length == 1){
					document.getElementsByClassName('box74')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 75 && BoxResult.length == 1){
					document.getElementsByClassName('box75')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 76 && BoxResult.length == 1){
					document.getElementsByClassName('box76')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 77 && BoxResult.length == 1){
					document.getElementsByClassName('box77')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 78 && BoxResult.length == 1){
					document.getElementsByClassName('box78')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 79 && BoxResult.length == 1){
					document.getElementsByClassName('box79')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 80 && BoxResult.length == 1){
					document.getElementsByClassName('box80')[0].value = BoxResult;
					getBlanks();
				}
				if(solveBox == 81 && BoxResult.length == 1){
					document.getElementsByClassName('box81')[0].value = BoxResult;
					getBlanks();
				}
			}
			
			
			
			
			
			
		};