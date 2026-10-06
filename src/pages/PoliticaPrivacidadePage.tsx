import { LegalContact, LegalDocument, LegalEntity, type LegalSection } from "../components/shared/LegalDocument"
import { LEGAL_ROUTES } from "../constants/paths"
import { LEGAL_SEO } from "../constants/seo"
import { ADDRESS_LINE, CONTACT_EMAIL, SITE_ORIGIN } from "../constants/site"
import { usePageMeta } from "../hooks/usePageMeta"

const UPDATED_AT = "6 de outubro de 2026"
const SITE_HOST = new URL(SITE_ORIGIN).host

const SECTIONS: LegalSection[] = [
  {
    id: "controlador",
    title: "Quem é o controlador dos dados",
    content: (
      <>
        <p>
          O controlador dos dados pessoais tratados neste site é a <LegalEntity />, centro
          auditivo localizado na {ADDRESS_LINE}.
        </p>
        <p>
          Para qualquer assunto relacionado a dados pessoais, inclusive para falar com o
          encarregado pelo tratamento de dados, escreva para{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "Quais dados coletamos",
    content: (
      <>
        <p>
          <strong>Dados que você nos fornece</strong>
        </p>
        <ul>
          <li>
            Ao falar com a nossa equipe pelo WhatsApp, telefone, e-mail ou redes sociais: nome,
            número de telefone e o conteúdo das mensagens, incluindo as informações que você
            decidir compartilhar sobre a sua audição ou a de um familiar.
          </li>
          <li>
            Ao preencher um formulário de contato, quando disponível: nome, telefone e a sua
            autorização para contato.
          </li>
          <li>
            No atendimento presencial: os dados de cadastro e as informações de saúde necessárias
            para a avaliação auditiva, os exames e a adaptação de aparelhos, registrados em
            prontuário.
          </li>
        </ul>
        <p>
          <strong>Dados coletados automaticamente durante a navegação</strong>
        </p>
        <ul>
          <li>
            Endereço IP, tipo de dispositivo e de navegador, sistema operacional, idioma, data e
            hora de acesso.
          </li>
          <li>
            Páginas visitadas, cliques (inclusive nos botões de WhatsApp), rolagem, tempo de
            permanência e a página de origem.
          </li>
          <li>
            Parâmetros de campanha presentes no endereço da página, como <em>utm_source</em>,{" "}
            <em>utm_campaign</em>, <em>gclid</em> e <em>fbclid</em>, que indicam por qual
            anúncio ou canal você chegou ao site.
          </li>
          <li>
            Ao clicar em um botão de WhatsApp, um número de protocolo é incluído na mensagem
            inicial e registrado com os dados da visita, para sabermos qual página e qual
            campanha originaram o contato.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "dados-de-saude",
    title: "Dados de saúde",
    content: (
      <>
        <p>
          Informações sobre a sua saúde auditiva são dados pessoais sensíveis pela LGPD. Elas
          são tratadas apenas pelas fonoaudiólogas e pela equipe autorizada, para a tutela da
          saúde — avaliação, exames, indicação e adaptação de aparelhos auditivos e
          acompanhamento — e para o cumprimento das obrigações legais e regulatórias da
          atividade, como a guarda do prontuário.
        </p>
        <p>
          O site não pede informações de saúde. Se você optar por enviá-las pelo WhatsApp antes
          do atendimento, elas serão usadas somente para orientar o seu atendimento. Não usamos
          dados de saúde para publicidade e não os compartilhamos com plataformas de anúncios.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Para que usamos os dados e com qual base legal",
    content: (
      <ul>
        <li>
          <strong>Responder ao seu contato</strong>, agendar avaliações e informar sobre
          produtos, preços e condições — procedimentos preliminares a um contrato, a seu pedido
          (art. 7º, V, da LGPD).
        </li>
        <li>
          <strong>Prestar os serviços</strong> de avaliação auditiva, adaptação, manutenção e
          assistência técnica — execução de contrato e, quanto aos dados de saúde, tutela da
          saúde (art. 7º, V, e art. 11, II, “f”).
        </li>
        <li>
          <strong>Cumprir obrigações legais</strong>, fiscais e regulatórias, como a emissão de
          notas fiscais e a guarda de prontuários (art. 7º, II, e art. 11, II, “a”).
        </li>
        <li>
          <strong>Medir a audiência do site</strong>, entender como ele é usado e corrigir
          problemas — legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Medir o resultado das nossas campanhas</strong> e exibir anúncios mais
          relevantes — legítimo interesse (art. 7º, IX), com a possibilidade de você se opor ou
          bloquear os cookies, como explicado na seção “Cookies e tecnologias de rastreamento”.
        </li>
        <li>
          <strong>Enviar lembretes e novidades</strong> sobre revisões, manutenção e produtos,
          quando você tiver autorizado — consentimento, que pode ser revogado a qualquer momento
          (art. 7º, I).
        </li>
        <li>
          <strong>Defender direitos</strong> em processos judiciais, administrativos ou
          arbitrais — exercício regular de direitos (art. 7º, VI).
        </li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "Cookies e tecnologias de rastreamento",
    content: (
      <>
        <p>
          Cookies são pequenos arquivos gravados no seu navegador. Usamos cookies e tecnologias
          semelhantes, como o armazenamento local do navegador, para três finalidades:
        </p>
        <ul>
          <li>
            <strong>Necessários:</strong> guardar a sua escolha no aviso de cookies e manter o
            site funcionando com segurança.
          </li>
          <li>
            <strong>Análise:</strong> entender quantas pessoas visitam o site, de onde vêm e como
            navegam, com o Google Analytics e o Microsoft Clarity. O Clarity registra cliques,
            movimentos e rolagem para gerar mapas de calor e reproduções de sessões, sem
            identificar você pelo nome.
          </li>
          <li>
            <strong>Publicidade:</strong> saber quais anúncios geraram contatos, em plataformas
            como o Google Ads.
          </li>
        </ul>
        <p>
          Essas ferramentas são carregadas pelo Google Tag Manager. O site também usa o Google
          Maps para mostrar a nossa localização e o Google Fonts para as fontes do texto; ao
          carregar esses serviços, o seu navegador se comunica com os servidores do Google.
        </p>
        <p>
          <strong>Como controlar:</strong> você pode bloquear ou apagar cookies nas
          configurações do navegador, usar a navegação anônima ou instalar o{" "}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=pt-BR" target="_blank" rel="noreferrer">
            complemento de desativação do Google Analytics
          </a>
          . Bloquear cookies não impede o uso do site, mas pode afetar algumas funções, como o
          mapa.
        </p>
        <p>
          Saiba mais nas políticas do{" "}
          <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noreferrer">
            Google
          </a>
          , da{" "}
          <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noreferrer">
            Microsoft
          </a>{" "}
          e do{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Com quem compartilhamos os dados",
    content: (
      <>
        <p>
          Não vendemos nem alugamos dados pessoais. Compartilhamos dados apenas quando
          necessário, com:
        </p>
        <ul>
          <li>
            Fornecedores que operam serviços para nós: hospedagem do site (Cloudflare),
            ferramentas de análise e publicidade (Google e Microsoft), sistema de atendimento e
            gestão de contatos, e o WhatsApp (Meta), usado nas conversas.
          </li>
          <li>
            Fabricantes e laboratórios de aparelhos auditivos, quando necessário para fornecer,
            ajustar, reparar ou acionar a garantia do seu aparelho.
          </li>
          <li>Instituições financeiras e meios de pagamento, para processar pagamentos e parcelamentos.</li>
          <li>Autoridades públicas, quando houver obrigação legal, regulatória ou ordem judicial.</li>
        </ul>
        <p>
          Esses parceiros só podem usar os dados para as finalidades contratadas e devem
          protegê-los.
        </p>
      </>
    ),
  },
  {
    id: "transferencia-internacional",
    title: "Transferência internacional de dados",
    content: (
      <p>
        Alguns fornecedores, como Google, Microsoft, Meta e Cloudflare, podem armazenar ou
        processar dados em servidores fora do Brasil. Nesses casos, a transferência segue as
        hipóteses do art. 33 da LGPD, com fornecedores que adotam padrões de proteção
        compatíveis com a lei brasileira.
      </p>
    ),
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos os dados",
    content: (
      <>
        <ul>
          <li>
            <strong>Contatos que não se tornaram atendimento:</strong> pelo tempo necessário para
            responder e acompanhar o seu pedido.
          </li>
          <li>
            <strong>Prontuário e dados de pacientes:</strong> pelo prazo exigido pela legislação
            e pelas normas do conselho profissional.
          </li>
          <li>
            <strong>Documentos fiscais:</strong> pelo prazo da legislação tributária.
          </li>
          <li>
            <strong>Dados de navegação:</strong> pelos prazos de retenção configurados nas
            ferramentas de análise e publicidade.
          </li>
        </ul>
        <p>
          Depois desses prazos, os dados são eliminados ou anonimizados, salvo quando a lei
          permitir mantê-los (art. 16 da LGPD).
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    content: (
      <>
        <p>Pela LGPD (art. 18), você pode, a qualquer momento:</p>
        <ul>
          <li>confirmar se tratamos os seus dados e acessá-los;</li>
          <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>
            pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos
            ou tratados em desconformidade com a lei;
          </li>
          <li>pedir a portabilidade dos dados a outro fornecedor;</li>
          <li>
            pedir a eliminação dos dados tratados com base no seu consentimento, ressalvados os
            casos de guarda obrigatória;
          </li>
          <li>saber com quais entidades públicas e privadas compartilhamos os seus dados;</li>
          <li>
            ser informado sobre a possibilidade de não dar consentimento e sobre as consequências
            da negativa;
          </li>
          <li>revogar o consentimento;</li>
          <li>opor-se a um tratamento que descumpra a lei.</li>
        </ul>
        <p>
          Para exercer esses direitos, escreva para{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Podemos pedir informações
          para confirmar a sua identidade antes de atender ao pedido. Você também pode
          apresentar reclamação à{" "}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noreferrer">
            Autoridade Nacional de Proteção de Dados (ANPD)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança",
    content: (
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não
        autorizados, perda, alteração ou divulgação indevida, como conexão criptografada
        (HTTPS), acesso restrito à equipe que precisa dos dados e fornecedores com padrões
        reconhecidos de segurança. Nenhum sistema é totalmente imune a incidentes; se ocorrer um
        incidente que possa trazer risco ou dano relevante, comunicaremos você e a ANPD,
        conforme a lei.
      </p>
    ),
  },
  {
    id: "criancas-e-adolescentes",
    title: "Crianças e adolescentes",
    content: (
      <p>
        O site é voltado ao público adulto. Quando o atendimento é de uma criança ou de um
        adolescente, os dados são tratados no seu melhor interesse e, no caso de crianças, com
        o consentimento de pelo menos um dos pais ou do responsável legal (art. 14 da LGPD).
      </p>
    ),
  },
  {
    id: "links-externos",
    title: "Links para outros sites",
    content: (
      <p>
        O site tem links para serviços de terceiros, como WhatsApp, Instagram, Facebook e Google
        Maps. Ao acessá-los, valem as políticas de privacidade desses serviços, sobre as quais a
        Vita Audio não tem controle.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações desta política",
    content: (
      <p>
        Podemos atualizar esta Política para refletir mudanças no site, nos serviços ou na
        legislação. A data da versão vigente fica no topo da página.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    content: (
      <>
        <p>Dúvidas, pedidos ou reclamações sobre privacidade e dados pessoais:</p>
        <LegalContact />
      </>
    ),
  },
]

export function PoliticaPrivacidadePage() {
  usePageMeta(LEGAL_SEO.privacidade)

  return (
    <LegalDocument
      title="Política de Privacidade"
      updatedAt={UPDATED_AT}
      intro={
        <p>
          A Vita Audio respeita a sua privacidade. Esta Política explica quais dados pessoais
          coletamos quando você visita o site {SITE_HOST} ou fala com a nossa equipe pelos
          canais divulgados nele, para que usamos esses dados e quais são os seus direitos, nos
          termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
        </p>
      }
      sections={SECTIONS}
      related={{ label: "Termos de Uso", href: LEGAL_ROUTES.termos }}
    />
  )
}
