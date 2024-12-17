function RandomElement(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

computer_num = RandomElement(1, 10);

function generate() {
    computer_num = RandomElement(1, 10);
    console.log("Новое число, сгенерированное компьютером -", computer_num);
}

function calculate() {
    num = document.getElementById('you_num').value;
    num = Number(num)
    console.log("Ваше число", num);
    console.log("Число сгенерированное компьютером", computer_num);
    if (num === computer_num) {
        result = "Вы угадали!x";
        const resultElement = document.getElementById('result'); // Получаем элемент
        resultElement.innerText = `${result}`;
        resultElement.style.color = "green";
    } else if (num > computer_num) {
        result = "Ваше число больше загаданного компьютером";
        const resultElement = document.getElementById('result'); // Получаем элемент
        resultElement.innerText = `${result}`;
        resultElement.style.color = "red";
    } else {
        result = "Ваше число меньше загаданного компьютером";
        const resultElement = document.getElementById('result'); // Получаем элемент
        resultElement.innerText = `${result}`;
        resultElement.style.color = "red";
    }
}
