import s from './Banner.module.css'

const Banner = () => {
  return (
    <div className={s.root}>
      <div className={s.bg}>
        <div className="mx-auto max-w-md py-3 px-1 sm:px-2 lg:px-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className={s.row}>
                <span
                  title="Big news ! we annonced new Products !"
                  data-alt="Hi, welcome to Occount !"
                ></span>
              </span>
            </div>
            <div className="inline-block">
              <a
                href="https://openai.com/dall-e-2/"
                className="rounded-md border underline border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
