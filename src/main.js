const app = Vue.createApp({
    data: function() {
        return {
            message: 'Hello OpenClassrooms!', // String
            answerToLife: 42, // Number
            groceries: ['Apples', 'Bananas', 'Coconuts'], // Arrays
            timeForLunch: false, // Boolean
            info: { // Object
                topic: 'VueJS',
                length: 5
            }
        }
    }
})