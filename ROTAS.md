 # Rotas — Vita Audio

Site: `https://audicao.vitaaudio.com.br`

Roteamento: SPA client-side via switch-case em `src/App.tsx`.  
Definições em `src/constants/paths.ts` (`ROUTES`, `WHATSAPP_ROUTES`).

---

## Rotas principais

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/aparelho-auditivo` | `AparelhoAuditivoPage` | Página principal — aparelho auditivo |
| `/audiometria` | `AudiometriaPage` | Exames de audiometria |
| `/zumbido-no-ouvido` | `ZumbidoPage` | Tratamento de zumbido |
| `/perda-auditiva` | `PerdaAuditivaPage` | Perda auditiva — diagnóstico e tratamento |
| `/manutencao-de-aparelho-auditivo` | `ManutencaoPage` | Manutenção de aparelho auditivo — limpeza, troca de peças e reajuste |
| `/assistencia-tecnica-aparelho-auditivo` | `AssistenciaTecnicaPage` | Assistência técnica — diagnóstico e reparo |

### Cluster comercial de aparelhos auditivos

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/aparelho-auditivo-preco` | `PrecoPage` | Preço e valores — por que o preço varia, tipos e faixas de tecnologia |
| `/aparelho-auditivo-discreto` | `DiscretoPage` | Modelos discretos, intracanais e retroauriculares compactos |
| `/aparelho-auditivo-recarregavel` | `RecarregavelPage` | Recarregáveis e Bluetooth — concentra também a intenção de conectividade |
| `/melhor-aparelho-auditivo` | `MelhorAparelhoPage` | Como escolher — página central de comparação do cluster |
| `/aparelho-auditivo-para-idosos` | `IdososPage` | Aparelho para idosos — também voltada a filhos e familiares |
| `/aparelho-auditivo-starkey` | `StarkeyPage` | Marca Starkey — linhas Genesis AI e Evolv AI |
| `/aparelho-auditivo-argosy` | `ArgosyPage` | Marca Argosy — linhas Vista V e Vista B |
| `/aparelho-auditivo-rexton` | `RextonPage` | Marca Rexton — linhas BiCore, MotionCore e Reach |
| `/aparelho-auditivo-beltone` | `BeltonePage` | Marca Beltone — linhas Serene, Boost Ultra e Achieve |
| `/aparelho-auditivo-coselgi` | `CoselgiPage` | Marca Coselgi — linha Mojo |
| `/aparelho-auditivo-interton` | `IntertonPage` | Marca Interton — linhas Move e Presto |

### Subrotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/{rota}/obrigado` | `ObrigadoPage` | Confirmação após envio de formulário — na prática só `/aparelho-auditivo/obrigado`, a única rota que ainda tem formulário |

> Qualquer caminho não reconhecido redireciona para `/aparelho-auditivo`.

---

## CTA das páginas: WhatsApp direto

Salvo `/aparelho-auditivo`, todas as rotas base renderizam a variante `…PageWA`:
CTAs são links diretos para `https://wa.me/5519991460270`, sem popup de formulário
e sem o fluxo `/obrigado`.

| Rota base | Componente renderizado | CTA |
|-----------|------------------------|-----|
| `/aparelho-auditivo` | `AparelhoAuditivoPage` | **Formulário** (popup → `/obrigado`) |
| `/audiometria` | `AudiometriaPageWA` | WhatsApp direto |
| `/zumbido-no-ouvido` | `ZumbidoPageWA` | WhatsApp direto |
| `/perda-auditiva` | `PerdaAuditivaPageWA` | WhatsApp direto |
| `/manutencao-de-aparelho-auditivo` | `ManutencaoPageWA` | WhatsApp direto |
| `/assistencia-tecnica-aparelho-auditivo` | `AssistenciaTecnicaPageWA` | WhatsApp direto |
| `/aparelho-auditivo-preco` | `PrecoPageWA` | WhatsApp direto |
| `/aparelho-auditivo-discreto` | `DiscretoPageWA` | WhatsApp direto |
| `/aparelho-auditivo-recarregavel` | `RecarregavelPageWA` | WhatsApp direto |
| `/melhor-aparelho-auditivo` | `MelhorAparelhoPageWA` | WhatsApp direto |
| `/aparelho-auditivo-para-idosos` | `IdososPageWA` | WhatsApp direto |
| `/aparelho-auditivo-starkey` | `StarkeyPageWA` | WhatsApp direto |
| `/aparelho-auditivo-argosy` | `ArgosyPageWA` | WhatsApp direto |
| `/aparelho-auditivo-rexton` | `RextonPageWA` | WhatsApp direto |
| `/aparelho-auditivo-beltone` | `BeltonePageWA` | WhatsApp direto |
| `/aparelho-auditivo-coselgi` | `CoselgiPageWA` | WhatsApp direto |
| `/aparelho-auditivo-interton` | `IntertonPageWA` | WhatsApp direto |

As exportações com formulário (`PrecoPage`, `AudiometriaPage`, …) continuam nos
arquivos, sem uso no roteamento — é o que permite reverter trocando uma linha
por rota no `App.tsx`.

---

## Rotas `/whatsapp` aposentadas

O comportamento delas passou para a rota base, então **redirecionam** (via
`retiredWhatsappTarget` em `paths.ts` + `window.location.replace`). Ficam de pé só
para não quebrar anúncio, link ou QR que ainda aponte para lá.

