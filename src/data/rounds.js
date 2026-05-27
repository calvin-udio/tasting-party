// correctOrder[i] = 1-based index in types[] that corresponds to sample (i+1)
// e.g. correctOrder[0] = 3 means "Sample 1 is types[2]" (type C)
// Types: 1=A, 2=B, 3=C, 4=D
// Update correctOrder for each round once you know your actual sample arrangement.
// Note: getting 3 correct is impossible in a bijection — scores are 0, 1, 2, or 4.
// Griffin, don't hack this please

export const ROUNDS = [
  {
    category: "Olive Oil",
    nominatedBy: "Raines and Becca",
    types: [
      { name: "Expensive EVOO", tastingNotes: "100pt rated Spanish olive oil\nFresh-cut grass, tomato leaf, green almond, pepper\nRich and silky" },
      { name: "Cheap EVOO", tastingNotes: "ShopRite brand basic olive oil\nMild olive, buttery, subtle pepper\nSmooth and approachable" },
      { name: "Lemon EVOO", tastingNotes: "Lemon infused olive oil\nBright lemon peel, light olive, fresh citrus\nSmooth and light-bodied" },
      { name: "Black Truffle EVOO", tastingNotes: "Black truffle infused olive oil\nEarthy mushroom, savory umami, deep lingering\nLight oil with intense aroma" },
    ],
    correctOrder: [3, 1, 4, 2],
  },
  {
    category: "Apples",
    nominatedBy: "Masha",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [2, 4, 1, 3],
  },
  {
    category: "Tuscan Red Wine",
    nominatedBy: "Josie and Griffin",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [4, 2, 3, 1],
  },
  {
    category: "Bagels",
    nominatedBy: "Ish and Parul",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [1, 4, 2, 3],
  },
  {
    category: "Pickles",
    nominatedBy: "Cyrus and Abbi",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [3, 2, 4, 1],
  },
  {
    category: "Rotisserie Chicken",
    nominatedBy: "Val",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [2, 3, 1, 4],
  },
  {
    category: "Beer",
    nominatedBy: "Smoony",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [4, 1, 3, 2],
  },
  {
    category: "Hot Sauce",
    nominatedBy: "Grace and Alex",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [3, 1, 4, 2],
  },
  {
    category: "Vanilla Bean Ice Cream",
    nominatedBy: "Seth and Rachel",
    types: [
      { name: "McConnell's", tastingNotes: "Classic, robust vanilla\nNot overly sweet" },
      { name: "Alec's Tahitian", tastingNotes: "Fruity, floral vanilla\nMarshmallow-like sweetness" },
      { name: "Alden's Organic", tastingNotes: "Mild, balanced vanilla\nLight, fluffy, aerated" },
      { name: "Straus Family Organic", tastingNotes: "Super premium, less air, more cream\nSweet cream and egg yolk forward" },
    ],
    correctOrder: [2, 4, 1, 3],
  },
  {
    category: "Brownies",
    nominatedBy: "Roy and Charlotte",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [4, 2, 3, 1],
  },
]
