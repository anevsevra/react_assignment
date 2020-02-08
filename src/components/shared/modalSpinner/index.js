import { connect } from 'react-redux';
import ModalSpinner from './page';

const mapStateToProps = state => ({
  isLoading: state.request.isLoading,
});

export default connect(mapStateToProps)(ModalSpinner);
