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
| `/{rota}/obrigado` | `ObrigadoPage` | Confirmação após envio de formulário |

> Qualquer caminho não reconhecido redireciona para `/aparelho-auditivo`.

---

## Rotas WhatsApp (`/whatsapp`)

Versões sem formulário — todos os CTAs direcionam diretamente ao WhatsApp.  
Indicadas para campanhas de tráfego pago onde o usuário já está no mobile/WhatsApp.

| Rota | Componente | Página base |
|------|-----------|------------|
| `/aparelho-auditivo/whatsapp` | `AparelhoAuditivoPageWA` | Aparelho auditivo |
| `/audiometria/whatsapp` | `AudiometriaPageWA` | Audiometria |
| `/zumbido-no-ouvido/whatsapp` | `ZumbidoPageWA` | Zumbido |
| `/perda-auditiva/whatsapp` | `PerdaAuditivaPageWA` | Perda auditiva |
| `/manutencao-de-aparelho-auditivo/whatsapp` | `ManutencaoPageWA` | Manutenção de aparelho auditivo |
| `/assistencia-tecnica-aparelho-auditivo/whatsapp` | `AssistenciaTecnicaPageWA` | Assistência técnica |
| `/aparelho-auditivo-preco/whatsapp` | `PrecoPageWA` | Preço de aparelho auditivo |
| `/aparelho-auditivo-discreto/whatsapp` | `DiscretoPageWA` | Aparelho auditivo discreto |
| `/aparelho-auditivo-recarregavel/whatsapp` | `RecarregavelPageWA` | Recarregável e Bluetooth |
| `/melhor-aparelho-auditivo/whatsapp` | `MelhorAparelhoPageWA` | Melhor aparelho auditivo |
| `/aparelho-auditivo-para-idosos/whatsapp` | `IdososPageWA` | Aparelho auditivo para idosos |
| `/aparelho-auditivo-starkey/whatsapp` | `StarkeyPageWA` | Aparelhos auditivos Starkey |
| `/aparelho-auditivo-argosy/whatsapp` | `ArgosyPageWA` | Aparelhos auditivos Argosy |
| `/aparelho-auditivo-rexton/whatsapp` | `RextonPageWA` | Aparelhos auditivos Rexton |
| `/aparelho-auditivo-beltone/whatsapp` | `BeltonePageWA` | Aparelhos auditivos Beltone |
| `/aparelho-auditivo-coselgi/whatsapp` | `CoselgiPageWA` | Aparelhos auditivos Coselgi |
| `/aparelho-auditivo-interton/whatsapp` | `IntertonPageWA` | Aparelhos auditivos Interton |

**Diferença das rotas `/whatsapp`:**
- Sem popup de formulário de captação
- Todos os botões CTA são links diretos para `https://wa.me/5519998806076`
- A barra de topo (`Section01TopBar`) também linka direto ao WhatsApp
- Conteúdo idêntico à página base; apenas o comportamento dos CTAs muda

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
