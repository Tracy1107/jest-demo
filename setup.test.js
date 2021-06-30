describe('testing of beforeEach and afterEach', () => {
    let isCity
    
    beforeEach(() => {
        isCity = 'Taichung'
        // console.log('beforeEach')
    })
  
    afterEach(() => {
        isCity = null
        // console.log('afterEach')
    })
  
    test('first testing', () => {
        // console.log('first testing')
        expect(isCity).toBe('Taichung')
        isCity = 'Hsinchu'
    })
  
    test('second testing', () => {
        // console.log('second testing')
        expect(isCity).toBe('Taichung')
    })
})

// describe('testing of beforeAll and afterAll', () => {
//     let isCity
    
//     beforeAll(() => {
//         isCity = 'Taichung'
//         console.log('beforeAll')
//     })
  
//     afterAll(() => {
//         isCity = null
//         console.log('afterAll')
//     })
  
//     test('first testing', () => {
//         console.log('first testing')
//         expect(isCity).toBe('Taichung')
//     })
  
//     test('second testing', () => {
//         console.log('second testing')
//         expect(isCity).toBe('Taichung')
//     })
// })


// describe('testing of beforeAll + beforeEach', () => {
//     const order = []

//     // first beforeAll with async function
//     beforeAll(async () => {
//         order.push(1)
//         await new Promise((resolve) => { setTimeout(resolve, 1000) })
//         order.push(2)
//     })

//     // first beforeEach with done callback
//     beforeEach(done => {
//         order.push(4)
//         setTimeout(() => {
//             order.push(6)
//             done()
//         }, 1000)
//         order.push(5)
//     });

//     // second beforeEach
//     beforeEach(() => {
//         order.push(7)
//     });

//     // second beforeAll
//     beforeAll(() => {
//         order.push(3)
//     })

//     test("should run in order", () => {
//         expect(order).toEqual([1, 2, 3, 4, 5, 6, 7])
//     })
// })

// describe('testing of broken promise chain', () => {
//     const order = [];

//     // does not return Promise and will break the Promise chain
//     const func = () => {
//         setTimeout(() => { order.push(2); }, 1000);
//     }

//     const asyncFunc = async () => {
//         order.push(1);
//         await func();  // doesn't actually wait for 2 to be pushed
//         order.push(3);
//     }

//     beforeAll(asyncFunc);

//     beforeEach(() => {
//         order.push(4);
//     });

//     test("should run in order", () => {
//         expect(order).toEqual([1, 2, 3, 4]);  // FAIL: [1, 3, 4]
//     });
// })

// describe('testing of timeout', () => {
//     const order = []

//     jest.setTimeout(100)  // 100ms timeout

//     const asyncFunc = async () => {
//         order.push(1)
//         await new Promise(resolve => { setTimeout(resolve, 1000) })  // times out
//         order.push(2)
//     }

//     beforeAll(asyncFunc)

//     beforeEach(() => {
//         order.push(3)
//     })

//     it("should run in order", () => {
//         expect(order).toEqual([1, 2, 3])  // FAIL: [1, 3] and Timeout error
//     })
// })

