import Image from 'next/image'
import Categories from './components/Categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/ProductList';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto este mês"
        sizes="100vw"
        className="h-auto w-full px-5"
        priority
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8 ">
        <ProductList products={deals} />
      </div>
    </div>
  )
}
