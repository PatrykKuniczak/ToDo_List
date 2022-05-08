import {useNavigate} from "react-router-dom";
import dateFormat from "dateformat";
import {useDispatch} from "react-redux";
import {ITask} from "../../../helpers/interfaces";
import {changeItemImportant, deleteItem} from "../../store/itemsSlice";


const ItemFunc = (item: ITask) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const displayFormNav = () => navigate("/display-form");

    const editFormNav = () => navigate("/edit-form");

    const convertedDate = () => dateFormat(item.date, "yy-mm-dd HH:MM");

    const changeImportant = () => dispatch(changeItemImportant(item));

    const removeItem = () => dispatch(deleteItem(item.id));

    return {changeImportant, displayFormNav, editFormNav, convertedDate, removeItem}
}

export default ItemFunc;