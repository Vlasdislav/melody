const selector = (name) => document.querySelector(name);
const selectorAll = (name) => document.querySelectorAll(name);

const floors = selectorAll('.house path'),
      counter = selector('.counter'),
      counterUp = selector('.counter-up'),
      counterDown = selector('.counter-down');

let currentFloor = 2;

const convertNumberForPresentation = (x) => `${Math.floor(x % 100 / 10)}${x % 10}`;

const selectionDuringCounting = (x) => floors[x - 2].classList.add('current-floor');

const notSelectionDuringCounting = (x) => floors[x - 2].classList.remove('current-floor');

floors.forEach(floor => {
    floor.addEventListener('mouseover', () => {
        notSelectionDuringCounting(currentFloor);
        currentFloor = floor.dataset.floor;
        counter.textContent = currentFloor;
        selectionDuringCounting(currentFloor);
    })
});

counterUp.addEventListener('click', () => {
    notSelectionDuringCounting(currentFloor);
    
    if (currentFloor !== 18)
        counter.textContent = convertNumberForPresentation(++currentFloor);

    selectionDuringCounting(currentFloor);
});

counterDown.addEventListener('click', () => {
    notSelectionDuringCounting(currentFloor);

    if (currentFloor !== 2)
        counter.textContent = convertNumberForPresentation(--currentFloor);

    selectionDuringCounting(currentFloor);
});