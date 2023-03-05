const addSquareButton = document.getElementById("Please_give_like");

class Square {
    constructor(size, color, textContent) {
        this.size = size;
        this.color = color;
        this.textContent = textContent;
        this.element = document.createElement("div");

        this.element.textContent = textContent;
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
        this.element.style.background = this.color;
        this.element.className = "square";
    }

    render(htmlElement) {
        htmlElement.appendChild(this.element);
    }

    delete(htmlElement) {
        htmlElement.removeChild(this.element);
    }

    changeText(text) {
        this.textContent = text;
        this.element.textContent = text;
    }
}

let counter = 0;

const colorsOfSquare = ["black", "lightskyblue", "lime","red","green",];

const getRandomColor = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};

addSquareButton.onclick = () => {
    const square = new Square(100, getRandomColor(colorsOfSquare), counter);
    square.render(document.body);

    square.changeText("God bless you" + " " + counter);

    square.element.onclick = () => {
        square.delete(document.body);
        counter = 0;
    };

    counter = counter + 1;
};

const addText = (text) => {
    const span = document.createElement("span");
    span.textContent = text;

    document.body.appendChild(span);
};


window.onblur = () => {
    document.title = "Hey, come back!";
}

window.onfocus = () => {
    document.title = "Focused";
}

window.onclose = () => {

};