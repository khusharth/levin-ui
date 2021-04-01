import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/components/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      scss({
        failOnError: true,
        outputStyle: 'compressed',
        processor: (css) =>
          postcss([autoprefixer])
            .process(css)
            .then((result) => result.css),
      }),
      image(),
      babel({
        exclude: '/node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      nodeResolve(),
      commonjs(),
      // terser(),
    ],
  },
];
