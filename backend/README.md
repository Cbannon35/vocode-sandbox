# Vocode ConversationRouter
## Description
This self-hosted backend allows you to expose a WebSocket route allowing conversations with a vocode agent that can be called from any frontend application. More info can be found [here](https://docs.vocode.dev/react-quickstart#self-hosted).
## Requirements
1. OpenAI API Key
2. Deepgram API Key
3. ElevenLabs API Key (optional)
## Getting started
1. Ensure all API keys are set in environmental variables by checking the Webview. Ensure they are set on the [Replit "Secrets" tab](https://docs.replit.com/programming-ide/workspace-features/secrets).
2. Websocket connection can be established from `wss://{REPL_SLUG}/conversation`. (Example: `wss://my-repo.user.repl.co/conversation`). You can check the exact URL on the Webview.