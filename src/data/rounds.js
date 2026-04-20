// correctOrder[i] = index in types[] that corresponds to sample (i+1)
// e.g. correctOrder[0] = 2 means "Sample 1 is types[2]"
// Update correctOrder for each round once you know your actual sample arrangement.
// Note: getting 3 correct is impossible in a bijection — scores are 0, 1, 2, or 4.

export const ROUNDS = [
  {
    category: "Olive Oil",
    nominatedBy: "Raines and Becca",
    types: [
      { name: "Olive Oil 1", tastingNotes: "Tasting Notes 1" },
      { name: "Olive Oil 2", tastingNotes: "Tasting Notes 2" },
      { name: "Olive Oil 3", tastingNotes: "Tasting Notes 3" },
      { name: "Olive Oil 4", tastingNotes: "Tasting Notes 4" },
    ],
    correctOrder: [2, 0, 3, 1],
  },
  {
    category: "Single-Origin Dark Chocolates",
    nominatedBy: "Player 2",
    types: [
      { name: "Ecuador 72%", tastingNotes: "Bright floral notes with a fudgy, smooth texture" },
      { name: "Madagascar 75%", tastingNotes: "Intensely fruity with red berry and citrus notes" },
      { name: "Ghana 70%", tastingNotes: "Earthy and robust with classic deep chocolate flavor" },
      { name: "Peru 68%", tastingNotes: "Nutty and caramel-like with a clean, mild finish" },
    ],
    correctOrder: [1, 3, 0, 2],
  },
  {
    category: "Hot Sauces",
    nominatedBy: "Player 3",
    types: [
      { name: "Tabasco", tastingNotes: "Vinegary and bright with a clean, sharp heat" },
      { name: "Cholula", tastingNotes: "Mild and tangy with a mild chili pepper base" },
      { name: "Sriracha", tastingNotes: "Sweet, garlicky, and medium heat with a thick texture" },
      { name: "Frank's RedHot", tastingNotes: "Buttery, tangy, and classic buffalo-style heat" },
    ],
    correctOrder: [3, 1, 2, 0],
  },
  {
    category: "Aged Balsamic Vinegars",
    nominatedBy: "Player 4",
    types: [
      { name: "3-Year", tastingNotes: "Thin, tart, and strongly acidic with a basic sweetness" },
      { name: "6-Year", tastingNotes: "Slightly thicker with balanced sweet-acid and mild complexity" },
      { name: "12-Year", tastingNotes: "Syrupy, complex, with caramel and fig undertones" },
      { name: "25-Year", tastingNotes: "Dense, luxurious, and intensely sweet with minimal acidity" },
    ],
    correctOrder: [0, 3, 1, 2],
  },
  {
    category: "Sparkling Waters",
    nominatedBy: "Player 5",
    types: [
      { name: "Pellegrino", tastingNotes: "Fine, persistent bubbles with soft minerality" },
      { name: "Perrier", tastingNotes: "Bold, large bubbles with a stronger mineral character" },
      { name: "Topo Chico", tastingNotes: "Very aggressive bubbles with a clean, crisp finish" },
      { name: "Gerolsteiner", tastingNotes: "Medium bubbles with a notably high mineral content" },
    ],
    correctOrder: [2, 1, 3, 0],
  },
  {
    category: "Raw Honeys",
    nominatedBy: "Player 6",
    types: [
      { name: "Wildflower", tastingNotes: "Complex, floral, and variable — depends on the season" },
      { name: "Manuka", tastingNotes: "Thick and earthy with a distinctive medicinal undertone" },
      { name: "Clover", tastingNotes: "Light, mild, and delicately sweet — the classic honey" },
      { name: "Buckwheat", tastingNotes: "Dark, robust, and molasses-like with bold earthy depth" },
    ],
    correctOrder: [1, 2, 0, 3],
  },
  {
    category: "Artisan Mustards",
    nominatedBy: "Player 7",
    types: [
      { name: "Dijon", tastingNotes: "Sharp, clean heat with a smooth, creamy texture" },
      { name: "Whole Grain", tastingNotes: "Mild, textured, and nutty with a tangy bite" },
      { name: "Yellow", tastingNotes: "Mild and tangy with turmeric-forward brightness" },
      { name: "Honey Mustard", tastingNotes: "Sweet and mild with a smooth, balanced sweetness" },
    ],
    correctOrder: [3, 0, 2, 1],
  },
  {
    category: "Blue Cheeses",
    nominatedBy: "Player 8",
    types: [
      { name: "Gorgonzola", tastingNotes: "Creamy and mild with a gentle earthiness" },
      { name: "Roquefort", tastingNotes: "Sharp, tangy, and crumbly with a strong sheep's milk character" },
      { name: "Stilton", tastingNotes: "Rich and complex with a mellow, buttery finish" },
      { name: "Danish Blue", tastingNotes: "Salty and sharp with a soft, moist texture" },
    ],
    correctOrder: [2, 0, 3, 1],
  },
  {
    category: "Fruit Jams",
    nominatedBy: "Player 9",
    types: [
      { name: "Strawberry", tastingNotes: "Bright, sweet, and familiar with a mild berry flavor" },
      { name: "Blackberry", tastingNotes: "Deep, slightly tart, and earthy with a seedy texture" },
      { name: "Apricot", tastingNotes: "Smooth, sweet, and floral with a subtle citrus note" },
      { name: "Fig", tastingNotes: "Dense, honey-like, and complex with an earthy sweetness" },
    ],
    correctOrder: [1, 3, 0, 2],
  },
  {
    category: "Single-Origin Coffees",
    nominatedBy: "Player 10",
    types: [
      { name: "Ethiopia Yirgacheffe", tastingNotes: "Bright and floral with blueberry and jasmine notes" },
      { name: "Colombia Huila", tastingNotes: "Sweet and balanced with caramel and mild citrus" },
      { name: "Sumatra Mandheling", tastingNotes: "Full-bodied, earthy, and low-acid with dark chocolate notes" },
      { name: "Guatemala Antigua", tastingNotes: "Smoky, spicy, and rich with a full, velvety body" },
    ],
    correctOrder: [3, 1, 2, 0],
  },
]
