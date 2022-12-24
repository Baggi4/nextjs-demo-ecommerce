import Image from 'next/image'
import { Container } from '@components/ui'
const categories = [
  {
    name: 'Digital Art',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671836641/art_a7uria.webp',
  },
  {
    name: 'NFT',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671836641/collectibles_vwlcvm.webp',
  },
  {
    name: 'Makeup & cosmetics',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671839524/sports_a3eixb.png',
  },
  {
    name: 'Humor & Memes',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671838100/virtual-worlds_cgs5cg.png',
  },
  {
    name: 'Fitness & Sport',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671839031/sports_qg7wcj.png',
  },
]
function ProductCategory() {
  return (
    <Container>
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="flex items-center">
          <div className="flex-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Browse by category
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto"
          >
            <a href="/search">View all</a>
          </button>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-36 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-32 w-52 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <Image
                        src={category.imageSrc}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        width={662}
                        height={360}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">
                      {category.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductCategory
