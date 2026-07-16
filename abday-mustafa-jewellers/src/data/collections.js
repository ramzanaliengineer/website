const img = (id, w = 1200) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`

export const collections = [
  { slug: 'bridal', name: 'Bridal Collection', desc: 'Heirloom sets crafted for the most treasured day of your life.', image: img('photo-1601121141461-9d6647bca1ed') },
  { slug: 'wedding', name: 'Wedding Collection', desc: 'Timeless bands and sets that mark forever.', image: img('photo-1608042314453-ae338d80c427') },
  { slug: 'gold', name: 'Gold Collection', desc: '22K & 24K gold jewellery, handcrafted by master artisans.', image: img('photo-1611591437281-460bfbe1220a') },
  { slug: 'diamond', name: 'Diamond Collection', desc: 'Certified diamonds set in exquisite fine jewellery.', image: img('photo-1515562141207-7a88fb7ce338') },
  { slug: 'necklaces', name: 'Necklaces', desc: 'Statement necklaces for every occasion.', image: img('photo-1543294001-f7cd5d7fb516') },
  { slug: 'bracelets', name: 'Bracelets', desc: 'Delicate to bold, crafted for the wrist.', image: img('photo-1611652022419-a9419f74343d') },
  { slug: 'bangles', name: 'Bangles', desc: 'Traditional bangles reimagined with modern elegance.', image: img('photo-1616401784845-180882ba9ba8') },
  { slug: 'earrings', name: 'Earrings', desc: 'From studs to chandeliers — radiance for every ear.', image: img('photo-1573408301185-9146fe634ad0') },
  { slug: 'rings', name: 'Rings', desc: 'Engagement, statement and everyday rings.', image: img('photo-1620656798579-1984d9e87df7') },
  { slug: 'pendants', name: 'Pendants', desc: 'Singular pieces that carry meaning.', image: img('photo-1587467512961-120760940315') },
  { slug: 'chains', name: 'Chains', desc: 'Fine gold chains, from classic to contemporary.', image: img('photo-1610694955371-d4a3e0ce4b25') },
  { slug: 'anklets', name: 'Anklets', desc: 'Graceful gold anklets with intricate detail.', image: img('photo-1599643478518-a784e5dc4c8f') },
  { slug: 'kids', name: "Kids' Jewellery", desc: 'Delicate, safe designs for little ones.', image: img('photo-1620656798579-1984d9e87df7', 1000) },
  { slug: 'mens', name: "Men's Jewellery", desc: 'Bold rings, chains & bracelets for him.', image: img('photo-1611652022419-a9419f74343d', 1000) },
  { slug: 'watches', name: 'Luxury Watches', desc: 'Precision timepieces for the discerning collector.', image: img('photo-1523170335258-f5ed11844a49') },
]
