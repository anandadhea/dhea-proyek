const services = [
    {
        number: '01',
        title: 'Graphic Design',
        description:
        'Membuat desain poster, brosur, dan materi promosi yang menarik sesuai kebutuhan bisnis.',
    },
    {
        number: '02',
        title: 'Branding',
        description:
        'Membangun identitas brand melalui desain logo, pemilihan warna, dan konsep visual yang konsisten.',
    },
    {
        number: '03',
        title: 'Social Media Design',
        description:
        'Membuat konten visual media sosial yang kreatif untuk membantu bisnis tampil lebih menarik.',
    },
    {
        number: '04',
        title: 'Content Creation',
        description:
        'Mengembangkan ide dan materi konten digital sesuai karakter brand dan target audiens.',
    },
]

function Services() {
    return (
        <>

        <main className="min-h-screen bg-[#FFF1F6] px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B85C82]"> What We Offer</p>

                    <h1 className="mt-3 text-4xl font-bold text-[#B85C82] md:text-5xl">Layanan Kami</h1>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#725565]">
                        Pinkora Creative menyediakan layanan desain dan konten
                        digital untuk membantu bisnis menampilkan identitas visual
                        yang menarik dan sesuai kebetuhan mereka.
                    </p>
                </section>

                <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service)=> (
                        <article key={service.number} className="rounded-3xl border border-[#F8C8DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F8C8DC] text-lg font-bold text-[#B85C82]">
                                {service.number}
                            </div>

                            <h2 className="mt-5 text-xl font-bold text-[#B85C82]">
                                {service.title}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#725565]">
                                {service.description}
                            </p>    
                        </article>
                    ))}
            </section>

            <section className="mt-12 rounded-3xl bg-[#F8C8DC] px-6 py-8 text-center md:px-10">
                <h2 className="text-2xl font-bold text-[#422536]">Punya Ide Kreatif?</h2>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-[#725565]">
                    Mari wujudkan ide kamu menjadi desain yang menarik bersama 
                    Pinkora Creative
                </p>
            </section>  
            </div>
        </main>
    </>
  )
}

export default Services