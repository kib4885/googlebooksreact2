import axios from "axios";

export default {
  // Gets all books
  fetchBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  
// Gets saved books
  getSaved: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
