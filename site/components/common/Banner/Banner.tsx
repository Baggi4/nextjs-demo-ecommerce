import s from './Banner.module.css'

const Banner = () => {
  return (
    <div className={s.root}>
      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex justify-evenly items-center">
            <div className={s.title}>
              <span className={s.sdtitle}>
                We announced a new product!
                <a href="./" className="underline ml-1">
                  Learn more
                </a>
              </span>
              <span className={s.sdtitle}>
                Big news! We're excited to announce a brand new product.
                <a href="./" className="underline ml-1">
                  Learn more
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
