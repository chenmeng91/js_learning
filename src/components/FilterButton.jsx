export default function FilterButton({ name, isPressed }) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed={isPressed}>
      <span className="visually-hidden">显示 </span>
      <span>{name}</span>
      <span className="visually-hidden"> 任务</span>
    </button>
  );
}
