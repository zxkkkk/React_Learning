// src/components/BookDetail.js
import React from "react";

const BookDetail = ({ selectedBook }) => {
  if (!selectedBook) {
    return <div>请选择一个图书查看详情</div>;
  }

  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <p>书名：{selectedBook.title}</p>
      <p>作者：{selectedBook.author}</p>
      <p>出版年份：{selectedBook.year}</p>
    </div>
  );
};

export default BookDetail;
