import { useState } from "react";
import ListFilter from "./ListFilter";

// 父组件 ListFilterParent
const ListFilterParent = () => {
  const [query, setQuery] = useState(""); // 搜索框的值
  const items = ["Apple", "Banana", "Orange", "Grape"]; // 初始列表项

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />{" "}
      {/* 搜索框，用于输入查询条件 */}
      <ListFilter items={items} query={query} />{" "}
      {/* 将 items 和 query 传递给 ListFilter 组件 */}
    </div>
  );
};

export default ListFilterParent;
