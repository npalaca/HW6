// Displays all body nodes
const bodyNodes = () => {
  const body = document.body;
  const nodes = body.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i]);
  }
}

bodyNodes();
