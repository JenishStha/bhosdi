import CustomLink from "../custom-link"

export default function MobileButtonLink({ navLink, closeSelf }) {
  return (
    <CustomLink link={navLink}>
      <div
        className="hover:text-gray-900 py-6 flex flex-row justify-between items-center"
        onClick={closeSelf}
      >
        <span>{navLink.text}</span>
      </div>
    </CustomLink>
  )
}
