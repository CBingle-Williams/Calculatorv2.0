window.onload = function (){
    var buttons = document.getElementsByTagName('button');
    var screen = document.querySelectorAll('h2')[0];
    for (var button of buttons){
        if (button.innerHTML == 'AC') {
            button.addEventListener('click',clearScreen());
        }
        else if (button.innerHTML == '=') {
            button.addEventListener('click',calculate());
        }
        else {
            button.addEventListener('click',printScreen(button.innerHTML));
        }
    }

    function printScreen(string) {
        return function() {
            if (screen.innerHTML == '0.00') {screen.innerHTML = '';}
            screen.innerHTML += string;
        }
    }
	function clearScreen() {
        return function() {
            screen.innerHTML = '0.00';
        };
    }
    function calculate() {
        return function () {
            try {
                screen.innerHTML = eval(screen.innerHTML);
            }
            catch {
                screen.innerHTML = "Math Error!";
                setTimeout(clearScreen(),1000);
            }
        };
    }
};