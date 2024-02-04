import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink href="/tools" className="hover:text-white">Tools</NavLink>
      <NavLink href="/pricing" className="hover:text-white">Pricing</NavLink>
      <NavLink href="/showcase" className="hover:text-white">Showcase</NavLink>
      <NavLink href="/resources" className="hover:text-white">Resources</NavLink>
      <NavLink href="/community" className="hover:text-white">Community</NavLink>
      <NavLink href="/docs" className="hover:text-white">Docs</NavLink>
    </>
  )
}

export default NavLinks;