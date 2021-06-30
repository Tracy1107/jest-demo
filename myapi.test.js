const myapi = require('./myapi.js')

describe('分組1', () => {
    test('拿500元,買300元東西,預期找零200', () => {
        expect(myapi.makeChange(500, 300)).toBe(200)
    })
    
    test('是不是null', () => {
        expect(myapi.returnVariable(null)).toBeNull()
    })
    
    test('0與-0不相等', () => {
        expect(myapi.returnVariable(0)).not.toBe(-0)
        // 0 === -0  ---> true
    })
    
    test('檢查是不是truthy', () => {
        expect(myapi.returnVariable({})).toBeTruthy()
    })
})

describe('分組2', () => {
    test('檢查物件內容是否正確', () => {
        const profile = {
            name: 'Mark'
        }
        expect(myapi.profile()).toEqual(profile)
    })
    
    test('檢查陣列是否包含特定值', () => {
        expect(myapi.friends).toContain('Lisa')
    })
    
    test('email是否符合格式', () => {
        expect('asdljf@dkd.com').toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
    })
})

describe('檢查非同步', () => {
    test('檢查遠端資料', () => {
        expect.assertions(1)
        let str = 'delectus aut autem'
        return myapi.getData()
        .then(data => {
            expect(data.title).toMatch(str)
        })
    })

    test('使用async檢查非同步', async() => {
        expect.assertions(1)
        let str = 'delectus aut autem'
        const data = await myapi.getData()
        expect(data.title).toMatch(str)
    })
})




