const selector = (name) => document.querySelector(name);
const selectorAll = (name) => document.querySelectorAll(name);

const floors = selectorAll('.house path'),
      counters = selectorAll('.counter'),
      counterUp = selector('.counter-up'),
      counterDown = selector('.counter-down'),
      modal = selector('.modal'),
      modalCloseButton = selector('.modal-close-button'),
      viweFlatsButton = selector('.viwe-flats');

let currentFloor = 2;

const convertNumberForPresentation = (x) => `${Math.floor(x % 100 / 10)}${x % 10}`;

const selectionDuringCounting = (x) => floors[x - 2].classList.add('current-floor');

const notSelectionDuringCounting = (x) => floors[x - 2].classList.remove('current-floor');

const toggleModal = () => modal.classList.toggle('active');

const inputCounters = () => {
    counters.forEach(counter => {
        counter.textContent = convertNumberForPresentation(currentFloor);
    });
}

floors.forEach(floor => {
    floor.addEventListener('mouseover', () => {
        notSelectionDuringCounting(currentFloor);
        currentFloor = floor.dataset.floor;
        inputCounters();
        selectionDuringCounting(currentFloor);
    })

    floor.addEventListener('click', toggleModal);
});

modalCloseButton.addEventListener('click', toggleModal);
viweFlatsButton.addEventListener('click', toggleModal);

counterUp.addEventListener('click', () => {
    notSelectionDuringCounting(currentFloor);
    
    if (currentFloor !== 18) {
        ++currentFloor;
        inputCounters();
    }

    selectionDuringCounting(currentFloor);
});

counterDown.addEventListener('click', () => {
    notSelectionDuringCounting(currentFloor);

    if (currentFloor !== 2) {
        --currentFloor;
        inputCounters();
    }

    selectionDuringCounting(currentFloor);
});