import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <Link href="#">
                  <img
                    className="w-auto h-7"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </Link>

                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Join 31,000+ other and never miss out on new tips, tutorials,
                  and more.
                </p>

                <div className="flex mt-6 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Tec
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Videos
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Mega cloud
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Aperion UI
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    IndiaMart
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    example@email.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                © Copyright 2021. All Rights Reserved.
              </p>

              <div className="flex -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
