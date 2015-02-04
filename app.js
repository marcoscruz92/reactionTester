	 	var clickedTime;
	 	var createdTime;
	 	var reactionTime;
	 	var randomMove = 0;
	 	var box = document.getElementById("box");
	 	var result_box = document.getElementById("result_box")
	 	var result = document.getElementById("result");
	 	function makeBox(){
	 		setTimeout(function() {
		 		box.style.display = "block";
		 		resetBox();
		 		changeColor();
		 		changeShape();
		 		moveBox();
		 		result.innerHTML = "";
		 		createdTime = Date.now();
		 		}, Math.random() * 801 );
	 	}

	 	function moveBox(){
	 		randomMove =  Math.floor(Math.random() * 85);
	 		randomMove = randomMove.toString();
	 		box.style.left = randomMove + "%";
	 	}

	 	function changeColor(){
	 		var randomColor = Math.floor(Math.random() * 4);
	 		if(randomColor == 4){
	 			box.style.backgroundColor = "#1abc9c";
	 		} 
	 		else if(randomColor == 3) {
	 			box.style.backgroundColor = "#3498db";
	 		}

	 		else if(randomColor == 2) {
	 			box.style.backgroundColor = "#f39c12";
	 		}

	 		else if(randomColor == 1) {
	 			box.style.backgroundColor = "#8e44ad";
	 		}
	 		else{
	 			box.style.backgroundColor = "#2c3e50";
	 		}
	 	}

	 	function changeShape(){
	 		var randomShape = Math.random() * 4;
	 		if( randomShape > 1.50){
	 			box.style.borderRadius = "50%";
	 		} else{
	 			box.style.borderRadius = "0px";
	 		}
	 	}

	 	function resetBox(){
	 		box.style.left = 0;
	 	}

	 	box.onclick = function(){
	 		clickedTime = Date.now();
	 		reactionTime = (clickedTime - createdTime) / 1000;
	 		result.innerHTML = reactionTime +" seconds";
	 		this.style.display = "none";
	 		makeBox();
	 	}
	 	makeBox();