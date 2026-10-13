/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL that receives lead form submissions as JSON (POST). */
  readonly VITE_LEAD_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
