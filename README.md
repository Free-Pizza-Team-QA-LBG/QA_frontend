# Employee Management System - Frontend

## Development

Clone the repo and run `npm install` to install the required dependencies.

Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VS Code extension to show warnings for code quality/consistency issues. Also install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension to auto-complete Tailwind classes.

Run `npm run dev` to host the app on a local development server.

The project uses Next.js with app router ([documentation](https://nextjs.org/docs)).

## Production (VM)

To update the code running on the VM, connect to the instance over SSH. Run `git pull` in `/var/www/QA_frontend` and run `npm run build` to generate production code. Finally, run `pm2 restart qa-frontend` to restart the process.