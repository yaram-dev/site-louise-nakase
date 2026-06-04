export default function Servicos() {
    return (
        <section
            id="servicos"
            className="mt-8 scroll-mt-20 bg-[#efe4ff] py-24 px-6"
        >

            <div className="max-w-6xl mx-auto">


                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-sm text-[#8a7662] mb-4">
                        Serviços
                    </p>

                    <h2 className="text-4xl font-light text-[#3b2a52]">
                        Endereço de atendimento
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-14">

                    <div className="h-[260px] rounded-[32px] overflow-hidden shadow-lg">
                        <img
                            src="/imagem4.jpeg"
                            alt="Consultório"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="h-[260px] rounded-[32px] overflow-hidden shadow-lg">
                        <img
                            src="/imagem3.jpeg"
                            alt="Consultório"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                </div>


                <div className="grid md:grid-cols-2 gap-8">


                    <div className="bg-white/80 border border-[#d8c4ff] backdrop-blur-md p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition duration-300">

                        <h3 className="text-2xl text-[#3b2a52] mb-4">
                            Psicoterapia Individual
                        </h3>

                        <p className="text-[#5c4b73] leading-8">
                            Atendimento psicológico voltado ao acolhimento emocional,
                            ansiedade, autoestima, relacionamentos e desenvolvimento pessoal.
                        </p>

                    </div>

                    <div className="bg-white/80 border border-[#d8c4ff] backdrop-blur-md p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition duration-300">

                        <h3 className="text-2xl text-[#3b2a52] mb-4">
                            Reabilitação Neuropsicológica
                        </h3>

                        <p className="text-[#5c4b73] leading-8">
                            Estratégias terapêuticas para reabilitar funções cognitivas,
                            desenvolver autonomia e fortalecer a participação social.
                        </p>

                    </div>


                    <div className="bg-white/80 border border-[#d8c4ff] backdrop-blur-md p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition duration-300">

                        <h3 className="text-2xl text-[#3b2a52] mb-4">
                            Atendimento Online
                        </h3>

                        <p className="text-[#5c4b73] leading-8">
                            Sessões realizadas de forma online com conforto,
                            privacidade e acolhimento profissional.
                        </p>

                    </div>


                    <div className="bg-white/80 border border-[#d8c4ff] backdrop-blur-md p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition duration-300">

                        <h3 className="text-2xl text-[#3b2a52] mb-4">
                            Atendimento Presencial
                        </h3>

                        <p className="text-[#5c4b73] leading-8">
                            Espaço seguro e acolhedor para acompanhamento psicológico
                            presencial.
                        </p>


                    </div>

                    <div className="md:col-span-2 flex justify-center">

                        <div className="bg-white/80 border border-[#d8c4ff] backdrop-blur-md p-6 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition duration-300 max-w-[550px]">

                            <h3 className="text-2xl text-[#3b2a52] mb-4">
                                Atendimento Domiciliar
                            </h3>

                            <p className="text-[#5c4b73] leading-8">
                                Atendimento realizado no domicílio para adultos e idosos que necessitam
                                de acompanhamento psicológico em seu ambiente familiar, promovendo
                                acolhimento, conforto e maior acessibilidade ao cuidado emocional.
                            </p>

                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-6 text-center">
                <a
                    href="https://api.whatsapp.com/send?phone=5511939273250&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.%20Poderia%20me%20passar%20mais%20informações?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#b388ff] hover:bg-[#9b6dff] transition text-white px-8 py-4 rounded-full"
                >
                    Agendar Consulta
                </a>
            </div>
        </section>
    )
}