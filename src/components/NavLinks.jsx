import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink href="/tools" className="text-[#7c7c6f] hover:text-[#fffce1]">Tools</NavLink>
      <NavLink href="/pricing" className="text-[#7c7c6f] hover:text-[#fffce1]">Pricing</NavLink>
      <NavLink href="/showcase" className="text-[#7c7c6f] hover:text-[#fffce1]">Showcase</NavLink>
      <NavLink href="/resources" className="text-[#7c7c6f] hover:text-[#fffce1]">Resources</NavLink>
      <NavLink href="/community" className="text-[#7c7c6f] hover:text-[#fffce1]">Community</NavLink>
      <NavLink href="/docs" className="text-[#7c7c6f] hover:text-[#fffce1]">Docs</NavLink>
    </>
  )
}

export default NavLinks;