import { FiMail, FiPhone } from "react-icons/fi"
export default function Contato() {
    return (
        <section
            id="contato"
            className="scroll-mt-20 bg-[#f6f0ff] py-24 px-6"
        >

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-sm text-[#9b7bd3] mb-4">
                        Contato
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light text-[#3b2a52]">
                        Informações de atendimento
                    </h2>

                </div>

             
                <div className="grid md:grid-cols-2 gap-12 text-[#5c4b73] leading-8">

                 
                    <div>

                        <h3 className="text-2xl font-medium text-[#3b2a52] mb-6">
                            Atendimento Presencial
                        </h3>

                        <p className="mb-6">
                            <strong>1.</strong> Rua Domingos de Morais, 2781 – Vila Mariana
                            <br />
                            (Próximo ao metrô Santa Cruz)
                        </p>

                        <p className="mb-10">
                            <strong>2.</strong> Avenida Antártica, 675 – Perdizes
                        </p>

                        <h3 className="text-2xl font-medium text-[#3b2a52] mb-6">
                            Atendimento Domiciliar
                        </h3>

                        <p>
                            Saúde, Moema, Vila Mariana, Perdizes,
                            Barra Funda e Água Branca.
                        </p>

                    </div>

                
                    <div>

                        <h3 className="text-2xl font-medium text-[#3b2a52] mb-6">
                            Contato
                        </h3>

                        <div className="space-y-5 mb-8">

                            <div className="flex items-center gap-3">
                                <FiMail className="text-[#9b7bd3] text-xl" />

                                <p className="break-all">psicologalouisenks@outlook.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FiPhone className="text-[#9b7bd3] text-xl" />

                                <p>(11) 93927-3250</p>
                            </div>

                        </div>

                        
                        <div className="rounded-3xl overflow-hidden shadow-lg">

                            <iframe
                                src="https://www.google.com/maps?q=Rua+Domingos+de+Morais+2781+Vila+Mariana+SP&output=embed"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa"
                            ></iframe>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}