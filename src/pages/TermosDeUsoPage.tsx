import { LegalContact, LegalDocument, LegalEntity, type LegalSection } from "../components/shared/LegalDocument"
import { LEGAL_ROUTES } from "../constants/paths"
import { LEGAL_SEO } from "../constants/seo"
import { SITE_ORIGIN } from "../constants/site"
import { usePageMeta } from "../hooks/usePageMeta"

const UPDATED_AT = "6 de outubro de 2026"
const SITE_HOST = new URL(SITE_ORIGIN).host

const SECTIONS: LegalSection[] = [
  {
    id: "sobre-o-site",
    title: "Sobre o site",
    content: (
      <p>
        O site apresenta os serviços da <LegalEntity /> — avaliação auditiva, audiometria,
        adaptação, manutenção e assistência técnica de aparelhos auditivos — e facilita o
        contato com a nossa equipe em Indaiatuba/SP. O uso do site é gratuito e não exige
        cadastro.
      </p>
    ),
  },
  {
    id: "conteudo-informativo",
    title: "Conteúdo informativo",
    content: (
      <>
        <p>
          As informações sobre audição, perda auditiva, zumbido, exames e aparelhos auditivos
          têm caráter educativo. Elas não substituem a avaliação individual por fonoaudiólogo ou
          médico otorrinolaringologista e não constituem diagnóstico, indicação ou prescrição de
          tratamento. A indicação de qualquer aparelho depende de avaliação auditiva.
        </p>
        <p>
          Em caso de perda súbita de audição, dor, secreção, sangramento ou tontura intensa,
          procure atendimento médico imediatamente.
        </p>
      </>
    ),
  },
  {
    id: "precos-e-ofertas",
    title: "Preços, condições e ofertas",
    content: (
      <>
        <p>
          Valores, formas de pagamento, parcelamentos, descontos e demais condições divulgados
          no site são referências e podem mudar sem aviso prévio. Eles dependem do modelo, do
          nível de tecnologia, da disponibilidade, da forma de pagamento e das regras da
          instituição financeira ou do meio de pagamento.
        </p>
        <p>
          Ofertas e promoções têm validade e regras próprias, informadas no atendimento. A
          possibilidade de testar o aparelho antes da compra depende da disponibilidade do
          modelo e das condições informadas pela nossa equipe. As condições válidas para a sua
          compra são as que constam da proposta ou do orçamento entregue a você.
        </p>
        <p>
          Se houver erro evidente de digitação ou de sistema na informação de um preço,
          informaremos o valor correto antes de qualquer contratação.
        </p>
      </>
    ),
  },
  {
    id: "atendimento",
    title: "Agendamento e atendimento pelo WhatsApp",
    content: (
      <p>
        Os botões do site abrem uma conversa com a nossa equipe no WhatsApp, serviço da Meta
        sujeito a termos e política de privacidade próprios. Um agendamento só está confirmado
        depois que a nossa equipe confirma data e horário. Mensagens enviadas fora do horário
        de funcionamento, informado no rodapé, são respondidas no próximo período de
        atendimento.
      </p>
    ),
  },
  {
    id: "marcas",
    title: "Marcas de terceiros",
    content: (
      <p>
        Starkey, Argosy, Rexton, Beltone, Coselgi, Interton e as demais marcas citadas pertencem
        aos seus respectivos titulares. Elas aparecem no site para identificar os produtos com
        que trabalhamos, o que não significa que esses fabricantes patrocinem o site ou
        respondam pelo seu conteúdo. Especificações e recursos de cada modelo são definidos
        pelos fabricantes e podem mudar.
      </p>
    ),
  },
  {
    id: "depoimentos",
    title: "Depoimentos e avaliações",
    content: (
      <p>
        Os depoimentos e as avaliações exibidos no site refletem a experiência individual de
        cada paciente. A adaptação ao aparelho auditivo e os resultados variam de pessoa para
        pessoa, conforme o tipo e o grau da perda auditiva, o tempo de uso e o acompanhamento.
      </p>
    ),
  },
  {
    id: "propriedade-intelectual",
    title: "Propriedade intelectual",
    content: (
      <p>
        Textos, imagens, fotografias, logotipos, layout e demais conteúdos do site pertencem à
        Vita Audio ou são usados com autorização, e são protegidos pelas leis de direitos
        autorais e de propriedade industrial (Leis nº 9.610/1998 e nº 9.279/1996). É proibido
        copiar, reproduzir, distribuir ou modificar esses conteúdos sem autorização prévia e por
        escrito, exceto para uso pessoal e não comercial.
      </p>
    ),
  },
  {
    id: "uso-adequado",
    title: "Uso adequado do site",
    content: (
      <>
        <p>Ao usar o site, você se compromete a não:</p>
        <ul>
          <li>usá-lo para fins ilegais ou que violem direitos de terceiros;</li>
          <li>
            tentar acessar áreas, sistemas ou dados sem autorização, ou interferir no seu
            funcionamento;
          </li>
          <li>usar robôs ou outros meios automatizados para extrair conteúdo em massa;</li>
          <li>enviar informações falsas ou dados de terceiros sem autorização.</li>
        </ul>
      </>
    ),
  },
  {
    id: "links-externos",
    title: "Links para sites de terceiros",
    content: (
      <p>
        O site contém links para serviços de terceiros, como WhatsApp, Instagram, Facebook e
        Google Maps. A Vita Audio não controla esses serviços e não responde pelo seu conteúdo,
        disponibilidade ou práticas de privacidade.
      </p>
    ),
  },
  {
    id: "responsabilidade",
    title: "Disponibilidade e responsabilidade",
    content: (
      <>
        <p>
          Trabalhamos para manter o site disponível e as informações corretas e atualizadas, mas
          ele pode passar por interrupções, manutenções ou falhas técnicas, e algumas
          informações podem ficar desatualizadas.
        </p>
        <p>
          A Vita Audio não responde por decisões tomadas com base no conteúdo do site sem a
          devida avaliação profissional, nem por indisponibilidades causadas por terceiros ou
          por motivos alheios ao seu controle. Nada nestes Termos limita os direitos garantidos
          ao consumidor pelo Código de Defesa do Consumidor.
        </p>
      </>
    ),
  },
  {
    id: "privacidade",
    title: "Privacidade",
    content: (
      <p>
        O tratamento de dados pessoais feito por meio do site está descrito na nossa{" "}
        <a href={LEGAL_ROUTES.privacidade}>Política de Privacidade</a>, que faz parte destes
        Termos.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações destes termos",
    content: (
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente é a publicada
        nesta página, com a data da última atualização no topo. Ao continuar usando o site
        depois de uma alteração, você concorda com a nova versão.
      </p>
    ),
  },
  {
    id: "foro",
    title: "Lei aplicável e foro",
    content: (
      <p>
        Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de
        Indaiatuba/SP para resolver eventuais controvérsias, sem prejuízo do direito do
        consumidor de propor ação no foro do seu domicílio.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    content: (
      <>
        <p>Dúvidas sobre estes Termos:</p>
        <LegalContact />
      </>
    ),
  },
]

export function TermosDeUsoPage() {
  usePageMeta(LEGAL_SEO.termos)

  return (
    <LegalDocument
      title="Termos de Uso"
      updatedAt={UPDATED_AT}
      intro={
        <p>
          Estes Termos de Uso regem o acesso e o uso do site {SITE_HOST}, mantido pela Vita
          Audio. Ao navegar no site, você declara que leu e concorda com estes Termos e com a
          nossa <a href={LEGAL_ROUTES.privacidade}>Política de Privacidade</a>. Se não
          concordar, não utilize o site.
        </p>
      }
      sections={SECTIONS}
      related={{ label: "Política de Privacidade", href: LEGAL_ROUTES.privacidade }}
    />
  )
}
