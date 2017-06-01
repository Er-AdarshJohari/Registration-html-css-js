function message(){
	alert('Thank You For Submitting Form');
}

function passwordvalidation() {
  	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  
	if(inputtxt.value.match(passw))   
	{   
	alert('Correct, try another...')  
	return true;  
	}  
	else  
	{   
	alert('Wrong...!')  
	return false;  
	}  
 
}

/*function message1(){
	var x = document.firstform.words.value;
		if (x == "") {	
        	alert("Name must be filled out");
        	return false;
        }
		else{
			alert('You might be a true engineer');
		}
		
}*/