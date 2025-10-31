import Image from 'next/image'

export default function FollowLab() {
  return (
    <div className="mx-180 my-50 bg-pink-100 py-10">
      <div className="flex items-center justify-between px-30">
        <Image
          src="/images/hero/wedding21_logo.png"
          alt="logo"
          width={180}
          height={60}
          className="object-cover"
        />
        <div>실시간으로 업데이트 되는 웨딩21의 최신소식</div>
        <button className="bg-white p-5">팔로우하기 +</button>
      </div>
    </div>
  )
}
