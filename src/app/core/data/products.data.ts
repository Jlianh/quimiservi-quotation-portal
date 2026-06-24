import { Product } from '../models/product.model';

/**
 * The real Quimiservi product catalogue (laundry, degreasers, descalers,
 * disinfectants, floor and automotive care). Copy, uses, presentations and
 * accent colours are taken from the printed labels and feature art in the
 * brand asset pack.
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
  {
    id: 'desengrasante-industrial',
    name: 'Desengrasante Industrial EMULGRAS',
    brand: 'EMULGRAS',
    category: 'Desengrasantes',
    tagline: 'Fórmula concentrada, máxima eficacia y resultados profesionales.',
    description:
      'EMULGRAS es un desengrasante industrial de fórmula concentrada que remueve grasa, ' +
      'aceites y suciedad pesada de maquinaria, herramientas, pisos y superficies ' +
      'metálicas. Ideal para uso industrial y profesional, con resultados de alto ' +
      'rendimiento en cada aplicación.',
    uses: ['Maquinaria industrial', 'Herramientas y equipos', 'Pisos de planta', 'Superficies metálicas'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Alto poder desengrasante', description: 'Elimina grasa y aceite incrustado con facilidad.' },
      { title: 'Uso industrial', description: 'Apto para maquinaria, herramientas y equipos.' },
      { title: 'Limpieza profunda', description: 'Remueve la suciedad pesada gracias a su fórmula concentrada.' },
      { title: 'Seguro en superficies', description: 'No corrosivo, cuida los metales.' },
    ],
    image: 'products/desengrasante-industrial.jpg',
    imageAlt: 'Garrafa de Desengrasante Industrial EMULGRAS sobre un banco de herramientas',
    banner: 'products/desengrasante-industrial-banner.png',
    accentColor: '#6d28d9',
    certifications: ['INVIMA'],
  },
  {
    id: 'desengrasante-campanas',
    name: 'Desengrasante de Campanas',
    brand: 'DESENGRASANTE DE CAMPANAS',
    category: 'Desengrasantes',
    tagline: 'Limpieza profunda para campanas, hornos, planchas y freidoras.',
    description:
      'Fórmula especializada para eliminar grasa, aceites carbonizados y suciedad pesada ' +
      'en campanas extractoras, filtros, ductos y superficies metálicas de cocina. ' +
      'Limpieza profunda y máxima eficacia con resultados profesionales.',
    uses: ['Campanas extractoras', 'Hornos y planchas', 'Freidoras', 'Filtros y ductos'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Limpieza profunda', description: 'Remueve la grasa acumulada y carbonizada.' },
      { title: 'Ideal para campanas', description: 'Hornos, planchas, freidoras y más.' },
      { title: 'No corrosivo', description: 'Seguro en superficies metálicas.' },
      { title: 'Fórmula eficiente', description: 'Mayor rendimiento y efectividad por carga.' },
    ],
    image: 'products/desengrasante-campanas.jpg',
    imageAlt: 'Garrafa de Desengrasante de Campanas en una cocina',
    banner: 'products/desengrasante-campanas-banner.png',
    accentColor: '#ea580c',
    certifications: ['INVIMA'],
  },
  {
    id: 'desengrasante-multiusos',
    name: 'Desengrasante Multiusos',
    brand: 'DESENGRASANTE MULTIUSOS',
    category: 'Desengrasantes',
    tagline: 'Excelente para la remoción de la grasa en todo tipo de superficies.',
    description:
      'Fórmula avanzada que elimina eficazmente la grasa, suciedad y manchas en pisos, ' +
      'paredes, superficies lavables y equipos industriales. Ideal para uso ' +
      'institucional, comercial e industrial, con baja espuma para un enjuague fácil.',
    uses: ['Pisos y paredes', 'Superficies lavables', 'Equipos industriales', 'Uso institucional y comercial'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Alto poder desengrasante', description: 'Remueve grasa y suciedad de forma fácil y rápida.' },
      { title: 'Multiusos', description: 'Pisos, paredes, azulejos, plástico y más.' },
      { title: 'Baja espuma', description: 'Enjuague fácil que ahorra agua y tiempo.' },
      { title: 'Fórmula eficiente', description: 'Máxima limpieza con mayor rendimiento.' },
    ],
    image: 'products/desengrasante-multiusos.png',
    imageAlt: 'Garrafa de Desengrasante Multiusos de Quimiservi',
    banner: 'products/desengrasante-multiusos-banner.png',
    accentColor: '#2563eb',
    certifications: ['INVIMA'],
  },
  {
    id: 'desincrustante-porcelanizado',
    name: 'Desincrustante para Porcelanizado PURI BATH',
    brand: 'PURI BATH',
    category: 'Desincrustantes',
    tagline: 'Desincrusta, desmancha y desengrasa superficies porcelanizadas.',
    description:
      'PURI BATH es un desincrustante de fórmula especializada que elimina incrustaciones ' +
      'de sarro, óxido, residuos de cemento y manchas difíciles en superficies ' +
      'porcelanizadas, dejando acabados limpios, brillantes y sin residuos.',
    uses: ['Pisos porcelanizados', 'Superficies cerámicas', 'Baños y enchapes', 'Acabados con sarro o cemento'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Alto poder desincrustante', description: 'Elimina sarro, óxido, cemento y manchas difíciles.' },
      { title: 'Limpieza profunda', description: 'Restaura el brillo original de las superficies.' },
      { title: 'Ideal para porcelanizado', description: 'Seguro en superficies porcelanizadas y cerámicas.' },
      { title: 'Fórmula eficiente', description: 'Acción rápida, efectiva y fácil de aplicar.' },
    ],
    image: 'products/desincrustante-porcelanizado.jpg',
    imageAlt: 'Garrafa de Desincrustante para Porcelanizado PURI BATH sobre azulejos',
    banner: 'products/desincrustante-porcelanizado-banner.png',
    accentColor: '#1d4ed8',
    certifications: ['INVIMA'],
  },
  {
    id: 'restaurador-llantas',
    name: 'Restaurador de Llantas',
    brand: 'RESTAURADOR DE LLANTAS',
    category: 'Cuidado automotriz',
    tagline: 'Mantiene el negro original de sus llantas.',
    description:
      'Fórmula especializada que restaura, protege y realza el color de las llantas, ' +
      'dejándolas con un acabado profundo y duradero. Evita el reseco y el agrietamiento, ' +
      'devolviendo a sus llantas el negro original.',
    uses: ['Llantas de vehículos', 'Talleres y autolavados', 'Flotas y transporte', 'Detallado automotriz'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Acabado profundo', description: 'Devuelve el negro original a sus llantas.' },
      { title: 'Protege y renueva', description: 'Evita el reseco, agrietamiento y desgaste.' },
      { title: 'Resultados duraderos', description: 'Película de larga duración y alta resistencia.' },
      { title: 'Fácil aplicación', description: 'Rápida acción y acabado uniforme y profesional.' },
    ],
    image: 'products/restaurador-llantas.jpg',
    imageAlt: 'Garrafa de Restaurador de Llantas de Quimiservi',
    banner: 'products/restaurador-llantas-banner.png',
    accentColor: '#1f2937',
    certifications: ['INVIMA'],
  },
  {
    id: 'cera-sellacril',
    name: 'Cera Polimérica SELLACRIL Autobrillante',
    brand: 'SELLACRIL',
    category: 'Cuidado de pisos',
    tagline: 'Brillo, protección y durabilidad para todo tipo de pisos.',
    description:
      'SELLACRIL es una cera polimérica autobrillante de fórmula avanzada que forma una ' +
      'película protectora de alta resistencia, otorgando un brillo intenso y duradero. ' +
      'Ideal para pisos de mármol, granito, cerámica, baldosa, vinilo y más.',
    uses: ['Pisos de mármol y granito', 'Cerámica y baldosa', 'Pisos de vinilo', 'Mantenimiento de pisos'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L', 'Caneca 55 gal'],
    features: [
      { title: 'Brillo superior', description: 'Acabado autobrillante que realza el aspecto de los pisos.' },
      { title: 'Protección duradera', description: 'Capa resistente que protege contra el desgaste y el rayado.' },
      { title: 'Fácil de aplicar', description: 'Secado rápido y uniforme, sin necesidad de pulir.' },
      { title: 'Para todo tipo de pisos', description: 'Mármol, granito, cerámica, baldosa, vinilo y más.' },
    ],
    image: 'products/cera-sellacril.jpg',
    imageAlt: 'Garrafa de Cera Polimérica SELLACRIL sobre un piso de mármol brillante',
    banner: 'products/cera-sellacril-banner.png',
    accentColor: '#b45309',
    certifications: ['INVIMA'],
  },
  {
    id: 'desinfectante-whitex',
    name: 'Desinfectante Bicarbonato WHITEX',
    brand: 'WHITEX',
    category: 'Desinfectantes',
    tagline: 'Limpiador multiusos que limpia, desinfecta y desodoriza.',
    description:
      'Fórmula avanzada con bicarbonato que limpia, desinfecta y desodoriza en una sola ' +
      'acción. Ideal para pisos, baños, cocinas, azulejos, superficies lavables y más, ' +
      'dejando un agradable aroma fresco a limón que perdura.',
    uses: ['Pisos y baños', 'Cocinas y azulejos', 'Superficies lavables', 'Uso institucional y del hogar'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Limpia y desinfecta', description: 'Elimina gérmenes y bacterias.' },
      { title: 'Multiusos', description: 'Ideal para pisos, baños, cocinas y superficies lavables.' },
      { title: 'Aroma fresco a limón', description: 'Deja un agradable aroma que perdura.' },
      { title: 'Fórmula eficiente', description: 'Limpieza profunda y desodorizante.' },
    ],
    image: 'products/desinfectante-whitex.png',
    imageAlt: 'Botella de Desinfectante Bicarbonato WHITEX',
    banner: 'products/desinfectante-whitex-banner.png',
    accentColor: '#16a34a',
    certifications: ['INVIMA'],
  },
  {
    id: 'inhibacter-biguanidina',
    name: 'Inhibacter Biguanidina',
    brand: 'INHIBACTER',
    category: 'Desinfectantes',
    tagline: 'Desinfectante de alto poder y amplio espectro.',
    description:
      'INHIBACTER es un desinfectante de alto poder con fórmula avanzada de amplio ' +
      'espectro que elimina bacterias, hongos y virus, garantizando la máxima ' +
      'desinfección en una sola aplicación.',
    uses: ['Uso institucional', 'Hospitales y clínicas', 'Limpieza profesional', 'Hogares'],
    presentations: ['Garrafa 4 L', 'Garrafa 20 L'],
    features: [
      { title: 'Alto poder desinfectante', description: 'Elimina el 99.9% de bacterias, hongos y virus.' },
      { title: 'Amplio espectro', description: 'Eficaz contra un gran abanico de microorganismos.' },
      { title: 'Limpieza profunda', description: 'Desinfecta y elimina malos olores en una sola aplicación.' },
      { title: 'Uso seguro y efectivo', description: 'Ideal para uso institucional, limpieza y hogares.' },
    ],
    image: 'products/inhibacter-biguanidina.png',
    imageAlt: 'Garrafa de Inhibacter Biguanidina de Quimiservi',
    banner: 'products/inhibacter-biguanidina-banner.png',
    accentColor: '#7e22ce',
    certifications: ['INVIMA'],
  },
];
