import { useState } from "react"
import { MdChevronRight, MdExpandMore } from "react-icons/md"
import MobileButtonLink from "./mobile-button-link"

export default function MobileDropDown({ navLink, closeSelf }) {
  const [show, setShow] = useState(false)
  function handleClick() {
    setShow(!show)
  }
  return (
    <div>
      <div
        className="hover:text-gray-900 py-6 flex flex-row justify-between items-center"
        onClick={handleClick}
      >
        <span>{navLink.label}</span>
        {show ? (
          <MdExpandMore className="h-8 w-auto" />
        ) : (
          <MdChevronRight className="h-8 w-auto" />
        )}
      </div>
      {show && (
        <div className="pl-9">
          {navLink.link.map((link) => (
            <MobileButtonLink
              key={link.id}
              navLink={link}
              closeSelf={closeSelf}
            ></MobileButtonLink>
          ))}
        </div>
      )}
    </div>
  )
}
