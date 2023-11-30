import { formatJobList, formatQueryParams } from './'

describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })

    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('The formatQueryParams function', () => {
  const answers_1 = {
    '1': false
  }

  const answers_2 = {
    '1': false,
    '2': true
  }

  it('should not add & if there is only one element', () => {
    const expectedState = 'a1=false'
    expect(formatQueryParams(answers_1)).toEqual(expectedState)
  })

  it('should add & if there is more than one element', () => {
    const expectedState = 'a1=false&a2=true'
    expect(formatQueryParams(answers_2)).toEqual(expectedState)
  })


})
