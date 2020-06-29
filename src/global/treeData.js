const treeData = {
  root: {
    val: 'This is a tree',
    0: {
      val: 'I have children',
      0: { val: 'I have no children', 0: null, 1: null },
      1: {
        val: 'I have children',
        0: null,
        1: { val: 'I have no children', 0: null, 1: null },
      },
    },
    1: {
      val: 'I have no children',
      0: null,
      1: null,
    },
    2: {
      val: 'I have no children',
      0: null,
      1: null,
    },
    3: {
      val: 'I have no children',
      0: null,
      1: null,
    },
    4: {
      val: 'I have no children',
      0: null,
      1: null,
    },
  },
}

export  default treeData