const CATALOGS = {
  Biryani: {
    categories: [
      {
        title: 'Biryani',
        items: [
          { name: 'Chicken Biryani', veg: false, price: 28900, desc: 'Aromatic basmati rice layered with tender chicken and a blend of royal spices. Served with raita.', bestseller: true, rating: 4.3, ratingCount: '1200+', img: 'chicken-biryani-7yhl2xh4s9jq', addons: ['Veg Raita', 'Onion Salad'] },
          { name: 'Hyderabadi Chicken Dum Biryani', veg: false, price: 32900, desc: 'The classic dum biryani slow-cooked in sealed handi, infused with saffron and mint.', bestseller: true, rating: 4.5, ratingCount: '850+', img: 'hyderabadi-chicken-dum-biryani-8f3kl2x4s9jq', addons: ['Veg Raita', 'Salad'] },
          { name: 'Mutton Biryani', veg: false, price: 39900, desc: 'Succulent mutton pieces cooked with fragrant long-grain rice in rich masala.', rating: 4.4, ratingCount: '640+', img: 'mutton-biryani-5y7km2xh4s9jq', addons: ['Veg Raita', 'Onion Salad'] },
          { name: 'Veg Biryani', veg: true, price: 23900, desc: 'Fresh seasonal vegetables tossed with aromatic basmati rice and biryani masala.', rating: 4.1, ratingCount: '500+', img: 'veg-biryani-9y7kl2xh4s9jq', addons: ['Veg Raita', 'Boondi Raita'] },
          { name: 'Egg Biryani', veg: false, price: 25900, desc: 'Spicy masala rice layered with perfectly boiled egg masala.', rating: 4.0, ratingCount: '310+', img: 'egg-biryani-2y7kl2xh4s9jq' },
          { name: 'Paneer Biryani', veg: true, price: 26900, desc: 'Smoky paneer cubes layered with flavoured basmati rice and mint.', rating: 4.2, ratingCount: '280+', img: 'paneer-biryani-4y7kl2xh4s9jq', addons: ['Veg Raita', 'Gulab Jamun'] },
        ],
      },
      {
        title: 'Kebabs & Starters',
        items: [
          { name: 'Chicken Tikka Kebab', veg: false, price: 28900, desc: 'Boneless chicken marinated in yogurt and spices, grilled in clay oven.', bestseller: true, rating: 4.4, ratingCount: '720+', img: 'chicken-tikka-kebab-6y7kl2xh4s9jq', addons: ['Mint Chutney', 'Tandoori Roti'] },
          { name: 'Mutton Seekh Kebab', veg: false, price: 35900, desc: 'Minced mutton skewers roasted with aromatic spices and herbs.', rating: 4.3, ratingCount: '410+', img: 'mutton-seekh-kebab-3y7kl2xh4s9jq' },
          { name: 'Paneer Tikka', veg: true, price: 27900, desc: 'Cottage cheese marinated in spiced yogurt, char-grilled to perfection.', rating: 4.2, ratingCount: '380+', img: 'paneer-tikka-1y7kl2xh4s9jq' },
          { name: 'Chicken 65', veg: false, price: 26900, desc: 'Fiery South Indian style fried chicken tossed with curry leaves and chilies.', bestseller: true, rating: 4.5, ratingCount: '900+', img: 'chicken-65-7y7kl2xh4s9jq', addons: ['Mayo Dip', 'Raita'] },
        ],
      },
      {
        title: 'Main Course',
        items: [
          { name: 'Butter Chicken', veg: false, price: 32900, desc: 'Tandoori chicken simmered in silky tomato-butter gravy with cream and kasuri methi.', bestseller: true, rating: 4.6, ratingCount: '1500+', img: 'butter-chicken-9y7kl2xh4s9jq', addons: ['Butter Naan', 'Jeera Rice'] },
          { name: 'Chicken Dum Handi', veg: false, price: 35900, desc: 'Chicken slow-cooked in a thick gravy of onions, tomatoes and whole spices.', rating: 4.3, ratingCount: '600+', img: 'chicken-dum-handi-5y7kl2xh4s9jq' },
          { name: 'Paneer Butter Masala', veg: true, price: 29900, desc: 'Soft paneer in a rich, creamy tomato-cashew gravy.', rating: 4.4, ratingCount: '820+', img: 'paneer-butter-masala-8y7kl2xh4s9jq', addons: ['Butter Naan', 'Tandoori Roti'] },
          { name: 'Dal Tadka', veg: true, price: 21900, desc: 'Yellow lentils tempered with garlic, cumin and red chillies.', rating: 4.1, ratingCount: '350+', img: 'dal-tadka-0y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Breads & Rice',
        items: [
          { name: 'Butter Naan', veg: true, price: 4900, desc: 'Soft leavened flatbread brushed with butter.', rating: 4.3, ratingCount: '2000+', img: 'butter-naan-2y7kl2xh4s9jq' },
          { name: 'Garlic Naan', veg: true, price: 5900, desc: 'Naan topped with garlic and coriander, brushed with butter.', rating: 4.2, ratingCount: '1100+', img: 'garlic-naan-4y7kl2xh4s9jq' },
          { name: 'Tandoori Roti', veg: true, price: 3900, desc: 'Whole wheat flatbread from the clay oven.', rating: 4.0, ratingCount: '900+', img: 'tandoori-roti-6y7kl2xh4s9jq' },
          { name: 'Jeera Rice', veg: true, price: 18900, desc: 'Steamed basmati rice tempered with cumin seeds.', rating: 4.0, ratingCount: '450+', img: 'jeera-rice-8y7kl2xh4s9jq' },
          { name: 'Veg Pulao', veg: true, price: 20900, desc: 'Fragrant rice cooked with vegetables and whole spices.', rating: 4.1, ratingCount: '300+', img: 'veg-pulao-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Beverages & Desserts',
        items: [
          { name: 'Sweet Lassi', veg: true, price: 9900, desc: 'Thick and creamy traditional sweet lassi.', bestseller: true, rating: 4.3, ratingCount: '700+', img: 'sweet-lassi-3y7kl2xh4s9jq' },
          { name: 'Masala Chai', veg: true, price: 5900, desc: 'Hot tea brewed with milk and a blend of spices.', rating: 4.0, ratingCount: '500+', img: 'masala-chai-5y7kl2xh4s9jq' },
          { name: 'Gulab Jamun', veg: true, price: 8900, desc: 'Soft khoya dumplings soaked in rose-scented sugar syrup.', rating: 4.4, ratingCount: '650+', img: 'gulab-jamun-7y7kl2xh4s9jq' },
          { name: 'Double Ka Meetha', veg: true, price: 12900, desc: 'Hyderabadi bread pudding with saffron and dry fruits.', rating: 4.2, ratingCount: '180+', img: 'double-ka-meetha-9y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Pizzas: {
    categories: [
      {
        title: 'Pizzas',
        items: [
          { name: 'Margherita Pizza', veg: true, price: 24900, desc: 'Classic pizza topped with a generous layer of mozzarella and tangy tomato sauce.', bestseller: true, rating: 4.3, ratingCount: '2500+', img: 'margherita-pizza-1y7kl2xh4s9jq', addons: ['Extra Cheese', 'Jalapenos'] },
          { name: 'Farmhouse Pizza', veg: true, price: 32900, desc: 'Loaded with onion, capsicum, tomato, mushroom and sweet corn.', rating: 4.4, ratingCount: '1800+', img: 'farmhouse-pizza-3y7kl2xh4s9jq', addons: ['Extra Cheese', 'BBQ Sauce'] },
          { name: 'Pepperoni Pizza', veg: false, price: 39900, desc: 'Bold and spicy pepperoni slices over a bed of mozzarella.', bestseller: true, rating: 4.5, ratingCount: '2200+', img: 'pepperoni-pizza-5y7kl2xh4s9jq', addons: ['Extra Cheese', 'Chilli Flakes'] },
          { name: 'Chicken Tikka Pizza', veg: false, price: 37900, desc: 'Juicy chicken tikka chunks with onion and capsicum on a creamy base.', rating: 4.4, ratingCount: '1600+', img: 'chicken-tikka-pizza-7y7kl2xh4s9jq', addons: ['Extra Cheese'] },
          { name: 'Veggie Supreme Pizza', veg: true, price: 35900, desc: 'A garden of veggies with black olives, jalapenos and onions.', rating: 4.2, ratingCount: '1300+', img: 'veggie-supreme-pizza-9y7kl2xh4s9jq' },
          { name: 'Paneer Makhani Pizza', veg: true, price: 36900, desc: 'Smoky paneer with rich makhani gravy and cheese.', rating: 4.1, ratingCount: '900+', img: 'paneer-makhani-pizza-2y7kl2xh4s9jq' },
          { name: 'Barbecue Chicken Pizza', veg: false, price: 41900, desc: 'Smoky BBQ chicken with onion rings and cheddar.', rating: 4.3, ratingCount: '1000+', img: 'bbq-chicken-pizza-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Garlic Bread & Sides',
        items: [
          { name: 'Garlic Breadsticks', veg: true, price: 16900, desc: 'Soft baked breadsticks brushed with garlic butter and herbs.', rating: 4.2, ratingCount: '1400+', img: 'garlic-breadsticks-6y7kl2xh4s9jq', addons: ['Cheese Dip', 'Tomato Dip'] },
          { name: 'Cheese Garlic Bread', veg: true, price: 18900, desc: 'Garlic bread loaded with molten mozzarella.', bestseller: true, rating: 4.3, ratingCount: '1700+', img: 'cheese-garlic-bread-8y7kl2xh4s9jq' },
          { name: 'French Fries', veg: true, price: 14900, desc: 'Crispy golden fries sprinkled with salt.', rating: 4.1, ratingCount: '2000+', img: 'french-fries-0y7kl2xh4s9jq' },
          { name: 'Chicken Wings', veg: false, price: 22900, desc: 'Crispy chicken wings tossed in spicy buffalo sauce.', rating: 4.2, ratingCount: '1100+', img: 'chicken-wings-2y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { name: 'Soft Drink', veg: true, price: 9900, desc: 'Chilled carbonated drink. 500ml.', rating: 4.0, ratingCount: '900+', img: 'soft-drink-4y7kl2xh4s9jq' },
          { name: 'Cold Coffee', veg: true, price: 15900, desc: 'Frothy cold coffee with a hint of chocolate.', rating: 4.3, ratingCount: '700+', img: 'cold-coffee-6y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts',
        items: [
          { name: 'Choco Lava Cake', veg: true, price: 12900, desc: 'Warm chocolate cake with a gooey molten center.', bestseller: true, rating: 4.6, ratingCount: '2600+', img: 'choco-lava-cake-8y7kl2xh4s9jq' },
          { name: 'Chocolate Mousse', veg: true, price: 14900, desc: 'Silky smooth chocolate mousse topped with cocoa powder.', rating: 4.4, ratingCount: '800+', img: 'chocolate-mousse-1y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Burger: {
    categories: [
      {
        title: 'Signature Burgers',
        items: [
          { name: 'Classic Veg Burger', veg: true, price: 12900, desc: 'Crispy veg patty with lettuce, tomato and house sauce in a toasted bun.', bestseller: true, rating: 4.2, ratingCount: '1800+', img: 'classic-veg-burger-3y7kl2xh4s9jq', addons: ['Extra Cheese', 'Jalapenos'] },
          { name: 'Crispy Chicken Burger', veg: false, price: 17900, desc: 'Crunchy fried chicken fillet with mayo, lettuce and pickles.', bestseller: true, rating: 4.3, ratingCount: '2200+', img: 'crispy-chicken-burger-5y7kl2xh4s9jq', addons: ['Extra Cheese', 'Spicy Sauce'] },
          { name: 'Smoky BBQ Chicken Burger', veg: false, price: 19900, desc: 'Grilled chicken with smoky BBQ sauce, cheddar and caramelized onion.', rating: 4.4, ratingCount: '1200+', img: 'bbq-chicken-burger-7y7kl2xh4s9jq' },
          { name: 'Paneer Bhurji Burger', veg: true, price: 15900, desc: 'Spiced crumbled paneer with onion, tomato and mint mayo.', rating: 4.1, ratingCount: '600+', img: 'paneer-bhurji-burger-9y7kl2xh4s9jq' },
          { name: 'Double Chicken Burger', veg: false, price: 24900, desc: 'Two juicy chicken patties, double cheese, double satisfaction.', rating: 4.4, ratingCount: '950+', img: 'double-chicken-burger-2y7kl2xh4s9jq' },
          { name: 'Veg Crunchy Burger', veg: true, price: 13900, desc: 'Golden-fried veg patty with coleslaw and tangy sauce.', rating: 4.0, ratingCount: '700+', img: 'veg-crunchy-burger-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Shakes & Beverages',
        items: [
          { name: 'Chocolate Thick Shake', veg: true, price: 15900, desc: 'Rich chocolate shake topped with whipped cream.', bestseller: true, rating: 4.4, ratingCount: '1500+', img: 'chocolate-shake-6y7kl2xh4s9jq' },
          { name: 'Strawberry Shake', veg: true, price: 15900, desc: 'Creamy strawberry shake with real fruit chunks.', rating: 4.2, ratingCount: '800+', img: 'strawberry-shake-8y7kl2xh4s9jq' },
          { name: 'Oreo Shake', veg: true, price: 17900, desc: 'Thick shake loaded with crushed Oreo cookies.', rating: 4.5, ratingCount: '1100+', img: 'oreo-shake-0y7kl2xh4s9jq' },
          { name: 'Bubble Tea', veg: true, price: 16900, desc: 'Refreshing milk tea with chewy tapioca pearls.', rating: 4.1, ratingCount: '500+', img: 'bubble-tea-2y7kl2xh4s9jq' },
          { name: 'Lemon Mint Cooler', veg: true, price: 9900, desc: 'Zesty lemon cooler with fresh mint leaves.', rating: 4.0, ratingCount: '400+', img: 'lemon-mint-cooler-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Sides',
        items: [
          { name: 'Peri Peri Fries', veg: true, price: 13900, desc: 'Fries dusted with fiery peri peri seasoning.', rating: 4.2, ratingCount: '900+', img: 'peri-fries-6y7kl2xh4s9jq' },
          { name: 'Chicken Nuggets', veg: false, price: 15900, desc: 'Crispy bite-sized chicken nuggets with dip.', rating: 4.3, ratingCount: '750+', img: 'chicken-nuggets-8y7kl2xh4s9jq' },
          { name: 'Cheesy Nachos', veg: true, price: 16900, desc: 'Tortilla chips loaded with cheese sauce and salsa.', rating: 4.1, ratingCount: '450+', img: 'cheesy-nachos-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts',
        items: [
          { name: 'Brownie Sundae', veg: true, price: 18900, desc: 'Warm brownie topped with vanilla ice cream and chocolate sauce.', rating: 4.4, ratingCount: '650+', img: 'brownie-sundae-3y7kl2xh4s9jq' },
          { name: 'Choco Chip Cookie', veg: true, price: 9900, desc: 'Soft baked cookie with gooey chocolate chips.', rating: 4.0, ratingCount: '400+', img: 'choco-cookie-5y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Chinese: {
    categories: [
      {
        title: 'Soups & Starters',
        items: [
          { name: 'Veg Manchow Soup', veg: true, price: 14900, desc: 'Hot and spicy soup with crunchy noodles on top.', rating: 4.1, ratingCount: '800+', img: 'manchow-soup-7y7kl2xh4s9jq' },
          { name: 'Chicken Sweet Corn Soup', veg: false, price: 16900, desc: 'Creamy corn soup with shredded chicken.', rating: 4.0, ratingCount: '600+', img: 'sweet-corn-soup-9y7kl2xh4s9jq' },
          { name: 'Veg Spring Rolls', veg: true, price: 17900, desc: 'Crispy rolls stuffed with vegetables and noodles.', bestseller: true, rating: 4.3, ratingCount: '1100+', img: 'veg-spring-rolls-2y7kl2xh4s9jq', addons: ['Sweet Chilli Sauce', 'Mayo'] },
          { name: 'Chilli Chicken', veg: false, price: 24900, desc: 'Fried chicken tossed with capsicum and onion in a fiery sauce.', bestseller: true, rating: 4.4, ratingCount: '1400+', img: 'chilli-chicken-4y7kl2xh4s9jq' },
          { name: 'Veg Manchurian', veg: true, price: 21900, desc: 'Crispy veggie balls in a garlic-soy gravy.', rating: 4.2, ratingCount: '900+', img: 'veg-manchurian-6y7kl2xh4s9jq' },
          { name: 'Honey Chilli Potato', veg: true, price: 19900, desc: 'Crispy potato fingers tossed in honey chilli glaze.', rating: 4.1, ratingCount: '750+', img: 'honey-chilli-potato-8y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Noodles & Rice',
        items: [
          { name: 'Veg Hakka Noodles', veg: true, price: 19900, desc: 'Stir-fried noodles with garden vegetables in wok sauce.', bestseller: true, rating: 4.2, ratingCount: '1300+', img: 'veg-hakka-noodles-0y7kl2xh4s9jq' },
          { name: 'Chicken Hakka Noodles', veg: false, price: 22900, desc: 'Wok-tossed noodles with chicken and vegetables.', rating: 4.3, ratingCount: '1200+', img: 'chicken-hakka-noodles-2y7kl2xh4s9jq' },
          { name: 'Veg Fried Rice', veg: true, price: 18900, desc: 'Classic fried rice with egg-free veggie mix.', rating: 4.1, ratingCount: '1000+', img: 'veg-fried-rice-4y7kl2xh4s9jq' },
          { name: 'Chicken Fried Rice', veg: false, price: 21900, desc: 'Smoky fried rice with juicy chicken pieces.', rating: 4.2, ratingCount: '1100+', img: 'chicken-fried-rice-6y7kl2xh4s9jq' },
          { name: 'Schezwan Noodles', veg: true, price: 21900, desc: 'Spicy noodles tossed in fiery schezwan sauce.', rating: 4.1, ratingCount: '650+', img: 'schezwan-noodles-8y7kl2xh4s9jq' },
          { name: 'Burnt Garlic Rice', veg: true, price: 20900, desc: 'Rice tossed with burnt garlic and spring onion.', rating: 4.2, ratingCount: '550+', img: 'burnt-garlic-rice-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Main Course',
        items: [
          { name: 'Veg Schezwan Gravy', veg: true, price: 23900, desc: 'Vegetables in a spicy schezwan sauce, perfect with fried rice.', rating: 4.0, ratingCount: '400+', img: 'veg-schezwan-gravy-3y7kl2xh4s9jq' },
          { name: 'Chicken in Black Pepper Sauce', veg: false, price: 27900, desc: 'Crispy chicken tossed in a bold black pepper sauce.', rating: 4.2, ratingCount: '500+', img: 'black-pepper-chicken-5y7kl2xh4s9jq' },
          { name: 'Paneer in Chilli Oyster Sauce', veg: true, price: 25900, desc: 'Paneer cubes in a savory chilli-oyster glaze.', rating: 4.1, ratingCount: '350+', img: 'paneer-oyster-7y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts & Beverages',
        items: [
          { name: 'Chocolate Brownie with Ice Cream', veg: true, price: 15900, desc: 'Warm brownie with a scoop of vanilla ice cream.', rating: 4.3, ratingCount: '600+', img: 'brownie-icecream-9y7kl2xh4s9jq' },
          { name: 'Blue Lagoon Mocktail', veg: true, price: 12900, desc: 'Refreshing blue citrus cooler with lemon.', rating: 4.0, ratingCount: '300+', img: 'blue-lagoon-2y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  'South Indian': {
    categories: [
      {
        title: 'Dosas',
        items: [
          { name: 'Masala Dosa', veg: true, price: 14900, desc: 'Golden crispy dosa with spiced potato masala. Served with sambar and chutneys.', bestseller: true, rating: 4.4, ratingCount: '2000+', img: 'masala-dosa-4y7kl2xh4s9jq', addons: ['Extra Chutney', 'Ghee'] },
          { name: 'Ghee Roast Dosa', veg: true, price: 16900, desc: 'Extra crispy dosa roasted in ghee.', rating: 4.3, ratingCount: '1200+', img: 'ghee-roast-dosa-6y7kl2xh4s9jq' },
          { name: 'Paneer Dosa', veg: true, price: 19900, desc: 'Dosa stuffed with spiced paneer and onion masala.', rating: 4.2, ratingCount: '800+', img: 'paneer-dosa-8y7kl2xh4s9jq' },
          { name: 'Mysore Masala Dosa', veg: true, price: 17900, desc: 'Dosa smeared with fiery red chutney and potato masala.', bestseller: true, rating: 4.5, ratingCount: '1500+', img: 'mysore-dosa-0y7kl2xh4s9jq' },
          { name: 'Onion Rava Dosa', veg: true, price: 15900, desc: 'Crispy semolina dosa topped with onions and coriander.', rating: 4.1, ratingCount: '600+', img: 'onion-rava-dosa-2y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Idli, Vada & Uttapam',
        items: [
          { name: 'Idli (2 pcs)', veg: true, price: 9900, desc: 'Steamed rice cakes served with sambar and chutney.', rating: 4.2, ratingCount: '1400+', img: 'idli-4y7kl2xh4s9jq' },
          { name: 'Medu Vada (2 pcs)', veg: true, price: 10900, desc: 'Crispy lentil donuts with sambar and coconut chutney.', rating: 4.3, ratingCount: '1000+', img: 'medu-vada-6y7kl2xh4s9jq' },
          { name: 'Masala Uttapam', veg: true, price: 14900, desc: 'Thick pancake topped with onions, tomatoes and chillies.', rating: 4.1, ratingCount: '700+', img: 'masala-uttapam-8y7kl2xh4s9jq' },
          { name: 'Onion Uttapam', veg: true, price: 13900, desc: 'Crispy uttapam loaded with chopped onions.', rating: 4.0, ratingCount: '500+', img: 'onion-uttapam-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Rice & Curries',
        items: [
          { name: 'Sambar Rice', veg: true, price: 16900, desc: 'Comforting rice mixed with lentil-vegetable sambar.', rating: 4.1, ratingCount: '800+', img: 'sambar-rice-3y7kl2xh4s9jq' },
          { name: 'Curd Rice', veg: true, price: 13900, desc: 'Cooling yogurt rice tempered with mustard and curry leaves.', rating: 4.2, ratingCount: '900+', img: 'curd-rice-5y7kl2xh4s9jq' },
          { name: 'South Indian Thali', veg: true, price: 24900, desc: 'A wholesome platter of rice, curries, papad and dessert.', bestseller: true, rating: 4.3, ratingCount: '1100+', img: 'south-thali-7y7kl2xh4s9jq' },
          { name: 'Rasam Rice', veg: true, price: 14900, desc: 'Tangy pepper rasam over steamed rice.', rating: 4.0, ratingCount: '400+', img: 'rasam-rice-9y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Filter Coffee & Desserts',
        items: [
          { name: 'South Indian Filter Coffee', veg: true, price: 5900, desc: 'Strong frothy filter coffee brewed the traditional way.', bestseller: true, rating: 4.5, ratingCount: '1600+', img: 'filter-coffee-2y7kl2xh4s9jq' },
          { name: 'Mysore Pak', veg: true, price: 8900, desc: 'Rich ghee-laden Mysore sweet.', rating: 4.3, ratingCount: '500+', img: 'mysore-pak-4y7kl2xh4s9jq' },
          { name: 'Coconut Payasam', veg: true, price: 11900, desc: 'Creamy coconut milk pudding with vermicelli.', rating: 4.2, ratingCount: '300+', img: 'coconut-payasam-6y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  'North Indian': {
    categories: [
      {
        title: 'Starters',
        items: [
          { name: 'Paneer Tikka', veg: true, price: 27900, desc: 'Char-grilled cottage cheese in spiced yogurt marinade.', bestseller: true, rating: 4.4, ratingCount: '1200+', img: 'paneer-tikka-8y7kl2xh4s9jq', addons: ['Mint Chutney'] },
          { name: 'Chicken Tikka', veg: false, price: 29900, desc: 'Smoky grilled chicken tikka with mint chutney.', rating: 4.3, ratingCount: '1000+', img: 'chicken-tikka-0y7kl2xh4s9jq' },
          { name: 'Tandoori Chicken', veg: false, price: 32900, desc: 'Whole tandoori chicken marinated in yogurt and spices.', rating: 4.2, ratingCount: '800+', img: 'tandoori-chicken-2y7kl2xh4s9jq' },
          { name: 'Hara Bhara Kebab', veg: true, price: 21900, desc: 'Spinach and pea patties with a crispy crust.', rating: 4.1, ratingCount: '600+', img: 'hara-bhara-kebab-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Main Course',
        items: [
          { name: 'Butter Chicken', veg: false, price: 33900, desc: 'Tandoori chicken in a rich tomato-butter gravy.', bestseller: true, rating: 4.5, ratingCount: '1800+', img: 'butter-chicken-6y7kl2xh4s9jq', addons: ['Butter Naan', 'Roti'] },
          { name: 'Paneer Butter Masala', veg: true, price: 29900, desc: 'Paneer simmered in a creamy tomato-cashew gravy.', bestseller: true, rating: 4.4, ratingCount: '1500+', img: 'paneer-butter-masala-8y7kl2xh4s9jq' },
          { name: 'Dal Makhani', veg: true, price: 25900, desc: 'Black lentils slow-cooked overnight with butter and cream.', rating: 4.3, ratingCount: '1300+', img: 'dal-makhani-1y7kl2xh4s9jq' },
          { name: 'Kadai Paneer', veg: true, price: 28900, desc: 'Paneer and peppers tossed in a rustic kadai masala.', rating: 4.2, ratingCount: '900+', img: 'kadai-paneer-3y7kl2xh4s9jq' },
          { name: 'Chicken Curry', veg: false, price: 29900, desc: 'Home-style chicken curry with onion-tomato gravy.', rating: 4.1, ratingCount: '700+', img: 'chicken-curry-5y7kl2xh4s9jq' },
          { name: 'Chana Masala', veg: true, price: 20900, desc: 'Chickpeas simmered in a tangy masala gravy.', rating: 4.0, ratingCount: '500+', img: 'chana-masala-7y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Breads & Rice',
        items: [
          { name: 'Butter Naan', veg: true, price: 4900, desc: 'Soft flatbread brushed with butter.', rating: 4.3, ratingCount: '2100+', img: 'butter-naan-9y7kl2xh4s9jq' },
          { name: 'Garlic Naan', veg: true, price: 5900, desc: 'Naan topped with garlic and coriander.', rating: 4.2, ratingCount: '1200+', img: 'garlic-naan-2y7kl2xh4s9jq' },
          { name: 'Lachha Paratha', veg: true, price: 6900, desc: 'Flaky layered paratha pan-roasted.', rating: 4.1, ratingCount: '800+', img: 'lachha-paratha-4y7kl2xh4s9jq' },
          { name: 'Jeera Rice', veg: true, price: 18900, desc: 'Basmati rice tempered with cumin.', rating: 4.0, ratingCount: '600+', img: 'jeera-rice-6y7kl2xh4s9jq' },
          { name: 'Veg Pulao', veg: true, price: 21900, desc: 'Fragrant rice cooked with vegetables and spices.', rating: 4.1, ratingCount: '450+', img: 'veg-pulao-8y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts & Beverages',
        items: [
          { name: 'Gulab Jamun', veg: true, price: 8900, desc: 'Soft khoya dumplings in sugar syrup.', rating: 4.3, ratingCount: '1000+', img: 'gulab-jamun-1y7kl2xh4s9jq' },
          { name: 'Rasmalai', veg: true, price: 11900, desc: 'Cottage cheese discs soaked in saffron milk.', rating: 4.4, ratingCount: '700+', img: 'rasmalai-3y7kl2xh4s9jq' },
          { name: 'Kulfi Falooda', veg: true, price: 13900, desc: 'Traditional kulfi with falooda and rose syrup.', rating: 4.2, ratingCount: '400+', img: 'kulfi-falooda-5y7kl2xh4s9jq' },
          { name: 'Masala Chaas', veg: true, price: 7900, desc: 'Spiced buttermilk with roasted cumin.', rating: 4.0, ratingCount: '300+', img: 'masala-chaas-7y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Desserts: {
    categories: [
      {
        title: 'Cakes & Pastries',
        items: [
          { name: 'Chocolate Truffle Cake', veg: true, price: 44900, desc: 'Rich, moist chocolate cake layered with truffle cream.', bestseller: true, rating: 4.6, ratingCount: '3000+', img: 'choc-truffle-cake-9y7kl2xh4s9jq' },
          { name: 'Red Velvet Pastry', veg: true, price: 15900, desc: 'Velvety red cake with cream cheese frosting.', bestseller: true, rating: 4.5, ratingCount: '2200+', img: 'red-velvet-pastry-2y7kl2xh4s9jq' },
          { name: 'Butterscotch Cake', veg: true, price: 44900, desc: 'Moist butterscotch sponge with caramel drizzle.', rating: 4.3, ratingCount: '1500+', img: 'butterscotch-cake-4y7kl2xh4s9jq' },
          { name: 'Pineapple Pastry', veg: true, price: 13900, desc: 'Classic pineapple cream pastry.', rating: 4.2, ratingCount: '900+', img: 'pineapple-pastry-6y7kl2xh4s9jq' },
          { name: 'Belgian Chocolate Pastry', veg: true, price: 17900, desc: 'Decadent Belgian chocolate mousse pastry.', rating: 4.4, ratingCount: '1300+', img: 'belgian-pastry-8y7kl2xh4s9jq' },
          { name: 'Blueberry Cheesecake', veg: true, price: 19900, desc: 'Creamy cheesecake topped with blueberry compote.', rating: 4.5, ratingCount: '1100+', img: 'blueberry-cheesecake-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Brownies & Desserts',
        items: [
          { name: 'Walnut Brownie', veg: true, price: 16900, desc: 'Fudgy brownie studded with walnuts.', bestseller: true, rating: 4.5, ratingCount: '1700+', img: 'walnut-brownie-3y7kl2xh4s9jq' },
          { name: 'Choco Chip Brownie', veg: true, price: 15900, desc: 'Dense chocolate brownie with choco chips.', rating: 4.3, ratingCount: '1200+', img: 'chocochip-brownie-5y7kl2xh4s9jq' },
          { name: 'Tiramisu', veg: true, price: 18900, desc: 'Classic Italian dessert with espresso-soaked ladyfingers.', rating: 4.4, ratingCount: '800+', img: 'tiramisu-7y7kl2xh4s9jq' },
          { name: 'Chocolate Mousse', veg: true, price: 14900, desc: 'Airy chocolate mousse in a glass.', rating: 4.2, ratingCount: '700+', img: 'choc-mousse-9y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Ice Creams & Sundaes',
        items: [
          { name: 'Butterscotch Scoop', veg: true, price: 8900, desc: 'Classic butterscotch ice cream with praline.', bestseller: true, rating: 4.4, ratingCount: '1600+', img: 'butterscotch-scoop-2y7kl2xh4s9jq' },
          { name: 'Chocolate Sundae', veg: true, price: 12900, desc: 'Chocolate ice cream layered with fudge and nuts.', rating: 4.3, ratingCount: '1000+', img: 'chocolate-sundae-4y7kl2xh4s9jq' },
          { name: 'Strawberry Scoop', veg: true, price: 8900, desc: 'Fresh strawberry ice cream.', rating: 4.2, ratingCount: '800+', img: 'strawberry-scoop-6y7kl2xh4s9jq' },
          { name: 'Paan Ice Cream', veg: true, price: 9900, desc: 'Refreshing paan-flavoured ice cream.', rating: 4.1, ratingCount: '500+', img: 'paan-icecream-8y7kl2xh4s9jq' },
          { name: 'Hot Chocolate Fudge', veg: true, price: 14900, desc: 'Vanilla ice cream drowned in hot chocolate fudge.', rating: 4.5, ratingCount: '1400+', img: 'hot-choc-fudge-1y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { name: 'Cold Coffee', veg: true, price: 15900, desc: 'Frothy cold coffee with cream.', rating: 4.2, ratingCount: '900+', img: 'cold-coffee-3y7kl2xh4s9jq' },
          { name: 'Oreo Shake', veg: true, price: 17900, desc: 'Thick Oreo cookie shake.', rating: 4.4, ratingCount: '1100+', img: 'oreo-shake-5y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Cafe: {
    categories: [
      {
        title: 'Coffee & Espresso',
        items: [
          { name: 'Cappuccino', veg: true, price: 16900, desc: 'Espresso with velvety steamed milk and foam.', bestseller: true, rating: 4.4, ratingCount: '1800+', img: 'cappuccino-7y7kl2xh4s9jq', addons: ['Soy Milk', 'Extra Shot'] },
          { name: 'Caffe Latte', veg: true, price: 18900, desc: 'Smooth espresso with steamed milk.', rating: 4.3, ratingCount: '1500+', img: 'caffe-latte-9y7kl2xh4s9jq' },
          { name: 'Espresso', veg: true, price: 11900, desc: 'A concentrated shot of pure coffee.', rating: 4.2, ratingCount: '700+', img: 'espresso-2y7kl2xh4s9jq' },
          { name: 'Flat White', veg: true, price: 19900, desc: 'Ristretto shots with silky micro-foam.', rating: 4.4, ratingCount: '900+', img: 'flat-white-4y7kl2xh4s9jq' },
          { name: 'Mocha', veg: true, price: 20900, desc: 'Espresso blended with chocolate and steamed milk.', rating: 4.2, ratingCount: '800+', img: 'mocha-6y7kl2xh4s9jq' },
          { name: 'Filter Coffee', veg: true, price: 13900, desc: 'South Indian style frothy filter coffee.', rating: 4.3, ratingCount: '600+', img: 'filter-coffee-8y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Brewed & Cold Brews',
        items: [
          { name: 'Pour Over - Single Origin', veg: true, price: 23900, desc: 'Hand-brewed single origin coffee.', bestseller: true, rating: 4.5, ratingCount: '500+', img: 'pour-over-1y7kl2xh4s9jq' },
          { name: 'Cold Brew', veg: true, price: 19900, desc: 'Smooth 18-hour slow-steeped cold brew.', rating: 4.4, ratingCount: '700+', img: 'cold-brew-3y7kl2xh4s9jq' },
          { name: 'Iced Americano', veg: true, price: 16900, desc: 'Espresso over ice with water.', rating: 4.1, ratingCount: '600+', img: 'iced-americano-5y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Snacks & Bakes',
        items: [
          { name: 'Butter Croissant', veg: true, price: 14900, desc: 'Flaky, buttery all-butter croissant.', bestseller: true, rating: 4.3, ratingCount: '1200+', img: 'croissant-7y7kl2xh4s9jq' },
          { name: 'Chocolate Chip Cookie', veg: true, price: 8900, desc: 'Chewy cookie with dark chocolate chunks.', rating: 4.2, ratingCount: '1000+', img: 'cookie-9y7kl2xh4s9jq' },
          { name: 'Banana Walnut Cake', veg: true, price: 12900, desc: 'Moist banana cake with walnuts.', rating: 4.1, ratingCount: '500+', img: 'banana-walnut-2y7kl2xh4s9jq' },
          { name: 'Blueberry Muffin', veg: true, price: 11900, desc: 'Soft muffin bursting with blueberries.', rating: 4.0, ratingCount: '600+', img: 'blueberry-muffin-4y7kl2xh4s9jq' },
          { name: 'Grilled Cheese Sandwich', veg: true, price: 17900, desc: 'Melted cheese between toasted bread.', rating: 4.2, ratingCount: '800+', img: 'grilled-cheese-6y7kl2xh4s9jq' },
          { name: 'Chicken Mayo Sandwich', veg: false, price: 19900, desc: 'Shredded chicken with mayo on toasted bread.', rating: 4.1, ratingCount: '700+', img: 'chicken-mayo-8y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Refreshers',
        items: [
          { name: 'Iced Lemon Tea', veg: true, price: 13900, desc: 'Chilled black tea with lemon.', rating: 4.0, ratingCount: '500+', img: 'iced-lemon-tea-1y7kl2xh4s9jq' },
          { name: 'Virgin Mojito', veg: true, price: 15900, desc: 'Minty lime cooler with soda.', rating: 4.1, ratingCount: '600+', img: 'virgin-mojito-3y7kl2xh4s9jq' },
          { name: 'Hot Chocolate', veg: true, price: 18900, desc: 'Rich and creamy hot chocolate.', rating: 4.3, ratingCount: '700+', img: 'hot-chocolate-5y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  'Healthy Food': {
    categories: [
      {
        title: 'Protein Bowls',
        items: [
          { name: 'Grilled Chicken Protein Bowl', veg: false, price: 29900, desc: 'Grilled chicken with quinoa, greens and veggies.', bestseller: true, rating: 4.4, ratingCount: '900+', img: 'chicken-protein-bowl-7y7kl2xh4s9jq' },
          { name: 'Paneer Power Bowl', veg: true, price: 26900, desc: 'Paneer with brown rice, sprouts and salad.', rating: 4.3, ratingCount: '700+', img: 'paneer-bowl-9y7kl2xh4s9jq' },
          { name: 'Egg White Bowl', veg: false, price: 24900, desc: 'Egg whites with vegetables and quinoa.', rating: 4.2, ratingCount: '500+', img: 'eggwhite-bowl-2y7kl2xh4s9jq' },
          { name: 'Tofu Teriyaki Bowl', veg: true, price: 27900, desc: 'Tofu tossed in teriyaki with rice and greens.', rating: 4.1, ratingCount: '400+', img: 'tofu-bowl-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Salads',
        items: [
          { name: 'Classic Caesar Salad', veg: false, price: 22900, desc: 'Romaine lettuce, grilled chicken, croutons and caesar dressing.', bestseller: true, rating: 4.3, ratingCount: '800+', img: 'caesar-salad-6y7kl2xh4s9jq' },
          { name: 'Greek Salad', veg: true, price: 21900, desc: 'Cucumber, tomato, olives and feta cheese.', rating: 4.2, ratingCount: '600+', img: 'greek-salad-8y7kl2xh4s9jq' },
          { name: 'Quinoa Veggie Salad', veg: true, price: 23900, desc: 'Quinoa with roasted veggies and lemon dressing.', rating: 4.1, ratingCount: '500+', img: 'quinoa-salad-1y7kl2xh4s9jq' },
          { name: 'Chicken Avocado Salad', veg: false, price: 26900, desc: 'Grilled chicken, avocado and mixed greens.', rating: 4.4, ratingCount: '650+', img: 'avocado-salad-3y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Sandwiches & Wraps',
        items: [
          { name: 'Grilled Veg Sandwich', veg: true, price: 17900, desc: 'Whole grain bread with grilled veggies and hummus.', rating: 4.2, ratingCount: '700+', img: 'grilled-veg-sandwich-5y7kl2xh4s9jq' },
          { name: 'Chicken Wrap', veg: false, price: 20900, desc: 'Grilled chicken wrapped with veggies in a multigrain wrap.', rating: 4.1, ratingCount: '600+', img: 'chicken-wrap-7y7kl2xh4s9jq' },
          { name: 'Paneer Tikka Wrap', veg: true, price: 19900, desc: 'Tandoori paneer with salad in a wrap.', rating: 4.0, ratingCount: '450+', img: 'paneer-wrap-9y7kl2xh4s9jq' },
          { name: 'Club Sandwich', veg: true, price: 18900, desc: 'Triple-decker sandwich with egg, veggies and cheese.', rating: 4.1, ratingCount: '500+', img: 'club-sandwich-2y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Healthy Drinks',
        items: [
          { name: 'Green Detox Juice', veg: true, price: 13900, desc: 'Spinach, celery, apple and ginger.', rating: 4.2, ratingCount: '400+', img: 'green-juice-4y7kl2xh4s9jq' },
          { name: 'Protein Shake', veg: true, price: 18900, desc: 'Whey protein shake with banana and peanut butter.', rating: 4.3, ratingCount: '500+', img: 'protein-shake-6y7kl2xh4s9jq' },
          { name: 'Coconut Water', veg: true, price: 9900, desc: 'Natural tender coconut water.', rating: 4.1, ratingCount: '300+', img: 'coconut-water-8y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Sandwich: {
    categories: [
      {
        title: 'Sub Sandwiches',
        items: [
          { name: 'Veggie Delite Sub', veg: true, price: 15900, desc: 'Crunchy vegetables with a tangy dressing in a soft sub.', bestseller: true, rating: 4.2, ratingCount: '1500+', img: 'veggie-delite-1y7kl2xh4s9jq', addons: ['Extra Cheese', 'Double Veggies'] },
          { name: 'Chicken Tikka Sub', veg: false, price: 21900, desc: 'Spicy chicken tikka with onions and mint mayo.', rating: 4.3, ratingCount: '1200+', img: 'chicken-tikka-sub-3y7kl2xh4s9jq' },
          { name: 'Egg Mayo Sub', veg: false, price: 17900, desc: 'Egg salad with mayo, lettuce and cucumber.', rating: 4.1, ratingCount: '800+', img: 'egg-mayo-sub-5y7kl2xh4s9jq' },
          { name: 'Chicken BBQ Sub', veg: false, price: 23900, desc: 'BBQ chicken with cheese and crunchy onions.', rating: 4.2, ratingCount: '900+', img: 'bbq-chicken-sub-7y7kl2xh4s9jq' },
          { name: 'Paneer Tikka Sub', veg: true, price: 19900, desc: 'Tandoori paneer with peppers and chipotle.', rating: 4.0, ratingCount: '700+', img: 'paneer-tikka-sub-9y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Wraps & Rolls',
        items: [
          { name: 'Veggie Wrap', veg: true, price: 14900, desc: 'Veggies wrapped in a soft tortilla with mint sauce.', rating: 4.1, ratingCount: '700+', img: 'veggie-wrap-2y7kl2xh4s9jq' },
          { name: 'Chicken Wrap', veg: false, price: 18900, desc: 'Grilled chicken, veggies and sauce in a tortilla.', rating: 4.2, ratingCount: '800+', img: 'chicken-wrap-4y7kl2xh4s9jq' },
          { name: 'Egg Wrap', veg: false, price: 15900, desc: 'Scrambled egg with veggies in a wrap.', rating: 4.0, ratingCount: '500+', img: 'egg-wrap-6y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Salads & Sides',
        items: [
          { name: 'Garden Salad', veg: true, price: 12900, desc: 'Fresh veggies with light dressing.', rating: 4.0, ratingCount: '600+', img: 'garden-salad-8y7kl2xh4s9jq' },
          { name: 'Chicken Salad', veg: false, price: 16900, desc: 'Grilled chicken with mixed greens.', rating: 4.1, ratingCount: '550+', img: 'chicken-salad-1y7kl2xh4s9jq' },
          { name: 'Crunchy Chips', veg: true, price: 4900, desc: 'Crispy potato chips.', rating: 4.0, ratingCount: '400+', img: 'chips-3y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { name: 'Cold Coffee', veg: true, price: 14900, desc: 'Chilled creamy cold coffee.', rating: 4.2, ratingCount: '500+', img: 'cold-coffee-5y7kl2xh4s9jq' },
          { name: 'Iced Tea', veg: true, price: 11900, desc: 'Refreshing iced tea with lemon.', rating: 4.0, ratingCount: '400+', img: 'iced-tea-7y7kl2xh4s9jq' },
          { name: 'Soft Drink', veg: true, price: 8900, desc: 'Chilled fizzy drink.', rating: 3.9, ratingCount: '350+', img: 'soft-drink-9y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Asian: {
    categories: [
      {
        title: 'Sushi & Small Plates',
        items: [
          { name: 'Veg California Roll', veg: true, price: 34900, desc: 'Cucumber, avocado and carrots in seasoned rice.', bestseller: true, rating: 4.4, ratingCount: '500+', img: 'california-roll-2y7kl2xh4s9jq' },
          { name: 'Salmon Nigiri', veg: false, price: 42900, desc: 'Fresh salmon over hand-pressed rice.', rating: 4.5, ratingCount: '450+', img: 'salmon-nigiri-4y7kl2xh4s9jq' },
          { name: 'Chicken Gyoza', veg: false, price: 24900, desc: 'Pan-fried dumplings with soy dip.', rating: 4.3, ratingCount: '600+', img: 'chicken-gyoza-6y7kl2xh4s9jq' },
          { name: 'Veg Tempura', veg: true, price: 21900, desc: 'Battered and fried vegetables with tentsuyu.', rating: 4.1, ratingCount: '400+', img: 'veg-tempura-8y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Noodles & Rice',
        items: [
          { name: 'Thai Basil Noodles', veg: true, price: 25900, desc: 'Stir-fried noodles with Thai basil and veggies.', rating: 4.2, ratingCount: '500+', img: 'thai-basil-noodles-1y7kl2xh4s9jq' },
          { name: 'Singapore Rice Noodles', veg: false, price: 28900, desc: 'Spicy rice noodles with chicken and curry flavour.', rating: 4.1, ratingCount: '450+', img: 'singapore-noodles-3y7kl2xh4s9jq' },
          { name: 'Khao Suey', veg: true, price: 31900, desc: 'Burmese coconut curry noodle soup with garnishes.', bestseller: true, rating: 4.5, ratingCount: '700+', img: 'khao-suey-5y7kl2xh4s9jq' },
          { name: 'Japanese Curry Rice', veg: true, price: 27900, desc: 'Mild Japanese curry with steamed rice.', rating: 4.2, ratingCount: '400+', img: 'japanese-curry-7y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Wok & Curries',
        items: [
          { name: 'Vietnamese Pho Bowl', veg: false, price: 32900, desc: 'Beef broth with rice noodles and herbs.', rating: 4.4, ratingCount: '450+', img: 'pho-bowl-9y7kl2xh4s9jq' },
          { name: 'Pad Thai', veg: true, price: 28900, desc: 'Stir-fried rice noodles with peanuts and tamarind.', rating: 4.3, ratingCount: '600+', img: 'pad-thai-2y7kl2xh4s9jq' },
          { name: 'Malaysian Satay Skewers', veg: false, price: 27900, desc: 'Grilled chicken skewers with peanut sauce.', rating: 4.2, ratingCount: '350+', img: 'satay-skewers-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts & Drinks',
        items: [
          { name: 'Matcha Ice Cream', veg: true, price: 14900, desc: 'Creamy green tea ice cream.', rating: 4.3, ratingCount: '400+', img: 'matcha-icecream-6y7kl2xh4s9jq' },
          { name: 'Mango Sticky Rice', veg: true, price: 17900, desc: 'Sweet sticky rice with fresh mango and coconut.', rating: 4.4, ratingCount: '450+', img: 'mango-sticky-rice-8y7kl2xh4s9jq' },
          { name: 'Iced Matcha Latte', veg: true, price: 19900, desc: 'Chilled matcha with milk.', rating: 4.2, ratingCount: '350+', img: 'matcha-latte-1y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Italian: {
    categories: [
      {
        title: 'Pastas',
        items: [
          { name: 'Alfredo Pasta', veg: true, price: 28900, desc: 'Fettuccine tossed in a creamy garlic-parmesan sauce.', bestseller: true, rating: 4.4, ratingCount: '1200+', img: 'alfredo-pasta-3y7kl2xh4s9jq' },
          { name: 'Arrabbiata Pasta', veg: true, price: 26900, desc: 'Penne in a spicy tomato-garlic sauce.', rating: 4.2, ratingCount: '900+', img: 'arrabbiata-pasta-5y7kl2xh4s9jq' },
          { name: 'Penne Alfredo with Chicken', veg: false, price: 32900, desc: 'Creamy alfredo with grilled chicken.', rating: 4.3, ratingCount: '800+', img: 'chicken-alfredo-7y7kl2xh4s9jq' },
          { name: 'Pesto Basil Pasta', veg: true, price: 28900, desc: 'Pasta coated in fresh basil pesto.', rating: 4.3, ratingCount: '700+', img: 'pesto-pasta-9y7kl2xh4s9jq' },
          { name: 'Lasagna al Forno', veg: true, price: 31900, desc: 'Layered lasagna baked with béchamel and cheese.', rating: 4.4, ratingCount: '650+', img: 'lasagna-2y7kl2xh4s9jq' },
          { name: 'Mac and Cheese', veg: true, price: 24900, desc: 'Creamy cheese pasta baked to golden.', rating: 4.1, ratingCount: '800+', img: 'mac-cheese-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Pizzas & Calzones',
        items: [
          { name: 'Margherita Pizza', veg: true, price: 26900, desc: 'San Marzano tomato, mozzarella and basil.', rating: 4.3, ratingCount: '1000+', img: 'margherita-6y7kl2xh4s9jq' },
          { name: 'Quattro Formaggi Pizza', veg: true, price: 35900, desc: 'Four cheese pizza, pure indulgence.', rating: 4.4, ratingCount: '800+', img: 'quattro-formaggi-8y7kl2xh4s9jq' },
          { name: 'Veg Supreme Pizza', veg: true, price: 33900, desc: 'Loaded with seasonal vegetables.', rating: 4.2, ratingCount: '700+', img: 'veggie-supreme-1y7kl2xh4s9jq' },
          { name: 'Pepperoni Pizza', veg: false, price: 38900, desc: 'Classic pepperoni with mozzarella.', rating: 4.4, ratingCount: '750+', img: 'pepperoni-3y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Starters & Sides',
        items: [
          { name: 'Garlic Bread', veg: true, price: 14900, desc: 'Toasted bread with garlic butter and herbs.', bestseller: true, rating: 4.2, ratingCount: '1100+', img: 'garlic-bread-5y7kl2xh4s9jq' },
          { name: 'Bruschetta', veg: true, price: 16900, desc: 'Toasted bread with tomato, basil and olive oil.', rating: 4.1, ratingCount: '600+', img: 'bruschetta-7y7kl2xh4s9jq' },
          { name: 'Minestrone Soup', veg: true, price: 15900, desc: 'Hearty Italian vegetable soup.', rating: 4.0, ratingCount: '400+', img: 'minestrone-9y7kl2xh4s9jq' },
          { name: 'Chicken Parmesan', veg: false, price: 34900, desc: 'Breaded chicken topped with marinara and cheese.', rating: 4.3, ratingCount: '500+', img: 'chicken-parmesan-2y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts & Beverages',
        items: [
          { name: 'Tiramisu', veg: true, price: 17900, desc: 'Classic espresso-soaked dessert.', rating: 4.4, ratingCount: '800+', img: 'tiramisu-4y7kl2xh4s9jq' },
          { name: 'Panna Cotta', veg: true, price: 14900, desc: 'Silky Italian custard with berry compote.', rating: 4.2, ratingCount: '500+', img: 'panna-cotta-6y7kl2xh4s9jq' },
          { name: 'Iced Cappuccino', veg: true, price: 16900, desc: 'Chilled cappuccino with foam.', rating: 4.1, ratingCount: '400+', img: 'iced-cappuccino-8y7kl2xh4s9jq' },
        ],
      },
    ],
  },
  Chaat: {
    categories: [
      {
        title: 'Chai & Beverages',
        items: [
          { name: 'Cutting Chai', veg: true, price: 4900, desc: 'Strong, sweet Indian tea served in a small glass.', bestseller: true, rating: 4.5, ratingCount: '2000+', img: 'cutting-chai-1y7kl2xh4s9jq' },
          { name: 'Masala Chai', veg: true, price: 5900, desc: 'Tea brewed with ginger, cardamom and spices.', rating: 4.4, ratingCount: '1800+', img: 'masala-chai-3y7kl2xh4s9jq' },
          { name: 'Kesar Badam Chai', veg: true, price: 9900, desc: 'Royal saffron and almond milk tea.', rating: 4.3, ratingCount: '900+', img: 'kesar-badam-chai-5y7kl2xh4s9jq' },
          { name: 'Kulhad Chai', veg: true, price: 7900, desc: 'Tea served in an earthy clay kulhad.', rating: 4.4, ratingCount: '1100+', img: 'kulhad-chai-7y7kl2xh4s9jq' },
          { name: 'Ginger Lemon Tea', veg: true, price: 6900, desc: 'Zesty ginger and lemon infusion.', rating: 4.1, ratingCount: '600+', img: 'ginger-lemon-tea-9y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Chaat & Street Food',
        items: [
          { name: 'Pani Puri', veg: true, price: 7900, desc: 'Crisp puris filled with spiced water.', bestseller: true, rating: 4.4, ratingCount: '1500+', img: 'pani-puri-2y7kl2xh4s9jq' },
          { name: 'Aloo Tikki Chaat', veg: true, price: 9900, desc: 'Crispy potato patties with chutneys and yogurt.', rating: 4.3, ratingCount: '1200+', img: 'aloo-tikki-4y7kl2xh4s9jq' },
          { name: 'Dahi Bhalla', veg: true, price: 10900, desc: 'Soft lentil dumplings in sweet yogurt.', rating: 4.2, ratingCount: '800+', img: 'dahi-bhalla-6y7kl2xh4s9jq' },
          { name: 'Samosa (2 pcs)', veg: true, price: 5900, desc: 'Flaky pastry with spiced potato filling.', rating: 4.2, ratingCount: '1400+', img: 'samosa-8y7kl2xh4s9jq' },
          { name: 'Vada Pav', veg: true, price: 6900, desc: "Mumbai's iconic potato fritter in a bun.", rating: 4.3, ratingCount: '1000+', img: 'vada-pav-1y7kl2xh4s9jq' },
          { name: 'Bhel Puri', veg: true, price: 8900, desc: 'Puffed rice tossed with veggies and chutney.', rating: 4.1, ratingCount: '700+', img: 'bhel-puri-3y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Snacks & Rolls',
        items: [
          { name: 'Veg Maggi', veg: true, price: 8900, desc: 'Instant noodles with masala and veggies.', bestseller: true, rating: 4.2, ratingCount: '1300+', img: 'veg-maggi-5y7kl2xh4s9jq' },
          { name: 'Cheese Maggi', veg: true, price: 11900, desc: 'Maggi loaded with gooey cheese.', rating: 4.3, ratingCount: '1100+', img: 'cheese-maggi-7y7kl2xh4s9jq' },
          { name: 'Paneer Kulcha', veg: true, price: 12900, desc: 'Stuffed kulcha with paneer and spices.', rating: 4.1, ratingCount: '600+', img: 'paneer-kulcha-9y7kl2xh4s9jq' },
          { name: 'Chole Bhature', veg: true, price: 13900, desc: 'Fluffy bhature with spicy chole.', rating: 4.3, ratingCount: '900+', img: 'chole-bhature-2y7kl2xh4s9jq' },
          { name: 'Butter Croissant', veg: true, price: 14900, desc: 'Flaky buttery croissant.', rating: 4.0, ratingCount: '500+', img: 'croissant-4y7kl2xh4s9jq' },
        ],
      },
      {
        title: 'Desserts',
        items: [
          { name: 'Kesar Phirni', veg: true, price: 11900, desc: 'Slow-cooked rice pudding with saffron.', rating: 4.3, ratingCount: '600+', img: 'phirni-6y7kl2xh4s9jq' },
          { name: 'Gulab Jamun', veg: true, price: 8900, desc: 'Warm syrup-soaked dumplings.', rating: 4.4, ratingCount: '800+', img: 'gulab-jamun-8y7kl2xh4s9jq' },
        ],
      },
    ],
  },
};

const RESTAURANT_MENUS = {
  '10583': ['Pizzas'],
  '767218': ['Burger'],
  '353404': ['Biryani'],
  '672074': ['Sandwich'],
  '657646': ['Biryani', 'North Indian'],
  '187384': ['Cafe'],
  '347868': ['Burger'],
  '5938': ['Burger'],
  '237668': ['Burger'],
  '426730': ['Desserts'],
  '643832': ['Healthy Food'],
  '25282': ['Desserts'],
  '503002': ['North Indian'],
  '146304': ['Biryani', 'Chinese'],
  '51835': ['Desserts'],
  '241420': ['Asian', 'Chinese'],
  '570511': ['Desserts'],
  '435405': ['Chaat'],
  '588012': ['Asian', 'Burger', 'Italian'],
  '19361': ['Italian'],
  '1200844': ['South Indian'],
  '405798': ['Chinese'],
  '1194325': ['Burger'],
  '881362': ['South Indian'],
  '448012': ['Cafe'],
};

module.exports = { CATALOGS, RESTAURANT_MENUS };
