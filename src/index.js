import Book from "./modules/book";
import Storage from "./modules/storage";
import { loadScreen } from "./modules/UI";


loadScreen(Storage.getBooksList())