import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "alerange": '#FB6908',
                "gray-1": '#B4B4B4',
                "gray-2": '#E2E0E0',
                "form-bg": '#212121',
            }
        },
    },

    plugins: [forms,require("daisyui")],

    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
};
