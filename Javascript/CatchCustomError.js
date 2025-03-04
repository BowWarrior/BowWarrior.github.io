		//*This disallows letters, and it also disallows the submit button to let you win whenever there's a problem I made up *//
		
		
		function myBox(){
			$(document).ready(function(){
				$(':input').keyup(function(){ //*or :focus works kindof
					$(this).css("value", this.value);
					//* alert(this.value);
				});
			});


		/*makes the form non-submitable if it detects one of my errors */
		Form.addEventListener('submit', (e) => {
			e.preventDefault();
		});
			
			//*This makes it so you can only put in numbers *//
			var char = String.fromCharCode(evt.which);
			
			if(!(/[1-9]/.test(ch))) {
				evt.preventDefault();
			}
		}