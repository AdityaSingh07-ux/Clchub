/* =========================
   CALCHUB - JAVASCRIPT
   ========================= */

/* ---------- AGE CALCULATOR ---------- */

function calculateAge() {

    const birthDateInput = document.getElementById("birthDate");
    const result = document.getElementById("ageResult");

    if (!birthDateInput.value) {
        result.textContent = "Please enter your birth date.";
        return;
    }

    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    if (birthDate > today) {
        result.textContent = "Birth date cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        `You are <strong>${years}</strong> years,
        <strong>${months}</strong> months and
        <strong>${days}</strong> days old.`;
}


/* ---------- BMI CALCULATOR ---------- */

function calculateBMI() {

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const heightCm = parseFloat(
        document.getElementById("height").value
    );

    const result = document.getElementById("bmiResult");

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        result.textContent =
            "Please enter valid weight and height.";
        return;
    }

    const heightM = heightCm / 100;

    const bmi = weight / (heightM * heightM);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    result.innerHTML =
        `BMI: <strong>${bmi.toFixed(1)}</strong>
        <br>
        ${category}`;
}


/* ---------- CALCULATOR SEARCH ---------- */

const searchInput =
    document.getElementById("calculatorSearch");

const calculatorCards =
    document.querySelectorAll(".calculator-card");

const noResults =
    document.getElementById("noResults");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            this.value.toLowerCase().trim();

        let visibleCards = 0;

        calculatorCards.forEach(function (card) {

            const cardName =
                card.dataset.name.toLowerCase();

            const cardText =
                card.innerText.toLowerCase();

            if (
                cardName.includes(searchText) ||
                cardText.includes(searchText)
            ) {

                card.style.display = "";

                visibleCards++;

            } else {

                card.style.display = "none";
            }

        });


        if (visibleCards === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

}


/* ---------- DARK MODE ---------- */

const themeToggle =
    document.getElementById("themeToggle");


function setTheme(isDark) {

    if (isDark) {

        document.body.classList.add("dark");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    } else {

        document.body.classList.remove("dark");

        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }
    }
}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("calchub-theme");

if (savedTheme === "dark") {
    setTheme(true);
}


/* Theme button */

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const isDark =
            document.body.classList.contains("dark");

        setTheme(!isDark);

        localStorage.setItem(
            "calchub-theme",
            !isDark ? "dark" : "light"
        );

    });

}


/* ---------- CURRENT YEAR ---------- */

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} CalcHub. All rights reserved.`;
}