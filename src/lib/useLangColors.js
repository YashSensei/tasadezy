import { useEffect } from 'react';

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

const HUE_PALETTE = [14, 110, 132, 270, 0, 48, 315, 180, 90, 240, 30, 160];

function getLangHue(lang) {
  return HUE_PALETTE[hashCode(lang) % HUE_PALETTE.length];
}

export function useLangColors(languages = []) {
  useEffect(() => {
    if (!languages.length) return;

    const id = 'lang-color-styles';
    document.getElementById(id)?.remove();

    const css = languages
      .filter((l) => l.toLowerCase() !== 'all')
      .map((lang) => {
        const hue = getLangHue(lang);
        const slug = lang.toLowerCase().replace(/\s+/g, '-');
        return `
          .demos-wrap .card-lang-${slug} {
            background: hsl(${hue}, 80%, 95%);
            color: hsl(${hue}, 40%, 32%);
            border: 1px solid hsl(${hue}, 50%, 72%);
          }
          .demos-wrap .chip.card-lang-${slug} {
            background: hsl(${hue}, 80%, 95%);
            color: hsl(${hue}, 40%, 32%);
            border: 1px solid hsl(${hue}, 50%, 72%);
          }`;
      })
      .join('\n');

    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);

    return () => document.getElementById(id)?.remove();
  }, [languages]);
}

export function getLangClass(lang = '') {
  return `card-lang card-lang-${lang.toLowerCase().replace(/\s+/g, '-')}`;
}