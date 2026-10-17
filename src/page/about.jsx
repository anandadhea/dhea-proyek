function about() {
  return (
    <>

  <section id="about" className="mx-auto max-w-6xl px-6 py-12">

      <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#B85C82]">Kenali Kami</p>
          <h2 className="text-2xl font-bold text-[#B85C82] md:text-3xl">Sejarah Pinkora Creative</h2>
          <p className="mt-4 leading-7 text-[#725565]">
            Pinkora Creative didirikan pada tahun 2023 sebagai studio kreatif yang berfokus
            pada desain visual dan kebutuhan digital. Berawal dari keinginan untuk membantu bisnis tampil lebih menarik,
            kami menyediakan layanan desain grafis, branding, dan konten media sosial</p>
        </div>

        <div className="rounded-2xl bg-[#FFF1F6] p-6">
          <h3 className="text-xl font-bold text-[#B85C82]">Visi Kami</h3>
          <p className="mt-2 leading-7 text-[#725565]">
            Menjadi studio kreatif yang mampu menghadirkan desain menarik, bermakna, dan sesuai
            dengan kebutuhan klien.</p>

          <h3 className="mt-6 text-xl font-bold text-[#B85C82]">Misi Kami</h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-[#725565]">
            <li>Menghasilkan desain yang kreatif dan berkualitas.</li>
            <li>Membantu bisnis membangun identitas visual yang kuat.</li>
            <li>Memahami kebutuhan klien dalam setiap proyek.</li>
          </ul>
        </div>

      <div className="rounded-2xl bg-[#F8C8DC] p-6 md:col-span-2">
        <h3 className="text-xl font-bold text-[#B85C82]">Tim Kreatif Kami</h3>
        <p className="mt-3 leading-7 text-[#422536]">
          Pinkora Creative terdiri dari tim kreatif yang bekerja sama dalam
          mengembangkan ide, merancang identitas visual, dan membuat konten digital. 
          Setiap anggota berkontribusi untuk menghasilkan karya yang sesuai dengan kebutuhan klien.</p>

    </div>
  </div>

</section>

</>
  
  )
}

export default about