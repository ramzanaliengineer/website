const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const collections = [
  { slug: 'bridal', name: 'Bridal Collection', desc: 'Heirloom sets crafted for the most treasured day of your life.', icon: 'crown', image: px(29038003) },
  { slug: 'wedding', name: 'Wedding Collection', desc: 'Timeless bands and sets that mark forever.', icon: 'ring', image: px(30541169) },
  { slug: 'gold', name: 'Gold Collection', desc: '22K & 24K gold jewellery, handcrafted by master artisans.', icon: 'goldbar', image: px(24815712) },
  { slug: 'diamond', name: 'Diamond Collection', desc: 'Certified diamonds set in exquisite fine jewellery.', icon: 'diamond', image: px(29245554) },
  { slug: 'necklaces', name: 'Necklaces', desc: 'Statement necklaces for every occasion.', icon: 'necklace', image: px(5442472) },
  { slug: 'bracelets', name: 'Bracelets', desc: 'Delicate to bold, crafted for the wrist.', icon: 'bracelet', image: px(10526289) },
  { slug: 'bangles', name: 'Bangles', desc: 'Traditional bangles reimagined with modern elegance.', icon: 'bangles', image: px(1616097) },
  { slug: 'earrings', name: 'Earrings', desc: 'From studs to chandeliers — radiance for every ear.', icon: 'earrings', image: px(12585697) },
  { slug: 'rings', name: 'Rings', desc: 'Engagement, statement and everyday rings.', icon: 'ring-solo', image: px(30541174) },
  { slug: 'pendants', name: 'Pendants', desc: 'Singular pieces that carry meaning.', icon: 'pendant', image: px(29245547) },
  { slug: 'chains', name: 'Chains', desc: 'Fine gold chains, from classic to contemporary.', icon: 'chain', image: px(1616096) },
  { slug: 'anklets', name: 'Anklets', desc: 'Graceful gold anklets with intricate detail.', icon: 'anklet', image: px(7679889) },
  { slug: 'kids', name: "Kids' Jewellery", desc: 'Delicate, safe designs for little ones.', icon: 'pendant', image: px(11678215) },
  { slug: 'mens', name: "Men's Jewellery", desc: 'Bold rings, chains & bracelets for him.', icon: 'chain', image: px(380782) },
  { slug: 'watches', name: 'Luxury Watches', desc: 'Precision timepieces for the discerning collector.', icon: 'watch', image: px(2922718) },
]
