import heroImg from '../assets/hero.png'
import '../App.css'
import Card from './card'

function home() {
  return (
    <>
      <section id="center" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

        <div className="order-1">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#B85C82]">Pinkora Creative</p>
          <h1 className="text-4xl font-bold text-[#B85C82] md:text-6xl">We Turn Ideas Into Creative Experiences.</h1>
          <p className="mt-4 text-lg leading-7 text-[#725565]">Pinkora Creative adalah studio kreatif yang membantu
            membuat desain untuk kebutuhan bisnis dan media digital. Kami percaya desain yang menarik bisa membuat sebuah
            ide lebih mudah dikenal.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#F8C8DC] px-4 py-2 text-sm text-[#422536]">Graphic Design</span>
            <span className="rounded-full bg-[#F8C8DC] px-4 py-2 text-sm text-[#422536]">Branding</span>
            <span className="rounded-full bg-[#F8C8DC] px-4 py-2 text-sm text-[#422536]">Social Media Design</span>
          </div>

          <a href="#services" className="mt-6 inline-block rounded-full bg-[#E879A9] px-6 py-3 font-semibold text-white transition hover:bg-[#B85C82]">Lihat Layanan →</a>
        </div>

        <div className="order-2 flex justify-center items-center">
          <img src={heroImg} alt="Logo Pinkora Creative" className="w-full max-w-4xl object-contain drop-shadow-sm" />
        </div>
      </section>

      <section id="about-home" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#B85C82]">About Pinkora Creative</h2>
          <p className="mt-3 leading-7 text-[#725565]">
            Pinkora Creative adalah studio desain yang membantu bisnis
            membuat tampilan visual yang menarik, mulai dari desain grafis hingga 
            konten media sosial.</p>
        </div>
      </section>

    <section id="services" className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B85C82]">Apa yang Kami Tawarkan</p>
          <h2 className="mt-2 text-3xl font-bold text-[#B85C82] md:text-4xl">Layanan Unggulan Kami</h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#725565]">
            Kami membantu bisnis membangun tampilan visual yang menarik melalui
            berbagai layanan desain kreatif.</p>
        </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> 🎨
              </div>

              <h3 className="text-xl font-bold text-[#B85C82]">Graphic Design</h3>
              <p className="mt-3 leading-7 text-[#725565]">
                Membuat poster, brosur, banner, dan materi promosi dengan
                desain yang menarik dan mudah dipahami.</p>
            </Card>
        

          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> ✨
            </div>

            <h3 className="text-xl font-bold text-[#B85C82]">Branding</h3>
            <p className="mt-3 leading-7 text-[#725565]">
              Membantu membangun identitas brand melalui logo,
              pemilihan warna, dan elemen visual yang konsisten.</p>
          </Card>

          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> 📱
            </div>

            <h3 className=" text-xl font-bold text-[#B85C82]">Social Media Design</h3>
            <p className="mt-3 leading-7 text-[#725565]">
             Merancang konten media sosial yang menarik dan
             konsisten untuk membantu meningkatkan daya tarik brand.</p>
          </Card>

        <Card>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> 💻
          </div>

          <h3 className="text-xl font-bold text-[#B85C82]">Web Design</h3>
          <p className="mt-3 leading-7 text-[#725565]">
            Merancang tampilan wrbsite yang rapi, menarik, dan
            mudah digunakan di berbagai perangkat.
          </p>
        </Card>

      <Card>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> 📸
        </div>

        <h3 className="text-xl font-bold text-[#B85C82]">Content Creator</h3>
        <p className="mt-3 leading-7 text-[#725565]">
          Membantu menyiapkan ide dan materi visual untuk kebutuhan promosi
          serta komunikasi digital.
        </p>
      </Card>

    <Card>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8C8DC] text-2xl"> 🖌️
      </div>

      <h3 className="text-xl font-bold text-[#B85C82]">Illustration</h3>
      <p className="mt-3 leading-7 text-[#725565]">
        Membuat ilustrasi untuk melengkapi kebutuhan desain,
        materi promosi, dan identitas visual.
      </p>
    </Card>

  </div>
  </section>
    </>
  )
}

export default home