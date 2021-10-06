import { Wrapper, Input, Label } from "./Filter.styled";

const Filter = ({ onChange, value }) => {
  const getFilteredName = (e) => {
    return onChange(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={getFilteredName}
      />
    </Wrapper>
  );
};

export default Filter;
