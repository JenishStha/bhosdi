import PropTypes from "prop-types"
import { MdClose, MdChevronRight } from "react-icons/md"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { useLockBodyScroll } from "utils/hooks"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../button-link"
import NextImage from "../image"
import MobileButtonLink from "./mobile-button-link"
import MobileDropDown from "./mobile-dropdown"

const MobileNavMenu = ({ navbar, menuList, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  const linkComponents = {
    ComponentLinksLink: MobileButtonLink,
    ComponentElementsDropdown: MobileDropDown,
  }
  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div>
          <div className="flex flex-row justify-between py-2 items-center">
            {/* Company logo */}
            <NextImage width="120" height="33" media={navbar.logo} />
            {/* Close button */}
            <button onClick={closeSelf} className="py-1 px-1">
              <MdClose className="h-8 w-auto" />
            </button>
          </div>
          {/* Bottom section */}
          <div>
            {/* Navigation links */}
            <ul className="flex flex-col list-none items-baseline text-xl mb-10">
              {menuList.map((navLink) => {
                const LinkComponent = linkComponents[navLink["__typename"]]
                return (
                  <li key={navLink.id} className="block w-full">
                    <LinkComponent
                      navLink={navLink}
                      closeSelf={closeSelf}
                    ></LinkComponent>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start w-9/12 mx-auto">
          <ButtonLink
            button={navbar.button}
            appearance={getButtonAppearance(navbar.button.type, "light")}
          />
        </div>
      </div>
    </div>
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
