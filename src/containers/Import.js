// fill out this container
import { connect } from "react-redux";
import { fetchMakes, deleteMake } from "../redux/actions";
import Import from "./../components/Import";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (index) => dispatch(deleteMake(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Import);
