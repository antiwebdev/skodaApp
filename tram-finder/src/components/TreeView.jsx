import React, { useState, useEffect } from "react";

const TreeNode = ({ node, searchTerm, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  const nodeText = node.code ? `${node.name} (${node.code})` : node.name;
  const lowerSearch = searchTerm.toLowerCase();
  const matches = lowerSearch && nodeText.toLowerCase().includes(lowerSearch);

  const hasChildren = node.children && node.children.length > 0;

  // Поиск совпадений внутри детей
  const hasMatchInChildren = hasChildren
    ? node.children.some(child =>
        JSON.stringify(child).toLowerCase().includes(lowerSearch)
      )
    : false;

  // Раскрытие только при поиске
  useEffect(() => {
    if (lowerSearch) {
      setExpanded(matches || hasMatchInChildren);
    }
  }, [searchTerm]);

  // Разрешить пользователю вручную открывать/закрывать
  const handleClick = () => {
    setExpanded(prev => !prev);
  };

  // Подсветка
  const highlightStyle = matches
    ? "bg-blue-100 border-l-4 border-blue-500 pl-2"
    : "";

  return (
    <div className="ml-4 mt-1">
      <div
        className={`cursor-pointer font-medium hover:text-blue-600 transition ${highlightStyle}`}
        onClick={handleClick}
      >
        {node.name}
      </div>

      {node.code && (
        <div className="ml-6 text-sm text-gray-500">Code: {node.code}</div>
      )}

      {hasChildren && expanded && (
        <div className="ml-4 border-l border-gray-300 pl-3">
          {node.children.map((child, i) => (
            <TreeNode
              key={i}
              node={child}
              searchTerm={searchTerm}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data, searchTerm }) => {
  return (
    <>
      {data.map((item, idx) => (
        <TreeNode key={idx} node={item} searchTerm={searchTerm.trim()} />
      ))}
    </>
  );
};

export default TreeView;
