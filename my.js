function tinhtong() {
    let number = document.getElementById('number').value;

    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (number % 3 == 0) {
            sum = sum + i;

        } else {
            alert("error");
        }
    }
    document.write(sum);
}