import data from '../data.json';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const list = [
  {
    title: 'INTERWORLD',
    image: 'https://i.scdn.co/image/ab6761610000e5eb55fd982e9c71e695fae1d54f',
  },
  {
    title: 'Liked Songs',
    image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
  },
  {
    title: 'GOODNIGHT LOVELL',
    image: 'https://i.scdn.co/image/ab67616d0000b273cd2918bf572ce9515646b46e',
  },
  {
    title: 'Night Lovell',
    image: 'https://i.scdn.co/image/ab6761610000e5ebe9d55242d13e8a1208f168c2',
  },
  {
    title: 'INTERWORLD Mix',
    image:
      'https://seed-mix-image.spotifycdn.com/v6/img/artist/5hKGLu4Ik88FzWcTPhWNTN/en/default',
  },
  {
    title: 'METAMORPHOSIS',
    image: 'https://i.scdn.co/image/ab67616d0000b273b852a616ae3a49a1f6b0f16e',
  },
];

export default function Home() {
  return (
    <div className="grid h-full w-full text-sm text-white">
      <Sidebar />
      <Footer />
      <Header />

      <main className="relative z-0 ml-[218px] overflow-y-auto pt-16 ">
        <div className="absolute  -z-20  -mt-16 h-[332px] w-full bg-gradient-to-b  from-[#502040]  opacity-50  "></div>
        <div className="  grid max-w-[1955px]  gap-6 px-8 pt-6  ">
          <section className="mb-4 flex min-h-[200px] flex-col">
            <div>
              <h2 className=" text-[32px] text-gray-200 ">Good morning</h2>
            </div>
            <div className="mt-4  grid gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="flex h-20  items-center gap-4 overflow-hidden rounded bg-[#ffffff1a]"
                >
                  <div className="relative h-20 w-20">
                    <img
                      draggable="false"
                      loading="lazy"
                      src={item.image}
                      alt=""
                      width={80}
                      height={80}
                      className="absolute top-0 left-0 z-30 h-full w-full object-cover "
                    />
                  </div>
                  <a
                    draggable="false"
                    title={item.title}
                    className="text-base font-bold text-white"
                  >
                    <p>{item.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </section>
          {data.map((item, index) => (
            <section
              key={index}
              className="mb-4 flex min-h-[200px] flex-col bg-transparent "
            >
              <div className="">
                <h2 className="mb-4 font-[CircularSpTitle] text-2xl font-bold ">
                  <a draggable="false">{item.title}</a>
                </h2>
                <div className="grid h-[300px]   grid-cols-2 gap-4  overflow-y-hidden md:grid-cols-3 lg:grid-cols-5  2xl:grid-cols-8">
                  {item.list.slice(0, 8).map((card, index2) => (
                    <div
                      key={index2}
                      className="flex w-full flex-col justify-center   bg-[#181818] p-4"
                    >
                      <div className="mb-4">
                        <img
                          draggable="false"
                          loading="lazy"
                          src={card.image}
                          alt=""
                          className="h-full w-full rounded "
                        />
                      </div>
                      <div className="flex flex-col gap-1 ">
                        <a className="text-base font-bold">{card.title}</a>
                        <div className="text-sm  text-[#a7a7a7] ">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
