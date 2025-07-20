import React from "react";

const TreeNode = ({ node }) => {
  return (
    <div className="ml-4 mt-2">
      <div className="font-medium">{node.name}</div>
      {node.children && (
        <div className="ml-4 border-l pl-4">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
      {node.code && (
        <div className="text-sm text-gray-500">Code: {node.code}</div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <TreeNode key={index} node={item} />
      ))}
    </div>
  );
};

export default TreeView;