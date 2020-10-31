export const questions = [
    {
        statement: "what do you want to buy today?",
        options: [
            {
                answer: "car",
                nextQuesIdx: 1
            },
            {
                answer: "nothing",
                nextQuesIdx: -1
            }
        ]    
    },
    {
        statement: "what color do you want for you new car?",
        options: [
            {
                answer: "blue",
                nextQuesIdx: 2
            },
            {
                answer: "green",
                nextQuesIdx: 3
            }
        ]    
    },
    {
        statement: "light blue or dark blue",
        options: [
            {
                answer: "light",
                nextQuesIdx: 4
            },
            {
                answer: "dark",
                nextQuesIdx: 4
            }
        ]    
    },
    {
        statement: "light green or dark green",
        options: [
            {
                answer: "light",
                nextQuesIdx: 4
            },
            {
                answer: "dark",
                nextQuesIdx: 4
            }
        ]    
    },
    {
        statement: "SUV or sedan",
        options: [
            {
                answer: "suv",
                nextQuesIdx: -1
            },
            {
                answer: "sedan",
                nextQuesIdx: -1
            },
            {
                answer: "start again",
                nextQuesIdx: 0
            }
        ]    
    }
]