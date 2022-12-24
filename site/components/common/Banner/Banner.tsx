import s from './Banner.module.css'

const Banner = () => {
  return (
    <div className={s.root}>
      <div className={s.bg}>
        <div className="mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8">
          <div className="sm:px-16 text-center">
            <p className="font-medium text-white">
              <span className={s.row}>
                <span
                  title="New Products listed !"
                  data-alt="Hi, welcome to Occount !"
                ></span>
              </span>
              <span className="ml-2">
                <a href="#trending" className="font-bold text-white underline">
                  Learn more
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
