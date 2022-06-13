const numberOfBikes = document.getElementById("form-bikes");
const numberOfEbikes = document.getElementById("form-ebikes");
const formDynamicBikes = document.getElementById("form-dynamic-bikes");
const formDynamicEBikes = document.getElementById("form-dynamic-ebikes");

initializeUndefinedValues("bike")
initializeUndefinedValues("ebike")

numberOfBikes.addEventListener('change', () => {
    resetBeforeChange("bike");
    let num = numberOfBikes.value
    if (num > 0 && num <= 5) {
        formDynamicBikes.style.display = "block"
        for (let i = 1; i <= 5; i++) {
            let currentBikePerson = document.getElementById(`bike-person-${i}`);
            console.log(currentBikePerson)
            if (i <= num) {
                currentBikePerson.querySelector("input").value = ""
                currentBikePerson.style.display = "block"
                currentBikePerson.querySelector("input").setAttribute("required", "required");
            } else {
                currentBikePerson.querySelector("input").value = ""
                currentBikePerson.style.display = "none"
                currentBikePerson.querySelector("input").removeAttribute("required");
            }
        }
    } else {
        formDynamicBikes.style.display = "none"
    }
});

numberOfEbikes.addEventListener('change', () => {
    resetBeforeChange("ebike");
    let num = numberOfEbikes.value
    if (num > 0 && num <= 5) {
        formDynamicEBikes.style.display = "block"
        for (let i = 1; i <= 5; i++) {
            let currentBikePerson = document.getElementById(`ebike-person-${i}`);
            console.log(currentBikePerson)
            if (i <= num) {
                currentBikePerson.style.display = "block"
                currentBikePerson.querySelector("input").setAttribute("required", "required");
            } else {
                currentBikePerson.style.display = "none"
                currentBikePerson.querySelector("input").removeAttribute("required");
            }
        }
    } else {
        formDynamicEBikes.style.display = "none"
    }
});

function resetBeforeChange(bikeOrEbike) {
    for (let i = 1; i <= 5; i++) {
        let currentPerson = document.getElementById(`${bikeOrEbike}-person-${i}`);
        currentPerson.querySelector("input").value = ""
        currentPerson.style.display = "none";
        currentPerson.querySelector("input").removeAttribute("required");
    }
}

function initializeUndefinedValues(bikeOrEbike) {
    for (let i = 1; i <= 5; i++) {
        let currentPerson = document.getElementById(`${bikeOrEbike}-person-${i}`);
        currentPerson.querySelector("input").value = ""

    }
}