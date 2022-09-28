/* This Navbar requires Tailwind CSS v2.0+ */
import { CpuChipIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="">
          <div className="mx-auto max-w-lg px-2 sm:px-6 lg:px-8 bg-gray-700 mt-8 rounded-lg shadow-md">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <CpuChipIcon className="block h-10 w-10 text-gray-100" aria-hidden="true" />
                </div>
                <div className="sm:ml-6 block">
                  <div className="flex space-x-4">
                      <p
                        className='text-gray-100 px-3 py-2 rounded-md text-lg font-semibold'
                      >
                        Counting Machine
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </nav>
  )
}
