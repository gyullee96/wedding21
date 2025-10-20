import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="flex gap-25 border-b-1 px-180 py-5">
        <div className="flex justify-center gap-5">
          <div>매체소개</div>
          <div>고객센터</div>
          <div>포인트정책</div>
          <div>개인정보처리방침</div>
          <div>이용약관</div>
          <div>이메일무단수집금지</div>
          <div>광고제휴문의</div>
          <div>윤리경영</div>
        </div>
        <div className="jutify-center flex gap-5">
          <div>instagram</div>
          <div>youtube</div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl gap-30 px-4 pt-10 pb-20 text-sm text-gray-600">
        <div>
          <Image
            src="/images/hero/wedding21_logo.png"
            alt="logo"
            width={240}
            height={80}
            className="object-cover"
          />
        </div>
        <div className="ml-10">
          <div className="pb-5 text-xl font-bold text-black">
            케이웨딩컴퍼니
          </div>
          <div>서울시 강남구 학동로 161, 3,4층</div>
          <div>대표자 : 대표자</div>
          <div>사업자등록번호:295-95-29595</div>
          <div>통신판매업신고: 제 2010-서울강남-21399호</div>
          <div>이메일: news@wedding21.co.kr</div>
          <div>c kweddingcompany. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