| Rota | Redireciona para |
|------|------------------|
| `/audiometria/whatsapp` | `/audiometria` |
| `/zumbido-no-ouvido/whatsapp` | `/zumbido-no-ouvido` |
| `/perda-auditiva/whatsapp` | `/perda-auditiva` |
| `/manutencao-de-aparelho-auditivo/whatsapp` | `/manutencao-de-aparelho-auditivo` |
| `/assistencia-tecnica-aparelho-auditivo/whatsapp` | `/assistencia-tecnica-aparelho-auditivo` |
| `/aparelho-auditivo-preco/whatsapp` | `/aparelho-auditivo-preco` |
| `/aparelho-auditivo-discreto/whatsapp` | `/aparelho-auditivo-discreto` |
| `/aparelho-auditivo-recarregavel/whatsapp` | `/aparelho-auditivo-recarregavel` |
| `/melhor-aparelho-auditivo/whatsapp` | `/melhor-aparelho-auditivo` |
| `/aparelho-auditivo-para-idosos/whatsapp` | `/aparelho-auditivo-para-idosos` |
| `/aparelho-auditivo-starkey/whatsapp` | `/aparelho-auditivo-starkey` |
| `/aparelho-auditivo-argosy/whatsapp` | `/aparelho-auditivo-argosy` |
| `/aparelho-auditivo-rexton/whatsapp` | `/aparelho-auditivo-rexton` |
| `/aparelho-auditivo-beltone/whatsapp` | `/aparelho-auditivo-beltone` |
| `/aparelho-auditivo-coselgi/whatsapp` | `/aparelho-auditivo-coselgi` |
| `/aparelho-auditivo-interton/whatsapp` | `/aparelho-auditivo-interton` |

`/aparelho-auditivo/whatsapp` **não** redireciona — essa dupla ainda usa o modelo
antigo (base com formulário, `/whatsapp` com CTA direto).

---

## Estrutura de arquivos

```
src/
├── App.tsx                         ← Switch-case de roteamento
├── constants/
│   ├── paths.ts                    ← ROUTES, WHATSAPP_ROUTES
│   └── seo.ts                      ← Meta titles e descriptions
└── pages/
    ├── AparelhoAuditivoPage.tsx
    ├── AparelhoAuditivoPageWA.tsx  ← Variante WhatsApp
    ├── AudiometriaPage.tsx
    ├── AudiometriaPageWA.tsx       ← Variante WhatsApp
    ├── ZumbidoPage.tsx
    ├── ZumbidoPageWA.tsx           ← Variante WhatsApp
    ├── PerdaAuditivaPage.tsx
    ├── PerdaAuditivaPageWA.tsx     ← Variante WhatsApp
    ├── ManutencaoPage.tsx
    ├── ManutencaoPageWA.tsx        ← Variante WhatsApp
    ├── AssistenciaTecnicaPage.tsx
    ├── AssistenciaTecnicaPageWA.tsx ← Variante WhatsApp
    ├── PrecoPage.tsx                ← Exporta PrecoPage e PrecoPageWA
    ├── DiscretoPage.tsx             ← Exporta DiscretoPage e DiscretoPageWA
    ├── RecarregavelPage.tsx         ← Exporta RecarregavelPage e RecarregavelPageWA
    ├── MelhorAparelhoPage.tsx       ← Exporta MelhorAparelhoPage e MelhorAparelhoPageWA
    ├── IdososPage.tsx               ← Exporta IdososPage e IdososPageWA
    ├── StarkeyPage.tsx              ← Exporta StarkeyPage e StarkeyPageWA
    ├── ArgosyPage.tsx               ← Exporta ArgosyPage e ArgosyPageWA
    ├── RextonPage.tsx               ← Exporta RextonPage e RextonPageWA
    ├── BeltonePage.tsx              ← Exporta BeltonePage e BeltonePageWA
    ├── CoselgiPage.tsx              ← Exporta CoselgiPage e CoselgiPageWA
    ├── IntertonPage.tsx             ← Exporta IntertonPage e IntertonPageWA
    └── ObrigadoPage.tsx
```

> As páginas do cluster comercial mantêm um único arquivo por tema: o conteúdo
> fica em um componente interno que recebe `ctaMode` (`"form"` ou `"whatsapp"`),
> e o arquivo exporta as duas variantes. Isso evita manter duas cópias da copy.

### Componentes compartilhados adicionados para o cluster

| Componente | Uso |
|-----------|-----|
| `shared/BlocoConteudo` | Seção de texto com bullets, frase de fecho e CTA opcional |
| `shared/TabelaComparativa` | Tabela comparativa responsiva (tabela no desktop, cards no mobile) |
| `shared/CardsLinhas` | Blocos de linha de produto (Genesis/Evolv, Vista V/B, BiCore/MotionCore/Reach) |
| `shared/SeletorIntencao` | Microsseletor de intenção com mensagem pré-preenchida no WhatsApp |
| `shared/PaginasRelacionadas` | Links internos entre as páginas do cluster |

---

## Contato direto (WhatsApp)

| Finalidade | Link |
|-----------|------|
| Chat geral | `https://wa.me/5519998806076` |
| Link de lead (formulário) | `https://wa.me/message/5V24WTVNCMCXE1` |
