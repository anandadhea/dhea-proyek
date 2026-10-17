function Contact() {
    return (
        <>

        <main className="min-h-screen bg-[#FFF1F6] px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#B85C82]">Get In Touch</p>

                    <h1 className="mt-3 text-4xl font-bold text-[#422536] md:text-5xl">Hubungi Kami</h1>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-[#725565]">
                        Punya ide kreatif atau ingin bekerja sama?
                        Ceritakan kebutuhanmu kepada Pinkora Creative.
                    </p>
                </section>

                <section className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#422536]">Kirim Pesan</h2>

                        <form className="mt-6 space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block font-medium text-[#422536]">Nama Lengkap
                                </label>

                                <input
                                   id="name" 
                                   name="name"
                                   type="text"
                                   placeholder="Masukan nama kamu"
                                   required className="w-full rounded-xl border border-[#F8C8DC] px-4 py-3 outline-none focus:border-[#b85c82] focus:ring-2 focus:ring-[#F8C8DC]"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block font-medium text-[#422536]"> Email
                                </label>

                                <input 
                                   id="email" 
                                   name="email"
                                   type="email"
                                   placeholder="nama@email.com"
                                   required className="w-full rounded-xl border border-[#F8C8DC] px-4 py-3 outline-none focus:border-[#b85c82] focus:ring-2 focus:ring-[#F8C8DC]"/>            
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block font-medium text-[#422536]"> Pesan
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tuliskan pesan kamu..."
                                    required className="w-full rounded-xl border border-[#F8C8DC] px-4 py-3 outline-none focus:border-[#b85c82] focus:ring-2 focus:ring-[#F8C8DC]"/> 
                            </div>

                            <button type="submit" className="w-full rounded-xl bg-[#B85C82] px-6 py-3 font-semibold text-white transition hover:bg-[#422536]"> Kirim Pesan
                            </button>
                        </form>
                    </div>

                    <div className="rounded-3xl bg-[#F8C8DC] p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-[#422536]">Informasi Kontak</h2>

                        <p className="mt-4 leading-7 text-[#725565]">
                            Kami terbuka untuk diskusi proyek, kolaborasi,
                            dan berbagai ide kreatif.
                        </p>

                        <div>
                            <h3 className="font-bold text-[#422536]">Email</h3>
                            <p className="mt-1 text-[#725565]">pinkoracreative@gmail.com</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#422536]">WhatsApp</h3>
                            <p className="mt-1 text-[#725565]">+62 812-3456-7890</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#422536]">Instagram</h3>
                            <p className="mt-1 text-[#725565]">@pinkora.studio</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#422536]">Tiktok</h3>
                            <p className="mt-1 text-[#725565]">@heypinkora</p>
                        </div> 
                    </div>
                </section>
            </div>
        </main>  
        </>
    )
}

export default Contact