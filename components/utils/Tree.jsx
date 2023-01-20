import React from "react";
import styles from "../../styles/Tree.module.css";

const TreeNode = ({ name, picture, teamMembers }) => {
  return (
    <div className={styles.treeNode}>
      <div className={styles.nodeInfo}>
        <img src={picture} alt={name} className={styles.picture} />
        <p className={styles.name}>{name}</p>
      </div>
      <div className={styles.childNodes}>
        {teamMembers?.map((member, index) => (
          <TreeNode key={member._id} {...member} />
        ))}
      </div>
    </div>
  );
};

function Tree({ teamMembers }) {
  return (
    <div className={styles.tree}>
      {teamMembers.map((member, index) => (
        <TreeNode key={member._id} {...member} />
      ))}
    </div>
  );
}

export default Tree;
