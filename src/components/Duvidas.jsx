import { useState } from "react";

export default function Duvidas() {
    const [aberta, setAberta] = useState(null);

    const perguntas = [
        {
            pergunta: "Como funciona a Reabilitação Neuropsicológica?",
            resposta:
                "Primeiro realizo uma avaliação psicológica completa e, se necessário, encaminho para realização de uma avaliação neuropsicológica externa. Com os resultados da avaliação, elaboro um plano de reabilitação individualizado e inicio intervenções e estímulos baseados em evidências científicas. Ao final, realizo devolutivas técnicas e orientações à família para continuidade do processo no domicílio."
        },
        {
            pergunta: "Qual público é atendido?",
            resposta: "Adultos e idosos."
        },
        {
            pergunta: "Qual a forma de pagamento?",
            resposta: "Pix, cartão de débito ou crédito (via link PagSeguro)."
        },
        {
            pergunta: "Qual o valor da sessão?",
            resposta: "O valor é informado durante o primeiro contato."
        }
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-xl md:text-4xl font-light text-[#3b2a52] text-center mb-12">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-4">
                    {perguntas.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#e5d8ff] rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setAberta(aberta === index ? null : index)
                                }
                                className="w-full flex justify-between items-center p-5 text-left bg-[#f9f5ff] hover:bg-[#f3ebff] transition"
                            >
                                <span className="font-medium text-[#3b2a52]">
                                    {item.pergunta}
                                </span>

                                <span className="text-2xl text-[#9b7bd3]">
                                    {aberta === index ? "−" : "+"}
                                </span>
                            </button>

                            {aberta === index && (
                                <div className="p-5 text-[#5c4b73] leading-8 bg-white">
                                    {item.resposta}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}