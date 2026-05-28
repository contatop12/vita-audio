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
    └── ObrigadoPage.tsx
```

---

## Contato direto (WhatsApp)

| Finalidade | Link |
|-----------|------|
| Chat geral | `https://wa.me/5519998806076` |
| Link de lead (formulário) | `https://wa.me/message/5V24WTVNCMCXE1` |
