/**
 * Experiencia completa (catálogo) - generado a partir de `Experiencia (Fudambient).txt`
 * Regla: deduplicación aplicada para quedar en EXACTAMENTE 33 proyectos.
 * Categorías válidas: Educación ambiental / Urbanismo / Saneamiento básico / Restauración ecológica
 *
 * Nota: En el .txt hay 2 líneas sin categoría al final; para no perderlas del catálogo
 * se asignó la categoría por contexto (33 -> Urbanismo, 40 -> Restauración ecológica).
 */
const experienceFull = [
  {
    id: "Convenio 98",
    year: 2009,
    location: null,
    title: "Convenio 98 de 2009",
    description: "Implementación de la estrategia de educación ambiental para el manejo de los residuos sólidos a partir de la selección en la fuente, en los municipios de Florida, Alcalá, Ulloa, La Victoria, Tuluá y Buenaventura.",
    categories: ["Educación ambiental"]
  },
  {
    id: "Contrato CVC 559",
    year: 2016,
    location: null,
    title: "Contrato CVC No.559 de 2016",
    description: "Fortalecimiento de la capacidad técnica, apoyando la verificación del estado físico y ambiental de los sistemas de abastecimiento y de tratamiento de aguas residuales en territorios de comunidades negras y comunidades indígenas.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Convenio 39",
    year: 2016,
    location: "Buenaventura",
    title: "Convenio 39 de 2016",
    description: "Realizar el diagnóstico y diseño participativo de los sistemas de abastecimiento de agua, la socialización, organización y fortalecimiento comunitario para la operación y manejo del sistema de abastecimiento de agua en los territorios colectivos de los Consejos Comunitarios de La Brea, el Kilómetro 9 y La Esperanza, ubicados en el municipio de Buenaventura.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Convenio de Asociación 2017",
    year: 2017,
    location: "Restrepo",
    title: "Convenio de Asociación 2017",
    description: "Aunar esfuerzos técnicos y recursos económicos para implementar tecnologías y prácticas para la recuperación de áreas degradadas por procesos de laterización, a través de actividades biomecánicas y restauración ecológica participativa, para el control de movimientos en masa y control de aporte de sedimentos en el municipio de Restrepo.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato CVC 0408",
    year: 2018,
    location: "Buenaventura",
    title: "Contrato CVC 0408 de 2018",
    description: "Realizar el llenado de fosas para la recuperación de pasivos ambientales de las áreas afectadas por la minería ilegal de oro aluvial en el río Dagua, en el sector Alto y Medio Dagua en el municipio de Buenaventura.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato CVC 0586",
    year: 2018,
    location: "Cali",
    title: "Contrato CVC 0586 de 2018",
    description: "Realizar acciones de recuperación y mantenimiento de los humedales Charco Azul, Cañasgordas, Santa Elena e Islas del Canal, durante el desarrollo del proyecto 7001 “Conservación de la biodiversidad y sus servicios ecosistémicos en la zona urbana de Santiago de Cali, mediante el conocimiento, la preservación, la restauración y el uso sostenible”.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato CVC 0588",
    year: 2018,
    location: "Restrepo",
    title: "Contrato CVC 0588 de 2018",
    description: "Recuperación de áreas degradadas por procesos de laterización a través de actividades biomecánicas y restauración ecológica para el control de movimientos en masa y control de aporte de sedimentos en el corregimiento San Pablo, vereda Calimita, municipio de Restrepo, cuenca Dagua.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato CVC 0709",
    year: 2018,
    location: "La Cumbre",
    title: "Contrato CVC 0709 de 2018",
    description: "Construcción de sistemas individuales de tratamiento de aguas residuales domésticas, sistema tipo en plástico prefabricado, con disposición de efluente tratado por infiltración en terreno, en comunidades rurales ubicadas en la cuenca Dagua en el municipio de La Cumbre y realización de talleres de socialización y capacitación.",
    categories: ["Saneamiento básico", "Educación ambiental"]
  },
  {
    id: "Contrato CVC 0750",
    year: 2018,
    location: "Bugalagrande",
    title: "Contrato CVC 0750 de 2018",
    description: "Realizar la construcción de obras de protección del río Cauca, sector Caramanta y Ciénaga Redonda en el municipio de Bugalagrande.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Contrato 192892",
    year: null,
    location: "Pasto",
    title: "Contrato 192892",
    description: "Construcción, suministro y puesta en marcha de plantas de tratamiento de agua potable y sistema de desinfección en acueductos rurales y suburbanos del municipio de Pasto - segunda etapa.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Contrato CVC 0501",
    year: 2019,
    location: null,
    title: "Contrato CVC 0501 de 2019",
    description: "Construcción de sistemas individuales de tratamiento de aguas residuales domésticas, sistema tipo en plástico prefabricado, en comunidades rurales ubicadas en el departamento del Valle del Cauca y realización de talleres de socialización y capacitación.",
    categories: ["Saneamiento básico", "Educación ambiental"]
  },
  {
    id: "Contrato 20192971",
    year: 2019,
    location: "Pasto",
    title: "Contrato 20192971 de 2019",
    description: "Construcción, mejoramiento y preservación de sistemas de acueducto y alcantarillado del sector rural y urbano del municipio de Pasto.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Contrato CVC 0614",
    year: 2020,
    location: "Toro",
    title: "Contrato CVC 0614 de 2020",
    description: "Realizar la recuperación de áreas degradadas por procesos de erosión severa, a través de obras civiles, obras de bioingeniería y restauración ecológica, para el control de movimientos en masa y control de aporte de sedimentos en el municipio de Toro, cuenca RUT.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio de Asociación 0138",
    year: 2020,
    location: "Cali",
    title: "Convenio de Asociación CVC 0138 de 2020",
    description: "Implementar acciones de manejo del arbolado urbano realizando la siembra de individuos arbóreos en la comuna 21 y extracción de raíces y tocones en las comunas 15, 16 y 21 de Santiago de Cali.",
    categories: ["Urbanismo"]
  },
  {
    id: "Convenio 099-2021",
    year: 2021,
    location: null,
    title: "Convenio 099-2021",
    description: "Implementación de herramientas de manejo del paisaje - HMP, en sistemas de restauración ecológica y el sostenimiento de áreas restauradas, en las cuencas hidrográficas de los Micos, Obando y RUT jurisdicción de la CVC.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio de Asociación 0149-2021",
    year: 2021,
    location: "Cali",
    title: "Convenio de Asociación CVC 0149-2021",
    description: "Implementar acciones de mantenimiento y manejo del arbolado urbano para mejorar las condiciones ambientales en la comuna 22 y corredores viales priorizados en Santiago de Cali.",
    categories: ["Urbanismo"]
  },
  {
    id: "Convenio de Asociación 091-2022",
    year: 2022,
    location: "Cali",
    title: "Convenio de Asociación CVC 091-2022",
    description: "Implementar acciones de mantenimiento y manejo del arbolado urbano para mejorar las condiciones ambientales en la comuna 22 y corredores viales priorizados en Santiago de Cali.",
    categories: ["Urbanismo"]
  },
  {
    id: "Contrato CVC 0740/2021",
    year: 2021,
    location: null,
    title: "Contrato CVC 0740/2021",
    description: "Realizar la recuperación de áreas degradadas por procesos de erosión severa, a través de obras civiles, obras de bioingeniería y restauración ecológica, para el control de movimientos en masa y control de aporte de sedimentos en los municipios de Dagua, Restrepo, Bolívar y Roldanillo en el departamento del Valle del Cauca.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio de Asociación 1722",
    year: 2022,
    location: null,
    title: "Convenio de Asociación 1722 de 2022",
    description: "Implementar acciones de recuperación ambiental y forestal y rehabilitación de áreas en proceso de erosión en los municipios de Dagua, Restrepo, Roldanillo y El Dovio.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio de Asociación 198",
    year: 2022,
    location: null,
    title: "Convenio de Asociación 198 de 2022",
    description: "Implementar acciones que promuevan la descontaminación del recurso hídrico mediante estrategias de educación ambiental y sistemas individuales de tratamiento de aguas residuales en comunidades rurales del Valle del Cauca.",
    categories: ["Saneamiento básico", "Educación ambiental"]
  },
  {
    id: "Contrato CVC 693",
    year: 2022,
    location: "Buenaventura",
    title: "Contrato CVC 693 de 2022",
    description: "Realizar el llenado de fosas para la recuperación de pasivos ambientales de las áreas afectadas por la minería ilegal de oro aluvial en el río Dagua, en los sectores Los Pereda II y Los Valencia del corregimiento de Córdoba en el municipio de Buenaventura, Valle del Cauca.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio 99-2021",
    year: 2021,
    location: null,
    title: "Convenio 99-2021",
    description: "Implementación de herramientas de manejo del paisaje - HMP, en sistemas de restauración ecológica y el sostenimiento de áreas restauradas, en las cuencas hidrográficas de los Micos, Obando y RUT jurisdicción de la CVC.",
    categories: ["Saneamiento básico"]
  },
  {
    id: "Convenio 017",
    year: 2024,
    location: null,
    title: "Convenio 017 de 2024",
    description: "Aunar esfuerzos técnicos y recursos físicos y económicos para adelantar procesos de restauración ecólogica, mediante el sostenimiento de áreas restauradas en las vigencias anteriores en las cuencas hidrográficas de los ríos Catarina, municipio de Ansermanuevo, Los Micos municipios de La Victoria y Zarzal, Obando municipio de Obando y RUT municipios de La Unión, Roldanillo y Toro jurisdicción de la CVC.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato 656",
    year: 2024,
    location: "Cali",
    title: "Contrato 656 de 2024",
    description: "Realizar la recuperación geomorfológica y de la berma aluvial en los tramos priorizados de los ríos Cali, Aguacatal, Cañaveralejo, Lili y Meléndez, en el marco del proyecto 0505.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio 058",
    year: 2024,
    location: null,
    title: "Convenio 058 de 2024",
    description: "Aunar esfuerzos técnicos, recursos económicos y humanos para realizar el sostenimiento a las acciones de restauración ecológica en ecosistemas reguladores de agua, ejecutadas durante el último semestre del año 2023, en el marco de la implementación de la Estrategía de Acuerdos Recíprocos por el Agua.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio 083",
    year: 2024,
    location: "Cali",
    title: "Convenio 083 de 2024",
    description: "Aunar esfuerzos técnicos, humanos y recursos económicos para la recuperación del arbolado urbano e intervención de árboles en gestión del riesgo, para mejorar las condiciones ambientales en las comunas 7, 19 y corredores víales priorizados en Santiago de Cali.",
    categories: ["Urbanismo"]
  },
  {
    id: "Convenio 133",
    year: 2024,
    location: null,
    title: "Convenio 133 de 2024",
    description: "Aunar esfuerzos técnicos y recursos económicos y humanos, para implementar acciones que promuevan la protección y descontaminación del recurso hídrico, mediante procesos de educación ambiental y alternativas de saneamiento básico en comunidades rurales del Valle del Cauca.",
    categories: ["Saneamiento básico", "Educación ambiental"]
  },
  {
    id: "Convenio 146",
    year: 2024,
    location: "Dagua",
    title: "Convenio 146 de 2024",
    description: "Aunar esfuerzos técnicos, recursos fisicos y económicos para realizar acciones de recuperación ambiental y rehabilitación de áreas priorizadas en proceso de erosión severa, en suelos degradados por intervenciones naturales o antrópicas, en la cuenca de río Dagua (Municipio de Dagua) Valle del Cauca.",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Contrato 546",
    year: 2025,
    location: "Cali",
    title: "Contrato 546 de 2025",
    description: "Realizar obras para la mitigación del riesgo en sitios críticos afectados por movimientos en masa mediante: obras hidraulicas, obras de bioingeniería, recuperación geomorfológica y de la berma aluvial en las quebradas de distrito de Santiago de Cali",
    categories: ["Restauración ecológica"]
  },
  {
    id: "Convenio 031",
    year: 2025,
    location: null,
    title: "Convenio 031 de 2025",
    description: "Aunar esfuerzos técnicos y recursos económicos y humanos, para implementar acciones dirigidas a proteger el recurso hídrico, mediante procesos de educación ambiental e implementaciones complementarias, en comunidades rurales del Valle del Cauca.",
    categories: ["Saneamiento básico", "Educación ambiental"]
  },
  {
    id: "Convenio 094",
    year: 2025,
    location: "Cali",
    title: "Convenio 094 de 2025",
    description: "Aunar esfuerzos técnicos humanos y recursos económicos para la recuperación del arbolado urbano e intervención de árboles en riesgo para mejorar las condiciones ambientales en las comunas 7, 9 y corredores viales priorizados en Santiago de Cali.",
    categories: ["Urbanismo"]
  },
  {
    id: "Convenio 025",
    year: 2025,
    location: "Cali",
    title: "Convenio 025 de 2025",
    description: "Aunar esfuerzos técnicos, administrativos y financieros para fortalecer el ornato de espacios públicos a través de jardines en el Distrito Santiago de Cali, en el marco de la Semana de la Biodiversidad. en atención al proyecto “MEJORAMIENTO DE LA GENERACIÓN DE CONECTIVIDAD ECOLÓGICA Y CONSERVACIÓN DEL ESPACIO PÚBLICO DE SANTIAGO DE CALI. BP-26005472 y FORTALECIMIENTO DEL VIVERO DISTRITAL Y LA RED DE VIVEROS DEL DAGMA PARA SU TRANSICIÓN A NEGOCIO VERDE EN SANTIAGO DE CALI. BP-26005464”.",
    categories: ["Urbanismo"]
  },
  {
    id: "Contrato 858",
    year: 2025,
    location: "Jamundí-Cali",
    title: "Contrato 858 de 2025",
    description: "Realizar acciones de recuperación ambiental y de mitigación de riesgos, en áreas en proceso de erosión severa y en riesgo por avenidas torrenciales en la cuenca Jamundí-Cali, Valle del Cauca.",
    categories: ["Restauración ecológica"]
  }
];