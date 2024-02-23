import '../styles/Buton.css';
const MenuItem = ({ image, name, content, location }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: '10px' }}>{name}</h1>
      <h6 style={{ marginTop: '0px' }}>{content}</h6>
      
      <button class="location" onClick={() => window.location.href = location}>Konumu Gör</button>
    </div>
  );
};

export default MenuItem;

