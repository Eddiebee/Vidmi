const Nav = ({ brand, notification }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{brand}</span>
        {notification}
      </div>
    </nav>
  );
};

export default Nav;
