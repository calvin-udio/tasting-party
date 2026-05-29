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
      { name: "Honeycrisp", tastingNotes: "Balanced sweet-tart flavor and juicy bite" },
      { name: "Fuji", tastingNotes: "Very sweet and dense with a mild honey-like flavor" },
      { name: "Granny Smith", tastingNotes: "Sharp tartness with an almost citrusy finish" },
      { name: "Gala", tastingNotes: "Mildly sweet and floral" },
    ],
    correctOrder: [2, 4, 1, 3],
  },
  {
    category: "Tuscan Red Wine",
    nominatedBy: "Josie and Griffin",
    types: [
      { name: "Rosso di Montalcino", tastingNotes: "Fresh, vibrant Sangiovese — made for early drinking\nRed cherry, raspberry, wild strawberry, violet, dried herbs\nBright acidity, fine tannins, clean mineral finish" },
      { name: "Cortona Syrah", tastingNotes: "Tuscan Syrah with a Northern Rhône personality\nBlackberry, cracked pepper, smoked meat, olive, violet\nConcentrated yet fresh — earthy, savory, long finish" },
      { name: "Chianti DOCG", tastingNotes: "Classic everyday Tuscan Sangiovese — fruit-forward\nRed cherry, cranberry, dried flowers, gentle spice\nMedium-bodied, bright acidity, smooth refreshing finish" },
      { name: "Brunello di Montalcino", tastingNotes: "Italy's most prestigious Sangiovese — structured and age-worthy\nBlack cherry, dried rose, tobacco, tea leaf, crushed stone\nFull-bodied, polished tannins, exceptionally long finish" },
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
      { name: "Cholula", tastingNotes: "Made with pequin and arbol peppers\nMild heat with a tangy, slightly smoky, nutty depth\nVinegary but well-balanced — the pepper flavor really comes through" },
      { name: "Tabasco", tastingNotes: "Made with just three ingredients: tabasco peppers, salt, and vinegar\nSharp, punchy, and very vinegar-forward\nHeat hits fast and fades fast\nThinner consistency — aged in oak barrels for up to three years" },
      { name: "Tapatío", tastingNotes: "Made with red peppers, garlic, and spices\nBold, savory and garlicky with a slow-building heat\nThicker consistency" },
      { name: "Valentina", tastingNotes: "Made with puya chiles, vinegar, and spices\nEarthy, tangy, and slightly sweet with a rich chile flavor\nLower heat — main focus is the flavor" },
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
      { name: "Ghirardelli", tastingNotes: "Double Chocolate: Rich, dark cocoa punch with molten chocolate chips. Deeply decadent" },
      { name: "Duncan Hines", tastingNotes: "Chewy Fudge: Classically sweet, ultra-chewy edge, and a glossy, crinkly top" },
      { name: "Pillsbury", tastingNotes: "Chocolate Fudge: Soft, cake-like crumb with a straightforward, milk-chocolate sweetness." },
      { name: "Homemade", tastingNotes: "Made with love" },
    ],
    correctOrder: [4, 2, 3, 1],
  },
]
