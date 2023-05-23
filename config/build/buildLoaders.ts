import webpack from 'webpack';

import { BuildOptions } from './types/config';

import {
  buildSvgLoader,
  buildCssLoader,
  buildTypescriptLoader,
  buildFileLoader
} from './loaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader();

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = buildTypescriptLoader();

  const fileLoader = buildFileLoader();

  return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
