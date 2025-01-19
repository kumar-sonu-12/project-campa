declare module "react-to-print" {
  export interface UseReactToPrintOptions {
    content: () => React.ReactInstance | null;
    // onBeforeGetContent: () => React.ReactInstance | null;
    documentTitle?: string;
    pageStyle?: string;
  }

  export function useReactToPrint(options: UseReactToPrintOptions): () => void;
}
