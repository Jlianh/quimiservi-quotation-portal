import { Product } from '../models/product.model';

/**
 * The four real Quimiservi products (industrial/institutional laundry line).
 * Copy, uses, presentations and accent colours are taken from the printed
 * labels and feature art in the brand asset pack.
 */
export const PRODUCTS: readonly Product[] = [
  {
    id: 'oxi-whitex',
    name: 'Blanqueador Oxigenado OXI-WHITEX',
    brand: 'OXI-WHITEX',
    category: 'Blanqueadores',
    tagline: 'Blanqueador oxigenado concentrado, libre de cloro.',
    description:
      'OXI-WHITEX es un blanqueador oxigenado concentrado, especialmente formulado ' +
      'para lavanderías comerciales, hoteleras, centros médicos y hospitales. Puede ' +
      'utilizarse en temperaturas de 70 °C a 90 °C y es excelente para el lavado de ' +
      'ropa blanca y de color, en fibras naturales y sintéticas. A base de oxígeno ' +
      'estabilizado, blanquea y desmancha los textiles sin dañar los colores.',
    uses: ['Lavanderías comerciales', 'Hoteles', 'Centros médicos y hospitales', 'Ropa blanca y de color'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Libre de cloro', description: 'Fórmula a base de oxígeno estabilizado, segura para las telas.' },
      { title: 'Acción efectiva desde 70 °C', description: 'Rendimiento óptimo en ciclos de lavado en caliente.' },
      { title: 'Blancos más blancos', description: 'Blanquea y desmancha sin opacar las fibras.' },
      { title: 'Seguro para las telas', description: 'No daña los colores ni debilita los tejidos.' },
    ],
    image: 'products/oxi-whitex.png',
    imageAlt: 'Garrafa de Blanqueador Oxigenado OXI-WHITEX en una lavandería industrial',
    accentColor: '#5aa017',
    certifications: ['INVIMA'],
  },
  {
    id: 'deterlav',
    name: 'Detergente para Lavadora Industrial DETERLAV',
    brand: 'DETERLAV',
    category: 'Detergentes',
    tagline: 'Detergente líquido para lavado de ropa de todo tipo.',
    description:
      'DETERLAV es un detergente líquido de alto rendimiento para el lavado de ropa ' +
      'de todo tipo en lavadoras industriales. Penetra profundamente en las fibras ' +
      'para remover manchas y suciedad, protege los colores y deja las prendas con un ' +
      'aroma fresco y agradable, sin manchar ni dejar residuos.',
    uses: ['Lavanderías industriales', 'Hoteles', 'Hospitales', 'Ropa de color y blanca'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Limpieza profunda', description: 'Penetra las fibras y elimina manchas difíciles.' },
      { title: 'Mayor rendimiento', description: 'Fórmula concentrada que rinde más por carga.' },
      { title: 'No mancha ni deja residuos', description: 'Enjuague limpio en cada ciclo.' },
      { title: 'Protege los colores', description: 'Conserva la intensidad de prendas de color y negras.' },
    ],
    image: 'products/deterlav.png',
    imageAlt: 'Garrafa de Detergente para Lavadora Industrial DETERLAV junto a ropa de colores',
    accentColor: '#312e81',
    certifications: ['INVIMA'],
  },
  {
    id: 'fortex',
    name: 'Desengrasante Textil FORTEX',
    brand: 'FORTEX',
    category: 'Desengrasantes',
    tagline: 'Desengrasante fuerte para textiles.',
    description:
      'FORTEX es un desengrasante líquido de alto rendimiento para la eliminación de ' +
      'grasa, aceites, ceras y suciedad pesada en textiles. Ideal para prendas con ' +
      'procesos de mantenimiento industrial y comercial. Puede aplicarse directamente ' +
      'sobre la mancha para suciedad muy difícil, o diluido en agua 1:10 para uso general.',
    uses: ['Ropa de taller e industrial', 'Textiles con grasa pesada', 'Lavanderías industriales'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Remueve grasa pesada', description: 'Elimina grasa, aceites y ceras incrustadas.' },
      { title: 'Actúa profundamente', description: 'Penetra la fibra para liberar la suciedad.' },
      { title: 'Alto rendimiento por carga', description: 'Diluible 1:10 para un uso económico.' },
      { title: 'Compatible con distintas telas', description: 'Apto para una amplia variedad de textiles.' },
    ],
    image: 'products/fortex.png',
    imageAlt: 'Garrafa de Desengrasante Textil FORTEX con instrucciones de uso',
    accentColor: '#e0701a',
    certifications: ['INVIMA'],
  },
  {
    id: 'suavizante-textil',
    name: 'Suavizante Textil Ambientado',
    brand: 'SUAVIZANTE TEXTIL',
    category: 'Suavizantes',
    tagline: 'Suaviza las fibras y reduce drásticamente las arrugas.',
    description:
      'Suavizante para uso industrial e institucional que acondiciona las fibras tras ' +
      'el lavado, aportando mayor suavidad y confort. Reduce drásticamente las arrugas ' +
      'para una ropa fácil de planchar, protege las fibras y deja una fragancia ' +
      'duradera en cada prenda.',
    uses: ['Lavanderías', 'Hoteles', 'Hospitales', 'Ropa de uso frecuente'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Suavidad y confort', description: 'Acondiciona las fibras para un tacto agradable.' },
      { title: 'Reduce las arrugas', description: 'Facilita el planchado y mejora el acabado.' },
      { title: 'Protege las fibras', description: 'Prolonga la vida útil de los textiles.' },
      { title: 'Fragancia duradera', description: 'Deja un aroma fresco que perdura.' },
    ],
    image: 'products/suavizante.png',
    imageAlt: 'Garrafa de Suavizante Textil ambientado junto a camisas dobladas',
    accentColor: '#1592c9',
    certifications: ['INVIMA'],
  },
];
