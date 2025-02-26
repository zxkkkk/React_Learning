import React from "react";

const BookItem = ({ book, onEdit, onDelete, onSelect }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>作者：{book.author}</p>
        <p>出版年份：{book.year}</p>
      </div>
      <div className="book-actions">
        <button onClick={() => onEdit(book)}>编辑</button>
        <button onClick={() => onDelete(book)}>删除</button>
        <button onClick={() => onSelect(book)}>详情</button>
      </div>
    </div>
  );
};

export default BookItem;
