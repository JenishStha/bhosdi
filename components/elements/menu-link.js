import CustomLink from "./custom-link"

export default function MenuLink({ navLink, locale }) {
  return (
    <CustomLink link={navLink} locale={locale}>
      <div className="hover:text-gray-900 px-2 py-1">{navLink.text}</div>
    </CustomLink>
  )
}
