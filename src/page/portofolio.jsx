const portofolio = [
    {
        number: '01',
        title: 'Brand Identity',
        category: 'Branding',
        description:
        'Konsep identitas visual untuk membangun karakter sebuah brand',
        image: '/src/img/portofolio/brand.png',
    },
    {
        number: '02',
        title: 'BSocial Media Campaign',
        category: 'Social Media Design',
        description:
        'Desain konten media sosial untuk kebutuhan promosi digital.',
        image: '/src/img/portofolio/socialmedia.png',
    },
    {
        number: '03',
        title: 'Promotional Poster',
        category: 'Graphic Design',
        description:
        'Desain poster promosi yang menarik dan mudah dipahami.',
        image: '/src/img/portofolio/poster.jpg',
    },
    {
        number: '04',
        title: 'Creative Content',
        category: 'Content Creation',
        description:
        'Konsep konten kreatif untuk memperkenalkan produk atau layanan.',
        image: '/src/img/portofolio/content.jpg',
    },
    {
        number: '05',
        title: 'Product Promotion',
        category: 'BAdvertising Design',
        description:
        'Visual promosi produk dengan tampilan yang menarik.',
        image: '/src/img/portofolio/product.png',
    },
    {
        number: '06',
        title: 'Digital Artwork',
        category: 'Digital Design',
        description:
        'Karya visual digital dengan konsep kreatif dan modern.',
        image: '/src/img/portofolio/digital.jpg',
    },
]

function Portofolio() {
    return (
        <>
        
        <main className="min-h-screen bg-[#FFF1F6] px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B85C82] md:tect-5xl">Our Creative Works</p>
                    <h1 className="mt-3 text-4xl font-bold text-[#B85C82] md:text-5xl">Portofolio Kami</h1>
                </section>

                <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portofolio.map((project) => (
                        <article key={project.number} className="overflow-hidden rounded-3xl border border-[#F8C8DC] bg-white shadow-sm transition duration-300 hover:translate-y-1 hover:shadow-lg">

                            <div className="h-52 overflow-hidden bg-[#F8C8DC]">
                                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-300 hover:scale-105"/>
                            </div>

                            <div className="p-6">
                                <span className="inline-block rounded-full bg-[#FCE0EC] px-3 py-1 text-sm font-medium text-[#B85C82]">
                                    {project.category}
                                </span>

                                <h2 className="mt-4 text-xl font-bold text-[#422536]">{project.title}</h2>

                                <p className="mt-3 leading-7 text-[#725565]">{project.description}</p>

                                <div className="mt-5 flex items-center justify-between">
                                    <span className="font-semibold text-[#B85C82]">
                                        {project.number}
                                    </span>

                                    <span aria-hidden="true" className="text-xl text-[#E879A9]"> →
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="mt-12 rounded-3xl bg-[#F8C8DC] px-6 py-8 text-center md:px-10">
                    <h2 className="text-2xl font-bold text-[#422536]">Punya Ide Kreatif?</h2>

                    <p className="mx-auto mt-3 max-w-xl leading-7 text-[#725565]">
                        Mari wujudkan ide kamu menjadi desain yang menarik
                        bersama Pinkora Creative
                    </p>
                </section>
            </div>
        </main>
        </>
    )
}

export default Portofolio