

let memeFormEnter = document.querySelector("#meme-enter");


memeFormEnter.addEventListener("submit", function(e){
	console.log("Submit pressed");
	e.preventDefault(); //prevent page reload on submit 

	let image = document.createElement("img"); //create image element
	image.src = document.querySelector("#img-src").value; //find image src url
	
	let memesAll = document.querySelector("#memesAll");
	let topText = document.querySelector("#topText");
	let bottomText = document.querySelector("#bottomText"); 
	let memeList = document.createElement("li"); //create list for memes
	
	let deleteBtn = document.createElement("button"); //create delete button that can delete memes 
	deleteBtn.setAttribute('type', 'button');
	deleteBtn.innerText = "Delete";
	deleteBtn.addEventListener('click', function(e){
		memeList.remove();
	})

	let topDiv = document.createElement("div"); //create div for text on top
	topDiv.setAttribute('class', 'top');
	topDiv.innerText = document.querySelector("#text-top").value;

	let bottomDiv = document.createElement("div"); //create div for text on bottom
	bottomDiv.setAttribute('class', 'bottom');
	bottomDiv.innerText = document.querySelector("#text-bottom").value;

	memesAll.appendChild(memeList);
	memeList.appendChild(image);
	memeList.appendChild(topDiv);
	memeList.appendChild(bottomDiv);
	memeList.appendChild(deleteBtn);
	
	memeFormEnter.reset();

});

