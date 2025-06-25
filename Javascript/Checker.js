		//*This is the Row, Column, and Section Checker, as well as the blank spaces checker *//
		
		
		
		
		let winCount = 0;

		
		function myRowBad() {
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
			
			
			
			if(B1 == B2 || B1 == B3 || B1 == B4 || B1 == B5 || B1 == B6 || B1 == B7 || B1 == B8 || B1 == B9 || B2 == B3 || B2 == B4 || B2 == B5 || B2 == B6 || B2 == B7 || B2 == B8 || B2 == B9 || B3 == B4 || B3 == B5 || B3 == B6 || B3 == B7 || B3 == B8 || B3 == B9 || B4 == B5 || B4 == B6 || B4 == B7 || B4 == B8 || B4 == B9 || B5 == B6 || B5 == B7 || B5 == B8 || B5 == B9 || B6 == B7 || B6 == B8 || B6 == B9 || B7 == B8 || B7 == B9 || B8 == B9){
				winCount = 0;
				alert('Theres a repeat in Row 1!');
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline2, .BoxOutline3, .BoxOutline4, .BoxOutline5, .BoxOutline6, .BoxOutline7, .BoxOutline8, .BoxOutline9").css("border-color", "red");
				});
			} else{
			}
			
			if(B10 == B11 || B10 == B12 || B10 == B13 || B10 == B14 || B10 == B15 || B10 == B16 || B10 == B17 || B10 == B18 || B11 == B12 || B11 == B13 || B11 == B14 || B11 == B15 || B11 == B16 || B11 == B17 || B11 == B18 || B12 == B13 || B12 == B14 || B12 == B15 || B12 == B16 || B12 == B17 || B12 == B18 || B13 == B14 || B13 == B15 || B13 == B16 || B13 == B17 || B13 == B18 || B14 == B15 || B14 == B16 || B14 == B17 || B14 == B18 || B15 == B16 || B15 == B17 || B15 == B18 || B16 == B17 || B16 == B18 || B17 == B18){
				winCount = 0;
				alert('Theres a repeat in Row 2!');
				$(document).ready(function(){
					$(".BoxOutline10, .BoxOutline11, .BoxOutline12, .BoxOutline13, .BoxOutline14, .BoxOutline15, .BoxOutline16, .BoxOutline17, .BoxOutline18").css("border-color", "red");
				});
			} else{
			}
			
			if(B19 == B20 || B19 == B21 || B19 == B22 || B19 == B23 || B19 == B24 || B19 == B25 || B19 == B26 || B19 == B27 || B20 == B21 || B20 == B22 || B20 == B23 || B20 == B24 || B20 == B25 || B20 == B26 || B20 == B27 || B21 == B22 || B21 == B23 || B21 == B24 || B21 == B25 || B21 == B26 || B21 == B27 || B22 == B23 || B22 == B24 || B22 == B25 || B22 == B26 || B22 == B27 || B23 == B24 || B23 == B25 || B23 == B26 || B23 == B27 || B24 == B25 || B24 == B26 || B24 == B27 || B25 == B26 || B25 == B27 || B26 == B27){
				winCount = 0;
				alert('Theres a repeat in Row 3!');
				$(document).ready(function(){
					$(".BoxOutline19, .BoxOutline20, .BoxOutline21, .BoxOutline22, .BoxOutline23, .BoxOutline24, .BoxOutline25, .BoxOutline26, .BoxOutline27").css("border-color", "red");
				});
			} else{
			}
			
			if(B28 == B29 || B28 == B30 || B28 == B31 || B28 == B32 || B28 == B33 || B28 == B34 || B28 == B35 || B28 == B36 || B29 == B30 || B29 == B31 || B29 == B32 || B29 == B33 || B29 == B34 || B29 == B35 || B29 == B36 || B30 == B31 || B30 == B32 || B30 == B33 || B30 == B34 || B30 == B35 || B30 == B36 || B31 == B32 || B31 == B33 || B31 == B34 || B31 == B35 || B31 == B36 || B32 == B33 || B32 == B34 || B32 == B35 || B32 == B36 || B33 == B34 || B33 == B35 || B33 == B36 || B34 == B35 || B34 == B36 || B35 == B36){
				winCount = 0;
				alert('Theres a repeat in Row 4!');
				$(document).ready(function(){
					$(".BoxOutline28, .BoxOutline29, .BoxOutline30, .BoxOutline31, .BoxOutline32, .BoxOutline33, .BoxOutline34, .BoxOutline35, .BoxOutline36").css("border-color", "red");
				});
			} else{
			}
			
			if(B37 == B38 || B37 == B39 || B37 == B40 || B37 == B41 || B37 == B42 || B37 == B43 || B37 == B44 || B37 == B45 || B38 == B39 || B38 == B40 || B38 == B41 || B38 == B42 || B38 == B43 || B38 == B44 || B38 == B45 || B39 == B40 || B39 == B41 || B39 == B42 || B39 == B43 || B39 == B44 || B39 == B45 || B40 == B41 || B40 == B42 || B40 == B43 || B40 == B44 || B40 == B45 || B41 == B42 || B41 == B43 || B41 == B44 || B41 == B45 || B42 == B43 || B42 == B44 || B42 == B45 || B43 == B44 || B43 == B45 || B44 == B45){
				winCount = 0;
				alert('Theres a repeat in Row 5!');
				$(document).ready(function(){
					$(".BoxOutline37, .BoxOutline38, .BoxOutline39, .BoxOutline40, .BoxOutline41, .BoxOutline42, .BoxOutline43, .BoxOutline44, .BoxOutline45").css("border-color", "red");
				});
			} else{
			}
			
			if(B46 == B47 || B46 == B48 || B46 == B49 || B46 == B50 || B46 == B51 || B46 == B52 || B46 == B53 || B46 == B54 || B47 == B48 || B47 == B49 || B47 == B50 || B47 == B51 || B47 == B52 || B47 == B53 || B47 == B54 || B48 == B49 || B48 == B50 || B48 == B51 || B48 == B52 || B48 == B53 || B48 == B54 || B49 == B50 || B49 == B51 || B49 == B52 || B49 == B53 || B49 == B54 || B50 == B51 || B50 == B52 || B50 == B53 || B50 == B54 || B51 == B52 || B51 == B53 || B51 == B54 || B52 == B53 || B52 == B54 || B53 == B54){
				winCount = 0;
				alert('Theres a repeat in Row 6!');
				$(document).ready(function(){
					$(".BoxOutline46, .BoxOutline47, .BoxOutline48, .BoxOutline49, .BoxOutline50, .BoxOutline51, .BoxOutline52, .BoxOutline53, .BoxOutline54").css("border-color", "red");
				});
			} else{
			}
			
			if(B55 == B56 || B55 == B57 || B55 == B58 || B55 == B59 || B55 == B60 || B55 == B61 || B55 == B62 || B55 == B63 || B56 == B57 || B56 == B58 || B56 == B59 || B56 == B60 || B56 == B61 || B56 == B62 || B56 == B63 || B57 == B58 || B57 == B59 || B57 == B60 || B57 == B61 || B57 == B62 || B57 == B63 || B58 == B59 || B58 == B60 || B58 == B61 || B58 == B62 || B58 == B63 || B59 == B60 || B59 == B61 || B59 == B62 || B59 == B63 || B60 == B61 || B60 == B62 || B60 == B63 || B61 == B62 || B61 == B63 || B62 == B63){
				winCount = 0;
				alert('Theres a repeat in Row 7!');
				$(document).ready(function(){
					$(".BoxOutline55, .BoxOutline56, .BoxOutline57, .BoxOutline58, .BoxOutline59, .BoxOutline60, .BoxOutline61, .BoxOutline62, .BoxOutline63").css("border-color", "red");
				});
			} else{
			}
			
			if(B64 == B65 || B64 == B66 || B64 == B67 || B64 == B68 || B64 == B69 || B64 == B70 || B64 == B71 || B64 == B72 || B65 == B66 || B65 == B67 || B65 == B68 || B65 == B69 || B65 == B70 || B65 == B71 || B65 == B72 || B66 == B67 || B66 == B68 || B66 == B69 || B66 == B70 || B66 == B71 || B66 == B72 || B67 == B68 || B67 == B69 || B67 == B70 || B67 == B71 || B67 == B72 || B68 == B69 || B68 == B70 || B68 == B71 || B68 == B72 || B69 == B70 || B69 == B71 || B69 == B72 || B70 == B71 || B70 == B72 || B71 == B72){
				winCount = 0;
				alert('Theres a repeat in Row 8!');
				$(document).ready(function(){
					$(".BoxOutline64, .BoxOutline65, .BoxOutline66, .BoxOutline67, .BoxOutline68, .BoxOutline69, .BoxOutline70, .BoxOutline71, .BoxOutline72").css("border-color", "red");
				});
			} else{
			}
			
			if(B73 == B74 || B73 == B75 || B73 == B76 || B73 == B77 || B73 == B78 || B73 == B79 || B73 == B80 || B73 == B81 || B74 == B75 || B74 == B76 || B74 == B77 || B74 == B78 || B74 == B79 || B74 == B80 || B74 == B81 || B75 == B76 || B75 == B77 || B75 == B78 || B75 == B79 || B75 == B80 || B75 == B81 || B76 == B77 || B76 == B78 || B76 == B79 || B76 == B80 || B76 == B81 || B77 == B78 || B77 == B79 || B77 == B80 || B77 == B81 || B78 == B79 || B78 == B80 || B78 == B81 || B79 == B80 || B79 == B81 || B80 == B81){
				winCount = 0;
				alert('Theres a repeat in Row 9!');
				$(document).ready(function(){
					$(".BoxOutline73, .BoxOutline74, .BoxOutline75, .BoxOutline76, .BoxOutline77, .BoxOutline78, .BoxOutline79, .BoxOutline80, .BoxOutline81").css("border-color", "red");
				});
			} else{
			}
		}
		
		
		
		
		
		
		
		
		
		
		function myRowGood() {
			
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
			
			
			if(B1 != B2 || B1 != B3 || B1 != B4 || B1 != B5 || B1 != B6 || B1 != B7 || B1 != B8 || B1 != B9 || B2 != B3 || B2 != B4 || B2 != B5 || B2 != B6 || B2 != B7 || B2 != B8 || B2 != B9 || B3 != B4 || B3 != B5 || B3 != B6 || B3 != B7 || B3 != B8 || B3 != B9 || B4 != B5 || B4 != B6 || B4 != B7 || B4 != B8 || B4 != B9 || B5 != B6 || B5 != B7 || B5 != B8 || B5 != B9 || B6 != B7 || B6 != B8 || B6 != B9 || B7 != B8 || B7 != B9 || B8 != B9){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline2, .BoxOutline3, .BoxOutline4, .BoxOutline5, .BoxOutline6, .BoxOutline7, .BoxOutline8, .BoxOutline9").css("border-color", "initial");
				});
			} else{
			}
			
			if(B10 != B11 || B10 != B12 || B10 != B13 || B10 != B14 || B10 != B15 || B10 != B16 || B10 != B17 || B10 != B18 || B11 != B12 || B11 != B13 || B11 != B14 || B11 != B15 || B11 != B16 || B11 != B17 || B11 != B18 || B12 != B13 || B12 != B14 || B12 != B15 || B12 != B16 || B12 != B17 || B12 != B18 || B13 != B14 || B13 != B15 || B13 != B16 || B13 != B17 || B13 != B18 || B14 != B15 || B14 != B16 || B14 != B17 || B14 != B18 || B15 != B16 || B15 != B17 || B15 != B18 || B16 != B17 || B16 != B18 || B17 != B18){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline10, .BoxOutline11, .BoxOutline12, .BoxOutline13, .BoxOutline14, .BoxOutline15, .BoxOutline16, .BoxOutline17, .BoxOutline18").css("border-color", "initial");
				});
			} else{
			}
			
			if(B19 != B20 || B19 != B21 || B19 != B22 || B19 != B23 || B19 != B24 || B19 != B25 || B19 != B26 || B19 != B27 || B20 != B21 || B20 != B22 || B20 != B23 || B20 != B24 || B20 != B25 || B20 != B26 || B20 != B27 || B21 != B22 || B21 != B23 || B21 != B24 || B21 != B25 || B21 != B26 || B21 != B27 || B22 != B23 || B22 != B24 || B22 != B25 || B22 != B26 || B22 != B27 || B23 != B24 || B23 != B25 || B23 != B26 || B23 != B27 || B24 != B25 || B24 != B26 || B24 != B27 || B25 != B26 || B25 != B27 || B26 != B27){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline19, .BoxOutline20, .BoxOutline21, .BoxOutline22, .BoxOutline23, .BoxOutline24, .BoxOutline25, .BoxOutline26, .BoxOutline27").css("border-color", "initial");
				});
			} else{
			}
		
			if(B28 != B29 || B28 != B30 || B28 != B31 || B28 != B32 || B28 != B33 || B28 != B34 || B28 != B35 || B28 != B36 || B29 != B30 || B29 != B31 || B29 != B32 || B29 != B33 || B29 != B34 || B29 != B35 || B29 != B36 || B30 != B31 || B30 != B32 || B30 != B33 || B30 != B34 || B30 != B35 || B30 != B36 || B31 != B32 || B31 != B33 || B31 != B34 || B31 != B35 || B31 != B36 || B32 != B33 || B32 != B34 || B32 != B35 || B32 != B36 || B33 != B34 || B33 != B35 || B33 != B36 || B34 != B35 || B34 != B36 || B35 != B36){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline28, .BoxOutline29, .BoxOutline30, .BoxOutline31, .BoxOutline32, .BoxOutline33, .BoxOutline34, .BoxOutline35, .BoxOutline36").css("border-color", "initial");
				});
			} else{
			}
			
			if(B37 != B38 || B37 != B39 || B37 != B40 || B37 != B41 || B37 != B42 || B37 != B43 || B37 != B44 || B37 != B45 || B38 != B39 || B38 != B40 || B38 != B41 || B38 != B42 || B38 != B43 || B38 != B44 || B38 != B45 || B39 != B40 || B39 != B41 || B39 != B42 || B39 != B43 || B39 != B44 || B39 != B45 || B40 != B41 || B40 != B42 || B40 != B43 || B40 != B44 || B40 != B45 || B41 != B42 || B41 != B43 || B41 != B44 || B41 != B45 || B42 != B43 || B42 != B44 || B42 != B45 || B43 != B44 || B43 != B45 || B44 != B45){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline37, .BoxOutline38, .BoxOutline39, .BoxOutline40, .BoxOutline41, .BoxOutline42, .BoxOutline43, .BoxOutline44, .BoxOutline45").css("border-color", "initial");
				});
			} else{
			}
			
			if(B46 != B47 || B46 != B48 || B46 != B49 || B46 != B50 || B46 != B51 || B46 != B52 || B46 != B53 || B46 != B54 || B47 != B48 || B47 != B49 || B47 != B50 || B47 != B51 || B47 != B52 || B47 != B53 || B47 != B54 || B48 != B49 || B48 != B50 || B48 != B51 || B48 != B52 || B48 != B53 || B48 != B54 || B49 != B50 || B49 != B51 || B49 != B52 || B49 != B53 || B49 != B54 || B50 != B51 || B50 != B52 || B50 != B53 || B50 != B54 || B51 != B52 || B51 != B53 || B51 != B54 || B52 != B53 || B52 != B54 || B53 != B54){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline46, .BoxOutline47, .BoxOutline48, .BoxOutline49, .BoxOutline50, .BoxOutline51, .BoxOutline52, .BoxOutline53, .BoxOutline54").css("border-color", "initial");
				});
			} else{
			}
			
			if(B55 != B56 || B55 != B57 || B55 != B58 || B55 != B59 || B55 != B60 || B55 != B61 || B55 != B62 || B55 != B63 || B56 != B57 || B56 != B58 || B56 != B59 || B56 != B60 || B56 != B61 || B56 != B62 || B56 != B63 || B57 != B58 || B57 != B59 || B57 != B60 || B57 != B61 || B57 != B62 || B57 != B63 || B58 != B59 || B58 != B60 || B58 != B61 || B58 != B62 || B58 != B63 || B59 != B60 || B59 != B61 || B59 != B62 || B59 != B63 || B60 != B61 || B60 != B62 || B60 != B63 || B61 != B62 || B61 != B63 || B62 != B63){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline55, .BoxOutline56, .BoxOutline57, .BoxOutline58, .BoxOutline59, .BoxOutline60, .BoxOutline61, .BoxOutline62, .BoxOutline63").css("border-color", "initial");
				});
			} else{
			}
			
			if(B64 != B65 || B64 != B66 || B64 != B67 || B64 != B68 || B64 != B69 || B64 != B70 || B64 != B71 || B64 != B72 || B65 != B66 || B65 != B67 || B65 != B68 || B65 != B69 || B65 != B70 || B65 != B71 || B65 != B72 || B66 != B67 || B66 != B68 || B66 != B69 || B66 != B70 || B66 != B71 || B66 != B72 || B67 != B68 || B67 != B69 || B67 != B70 || B67 != B71 || B67 != B72 || B68 != B69 || B68 != B70 || B68 != B71 || B68 != B72 || B69 != B70 || B69 != B71 || B69 != B72 || B70 != B71 || B70 != B72 || B71 != B72){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline64, .BoxOutline65, .BoxOutline66, .BoxOutline67, .BoxOutline68, .BoxOutline69, .BoxOutline70, .BoxOutline71, .BoxOutline72").css("border-color", "initial");
				});
			} else{
			}
			
			if(B73 != B74 || B73 != B75 || B73 != B76 || B73 != B77 || B73 != B78 || B73 != B79 || B73 != B80 || B73 != B81 || B74 != B75 || B74 != B76 || B74 != B77 || B74 != B78 || B74 != B79 || B74 != B80 || B74 != B81 || B75 != B76 || B75 != B77 || B75 != B78 || B75 != B79 || B75 != B80 || B75 != B81 || B76 != B77 || B76 != B78 || B76 != B79 || B76 != B80 || B76 != B81 || B77 != B78 || B77 != B79 || B77 != B80 || B77 != B81 || B78 != B79 || B78 != B80 || B78 != B81 || B79 != B80 || B79 != B81 || B80 != B81){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline73, .BoxOutline74, .BoxOutline75, .BoxOutline76, .BoxOutline77, .BoxOutline78, .BoxOutline79, .BoxOutline80, .BoxOutline81").css("border-color", "initial");
				});
			} else{
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function myColumnBad() {
			
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
			
			
			
			if(B1 == B10 || B1 == B19 || B1 == B28 || B1 == B37 || B1 == B46 || B1 == B55 || B1 == B64 || B1 == B73 || B10 == B19 || B10 == B28 || B10 == B37 || B10 == B46 || B10 == B55 || B10 == B64 || B10 == B73 || B19 == B28 || B19 == B37 || B19 == B46 || B19 == B55 || B19 == B64 || B19 == B73 || B28 == B37 || B28 == B46 || B28 == B55 || B28 == B64 || B28 == B73 || B37 == B46 || B37 == B55 || B37 == B64 || B37 == B73 || B46 == B55 || B46 == B64 || B46 == B73 || B55 == B64 || B55 == B73 || B64 == B73){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline10, .BoxOutline19, .BoxOutline28, .BoxOutline37, .BoxOutline46, .BoxOutline55, .BoxOutline64, .BoxOutline73").css("border-color", "red");
				});
				alert('theres repeat in the First Column!');
			} else {
			}
			
			if(B2 == B11 || B2 == B20 || B2 == B29 || B2 == B38 || B2 == B47 || B2 == B56 || B2 == B65 || B2 == B74 || B11 == B20 || B11 == B29 || B11 == B38 || B11 == B47 || B11 == B56 || B11 == B65 || B11 == B74 || B20 == B29 || B20 == B38 || B20 == B47 || B20 == B56 || B20 == B65 || B20 == B74 || B29 == B38 || B29 == B47 || B29 == B56 || B29 == B65 || B29 == B74 || B38 == B47 || B38 == B56 || B38 == B65 || B38 == B74 || B47 == B56 || B47 == B65 || B47 == B74 || B56 == B65 || B56 == B74 || B65 == B74){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline2, .BoxOutline11, .BoxOutline20, .BoxOutline29, .BoxOutline38, .BoxOutline47, .BoxOutline56, .BoxOutline65, .BoxOutline74").css("border-color", "red");
				});
				alert('theres repeat in the Second Column!');
			} else {
			}
			
			if(B3 == B12 || B3 == B21 || B3 == B30 || B3 == B39 || B3 == B48 || B3 == B57 || B3 == B66 || B3 == B75 || B12 == B21 || B12 == B30 || B12 == B39 || B12 == B48 || B12 == B57 || B12 == B66 || B12 == B75 || B21 == B30 || B21 == B39 || B21 == B48 || B21 == B57 || B21 == B66 || B21 == B75 || B30 == B39 || B30 == B48 || B30 == B57 || B30 == B66 || B30 == B75 || B39 == B48 || B39 == B57 || B39 == B66 || B39 == B75 || B48 == B57 || B48 == B66 || B48 == B75 || B57 == B66 || B57 == B75 || B66 == B75){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline3, .BoxOutline12, .BoxOutline21, .BoxOutline30, .BoxOutline39, .BoxOutline48, .BoxOutline57, .BoxOutline66, .BoxOutline75").css("border-color", "red");
				});
				alert('theres repeat in the Third Column!');
			} else {
			}
			
			if(B4 == B13 || B4 == B22 || B4 == B31 || B4 == B40 || B4 == B49 || B4 == B58 || B4 == B67 || B4 == B76 || B13 == B22 || B13 == B31 || B13 == B40 || B13 == B49 || B13 == B58 || B13 == B67 || B13 == B76 || B22 == B31 || B22 == B40 || B22 == B49 || B22 == B58 || B22 == B67 || B22 == B76 || B31 == B40 || B31 == B49 || B31 == B58 || B31 == B67 || B31 == B76 || B40 == B49 || B40 == B58 || B40 == B67 || B40 == B76 || B49 == B58 || B49 == B67 || B49 == B76 || B58 == B67 || B58 == B76 || B67 == B76){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline4, .BoxOutline13, .BoxOutline22, .BoxOutline31, .BoxOutline40, .BoxOutline49, .BoxOutline58, .BoxOutline67, .BoxOutline76").css("border-color", "red");
				});
				alert('theres repeat in the Fourth Column!');
			} else {
			}
			
			if(B5 == B14 || B5 == B23 || B5 == B32 || B5 == B41 || B5 == B50 || B5 == B59 || B5 == B68 || B5 == B77 || B14 == B23 || B14 == B32 || B14 == B41 || B14 == B50 || B14 == B59 || B14 == B68 || B14 == B77 || B23 == B32 || B23 == B41 || B23 == B50 || B23 == B59 || B23 == B68 || B23 == B77 || B32 == B41 || B32 == B50 || B32 == B59 || B32 == B68 || B32 == B77 || B41 == B50 || B41 == B59 || B41 == B68 || B41 == B77 || B50 == B59 || B50 == B68 || B50 == B77 || B59 == B68 || B59 == B77 || B68 == B77){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline5, .BoxOutline14, .BoxOutline23, .BoxOutline32, .BoxOutline41, .BoxOutline50, .BoxOutline59, .BoxOutline68, .BoxOutline77").css("border-color", "red");
				});
				alert('theres repeat in the Fifth Column!');
			} else {
			}
			
			if(B6 == B15 || B6 == B24 || B6 == B33 || B6 == B42 || B6 == B51 || B6 == B60 || B6 == B69 || B6 == B78 || B15 == B24 || B15 == B33 || B15 == B42 || B15 == B51 || B15 == B60 || B15 == B69 || B15 == B78 || B24 == B33 || B24 == B42 || B24 == B51 || B24 == B60 || B24 == B69 || B24 == B78 || B33 == B42 || B33 == B51 || B33 == B60 || B33 == B69 || B33 == B78 || B42 == B51 || B42 == B60 || B42 == B69 || B42 == B78 || B51 == B60 || B51 == B69 || B51 == B78 || B60 == B69 || B60 == B78 || B69 == B78){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline6, .BoxOutline15, .BoxOutline24, .BoxOutline33, .BoxOutline42, .BoxOutline51, .BoxOutline60, .BoxOutline69, .BoxOutline78").css("border-color", "red");
				});
				alert('theres repeat in the Sixth Column!');
			} else {
			}
			
			if(B7 == B16 || B7 == B25 || B7 == B34 || B7 == B43 || B7 == B52 || B7 == B61 || B7 == B70 || B7 == B79 || B16 == B25 || B16 == B34 || B16 == B43 || B16 == B52 || B16 == B61 || B16 == B70 || B16 == B79 || B25 == B34 || B25 == B43 || B25 == B52 || B25 == B61 || B25 == B70 || B25 == B79 || B34 == B43 || B34 == B52 || B34 == B61 || B34 == B70 || B34 == B79 || B43 == B52 || B43 == B61 || B43 == B70 || B43 == B79 || B52 == B61 || B52 == B70 || B52 == B79 || B61 == B70 || B61 == B79 || B70 == B79){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline7, .BoxOutline16, .BoxOutline25, .BoxOutline34, .BoxOutline43, .BoxOutline52, .BoxOutline61, .BoxOutline70, .BoxOutline79").css("border-color", "red");
				});
				alert('theres repeat in the Seventh Column!');
			} else {
			}
			
			if(B8 == B17 || B8 == B26 || B8 == B35 || B8 == B44 || B8 == B53 || B8 == B62 || B8 == B71 || B8 == B80 || B17 == B26 || B17 == B35 || B17 == B44 || B17 == B53 || B17 == B62 || B17 == B71 || B17 == B80 || B26 == B35 || B26 == B44 || B26 == B53 || B26 == B62 || B26 == B71 || B26 == B80 || B35 == B44 || B35 == B53 || B35 == B62 || B35 == B71 || B35 == B80 || B44 == B53 || B44 == B62 || B44 == B71 || B44 == B80 || B53 == B62 || B53 == B71 || B53 == B80 || B62 == B71 || B62 == B80 || B71 == B80){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline8, .BoxOutline17, .BoxOutline26, .BoxOutline35, .BoxOutline44, .BoxOutline53, .BoxOutline62, .BoxOutline71, .BoxOutline80").css("border-color", "red");
				});
				alert('theres repeat in the Eighth Column!');
			} else {
			}
			
			if(B9 == B18 || B9 == B27 || B9 == B36 || B9 == B45 || B9 == B54 || B9 == B63 || B9 == B72 || B9 == B81 || B18 == B27 || B18 == B36 || B18 == B45 || B18 == B54 || B18 == B63 || B18 == B72 || B18 == B81 || B27 == B36 || B27 == B45 || B27 == B54 || B27 == B63 || B27 == B72 || B27 == B81 || B36 == B45 || B36 == B54 || B36 == B63 || B36 == B72 || B36 == B81 || B45 == B54 || B45 == B63 || B45 == B72 || B45 == B81 || B54 == B63 || B54 == B72 || B54 == B81 || B63 == B72 || B63 == B81 || B72 == B81){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline9, .BoxOutline18, .BoxOutline27, .BoxOutline36, .BoxOutline45, .BoxOutline54, .BoxOutline63, .BoxOutline72, .BoxOutline81").css("border-color", "red");
				});
				alert('theres repeat in the Ninth Column!');
			} else {
			}
		}
		
		
		
		
		
		
		
		
		
		
		function myColumnGood() {
			
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
			
			
			
			if(B1 != B10 || B1 != B19 || B1 != B28 || B1 != B37 || B1 != B46 || B1 != B55 || B1 != B64 || B1 != B73 || B10 != B19 || B10 != B28 || B10 != B37 || B10 != B46 || B10 != B55 || B10 != B64 || B10 != B73 || B19 != B28 || B19 != B37 || B19 != B46 || B19 != B55 || B19 != B64 || B19 != B73 || B28 != B37 || B28 != B46 || B28 != B55 || B28 != B64 || B28 != B73 || B37 != B46 || B37 != B55 || B37 != B64 || B37 != B73 || B46 != B55 || B46 != B64 || B46 != B73 || B55 != B64 || B55 != B73 || B64 != B73){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline10, .BoxOutline19, .BoxOutline28, .BoxOutline37, .BoxOutline46, .BoxOutline55, .BoxOutline64, .BoxOutline73").css("border-color", "initial");
				});
			} else {
			}
		
			if(B2 != B11 || B2 != B20 || B2 != B29 || B2 != B38 || B2 != B47 || B2 != B56 || B2 != B65 || B2 != B74 || B11 != B20 || B11 != B29 || B11 != B38 || B11 != B47 || B11 != B56 || B11 != B65 || B11 != B74 || B20 != B29 || B20 != B38 || B20 != B47 || B20 != B56 || B20 != B65 || B20 != B74 || B29 != B38 || B29 != B47 || B29 != B56 || B29 != B65 || B29 != B74 || B38 != B47 || B38 != B56 || B38 != B65 || B38 != B74 || B47 != B56 || B47 != B65 || B47 != B74 || B56 != B65 || B56 != B74 || B65 != B74){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline2, .BoxOutline11, .BoxOutline20, .BoxOutline29, .BoxOutline38, .BoxOutline47, .BoxOutline56, .BoxOutline65, .BoxOutline74").css("border-color", "initial");
				});
			} else {
			}
			
			if(B3 != B12 || B3 != B21 || B3 != B30 || B3 != B39 || B3 != B48 || B3 != B57 || B3 != B66 || B3 != B75 || B12 != B21 || B12 != B30 || B12 != B39 || B12 != B48 || B12 != B57 || B12 != B66 || B12 != B75 || B21 != B30 || B21 != B39 || B21 != B48 || B21 != B57 || B21 != B66 || B21 != B75 || B30 != B39 || B30 != B48 || B30 != B57 || B30 != B66 || B30 != B75 || B39 != B48 || B39 != B57 || B39 != B66 || B39 != B75 || B48 != B57 || B48 != B66 || B48 != B75 || B57 != B66 || B57 != B75 || B66 != B75){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline3, .BoxOutline12, .BoxOutline21, .BoxOutline30, .BoxOutline39, .BoxOutline48, .BoxOutline57, .BoxOutline66, .BoxOutline75").css("border-color", "initial");
				});
			} else {
			}
			
			if(B4 != B13 || B4 != B22 || B4 != B31 || B4 != B40 || B4 != B49 || B4 != B58 || B4 != B67 || B4 != B76 || B13 != B22 || B13 != B31 || B13 != B40 || B13 != B49 || B13 != B58 || B13 != B67 || B13 != B76 || B22 != B31 || B22 != B40 || B22 != B49 || B22 != B58 || B22 != B67 || B22 != B76 || B31 != B40 || B31 != B49 || B31 != B58 || B31 != B67 || B31 != B76 || B40 != B49 || B40 != B58 || B40 != B67 || B40 != B76 || B49 != B58 || B49 != B67 || B49 != B76 || B58 != B67 || B58 != B76 || B67 != B76){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline4, .BoxOutline13, .BoxOutline22, .BoxOutline31, .BoxOutline40, .BoxOutline49, .BoxOutline58, .BoxOutline67, .BoxOutline76").css("border-color", "initial");
				});
			} else {
			}
			
			if(B5 != B14 || B5 != B23 || B5 != B32 || B5 != B41 || B5 != B50 || B5 != B59 || B5 != B68 || B5 != B77 || B14 != B23 || B14 != B32 || B14 != B41 || B14 != B50 || B14 != B59 || B14 != B68 || B14 != B77 || B23 != B32 || B23 != B41 || B23 != B50 || B23 != B59 || B23 != B68 || B23 != B77 || B32 != B41 || B32 != B50 || B32 != B59 || B32 != B68 || B32 != B77 || B41 != B50 || B41 != B59 || B41 != B68 || B41 != B77 || B50 != B59 || B50 != B68 || B50 != B77 || B59 != B68 || B59 != B77 || B68 != B77){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline5, .BoxOutline14, .BoxOutline23, .BoxOutline32, .BoxOutline41, .BoxOutline50, .BoxOutline59, .BoxOutline68, .BoxOutline77").css("border-color", "initial");
				});
			} else {
			}
			
			if(B6 != B15 || B6 != B24 || B6 != B33 || B6 != B42 || B6 != B51 || B6 != B60 || B6 != B69 || B6 != B78 || B15 != B24 || B15 != B33 || B15 != B42 || B15 != B51 || B15 != B60 || B15 != B69 || B15 != B78 || B24 != B33 || B24 != B42 || B24 != B51 || B24 != B60 || B24 != B69 || B24 != B78 || B33 != B42 || B33 != B51 || B33 != B60 || B33 != B69 || B33 != B78 || B42 != B51 || B42 != B60 || B42 != B69 || B42 != B78 || B51 != B60 || B51 != B69 || B51 != B78 || B60 != B69 || B60 != B78 || B69 != B78){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline6, .BoxOutline15, .BoxOutline24, .BoxOutline33, .BoxOutline42, .BoxOutline51, .BoxOutline60, .BoxOutline69, .BoxOutline78").css("border-color", "initial");
				});
			} else {
			}
			
			if(B7 != B16 || B7 != B25 || B7 != B34 || B7 != B43 || B7 != B52 || B7 != B61 || B7 != B70 || B7 != B79 || B16 != B25 || B16 != B34 || B16 != B43 || B16 != B52 || B16 != B61 || B16 != B70 || B16 != B79 || B25 != B34 || B25 != B43 || B25 != B52 || B25 != B61 || B25 != B70 || B25 != B79 || B34 != B43 || B34 != B52 || B34 != B61 || B34 != B70 || B34 != B79 || B43 != B52 || B43 != B61 || B43 != B70 || B43 != B79 || B52 != B61 || B52 != B70 || B52 != B79 || B61 != B70 || B61 != B79 || B70 != B79){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline7, .BoxOutline16, .BoxOutline25, .BoxOutline34, .BoxOutline43, .BoxOutline52, .BoxOutline61, .BoxOutline70, .BoxOutline79").css("border-color", "initial");
				});
			} else {
			}
			
			if(B8 != B17 || B8 != B26 || B8 != B35 || B8 != B44 || B8 != B53 || B8 != B62 || B8 != B71 || B8 != B80 || B17 != B26 || B17 != B35 || B17 != B44 || B17 != B53 || B17 != B62 || B17 != B71 || B17 != B80 || B26 != B35 || B26 != B44 || B26 != B53 || B26 != B62 || B26 != B71 || B26 != B80 || B35 != B44 || B35 != B53 || B35 != B62 || B35 != B71 || B35 != B80 || B44 != B53 || B44 != B62 || B44 != B71 || B44 != B80 || B53 != B62 || B53 != B71 || B53 != B80 || B62 != B71 || B62 != B80 || B71 != B80){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline8, .BoxOutline17, .BoxOutline26, .BoxOutline35, .BoxOutline44, .BoxOutline53, .BoxOutline62, .BoxOutline71, .BoxOutline80").css("border-color", "initial");
				});
			} else {
			}
			
			if(B9 != B18 || B9 != B27 || B9 != B36 || B9 != B45 || B9 != B54 || B9 != B63 || B9 != B72 || B9 != B81 || B18 != B27 || B18 != B36 || B18 != B45 || B18 != B54 || B18 != B63 || B18 != B72 || B18 != B81 || B27 != B36 || B27 != B45 || B27 != B54 || B27 != B63 || B27 != B72 || B27 != B81 || B36 != B45 || B36 != B54 || B36 != B63 || B36 != B72 || B36 != B81 || B45 != B54 || B45 != B63 || B45 != B72 || B45 != B81 || B54 != B63 || B54 != B72 || B54 != B81 || B63 != B72 || B63 != B81 || B72 != B81){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline9, .BoxOutline18, .BoxOutline27, .BoxOutline36, .BoxOutline45, .BoxOutline54, .BoxOutline63, .BoxOutline72, .BoxOutline81").css("border-color", "initial");
				});
			} else {
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		function mySectionBad() {
			
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
			
			
			
			if(B1 == B11 || B1 == B12 || B1 == B20 || B1 == B21 || B2 == B10 || B2 == B12 || B2 == B19 || B2 == B21 || B3 == B10 || B3 == B11 || B3 == B19 || B3 == B20 || B10 == B2 || B10 == B3 || B10 == B20 || B10 == B21 || B11 == B1 || B11 == B3 || B11 == B19 || B11 == B21 || B12 == B1 || B12 == B2 || B12 == B19 || B12 == B20 || B19 == B2 || B19 == B3 || B19 == B11 || B19 == B12 || B20 == B1 || B20 == B3 || B20 == B10 || B20 == B12 || B21 == B1 || B21 == B2 || B21 == B10 || B21 == B11){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline2, .BoxOutline3, .BoxOutline10, .BoxOutline11, .BoxOutline12, .BoxOutline19, .BoxOutline20, .BoxOutline21").css("border-color", "red");
				});
				alert('theres repeat in the First Box!');
			} else{
			}
			
			if(B4 == B14 || B4 == B15 || B4 == B23 || B4 == B24 || B5 == B13 || B5 == B15 || B5 == B22 || B5 == B24 || B6 == B13 || B6 == B14 || B6 == B22 || B6 == B23 || B13 == B5 || B13 == B6 || B13 == B23 || B13 == B24 || B14 == B4 || B14 == B6 || B14 == B22 || B14 == B24 || B15 == B4 || B15 == B5 || B15 == B22 || B15 == B23 || B22 == B5 || B22 == B6 || B22 == B14 || B22 == B15 || B23 == B4 || B23 == B6 || B23 == B13 || B23 == B15 || B24 == B4 || B24 == B5 || B24 == B13 || B24 == B14){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline4, .BoxOutline5, .BoxOutline6, .BoxOutline13, .BoxOutline14, .BoxOutline15, .BoxOutline22, .BoxOutline23, .BoxOutline24").css("border-color", "red");
				});
				alert('theres repeat in the Second Box!');
			} else{
			}
			
			if(B7 == B17 || B7 == B18 || B7 == B26 || B7 == B27 || B8 == B16 || B8 == B18 || B8 == B25 || B8 == B27 || B9 == B16 || B9 == B17 || B9 == B25 || B9 == B26 || B16 == B8 || B16 == B9 || B16 == B26 || B16 == B27 || B17 == B7 || B17 == B9 || B17 == B25 || B17 == B27 || B18 == B7 || B18 == B8 || B18 == B25 || B18 == B26 || B25 == B8 || B25 == B9 || B25 == B17 || B25 == B18 || B26 == B7 || B26 == B9 || B26 == B16 || B26 == B18 || B27 == B7 || B27 == B8 || B27 == B16 || B27 == B17){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline7, .BoxOutline8, .BoxOutline9, .BoxOutline16, .BoxOutline17, .BoxOutline18, .BoxOutline25, .BoxOutline26, .BoxOutline27").css("border-color", "red");
				});
				alert('theres repeat in the Third Box!');
			} else{
			}
			
			if(B28 == B38 || B28 == B39 || B28 == B47 || B28 == B48 || B29 == B37 || B29 == B39 || B29 == B46 || B29 == B48 || B30 == B37 || B30 == B38 || B30 == B46 || B30 == B47 || B37 == B29 || B37 == B30 || B37 == B47 || B37 == B48 || B38 == B28 || B38 == B30 || B38 == B46 || B38 == B48 || B39 == B28 || B39 == B29 || B39 == B46 || B39 == B47 || B46 == B29 || B46 == B30 || B46 == B38 || B46 == B39 || B47 == B28 || B47 == B30 || B47 == B37 || B47 == B39 || B48 == B28 || B48 == B29 || B48 == B37 || B48 == B38){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline28, .BoxOutline29, .BoxOutline30, .BoxOutline37, .BoxOutline38, .BoxOutline39, .BoxOutline46, .BoxOutline47, .BoxOutline48").css("border-color", "red");
				});
				alert('theres repeat in the Fourth Box!');
			} else{
			}
			
			if(B31 == B41 || B31 == B42 || B31 == B50 || B31 == B51 || B32 == B40 || B32 == B42 || B32 == B49 || B32 == B51 || B33 == B40 || B33 == B41 || B33 == B49 || B33 == B50 || B40 == B32 || B40 == B33 || B40 == B50 || B40 == B51 || B41 == B31 || B41 == B33 || B41 == B49 || B41 == B51 || B42 == B31 || B42 == B32 || B42 == B49 || B42 == B50 || B49 == B32 || B49 == B33 || B49 == B41 || B49 == B42 || B50 == B31 || B50 == B33 || B50 == B40 || B50 == B42 || B51 == B31 || B51 == B32 || B51 == B40 || B51 == B41){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline31, .BoxOutline32, .BoxOutline33, .BoxOutline40, .BoxOutline41, .BoxOutline42, .BoxOutline49, .BoxOutline50, .BoxOutline51").css("border-color", "red");
				});
				alert('theres repeat in the Fifth Box!');
			} else{
			}
			
			if(B34 == B44 || B34 == B45 || B34 == B53 || B34 == B54 || B35 == B43 || B35 == B45 || B35 == B52 || B35 == B54 || B36 == B43 || B36 == B44 || B36 == B52 || B36 == B53 || B43 == B35 || B43 == B36 || B43 == B53 || B43 == B54 || B44 == B34 || B44 == B36 || B44 == B52 || B44 == B54 || B45 == B34 || B45 == B35 || B45 == B52 || B45 == B53 || B52 == B35 || B52 == B36 || B52 == B44 || B52 == B45 || B53 == B34 || B53 == B36 || B53 == B43 || B53 == B45 || B54 == B34 || B54 == B35 || B54 == B43 || B54 == B44){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline34, .BoxOutline35, .BoxOutline36, .BoxOutline43, .BoxOutline44, .BoxOutline45, .BoxOutline52, .BoxOutline53, .BoxOutline54").css("border-color", "red");
				});
				alert('theres repeat in the Sixth Box!');
			} else{
			}
			
			if(B55 == B65 || B55 == B66 || B55 == B74 || B55 == B75 || B56 == B64 || B56 == B66 || B56 == B73 || B56 == B75 || B57 == B64 || B57 == B65 || B57 == B73 || B57 == B74 || B64 == B56 || B64 == B57 || B64 == B74 || B64 == B75 || B65 == B55 || B65 == B57 || B65 == B73 || B65 == B75 || B66 == B55 || B66 == B57 || B66 == B73 || B66 == B74 || B73 == B56 || B73 == B57 || B73 == B65 || B73 == B66 || B74 == B55 || B74 == B57 || B74 == B64 || B74 == B66 || B75 == B55 || B75 == B56 || B75 == B64 || B75 == B65){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline55, .BoxOutline56, .BoxOutline57, .BoxOutline64, .BoxOutline65, .BoxOutline66, .BoxOutline73, .BoxOutline74, .BoxOutline75").css("border-color", "red");
				});
				alert('theres repeat in the Seventh Box!');
			} else{
			}
			
			if(B58 == B68 || B58 == B69 || B58 == B77 || B58 == B78 || B59 == B67 || B59 == B69 || B59 == B76 || B59 == B78 || B60 == B67 || B60 == B68 || B60 == B76 || B60 == B77 || B67 == B59 || B67 == B60 || B67 == B77 || B67 == B78 || B68 == B58 || B68 == B60 || B68 == B76 || B68 == B78 || B69 == B58 || B69 == B59 || B69 == B76 || B69 == B77 || B76 == B59 || B76 == B60 || B76 == B68 || B76 == B69 || B77 == B58 || B77 == B60 || B77 == B67 || B77 == B69 || B78 == B58 || B78 == B59 || B78 == B67 || B78 == B68){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline58, .BoxOutline59, .BoxOutline60, .BoxOutline67, .BoxOutline68, .BoxOutline69, .BoxOutline76, .BoxOutline77, .BoxOutline78").css("border-color", "red");
				});
				alert('theres repeat in the Eighth Box!');
			} else{
			}
			
			if(B61 == B71 || B61 == B72 || B61 == B80 || B61 == B81 || B62 == B70 || B62 == B72 || B62 == B79 || B62 == B81 || B63 == B70 || B63 == B71 || B63 == B79 || B63 == B80 || B70 == B62 || B70 == B63 || B70 == B80 || B70 == B81 || B71 == B61 || B71 == B63 || B71 == B79 || B71 == B81 || B72 == B61 || B72 == B62 || B72 == B79 || B72 == B80 || B79 == B62 || B79 == B63 || B79 == B71 || B79 == B72 || B80 == B61 || B80 == B63 || B80 == B70 || B80 == B72 || B81 == B61 || B81 == B63 || B81 == B70 || B81 == B71){
				winCount = 0;
				$(document).ready(function(){
					$(".BoxOutline61, .BoxOutline62, .BoxOutline63, .BoxOutline70, .BoxOutline71, .BoxOutline72, .BoxOutline79, .BoxOutline80, .BoxOutline81").css("border-color", "red");
				});
				alert('theres repeat in the Ninth Box!');
			} else{
			}
		}
		
		
		
		
		
		
		
		
		
		
		function mySectionGood() {
			
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
			
			
			
			if(B1 != B11 || B1 != B12 || B1 != B20 || B1 != B21 || B2 != B10 || B2 != B12 || B2 != B19 || B2 != B21 || B3 != B10 || B3 != B11 || B3 != B19 || B3 != B20 || B10 != B2 || B10 != B3 || B10 != B20 || B10 != B21 || B11 != B1 || B11 != B3 || B11 != B19 || B11 != B21 || B12 != B1 || B12 != B2 || B12 != B19 || B12 != B20 || B19 != B2 || B19 != B3 || B19 != B11 || B19 != B12 || B20 != B1 || B20 != B3 || B20 != B10 || B20 != B12 || B21 != B1 || B21 != B2 || B21 != B10 || B21 != B11){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline1, .BoxOutline2, .BoxOutline3, .BoxOutline10, .BoxOutline11, .BoxOutline12, .BoxOutline19, .BoxOutline20, .BoxOutline21").css("border-color", "initial");
				});
			} else{
			}
			
			if(B4 != B14 || B4 != B15 || B4 != B23 || B4 != B24 || B5 != B13 || B5 != B15 || B5 != B22 || B5 != B24 || B6 != B13 || B6 != B14 || B6 != B22 || B6 != B23 || B13 != B5 || B13 != B6 || B13 != B23 || B13 != B24 || B14 != B4 || B14 != B6 || B14 != B22 || B14 != B24 || B15 != B4 || B15 != B5 || B15 != B22 || B15 != B23 || B22 != B5 || B22 != B6 || B22 != B14 || B22 != B15 || B23 != B4 || B23 != B6 || B23 != B13 || B23 != B15 || B24 != B4 || B24 != B5 || B24 != B13 || B24 != B14){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline4, .BoxOutline5, .BoxOutline6, .BoxOutline13, .BoxOutline14, .BoxOutline15, .BoxOutline22, .BoxOutline23, .BoxOutline24").css("border-color", "initial");
				});
			} else{
			}
			
			if(B7 != B17 || B7 != B18 || B7 != B26 || B7 != B27 || B8 != B16 || B8 != B18 || B8 != B25 || B8 != B27 || B9 != B16 || B9 != B17 || B9 != B25 || B9 != B26 || B16 != B8 || B16 != B9 || B16 != B26 || B16 != B27 || B17 != B7 || B17 != B9 || B17 != B25 || B17 != B27 || B18 != B7 || B18 != B8 || B18 != B25 || B18 != B26 || B25 != B8 || B25 != B9 || B25 != B17 || B25 != B18 || B26 != B7 || B26 != B9 || B26 != B16 || B26 != B18 || B27 != B7 || B27 != B8 || B27 != B16 || B27 != B17){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline7, .BoxOutline8, .BoxOutline9, .BoxOutline16, .BoxOutline17, .BoxOutline18, .BoxOutline25, .BoxOutline26, .BoxOutline27").css("border-color", "initial");
				});
			} else{
			}
			
			if(B28 != B38 || B28 != B39 || B28 != B47 || B28 != B48 || B29 != B37 || B29 != B39 || B29 != B46 || B29 != B48 || B30 != B37 || B30 != B38 || B30 != B46 || B30 != B47 || B37 != B29 || B37 != B30 || B37 != B47 || B37 != B48 || B38 != B28 || B38 != B30 || B38 != B46 || B38 != B48 || B39 != B28 || B39 != B29 || B39 != B46 || B39 != B47 || B46 != B29 || B46 != B30 || B46 != B38 || B46 != B39 || B47 != B28 || B47 != B30 || B47 != B37 || B47 != B39 || B48 != B28 || B48 != B29 || B48 != B37 || B48 != B38){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline28, .BoxOutline29, .BoxOutline30, .BoxOutline37, .BoxOutline38, .BoxOutline39, .BoxOutline46, .BoxOutline47, .BoxOutline48").css("border-color", "initial");
				});
			} else{
			}
			
			if(B31 != B41 || B31 != B42 || B31 != B50 || B31 != B51 || B32 != B40 || B32 != B42 || B32 != B49 || B32 != B51 || B33 != B40 || B33 != B41 || B33 != B49 || B33 != B50 || B40 != B32 || B40 != B33 || B40 != B50 || B40 != B51 || B41 != B31 || B41 != B33 || B41 != B49 || B41 != B51 || B42 != B31 || B42 != B32 || B42 != B49 || B42 != B50 || B49 != B32 || B49 != B33 || B49 != B41 || B49 != B42 || B50 != B31 || B50 != B33 || B50 != B40 || B50 != B42 || B51 != B31 || B51 != B32 || B51 != B40 || B51 != B41){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline31, .BoxOutline32, .BoxOutline33, .BoxOutline40, .BoxOutline41, .BoxOutline42, .BoxOutline49, .BoxOutline50, .BoxOutline51").css("border-color", "initial");
				});
			} else{
			}
			
			if(B34 != B44 || B34 != B45 || B34 != B53 || B34 != B54 || B35 != B43 || B35 != B45 || B35 != B52 || B35 != B54 || B36 != B43 || B36 != B44 || B36 != B52 || B36 != B53 || B43 != B35 || B43 != B36 || B43 != B53 || B43 != B54 || B44 != B34 || B44 != B36 || B44 != B52 || B44 != B54 || B45 != B34 || B45 != B35 || B45 != B52 || B45 != B53 || B52 != B35 || B52 != B36 || B52 != B44 || B52 != B45 || B53 != B34 || B53 != B36 || B53 != B43 || B53 != B45 || B54 != B34 || B54 != B35 || B54 != B43 || B54 != B44){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline34, .BoxOutline35, .BoxOutline36, .BoxOutline43, .BoxOutline44, .BoxOutline45, .BoxOutline52, .BoxOutline53, .BoxOutline54").css("border-color", "initial");
				});
			} else{
			}
			
			if(B55 != B65 || B55 != B66 || B55 != B74 || B55 != B75 || B56 != B64 || B56 != B66 || B56 != B73 || B56 != B75 || B57 != B64 || B57 != B65 || B57 != B73 || B57 != B74 || B64 != B56 || B64 != B57 || B64 != B74 || B64 != B75 || B65 != B55 || B65 != B57 || B65 != B73 || B65 != B75 || B66 != B55 || B66 != B57 || B66 != B73 || B66 != B74 || B73 != B56 || B73 != B57 || B73 != B65 || B73 != B66 || B74 != B55 || B74 != B57 || B74 != B64 || B74 != B66 || B75 != B55 || B75 != B56 || B75 != B64 || B75 != B65){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline55, .BoxOutline56, .BoxOutline57, .BoxOutline64, .BoxOutline65, .BoxOutline66, .BoxOutline73, .BoxOutline74, .BoxOutline75").css("border-color", "initial");
				});
			} else{
			}
			
			if(B58 != B68 || B58 != B69 || B58 != B77 || B58 != B78 || B59 != B67 || B59 != B69 || B59 != B76 || B59 != B78 || B60 != B67 || B60 != B68 || B60 != B76 || B60 != B77 || B67 != B59 || B67 != B60 || B67 != B77 || B67 != B78 || B68 != B58 || B68 != B60 || B68 != B76 || B68 != B78 || B69 != B58 || B69 != B59 || B69 != B76 || B69 != B77 || B76 != B59 || B76 != B60 || B76 != B68 || B76 != B69 || B77 != B58 || B77 != B60 || B77 != B67 || B77 != B69 || B78 != B58 || B78 != B59 || B78 != B67 || B78 != B68){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline58, .BoxOutline59, .BoxOutline60, .BoxOutline67, .BoxOutline68, .BoxOutline69, .BoxOutline76, .BoxOutline77, .BoxOutline78").css("border-color", "initial");
				});
			} else{
			}
			
			if(B61 != B71 || B61 != B72 || B61 != B80 || B61 != B81 || B62 != B70 || B62 != B72 || B62 != B79 || B62 != B81 || B63 != B70 || B63 != B71 || B63 != B79 || B63 != B80 || B70 != B62 || B70 != B63 || B70 != B80 || B70 != B81 || B71 != B61 || B71 != B63 || B71 != B79 || B71 != B81 || B72 != B61 || B72 != B62 || B72 != B79 || B72 != B80 || B79 != B62 || B79 != B63 || B79 != B71 || B79 != B72 || B80 != B61 || B80 != B63 || B80 != B70 || B80 != B72 || B81 != B61 || B81 != B63 || B81 != B70 || B81 != B71){
				winCount = winCount + 1;
				$(document).ready(function(){
					$(".BoxOutline61, .BoxOutline62, .BoxOutline63, .BoxOutline70, .BoxOutline71, .BoxOutline72, .BoxOutline79, .BoxOutline80, .BoxOutline81").css("border-color", "initial");
				});
			} else{
			}
		}
		
		
		
		

		/*
		
		
		let box1 = document.getElementsByClassName('box1')[0].value;
		let box2 = document.getElementsByClassName('box2')[0].value;
		let box3 = document.getElementsByClassName('box3')[0].value;
		let box4 = document.getElementsByClassName('box4')[0].value;
		let box5 = document.getElementsByClassName('box5')[0].value;
		let box6 = document.getElementsByClassName('box6')[0].value;
		let box7 = document.getElementsByClassName('box7')[0].value;
		let box8 = document.getElementsByClassName('box8')[0].value;
		let box9 = document.getElementsByClassName('box9')[0].value;

		let box10 = document.getElementsByClassName('box10')[0].value;
		let box11 = document.getElementsByClassName('box11')[0].value;
		let box12 = document.getElementsByClassName('box12')[0].value;
		let box13 = document.getElementsByClassName('box13')[0].value;
		let box14 = document.getElementsByClassName('box15')[0].value;
		let box15 = document.getElementsByClassName('box16')[0].value;
		let box16 = document.getElementsByClassName('box17')[0].value;
		let box17 = document.getElementsByClassName('box18')[0].value;
		let box18 = document.getElementsByClassName('box19')[0].value;

		let box19 = document.getElementsByClassName('box20')[0].value;
		let box20 = document.getElementsByClassName('box21')[0].value;
		let box21 = document.getElementsByClassName('box22')[0].value;
		let box22 = document.getElementsByClassName('box22')[0].value;
		let box23 = document.getElementsByClassName('box23')[0].value;
		let box24 = document.getElementsByClassName('box24')[0].value;
		let box25 = document.getElementsByClassName('box25')[0].value;
		let box26 = document.getElementsByClassName('box26')[0].value;
		let box27 = document.getElementsByClassName('box27')[0].value;

		let box28 = document.getElementsByClassName('box28')[0].value;
		let box29 = document.getElementsByClassName('box29')[0].value;
		let box30 = document.getElementsByClassName('box30')[0].value;
		let box31 = document.getElementsByClassName('box31')[0].value;
		let box32 = document.getElementsByClassName('box32')[0].value;
		let box33 = document.getElementsByClassName('box33')[0].value;
		let box34 = document.getElementsByClassName('box34')[0].value;
		let box35 = document.getElementsByClassName('box35')[0].value;
		let box36 = document.getElementsByClassName('box36')[0].value;
		
		let box37 = document.getElementsByClassName('box37')[0].value;
		let box38 = document.getElementsByClassName('box38')[0].value;
		let box39 = document.getElementsByClassName('box39')[0].value;
		let box40 = document.getElementsByClassName('box40')[0].value;
		let box41 = document.getElementsByClassName('box41')[0].value;
		let box42 = document.getElementsByClassName('box42')[0].value;
		let box43 = document.getElementsByClassName('box43')[0].value;
		let box44 = document.getElementsByClassName('box44')[0].value;
		let box45 = document.getElementsByClassName('box45')[0].value;
		
		let box46 = document.getElementsByClassName('box46')[0].value;
		let box47 = document.getElementsByClassName('box47')[0].value;
		let box48 = document.getElementsByClassName('box48')[0].value;
		let box49 = document.getElementsByClassName('box49')[0].value;
		let box50 = document.getElementsByClassName('box50')[0].value;
		let box51 = document.getElementsByClassName('box51')[0].value;
		let box52 = document.getElementsByClassName('box52')[0].value;
		let box53 = document.getElementsByClassName('box53')[0].value;
		let box54 = document.getElementsByClassName('box54')[0].value;
		
		let box55 = document.getElementsByClassName('box55')[0].value;
		let box56 = document.getElementsByClassName('box56')[0].value;
		let box57 = document.getElementsByClassName('box57')[0].value;
		let box58 = document.getElementsByClassName('box58')[0].value;
		let box59 = document.getElementsByClassName('box59')[0].value;
		let box60 = document.getElementsByClassName('box60')[0].value;
		let box61 = document.getElementsByClassName('box61')[0].value;
		let box62 = document.getElementsByClassName('box62')[0].value;
		let box63 = document.getElementsByClassName('box63')[0].value;
		
		let box64 = document.getElementsByClassName('box64')[0].value;
		let box65 = document.getElementsByClassName('box65')[0].value;
		let box66 = document.getElementsByClassName('box66')[0].value;
		let box67 = document.getElementsByClassName('box67')[0].value;
		let box68 = document.getElementsByClassName('box68')[0].value;
		let box69 = document.getElementsByClassName('box69')[0].value;
		let box70 = document.getElementsByClassName('box70')[0].value;
		let box71 = document.getElementsByClassName('box71')[0].value;
		let box72 = document.getElementsByClassName('box72')[0].value;
		
		let box73 = document.getElementsByClassName('box73')[0].value;
		let box74 = document.getElementsByClassName('box74')[0].value;
		let box75 = document.getElementsByClassName('box75')[0].value;
		let box76 = document.getElementsByClassName('box76')[0].value;
		let box77 = document.getElementsByClassName('box77')[0].value;
		let box78 = document.getElementsByClassName('box78')[0].value;
		let box79 = document.getElementsByClassName('box79')[0].value;
		let box80 = document.getElementsByClassName('box80')[0].value;
		let box81 = document.getElementsByClassName('box81')[0].value;

		
		var B1 = box1;
		var B2 = box2;
		var B3 = box3;
		var B4 = box4;
		var B5 = box5;
		var B6 = box6;
		var B7 = box7;
		var B8 = box8;
		var B9 = box9;
		
		var B10 = box10;
		var B11 = box11;
		var B12 = box12;
		var B13 = box13;
		var B14 = box14;
		var B15 = box15;
		var B16 = box16;
		var B17 = box17;
		var B18 = box18;
		
		var B19 = box19;
		var B20 = box20;
		var B21 = box21;
		var B22 = box22;
		var B23 = box23;
		var B24 = box24;
		var B25 = box25;
		var B26 = box26;
		var B27 = box27;
		
		var B28 = box28;
		var B29 = box29;
		var B30 = box30;
		var B31 = box31;
		var B32 = box32;
		var B33 = box33;
		var B34 = box34;
		var B35 = box35;
		var B36 = box36;
		
		var B37 = box37;
		var B38 = box38;
		var B39 = box39;
		var B40 = box40;
		var B41 = box41;
		var B42 = box42;
		var B43 = box43;
		var B44 = box44;
		var B45 = box45;
		
		var B46 = box46;
		var B47 = box47;
		var B48 = box48;
		var B49 = box49;
		var B50 = box50;
		var B51 = box51;
		var B52 = box52;
		var B53 = box53;
		var B54 = box54;
		
		var B55 = box55;
		var B56 = box56;
		var B57 = box57;
		var B58 = box58;
		var B59 = box59;
		var B60 = box60;
		var B61 = box61;
		var B62 = box62;
		var B63 = box63;
		
		var B64 = box64;
		var B65 = box65;
		var B66 = box66;
		var B67 = box67;
		var B68 = box68;
		var B69 = box69;
		var B70 = box70;
		var B71 = box71;
		var B72 = box72;
		
		var B73 = box73;
		var B74 = box74;
		var B75 = box75;
		var B76 = box76;
		var B77 = box77;
		var B78 = box78;
		var B79 = box79;
		var B80 = box80;
		var B81 = box81;
		
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function myBlankBox() {
			
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
		
		
			if (B1 == '' || B2 == '' || B3 == '' || B4 == '' || B5 == '' || B6 == '' || B7 == '' || B8 == '' || B9 == '' ||
				B10 == '' || B11 == '' || B12 == '' || B13 == '' || B14 == '' || B15 == '' || B16 == '' || B17 == '' || B18 == '' ||
				B19 == '' || B20 == '' || B21 == '' || B22 == '' || B23 == '' || B24 == '' || B25 == '' || B26 == '' || B27 == '' ||
				B28 == '' || B29 == '' || B30 == '' || B31 == '' || B32 == '' || B33 == '' || B34 == '' || B35 == '' || B36 == '' ||
				B37 == '' || B38 == '' || B39 == '' || B40 == '' || B41 == '' || B42 == '' || B43 == '' || B44 == '' || B45 == '' ||
				B46 == '' || B47 == '' || B48 == '' || B49 == '' || B50 == '' || B51 == '' || B52 == '' || B53 == '' || B54 == '' ||
				B55 == '' || B56 == '' || B57 == '' || B58 == '' || B59 == '' || B60 == '' || B61 == '' || B62 == '' || B63 == '' ||
				B64 == '' || B65 == '' || B66 == '' || B67 == '' || B68 == '' || B69 == '' || B70 == '' || B71 == '' || B72 == '' ||
				B73 == '' || B74 == '' || B75 == '' || B76 == '' || B77 == '' || B78 == '' || B79 == '' || B80 == '' || B81 == '') {
				winCount = 0;
				alert('You have to fill in all the blanks!');
			} else{
				myRowGood();
				myColumnGood();
				mySectionGood();
				myRowBad();
				myColumnBad();
				mySectionBad();
			}
		}
