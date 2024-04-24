const graphData = {
  "nodes": [
    {
      "name": 0,
      "x": 108,
      "y": 151
    },
    {
      "name": 1,
      "x": 228,
      "y": 294
    },
    {
      "name": 2,
      "x": 446,
      "y": 293
    },
    {
      "name": 3,
      "x": 598,
      "y": 145
    },
    {
      "name": 4,
      "x": 607,
      "y": 484
    },
    {
      "name": 5,
      "x": 349,
      "y": 486
    },
    {
      "name": 6,
      "x": 111,
      "y": 489
    }
  ],
  "paths": [
    {
      "id": 0,
      "from": 0,
      "to": 1
    },
    {
      "id": 1,
      "from": 1,
      "to": 2
    },
    {
      "id": 2,
      "from": 2,
      "to": 3
    },
    {
      "id": 3,
      "from": 3,
      "to": 4
    },
    {
      "id": 4,
      "from": 4,
      "to": 2
    },
    {
      "id": 5,
      "from": 2,
      "to": 5
    },
    {
      "id": 6,
      "from": 5,
      "to": 6
    },
    {
      "id": 7,
      "from": 6,
      "to": 0
    }
  ]
};

const pointsData = {
  "nodes": [
    {
      "name": 0,
      "x": 159,
      "y": 190
    },
    {
      "name": 1,
      "x": 184,
      "y": 257
    },
    {
      "name": 2,
      "x": 272,
      "y": 303
    },
    {
      "name": 3,
      "x": 331,
      "y": 300
    },
    {
      "name": 4,
      "x": 392,
      "y": 302
    },
    {
      "name": 5,
      "x": 472,
      "y": 247
    },
    {
      "name": 6,
      "x": 539,
      "y": 187
    },
    {
      "name": 7,
      "x": 591,
      "y": 222
    },
    {
      "name": 8,
      "x": 593,
      "y": 316
    },
    {
      "name": 9,
      "x": 617,
      "y": 358
    },
    {
      "name": 10,
      "x": 617,
      "y": 421
    },
    {
      "name": 11,
      "x": 558,
      "y": 443
    },
    {
      "name": 12,
      "x": 511,
      "y": 388
    },
    {
      "name": 13,
      "x": 414,
      "y": 341
    },
    {
      "name": 14,
      "x": 369,
      "y": 416
    },
    {
      "name": 15,
      "x": 275,
      "y": 472
    },
    {
      "name": 16,
      "x": 193,
      "y": 473
    },
    {
      "name": 17,
      "x": 116,
      "y": 417
    },
    {
      "name": 18,
      "x": 97,
      "y": 372
    },
    {
      "name": 19,
      "x": 92,
      "y": 278
    },
    {
      "name": 20,
      "x": 123,
      "y": 212
    }
  ],
  "paths": []
};

function checkIsNodeBeteen(edge1, edge2, node) {
  
}

function observeBetweenPoints(graphData, pointsData) {
  const { nodes, paths } = graphData;
  const graphNodesDictionary = nodes.reduce((dictionary, node) => {
    dictionary[node.name] = node;
    return dictionary;
  }, {});

  const inBetweenData = paths.reduce((inBetweenData, { id, from, to }) => {
    const edge1 = graphNodesDictionary[from];
    const edge2 = graphNodesDictionary[to];
    const inBetweenNodes = pointsData.nodes.reduce((inBetweenNodes, node) => {
      if (checkIsNodeBeteen(edge1, edge2, node)) {
        inBetweenNodes.push(node.name);
      }
      return inBetweenNodes;
    }, []);
    if (inBetweenNodes.length) {
      inBetweenData.push({
        pathId: id,
        inBetweenNodes,
      });
    }
    return inBetweenData;
  }, []);

  return inBetweenData;
}

const observedData = observeBetweenPoints(graphData, pointsData);

console.log(observedData);