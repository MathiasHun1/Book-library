/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/book */ \"./src/modules/book.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n\n\n\n(0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.loadScreen)(_modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBooksList())\n\n//# sourceURL=webpack://book_library/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadScreen: () => (/* binding */ loadScreen)\n/* harmony export */ });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/modules/controller.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book */ \"./src/modules/book.js\");\n\n\n\n\nfunction createDivElement(className) {\n    const div = document.createElement('div');\n    div.classList.add(className);\n    return div;\n}\n\nfunction createPara(paraClass) {\n    const para = document.createElement('p');\n    if (paraClass !== '') {\n        para.classList.add(paraClass);\n    }\n    return para\n}\n\nfunction createToggle() {\n    \n    const toggleCont = createDivElement('toggle-cont');\n    const label1 = document.createElement('label')\n    label1.classList.add('switch')\n    \n    const checkBox = document.createElement('input');\n    checkBox.classList.add('checkbox');\n    checkBox.setAttribute('type', 'checkbox');\n    \n    const span = document.createElement('span');\n    span.classList.add('toggle');\n    \n    label1.appendChild(checkBox);\n    label1.appendChild(span);\n    \n    toggleCont.appendChild(label1);\n    return toggleCont\n}\n\nfunction createCard(title, author, isRead=false) {\n    const cardContainer = createDivElement('card-container');\n    const titlePara = createPara('title');\n    const authorPara = createPara('author');\n    const toggleElement = createToggle();\n    const deleteCard = document.createElement('span');\n    deleteCard.classList.add('delete-card-button');\n    deleteCard.textContent = 'X';\n    titlePara.textContent = title;\n    authorPara.textContent = author;\n    const checkBox = toggleElement.querySelector('.checkbox');\n    checkBox.checked = isRead;\n    checkBox.addEventListener('click', ()=> {\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateReadStatus(title);\n        renderContainer(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBooksList());\n    })\n    \n    cardContainer.appendChild(titlePara);\n    cardContainer.appendChild(authorPara);\n    cardContainer.appendChild(toggleElement);\n    cardContainer.appendChild(deleteCard);\n    \n    return cardContainer;\n}\n\nfunction openModal () {\n    const modalWindow = document.querySelector('.modal');\n    modalWindow.showModal();\n    modalWindow.style.display = 'flex';\n}\n\nfunction closeModal() {\n    const titleInput = document.querySelector('#title');\n    const authorInput = document.querySelector('#author');\n    const isReadInput = document.querySelector('#read');\n    const titleError = document.querySelector('.errormessage-title')\n\n    const modalWindow = document.querySelector('.modal');\n    modalWindow.style.display = 'none';\n    clearElementsValue(titleInput, authorInput, isReadInput, titleError);\n    modalWindow.close();\n}   \n\nfunction clearElementsValue (...args) {\n    for (let i = 0; i < args.length; i++) {\n        if (typeof args[i].value === 'string') {\n            args[i].value = '';\n        }\n        if (args[i].type === 'checkbox') {\n            args[i].checked = false;\n        }\n\n        if (args[i].textContent) {\n            args[i].textContent = '';\n        }\n    }\n}\n\n\nfunction aDDdeleteCardFeature() {\n    const cardsContainer = document.querySelector('.container');\n    cardsContainer.addEventListener('click', (event) => {\n        if (event.target.classList.contains('delete-card-button')) {\n            const cardElement = event.target.closest('.card-container');\n            const cardTitle = cardElement.querySelector('.title');\n            _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeBookfromList(cardTitle.textContent);\n            renderContainer(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBooksList());\n        }\n    })\n    //Darken the card if mouse over the close button\n    cardsContainer.addEventListener('mouseover', (event) => {\n        if (event.target.classList.contains('delete-card-button')) {\n            const cardElement = event.target.closest('.card-container');\n            cardElement.style.filter = 'brightness(70%)';\n        }\n    })\n    //Restore style if mouseout\n    cardsContainer.addEventListener('mouseout', (event) => {\n        if (event.target.classList.contains('delete-card-button')) {\n            const cardElement = event.target.closest('.card-container');\n            cardElement.style.filter = 'brightness(100%)';\n        }\n    })\n    \n}\n\nfunction addNewCard() {\n    const titleInput = document.querySelector('#title');\n    const authorInput = document.querySelector('#author');\n    const isReadInput = document.querySelector('#read');\n    const titleError = document.querySelector('.errormessage-title')\n    // Implement error catching\n    if (_controller__WEBPACK_IMPORTED_MODULE_0__.newBookCreator.testTitle(titleInput.value) === false) {\n        titleInput.value = '';\n        titleError.textContent = 'Title must be 4 - 50 letters long!';\n        return\n    }\n\n    if (_controller__WEBPACK_IMPORTED_MODULE_0__.newBookCreator.testTitle(titleInput.value) === true) {\n        const book = _controller__WEBPACK_IMPORTED_MODULE_0__.newBookCreator.create(titleInput.value, authorInput.value, isReadInput.checked);\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addBookToList(book);\n        \n        clearElementsValue(titleInput, authorInput, isReadInput, titleError);\n        closeModal();\n        renderContainer(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBooksList())\n    }\n}\n\n\nfunction renderContainer (bookArray) {\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n    if (bookArray !== undefined){\n        for (let i = 0; i < bookArray.length; i++) {\n            let card = createCard(bookArray[i].title, bookArray[i].author, bookArray[i].isRead);\n            card.classList.add(bookArray[i].isRead)\n            container.appendChild(card);\n        }\n    }\n}\n\nfunction loadScreen() {\n    const addBookButton = document.querySelector('.addBookButton');\n    const closeModalButton = document.querySelector('.close-modal-button');\n    const createNewBookButton = document.querySelector('.add-book-button');\n\n    addBookButton.addEventListener('click', openModal);\n    closeModalButton.addEventListener('click', closeModal);\n    createNewBookButton.addEventListener('click', addNewCard)\n    \n    aDDdeleteCardFeature();\n    renderContainer(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBooksList());\n}\n\n\n\n\n\n\n//# sourceURL=webpack://book_library/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/book.js":
/*!*****************************!*\
  !*** ./src/modules/book.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\n    constructor(title, author, isRead=false) {\n        this.title = title;\n        this.author = author;\n        this.isRead = isRead;\n    }\n\n    setTitle(newTitle) {\n        this.title = newTitle;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    setAuthor(newAuthor) {\n        this.author = newAuthor;\n    }\n\n    getAuthor() {\n        return this.author;\n    }\n\n    setIsRead(set) {\n        this.isRead = set;\n    }\n\n    getIsread() {\n        return this.isRead;\n    }\n\n    changeIsread() {\n        this.isRead = !this.isRead;\n    }\n\n}\n\n//# sourceURL=webpack://book_library/./src/modules/book.js?");

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewBook: () => (/* binding */ createNewBook),\n/* harmony export */   newBookCreator: () => (/* binding */ newBookCreator)\n/* harmony export */ });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/modules/book.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\nfunction createNewBook(title, author, isRead) {\n    const titleRegex = /^[A-Za-z0-9\\s]{4,50}$/;;\n    const authorRegex = /^[A-Za-z0-9\\s]{4,50}$/;;\n    const isReadValue = isRead;\n    const findBook = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBook(title) || '';\n\n    if (isRead === 'checked') {\n        \n    }\n    if(!titleRegex.test(title)) {\n        alert('Use only normal characters, length have to be between 4-50');\n        return\n    }\n\n    if(!authorRegex.test(author)) {\n        alert('Use only normal characters, length have to be between 4-50');\n        return\n    }\n\n    if (findBook.title === title) {\n        alert('A book with this title already added');\n        return\n    }\n\n    console.log(findBook.title)\n    return new _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, author, isReadValue);\n}\n\nclass CreateNewBook {\n    constructor() {\n        this.titleRegex = /^[A-Za-z0-9\\s]{4,50}$/;;\n        this.authorRegex = /^[A-Za-z0-9\\s]{4,50}$/;;\n    }\n\n    testTitle(title) {\n        return this.titleRegex.test(title)\n    }\n\n    testAuthor(author) {\n        if(!this.authorRegex.test(author)) {\n            return 'Use only normal characters, length have to be between 4-50';\n        }\n    }\n\n    create(title, author, isRead) {\n        return new _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, author, isRead);\n    }\n}\n\nconst newBookCreator = new CreateNewBook()\n\n\n\n//# sourceURL=webpack://book_library/./src/modules/controller.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/modules/book.js\");\n\nclass Storage {\n    static saveBooksList(data) {\n        localStorage.setItem('booksList', JSON.stringify(data))\n    }\n\n    static getBooksList() {\n        if (localStorage.getItem('booksList')) {\n            return JSON.parse(localStorage.getItem('booksList'));\n        }\n        else {\n            return\n        }\n    }\n\n    static clearBookslist() {\n        localStorage.clear()\n    }\n\n    static addBookToList(book) {\n        if (book instanceof _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            const booksArray = Storage.getBooksList() || [];\n            booksArray.push(book);\n            Storage.saveBooksList(booksArray);\n        } else {\n            console.error('The provided argument is not an instance of the Book class.');\n        }\n    }\n\n    static getBook(title) {\n        const booksArray = Storage.getBooksList();\n        return booksArray.find((item) => {\n            return item.title === title;\n        })\n    }\n\n    static getBookIndex(title) {\n        const booksArray = Storage.getBooksList();\n        return booksArray.findIndex((item) => {\n            return item.title === title;\n        })\n    }\n\n    static removeBookfromList (title) {\n        const booksArray = Storage.getBooksList();\n        const bookToDeleteIndex = Storage.getBookIndex(title);\n        booksArray.splice(bookToDeleteIndex, 1);\n        Storage.saveBooksList(booksArray);\n    }\n\n    static updateReadStatus (title) {\n        const book = Storage.getBook(title);\n        const bookIndex = Storage.getBookIndex(title);\n        const updatedBook = new _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](book.title, book.author, book.isRead);\n        updatedBook.changeIsread();\n        const booksArray = Storage.getBooksList();\n        booksArray[bookIndex] = updatedBook;\n        Storage.saveBooksList(booksArray);\n    }\n}\n\n//# sourceURL=webpack://book_library/./src/modules/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;