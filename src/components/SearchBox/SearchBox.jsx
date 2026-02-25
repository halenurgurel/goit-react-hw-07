import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  //Mevcut filtre değerini okumak için
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Search people by their name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
