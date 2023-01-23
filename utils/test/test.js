function maxWidth(user) {
  let maxWidth = 0;
  let queue = [{ node: user, width: 1 }];
  while (queue.length > 0) {
    let levelSize = queue.length;
    maxWidth = Math.max(maxWidth, levelSize);
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      for (let j = 0; j < curr.node.teamMembers?.length; j++) {
        queue.push({ node: curr.node.teamMembers[j], width: curr.width + 1 });
      }
    }
  }
  return maxWidth;
}

function getLevels(user) {
  let levels = [];
  let queue = [{ node: user, level: 0 }];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (!levels[curr.level]) {
        levels[curr.level] = [];
      }
      levels[curr.level].push(curr.node);
      for (let j = 0; j < curr.node?.teamMembers?.length; j++) {
        queue.push({ node: curr.node.teamMembers[j], level: curr.level + 1 });
      }
    }
  }
  return levels;
}

export { getLevels, maxWidth };
