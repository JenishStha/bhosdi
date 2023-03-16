import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Markdown from "react-markdown"
import TableOfContent from "./table-of-content"

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

const RichText = ({ data }) => {
  const [navigation, setNavigation] = useState([])
  const nav = []

  function HeadingRenderer(props) {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(flatten, "")
    const slug = text.toLowerCase().replace(/\W/g, "-")

    nav.push({ title: text, href: `#${slug}` })

    return React.createElement("h" + props.level, { id: slug }, props.children)
  }

  useEffect(() => {
    setNavigation(nav)
  }, [])

  return (
    <div className="container relative flex justify-center flex-wrap">
      <div className="lg:flex px-5 py-12 flex-1 lg:max-w-[200px] justify-start relative lg:absolute top-0 left-0">
        <TableOfContent navigation={navigation} />
      </div>
      <div className="prose prose-lg py-12">
        <Markdown
          components={{
            h2: HeadingRenderer,
            h3: HeadingRenderer,
            h1: HeadingRenderer,
          }}
        >
          {data.content}
        </Markdown>
      </div>
    </div>
  )
}

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

export default RichText
