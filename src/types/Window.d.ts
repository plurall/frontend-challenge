export declare global {
  interface Window {
    PLURALL_CUSTOM_HISTORY: {
      listen: (callback: (location: any) => void) => void
    }
  }
}
