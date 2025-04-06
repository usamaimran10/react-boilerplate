declare global {
  interface Window {
    EmbeddableWidget: any;
  }
}

// but make sure to export that as default so Typescript will consider it automatically on the project
export default global;
