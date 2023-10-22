import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto este mês"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  )
}
