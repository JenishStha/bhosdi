import { FiPhone, FiInstagram } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import Link from "next/link"
import { getStrapiURL, postContactform } from "utils/api"
import { useState } from "react"
import ResponseMessage from "../elements/response-message"

export default function ContactForm({ data }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  async function handleSubmit(e) {
    if (loading) return
    e.preventDefault()

    // validation

    // post
    setLoading(true)
    const res = await postContactform(formData)
    setResponse(res)
    setLoading(false)
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative bg-white py-10">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              {data.description}
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>{data.address}</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <FiPhone
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{data.phone}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <AiOutlineMail
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{data.email}</span>
                </dd>
              </div>
            </dl>
            <p className="flex mt-6 text-base text-gray-500 gap-4">
              <Link href={data.facebook}>
                <a>
                  <FaFacebook className="h-6 w-6 flex-shrink-0 text-gray-400" />
                </a>
              </Link>
              <Link href={data.instagram}>
                <a>
                  <FiInstagram className="h-6 w-6 flex-shrink-0 text-gray-400" />
                </a>
              </Link>
              <Link href={data.twitter}>
                <a>
                  <FaTwitter className="h-6 w-6 flex-shrink-0 text-gray-400" />
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  name="fullname"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                  value={formData["fullname"]}
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                  value={formData["email"]}
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Phone"
                  value={formData["phone"]}
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                  value={formData["message"]}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    loading ? "disabled" : ""
                  }`}
                >
                  Submit
                </button>
                {!loading && response != null && (
                  <div className="mt-5">
                    <ResponseMessage response={response}></ResponseMessage>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
