# Modificações Necessárias para o fork "Koder CLI"

Este documento lista os principais trechos do código que deverão ser alterados para implementar as três funcionalidades solicitadas:

1. **Renomear a ferramenta para "Koder CLI"**
   - README e documentação contêm diversas referências a "Gemini CLI".
     - Exemplo: `README.md` linhas 1‑9 mostram o nome atual da ferramenta e a descrição inicial.
   - A interface da aplicação exibe o nome nos componentes.
     - Exemplo: `packages/cli/src/ui/components/AboutBox.tsx` linha 38 possui o texto "About Gemini CLI".
   - O diálogo de autenticação também menciona "Gemini CLI".
     - Exemplo: `packages/cli/src/ui/components/AuthDialog.tsx` linhas 96‑101.
   - Todas essas ocorrências deverão ser atualizadas para "Koder CLI" e, se necessário, os arquivos de arte ASCII em `packages/cli/src/ui/components/AsciiArt.ts`.

2. **Permitir login com Azure AD via OAuth**
   - A autenticação atual usa somente Google OAuth (`packages/core/src/code_assist/oauth2.ts`).
     - Será preciso criar um fluxo semelhante para Azure AD (novo módulo ou extensão deste arquivo).
   - O tipo de autenticação é controlado pelo enum `AuthType` em `packages/core/src/core/contentGenerator.ts` linhas 37‑41. Um novo valor, por exemplo `LOGIN_WITH_AZURE_AD`, deve ser adicionado.
   - A validação de métodos em `packages/cli/src/config/auth.ts` (linhas 10‑38) deverá aceitar o novo tipo e verificar as variáveis de ambiente da Microsoft ou tokens necessários.
   - A interface de seleção em `packages/cli/src/ui/components/AuthDialog.tsx` (linhas 31‑38) precisa oferecer a opção "Login with Azure AD".
   - O componente `AboutBox.tsx` deve exibir corretamente o método selecionado.

3. **Adicionar mais opções de modelos customizados**
   - Os modelos padrão estão definidos em `packages/core/src/config/models.ts` e os limites de tokens em `packages/core/src/core/tokenLimits.ts` (linhas 15‑27). Para suportar modelos personalizados, é necessário:
     - Adicionar constantes ou uma lista configurável de modelos no arquivo `models.ts`.
     - Atualizar `tokenLimits.ts` para reconhecer os novos modelos.
     - Permitir que `parseArguments` em `packages/cli/src/config/config.ts` aceite modelos adicionais via flag `--model` ou configuração.

Estes pontos destacam apenas os principais locais que requerem atualização; outras referências a "Gemini" ou a listas de modelos poderão existir em toda a base de código e documentação. Após realizar as mudanças, execute `npm run preflight` para garantir que tudo continua funcionando corretamente.
