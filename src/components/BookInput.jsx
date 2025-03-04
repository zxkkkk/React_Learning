// src/components/BookInput.js
import React, { useState, useEffect } from "react";

const BookInput = ({ onAddBook, onEditBook, editBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setYear(editBook.year);
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, year };
    if (editBook) {
      onEditBook({ ...editBook, ...book });
    } else {
      onAddBook(book);
    }
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">{editBook ? "保存编辑" : "添加图书"}</button>
    </form>
  );
};

export default BookInput;
