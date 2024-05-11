export default function Contact({ contacts: {id, name, number }, onDelete }) {
  return (
    <div>
      <p >{name}</p>
      <p>{number}</p>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}
