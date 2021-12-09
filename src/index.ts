import juice from 'juice'
import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite";
import { OutputBundle, OutputAsset, OutputChunk } from 'rollup';
import { JuicePluginOptions } from './types'
import { defaultPluginOptions } from "./defaults";

export default (options: JuicePluginOptions = defaultPluginOptions): Plugin => {

  return {
    name: 'juice',
    enforce: 'post',
    transformIndexHtml: {
      enforce: 'post',
      transform: handleTransformHtml
    }
  }

  function fetchCss (bundle?: OutputBundle) {
    const cssSource = bundle && Object.values(bundle).find((i: OutputAsset | OutputChunk) => i.name === 'index.css')
    if (cssSource?.type === 'asset') {
      return cssSource.source
    }
  }

  function handleTransformHtml(html: string, context: IndexHtmlTransformContext): IndexHtmlTransformResult | void | Promise<IndexHtmlTransformResult | void> {
    const { bundle }: { bundle?: OutputBundle } = context
    const extraCss = `${options.juiceOptions?.extraCss};${fetchCss(bundle)}`
    return juice(html, {
      ...options.juiceOptions,
      extraCss
    })
  }
}
