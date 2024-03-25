import { createNewBook, newBookCreator } from "./controller";
import Storage from "./storage";
import Book from "./book";

function createDivElement(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function createPara(paraClass) {
    const para = document.createElement('p');
    if (paraClass !== '') {
        para.classList.add(paraClass);
    }
    return para
}

function createToggle() {
    
    const toggleCont = createDivElement('toggle-cont');
    const label1 = document.createElement('label')
    label1.classList.add('switch')
    
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('type', 'checkbox');
    
    const span = document.createElement('span');
    span.classList.add('toggle');
    
    label1.appendChild(checkBox);
    label1.appendChild(span);
    
    toggleCont.appendChild(label1);
    return toggleCont
}

function createCard(title, author, isRead=false) {
    const cardContainer = createDivElement('card-container');
    const titlePara = createPara('title');
    const authorPara = createPara('author');
    const toggleElement = createToggle();
    const deleteCard = document.createElement('span');
    deleteCard.classList.add('delete-card-button');
    deleteCard.textContent = 'X';
    titlePara.textContent = title;
    authorPara.textContent = author;
    const checkBox = toggleElement.querySelector('.checkbox');
    checkBox.checked = isRead;
    checkBox.addEventListener('click', ()=> {
        Storage.updateReadStatus(title);
        renderContainer(Storage.getBooksList());
    })
    
    cardContainer.appendChild(titlePara);
    cardContainer.appendChild(authorPara);
    cardContainer.appendChild(toggleElement);
    cardContainer.appendChild(deleteCard);
    
    return cardContainer;
}

function openModal () {
    const modalWindow = document.querySelector('.modal');
    modalWindow.showModal();
    modalWindow.style.display = 'flex';
}

function closeModal() {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isReadInput = document.querySelector('#read');
    const titleError = document.querySelector('.errormessage-title')

    const modalWindow = document.querySelector('.modal');
    modalWindow.style.display = 'none';
    clearElementsValue(titleInput, authorInput, isReadInput, titleError);
    modalWindow.close();
}   

function clearElementsValue (...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i].value === 'string') {
            args[i].value = '';
        }
        if (args[i].type === 'checkbox') {
            args[i].checked = false;
        }

        if (args[i].textContent) {
            args[i].textContent = '';
        }
    }
}


function aDDdeleteCardFeature() {
    const cardsContainer = document.querySelector('.container');
    cardsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-card-button')) {
            const cardElement = event.target.closest('.card-container');
            const cardTitle = cardElement.querySelector('.title');
            Storage.removeBookfromList(cardTitle.textContent);
            renderContainer(Storage.getBooksList());
        }
    })
    //Darken the card if mouse over the close button
    cardsContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('delete-card-button')) {
            const cardElement = event.target.closest('.card-container');
            cardElement.style.filter = 'brightness(70%)';
        }
    })
    //Restore style if mouseout
    cardsContainer.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('delete-card-button')) {
            const cardElement = event.target.closest('.card-container');
            cardElement.style.filter = 'brightness(100%)';
        }
    })
    
}

function addNewCard() {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isReadInput = document.querySelector('#read');
    const titleError = document.querySelector('.errormessage-title')
    // Implement error catching
    if (newBookCreator.testTitle(titleInput.value) === false) {
        titleInput.value = '';
        titleError.textContent = 'Title must be 4 - 50 letters long!';
        return
    }

    if (newBookCreator.testTitle(titleInput.value) === true) {
        const book = newBookCreator.create(titleInput.value, authorInput.value, isReadInput.checked);
        Storage.addBookToList(book);
        
        clearElementsValue(titleInput, authorInput, isReadInput, titleError);
        closeModal();
        renderContainer(Storage.getBooksList())
    }
}


function renderContainer (bookArray) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    if (bookArray !== undefined){
        for (let i = 0; i < bookArray.length; i++) {
            let card = createCard(bookArray[i].title, bookArray[i].author, bookArray[i].isRead);
            card.classList.add(bookArray[i].isRead)
            container.appendChild(card);
        }
    }
}

function loadScreen() {
    const addBookButton = document.querySelector('.addBookButton');
    const closeModalButton = document.querySelector('.close-modal-button');
    const createNewBookButton = document.querySelector('.add-book-button');

    addBookButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    createNewBookButton.addEventListener('click', addNewCard)
    
    aDDdeleteCardFeature();
    renderContainer(Storage.getBooksList());
}

export {loadScreen}


