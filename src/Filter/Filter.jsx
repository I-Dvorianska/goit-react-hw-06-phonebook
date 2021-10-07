import { Wrapper, Input, Label } from "./Filter.styled";
import { connect } from "react-redux";
import {getFilterName} from '../redux/actions';

const Filter = ({filter, getFilterName}) => {

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
      />
    </Wrapper>
  );
};

function mapStateToProps(state) {
  return {
    filter: state.contacts.filter,
}}

function mapDispatchToProps(dispatch) {
  return {
    getFilterName: (e) => { dispatch(getFilterName(e.target.value.toLowerCase())) }
  }}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
