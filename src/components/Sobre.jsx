import { motion } from "framer-motion"

export default function Sobre() {
    return (
        <section
            id="sobre"
            className="scroll-mt-20 bg-[#f6f0ff] py-24 px-6"
        >

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGEM */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                >

                    <div className="w-full max-w-[320px] h-[420px] rounded-[40px] overflow-hidden shadow-lg">

                        <img
                            src="/imagem2.jpeg"
                            alt="Foto pessoal"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </motion.div>

                <div>

                    <p className="uppercase tracking-[4px] text-sm text-[#9b7bd3] mb-4">
                        Sobre
                    </p>

                    <h2 className="text-4xl md:text-5xl text-[#3b2a52] mb-6 font-light leading-tight">
                        Atendimento acolhedor e humanizado
                    </h2>

                    <p className="text-base sm:text-lg leading-8 text-[#5c4b73] mb-6">
                        A reabilitação neuropsicológica auxilia pacientes
                        na retomada da funcionalidade, autonomia e qualidade
                        de vida após alterações cognitivas e neurológicas.
                    </p>

                    <p className="text-base sm:text-lg leading-8 text-[#5c4b73]">
                        O acompanhamento é realizado com acolhimento,
                        escuta empática e intervenções personalizadas,
                        respeitando a individualidade de cada paciente.
                    </p>

                </div>

            </div>

            <div className="max-w-5xl mx-auto mt-24">

                <div className="grid md:grid-cols-2 gap-16">

                    <div>

                        <h3 className="text-2xl text-[#3b2a52] mb-6">
                            Nos meus atendimentos
                        </h3>

                        <ul className="space-y-5 text-[#5c4b73] leading-8">

                            <li>
                                • Auxilio pacientes a enxergarem novas perspectivas
                                após a instalação de uma deficiência e da perda
                                de funcionalidade.
                            </li>

                            <li>
                                • Realizo intervenções com o objetivo de reabilitar
                                áreas do cérebro prejudicadas e desenvolver novas
                                habilidades cognitivas.
                            </li>

                            <li>
                                • Atendo pacientes com prejuízos relacionados à
                                atenção, percepção, memória, linguagem e planejamento.
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-2xl text-[#3b2a52] mb-6">
                            Condições atendidas
                        </h3>

                        <ul className="space-y-3 text-[#5c4b73] leading-8">

                            <li>• Lesão encefálica</li>
                            <li>• Lesão medular</li>
                            <li>• Alzheimer</li>
                            <li>• Parkinson</li>
                            <li>• Câncer</li>
                            <li>• Outras doenças crônicas</li>

                        </ul>

                    </div>

                </div>

                <div className="mt-20 bg-[#efe4ff] rounded-[40px] p-10">

                    <h3 className="text-3xl font-light text-[#3b2a52] mb-6">
                        Psicoterapia
                    </h3>

                    <p className="text-[#5c4b73] leading-8 mb-6">
                        Também ofereço atendimentos com foco em suporte emocional
                        diante do adoecimento psíquico e dificuldades no
                        enfrentamento de situações traumáticas.
                    </p>

                    <p className="text-[#5c4b73] leading-8 mb-6">
                        Com acolhimento, compromisso e ética, ofereço um espaço
                        de afeto e transformação.
                    </p>

                    <p className="text-[#5c4b73] leading-8">
                        Se você apresenta sintomas de depressão, ansiedade
                        ou burnout, posso te ajudar nessa caminhada.
                    </p>

                </div>

            </div>
            <div className="mt-12 text-center">
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