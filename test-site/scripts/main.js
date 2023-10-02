const myImage = document.querySelector("img");

myImage.onclick = () =>
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/penguins.jpg")
    {
        myImage.setAttribute("src", "images/emp-penguins.jpg");
    }
    else{
        myImage.setAttribute("src", "images/penguins.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername()
{
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Penguins are cool, ${myName}`;
}

if (!localStorage.getItem("name"))
{
    setUsername();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Penguins are cool, ${storedName}`;
}

myButton.onclick = ()=>
{
    setUsername();
}