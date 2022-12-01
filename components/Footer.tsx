import Image from 'next/image';
import {
  LikeIcon2,
  PicToPic,
  PlayIcon,
  PauseIcon,
  NextIcon,
  SchuffleIcon,
  PreviousIcon,
  RepeatIcon,
  LyricsIcon,
  QueueIcon,
  ConnectToDeviceIcon,
  MuteIcon,
} from './Icons';

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 z-40 flex h-[90px] w-full min-w-[620px] items-center justify-between border-t border-[#282828] bg-[#181818] px-4">
      <div className="flex w-[30%] min-w-[180px] items-center justify-start gap-2">
        <Image
          src="https://i.scdn.co/image/ab67616d000048517b934906581bfd03db4b2023"
          height={56}
          width={56}
          alt=""
        />
        <div className="mx-[14px]">
          <a>Streets</a>
          <div className="text-[11px] font-normal text-[#b3b3b3]">Doja Cat</div>
        </div>
        <div className="flex">
          <button className="flex h-8 w-8 items-center text-[#b3b3b3] hover:text-white">
            <LikeIcon2 />
          </button>
          <button className="flex h-8 w-8 items-center text-[#b3b3b3] hover:text-white">
            <PicToPic />
          </button>
        </div>
      </div>
      <div className="w-[40%] max-w-[722px]">
        <div className="flex flex-col  text-[#a7a7a7]">
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <button className="btn">
                <SchuffleIcon />
              </button>
              <button className="btn">
                <PreviousIcon />
              </button>
            </div>
            <button className="btn rounded-full bg-white text-black">
              <PlayIcon />
            </button>
            <div className="flex gap-2">
              <button className="btn">
                <NextIcon />
              </button>
              <button className="btn">
                <RepeatIcon />
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-2 ">
            <div className="text-[11px] font-normal text-[#b3b3b3]">1:19</div>

            <div className="h-1 w-full rounded-sm bg-[#ffffff4d]">
              <div
                className="h-1 rounded-sm bg-white"
                style={{ width: '45%' }}
              ></div>
            </div>
            <div className="text-[11px] font-normal text-[#b3b3b3]">3:47</div>
          </div>
        </div>
      </div>
      <div className="flex w-[30%] min-w-[180px] items-center justify-end gap-1 text-[#a7a7a7]">
        <button className="btn">
          <LyricsIcon />
        </button>
        <button className="btn">
          <QueueIcon />
        </button>
        <button className="btn">
          <ConnectToDeviceIcon />
        </button>
        <div className="flex basis-[125px] items-center  gap-1 ">
          <button className="btn">
            <MuteIcon />
          </button>
          <div className="mr-1 h-1 w-full rounded-sm bg-[#ffffff4d]">
            <div
              className="h-1 rounded-sm bg-white"
              style={{ width: '76%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
