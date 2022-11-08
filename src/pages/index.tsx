import MainLayout from '@/components/Layout/MainLayout';
import handIcon from '@/assets/images/icons/waving-hand.png';
import Image from 'next/image';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function HomePage() {
  return (
    <div className="tw-block lg:tw-grid-cols-3  sm:tw-grid-cols-2 sm:tw-gap-4">
      <div className="tw-flex tw-items-center tw-mb-8">
        <Image src={handIcon} width={60} height={60} alt="hand icon ..." />

        <p className="tw-ml-8 tw-text-lg tw-text-slate-700 tw-font-semibold dark:tw-text-slate-400">
          Hi! Ngày hôm nay của bạn ổn chứ? Mình hy vọng bạn ổn 😄
        </p>
      </div>
      <div>
        <p className="tw-text-slate-700 dark:tw-text-slate-400">
          Phía trên là một trong số những tấm hình mình thích nhất, cũng là nơi lưu giữ
          khá nhiều kỉ niệm của mình tại Đà Lạt. Bạn thấy nó đẹp chứ, buổi chiều hôm đó là
          buổi chiều cuối cùng, giây phút của sự chia ly của lời nói <b>tạm biệt</b>. Có
          những kí ức mãi dừng lại tại ngày hôm đó. Bạn hỏi mình lúc đó có buồn không ư?
          câu trả lời là <b>có</b>, buồn chứ. Nhưng mà tính đến thời điểm hiện tại thì
          mình hết rồi. Ai rồi cũng phải tiến tới tương lai, không ai sống mãi trong hồi
          ức. <br /> <br />
          </p>
          <div className="tw-p-6 tw-border-l-2 tw-border-black tw-shadow-inner tw-shadow-xl tw-mb-1">
            <span className="tw-text-sky-600 dark:tw-text-sky-500">
              <i>
                {`" `}
                Nhà tù lớn nhất trên thế giới là trái tim của bạn. Nếu bạn không thể thoát
                ra khỏi nỗi ám ảnh của chính mình, bạn sẽ là tù nhân ở khắp mọi nơi.
                {` "`}
              </i>
            </span>
          </div>
          <br />
          <p className="tw-text-slate-700 dark:tw-text-slate-400">
          Đây cũng là một câu nói mà mình khá là thích, đại ý chính là mọi thứ trên đời
          này đều do bạn quyết định, bạn cảm thấy nó là tốt thì nó chính là tốt, bạn thấy
          nó xấu thì nó là xấu, tâm trạng của bạn như thế nào cũng là do bạn quyết định.
          Có những chuyện bản thân bạn không thể can thiệp, không thể thay đổi nên là cứ
          vui vẻ chấp nhận, điều bạn cần làm chỉ là điều khiển cảm xúc của bản thân bạn
          thôi. Bạn vui vẻ thì bầu trời tự khắc sẽ là màu hồng.
          <br /> <br />
          Mình mong rằng bạn mỗi ngày đều vui vẻ, dùng thái độ tích cực nhất đối diện với
          mọi khó khăn trong cuộc sống. Nếu có một ngày bạn mệt mỏi thì hãy để bản thân
          mình nghỉ ngơi. Tập yêu thương bản thân mỗi ngày, vì chỉ khi bạn yêu chính mình
          thì thế giới này mới có thể yêu thương bạn.
          <br /> <br />
          Mình tạo ra cái blog này, ngoài việc nâng cao trình độ bản thân thì đây cũng là
          nơi mình lưu giữ lại những cột mốc của tuổi trẻ, vì mình phát hiện ra thanh xuân
          ngắn ngủi mọi vui buồn đều đáng nhớ, nếu không có một nơi lưu giữ lại thực sự
          sau này sẽ chẳng có gì để nhìn lại, để suy nghĩ, với mình cái blog này giống
          quyển nhật ký online vậy. Viết mọi suy nghĩ của mình lên đây, một vài năm sau
          lôi ra đọc lại (không biết là cười hay là khóc :D), nhưng nó cũng như là một sự
          đánh dấu những bước đi của mình trên con đường trưởng thành, hơi tiếc vì quá
          trình quan trọng nhất và vui nhất thì mình lại chẳng có gì lưu lại cả. Nhưng mà
          bắt đầu từ bây giờ cũng chưa phải quá trễ :D. <br /> <br />
          <span>
            Mình trước đây không có thói quen ghi lại hay lưu giữ lại những thứ mà mình
            trải qua, có chăng lâu lâu đăng được vài cái chung với bạn bè, còn của cá nhân
            thì không hề có, toàn đăng mấy cái ba xàm ba láp, hay đơn giản chỉ là vì thích
            một bài nhạc hay thích một câu qoute, thì up lên story, mà ba cái đó không để
            lại dấu ấn, thời gian sau nhìn lại chả nhớ nữa :D. Nên bây giờ mình quyết định
            lấy cái blog này lưu trữ lại mọi thứ, vui buồn hạnh phúc mình sẽ ghi lại hết,
            có thể public lên hoặc không :v. Thời gian này mình còn biến cái zalo thành
            nơi lưu hình, xàm xí trên đó, vì zalo không có bạn bè nhiều, lại còn có thể
            đăng hình kèm nhạc, há há. Tiktok nữa chớ, video ngắn hihihi.
            <br /> <br />
          </span>
        </p>
      </div>

      <div className="tw-flex tw-mb-8">
        <div className="tw-bg-sky-100 tw-mr-4 tw-px-2 tw-rounded-md">
          <span className="tw-text-sky-700 tw-font-bold"> keep in memory </span>
        </div>
        <div className="tw-bg-fuchsia-100 tw-mr-4 tw-px-2 tw-rounded-md">
          <span className="tw-text-fuchsia-700 tw-font-bold"> respect all </span>
        </div>
      </div>

      <div>
        <p className="tw-text-slate-700 dark:tw-text-slate-400"> 21:00 p.m | 09-07-2022 |</p>
      </div>
    </div>
  );
}

HomePage.Layout = MainLayout;
export default HomePage;
