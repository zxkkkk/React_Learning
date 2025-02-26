import React, { useState } from "react";
import "./App.css";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Card from "./components/Card";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editBook, setEditBook] = useState(null);

  // 添加图书
  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  // 编辑图书
  const handleEditBook = (updatedBook) => {
    setBooks(books.map((book) => (book === editBook ? updatedBook : book)));
    setEditBook(null);
  };

  // 查看图书详情
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  // 删除图书
  const handleDeleteBook = (book) => {
    setBooks(books.filter((b) => b !== book));
    if (selectedBook === book) {
      setSelectedBook(null);
    }
  };

  // 触发编辑操作
  const handleEditClick = (book) => {
    setEditBook(book);
  };

  return (
    <div className="app-container">
      <Card
        header={<h1>图书管理系统</h1>}
        body={
          <>
            <BookInput
              onAddBook={handleAddBook}
              onEditBook={handleEditBook}
              editBook={editBook}
            />
            <BookList
              books={books}
              onEdit={handleEditClick}
              onSelect={handleSelectBook}
              onDelete={handleDeleteBook}
            />
            {selectedBook && <BookDetail selectedBook={selectedBook} />}
          </>
        }
      />
    </div>
  );
};

export default App;
