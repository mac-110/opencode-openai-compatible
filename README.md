# opencode-openai-compatible

OpenAI-compatible provider plugin for [OpenCode](https://opencode.ai) — connect any OpenAI-compatible API endpoint such as kiro-gateway, LiteLLM, LocalAI, Ollama, and more.

## Installation

```bash
npm install opencode-openai-compatible
```

## Configuration

Add the provider to your OpenCode `config.json` (`~/.config/opencode/config.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "myprovider": {
      "npm": "opencode-openai-compatible",
      "env": ["MY_API_KEY"],
      "models": {
        "my-model": {
          "id": "my-model",
          "name": "My Model",
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "temperature": true,
          "tool_call": true,
          "cost": { "input": 0, "output": 0 },
          "limit": { "context": 128000, "output": 8192 }
        }
      },
      "options": {
        "baseURL": "http://localhost:8888/v1"
      }
    }
  },
  "model": "myprovider/my-model"
}
```

Set your API key as an environment variable:

```bash
export MY_API_KEY="your-api-key"
```

## Examples

### kiro-gateway

```json
{
  "provider": {
    "kiro": {
      "npm": "opencode-openai-compatible",
      "env": ["KIRO_API_KEY"],
      "models": {
        "claude-opus-4.6": {
          "id": "claude-opus-4.6",
          "name": "Claude Opus 4.6",
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "temperature": true,
          "tool_call": true,
          "cost": { "input": 15, "output": 75 },
          "limit": { "context": 200000, "output": 32000 }
        }
      },
      "options": {
        "baseURL": "http://192.168.1.100:8888/v1"
      }
    }
  }
}
```

### LiteLLM / Ollama

```json
{
  "provider": {
    "ollama": {
      "npm": "opencode-openai-compatible",
      "env": ["OLLAMA_API_KEY"],
      "models": {
        "llama3": {
          "id": "llama3",
          "name": "Llama 3",
          "modalities": { "input": ["text"], "output": ["text"] },
          "temperature": true,
          "tool_call": false,
          "cost": { "input": 0, "output": 0 },
          "limit": { "context": 8192, "output": 4096 }
        }
      },
      "options": {
        "baseURL": "http://localhost:11434/v1"
      }
    }
  }
}
```

## License

MIT
