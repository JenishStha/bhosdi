import clsx from "clsx"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"

export default function ResponseMessage({ response }) {
  return (
    <div
      className={clsx(
        "rounded-md p-4",
        response.success && "bg-green-50",
        !response.success && "bg-red-50"
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <AiFillCheckCircle
            className={clsx(
              "h-5 w-5",
              response.success && "text-green-400",
              !response.success && "text-red-400"
            )}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p
            className={clsx(
              "text-sm font-medium",
              response.success && "text-green-800",
              !response.success && "text-red-800"
            )}
          >
            {response.message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={clsx(
                "inline-flex rounded-md focus:ring-offset-2 p-1.5 focus:outline-none focus:ring-2",
                response.success &&
                  "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50",
                !response.success &&
                  "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50"
              )}
            >
              <span className="sr-only">Dismiss</span>
              <AiFillCloseCircle className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
