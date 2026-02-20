# SalasApp

Projeto Angular com configurações iniciais: **Jest**, **ESLint**, **Prettier** e **Tailwind CSS**.

Gerado com [Angular CLI](https://github.com/angular/angular-cli) 21.1.4.

---

## Usar este repositório como template (scaffold)

Para criar um novo projeto Angular já com estas configurações:

1. No GitHub: **Use this template** → **Create a new repository** (ou marque o repositório como template em Settings → General → Template repository).
2. Clone o novo repositório.
3. Na raiz do projeto, rode:
   ```bash
   npm run init-project nome-do-seu-app
   ```
4. Instale as dependências e suba o projeto:
   ```bash
   npm install
   npm start
   ```

O script `init-project` substitui o nome do projeto em `package.json`, `angular.json`, `src/index.html` e `src/app/app.ts`.

---

## Ferramentas incluídas

| Ferramenta   | Uso |
|-------------|-----|
| **Jest**    | Testes unitários (`ng test`, `npm run test:coverage`) |
| **ESLint**  | Lint (`npm run lint`, `npm run lint:fix`) |
| **Prettier**| Formatação (`npm run format`, `npm run format:check`) |
| **Tailwind**| CSS utility-first em `src/styles.css` |

---

## Development server

```bash
ng serve
```

Abra `http://localhost:4200/`. A aplicação recarrega ao alterar os arquivos.

## Code scaffolding

```bash
ng generate component component-name
ng generate --help
```

## Build

```bash
ng build
```

Artefatos em `dist/`.

## Testes (Jest)

```bash
ng test
npm run test:ci
npm run test:coverage
```

## Lint e formatação

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Recursos

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
