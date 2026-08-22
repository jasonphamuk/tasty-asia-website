const recipes = [
  {
    id: 1,
    name: "Dakgalbi",
    cuisine: "Korean",
    category: "Main",

    leftPage: {
      description:
        "A traditional Korean spicy stir-fried chicken dish with sweet potato, cabbage, onions and spring onions. Curated specially by the Tasty Asia Society Committee.",

      image: null,

      prepTime: "20 mins",
      cookTime: "15 mins",
      servings: 3,
      difficulty: "Medium",
      ingredients: [
        "4 chicken thigh fillets",

        "1 sweet potato",
        "4 spring onions",
        "1 onion",
        "⅓ head of cabbage",

        "1 tbsp curry powder",
        "3 tbsp chilli powder",
        "5 tbsp soy sauce",
        "1 tbsp sugar",
        "4 tbsp chilli paste",
        "4 tbsp apple cider vinegar",
        "1 tbsp sesame oil",

        "Cooking oil",
        "Salt and pepper to taste",
      ],
    },

    rightPage: {

      method: [
        "Poke the chicken thigh fillets with a fork to create small holes, helping the marinade absorb. Skin can be left on or removed according to preference.",
        "Prepare the marinade by mixing the curry powder, chilli powder, soy sauce, sugar, chilli paste, apple cider vinegar and sesame oil in a bowl.",
        "Add the chicken to the marinade one piece at a time, coating thoroughly.",
        "Wash all of the vegetables.",
        "Slice the sweet potato into roughly 1.5cm thick diagonal pieces.",
        "Chop the spring onions into roughly 3cm thick diagonal pieces.",
        "Cut one third of a head of cabbage into roughly 3cm thick slices, making sure the pieces are separated.",
        "Slice the onion thinly.",
        "Heat a large pan over high heat and add cooking oil.",
        "Add the spring onions and cook for roughly 3 minutes, or until softened. Season with salt and pepper to taste.",
        "Add the remaining vegetables and stir-fry for roughly 5 minutes, or until the onions are lightly browned. Season each vegetable with salt and pepper as desired.",
        "Reduce the heat to medium and add the marinated chicken thighs to the pan.",
        "Mix everything together and add any remaining marinade for extra flavour.",
        "Cut the chicken into small pieces using kitchen scissors.",
        "Continue cooking until the sweet potatoes are soft and the chicken is fully cooked. This should take roughly 10 minutes after adding the chicken.",
        "Check the largest piece of chicken if unsure. It should be white throughout. Avoid overcooking, as this can dry out the chicken or burn the vegetables.",
        "Enjoy!",
      ],
    },
  },

  {
    id: 2,
    name: "Corn Cheese",
    cuisine: "Korean",
    category: "Side",

    leftPage: {
      description:
        "A modern Korean side dish pairing sweet corn and melted mozzarella with garlic and mayonnaise. Its sweet flavour complements rich, spicy dishes such as Dakgalbi.",

      image: null,

      prepTime: "5 mins",
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Easy",
    },

    rightPage: {
      ingredients: [
        "4 garlic cloves",
        "2 tbsp mayonnaise",
        "½ can pre-cooked or canned corn",
        "Mozzarella cheese",
      ],

      method: [
        "Chop the garlic.",
        "Fry the garlic and mayonnaise over medium-high heat for roughly 3 minutes, or until the garlic is lightly browned.",
        "Add the corn to the pan.",
        "Cover the corn with mozzarella cheese.",
        "Place a lid over the pan and reduce the heat to low.",
        "Leave covered until the cheese has melted.",
        "Enjoy!",
      ],
    },
  },
  {
    id: 3,
    name: "Tuna Bibimbap",
    cuisine: "Korean",
    category: "Main",

    leftPage: {
      description:
        "A simple Korean-inspired rice bowl combining tuna, fresh vegetables, egg, and a sweet and spicy gochujang sauce.",

      image: null,
    },

    rightPage: {
      ingredients: [
        "1 bowl of cooked rice",
        "1 can of tuna",
        "1 egg",
        "Onion",
        "Carrot",
        "Cucumber",
        "Gochujang",
        "Sesame oil",
        "Sugar",
        "Vinegar",
      ],

      method: [
        "Thinly slice the raw onion, carrot, and cucumber into long strips. Other raw vegetables can also be used.",
        "Fry an egg to your preferred doneness.",
        "Place the cooked rice, tuna, fried egg, and chopped vegetables together in a bowl.",
        "Make the sauce by mixing 1 spoon of gochujang, 1 spoon of vinegar, 1/2 spoon of sugar, and 2 spoons of sesame oil.",
        "Pour the sauce over the ingredients.",
        "Mix everything together and enjoy.",
      ],
    },
  },

  {
    id: 4,
    name: "Shan Style Ngar Htamin",
    cuisine: "Burmese",
    category: "Main",

    leftPage: {
      description:
        "A beloved Shan State dish of sticky rice mixed with fish, potatoes and tomato, traditionally enjoyed as a warm and filling meal.",

      image: null,

      servings: null,
      difficulty: "Medium",
    },

    rightPage: {
      ingredients: [
        "Starchy rice, such as sushi rice",
        "Potatoes",
        "Salt",
        "Turmeric",
        "Tomatoes",
        "Fish",
        "Garlic",
        "Ginger",
        "Garlic oil",
        "Seasoning powder",
        "Chilli oil (optional)",
        "Crispy chicharrones (optional)",
        "Fish crackers (optional)",
        "Fried dried chillies (optional)",
        "Fried peanuts (optional)",
        "Fresh coriander (optional)",
      ],

      method: [
        "Boil the potatoes with salt and turmeric until soft, then mash.",
        "Boil, peel and chop the tomatoes.",
        "Sauté the tomatoes with salt and turmeric until they form a smooth puree.",
        "Boil the fish with garlic and ginger until soft.",
        "Stir-fry the fish in garlic oil with salt and turmeric.",
        "Combine half of the tomato puree, fish, mashed potatoes, a small amount of garlic oil and cooked rice in a bowl.",
        "Add salt and seasoning powder to taste.",
        "Mix everything together until smooth and sticky.",
        "Shape the mixture into balls or patties.",
        "Drizzle with garlic oil and top with the remaining tomato puree and fish.",
        "Add chilli oil or optional toppings before serving."
      ],
    },
  },

  {
    id: 5,
    name: "Shan Style Potato Mixed Rice",
    cuisine: "Burmese",
    category: "Main",

    leftPage: {
      description:
        "A vegan version of the beloved Shan State mixed rice dish, combining sticky rice, mashed potatoes and tomato with aromatic garlic oil.",

      image: null,

      servings: null,
      difficulty: "Easy",
    },

    rightPage: {
      ingredients: [
        "Starchy rice, such as sushi rice",
        "Potatoes",
        "Salt",
        "Turmeric",
        "Tomatoes",
        "Garlic oil",
        "Vegan seasoning powder",
        "Chilli oil (optional)",
        "Fried peanuts (optional)",
        "Fried dried chillies (optional)",
        "Fresh coriander (optional)",
      ],

      method: [
        "Boil the potatoes with salt and turmeric until soft, then mash.",
        "Boil, peel and chop the tomatoes.",
        "Sauté the tomatoes with salt and turmeric until they form a smooth puree.",
        "Combine half of the tomato puree, mashed potatoes, garlic oil and cooked rice in a bowl.",
        "Add salt and vegan seasoning powder to taste.",
        "Mix everything together until smooth and sticky.",
        "Shape the mixture into balls or patties.",
        "Drizzle with garlic oil and top with the remaining tomato puree.",
        "Add chilli oil or optional toppings before serving."
      ],
    },
  },
  {
    id: 6,
    name: "Vietnamese Summer Rolls",
    cuisine: "Vietnamese",
    category: "Starter",

    leftPage: {
      description:
        "Fresh Vietnamese rice paper rolls filled with vegetables, rice noodles, herbs and your choice of meat or mushrooms, served with a rich peanut dipping sauce.",

      image: null,

      prepTime: "20 mins",
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Medium",
    },

    rightPage: {
      ingredients: [
        "Rice paper",
        "Rice noodles",
        "Salad of choice",
        "Carrots",
        "Herb of choice",
        "Meat of choice",
        "Mushrooms",
        "Peanut sauce",
        "Sriracha sauce",
        "Salt to taste",
      ],

      method: [
        "Boil the rice noodles according to their instructions until soft.",
        "Julienne the carrots and slice any other vegetables of your choice.",
        "Prepare the salad and herbs.",
        "Prepare your choice of meat. Boiled shrimp or cooked chicken cubes are recommended.",
        "For a vegan or vegetarian option, use vegan meat or mushrooms.",
        "Drain the rice noodles once softened and lay out all the ingredients.",
        "Soak a sheet of rice paper in cold water for around 10–15 seconds, then place it on a flat plate.",
        "Place salad on the rice paper as the base.",
        "Add the carrots and other vegetables.",
        "Add the meat or mushrooms and roll the rice paper tightly.",
        "Serve with peanut sauce or sriracha sauce.",
      ],

      sauce: {
        name: "Peanut Sauce",
        description:
          "A rich, creamy blend of sweet, savoury and nutty flavours that complements the freshness of Vietnamese summer rolls.",

        ingredients: [
          "2 tbsp peanut butter",
          "1 tbsp hoisin or oyster sauce",
          "1 tbsp vinegar or lemon juice",
          "Salt to taste",
          "Sriracha sauce",
          "Water as needed",
        ],

        method: [
          "Combine the peanut butter, hoisin or oyster sauce, vinegar or lemon juice, salt and sriracha sauce.",
          "Whisk until fully combined.",
          "Add water one tablespoon at a time until the desired consistency is reached.",
          "Use around 2 tablespoons of water for a dipping sauce, or up to 4 tablespoons for a thinner dressing.",
        ],
      },
    },
  },
    {
    id: 7,
    name: "Masala Chai",
    cuisine: "Indian",
    category: "Drink",

    leftPage: {
      description:
        "A fragrant South Asian tea made by brewing black tea with aromatic spices, milk and sugar.",

      image: null,

      prepTime: "2 mins",
      cookTime: "6 mins",
      servings: 1,
      difficulty: "Easy",
    },

    rightPage: {
      ingredients: [
        "1 cup water",
        "2 green cardamom pods",
        "1 star anise",
        "1 tsp fennel seeds",
        "1 whole clove",
        "1 inch cinnamon stick",
        "1 black tea or English breakfast tea bag",
        "Milk to taste",
        "Sugar to taste",
      ],

      method: [
        "Add the water and all the spices to a saucepan.",
        "Boil the spices over high heat for 5 minutes to extract their flavours.",
        "Add the black tea or English breakfast tea bag.",
        "Add milk and sugar to taste.",
        "Boil for a further minute.",
        "Strain the tea through a sieve into a cup.",
        "Serve hot and enjoy.",
      ],
    },
  },
  {
    id: 8,
    name: "Dumplings",
    cuisine: "Chinese",
    category: "Main",

    leftPage: {
      description:
        "Homemade dumplings with a savoury cabbage filling, available with either chicken or shiitake mushrooms. Pan fry for a crispy base or steam for a softer finish.",

      image: null,

      cookTime: "7 mins",
      difficulty: "Medium",
    },

    rightPage: {
      ingredients: [
        "1 kg napa cabbage",
        "Chicken",
        "Chives",
        "Shiitake mushrooms",
        "Dumpling wrappers",
        "8 tbsp soy sauce",
        "4 tsp MSG",
        "8 tbsp sesame oil",
        "Cooking oil",
        "Water",
      ],

      method: [
        "Finely chop the napa cabbage and chives.",
        "For chicken dumplings, prepare the chicken and combine it with the cabbage and chives.",
        "For mushroom dumplings, slice the shiitake mushrooms and combine them with the cabbage and chives.",
        "Season the filling with soy sauce, MSG and sesame oil.",
        "Place approximately one teaspoon of filling into the centre of a dumpling wrapper.",
        "Wet the edge of the wrapper with water.",
        "Fold and pleat the wrapper to seal the dumpling.",
        "Heat cooking oil in a pan.",
        "Pan fry the dumplings for approximately 2 minutes.",
        "Add water to the pan and cover with a lid.",
        "Cook for a further 5 minutes, or steam the dumplings until cooked.",
        "Serve and enjoy.",
      ],

      variants: [
        {
          name: "Chicken & Cabbage",
          ingredients: [
            "Chicken",
            "Napa cabbage",
            "Chives",
          ],
        },
        {
          name: "Mushroom & Cabbage",
          ingredients: [
            "Shiitake mushrooms",
            "Napa cabbage",
            "Chives",
          ],
        },
      ],

      pleating: {
        title: "Pleating Instructions",

        note: "Live demonstration will be given.",

        methods: [
          "Fold the wrapper in half, hold one side, and pinch and fold three times. Repeat on the other side.",
          "Fold the wrapper in half and hold the centre. Starting from the right, make a pleat and continue until you reach the left side.",
        ],
      },
    },
  },
  {
    id: 9,
    name: "Korean/Burmese BBQ",
    cuisine: "Korean & Burmese",
    category: "Main",

    leftPage: {
      description:
        "An international BBQ experience combining Korean-style pork and kimchi with Burmese-inspired spiced skewers, perfect for sharing.",

      image: null,

      servings: "Variable",
      difficulty: "Medium",

      ingredients: [
        "Pork belly, shoulder or loin",
        "Kimchi",
        "Onions",
        "Spring onions",
        "Beef",
        "Chicken thighs",
        "Chicken gizzards",
        "Chicken liver",
        "Mutton",
        "Sausages",
        "Quail eggs",
        "Paneer",
        "Garlic",
        "Peppers",
        "Mushrooms",
        "Broccoli",
        "Baby potatoes",
        "Cooking oil",
        "Ginger",
        "Chilli flakes",
        "Turmeric",
        "Cumin",
        "Coriander",
        "Fish sauce or soy sauce",
        "Bamboo skewers",
      ],
    },

    rightPage: {

      method: [
        "For Korean BBQ, slice the pork into thin, bite-sized pieces.",
        "Slice the onions and chop the spring onions into roughly 3cm pieces.",
        "Heat a large pan or grill with cooking oil over high heat.",
        "Add the pork and onions and cook until the pork begins to brown and crisp at the edges.",
        "Add the kimchi and spring onions.",
        "Mix together and fry for a further 2–3 minutes until the kimchi is warmed through and everything is fully cooked.",
        "Serve hot with rice or fresh lettuce leaves.",
        "For Burmese BBQ, soak bamboo skewers in water beforehand if using them.",
        "Cut the meats, paneer and vegetables into uniform-sized pieces.",
        "Boil the quail eggs and baby potatoes until soft. Leave garlic cloves whole.",
        "Thread the ingredients onto separate skewers, keeping halal, non-halal and vegetarian ingredients completely separate.",
        "Prepare a spice oil by combining oil, minced garlic, ginger, chilli flakes, turmeric, cumin, coriander and fish sauce. Use soy sauce instead for a vegetarian option.",
        "Heat a grill or griddle over high heat and place the skewers on the grill.",
        "Turn the skewers frequently, brushing them with the spice oil throughout cooking.",
        "Cook until the meat is fully cooked and the vegetables are tender with a light char.",
        "Serve hot and enjoy.",
      ],

      variants: [
        {
          name: "Korean BBQ",
          description:
            "Korean-style pork and kimchi stir-fry or grilled pork served with onions and spring onions.",
          ingredients: [
            "Pork belly, shoulder or loin",
            "Kimchi",
            "Onions",
            "Spring onions",
          ],
        },

        {
          name: "Burmese BBQ Platter",
          description:
            "Burmese-inspired spiced skewers featuring meats, vegetables and vegetarian options.",
          ingredients: [
            "Beef",
            "Chicken thighs",
            "Chicken gizzards",
            "Chicken liver",
            "Mutton",
            "Sausages",
            "Quail eggs",
            "Paneer",
            "Garlic",
            "Peppers",
            "Mushrooms",
            "Broccoli",
            "Baby potatoes",
          ],
        },
      ],

      dietaryOptions: [
        {
          name: "Halal",
          ingredients: [
            "Beef",
            "Chicken thighs",
            "Chicken gizzards",
            "Chicken liver",
          ],
        },

        {
          name: "Non-Halal",
          ingredients: [
            "Mutton",
            "Sausages",
          ],
        },

        {
          name: "Vegetarian",
          ingredients: [
            "Quail eggs",
            "Paneer",
            "Garlic",
            "Peppers",
            "Mushrooms",
            "Broccoli",
            "Baby potatoes",
          ],
        },
      ],

      servingSuggestions: [
        "Rice",
        "Flatbreads",
        "Fresh lettuce wraps",
      ],
    },
  },
  {
    id: 10,
    name: "Coconut Noodle Soup",
    cuisine: "Burmese",
    category: "Main",

    leftPage: {
      description:
        "A rich and comforting Burmese coconut noodle soup made with chicken, coconut milk and chickpea flour.",

      image: null,

      prepTime: "30 mins",
      cookTime: "30 mins",
      servings: 2,
      difficulty: "Medium",

      ingredients: [
        "Egg noodles",
        "Chicken breast or bones",
        "Coconut milk",
        "Chickpea flour",
        "Cooking oil",
        "Shallots",
        "Garlic",
        "Ginger",
        "Fish sauce",
        "Salt",
        "Sugar",
        "Turmeric",
        "Paprika",
        "Chilli powder",
        "Split pea crackers",
        "Boiled egg",
        "Lime",
        "Chilli flakes",
      ],
    },

    rightPage: {

      method: [
        "Cut the chicken into bite-sized pieces.",
        "Marinate the chicken with turmeric, paprika, chilli powder, salt and fish sauce.",
        "Prepare a curry paste using shallots, garlic and ginger.",
        "Dilute the coconut milk with water.",
        "Mix chickpea flour with water until smooth.",
        "Heat oil in a deep pot and sauté the curry paste with turmeric, salt, fish sauce, paprika and chilli powder.",
        "Add the marinated chicken and cook for 4–5 minutes.",
        "Add the diluted coconut milk and simmer until the chicken is tender.",
        "Cook the noodles separately and prepare the toppings.",
        "Add the chickpea flour mixture to the broth and bring to a boil.",
        "Cook until the raw flour smell disappears.",
        "Add sugar and additional coconut milk to taste.",
        "Adjust the seasoning with salt, fish sauce and sugar.",
        "Place the cooked noodles into serving bowls.",
        "Pour the hot broth over the noodles.",
        "Top with boiled egg, shallots, lime, split pea crackers and chilli flakes.",
        "Serve hot and enjoy!",
      ],
    },
  },

  {
    id: 11,
    name: "Coconut Noodle Soup (Vegan)",
    cuisine: "Burmese",
    category: "Main",

    leftPage: {
      description:
        "A vegan version of the classic Burmese coconut noodle soup made with bean curd, roasted bran and mushroom seasoning.",

      image: null,

      prepTime: "30 mins",
      cookTime: "30 mins",
      servings: 2,
      difficulty: "Medium",

      ingredients: [
        "Egg noodles",
        "Soy bean curd knots",
        "Roasted bran cubes",
        "Coconut milk",
        "Chickpea flour",
        "Cooking oil",
        "Shallots",
        "Garlic",
        "Ginger",
        "Mushroom seasoning",
        "Salt",
        "Sugar",
        "Turmeric",
        "Paprika",
        "Chilli powder",
        "Split pea crackers",
        "Lime",
        "Chilli flakes",
      ],
    },

    rightPage: {

      method: [
        "Soak the bean curd knots and roasted bran cubes in warm water.",
        "Squeeze out the excess water.",
        "Season with salt, paprika, chilli powder, turmeric and mushroom seasoning.",
        "Prepare a curry paste using shallots, garlic and ginger.",
        "Dilute the coconut milk with water.",
        "Mix chickpea flour with water until smooth.",
        "Heat oil in a deep pot and sauté the curry paste with turmeric, salt, mushroom seasoning and chilli powder.",
        "Add the vegan ingredients and cook for 3–5 minutes.",
        "Add the diluted coconut milk and simmer for 10 minutes.",
        "Cook the noodles separately and prepare the toppings.",
        "Add the chickpea flour mixture to the broth and bring to a boil.",
        "Cook until the raw flour smell disappears.",
        "Add sugar and additional coconut milk to taste.",
        "Adjust the seasoning to your preference.",
        "Place the cooked noodles into serving bowls.",
        "Pour the hot broth over the noodles.",
        "Top with shallots, lime, split pea crackers and chilli flakes.",
        "Serve hot and enjoy!",
      ],
    },
  },
  {
    id: 12,
    name: "Boba",
    cuisine: "Taiwanese",
    category: "Drink",

    leftPage: {
      description:
        "A sweet and refreshing bubble tea experience with chewy tapioca pearls, black tea, milk and customizable sweetness.",

      image: null,

      prepTime: "30 mins",
      cookTime: "20 mins",
      servings: 36,
      difficulty: "Easy",
    },

    rightPage: {
      ingredients: [
        "36 black tea bags",
        "8 cups quick-cooking tapioca pearls",
        "8L whole milk",
        "2L oat milk",
        "500g dark brown sugar",
        "Hot water",
        "Ice cubes",
        "Extra-wide boba straws",
      ],

      method: [
        "Brew the black tea bags in large pots of hot water.",
        "If using loose leaf tea, strain the tea leaves completely.",
        "Allow the tea to cool before assembling the drinks.",
        "Combine 500g of dark brown sugar with an equal amount of water.",
        "Heat and stir until the sugar has completely dissolved to make a simple syrup.",
        "Cook the tapioca pearls according to the packet instructions until soft and chewy.",
        "Drain the cooked tapioca pearls using a sieve.",
        "Add your desired amount of tapioca pearls to a mug or cup.",
        "Add simple syrup according to your preferred sweetness.",
        "Pour in the cooled black tea.",
        "Top up with whole milk or oat milk.",
        "Add ice cubes if desired.",
        "Insert an extra-wide boba straw.",
        "Stir well and enjoy!",
      ],
    },
  },
  {
    id: 13,
    name: "Bánh Xèo",
    cuisine: "Vietnamese",
    category: "Main",

    leftPage: {
      description:
        "A crispy Vietnamese rice pancake filled with pork, prawns and beansprouts, served with fresh herbs, salad and a sweet and sour nước chấm dipping sauce.",

      image: null,

      prepTime: "20 mins",
      cookTime: "20 mins",
      servings: 2,
      difficulty: "Medium",
      ingredients: [
        "45g rice flour",
        "15g wheat flour",
        "½ tsp turmeric",
        "140ml sparkling water",
        "4 tbsp coconut milk",
        "½ tsp salt",
        "½ spring onion",
        "½ onion",
        "100g pork belly",
        "40g prawns",
        "75g beansprouts",
        "1 tbsp fish sauce",
        "½ tsp black pepper",
        "½ tsp MSG",
        "Gem lettuce",
        "Mint leaves",
        "Coriander (optional)",
        "Oil for frying",
        "Nước chấm dipping sauce",
      ],

    },

    rightPage: {
    
      method: [
        "Mix the rice flour, wheat flour, turmeric, sparkling water, coconut milk and salt to make the pancake batter.",
        "Keep the batter in the refrigerator while preparing the filling.",
        "Thinly slice the onion and pork belly.",
        "Remove the batter from the refrigerator and add the chopped spring onions.",
        "Heat oil in a frying pan over medium-high heat and add the sliced onions.",
        "Cook the onions until softened and slightly transparent.",
        "Add the prawns and pork belly, taking care not to overcook them.",
        "Season with fish sauce, black pepper and MSG.",
        "Set half of the filling aside and move the remaining filling to one side of the pan.",
        "Pour half of the batter into the pan and quickly swirl it around to create a thin, even pancake.",
        "Reduce the heat to medium and add the beansprouts.",
        "Cover the pan with a lid and cook for a few minutes until the beansprouts are slightly cooked and the edges of the batter become translucent.",
        "Remove the lid and add a little more oil around the edges.",
        "Continue cooking until the pancake becomes crispy.",
        "Fold the pancake in half and serve with fresh salad and nước chấm dipping sauce.",
      ],

      variants: {
        halal: [
          "Replace the pork belly and prawns with 150g chicken breast.",
          "Alternatively, use the vegetarian or vegan filling.",
          "Fish sauce can be kept when using chicken.",
        ],

        vegetarian: [
          "Replace the pork and prawns with 200g firm tofu and 2 oyster mushrooms.",
          "Fry the tofu separately until lightly browned.",
          "Slice the oyster mushrooms and onion.",
          "Sauté the onion, tofu and mushrooms together.",
          "Replace fish sauce with soy sauce.",
          "Continue with the main pancake recipe.",
        ],

        vegan: [
          "Follow the vegetarian filling.",
          "Use soy sauce instead of fish sauce.",
          "Ensure all other ingredients are suitable for a vegan diet.",
        ],
      },

      dippingSauce: {
        name: "Nước Chấm",

        ingredients: [
          "4 tbsp water",
          "1½ tbsp sugar",
          "1 tbsp lime juice",
          "1½ tbsp fish sauce",
          "1 clove garlic",
          "½ bird's eye chilli",
        ],

        method: [
          "Mince the garlic and chilli.",
          "Mix all ingredients together until the sugar has dissolved.",
          "Serve alongside the Bánh Xèo.",
          "For vegetarian and vegan versions, replace fish sauce with soy sauce.",
        ],
      },
    },
  },
  {
    id: 14,
    name: "Chicken Adobo",
    cuisine: "Filipino",
    category: "Main",

    leftPage: {
      description:
        "A rich and tangy Filipino dish of tender chicken drumsticks simmered in a savoury soy, vinegar and garlic sauce.",

      image: null,

      prepTime: "25 mins",
      cookTime: "45 mins",
      servings: 2,
      difficulty: "Medium",
      
      ingredients: [
        "6 chicken drumsticks",
        "3 garlic cloves, minced",
        "85ml light soy sauce",
        "40ml white vinegar",
        "3 bay leaves",
        "2 tbsp vegetable oil",
        "3 garlic cloves, minced",
        "1 onion, diced",
        "375ml water",
        "2 tbsp brown sugar",
        "1 tbsp whole black pepper",
        "2 spring onions",
      ],

    },

    rightPage: {
      method: [
        "Combine the chicken drumsticks, 3 minced garlic cloves, light soy sauce, white vinegar and bay leaves in a bowl.",
        "Cover and marinate for 20 minutes. For home cooking, marinate overnight for deeper flavour.",
        "Heat 1 tbsp of vegetable oil in a wok over medium-high heat.",
        "Remove the chicken from the marinade, keeping the remaining marinade aside for later.",
        "Sear the chicken on all sides until golden brown, approximately 1 minute per side. Do not cook it through at this stage.",
        "Remove the chicken from the wok and set aside.",
        "Add another 1 tbsp of vegetable oil to the wok.",
        "Add the remaining minced garlic and diced onion, then sauté for approximately 2 minutes until fragrant.",
        "Add the reserved marinade, including the bay leaves, along with the water, brown sugar and whole black pepper.",
        "Bring the sauce to a moderate simmer and cook for 5 minutes.",
        "Return the chicken drumsticks to the wok, ensuring they lie flat with at least one side submerged in the sauce.",
        "Reduce the heat and simmer uncovered for 30 minutes.",
        "Turn the drumsticks halfway through cooking so that both sides are coated in the sauce.",
        "After 30 minutes, check the sauce. It should have reduced to a thick consistency.",
        "If the sauce is not thick enough, remove the chicken and continue reducing the sauce until almost thickened.",
        "Return the chicken to the sauce and simmer for another 5 minutes.",
        "Adjust the flavour to taste with additional vinegar, salt or sugar.",
        "Garnish with sliced spring onions.",
        "Serve hot, preferably with rice.",
      ],

      variants: {
        vegan: [
          "Replace the chicken drumsticks with firm tofu.",
          "Slice the tofu into evenly sized rectangles.",
          "Pan-fry the tofu in 1 tbsp of vegetable oil over medium heat for approximately 1 minute per side.",
          "Set the tofu aside to cool before marinating.",
          "Use a vegan-friendly soy sauce and ensure the remaining ingredients are suitable for a vegan diet.",
          "Skip the chicken searing and cooking steps and follow the sauce preparation before simmering the tofu in the sauce.",
        ],

        halal: [
          "Use halal-certified chicken drumsticks.",
          "The rest of the recipe remains unchanged.",
        ],
      },
    },
  },
  {
    id: 15,
    name: "Anatomy Cookies",
    cuisine: "Japanese",
    category: "Dessert",

    leftPage: {
      description:
        "Decorated anatomy-themed cookies inspired by Asian flavours, featuring matcha, ube and colourful decorations.",

      image: null,

      prepTime: "30 mins",
      cookTime: "12 mins",
      servings: 12,
      difficulty: "Medium",
      ingredients: [
        "All-purpose flour",
        "Unsalted butter",
        "Granulated sugar",
        "Vanilla extract or paste",
        "Cornstarch",
        "Eggs",
        "Baking powder",
        "Salt",
        "Matcha powder",
        "Purple food colouring or ube extract",
        "Icing",
        "Sprinkles",
        "Chocolate chips",
        "Crushed nuts",
      ],
    },

    rightPage: {

      method: [
        "Prepare the cookie dough according to the chosen flavour variant.",
        "For matcha cookies, combine the flour, matcha powder and salt.",
        "Cream the softened butter and sugar together until smooth.",
        "Add the egg yolks and vanilla, then mix until combined.",
        "Gradually add the dry ingredients and mix until a dough forms.",
        "For ube cookies, prepare the dough using vegan butter, coconut milk, flaxseed meal, sugar, ube powder, flour, baking powder and cream of tartar.",
        "Chill the prepared dough before shaping.",
        "Roll the dough out evenly and cut into the desired anatomy-themed shapes.",
        "Place the cookies onto a lined baking tray.",
        "Bake until the cookies are set and lightly coloured around the edges.",
        "Allow the cookies to cool completely before decorating.",
        "Decorate with icing, chocolate chips, crushed nuts, sprinkles and other desired decorations.",
        "Allow the decorations to set before serving.",
      ],

      variants: {
        matcha: [
          "2 cups all-purpose flour",
          "2½ tbsp matcha powder",
          "¾ cup unsalted butter, softened",
          "1 pinch salt",
          "130g confectioners' sugar",
          "2 large egg yolks",
          "¼ cup white chocolate baking chips",
        ],

        veganUbe: [
          "Vegan butter",
          "Coconut milk",
          "Flaxseed meal",
          "Sugar",
          "Ube powder",
          "All-purpose flour or gluten-free flour",
          "Baking powder",
          "Cream of tartar",
        ],

        decorations: [
          "Chocolate chips",
          "Icing",
          "Crushed nuts",
          "Sprinkles",
        ],
      },
    },
  }
    
];

export default recipes;