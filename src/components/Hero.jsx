import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#f6f0ff] flex items-center justify-center px-6 py-16 pt-32">

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-light mb-6 text-[#3b2a52]">
                        Cuidado emocional com acolhimento e leveza
                    </h1>

                    <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#5c4b73] mb-8">
                        Psicóloga com ampla experiência em psicologia clínica e reabilitação neuropsicológica. Graduada em psicologia e pós graduada em psicologia hospitalar, psico oncologia e neuropsicologia aplicada à saúde.
                    </p>

                    <a
                        href="https://api.whatsapp.com/send?phone=5511939273250&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.%20Poderia%20me%20passar%20mais%20informações?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#b388ff] hover:bg-[#9b6dff] transition text-white px-8 py-4 rounded-full"
                    >
                        Agendar Consulta
                    </a>


                </div>


                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >

                    <div className="w-full max-w-[320px] h-[420px] rounded-[40px] overflow-hidden shadow-lg">
                        <img
                            src="/imagem1.jpeg"
                            alt="Foto pessoal"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </motion.div>
            </div>

        </section>
    )
}