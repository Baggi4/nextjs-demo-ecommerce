import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image
    src="https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671026229/Ste_201215_mn0uac_wwoanh.png"
    alt="logo"
    width={75}
    height={50}
  />
)

export default Logo
