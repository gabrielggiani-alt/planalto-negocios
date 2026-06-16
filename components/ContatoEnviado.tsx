type Props = {
  titulo: string;
  descricao: string;
};

/** Card de confirmação exibido após o envio de um formulário de contato. */
export default function ContatoEnviado({ titulo, descricao }: Props) {
  return (
    <div
      role="status"
      className="border border-gold/50 bg-surface-elevated/90 px-8 py-12 text-center"
    >
      <div className="mx-auto w-10 h-10 border border-gold rotate-45 mb-6" aria-hidden="true">
        <span className="block w-full h-full bg-gold/20" />
      </div>
      <p className="text-text text-xl mb-3" style={{ fontFamily: "var(--font-serif)" }}>
        {titulo}
      </p>
      <p className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto">
        {descricao}
      </p>
    </div>
  );
}
