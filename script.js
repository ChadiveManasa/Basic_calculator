const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            currentValue = "";
            display.value = "";
            return;
        }

        if (value === "=") {
            try {
                currentValue = eval(currentValue);
                display.value = currentValue;
            } catch {
                display.value = "Error";
                currentValue = "";
            }
            return;
        }

        currentValue += value;
        display.value = currentValue;
    });
});
