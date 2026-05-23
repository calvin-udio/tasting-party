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
      { name: "Carapelli", tastingNotes: "Description 1" },
      { name: "Trader Joe’s", tastingNotes: "Description 2" },
      { name: "La Espanola", tastingNotes: "Description 3" },
      { name: "Graza Drizzle", tastingNotes: "Description 4" },
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
    nominatedBy: "Grace and Alex",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
    ],
    correctOrder: [1, 4, 2, 3],
  },
  {
    category: "Pickes",
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
    category: "Ice Cream",
    nominatedBy: "Seth and Rachel",
    types: [
      { name: "A", tastingNotes: "Description 1" },
      { name: "B", tastingNotes: "Description 2" },
      { name: "C", tastingNotes: "Description 3" },
      { name: "D", tastingNotes: "Description 4" },
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
