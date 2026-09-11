function calculateAge() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();

    if (!document.getElementById("birthDate").value) {
        document.getElementById("ageResult").innerText =
            "Please enter your birth date.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your age is " + age + " years.";
}


function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("bmiResult").innerText =
            "Please enter weight and height.";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById("bmiResult").innerText =
        "Your BMI is " + bmi.toFixed(1);
}