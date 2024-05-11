import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
			<input
				className={css.input}
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}
