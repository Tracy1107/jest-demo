const axios = require('axios')

const methods = {
    makeChange(money, fee) {
        return money- fee
    },
    returnVariable(variable) {
        return variable
    },
    profile() {
        return {
            name: 'Mark'
        }
    },
    friends: ['Luke', 'Lisa', 'Sunny'],
    getData() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            return res.data
        })
    }
}

// let data2 = {}

// methods.getData()
// .then(data => {
//     data2 = data
//     console.log(1, data2)
// })

// console.log(2, data2)

module.exports = methods