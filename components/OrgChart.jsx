import React from "react";
import { useState } from "react";
import { Treebeard } from "react-treebeard";

const treeData = {
  name: "root",
  toggled: true,
  children: [
    {
      name: "parent",
      children: [{ name: "child1" }, { name: "child2" }],
    },
    {
      name: "loading parent",
      loading: true,
      children: [],
    },
    {
      name: "parent",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }],
        },
      ],
    },
  ],
};

const OrgChar = () => {
  const [data, setData] = useState(treeData);
  const [cursor, setCursor] = useState(false);
  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Treebeard data={data} onToggle={onToggle} />
    </div>
  );
};
export default OrgChar;
