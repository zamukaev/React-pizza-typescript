import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PizzasActionCreator from '../redux/action-creators';

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(PizzasActionCreator, dispatch)
}