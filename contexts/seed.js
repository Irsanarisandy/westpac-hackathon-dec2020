const Users = [
    {
        id: 1,
        name: "Bob Marley",
        age: 25,
        image: "../images/bobmarley.jpg",
        professional: "Deceased Hippy Artist",
        rating: [
            {
                data: {
                    A: 0.2,
                    B: 0.5,
                    C: 0.6,
                    D: 0.4,
                    E: 0.7,
                },
                meta: { color: 'blue' }
            }
        ],
        recommender:[
            "recommendation 1",
            "recommendation 2",
            "recommendation 3",
            "recommendation 4",
        ],
    },

    {
        id: 2,
        name: "User 2 Name",
        age: 28,
        image: "../images/user2.jpg",
        professional: "Web Developer",
        rating: [
            {
                data: {
                    A: 0.2,
                    B: 0.3,
                    C: 0.2,
                    D: 0.5,
                    E: 0.9,
                },
                meta: { color: 'red' }
            }
        ],
        recommender:[
            "recommendation 1",
            "recommendation 2",
            "recommendation 3",
            "recommendation 4",
            "recommendation 5",
        ],

    },

    {
        id: 3,
        name: "User 3 Name",
        age: 28,
        image: "../images/user3.jpg",
        professional: "Manager",
        rating: [
            {
                data: {
                    A: 0.7,
                    B: 0.2,
                    C: 0.6,
                    D: 0.8,
                    E: 0.1,
                },
                meta: { color: 'black' }
            }
        ],
        recommender:[
            "recommendation 1",
            "recommendation 2",
            "recommendation 3",
            "recommendation 4",
            "recommendation 5",
        ],

    },
];

export { Users };