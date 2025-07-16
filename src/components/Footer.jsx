export default function Footer() {
  const yearElements = document.querySelectorAll(".year");
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h6 className="year">{`Built w/ ReactJS + Vite⚡${currentYear}`}</h6>
    </footer>
  );
}
