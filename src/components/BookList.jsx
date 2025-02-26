import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onEdit, onSelect, onDelete }) => {
  return (
    <div className="book-list">
      <h2>图书列表</h2>
      {books.length === 0 ? (
        <p>暂无图书，请添加图书。</p>
      ) : (
        books.map((book, index) => (
          <BookItem
            key={index}
            book={book}
            onEdit={onEdit}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default BookList;
