

//Handle Comments and add to Comment List
handleCommentForm = () => {
    let form = document.getElementById("comment-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputText = e.target.childNodes[1].value;
        let comment = document.createElement("p");
        comment.textContent = inputText;
        
        document.getElementById("list").appendChild(comment)
    })
}

//Adds listeners to Increment and Decrement Buttons
handleButtons = () => {
    //decrementor
    document.getElementById("minus").addEventListener("click", () => modifyCounter(-1));
    //incrementor
    document.getElementById("plus").addEventListener("click", () => modifyCounter(1));
    //heart
    document.getElementById("heart").addEventListener("click", () => {

        const counter = document.getElementById("counter").textContent;
        let listElement;
        let existsAlready = false;

        //loops through existing like messages to see if one already exists with the current counter value
        const likeMessages = Array.from(document.querySelectorAll(".likes li"));
        likeMessages.forEach((existingItem) => {
            if(existingItem.dataset.counter === counter){
                listElement = existingItem;
                existsAlready = true;
            }
        })

        //creates a new list element if this counter wasn't previously liked
        if(!existsAlready){
            listElement = document.createElement("li");
            listElement.dataset.n = 1;
            listElement.dataset.counter = counter;
            listElement.textContent = `${listElement.dataset.counter} has been liked ${listElement.dataset.n} times`;
            document.querySelector(".likes").appendChild(listElement);
        } else { //changes existing element if it was previously liked
            listElement.dataset.n ++;
            listElement.textContent = `${listElement.dataset.counter} has been liked ${listElement.dataset.n} times`;
        }
        
    })
}

//adds to the counter once a second
createCounter = () => {
    
    setInterval(() => {
        const counter = document.getElementById("counter");
        let number = parseInt(counter.textContent);
        number ++;
        counter.textContent = number.toString();
    }, 1000)
}


function modifyCounter(n = 1) {
    const counter = document.getElementById("counter");
    const modifiedCounter = parseInt(counter.textContent) + n;
    counter.textContent = modifiedCounter.toString();
}



document.addEventListener("DOMContentLoaded", () => init())

function init() {
    handleCommentForm();
    handleButtons();
    createCounter();
}