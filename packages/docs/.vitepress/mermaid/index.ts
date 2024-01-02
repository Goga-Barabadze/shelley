// Got the files inside this foulder from https://github.com/mermaid-js/mermaid/tree/develop/packages/mermaid/src/docs

import mermaid, { type MermaidConfig } from 'mermaid';
import zenuml from '@mermaid-js/mermaid-zenuml';

const init = mermaid.registerExternalDiagrams([zenuml]);

export const render = async (id: string, code: string, config: MermaidConfig): Promise<string> => {
  await init;
  mermaid.initialize(config);
  const { svg } = await mermaid.render(id, code);
  return svg;
};