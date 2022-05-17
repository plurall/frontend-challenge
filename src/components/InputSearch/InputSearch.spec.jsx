import InputSearch from '.';

describe('InputSearch', () => {
  it('Should be render value equals "John"', () => {
    render(
      <InputSearch
        id="input-test"
        name="input-test"
        label="Search"
        onChange={() => {}}
        value="John"
      />
    )
  })
})
