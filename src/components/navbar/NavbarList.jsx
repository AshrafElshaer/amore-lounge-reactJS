
const NavbarList = ({ className , text , url , onClick }) => {
  return (
    <li className={className} >
        <a href={`#${url.toLocaleLowerCase().split(' ').join('')}`} className="navbar__list--link" aria-label={text}onClick={onClick}>
            {text}
        </a>
    </li>
  )
}
NavbarList.defaultProps = {
  className: 'navbar__list'
};
export default NavbarList