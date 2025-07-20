import React, { useState, useEffect } from "react";

const TreeNode = ({ node, searchTerm, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const hasMatch = node.name.toLowerCase().includes(searchTerm);
    const hasChildMatch = node.children?.some(child =>
      JSON.stringify(child).toLowerCase().includes(searchTerm)
    );
    if (searchTerm && (hasMatch || hasChildMatch)) setExpanded(true);
  }, [searchTerm]);

  const matches = searchTerm && node.name.toLowerCase().includes(searchTerm);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4 mt-2">
      <div
        className={`font-medium cursor-pointer ${matches ? "bg-yellow-200" : ""}`}
        onClick={() => hasChildren && setExpanded(prev => !prev)}
      >
        {node.name}
      </div>
      {node.code && (
        <div className="text-sm text-gray-500 ml-4">Code: {node.code}</div>
      )}
      {hasChildren && expanded && (
        <div className="ml-4 border-l pl-4">
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} searchTerm={searchTerm} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data, searchTerm }) => (
  <div>
    {data.map((item, index) => (
      <TreeNode key={index} node={item} searchTerm={searchTerm.toLowerCase()} />
    ))}
  </div>
);

export default TreeView;
