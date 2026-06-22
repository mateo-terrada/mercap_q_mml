const BANCO_PREGUNTAS = [
  {
    "id": "RF-MC-001",
    "categoria": "Renta Fija",
    "subtema": "Relación precio-TIR",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te dice: 'Compré un bono al 100 y ahora veo que cotiza a 95, pero el banco me dice que la TIR subió. ¿Cómo puede ser que el precio baje y la tasa suba al mismo tiempo?' ¿Cuál es la explicación correcta?",
    "opciones": [
      "Es un error del sistema, precio y TIR deberían moverse en el mismo sentido",
      "Precio y TIR se mueven en sentidos opuestos: si el precio baja, el rendimiento exigido (TIR) sube, porque pagás menos por los mismos pagos futuros",
      "La TIR solo cambia si cambia el cupón del bono",
      "El precio bajó porque la TIR bajó, no al revés"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es LA relación que más cuesta interiorizar y la que más preguntan los clientes. Pensalo así: el bono te va a pagar los mismos flujos futuros (cupones + capital) pase lo que pase. Si hoy pagás menos por esos mismos flujos (precio baja), tu rendimiento sobre lo que pagaste es mayor (TIR sube). Es la misma lógica que comprar un electrodoméstico en oferta: si pagás menos por la misma heladera, hiciste mejor negocio relativo. Cuando expliques esto a un cliente, evitá la fórmula y andá directo al ejemplo concreto."
  },
  {
    "id": "RF-MC-002",
    "categoria": "Renta Fija",
    "subtema": "Duration y sensibilidad a tasas",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Tenés dos bonos del mismo emisor y mismo riesgo crediticio: Bono A vence en 2 años, Bono B vence en 10 años. Si el mercado espera una suba de tasas, ¿cuál recomendás a un cliente que no quiere ver pérdidas de precio fuertes en el corto plazo?",
    "opciones": [
      "El Bono B, porque al ser más largo compensa mejor la suba de tasas",
      "El Bono A, porque al tener menor duration es menos sensible a cambios de tasa",
      "Da lo mismo, la duration no afecta la sensibilidad al precio",
      "Ninguno, hay que vender toda la renta fija ante una suba de tasas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Cuanto más lejano el vencimiento, mayor la duration, y mayor la sensibilidad del precio a cambios de tasa (para bien y para mal). Un bono a 10 años va a sufrir un golpe de precio mucho más fuerte ante una suba de tasas que uno a 2 años. Para un cliente conservador que no quiere sobresaltos, acortar duration es una herramienta concreta de gestión de riesgo, no solo un concepto teórico."
  },
  {
    "id": "RF-CASO-001",
    "categoria": "Renta Fija",
    "subtema": "Comunicación al cliente / TIR vs cupón",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente nuevo te llama entusiasmado: vio una Obligación Negociable que paga 'cupón del 9%' y quiere comprar todo lo que pueda porque 'el banco le da 3% nomás'. Vos revisás la pantalla: ese bono hoy cotiza a USD 112 y la TIR real es 6,2%. Escribí en 4-5 líneas cómo le explicarías la diferencia entre el cupón anunciado y lo que realmente va a ganar si lo compra hoy y lo mantiene hasta el vencimiento, sin usar la palabra 'TIR' ni fórmulas.",
    "respuesta_modelo": "Puntos clave a evaluar en la respuesta: (1) que distinga cupón (fijo, definido al emitir) de rendimiento real (depende del precio de compra de hoy), (2) que use una analogía simple y evite jerga técnica, (3) que mencione que como el bono está más caro que su valor original, el rendimiento real es menor al cupón nominal, (4) que cierre con el número aproximado en términos concretos (alrededor de 6% y no 9%)."
  },
  {
    "id": "RF-MC-003",
    "categoria": "Renta Fija",
    "subtema": "Cupón cero / bono a descuento",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un bono 'cupón cero' no paga intereses periódicos. Entonces, ¿cómo gana dinero el inversor que lo compra?",
    "opciones": [
      "No gana nada, son instrumentos sin rendimiento",
      "Lo compra a descuento (por debajo de 100) y al vencimiento cobra el valor nominal completo; la ganancia es esa diferencia",
      "Solo gana si lo vende antes del vencimiento",
      "Gana mediante dividendos trimestrales"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El cupón cero concentra todo el retorno en la diferencia entre lo que pagás hoy (descuento) y lo que cobrás al final (el 100% del nominal). No hay flujos intermedios. Es útil para explicarle a un cliente que se confunde porque 'no ve pagos': el retorno está, pero llega todo junto al vencimiento."
  },
  {
    "id": "RF-MC-004",
    "categoria": "Renta Fija",
    "subtema": "CER",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te dice: 'Quiero un bono CER porque así no pierdo nunca contra la inflación, ¿verdad?' ¿Cuál es la corrección más importante que le harías?",
    "opciones": [
      "Tiene razón, los bonos CER nunca pierden valor",
      "El capital se ajusta por inflación, pero el precio de mercado del bono igual puede subir o bajar, así que sí puede perder valor en el corto plazo aunque esté indexado",
      "Los bonos CER solo sirven si la inflación es muy alta",
      "CER y dólar son exactamente lo mismo"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Acá hay una confusión muy común: la gente piensa que 'ajustado por CER' significa 'protegido siempre'. Pero el bono cotiza en el mercado y su precio puede moverse por tasas reales, demanda, contexto político, etc. El CER protege el capital contra inflación en términos de la fórmula del bono, no protege contra la volatilidad de precio de mercado. Conviene aclarar esto antes de vender el bono como 'sin riesgo'."
  },
  {
    "id": "RF-MC-005",
    "categoria": "Renta Fija",
    "subtema": "Dollar-linked",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente compra un bono dollar-linked pensando que 'es lo mismo que tener dólares'. ¿Qué matiz importante le falta entender?",
    "opciones": [
      "Nada, es exactamente lo mismo que tener dólares en la mano",
      "El bono está en pesos y ajusta según el tipo de cambio OFICIAL, que no necesariamente se mueve igual que el dólar MEP o CCL que el cliente probablemente tiene en mente",
      "El dollar-linked paga en dólares billete al vencimiento",
      "El dollar-linked es lo mismo que un bono CER"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El dollar-linked da cobertura sobre el tipo de cambio oficial, no sobre el dólar financiero (MEP/CCL) que es el que la mayoría de la gente tiene en la cabeza cuando dice 'dólar'. Si la brecha cambiaria se mueve (oficial vs. MEP/CCL se despegan), el dollar-linked puede no cubrir lo que el cliente esperaba. Vale la pena aclarar explícitamente 'a qué dólar' está atado el instrumento."
  },
  {
    "id": "RF-MC-006",
    "categoria": "Renta Fija",
    "subtema": "Bonos duales",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un bono dual paga 'el mejor entre CER o tipo de cambio'. Un cliente concluye: 'entonces es la inversión perfecta, siempre gano lo mejor de los dos mundos'. ¿Qué matiz le falta?",
    "opciones": [
      "Tiene toda la razón, no hay ninguna contra",
      "Esa 'opción' tiene un costo implícito: cuando todo el mercado busca esa cobertura doble, el precio del bono sube y su rendimiento esperado baja, así que 'lo mejor de los dos mundos' no es gratis",
      "Los bonos duales no existen en la práctica",
      "El bono dual paga siempre la opción más baja, no la más alta"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un error de razonamiento común: tratar la opcionalidad como si fuera gratis. El mercado le pone precio a esa 'cobertura doble', así que cuando todos quieren ese instrumento, su rendimiento esperado se comprime. No es un combo mágico sin contrapartida; es una cobertura con un costo de oportunidad implícito en el precio."
  },
  {
    "id": "RF-MC-007",
    "categoria": "Renta Fija",
    "subtema": "Riesgo país / spread soberano",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta: '¿El riesgo país es humo o sirve para algo?' ¿Cuál es la mejor respuesta?",
    "opciones": [
      "Es un invento de los medios, no tiene utilidad real",
      "Sirve como termómetro: refleja el spread (diferencia de rendimiento) que el mercado le exige a la Argentina por sobre un bono considerado más seguro (como el Tesoro de EE.UU.), por el riesgo de no pago",
      "Mide exclusivamente la inflación esperada",
      "Solo importa para el gobierno, no para inversores individuales"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El riesgo país es, en esencia, un spread de crédito: cuánto más exige cobrar el mercado para prestarle a Argentina en vez de a un emisor 'más seguro'. Cuando baja, indica que el mercado percibe menos riesgo de default y eso generalmente impulsa el precio de los bonos soberanos hacia arriba (y baja su TIR). Es un número con sentido económico concreto, no un dato decorativo de los noticieros."
  },
  {
    "id": "RF-MC-008",
    "categoria": "Renta Fija",
    "subtema": "Spread de crédito corporativo vs soberano",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Estás comparando una Obligación Negociable (ON) de una empresa argentina sólida con un bono soberano argentino de duración similar. La ON rinde menos que el soberano. ¿Qué interpretación es razonable?",
    "opciones": [
      "Es imposible, una ON siempre debe rendir más que el soberano",
      "Puede pasar: el mercado a veces percibe a ciertas empresas grandes y exportadoras como mejor riesgo de crédito que el propio Estado, sobre todo si generan dólares genuinos",
      "Significa que hay un error en los datos",
      "Significa que la empresa está por default"
    ],
    "respuesta_correcta": 1,
    "explicacion": "En Argentina es un fenómeno real y vale la pena que lo entienda: algunas empresas exportadoras grandes (energía, agro) pueden tener mejor percepción crediticia que el Estado, porque generan dólares propios y no dependen tanto de la macro local. No es un error de pantalla, es una lectura legítima de riesgo relativo que conviene poder explicarle a un cliente sorprendido."
  },
  {
    "id": "RF-CASO-002",
    "categoria": "Renta Fija",
    "subtema": "Comparación de bonos por duration y yield",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te pregunta cuál de estos dos bonos soberanos hard dollar conviene: Bono X rinde 8,68% con duration 6; Bono Y rinde 7,18% con duration 4,5. Explicá en 5-6 líneas cómo armarías tu respuesta (qué mirás primero, qué le preguntarías al cliente, y qué NO deberías responder).",
    "respuesta_modelo": "Una buena respuesta debería: (1) NO responder automáticamente 'el que más rinde', (2) comparar duration: el Bono X tiene más riesgo de precio ante cambios de tasa o spread, así que el rendimiento extra puede no compensar ese riesgo adicional, (3) preguntar el horizonte y tolerancia a volatilidad del cliente antes de recomendar, (4) plantear el trade-off explícitamente: más yield = generalmente más riesgo de precio (duration) o más riesgo de crédito/liquidez, (5) idealmente mencionar que conviene pensar en escenarios (qué pasa si el spread soberano se mueve) en vez de mirar solo el número estático de yield."
  },
  {
    "id": "RF-MC-009",
    "categoria": "Renta Fija",
    "subtema": "Licitación primaria - tasa de corte",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "En una licitación de Obligaciones Negociables bajo sistema holandés (precio único), la tasa de corte queda en 7,5%. Un cliente había ofertado pidiendo 8,5% (quería cobrar más). ¿Qué pasa con su orden?",
    "opciones": [
      "Entra igual, pero le pagan 7,5% (la tasa de corte)",
      "Se queda afuera de la licitación, porque pidió más tasa de la que la empresa terminó convalidando",
      "Entra solo por la mitad del monto",
      "Entra automáticamente al mejor precio disponible en el mercado secundario"
    ],
    "respuesta_correcta": 1,
    "explicacion": "En el sistema holandés, si pediste una tasa MAYOR a la de corte, quiere decir que le exigiste a la empresa pagar más de lo que finalmente terminó convalidando, así que tu orden queda afuera. Solo entran las ofertas que pidieron una tasa igual o menor a la de corte. Es un punto donde los clientes se confunden seguido: 'pedir más tasa' no es 'pedir mejor precio', es quedar fuera de precio."
  },
  {
    "id": "RF-MC-010",
    "categoria": "Renta Fija",
    "subtema": "Licitación primaria - tramo no competitivo",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente entra al tramo NO competitivo de una licitación (es decir, no ofertó una tasa específica, aceptó 'lo que salga'). La tasa de corte terminó en 7,5%. ¿Qué tasa cobra finalmente este cliente?",
    "opciones": [
      "Cobra una tasa fija predefinida, independiente del resultado de la licitación",
      "Cobra la tasa de corte (7,5%), la misma que obtuvieron los oferentes competitivos que entraron",
      "No cobra ninguna tasa, solo participan del tramo competitivo",
      "Cobra el promedio entre todas las tasas ofertadas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El tramo no competitivo está pensado para inversores más chicos que prefieren asegurar su entrada sin 'apostar' a un número. A cambio de esa certeza de entrar, reciben la tasa de corte que define el mercado (los oferentes competitivos), ni mejor ni peor. Es una buena opción para explicarle a un cliente conservador que no quiere quedar afuera por pedir de más."
  },
  {
    "id": "RF-MC-011",
    "categoria": "Renta Fija",
    "subtema": "Prorrateo en licitaciones",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Una licitación tuvo mucha demanda y el factor de prorrateo terminó siendo 40% (por cada 100 pedido, se entregan 40). Un cliente competitivo que ofertó exactamente en la tasa de corte y pidió USD 50.000, ¿cuánto recibe aproximadamente?",
    "opciones": [
      "USD 50.000 completos, porque ofertó justo en la tasa de corte",
      "Aproximadamente USD 20.000 (el 40% de lo pedido), porque el prorrateo se aplica también a quienes entran justo en la tasa de corte cuando hay sobresuscripción",
      "USD 0, porque ofertar exactamente en la tasa de corte significa quedar afuera",
      "USD 50.000 más un bono extra de compensación"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Entrar en la tasa de corte garantiza que tu orden participa, pero si hubo sobresuscripción (mucha más demanda que monto a emitir), igual te prorratean: te dan una proporción de lo que pediste, no el total. Esto suele sorprender a los clientes que piensan 'si entré, entré completo'. Vale la pena explicarlo antes de la licitación, no después."
  },
  {
    "id": "RF-MC-012",
    "categoria": "Renta Fija",
    "subtema": "Mercado secundario post-licitación",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un bono que se licitó con cupón 7,5% empieza a cotizar en el mercado secundario al día siguiente. Mucha gente se quedó afuera de la licitación y sale a comprarlo, empujando el precio de USD 100 a USD 105. Si un cliente lo compra ahora a USD 105, su rendimiento (TIR) va a ser:",
    "opciones": [
      "Mayor al 7,5%, porque pagó más",
      "Menor al 7,5%, porque pagó más caro por los mismos flujos de pago",
      "Exactamente 7,5%, el precio no afecta la TIR",
      "Imposible de saber sin más datos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Misma lógica de siempre: precio sube, TIR baja. El cupón del 7,5% es fijo, pero como ahora hay que pagar más para acceder a esos mismos flujos, el rendimiento real para quien compra a USD 105 es menor al 7,5% original. Es un excelente ejemplo para mostrarle a un cliente la diferencia entre 'cupón' y 'rendimiento real según el precio de entrada'."
  },
  {
    "id": "RF-MC-013",
    "categoria": "Renta Fija",
    "subtema": "Convención de precios (lámina)",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente nuevo ve en la calculadora de bonos un precio de 'USD 67' para un bono y se asusta: '¿pero entonces compro el bono por 67 dólares en total?' ¿Cómo le explicás la confusión?",
    "opciones": [
      "Tiene razón, ese es el precio total del bono",
      "Ese precio está expresado como porcentaje del valor nominal (convención x100): USD 67 significa que el bono cotiza al 67% de su valor nominal, no que cueste 67 dólares en total",
      "Es un error del sistema, hay que ignorar ese número",
      "Los bonos siempre cuestan exactamente su valor nominal"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta confusión es de las más frecuentes con clientes nuevos. La convención de mostrar el precio como si fuera 'sobre 100' (paridad) hace que un bono que cotiza al 67% del nominal aparezca como '67' en pantalla, lo cual no significa 67 dólares de costo total. Conviene siempre aclarar la unidad antes de que el cliente cargue una orden, para evitar errores de carga por mal entendido de magnitud."
  },
  {
    "id": "RF-MC-014",
    "categoria": "Renta Fija",
    "subtema": "Paridad de bonos",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "¿Qué significa que un bono cotice con una paridad de 40?",
    "opciones": [
      "Que el bono vale 40 dólares fijos",
      "Que el precio de mercado equivale al 40% de su valor nominal",
      "Que paga un cupón del 40% anual",
      "Que tiene 40 años hasta el vencimiento"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La paridad es un atajo rápido para hablar de 'caro o barato' en términos de precio relativo al nominal. Pero ojo: dos bonos con la misma paridad pueden tener TIR y riesgos completamente distintos según su cupón, plazo y estructura. Es útil como primera referencia, no como única variable de decisión."
  },
  {
    "id": "RF-MC-015",
    "categoria": "Renta Fija",
    "subtema": "Cupón cero y sensibilidad a tasas",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "¿Por qué un bono cupón cero es más sensible a cambios de tasa que un bono con cupón alto del mismo vencimiento?",
    "opciones": [
      "Porque tiene más riesgo de default",
      "Porque al no pagar cupones intermedios, todo el flujo se concentra al vencimiento, lo que hace que su duration (y por lo tanto su sensibilidad a tasas) sea más alta",
      "Porque cotiza en una moneda distinta",
      "No es cierto, ambos tienen la misma sensibilidad"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La duration es, en esencia, un promedio ponderado de cuándo recibís tus flujos. Un bono con cupón alto te devuelve plata 'antes' (vía cupones periódicos), lo que acorta esa duration promedio. El cupón cero, al no pagar nada hasta el final, tiene toda su 'masa' de flujo en el vencimiento, lo que lo hace más sensible a cualquier cambio en la tasa de descuento."
  },
  {
    "id": "RF-CASO-003",
    "categoria": "Renta Fija",
    "subtema": "Sensibilidad de precio con duration",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "Tenés un bono con duration 4 y otro con duration 7, ambos con yield similar hoy. El mercado espera un shock de +50 puntos básicos (0,50%) en las tasas. Estimá (de forma aproximada, usando duration) qué bono va a sufrir una caída de precio mayor, y escribí un párrafo de cómo se lo explicarías a un cliente conservador versus uno agresivo.",
    "respuesta_modelo": "El bono de duration 7 va a caer aproximadamente el doble que el de duration 4 ante el mismo shock de tasas (aprox. -3,5% vs -2%, usando duration como aproximación lineal: %cambio de precio ≈ -duration x cambio de yield). Para el cliente conservador: enfatizar que el bono más largo puede mostrar caídas de precio más marcadas en el corto plazo, aunque a largo plazo el efecto se diluye si se mantiene hasta el vencimiento; sugerir acortar duration si no tolera ver el número en rojo. Para el cliente agresivo: se puede plantear que la mayor sensibilidad también juega a favor si las tasas bajan, así que el bono largo puede ser una apuesta táctica si el escenario esperado es de compresión de tasas. La respuesta debe distinguir claramente 'riesgo de precio en el camino' de 'rendimiento si se sostiene hasta el final'."
  },
  {
    "id": "OP-MC-001",
    "categoria": "Operatoria de Mercado",
    "subtema": "Liquidación CI vs T+1",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te escribe el lunes a la mañana: 'Necesito tener los dólares en mi cuenta bancaria HOY mismo, vendo lo que sea'. Tenés bonos en cartera que operan tanto en CI (contado inmediato) como en T+1. ¿Qué le decís?",
    "opciones": [
      "Que da igual, en ambos casos el dinero está disponible el mismo día",
      "Que para tener el dinero disponible el mismo día hay que vender en CI (liquida en el día); si vende en T+1, el dinero recién va a estar disponible al día hábil siguiente",
      "Que no se puede vender el mismo día bajo ninguna modalidad",
      "Que solo los bonos en pesos liquidan en el día"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta pregunta aparece todo el tiempo en la práctica diaria, sobre todo con clientes apurados. CI (contado inmediato, T+0) liquida el mismo día; T+1 liquida al día hábil siguiente. Si el cliente tiene urgencia real, hay que operar en CI y avisarle con anticipación, porque la diferencia de un día puede ser la diferencia entre cumplir o no con un pago que tenía comprometido."
  },
  {
    "id": "OP-MC-002",
    "categoria": "Operatoria de Mercado",
    "subtema": "Caja de puntas / spread",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Una acción tiene en la caja de puntas: mejor compra (bid) $49, mejor venta (ask) $50. Un cliente pregunta por qué a veces 'paga más de lo que ve en pantalla'. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Es un error de la plataforma",
      "Si compra a mercado, se ejecuta contra el mejor precio de venta disponible (el ask, $50), no contra el precio de compra ($49) que es lo que ve como referencia más baja; esa diferencia es el spread",
      "Siempre paga el promedio entre bid y ask",
      "El precio en pantalla es solo informativo y no se puede operar a ese valor"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El spread (diferencia entre bid y ask) es un costo implícito que muchos clientes no perciben porque están acostumbrados a mirar 'el último precio operado', no la caja de puntas completa. Comprar a mercado significa cruzar al ask; vender a mercado significa cruzar al bid. Explicar esto de entrada evita la sorpresa de 'compré más caro de lo que vi'."
  },
  {
    "id": "OP-MC-003",
    "categoria": "Operatoria de Mercado",
    "subtema": "Orden límite vs orden a mercado",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere comprar un bono poco líquido (poca profundidad en la caja de puntas) y no tiene apuro. ¿Qué tipo de orden recomendás como primera opción?",
    "opciones": [
      "Orden a mercado, para asegurar la ejecución inmediata",
      "Orden límite, fijando un precio máximo aceptable, aunque la ejecución no sea inmediata",
      "No se puede operar bonos poco líquidos bajo ninguna modalidad",
      "Orden stop-loss, para protegerse de pérdidas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "En activos poco líquidos, una orden a mercado puede ejecutarse a precios muy desfavorables porque 'barre' varias líneas de la caja de puntas. Si el cliente no tiene urgencia, la orden límite da control de precio a cambio de aceptar que tal vez no se ejecute de inmediato (o no se ejecute del todo). Es el trade-off central que hay que poder explicar: precio vs. probabilidad de ejecución."
  },
  {
    "id": "OP-CASO-001",
    "categoria": "Operatoria de Mercado",
    "subtema": "Spread grande y poca profundidad",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te insiste con comprar YA un bono que tiene spread grande y poca profundidad porque 'vio una oportunidad'. Proponé en 5-6 líneas dos alternativas (una agresiva y una conservadora), especificando para cada una tipo de orden, precio aproximado y qué riesgo asume. Cerrá con tu recomendación.",
    "respuesta_modelo": "Alternativa agresiva: orden a mercado o límite muy cercano al ask, para asegurar entrada inmediata; riesgo: paga el spread completo y puede sufrir slippage si la cantidad excede la primera línea de la caja de puntas. Alternativa conservadora: orden límite por debajo del ask actual (por ejemplo, cerca del bid o un poco por encima), aceptando que puede no ejecutarse hoy o ejecutarse solo parcialmente; riesgo: 'perderse' la oportunidad si el precio sigue subiendo sin tocar ese nivel. Recomendación final: depende de cuán convencido está el cliente de la oportunidad y de su tolerancia a pagar de más por seguridad de ejecución; en general, para un cliente que 'no tiene apuro real' (solo entusiasmo), conviene la alternativa conservadora."
  },
  {
    "id": "OP-MC-004",
    "categoria": "Operatoria de Mercado",
    "subtema": "Orden iceberg",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente institucional necesita comprar un monto grande de un bono respecto al volumen habitual. ¿En qué escenario tiene sentido usar una orden iceberg (que muestra solo una parte de la cantidad total)?",
    "opciones": [
      "Siempre, en cualquier operación grande, sin excepción",
      "Cuando el tamaño es grande respecto a la liquidez disponible y se busca minimizar el impacto de mercado, evitando que otros participantes 'se adelanten' al ver la orden completa",
      "Solo quiere usarse en mercados muy líquidos donde no hay riesgo de impacto",
      "Iceberg es lo mismo que una orden stop-loss"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El iceberg sirve específicamente para ocultar el tamaño real de una orden grande, evitando que el mercado reaccione anticipadamente y mueva el precio en contra. No es magia: si el activo es muy ilíquido, igual puede haber costo de ejecución, pero ayuda a reducirlo en comparación con mostrar la orden completa de una sola vez."
  },
  {
    "id": "OP-MC-005",
    "categoria": "Operatoria de Mercado",
    "subtema": "Orden stop vs stop-limit",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere protegerse de una caída fuerte en una acción con una orden stop-loss tradicional. ¿Qué le advertís?",
    "opciones": [
      "Que el stop le garantiza vender exactamente al precio que él definió",
      "Que cuando se activa el stop, generalmente se convierte en una orden a mercado, así que en un mercado muy volátil o con gaps de precio puede ejecutarse a un precio peor del esperado",
      "Que las órdenes stop no existen en el mercado argentino",
      "Que el stop solo funciona para compras, nunca para ventas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Un error frecuente es pensar que el stop-loss 'garantiza' el precio de salida. En realidad, una vez activado, suele dispararse como orden a mercado, lo que significa que en momentos de alta volatilidad (gaps, baja liquidez) puede ejecutarse bastante por debajo del nivel que el cliente tenía en mente. Para más control de precio (a costa de no garantizar ejecución), existe la variante stop-limit."
  },
  {
    "id": "OP-MC-006",
    "categoria": "Operatoria de Mercado",
    "subtema": "Slippage",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "¿Qué es el slippage y por qué un asesor debería tenerlo en cuenta al estimar costos de una operación grande?",
    "opciones": [
      "Es una comisión fija que cobra el broker",
      "Es la diferencia entre el precio esperado y el precio real de ejecución, que puede aparecer al cruzar varias líneas de la caja de puntas con una orden grande o en mercados volátiles; es un costo 'invisible' que no figura como comisión pero igual afecta el resultado",
      "Es un impuesto que se aplica solo a operaciones en dólares",
      "Es lo mismo que el spread bid-ask"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Muchos clientes (y asesores nuevos) solo miran la comisión explícita y olvidan el slippage, que muchas veces termina siendo más relevante en el costo total de la operación, especialmente en activos poco líquidos o con órdenes grandes a mercado. Parte del valor que aporta un buen asesor es justamente anticipar y minimizar este costo invisible."
  },
  {
    "id": "OP-MC-007",
    "categoria": "Operatoria de Mercado",
    "subtema": "Especie ARS/D/C",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Antes de confirmar cualquier orden, ¿qué dos chequeos operativos básicos siempre deberías hacer (más allá del precio)?",
    "opciones": [
      "Solo el monto a invertir",
      "La especie (en qué moneda/segmento se opera: pesos, dólar MEP, dólar cable) y el plazo de liquidación (CI o T+1)",
      "Solo el nombre del cliente",
      "El horario de cierre de la rueda, nada más"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un chequeo simple pero crítico: operar la especie equivocada (por ejemplo, cargar en 'D' cuando el cliente quería 'C', o al revés) o el plazo equivocado puede generar errores costosos y difíciles de revertir. Convertirlo en hábito antes de cada confirmación de orden previene la mayoría de los errores operativos evitables."
  },
  {
    "id": "OP-CASO-002",
    "categoria": "Operatoria de Mercado",
    "subtema": "Preguntas típicas sin jerga",
    "dificultad": "basica",
    "tipo": "caso_abierto",
    "enunciado": "Redactá una respuesta corta (3-5 líneas), profesional y sin tecnicismos, para esta pregunta de un cliente: '¿Por qué no compramos a mercado y listo? ¿Para qué complicarse con una orden límite?'",
    "respuesta_modelo": "Una buena respuesta debería explicar: que una orden a mercado prioriza la velocidad de ejecución por sobre el control del precio, lo cual puede salir caro si el activo tiene poca liquidez o spread grande, porque podés terminar pagando un precio bastante peor al que viste en pantalla. La orden límite te da control sobre el precio máximo (o mínimo) que aceptás, a cambio de aceptar que quizás no se ejecute de inmediato. La elección depende de si lo que más te importa es la velocidad o el precio."
  },
  {
    "id": "OP-MC-008",
    "categoria": "Operatoria de Mercado",
    "subtema": "Precio limpio vs precio sucio",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente nota que el precio de un bono 'sube un poco cada día' aunque el mercado parece estar tranquilo, y se preocupa pensando que algo raro está pasando. ¿Cuál es la explicación más probable?",
    "opciones": [
      "Hay manipulación de precios",
      "Es el efecto del cupón corrido acumulándose día a día en el precio 'sucio' (dirty price), que incluye los intereses devengados desde el último pago de cupón",
      "El bono está por hacer default",
      "Es un error de la plataforma que hay que reportar"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El precio sucio (dirty price) incluye el cupón corrido, que se va acumulando día a día entre pagos de cupón. Esto hace que el precio 'suba' levemente de forma constante sin que haya ningún movimiento real de mercado. El precio limpio excluye ese efecto. Es importante saber distinguir esto para no generar alarma innecesaria en un cliente atento que mira la pantalla todos los días."
  },
  {
    "id": "PORT-MC-001",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Rebalanceo",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Armaste una cartera moderada con 50% renta variable y 30% renta fija para un cliente. Después de un año muy bueno para las acciones, la cartera quedó en 65% renta variable y 20% renta fija. ¿Qué deberías hacer, en principio?",
    "opciones": [
      "Nada, dejar correr porque está ganando",
      "Vender parte de la renta variable y recomponer renta fija, para volver al perfil de riesgo original del cliente (rebalanceo)",
      "Vender toda la renta fija y pasar 100% a renta variable, ya que está funcionando mejor",
      "Esperar a que la renta variable baje para recién ahí actuar"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El portafolio 'se corrió' de su perfil de riesgo original: ahora tiene más exposición a renta variable de la que el cliente había aceptado. El rebalanceo no es una apuesta de mercado, es disciplina: vender lo que subió y recomponer lo que bajó de peso relativo, para sostener el riesgo que el cliente realmente eligió. Es contraintuitivo (estás vendiendo lo que 'viene bien'), pero es justamente lo que evita que un cliente termine con más riesgo del que toleraría psicológicamente ante una caída."
  },
  {
    "id": "PORT-MC-002",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Diversificación",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere poner el 80% de su cartera en una sola acción 'porque está muy convencido de la empresa'. ¿Cuál es el riesgo principal que le señalás?",
    "opciones": [
      "Ninguno, si está convencido es una buena decisión",
      "Concentración: si a esa empresa puntual le va mal (por motivos propios, no del mercado en general), gran parte del patrimonio del cliente se ve afectado; diversificar reduce esa dependencia de un solo emisor",
      "El único riesgo es el de tipo de cambio",
      "Que la acción no paga dividendos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La convicción sobre una empresa no elimina el riesgo de concentración. Diversificar no es 'no creer' en ninguna inversión, es reconocer que ninguna convicción es 100% infalible y que el costo de estar equivocado en una posición muy concentrada es mucho mayor que en una cartera diversificada. Vale la pena cuantificar el riesgo: ¿qué pasa con el patrimonio del cliente si esa empresa puntual cae 40%?"
  },
  {
    "id": "PORT-MC-003",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Perfil del inversor",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente de 60 años, a punto de jubilarse, te pide que le arms una cartera 'agresiva' porque escuchó que 'así se gana más rápido'. ¿Cuál es tu primer paso como asesor?",
    "opciones": [
      "Armar la cartera agresiva tal cual la pide, porque el cliente siempre tiene la razón",
      "Indagar su horizonte real, necesidad de liquidez y tolerancia emocional a la volatilidad antes de avanzar; un horizonte corto y necesidad cercana de los fondos suele ser incompatible con un perfil agresivo, más allá de lo que el cliente 'cree' querer",
      "Negarse directamente a trabajar con ese cliente",
      "Armar una cartera 100% conservadora sin consultarle, por las dudas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El pedido del cliente ('quiero agresivo') no siempre coincide con lo que realmente le conviene dado su horizonte y necesidad de liquidez. El trabajo del asesor es diagnosticar el problema real detrás del pedido literal, no ejecutar órdenes ciegamente. Esto no significa imponer la propia opinión, sino educar sobre el trade-off antes de avanzar, dejando la decisión final informada en manos del cliente."
  },
  {
    "id": "PORT-CASO-001",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Cliente emocional en caída de mercado",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "El mercado cayó fuerte esta semana. Un cliente con perfil moderado te manda un audio alterado: 'Vendamos todo, esto se va a cero'. Su horizonte de inversión es de 5 años y no necesita el dinero en el corto plazo. Redactá cómo le responderías, en no más de 6 líneas, combinando contención emocional, un argumento racional y una propuesta concreta (no tiene que ser 'no hacer nada', pero tiene que estar justificada).",
    "respuesta_modelo": "Una buena respuesta debería: (1) validar la emoción sin alimentar el pánico ('entiendo que asusta ver números en rojo'), (2) traer de vuelta el horizonte y el plan original ('armamos esta cartera pensando en 5 años, no en esta semana'), (3) ofrecer algo concreto y proporcionado, no todo o nada (por ejemplo: revisar si vale la pena un pequeño ajuste de riesgo, no liquidar todo). Lo que NO debería hacer: prometer que el mercado va a recuperarse pronto, ni ceder automáticamente a vender todo solo para calmar al cliente en el momento. El objetivo del ejercicio es practicar sostener un plan sin ser frío ni alimentar la ansiedad."
  },
  {
    "id": "PORT-MC-004",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Liquidez en la cartera",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "María tiene 58 años, vendió un departamento y tiene USD 70.000 en pesos argentinos. Te pide 'algo seguro' y le angustian las pantallas en rojo, pero también le preocupa perder poder adquisitivo si el peso se devalúa. ¿Qué elemento NO podés dejar afuera del diseño de su cartera?",
    "opciones": [
      "Una porción de liquidez disponible sin plazo, separada de lo que se invierte a más largo plazo",
      "Invertir el 100% en una sola acción de alto crecimiento",
      "No definir ninguna regla de cuánto queda líquido, para no 'perder rendimiento'",
      "Ignorar el riesgo cambiario porque pidió 'algo seguro' en pesos"
    ],
    "respuesta_correcta": 0,
    "explicacion": "Para un perfil como el de María (conservador, con angustia ante la volatilidad, pero también preocupación por el poder adquisitivo), es clave definir explícitamente una regla de liquidez: cuánto queda disponible de forma inmediata y cuánto se invierte a plazo. Esto da tranquilidad emocional (sabe que tiene un colchón accesible) y permite diseñar el resto de la cartera con más foco en preservar poder adquisitivo, sin que la ansiedad por liquidez contamine cada decisión."
  },
  {
    "id": "PORT-MC-005",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Asignación por bloques",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Walter tiene 35 años, ingresos estables, puede ahorrar USD 500 por mes y quiere 'armar algo a largo plazo', tolerando caídas moderadas. Te pregunta: 'Si los CEDEARs rinden más, ¿por qué no voy 100% CEDEARs?' ¿Cuál es la mejor respuesta?",
    "opciones": [
      "Tiene razón, conviene ir 100% a lo que más rindió históricamente",
      "Que el rendimiento pasado no garantiza el futuro, y que ir 100% a un solo tipo de activo lo deja sin diversificación de moneda, sector y clase de activo, aumentando la volatilidad de su cartera más allá de lo que probablemente tolere en una caída fuerte",
      "Que los CEDEARs no son una inversión seria",
      "Que la pregunta no tiene sentido"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es una pregunta clásica de cliente con ahorro mensual que mira rendimientos pasados y quiere extrapolarlos. La respuesta no es decir que está mal entusiasmarse, sino mostrar el costo de la concentración: menos diversificación implica más volatilidad, y en una caída fuerte concentrada en un solo tipo de activo, la reacción emocional del cliente (vender en el peor momento) puede ser mucho más dañina que el rendimiento extra que buscaba."
  },
  {
    "id": "PORT-MC-006",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Correlación",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "¿Por qué armar una cartera con activos de baja o negativa correlación entre sí reduce el riesgo total, aunque cada activo individual siga siendo volátil?",
    "opciones": [
      "Porque la baja correlación elimina por completo el riesgo de cada activo individual",
      "Porque cuando los activos no se mueven exactamente igual entre sí, las pérdidas de unos pueden compensarse parcialmente con el comportamiento de otros, suavizando la variabilidad total de la cartera aunque cada activo individual mantenga su propio riesgo",
      "Porque la correlación no tiene ningún efecto real sobre el riesgo de cartera",
      "Porque los activos de baja correlación siempre rinden más"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es la base conceptual de la diversificación moderna: no se trata solo de 'tener varios activos', sino de elegir activos que no se muevan todos en la misma dirección al mismo tiempo. Esto es lo que realmente reduce la volatilidad agregada de la cartera, más allá de cuántos activos distintos tengas. Es útil para explicarle a un cliente por qué 'tener 10 acciones del mismo sector' no diversifica tanto como parece."
  },
  {
    "id": "PORT-CASO-002",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Diagnóstico del problema real del cliente",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te dice: 'Quiero dólares'. Describí en 4-5 líneas qué preguntas le harías antes de simplemente venderle dólares o un instrumento dollar-linked, y por qué el pedido literal puede no reflejar la necesidad real.",
    "respuesta_modelo": "Buenas preguntas a indagar: ¿para qué necesita los dólares (ahorro, pago concreto en el exterior, cobertura contra inflación, miedo a una devaluación)?, ¿cuándo los necesitaría?, ¿qué lo preocupa más: perder poder adquisitivo en pesos o directamente no tener dólares físicos disponibles? El punto central del ejercicio es mostrar que 'quiero dólares' puede esconder necesidades muy distintas (cobertura de inflación, necesidad de pago real en moneda extranjera, ansiedad generalizada), y cada una sugiere una solución distinta: no es lo mismo recomendar dólar billete, que un bono dollar-linked, que un bono CER, según cuál sea el verdadero problema detrás del pedido."
  },
  {
    "id": "PORT-MC-007",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Diversificación por moneda",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "¿Por qué un portafolio armado en Argentina típicamente combina instrumentos en pesos (ej. ajustados por CER) con instrumentos en dólares (ej. bonos soberanos en USD, CEDEARs)?",
    "opciones": [
      "Porque la ley obliga a tener ambas monedas",
      "Para diversificar el riesgo cambiario: si el peso se devalúa fuertemente, las posiciones en dólares actúan como resguardo del poder adquisitivo, mientras que los instrumentos en pesos pueden ofrecer mejor rendimiento relativo en contextos de estabilidad",
      "Porque los instrumentos en pesos no tienen ningún riesgo",
      "No hay ninguna razón particular, es solo costumbre del mercado"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La diversificación por moneda es central en el contexto argentino, dado el historial de volatilidad cambiaria. No se trata de elegir 'pesos o dólares' como una apuesta binaria, sino de construir una cartera que no dependa enteramente de un solo escenario macro. Es uno de los conceptos que más vale la pena dominar para trabajar con clientes locales."
  },
  {
    "id": "PORT-MC-008",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Fondos comunes vs instrumentos individuales",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente con un monto chico para invertir quiere diversificar en varias acciones argentinas, pero el monto no le alcanza para comprar muchas especies distintas sin pagar comisiones excesivas en cada una. ¿Qué alternativa le proponés?",
    "opciones": [
      "Que invierta todo en una sola acción, total 'es lo que hay'",
      "Un Fondo Común de Inversión (FCI) de renta variable local, que con una sola operación le da exposición a varias empresas a la vez",
      "Que espere a ahorrar más dinero antes de invertir nada",
      "Que abra una cuenta en el exterior, aunque el monto sea chico"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Para montos chicos, los FCI son una herramienta muy práctica de diversificación instantánea: con una sola decisión y una sola comisión, el cliente accede a una canasta de activos en vez de tener que comprar uno por uno (lo cual sería caro e impráctico en montos pequeños). Vale la pena tenerlo presente como primera alternativa para clientes que recién empiezan."
  },
  {
    "id": "PORT-MC-009",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Rotación táctica - ratio relativo",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Estás evaluando una rotación táctica entre dos acciones del mismo sector (Empresa X e Y). El ratio de market cap X/Y está en 2,75x, mientras el promedio histórico de los últimos años ronda 2,43x. ¿Qué interpretación es la más razonable para plantear una rotación?",
    "opciones": [
      "Que la Empresa X es definitivamente mejor negocio que la Empresa Y",
      "Que, en términos relativos, X viene sobreperformando a Y respecto a su relación histórica, lo cual puede sugerir una oportunidad táctica de rotar de X hacia Y apostando a una convergencia del ratio hacia su promedio, sin que esto implique una preferencia estructural por una empresa sobre la otra",
      "Que hay que vender ambas acciones inmediatamente",
      "El ratio de market cap no tiene ninguna utilidad práctica"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Este es un ejemplo de trade de valor relativo: no se trata de creer que una empresa es 'mejor' que la otra de forma permanente, sino de identificar que la relación de precios entre ambas se alejó de su promedio histórico y podría volver a acercarse. Es importante explicarle al cliente que este tipo de trade es táctico y conlleva su propio riesgo (el ratio puede seguir alejándose en vez de converger), no es una certeza."
  },
  {
    "id": "PORT-MC-010",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Rotación por compresión de TIR",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un bono que el cliente tiene en cartera subió mucho de precio y ahora su TIR quedó en apenas 3,5% anual en dólares, un nivel que considerás poco atractivo para el riesgo que implica. ¿Qué argumento usarías para proponerle al cliente tomar ganancias y rotar hacia otra alternativa?",
    "opciones": [
      "Que el bono va a caer a cero pronto, así que hay que salir ya",
      "Que, desde estas paridades, el potencial de retorno futuro es limitado y no compensa adecuadamente el riesgo asumido; tomar ganancias ahora permite asegurar lo ganado y reasignar el capital hacia oportunidades con mejor relación riesgo-retorno",
      "Que no hay ningún motivo para vender un bono que subió",
      "Que hay que vender porque el cliente lo pide, sin ningún análisis adicional"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es la lógica real detrás de muchas rotaciones de cartera: un activo puede haber sido una excelente inversión en el pasado y, justamente por eso (porque subió mucho), dejar de ser atractivo hacia adelante. El trabajo del asesor es identificar cuándo el rendimiento esperado futuro ya no justifica mantener la posición, y comunicarlo en términos de 'tomar ganancias' en vez de 'esto va a caer', que sería alarmista e impreciso."
  },
  {
    "id": "PORT-CASO-003",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Encaje de una acción individual en cartera",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te pregunta si vale la pena invertir en una acción puntual que está de moda ('todo el mundo la compra'). Listá en 5-6 líneas qué aspectos mirarías antes de responder, y qué le dirías si el cliente quiere poner un porcentaje desmedido de su cartera en esa única acción.",
    "respuesta_modelo": "Aspectos a mirar (mínimo 4-5 de estos): el negocio de la empresa y de qué gana dinero, evolución de ingresos y ganancias, márgenes, nivel de deuda, valuación relativa a comparables del sector, riesgos cualitativos del negocio. Respecto al tamaño de la posición: aunque el análisis fundamental sea positivo, hay que explicarle al cliente que ninguna convicción individual debería significar arriesgar una porción desproporcionada del patrimonio total; conviene fijar un límite razonable de concentración (por ejemplo, un porcentaje acotado del portafolio) y explicar el motivo: si la empresa decepciona, el impacto en el patrimonio total del cliente debe ser manejable, no catastrófico."
  },
  {
    "id": "PORT-MC-011",
    "categoria": "Portafolios y Asesoramiento",
    "subtema": "Costos y liquidez al elegir instrumentos",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Al armar una cartera, además del rendimiento esperado, ¿qué otros dos factores prácticos siempre hay que evaluar al elegir los instrumentos específicos?",
    "opciones": [
      "El color del logo de la empresa y la cantidad de seguidores en redes sociales",
      "Costos de transacción (comisiones, spreads) y liquidez del activo (facilidad para comprar/vender sin mover mucho el precio)",
      "Solo el nombre del fondo o la marca del emisor",
      "Nada más, el rendimiento esperado es el único factor relevante"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Un activo con un rendimiento esperado atractivo en el papel puede no ser una buena elección si tiene poca liquidez (difícil de vender sin afectar el precio) o costos de transacción elevados que erosionan ese rendimiento. Parte del criterio profesional del asesor es chequear estos factores prácticos antes de recomendar, no solo mirar el número de rendimiento aislado."
  },
  {
    "id": "MACRO-MC-001",
    "categoria": "Macro Argentina",
    "subtema": "Riesgo país - definición aplicada",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te pregunta: '¿Qué es exactamente el riesgo país? Lo escucho todo el tiempo en las noticias pero no entiendo qué mide.' ¿Cuál es la mejor explicación?",
    "opciones": [
      "Es un índice que mide cuántos turistas visitan el país por año",
      "Es la diferencia de rendimiento (spread) que el mercado exige a los bonos argentinos por sobre un bono considerado más seguro (como el Tesoro de EE.UU.), como compensación por el riesgo de que Argentina no pueda pagar su deuda",
      "Es un impuesto que cobra el gobierno a las inversiones extranjeras",
      "Es lo mismo que la tasa de inflación"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El riesgo país (en su forma más usada, el índice EMBI o similar) es un spread de crédito: cuántos puntos básicos extra exige el mercado para prestarle a Argentina en vez de a EE.UU. Cuando baja, indica que el mercado percibe menor probabilidad de default; cuando sube, lo contrario. Es un número con lógica económica concreta detrás, útil para explicarle al cliente por qué los bonos soberanos suben o bajan en bloque."
  },
  {
    "id": "MACRO-MC-002",
    "categoria": "Macro Argentina",
    "subtema": "Riesgo país y precio de bonos",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Si el riesgo país argentino comprime (baja) de forma sostenida, ¿qué efecto esperarías, en principio, sobre el precio de los bonos soberanos en dólares?",
    "opciones": [
      "Ningún efecto, son cosas independientes",
      "El precio de los bonos soberanos debería subir, porque al bajar el riesgo percibido, el mercado exige menos rendimiento (TIR) para sostenerlos, y precio y TIR se mueven inversamente",
      "El precio debería bajar, porque hay menos interés en el país",
      "Solo afecta a las acciones, no a los bonos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta conexión es central para tu trabajo diario: riesgo país y precio de bonos soberanos están directamente vinculados. Si el riesgo país baja, significa que el spread exigido es menor, lo que implica menor TIR exigida, lo que (con la relación inversa precio-TIR) implica mayor precio. En contextos de fuerte compresión de riesgo país, el equity local también suele beneficiarse, porque mejora el clima general de inversión hacia activos argentinos."
  },
  {
    "id": "MACRO-MC-003",
    "categoria": "Macro Argentina",
    "subtema": "Calificación crediticia",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Una agencia calificadora (como S&P o Fitch) sube la nota soberana de Argentina (por ejemplo, de CCC+ a B-). ¿Qué relación tiene esto, en general, con el riesgo país y el precio de los bonos?",
    "opciones": [
      "Ninguna relación, son cosas completamente separadas",
      "Una mejora de calificación suele ir acompañada de una compresión del riesgo país y una suba en el precio de los bonos, porque refleja una mejor percepción de la capacidad/voluntad de pago del país",
      "Una mejora de calificación siempre hace bajar el precio de los bonos",
      "Las calificadoras solo afectan a las acciones, no a la renta fija"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Las calificaciones crediticias son una de las señales que el mercado mira para formar su percepción de riesgo. Una mejora de nota no garantiza nada por sí sola, pero suele coincidir con (o gatillar) una compresión de riesgo país y una suba de precios en bonos soberanos, porque reduce la probabilidad percibida de default. Vale la pena que sepas explicarle a un cliente la cadena completa: mejora de rating → mejora percepción de riesgo → compresión de riesgo país → suba de precio de bonos."
  },
  {
    "id": "MACRO-MC-004",
    "categoria": "Macro Argentina",
    "subtema": "Brecha cambiaria",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te pregunta: '¿Por qué hay tantos dólares distintos en Argentina? Vi que el oficial, el MEP y el CCL no son lo mismo.' ¿Cuál es la explicación más clara?",
    "opciones": [
      "Son exactamente el mismo precio, solo cambia el nombre",
      "Son distintas formas de acceder a dólares con diferentes mecanismos y regulaciones: el oficial es el tipo de cambio regulado por el Banco Central, mientras que MEP y CCL surgen de operar instrumentos financieros en el mercado, y su precio puede diferir del oficial según la brecha cambiaria del momento",
      "El MEP y el CCL solo existen para empresas, nunca para personas físicas",
      "La brecha cambiaria desapareció hace años en Argentina"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La existencia de múltiples tipos de cambio (oficial, MEP, CCL, entre otros) es una particularidad muy argentina, producto de regulaciones cambiarias. La 'brecha' es la diferencia porcentual entre estos dólares. Es importante que el cliente entienda que no son intercambiables sin más: acceder a cada uno tiene su propio mecanismo, costos y a veces restricciones."
  },
  {
    "id": "MACRO-MC-005",
    "categoria": "Macro Argentina",
    "subtema": "MEP vs CCL - diferencia práctica",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere dolarizar parte de sus ahorros pero los dólares los necesita disponibles en su cuenta local en Argentina, no afuera. ¿Qué operatoria le corresponde?",
    "opciones": [
      "Dólar CCL (cable), porque siempre conviene sacar los dólares al exterior",
      "Dólar MEP, porque el resultado son dólares acreditados en su cuenta local, mientras que el CCL está pensado para quienes quieren los dólares fuera del país",
      "Da exactamente lo mismo cuál elija",
      "Ninguna de las dos sirve para ese objetivo"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La diferencia operativa central entre MEP y CCL es el destino final de los dólares: MEP los deja disponibles localmente (en la cuenta comitente argentina), CCL permite transferirlos a una cuenta en el exterior. El mecanismo de compra (comprar un activo en pesos y venderlo en su variante en dólares) es similar; lo que cambia es el ticker (terminación D para MEP, C para CCL/cable) y el destino de los fondos."
  },
  {
    "id": "MACRO-MC-006",
    "categoria": "Macro Argentina",
    "subtema": "Parking en operaciones MEP/CCL",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente que es una persona jurídica (empresa) quiere comprar un bono en pesos hoy y venderlo en su versión MEP el mismo día para dolarizarse rápido. ¿Qué le advertís?",
    "opciones": [
      "Que no hay ninguna restricción, puede hacerlo el mismo día sin problema",
      "Que para personas jurídicas puede seguir aplicando el 'parking' (un plazo mínimo de permanencia, históricamente 1 día hábil) antes de poder vender en la otra moneda, así que conviene planificar con un día de anticipación y considerar que el precio puede moverse en el medio",
      "Que las personas jurídicas no pueden operar MEP bajo ninguna circunstancia",
      "Que el parking aplica únicamente a personas físicas, nunca a empresas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un detalle operativo importante y que cambia según el tipo de cliente: para personas humanas, el parking en principio ya no aplica, pero para personas jurídicas puede seguir vigente. Conviene siempre confirmar la normativa vigente al momento de operar (puede cambiar) y explicarle al cliente jurídico que hay un día de exposición a movimiento de precio entre la compra y la venta si el parking aplica."
  },
  {
    "id": "MACRO-CASO-001",
    "categoria": "Macro Argentina",
    "subtema": "Brecha cambiaria - comunicación al cliente",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente compara el dólar MEP con el dólar CCL y te pregunta por qué uno suele cotizar más caro que el otro si 'al final ambos son dólares'. Explicá en 4-5 líneas, sin tecnicismos, una razón posible de esa diferencia (brecha entre MEP y CCL) y qué implica para él en términos prácticos.",
    "respuesta_modelo": "Una buena respuesta debería mencionar que, aunque ambos representan formas de acceder a dólares, tienen mecanismos, demanda y a veces restricciones distintas (por ejemplo, el CCL involucra movimiento de fondos al exterior, lo cual puede tener mayor demanda en ciertos momentos por necesidades de dolarización fuera del país). La diferencia entre ambos (la 'brecha' entre MEP y CCL) puede ampliarse o comprimirse según el contexto de mercado y las expectativas. En términos prácticos para el cliente: el costo de 'sacar' dólares afuera (CCL) puede ser distinto al de tenerlos disponibles localmente (MEP), así que conviene elegir según su necesidad real, no asumiendo que ambos cuestan lo mismo en todo momento."
  },
  {
    "id": "MACRO-MC-007",
    "categoria": "Macro Argentina",
    "subtema": "Inflación e IPC",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te pregunta por qué le importa, como inversor, el dato mensual de inflación (IPC) que publica el INDEC. ¿Cuál es la respuesta más completa?",
    "opciones": [
      "No le importa en absoluto si invierte en dólares",
      "Porque afecta el poder adquisitivo de sus tenencias en pesos, influye en las expectativas de tasa de interés y es la base de ajuste de instrumentos indexados como los bonos CER; además, sorpresas en el dato (mejor o peor a lo esperado) suelen mover los precios de los bonos en pesos",
      "Solo le importa al gobierno, no a un inversor individual",
      "El IPC y la inflación son cosas completamente distintas sin relación"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La inflación es un dato central para cualquier inversor en pesos argentinos, incluso para quien tiene parte de su cartera en dólares (porque afecta expectativas de tipo de cambio, tasas y el contexto macro general). Cuando el dato de IPC sale distinto a lo esperado por el mercado (REM o consenso de analistas), suele generar movimientos en la curva de bonos en pesos, especialmente en los ajustados por CER y en la tasa fija."
  },
  {
    "id": "MACRO-MC-008",
    "categoria": "Macro Argentina",
    "subtema": "Inflación núcleo vs general",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente lee que 'la inflación núcleo bajó más que la general' y te pregunta qué significa eso. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Son exactamente lo mismo, solo cambia el nombre",
      "La inflación núcleo excluye los rubros más volátiles o estacionales (como ciertos alimentos o regulados), y suele considerarse una medida más representativa de la tendencia de fondo de los precios, menos afectada por factores puntuales o temporales",
      "La inflación núcleo solo mide el precio del dólar",
      "La inflación núcleo es un dato que publica el Banco Central, no el INDEC"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Distinguir inflación 'general' de 'núcleo' es útil para leer el dato con criterio: la núcleo filtra ítems más volátiles o estacionales, dando una mejor foto de la tendencia subyacente de precios. Si la núcleo baja más que la general, suele interpretarse como una señal más sólida de desinflación, ya que no depende de un factor estacional puntual (por ejemplo, una baja temporal en el precio de algún alimento)."
  },
  {
    "id": "MACRO-MC-009",
    "categoria": "Macro Argentina",
    "subtema": "Expectativas de inflación y curva CER",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "La curva de bonos CER permite estimar 'inflación implícita' o 'breakeven' comparando el rendimiento de un bono CER con uno de tasa fija de plazo similar. Si esa inflación implícita es más alta que lo que vos personalmente esperás para los próximos meses, ¿qué podría significar para un cliente que quiere cobertura inflacionaria?",
    "opciones": [
      "Que no tiene sentido comprar bonos CER en ningún caso",
      "Que el mercado está 'pagando' (vía precio) una cobertura inflacionaria a un costo relativamente bajo respecto a lo que realmente se espera de inflación, lo que puede hacer atractivo el CER incluso si el ritmo de inflación implícito en la curva luce algo exigente",
      "Que hay que comprar dólares en vez de bonos CER, sin excepción",
      "Que la inflación implícita no tiene ninguna utilidad práctica"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Comparar la inflación implícita en la curva CER contra tu propia visión de inflación futura es una herramienta de valor relativo: si el mercado está 'pricing' menos inflación de la que vos esperás, el CER puede estar relativamente barato (atractivo) como cobertura. Es un ejercicio que requiere comparar bonos CER y de tasa fija de duración similar, y entender que el resultado depende de supuestos, no es una certeza matemática."
  },
  {
    "id": "MACRO-MC-010",
    "categoria": "Macro Argentina",
    "subtema": "CER y poder adquisitivo",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente conservador, preocupado por la inflación, te pregunta si un bono CER le 'garantiza' no perder poder adquisitivo. ¿Cuál es la respuesta más honesta?",
    "opciones": [
      "Sí, los bonos CER garantizan al 100% no perder poder adquisitivo bajo cualquier circunstancia",
      "El capital se ajusta por inflación según la fórmula del bono, lo cual ayuda a proteger el poder adquisitivo del capital nominal, pero el precio de mercado del bono puede subir o bajar igualmente, así que en el corto plazo sí puede haber pérdidas de valor de mercado, aunque la indexación cumpla su función a través del tiempo",
      "No, los bonos CER no tienen ninguna relación con la inflación",
      "Solo protege si se compra exactamente el día de emisión"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es importante no vender el CER como una garantía absoluta. La indexación por CER cumple su función sobre el capital del instrumento, pero el precio de mercado (lo que el cliente ve día a día en la pantalla) puede fluctuar por motivos distintos a la inflación pura (tasas reales, contexto político, demanda). Diferenciar 'protección estructural del instrumento' de 'volatilidad de precio de mercado en el corto plazo' es clave para gestionar expectativas."
  },
  {
    "id": "MACRO-MC-011",
    "categoria": "Macro Argentina",
    "subtema": "Tasa de interés y bonos en pesos",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Si el Banco Central sube la tasa de interés de referencia, ¿qué efecto general esperarías sobre el precio de los bonos a tasa fija en pesos (no ajustados por CER)?",
    "opciones": [
      "El precio debería subir, porque suben las tasas",
      "El precio debería bajar, porque al subir las tasas de referencia, el rendimiento exigido a esos bonos también sube, y por la relación inversa precio-TIR, el precio cae",
      "No hay ningún efecto sobre bonos en pesos",
      "Solo afecta a los bonos en dólares"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es la misma lógica de precio-TIR aplicada al contexto de tasas locales: si sube la tasa de referencia, el mercado exige mayor rendimiento a los instrumentos en pesos, lo que implica una caída de precio (para bonos con flujos fijos ya emitidos). Es importante que sepas explicar este mecanismo porque las decisiones de tasa del Banco Central impactan directamente las carteras en pesos de tus clientes."
  },
  {
    "id": "MACRO-MC-012",
    "categoria": "Macro Argentina",
    "subtema": "Reservas del BCRA y compra de divisas",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente lee que 'el Banco Central viene comprando dólares todos los días' y te pregunta por qué eso sería positivo. ¿Cuál es una explicación razonable?",
    "opciones": [
      "No tiene ninguna relevancia para la economía",
      "Acumular reservas fortalece la capacidad del Banco Central de responder ante necesidades futuras (por ejemplo, pagos de deuda en moneda extranjera), lo cual suele ser interpretado por el mercado como una señal de mayor solidez macroeconómica",
      "Comprar dólares siempre genera inflación inmediata sin excepción",
      "Solo afecta a los exportadores, no al resto de la economía"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La acumulación de reservas es un indicador que el mercado monitorea de cerca, porque afecta la percepción de capacidad de pago del país (relevante para el riesgo país) y la sostenibilidad del esquema cambiario. No es una variable aislada: hay que mirarla en conjunto con para qué se usan esas compras (por ejemplo, si se destinan a pagar deuda, el efecto neto sobre reservas disponibles puede ser distinto al que parece a primera vista)."
  },
  {
    "id": "MACRO-MC-013",
    "categoria": "Macro Argentina",
    "subtema": "Licitaciones del Tesoro y rollover",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Una licitación del Tesoro logra un 'rollover superior al 120%'. Un cliente pregunta qué significa eso. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Que el Tesoro pagó 120% de interés sobre lo emitido",
      "Que el Tesoro consiguió renovar (refinanciar) más deuda de la que vencía en ese período: por cada 100 que vencía, colocó 120 de deuda nueva, lo que implica que además de refinanciar lo que vencía, consiguió financiamiento adicional",
      "Que el 120% de los bonos en circulación entraron en default",
      "Es un término que no tiene ninguna aplicación práctica"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El rollover mide qué porcentaje de la deuda que vence en una licitación logra renovarse con nueva emisión. Un rollover por encima del 100% significa que el Tesoro no solo refinanció todo lo que vencía, sino que además absorbió pesos adicionales del mercado (financiamiento neto positivo). Es un dato que el mercado mira de cerca porque refleja la capacidad del Tesoro de financiarse sin recurrir a otras fuentes (como emisión monetaria)."
  },
  {
    "id": "MACRO-CASO-002",
    "categoria": "Macro Argentina",
    "subtema": "Conectar riesgo país con decisión de cartera",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente con perfil moderado-agresivo te pregunta si, dado que el riesgo país viene comprimiendo de forma sostenida en las últimas semanas, conviene aumentar la exposición a bonos soberanos argentinos en dólares. Redactá en 5-6 líneas cómo encararías esta conversación: qué le explicarías sobre la relación entre riesgo país y precio de bonos, y qué precauciones plantearías antes de simplemente decir 'sí, comprá más'.",
    "respuesta_modelo": "Una buena respuesta debería: (1) confirmar la lógica que el cliente intuye (si el riesgo país sigue comprimiendo, los bonos soberanos en dólares deberían seguir beneficiándose por la relación inversa precio-TIR), (2) aclarar que la compresión ya ocurrida no garantiza que continúe — gran parte del movimiento esperado puede ya estar reflejado en el precio actual, (3) plantear que aumentar exposición implica también aumentar el riesgo de cartera (concentración en activos argentinos, sensibilidad a un eventual cambio de sentimiento de mercado), (4) sugerir evaluar el tamaño de la posición en función del perfil de riesgo del cliente y no solo de la tendencia reciente, (5) idealmente mencionar la importancia de mirar duration de los bonos elegidos, porque la sensibilidad al movimiento de riesgo país no es igual en todos los tramos de la curva."
  },
  {
    "id": "MACRO-MC-014",
    "categoria": "Macro Argentina",
    "subtema": "Devaluación y cobertura",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere cubrirse específicamente ante el riesgo de una devaluación del tipo de cambio OFICIAL (no del CCL). ¿Qué instrumento, entre los vistos, es más directo para ese objetivo puntual?",
    "opciones": [
      "Un bono CER, porque ajusta por inflación",
      "Un bono dollar-linked, porque su capital se ajusta específicamente según la evolución del tipo de cambio oficial",
      "Una acción de cualquier empresa, no importa cuál",
      "Un plazo fijo tradicional en pesos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El dollar-linked es, por diseño, el instrumento más directo para cubrirse específicamente contra el tipo de cambio oficial. Es importante diferenciarlo del CER (que cubre inflación, no devaluación directamente) y recordar que no cubre necesariamente el riesgo de brecha cambiaria (la diferencia entre oficial y MEP/CCL), que es un riesgo distinto."
  },
  {
    "id": "MACRO-MC-015",
    "categoria": "Macro Argentina",
    "subtema": "Contexto internacional y mercados emergentes",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Hay un contexto de alta volatilidad global (por ejemplo, tensiones geopolíticas que afectan el precio del petróleo y las expectativas de tasas globales). En general, ¿qué se esperaría que ocurra con activos de mercados emergentes y fronterizos como Argentina en un escenario de 'flight to quality' (huida hacia activos considerados más seguros)?",
    "opciones": [
      "No hay ningún efecto sobre economías emergentes",
      "En general, el 'flight to quality' suele perjudicar a economías emergentes y fronterizas, ya que los inversores tienden a preferir activos considerados más seguros (como bonos del Tesoro de EE.UU.); sin embargo, esto no es automático: factores idiosincráticos locales (como una mejora de calificación crediticia) pueden hacer que un país emergente puntual tenga un desempeño positivo incluso en ese contexto global adverso",
      "El flight to quality siempre beneficia a todos los mercados por igual",
      "Solo afecta a las acciones, nunca a los bonos soberanos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es importante que entiendas la diferencia entre el contexto global (factor común a todos los emergentes) y los factores idiosincráticos (propios de cada país). Aunque la tendencia general en un escenario de aversión al riesgo global suele perjudicar a emergentes, eventos puntuales positivos a nivel local (como una mejora de rating o una buena noticia macro) pueden hacer que un país particular 'nade contra la corriente' del sentimiento global. Saber distinguir ambos factores te ayuda a explicarle al cliente por qué Argentina puede tener una semana mejor que el promedio de emergentes."
  },
  {
    "id": "MACRO-MC-016",
    "categoria": "Macro Argentina",
    "subtema": "Tasa de caución/repo",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente con liquidez transitoria pregunta sobre la 'tasa de caución' como alternativa de muy corto plazo. ¿Qué es, en términos simples?",
    "opciones": [
      "Es una tasa de interés que se cobra por mantener efectivo inmovilizado sin ningún uso",
      "Es la tasa que se obtiene (o se paga) en una operación de préstamo de muy corto plazo garantizada con activos, usada habitualmente para colocar liquidez transitoria de un día para otro o por pocos días",
      "Es un impuesto que cobra el Banco Central a los bancos",
      "Es lo mismo que la tasa de plazo fijo tradicional"
    ],
    "respuesta_correcta": 1,
    "explicacion": "La caución (o repo) es una herramienta de gestión de liquidez de muy corto plazo: permite colocar pesos (u otros activos como garantía) por períodos cortos, generalmente de un día a unas pocas ruedas, obteniendo un rendimiento mientras se decide el destino final de esos fondos. Es útil para explicarle a un cliente que tiene plata 'parada' transitoriamente entre una venta y una nueva inversión, en vez de dejarla sin ningún rendimiento."
  },
  {
    "id": "MACRO-MC-017",
    "categoria": "Macro Argentina",
    "subtema": "Dato de inflación vs expectativas (sorpresa de mercado)",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "El mercado esperaba una inflación mensual de 2,3% (según el consenso de analistas) y el dato real publicado fue 2,1%. ¿Qué tipo de reacción es más probable ver en los precios de los bonos en pesos justo después de conocerse el dato?",
    "opciones": [
      "Ninguna reacción, porque la diferencia es muy chica para importar",
      "Una reacción favorable para los bonos en pesos (sobre todo de tasa fija), porque un dato de inflación mejor (más bajo) al esperado suele interpretarse como una señal de que el proceso de desinflación continúa, lo cual valida expectativas de baja de tasas hacia adelante",
      "Una caída generalizada de todos los activos argentinos",
      "Solo afecta al precio del dólar, no a los bonos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Lo que mueve el mercado no es solo el dato en sí, sino la sorpresa respecto a lo esperado. Un dato de inflación mejor al consenso suele ser tomado como una buena noticia para los bonos en pesos, especialmente los de tasa fija, porque reduce las expectativas de inflación futura y valida la posibilidad de que las tasas de interés puedan seguir comprimiendo. Es un patrón importante para poder leer el contexto del día con tus clientes."
  },
  {
    "id": "MACRO-MC-018",
    "categoria": "Macro Argentina",
    "subtema": "Factores estacionales en el IPC",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente se entusiasma mucho con un dato de inflación bajo, pero vos notás que gran parte de la mejora se explica por una caída estacional en el precio de un rubro puntual (por ejemplo, alimentos frescos en determinada época del año). ¿Qué deberías comunicarle?",
    "opciones": [
      "Nada, simplemente confirmarle que la inflación está controlada para siempre",
      "Que si bien el dato es una buena noticia, conviene ser prudente al extrapolarlo, porque parte de la mejora puede deberse a un factor estacional puntual que no necesariamente se repite en los próximos meses; conviene mirar también la inflación núcleo para una lectura más estructural",
      "Que el dato de inflación no tiene ninguna utilidad",
      "Que hay que ignorar completamente los datos oficiales de inflación"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Parte del criterio profesional de un asesor es no extrapolar un solo dato sin matices. Reconocer factores estacionales (por ejemplo, estacionalidad en precios de alimentos) ayuda a separar 'ruido de corto plazo' de 'tendencia de fondo'. Comunicarle esto al cliente con cuidado (sin opacar la buena noticia, pero con prudencia) construye más confianza a largo plazo que validar entusiasmo sin matices."
  },
  {
    "id": "MACRO-MC-019",
    "categoria": "Macro Argentina",
    "subtema": "Riesgo idiosincrático vs riesgo global",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te pregunta por qué, si hay mucha incertidumbre en los mercados globales esa semana, el Merval (índice accionario argentino) tuvo una de sus mejores semanas del año. ¿Cuál es una explicación razonable?",
    "opciones": [
      "Es imposible, si hay incertidumbre global todos los mercados deben caer por igual",
      "Pueden coexistir un contexto global adverso con factores idiosincráticos (propios de Argentina) muy positivos, como una mejora de calificación crediticia o una baja sorpresiva de inflación local, que terminan pesando más sobre los activos argentinos en ese momento puntual que el clima internacional",
      "El Merval nunca se ve afectado por el contexto internacional",
      "Es un error de los datos de mercado"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es importante que el cliente entienda que los activos argentinos no se mueven en el vacío ni tampoco son un espejo perfecto del humor global: hay un componente de riesgo global (común a todos los emergentes) y un componente idiosincrático (específico de Argentina). En semanas donde las noticias locales son muy positivas, el factor idiosincrático puede dominar por sobre el contexto internacional adverso."
  },
  {
    "id": "MACRO-MC-020",
    "categoria": "Macro Argentina",
    "subtema": "Sufijos de tickers O/D/C",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente ve en su cuenta el ticker 'AL30D' y pregunta qué diferencia tiene con 'AL30' a secas. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Son exactamente el mismo instrumento y la misma moneda, no hay diferencia",
      "AL30 (sin sufijo) se opera en pesos, mientras que AL30D se opera en dólar MEP; el bono subyacente es el mismo, pero cambia la moneda de la operación",
      "AL30D es un bono completamente distinto a AL30",
      "La 'D' indica que el bono está en default"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Confundir tickers por la moneda es uno de los errores operativos más comunes en Argentina, justamente porque el mismo instrumento subyacente se puede operar en distintas monedas cambiando solo el sufijo (sin sufijo o con 'O' para pesos, 'D' para MEP, 'C' para CCL/cable). Antes de cargar cualquier orden, conviene chequear explícitamente que el sufijo coincida con la moneda que el cliente realmente quiere operar."
  },
  {
    "id": "MACRO-CASO-003",
    "categoria": "Macro Argentina",
    "subtema": "Conectar macro con perfil de cliente",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente jubilado, muy conservador, te pregunta si debería preocuparse por la suba reciente de la tasa de caución/repo por encima del 20% que viste en las noticias económicas. Explicá en 5-6 líneas cómo le bajarías este dato macro a algo relevante (o no) para su situación particular, sin abrumarlo con tecnicismos.",
    "respuesta_modelo": "Una buena respuesta debería: (1) explicar brevemente y sin jerga qué es esa tasa (el costo/rendimiento de colocar pesos por muy corto plazo), (2) evaluar honestamente si esto le afecta de forma directa a su cartera particular (depende de si tiene instrumentos de muy corto plazo o liquidez ociosa en pesos) — para un perfil conservador con cartera ya definida y de mediano/largo plazo, probablemente el impacto directo sea bajo, (3) evitar generar alarma innecesaria sobre un dato técnico de mercado de dinero que no necesariamente afecta su estrategia de fondo, (4) aprovechar la pregunta para reforzar la confianza en el plan ya armado, en vez de sumar ruido. El objetivo del ejercicio es practicar filtrar qué noticias macro son relevantes comunicar a cada perfil de cliente y cuáles solo generarían ansiedad sin aportar valor."
  },
  {
    "id": "MACRO-MC-021",
    "categoria": "Macro Argentina",
    "subtema": "Inflación y tasa real",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un bono CER rinde 'CER + 2%'. Un cliente pregunta qué significa ese '+2%' en términos prácticos. ¿Cuál es la mejor explicación?",
    "opciones": [
      "Que el bono paga 2% de interés fijo y nada más",
      "Que, por encima del ajuste por inflación (CER), el bono ofrece un 2% adicional de rendimiento real, es decir, una ganancia de poder adquisitivo por sobre la sola compensación de la inflación",
      "Que el bono pierde 2% de valor cada año",
      "Que el 2% es una comisión que cobra el broker"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Distinguir 'tasa nominal' de 'tasa real' es un concepto que conviene dominar bien. En instrumentos CER, ese '+X%' representa la tasa real: lo que el inversor gana por encima de simplemente mantener el poder adquisitivo. Es la forma correcta de comparar instrumentos CER entre sí (mirando esa tasa real, no solo el nombre del bono), y de explicarle al cliente qué gana 'de verdad' más allá de la protección inflacionaria."
  },
  {
    "id": "MACRO-MC-022",
    "categoria": "Macro Argentina",
    "subtema": "Reapertura de mercado internacional de deuda",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Se habla de que Argentina podría 'reabrir el mercado internacional de crédito' (poder volver a emitir deuda nueva en los mercados globales). ¿Por qué esto sería relevante para el riesgo de los bonos soberanos existentes?",
    "opciones": [
      "No tiene ninguna relevancia para los bonos ya emitidos",
      "Porque permitiría refinanciar vencimientos de deuda con nuevas emisiones, en vez de depender exclusivamente de reservas propias del Banco Central, lo cual reduciría el riesgo de refinanciamiento que históricamente explicó buena parte del spread soberano argentino",
      "Porque automáticamente eliminaría toda la deuda existente",
      "Solo afectaría a los bonos que se emitan en el futuro, sin ningún efecto sobre los actuales"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El 'riesgo de refinanciamiento' (poder pagar vencimientos sin agotar reservas) es uno de los componentes que el mercado pricea dentro del riesgo país. Si Argentina recupera la capacidad de emitir deuda nueva en mercados internacionales para cubrir vencimientos, eso reduce ese riesgo específico, lo cual puede traducirse en compresión adicional del riesgo país y, por la relación precio-TIR, en una suba de precio de los bonos soberanos existentes."
  },
  {
    "id": "MACRO-MC-023",
    "categoria": "Macro Argentina",
    "subtema": "Dollar-linked vs CCL en licitaciones",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "En una licitación del Tesoro, un bono dollar-linked de corto plazo se convalida a una tasa relativamente baja (atractiva para el Tesoro, no tanto para el inversor) y resulta muy demandado. ¿Qué podría estar reflejando esa fuerte demanda?",
    "opciones": [
      "Que a nadie le importa cubrirse del tipo de cambio en ese momento",
      "Que existe una demanda relevante de cobertura cambiaria por parte de los inversores, al punto de aceptar una tasa más baja con tal de asegurarse esa cobertura, lo cual también puede leerse como una señal de que el mercado no espera grandes saltos del dólar oficial en el corto plazo (de lo contrario exigiría más tasa)",
      "Que el Tesoro está regalando dinero a los inversores",
      "Que el dollar-linked dejó de existir como instrumento"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Cuando un instrumento de cobertura se convalida a una tasa baja pero con alta demanda, es una señal de que el mercado valora mucho esa cobertura puntual (aceptando menor rendimiento a cambio de la protección), lo cual también puede leerse en combinación con la expectativa de devaluación implícita: si el mercado esperara una devaluación grande e inminente, probablemente exigiría una tasa más alta para entrar. Es un ejercicio de lectura indirecta de expectativas a través del comportamiento de la demanda en la licitación."
  },
  {
    "id": "RV-MC-001",
    "categoria": "Renta Variable",
    "subtema": "CEDEAR - definición y mecánica",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta qué es exactamente un CEDEAR y por qué puede comprar 'Apple' sin tener una cuenta en Estados Unidos. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Es una acción argentina que imita el comportamiento de Apple, pero no tiene relación real con la empresa",
      "Es un certificado que representa una acción (o ETF) del exterior, listado y negociable en la bolsa local en pesos, lo que permite acceder a empresas internacionales sin abrir cuenta afuera",
      "Es un bono que paga una tasa fija relacionada con el desempeño de Apple",
      "Es lo mismo que comprar la acción directamente en NASDAQ, sin ninguna diferencia"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El CEDEAR es un puente: representa la acción extranjera real, pero se opera localmente en pesos. Esto le da al cliente acceso práctico a empresas globales, aunque conviene que entienda que el precio en pesos del CEDEAR depende tanto de la acción subyacente como del tipo de cambio implícito, no es 'una acción argentina cualquiera'."
  },
  {
    "id": "RV-MC-002",
    "categoria": "Renta Variable",
    "subtema": "CEDEAR - doble exposición (acción + tipo de cambio)",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "La acción de MercadoLibre (MELI) sube 10% en dólares en un mes. En el mismo período, el dólar CCL implícito sube 5%. ¿Qué le pasaría aproximadamente al precio en pesos del CEDEAR de MELI?",
    "opciones": [
      "Subiría aproximadamente 10%, porque solo importa el precio de la acción en dólares",
      "Subiría aproximadamente 15%, combinando la suba de la acción (10%) más la suba del tipo de cambio implícito (5%)",
      "Bajaría, porque ambos efectos se cancelan entre sí",
      "No tendría ningún cambio, porque el CEDEAR no se ve afectado por el tipo de cambio"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es una de las confusiones más comunes con clientes nuevos en CEDEARs: el precio en pesos combina DOS efectos, el desempeño de la acción subyacente en su moneda original y el movimiento del tipo de cambio implícito (CCL). Por eso, en momentos de fuerte devaluación del peso, podés ver CEDEARs subiendo en pesos aunque la acción subyacente esté estable o incluso caiga levemente en dólares: el efecto cambiario domina."
  },
  {
    "id": "RV-MC-003",
    "categoria": "Renta Variable",
    "subtema": "CEDEAR como alternativa de dolarización",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te dice: 'Compro CEDEARs no porque crea en la empresa, sino porque quiero dolarizar mi cartera'. ¿Es una estrategia razonable, con qué matiz?",
    "opciones": [
      "No tiene sentido, los CEDEARs nunca sirven para dolarizar",
      "Puede ser razonable como forma de ganar exposición al tipo de cambio implícito, pero hay que aclarar que el cliente también queda expuesto al riesgo de la acción subyacente (la empresa puede caer en dólares, neutralizando parte del beneficio cambiario)",
      "Es la única forma correcta de dolarizar una cartera en Argentina",
      "Los CEDEARs garantizan ganar exactamente lo mismo que comprar dólar MEP"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es una estrategia que existe en la práctica y puede tener sentido, pero el asesor debe ser honesto sobre el riesgo adicional: a diferencia de comprar dólares (MEP/CCL) directamente, con un CEDEAR el cliente también está tomando riesgo de la empresa subyacente. Si la acción cae fuerte en dólares, ese efecto puede compensar (o superar) la ganancia cambiaria. Conviene diferenciar 'dolarizar puro' de 'dolarizar + apostar a una empresa'."
  },
  {
    "id": "RV-MC-004",
    "categoria": "Renta Variable",
    "subtema": "CEDEAR vs acción local vs ETF",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere exposición al sector financiero global y duda entre tres alternativas: (A) comprar la acción local de un banco argentino, (B) comprar el CEDEAR de un banco grande de EE.UU., (C) comprar un CEDEAR de un ETF financiero (que agrupa varios bancos). ¿Cuál ofrece mayor diversificación dentro del sector?",
    "opciones": [
      "La acción local del banco argentino",
      "El CEDEAR del ETF financiero, porque agrupa varias empresas del sector en un solo instrumento, diluyendo el riesgo específico de una sola entidad",
      "El CEDEAR del banco individual de EE.UU.",
      "Las tres opciones ofrecen exactamente la misma diversificación"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Cada opción tiene un trade-off distinto: la acción local concentra todo en una empresa y en la economía argentina; el CEDEAR de un banco individual da calidad internacional pero sigue concentrado en una sola empresa; el ETF sectorial diversifica entre varias empresas del mismo sector, reduciendo el riesgo específico de una sola entidad a cambio de 'promediar' el desempeño del sector completo (sin las sorpresas positivas o negativas de una empresa puntual)."
  },
  {
    "id": "RV-MC-005",
    "categoria": "Renta Variable",
    "subtema": "Dividendos en CEDEARs",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente tiene CEDEARs de una empresa que reparte dividendos trimestrales en EE.UU. ¿Qué le pasa a ese dividendo cuando lo tiene vía CEDEAR en Argentina?",
    "opciones": [
      "No recibe nada, los CEDEARs nunca pagan dividendos",
      "Recibe el dividendo proporcional a la cantidad de CEDEARs que tiene, generalmente convertido o acreditado según el mecanismo del depositario, menos eventuales comisiones o retenciones impositivas",
      "Recibe el dividendo pero solo si vende el CEDEAR primero",
      "El dividendo se paga únicamente en acciones nuevas, nunca en efectivo"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Los CEDEARs trasladan al inversor local los derechos económicos de la acción subyacente, incluidos los dividendos, en proporción a la tenencia. Vale la pena que el cliente sepa que puede haber comisiones o retenciones en el proceso, así que el monto neto recibido no es necesariamente idéntico al dividendo bruto declarado por la empresa."
  },
  {
    "id": "RV-MC-006",
    "categoria": "Renta Variable",
    "subtema": "Análisis fundamental - definición",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta qué es el 'análisis fundamental' y en qué se diferencia de simplemente 'mirar el gráfico'. ¿Cuál es la mejor explicación?",
    "opciones": [
      "Es exactamente lo mismo que el análisis técnico, solo cambia el nombre",
      "El análisis fundamental estudia los números reales del negocio (ventas, ganancias, deuda, eficiencia) para estimar si el precio de la acción está justificado por la salud de la empresa, mientras que el análisis técnico se enfoca en patrones de precios históricos en el gráfico",
      "Solo sirve para empresas que cotizan en Estados Unidos",
      "Es un método que garantiza acertar si una acción va a subir o bajar"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es la distinción central del capítulo: el análisis fundamental mira 'el negocio real' (como evaluar comprar una parte de una panadería: cuánto vende, cuánto gana, cuánta deuda tiene), mientras que el análisis técnico mira patrones de precio. Ninguno garantiza acertar, pero el fundamental le da al asesor argumentos sólidos para justificar una recomendación más allá de 'la veo bien en el gráfico'."
  },
  {
    "id": "RV-MC-007",
    "categoria": "Renta Variable",
    "subtema": "P/E - interpretación básica",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Una acción cotiza a $50 y la empresa ganó $5 por acción en el último año. ¿Cuál es su P/E (Price/Earnings) y qué significa ese número?",
    "opciones": [
      "P/E = 5, significa que la empresa pierde dinero",
      "P/E = 10, significa que los inversores están pagando $10 por cada $1 de ganancia anual que genera la empresa",
      "P/E = 250, es el producto entre precio y ganancia",
      "El P/E no se puede calcular con estos datos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El cálculo es simple (precio dividido ganancia por acción: 50/5 = 10), pero lo importante es la interpretación: el P/E te dice cuántos 'años de ganancia actual' estás pagando por la acción, en términos relativos. Un P/E de 10 no es ni 'bueno' ni 'malo' en el vacío: hay que compararlo con el sector y con el crecimiento esperado de la empresa."
  },
  {
    "id": "RV-MC-008",
    "categoria": "Renta Variable",
    "subtema": "P/E alto vs bajo",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente ve que una acción tiene P/E de 50 y te pregunta: '¿eso es malo? ¿Debería evitarla?' ¿Cuál es la respuesta más completa?",
    "opciones": [
      "Sí, un P/E de 50 siempre significa que hay que evitar la acción",
      "No necesariamente: un P/E alto suele reflejar que el mercado tiene expectativas altas de crecimiento futuro, pero también implica mayor riesgo si esas expectativas no se cumplen; hay que evaluarlo en el contexto del sector y del crecimiento esperado de la empresa, no de forma aislada",
      "El P/E de 50 garantiza que la empresa va a quebrar",
      "Un P/E alto siempre es mejor que uno bajo, sin excepción"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Un P/E alto no es automáticamente una señal negativa: empresas de alto crecimiento (tecnología, por ejemplo) suelen cotizar con múltiplos más altos que empresas maduras, porque el mercado paga hoy por las ganancias futuras esperadas. El riesgo está en que, si ese crecimiento no se concreta, el precio puede ajustarse fuerte a la baja. La respuesta correcta evita el extremo de 'siempre evitar' o 'siempre comprar' solo por un número."
  },
  {
    "id": "RV-MC-009",
    "categoria": "Renta Variable",
    "subtema": "P/E comparado con el sector",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Una empresa autopartista (ACME) tiene P/E de 8, mientras que el promedio de sus competidores directos del sector es 12. ¿Qué conclusión es la más razonable?",
    "opciones": [
      "ACME definitivamente es una mejor inversión sin ninguna duda",
      "ACME está relativamente más barata en términos de múltiplo, pero antes de concluir que es una oportunidad hay que preguntarse si existe una razón de fondo (riesgo particular, menor crecimiento esperado) que justifique ese descuento frente a sus pares",
      "El P/E de ACME está mal calculado, debería ser igual al promedio del sector",
      "No tiene sentido comparar el P/E entre empresas distintas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El método de comparables (mirar el P/E relativo al sector) es una herramienta útil, pero no una conclusión automática. Un P/E más bajo que el promedio puede reflejar una oportunidad real, o puede reflejar que el mercado ya conoce un problema específico de esa empresa (mayor riesgo, menor crecimiento esperado, alguna debilidad competitiva). El análisis cuantitativo siempre debería complementarse con una pregunta cualitativa: ¿por qué el mercado valora distinto a esta empresa?"
  },
  {
    "id": "RV-MC-010",
    "categoria": "Renta Variable",
    "subtema": "ROE",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Una empresa tiene ROE (Return on Equity) de 25%, mientras que otra del mismo sector tiene ROE de 6%. En principio, ¿qué te dice esto sobre la eficiencia de cada una?",
    "opciones": [
      "Nada, el ROE no mide eficiencia",
      "La primera empresa genera, en relación a su patrimonio, mucho más beneficio que la segunda, lo cual sugiere un uso más eficiente del capital propio de los accionistas; aunque conviene revisar también el nivel de deuda, porque una empresa muy endeudada puede mostrar un ROE artificialmente alto",
      "Un ROE más alto siempre significa menor riesgo",
      "El ROE solo aplica a bancos, no a otras industrias"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El ROE mide cuánta ganancia genera la empresa por cada peso de patrimonio de los accionistas, así que en general un ROE más alto indica mejor uso del capital propio. Pero hay un matiz importante: una empresa puede inflar artificialmente su ROE tomando mucha deuda (lo cual reduce el patrimonio relativo y aumenta el ROE), así que siempre conviene mirar el ROE junto con el nivel de endeudamiento para no llevarse una idea distorsionada de la eficiencia real."
  },
  {
    "id": "RV-MC-011",
    "categoria": "Renta Variable",
    "subtema": "Márgenes y eficiencia",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Una empresa muestra que sus ingresos crecieron 20% este año, pero su margen neto (ganancia neta sobre ventas) bajó respecto al año anterior. ¿Qué podría estar indicando esto?",
    "opciones": [
      "Que la empresa definitivamente está quebrando",
      "Que, aunque vende más, está ganando proporcionalmente menos por cada peso vendido; puede deberse a mayores costos, descuentos para ganar mercado, o inversión en crecimiento, y conviene indagar la causa antes de sacar una conclusión",
      "Que el margen neto no tiene ninguna relación con la rentabilidad",
      "Que la empresa dejó de vender productos"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Crecer en ventas y al mismo tiempo perder margen es una señal mixta que merece indagación: puede ser una mala señal (costos descontrolados, competencia agresiva en precios) o una decisión estratégica razonable (invertir en expansión, ganar mercado con menor margen transitorio). El asesor no debería sacar una conclusión automática solo con ese dato, sino entender la historia detrás de los números."
  },
  {
    "id": "RV-MC-012",
    "categoria": "Renta Variable",
    "subtema": "Nivel de deuda / apalancamiento",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Una empresa tiene una deuda neta equivalente a 6 veces su ganancia operativa anual (deuda neta/EBITDA = 6x). ¿Cómo interpretás ese número?",
    "opciones": [
      "Es un nivel de endeudamiento bajo y tranquilizador",
      "Es un nivel de endeudamiento alto: tardaría aproximadamente 6 años de ganancia operativa completa en pagar su deuda neta, lo cual la hace más vulnerable ante subas de tasas de interés o caídas de ingresos",
      "Ese ratio no tiene relación con el riesgo de la empresa",
      "Significa que la empresa no tiene ninguna deuda"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Deuda neta/EBITDA por encima de 3-4 veces suele considerarse un nivel elevado de apalancamiento. Un ratio de 6x indica que la empresa está significativamente endeudada en relación a su capacidad de generar ganancias operativas, lo que la vuelve más frágil ante shocks (suba de tasas, caída de ventas). Es un indicador clave para advertirle a un cliente sobre el riesgo financiero de una empresa, más allá de cuán atractivo luzca su negocio."
  },
  {
    "id": "RV-CASO-001",
    "categoria": "Renta Variable",
    "subtema": "Comunicación de valuación al cliente (caso Apple)",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te pregunta: '¿Vale la pena invertir en Apple?'. Sabés que Apple tiene márgenes muy altos, poca deuda neta, ROE elevado, pero cotiza con un P/E alto respecto al promedio del mercado (alrededor de 25-30x). Redactá en 4-5 líneas una respuesta que combine los fundamentos positivos con el matiz de la valuación exigente, evitando un simple 'sí' o 'no'.",
    "respuesta_modelo": "Una buena respuesta debería: (1) mencionar los fundamentos sólidos (márgenes altos, baja deuda, alta rentabilidad sobre el capital), (2) aclarar que la acción no está 'barata' en términos de múltiplo de ganancias, porque el mercado ya está pagando hoy por el crecimiento futuro esperado, (3) explicar el riesgo asociado: si ese crecimiento no se concreta al ritmo esperado, el precio podría ajustarse a la baja, (4) evitar una recomendación binaria tajante, ofreciendo en cambio una lectura matizada que el cliente pueda usar para decidir según su propio perfil y horizonte."
  },
  {
    "id": "RV-CASO-002",
    "categoria": "Renta Variable",
    "subtema": "Comunicación de valuación al cliente (caso YPF)",
    "dificultad": "avanzada",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente nota que YPF cotiza con un P/E más bajo que otras petroleras latinoamericanas comparables y pregunta: '¿Entonces YPF está barata, conviene comprar?'. Sabés que YPF tiene un nivel de deuda relativamente alto y opera en un contexto regulatorio particular (Argentina). Redactá en 4-5 líneas una respuesta equilibrada.",
    "respuesta_modelo": "Una buena respuesta debería: (1) reconocer el dato objetivo (P/E más bajo que comparables regionales puede sugerir, en principio, que está relativamente barata), (2) inmediatamente matizar con el contexto: el descuento puede explicarse por factores de riesgo específicos como mayor nivel de deuda y la exposición al contexto regulatorio y macroeconómico argentino, que limitan su potencial relativo frente a pares de otros países, (3) evitar la conclusión automática de 'barata = comprar', invitando a pensar en si esos riesgos adicionales están justificadamente compensados por el descuento de valuación, (4) relacionar la decisión con el perfil de riesgo del cliente, no solo con el número de P/E."
  },
  {
    "id": "RV-MC-013",
    "categoria": "Renta Variable",
    "subtema": "Indicadores adicionales (P/B, EV/EBITDA)",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un banco cotiza con un ratio Precio/Valor Libro (P/B) menor a 1. ¿Qué podría estar reflejando esto?",
    "opciones": [
      "Que el banco definitivamente va a quebrar mañana",
      "Que el mercado está valuando la acción por debajo de su patrimonio contable, lo cual puede deberse a desconfianza sobre la calidad de esos activos o expectativas de menor rentabilidad futura, aunque también podría señalar una oportunidad si el mercado está siendo excesivamente pesimista",
      "Que el banco no tiene ningún activo registrado en su balance",
      "Que el P/B siempre debe ser menor a 1 para empresas financieras"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El P/B compara el valor de mercado con el valor contable del patrimonio. Un P/B por debajo de 1 (frecuente en algunos bancos en momentos de crisis o desconfianza) indica que el mercado le pone menos valor a la empresa del que figura en sus libros contables, lo cual puede reflejar dudas legítimas sobre la calidad de esos activos, o puede ser una oportunidad si el pesimismo del mercado resulta exagerado. Como con el P/E, no es una señal automática en ningún sentido."
  },
  {
    "id": "RV-MC-014",
    "categoria": "Renta Variable",
    "subtema": "Flujo de caja vs ganancia contable",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Una empresa en crecimiento muestra ganancias contables positivas, pero su flujo de caja operativo es negativo (consume más efectivo del que genera). ¿Por qué esto debería llamar la atención del asesor?",
    "opciones": [
      "No debería llamar la atención, la ganancia contable es lo único relevante",
      "Porque la ganancia contable puede no reflejar la salud real del negocio en términos de efectivo disponible; si esta situación no se revierte, puede ser insostenible a mediano plazo, sin importar lo que digan las ganancias en el papel",
      "Porque significa automáticamente que la empresa está cometiendo fraude",
      "El flujo de caja y la ganancia contable son siempre exactamente iguales"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un punto sutil pero importante, especialmente en empresas de alto crecimiento o startups: pueden mostrar ganancias contables modestas (o incluso positivas por motivos contables específicos) mientras consumen mucho efectivo real en su operación. Si esa dinámica no se revierte con el tiempo, la empresa puede tener problemas de sostenibilidad financiera, independientemente de lo que muestre la línea de 'ganancia neta' del estado de resultados."
  },
  {
    "id": "RV-MC-015",
    "categoria": "Renta Variable",
    "subtema": "Riesgo de concentración en una sola acción",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente entusiasta quiere poner una parte muy grande de su cartera en una sola acción 'porque está segurísimo de que va a subir'. Más allá del análisis fundamental de la empresa, ¿qué riesgo adicional siempre existe en una posición muy concentrada?",
    "opciones": [
      "Ninguno, si el análisis fundamental es bueno no hay riesgo",
      "El riesgo específico de esa empresa (cambios regulatorios, problemas de gestión, eventos imprevistos) impacta de lleno en un patrimonio muy concentrado, mientras que en una cartera diversificada ese mismo evento tendría un efecto mucho más acotado",
      "El riesgo de concentración solo existe en bonos, no en acciones",
      "Comprar una sola acción elimina el riesgo de mercado por completo"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Ningún análisis fundamental, por más sólido que sea, elimina el riesgo de eventos imprevistos específicos de una empresa (cambios regulatorios, escándalos, problemas de gestión, shocks sectoriales). La concentración amplifica el impacto de esos eventos en el patrimonio total del cliente. Es un argumento que conviene tener siempre a mano, incluso frente a una empresa que parece 'una inversión segura'."
  },
  {
    "id": "RV-MC-016",
    "categoria": "Renta Variable",
    "subtema": "P/E negativo o no aplicable",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta por qué no puede calcular el P/E de una empresa que tuvo pérdidas el último año. ¿Cuál es la explicación correcta?",
    "opciones": [
      "Se puede calcular normalmente, el P/E nunca tiene problemas con pérdidas",
      "El P/E pierde sentido (resulta negativo o no se calcula) cuando la empresa tiene pérdidas, porque el ratio compara precio con ganancia y una ganancia negativa distorsiona la interpretación; en esos casos conviene usar otros indicadores (como ventas, flujo de caja o comparables sectoriales)",
      "Las empresas con pérdidas no pueden cotizar en bolsa",
      "El P/E solo aplica a empresas tecnológicas"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es una limitación práctica importante del P/E: cuando la ganancia es negativa, el ratio deja de ser interpretable de forma directa. En esos casos (común en empresas en etapa de fuerte inversión o en crisis puntuales), conviene recurrir a otros indicadores de valuación (ventas, EV/EBITDA si el EBITDA es positivo, flujo de caja) para no quedarse sin herramientas de análisis."
  },
  {
    "id": "RV-MC-017",
    "categoria": "Renta Variable",
    "subtema": "Beta y riesgo relativo",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Una acción tiene un beta de 1,5 respecto al índice de mercado. ¿Qué implica esto, en términos simples, para un cliente conservador?",
    "opciones": [
      "Que la acción es completamente independiente del mercado general",
      "Que la acción tiende a moverse, en promedio, con mayor amplitud que el mercado general (tanto al alza como a la baja); un beta de 1,5 sugiere mayor volatilidad relativa, lo cual puede no ser adecuado para un perfil muy conservador",
      "Que la acción nunca puede bajar de precio",
      "Que el beta mide exclusivamente el nivel de dividendos que paga la empresa"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El beta es una medida de volatilidad relativa al mercado: un beta mayor a 1 indica que la acción amplifica los movimientos del mercado general (sube más en las subas, pero también cae más en las bajas). Para un cliente conservador, una cartera con muchas acciones de beta alto puede generar más sobresaltos de los que está dispuesto a tolerar, incluso si los fundamentos de esas empresas son sólidos."
  },
  {
    "id": "RV-CASO-003",
    "categoria": "Renta Variable",
    "subtema": "Interpretar ingresos vs ganancia",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente te dice: 'Vi que la empresa XYZ tuvo un aumento de ingresos muy grande este año, pero su ganancia neta bajó. ¿Eso es malo?' Redactá en 3-4 líneas una respuesta fundamentada, sin afirmar categóricamente que es bueno o malo sin más contexto.",
    "respuesta_modelo": "Una buena respuesta debería: (1) explicar que crecer en ingresos mientras la ganancia baja no es automáticamente negativo, puede deberse a mayores costos, inversión en expansión, o presión competitiva, (2) señalar que conviene mirar el margen (ganancia sobre ventas) para entender si la rentabilidad relativa se deterioró estructuralmente o es algo puntual, (3) invitar a indagar la causa específica (¿son costos que se pueden controlar? ¿es una inversión con retorno esperado a futuro?) antes de sacar una conclusión definitiva sobre si es 'bueno' o 'malo'."
  },
  {
    "id": "RV-MC-018",
    "categoria": "Renta Variable",
    "subtema": "Liquidez de CEDEARs y acciones locales",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente quiere invertir un monto importante en una acción local de baja liquidez (poco volumen operado diariamente). ¿Qué deberías advertirle antes de avanzar?",
    "opciones": [
      "Nada, la liquidez no afecta a las acciones, solo a los bonos",
      "Que en activos de baja liquidez, una orden grande puede mover el precio significativamente en contra (impacto de mercado), por lo que conviene fraccionar la operación en tramos o usar órdenes límite en vez de ir todo de una vez a mercado",
      "Que es imposible comprar acciones de baja liquidez bajo cualquier circunstancia",
      "Que la liquidez solo importa al momento de vender, nunca al comprar"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El mismo concepto de profundidad de caja de puntas e impacto de mercado que se aplica a renta fija, aplica también a acciones poco líquidas. Para un cliente con un monto relevante respecto al volumen habitual del activo, conviene anticipar ese riesgo y proponer una ejecución fraccionada o con órdenes límite, en vez de una orden grande a mercado que puede terminar ejecutándose a precios bastante peores de los esperados."
  },
  {
    "id": "RV-MC-019",
    "categoria": "Renta Variable",
    "subtema": "Crecimiento vs valor (estilos de inversión)",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta la diferencia entre invertir en 'empresas de crecimiento' y 'empresas de valor'. ¿Cuál es una buena distinción simple?",
    "opciones": [
      "Son exactamente lo mismo, solo cambia el nombre del estilo",
      "Las empresas de crecimiento suelen tener múltiplos de valuación más altos porque el mercado paga por expectativas de expansión futura de ingresos y ganancias, mientras que las empresas de valor suelen cotizar a múltiplos más bajos en relación a sus fundamentos actuales, a veces por estar fuera de moda o en sectores más maduros",
      "Las empresas de valor nunca generan ganancias",
      "Las empresas de crecimiento siempre son más seguras que las de valor"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es una distinción clásica en el análisis de acciones: 'crecimiento' (growth) se enfoca en empresas con expectativas de expansión acelerada (suelen tener P/E más altos), mientras que 'valor' (value) busca empresas que cotizan baratas en relación a sus fundamentos actuales, muchas veces en sectores más maduros o temporalmente desfavorecidos. Ninguno de los dos estilos es 'mejor' de forma absoluta: dependen del contexto de mercado y del perfil del cliente."
  },
  {
    "id": "RV-MC-020",
    "categoria": "Renta Variable",
    "subtema": "Comparables sectoriales - matiz cualitativo",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Al comparar el P/E de una empresa con el promedio de su sector, ¿por qué no alcanza con quedarte solo con el número, según el criterio profesional que debería aplicar un asesor?",
    "opciones": [
      "Porque el P/E del sector siempre está mal calculado",
      "Porque el número aislado no explica el 'por qué' de la diferencia: hace falta indagar si hay una razón cualitativa de fondo (riesgo regulatorio, calidad de management, posición competitiva, crecimiento esperado) que justifique que esa empresa cotice distinto a sus pares",
      "Porque comparar empresas entre sí nunca tiene sentido",
      "Porque el P/E del sector cambia todos los días y no sirve de referencia"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es una de las ideas centrales del análisis fundamental aplicado: los números cuantitativos (como el P/E relativo) son el punto de partida, no la conclusión. El criterio profesional del asesor está en poder explicar el 'por qué' detrás de la diferencia con comparables, combinando el dato numérico con una lectura cualitativa del negocio y su contexto."
  },
  {
    "id": "RV-MC-021",
    "categoria": "Renta Variable",
    "subtema": "Dividend yield",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente que busca ingresos periódicos (no solo apreciación de capital) pregunta qué mirar en una acción para ese objetivo. ¿Qué indicador es más relevante para él?",
    "opciones": [
      "El P/E exclusivamente, ignorando todo lo demás",
      "El dividend yield (rendimiento por dividendo), que muestra qué porcentaje anual del precio de la acción representa el dividendo distribuido, dando una idea del 'ingreso' que genera la inversión más allá de la posible suba de precio",
      "El beta de la acción, sin mirar ningún otro dato",
      "Ningún indicador es relevante para ese objetivo"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Para un cliente que prioriza generar ingresos periódicos (en vez de apostar únicamente a la apreciación del precio), el dividend yield es un indicador directamente relevante: le permite comparar distintas acciones en términos de cuánto 'flujo' generan anualmente en relación al capital invertido, de forma similar a como compararía el cupón de un bono."
  },
  {
    "id": "TRAMPA-MC-001",
    "categoria": "Preguntas Trampa",
    "subtema": "Riesgo-retorno / promesas imposibles",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te reclama: 'Quiero ganar un 20% anual en dólares sin ningún riesgo. ¿Qué me garantizás eso?' ¿Cuál es la respuesta correcta?",
    "opciones": [
      "Ofrecerle el instrumento que más rinde en ese momento, sin aclarar nada más",
      "Explicarle que, en un mercado razonablemente eficiente, un retorno alto sin riesgo simplemente no existe: si algo promete mucho rendimiento 'garantizado', hay que sospechar, porque el riesgo (de crédito, de mercado, de liquidez) siempre está presente en alguna forma",
      "Decirle que sí existe, y ofrecerle un producto cualquiera para cerrar la venta",
      "Cambiar de tema para no contestar la pregunta"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta pregunta aparece muy seguido y la tentación es 'encontrar algo' para satisfacer al cliente. Pero la relación riesgo-retorno no es negociable: no existe rentabilidad alta garantizada sin riesgo en un mercado competitivo. Es mejor educar al cliente en este punto desde el principio que generar expectativas que después no se van a cumplir, lo cual daña mucho más la relación a largo plazo."
  },
  {
    "id": "TRAMPA-MC-002",
    "categoria": "Preguntas Trampa",
    "subtema": "Sesgo de 'todo el mundo lo compra'",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te dice: 'Pero todo el mundo está comprando esta acción, ¿por qué yo no?' ¿Cuál es la mejor forma de responder?",
    "opciones": [
      "Comprarla de inmediato porque 'todo el mundo' tiene razón",
      "Explicar que la popularidad de un activo no es, por sí sola, una razón de inversión: conviene preguntarse por qué está de moda, si los fundamentos sostienen ese entusiasmo, y cómo encajaría en su cartera particular, en vez de seguir a la masa sin análisis propio",
      "Decirle que está equivocado y que nunca debería comprar esa acción",
      "Ignorar la pregunta y cambiar de tema"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El argumento de 'todo el mundo lo compra' es un sesgo de comportamiento (efecto manada) muy común y muy peligroso, porque suele aparecer justo en los picos de entusiasmo del mercado. No significa que haya que negarse de plano, sino redirigir la conversación hacia el análisis propio: ¿por qué está de moda?, ¿los fundamentos sostienen ese precio?, ¿cómo encaja en SU cartera particular?"
  },
  {
    "id": "TRAMPA-MC-003",
    "categoria": "Preguntas Trampa",
    "subtema": "Yield alto como señal positiva sin matices",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente ve dos bonos similares: uno rinde 8% y otro rinde 14%. Te dice: 'Dame el que más rinde, ¿para qué complicarse?' ¿Qué le respondés?",
    "opciones": [
      "Tiene razón, siempre hay que elegir el que más rinde",
      "Que un rendimiento mucho más alto en un instrumento similar generalmente refleja mayor riesgo percibido por el mercado (de crédito, liquidez o estructura), no es 'plata gratis'; antes de elegir, hay que entender por qué ese bono rinde tanto más",
      "Que el rendimiento más alto siempre es un error de cálculo",
      "Que no hay ninguna diferencia entre ambos bonos más allá del rendimiento"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Si dos instrumentos parecidos rinden muy distinto, el mercado está señalando algo: mayor riesgo de default, menor liquidez, alguna característica estructural particular. 'El que más rinde' sin entender por qué rinde tanto es la forma más común en que clientes (y asesores nuevos) terminan tomando riesgo de crédito sin saberlo. Siempre hay que indagar el origen de ese spread antes de recomendar."
  },
  {
    "id": "TRAMPA-MC-004",
    "categoria": "Preguntas Trampa",
    "subtema": "CER como protección absoluta",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente afirma con total seguridad: 'El CER me cubre perfecto de la inflación, ¿no?' ¿Cuál es la corrección más importante?",
    "opciones": [
      "Confirmarle que tiene toda la razón, sin matices",
      "Aclarar que el CER indexa el capital según el IPC, pero el rendimiento final del cliente depende también del precio al que entró (la tasa real que está pagando o cobrando) y del riesgo del emisor; no es una cobertura 'perfecta' automática",
      "Decirle que el CER no tiene ninguna relación con la inflación",
      "Decirle que solo cubre la mitad de la inflación, siempre"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es de las confusiones más frecuentes: tratar el CER como un seguro perfecto e infalible. La indexación cumple su función sobre el capital nominal, pero el resultado final del inversor también depende de la tasa real implícita en el precio de entrada y del riesgo del emisor del bono. 'Cubre' no es lo mismo que 'garantiza ganar' en cualquier escenario."
  },
  {
    "id": "TRAMPA-MC-005",
    "categoria": "Preguntas Trampa",
    "subtema": "Bono dual como combo sin contrapartida",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente concluye: 'Si el bono dual paga lo mejor entre dos opciones, entonces gano siempre, ¿no?' ¿Qué matiz le falta?",
    "opciones": [
      "Tiene razón, no hay ninguna contra",
      "Que esa 'opción de pagar lo mejor' tiene un costo implícito que el mercado descuenta en el precio (reduciendo el rendimiento esperado), y que el bono sigue teniendo riesgo de precio, liquidez y crédito según el caso; no es una ganancia garantizada sin contrapartida",
      "Que los bonos duales nunca pagan nada",
      "Que 'dual' significa que paga el doble de cupón"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Tratar la opcionalidad como gratuita es un error de razonamiento común. El mercado le pone precio a esa cobertura doble, así que cuando todos quieren ese instrumento, su rendimiento esperado se comprime. Además, sigue existiendo riesgo de precio de mercado, liquidez y crédito como en cualquier otro bono: 'paga lo mejor entre dos' reduce cierto riesgo específico, pero no elimina todos los riesgos."
  },
  {
    "id": "TRAMPA-MC-006",
    "categoria": "Preguntas Trampa",
    "subtema": "Caída de precio de un FCI interpretada como estafa",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te dice indignado: 'No quiero más fondos comunes, el otro día vi que bajó el valor de la cuotaparte. ¿Me estafaron?' ¿Cuál es la mejor respuesta?",
    "opciones": [
      "Sí, probablemente hubo un error o una estafa",
      "Que la baja en el valor de la cuotaparte refleja simplemente la caída de los activos que componen el fondo en ese momento (el fondo 'es' lo que tiene adentro), no una estafa; así como puede bajar, también puede subir, según se mueva el mercado subyacente",
      "Que los fondos comunes nunca pueden bajar de valor",
      "Que la cuotaparte solo baja si hay un fraude del administrador"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es una confusión muy común en clientes nuevos en fondos: no entienden que el fondo es simplemente un 'paquete' de activos, y que su valor sube y baja según el desempeño de esos activos subyacentes, igual que si los tuviera comprados directamente. No hay ninguna 'rentabilidad mágica constante' en un fondo: refleja el mercado, para bien y para mal."
  },
  {
    "id": "TRAMPA-MC-007",
    "categoria": "Preguntas Trampa",
    "subtema": "Diversificar = tener varias cuentas bancarias",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta: '¿Diversificar significa abrir muchas cuentas en distintos bancos?' ¿Cuál es la aclaración correcta?",
    "opciones": [
      "Sí, exactamente eso es diversificar",
      "No: diversificar se refiere a distribuir las inversiones entre distintos activos, sectores o monedas para reducir el riesgo de que un solo evento afecte todo el patrimonio; tener cuentas en distintos bancos no diversifica la inversión en sí misma, aunque puede tener sentido por otras razones (como límites de seguro de depósitos)",
      "No, diversificar no tiene ninguna relación con reducir riesgo",
      "Diversificar es lo mismo que ahorrar en distintas monedas exclusivamente"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Confundir 'diversificar inversiones' con 'distribuir dinero en distintos bancos' es un error conceptual de base, frecuente en clientes que recién empiezan. Vale la pena aclarar la diferencia desde el principio: la diversificación relevante para el riesgo de cartera es entre activos, sectores, emisores y monedas, no entre entidades bancarias donde simplemente se guarda el dinero."
  },
  {
    "id": "TRAMPA-MC-008",
    "categoria": "Preguntas Trampa",
    "subtema": "Suba pasada como garantía de seguridad",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente entusiasmado dice: 'Quiero invertir en la acción XYZ porque subió 50% este mes, ¡es una apuesta segura!' ¿Qué le respondés?",
    "opciones": [
      "Que tiene razón, una suba fuerte garantiza que seguirá subiendo",
      "Que una suba fuerte y rápida suele ir de la mano de alta volatilidad, lo cual significa que también puede caer con la misma intensidad; el desempeño pasado no garantiza el comportamiento futuro, y 'apuesta segura' es justamente lo contrario de lo que describe ese tipo de movimiento",
      "Que las acciones que suben mucho nunca pueden bajar",
      "Que hay que vender inmediatamente cualquier acción que haya subido"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un sesgo cognitivo clásico: interpretar una suba fuerte reciente como evidencia de seguridad, cuando en realidad suele ser evidencia de alta volatilidad (lo cual implica que también puede caer fuerte). Es importante separar 'me gusta cómo viene funcionando' de 'es una apuesta segura', que son cosas completamente distintas."
  },
  {
    "id": "TRAMPA-MC-009",
    "categoria": "Preguntas Trampa",
    "subtema": "Comprar a mercado 'y listo'",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente apurado te dice: '¿Por qué no lo comprás a mercado y listo? ¿Para qué tanta vuelta con el precio límite?' ¿Cuál es la respuesta correcta?",
    "opciones": [
      "Tiene razón, siempre hay que usar orden a mercado para no perder tiempo",
      "Que una orden a mercado prioriza la velocidad por sobre el control de precio, lo cual puede salir caro en activos con spread grande o poca profundidad, porque podría terminar pagando bastante más de lo que vio en pantalla; la orden límite da control de precio a cambio de aceptar que tal vez no se ejecute de inmediato",
      "Que las órdenes límite no existen en el mercado argentino",
      "Que da exactamente lo mismo, no hay ninguna diferencia entre ambos tipos de orden"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta pregunta de impaciencia esconde una trampa real de costos: en activos líquidos con spread chico, ir a mercado puede ser razonable; en activos con spread grande o poca profundidad, puede significar pagar bastante más de lo esperado. El trade-off central (velocidad vs. control de precio) hay que poder explicarlo en una frase corta, sin sonar a excusa para demorar."
  },
  {
    "id": "TRAMPA-MC-010",
    "categoria": "Preguntas Trampa",
    "subtema": "Garantía de precio en una orden",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta: '¿Me garantizás el precio al que voy a comprar?' ¿Cuál es la respuesta más honesta?",
    "opciones": [
      "Sí, siempre se puede garantizar el precio exacto",
      "Con una orden límite se puede controlar el precio máximo (o mínimo) que se acepta, pero no se garantiza que se vaya a ejecutar a ese nivel ni en qué momento; con una orden a mercado, se garantiza la ejecución rápida pero no el precio exacto",
      "No, ningún tipo de orden da ningún control sobre el precio",
      "Solo se puede garantizar el precio en operaciones de renta fija, no en acciones"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es importante ser honesto con esta pregunta desde el primer día: ningún tipo de orden 'garantiza' simultáneamente precio exacto y ejecución inmediata. Es un trade-off, no una garantía absoluta. Prometer algo que no se puede cumplir genera más problemas a futuro que explicar el funcionamiento real desde el principio."
  },
  {
    "id": "TRAMPA-MC-011",
    "categoria": "Preguntas Trampa",
    "subtema": "Vender todo en una caída fuerte",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "El mercado cae fuerte y un cliente con horizonte de 5 años te dice: '¿Y si esto sigue cayendo? Vendamos todo antes de perder más.' ¿Cuál es el riesgo de simplemente acceder sin más análisis?",
    "opciones": [
      "Ninguno, siempre conviene vender ante cualquier caída",
      "Vender en pánico durante una caída puede cristalizar pérdidas que, de mantenerse el plan original (horizonte largo, perfil acorde), podrían haber sido transitorias; además, suele ser muy difícil 'volver a entrar' en el momento correcto después",
      "El único riesgo es perder tiempo respondiendo al cliente",
      "Vender todo siempre protege mejor el capital del cliente"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es una de las situaciones donde el rol del asesor pesa más: validar la emoción sin ceder automáticamente a una decisión que puede no estar alineada con el plan original del cliente. No significa ignorar el pedido, sino contextualizarlo con el horizonte y el perfil, y ayudar a que la decisión (la que sea) se tome con criterio y no solo por pánico del momento."
  },
  {
    "id": "TRAMPA-MC-012",
    "categoria": "Preguntas Trampa",
    "subtema": "Vender y re-entrar después (market timing)",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente pregunta: 'Si el mercado va a bajar, ¿no conviene vender todo ahora y volver a entrar después, más abajo?' ¿Qué riesgo principal tiene esa estrategia?",
    "opciones": [
      "Ningún riesgo, es una estrategia infalible si uno está seguro de que va a bajar",
      "Requiere acertar DOS decisiones de timing (cuándo salir y cuándo volver a entrar), algo extremadamente difícil de hacer de forma consistente; el riesgo más común es vender, ver caer más, no animarse a volver a entrar a tiempo, y terminar perdiéndose la recuperación",
      "El único riesgo es pagar más comisiones",
      "No hay ninguna diferencia entre esta estrategia y mantenerse invertido"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El 'market timing' (entrar y salir prediciendo movimientos de corto plazo) suena lógico en la teoría, pero en la práctica exige acertar dos decisiones difíciles en vez de una. El patrón más común y costoso es vender en la caída y no animarse a volver a entrar hasta que el mercado ya recuperó gran parte del terreno perdido, terminando peor que si simplemente se hubiera sostenido el plan original."
  },
  {
    "id": "TRAMPA-MC-013",
    "categoria": "Preguntas Trampa",
    "subtema": "Confusión de magnitud de precio (bonos)",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente nuevo ve un precio de bono en pantalla que dice '1,05' y se sorprende: '¿Eso vale un dólar con cinco centavos? ¿Es un regalo?' ¿Qué le explicás?",
    "opciones": [
      "Que efectivamente está regalado y debería comprar todo lo que pueda de inmediato",
      "Que conviene frenar y confirmar la convención de precio que usa esa plataforma específica: algunos sistemas muestran el precio del bono 'por unidad' (cercano a 1 dólar y centavos), mientras que otros lo multiplican por 100 (mostrando algo como '105'); antes de operar, siempre hay que confirmar qué convención está usando la pantalla",
      "Que es un error del sistema que hay que ignorar",
      "Que los bonos siempre cuestan exactamente 1 dólar, sin excepciones"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Esta es una trampa operativa muy real: distintas plataformas o calculadoras pueden mostrar el precio de un bono bajo distintas convenciones (por unidad nominal, o multiplicado por 100). Frente a un número que parece 'demasiado bueno para ser verdad' o inusual, el reflejo correcto es frenar y confirmar la convención exacta antes de cargar cualquier orden, no asumir y operar de inmediato."
  },
  {
    "id": "TRAMPA-MC-014",
    "categoria": "Preguntas Trampa",
    "subtema": "Confusión de tickers por moneda",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te pide 'comprame el bono X en dólares' y vos cargás la orden con el ticker terminado en 'D', pero el cliente en realidad solo tiene pesos disponibles en su cuenta. ¿Qué va a pasar probablemente?",
    "opciones": [
      "La orden se va a ejecutar sin problemas, convirtiendo automáticamente los pesos",
      "La orden probablemente sea rechazada o no se pueda cursar, porque para operar la variante en dólares (terminación D) se necesita contar con saldo en esa moneda; hay que verificar previamente con qué moneda cuenta el cliente y, si es necesario, primero comprar en pesos para luego convertir",
      "El sistema automáticamente le presta dólares al cliente sin que se entere",
      "No hay ninguna diferencia entre operar en pesos o en dólares"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es uno de los errores operativos más comunes y evitables: confundir el ticker (y por lo tanto la moneda) con la disponibilidad real de fondos del cliente. Antes de cargar cualquier orden, conviene verificar explícitamente con qué moneda cuenta el cliente, para evitar rechazos de orden o, peor, cargar la operación equivocada por apuro."
  },
  {
    "id": "TRAMPA-MC-015",
    "categoria": "Preguntas Trampa",
    "subtema": "Confiar ciegamente en datos no verificados",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te manda un dato de un informe de research que vio en redes sociales y te dice: 'Acá dice que tal bono rinde 15%, ¿lo cargamos ya?'. ¿Cuál es el paso correcto antes de avanzar?",
    "opciones": [
      "Cargar la orden de inmediato, total el cliente ya decidió",
      "Verificar ese dato en tu propia plataforma o fuente confiable antes de operar, porque los informes pueden tener datos desactualizados, errores, o estar fuera de contexto (por ejemplo, condiciones que cambiaron desde la publicación); el asesor es responsable de confirmar antes de ejecutar",
      "Decirle al cliente que nunca confíe en ningún informe de research",
      "Ignorar completamente la información que trae el cliente, sin revisarla"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Parte del criterio profesional es no operar 'a ciegas' solo porque el cliente trae un dato de afuera, por más entusiasmado que esté. Los datos pueden estar desactualizados, mal interpretados, o simplemente no aplicar más a las condiciones actuales del mercado. Verificar antes de ejecutar no es desconfiar del cliente, es parte de la responsabilidad profesional del asesor."
  },
  {
    "id": "TRAMPA-CASO-001",
    "categoria": "Preguntas Trampa",
    "subtema": "Cliente que compró y cayó 10%",
    "dificultad": "intermedia",
    "tipo": "caso_abierto",
    "enunciado": "Un cliente compró una acción 'de moda' hace dos semanas y ahora cayó 10%. Te escribe: '¿Salimos ya antes de que sea peor?'. Redactá en 4-5 líneas cómo encararías esta respuesta, sin decir simplemente 'sí, vendamos' ni 'no, aguantemos' de forma automática.",
    "respuesta_modelo": "Una buena respuesta debería: (1) no reaccionar de forma automática en ninguna dirección, (2) recuperar el motivo original de la compra y el horizonte que se había planteado (¿era una posición táctica de corto plazo o una convicción de mediano/largo plazo?), (3) evaluar si cambió algo estructural en los fundamentos de la empresa o si es simplemente volatilidad de corto plazo, (4) recordar el tamaño de la posición dentro de la cartera total (si era una posición chica y acotada, una caída del 10% no debería generar pánico; si era desproporcionada, ahí está el verdadero problema de fondo), (5) proponer una decisión basada en esos criterios, no en el miedo del momento."
  },
  {
    "id": "TRAMPA-MC-016",
    "categoria": "Preguntas Trampa",
    "subtema": "Comprar hoy y vender cuando suba un poco",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente con horizonte de largo plazo pregunta: '¿Por qué no compramos hoy y vendemos en cuanto suba un 5%? Así aseguramos la ganancia rápido.' ¿Qué le señalás sobre esa lógica?",
    "opciones": [
      "Que es la mejor estrategia posible para cualquier inversor",
      "Que esa lógica convierte una inversión de largo plazo en una operación de trading de corto plazo, con sus propias reglas (timing, costos de transacción más frecuentes, impuestos por ventas más seguidas) y que no necesariamente es coherente con el objetivo y horizonte que se había definido originalmente para esa cartera",
      "Que nunca hay que vender una inversión bajo ninguna circunstancia",
      "Que un 5% de suba es imposible de lograr en la práctica"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es una confusión frecuente entre 'invertir' y 'especular' (operar de corto plazo apostando a movimientos de precio). No es que una sea mala y la otra buena, sino que son actividades distintas con reglas distintas, y mezclarlas sin ser consciente de eso suele terminar en decisiones incoherentes con el plan original que se había definido para esa cartera."
  },
  {
    "id": "TRAMPA-MC-017",
    "categoria": "Preguntas Trampa",
    "subtema": "Confundir nominal y real",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente celebra: '¡Mi plazo fijo me dio un 5% este mes, estoy ganando plata!' Pero la inflación de ese mes fue del 8%. ¿Qué le explicás?",
    "opciones": [
      "Que tiene razón, ganó plata sin ninguna duda",
      "Que, en términos nominales, su saldo en pesos aumentó, pero en términos reales (ajustando por inflación) perdió poder adquisitivo, porque el 5% de retorno no alcanzó a compensar el 8% de inflación de ese período",
      "Que la inflación no tiene ninguna relación con el rendimiento de un plazo fijo",
      "Que debería haber invertido en un plazo fijo distinto que sí le ganara a la inflación, sin importar el contexto"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Distinguir rentabilidad nominal de rentabilidad real es uno de los conceptos más importantes para un cliente argentino. Un retorno nominal positivo puede esconder una pérdida real de poder adquisitivo si la inflación del período fue mayor. Ayudar al cliente a pensar 'en términos reales' es parte central de la educación financiera que un asesor debería transmitir."
  },
  {
    "id": "TRAMPA-MC-018",
    "categoria": "Preguntas Trampa",
    "subtema": "Confundir volatilidad con pérdida permanente",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente ve que su cartera diversificada bajó 8% en un mes volátil y dice: 'Perdí 8% de mi plata para siempre'. ¿Qué matiz le falta?",
    "opciones": [
      "Tiene razón, esa pérdida es definitiva y no se puede recuperar",
      "Que una baja de precio en una cartera diversificada de activos líquidos suele ser, en principio, una pérdida 'de papel' o no realizada (mientras no se venda), distinta de una pérdida permanente como ocurriría, por ejemplo, ante un default; si no necesita vender en ese momento, esa baja puede revertirse con el tiempo",
      "Que las carteras diversificadas nunca pueden bajar de valor",
      "Que debería vender inmediatamente para 'frenar' la pérdida"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es clave diferenciar volatilidad (movimiento de precio que puede revertirse con el tiempo) de pérdida permanente de capital (como ocurriría ante un default o quiebra). Esta distinción es central para ayudar a un cliente a no tomar decisiones apresuradas en momentos de baja transitoria, sobre todo si su horizonte de inversión todavía es largo y no necesita liquidez inmediata."
  },
  {
    "id": "TRAMPA-MC-019",
    "categoria": "Preguntas Trampa",
    "subtema": "Tasa alta de licitación sin contexto",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente ve que una nueva ON sale a buscar fondos pagando una tasa muy alta comparada con otras similares y te dice entusiasmado: '¡Esta sí que paga bien, metamos todo ahí!' ¿Qué deberías indagar antes de avanzar?",
    "opciones": [
      "Nada, una tasa alta siempre es una buena señal sin excepciones",
      "Por qué esa empresa puntual necesita ofrecer una tasa tan por encima de comparables: puede reflejar mayor riesgo de crédito específico, menor calidad institucional, urgencia de fondeo, o condiciones de mercado particulares en el momento de la emisión",
      "Si el cliente tiene suficiente dinero disponible para invertir, sin mirar nada más",
      "El color del logo de la empresa emisora"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Una tasa significativamente más alta que comparables casi nunca es 'gratis': suele reflejar que el mercado le exige una prima de riesgo mayor a ese emisor específico, por la razón que sea (riesgo de crédito, urgencia de fondeo, menor trayectoria). El entusiasmo del cliente por el número alto es exactamente el momento donde más conviene frenar y analizar el porqué antes de recomendar."
  },
  {
    "id": "TRAMPA-MC-020",
    "categoria": "Preguntas Trampa",
    "subtema": "Perfil agresivo solicitado sin análisis",
    "dificultad": "intermedia",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente de 30 años, sin experiencia previa en inversiones, te dice: 'Quiero invertir agresivamente todo mi dinero porque escuché que en la bolsa se gana mucho'. ¿Cuál es tu primer paso?",
    "opciones": [
      "Armar la cartera más agresiva posible de inmediato, porque eso es lo que pidió",
      "Indagar más a fondo su situación real (estabilidad de ingresos, fondo de emergencia, horizonte real, tolerancia emocional probada ante caídas) antes de avanzar; para alguien sin experiencia previa, suele ser más prudente empezar con un perfil moderado e ir ajustando con el tiempo, en vez de saltar directo a 'todo agresivo' basado solo en un comentario entusiasta",
      "Negarse directamente a trabajar con un cliente joven sin experiencia",
      "Decirle que la bolsa siempre es una mala idea para gente sin experiencia"
    ],
    "respuesta_correcta": 1,
    "explicacion": "El entusiasmo inicial de un cliente sin experiencia no es lo mismo que tolerancia al riesgo probada. Es común que alguien diga 'quiero ser agresivo' sin haber atravesado nunca una caída real de su propio dinero. Parte del trabajo del asesor es indagar más allá del primer impulso y, en casos así, considerar empezar de forma más gradual, ajustando con el tiempo según cómo reaccione realmente el cliente ante la volatilidad."
  },
  {
    "id": "TRAMPA-MC-021",
    "categoria": "Preguntas Trampa",
    "subtema": "Correlación perfecta y diversificación falsa",
    "dificultad": "avanzada",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente arma una cartera con 8 acciones distintas, todas del mismo sector y país, y te dice: 'Ya está, diversifiqué bastante, tengo 8 activos diferentes'. ¿Qué le señalás?",
    "opciones": [
      "Que tiene razón, 8 activos siempre es suficiente diversificación",
      "Que la cantidad de activos no es lo único relevante: si todos pertenecen al mismo sector y país, es probable que estén altamente correlacionados (se muevan parecido ante los mismos eventos), por lo que la diversificación real lograda es mucho menor de lo que parece a simple vista por el número de activos",
      "Que tener más de 5 activos siempre es contraproducente",
      "Que la correlación no tiene ninguna relevancia para el riesgo de cartera"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Es un error conceptual común: pensar que 'cantidad de activos' es sinónimo de 'diversificación'. Si todos los activos están altamente correlacionados (mismo sector, mismo país, mismos factores de riesgo), un evento negativo puntual puede golpear a todos al mismo tiempo, casi como si fuera una sola posición grande. La diversificación efectiva depende de combinar activos que NO se muevan todos igual, no solo de la cantidad."
  },
  {
    "id": "TRAMPA-MC-022",
    "categoria": "Preguntas Trampa",
    "subtema": "Pánico ante baja de un solo día",
    "dificultad": "basica",
    "tipo": "multiple_choice",
    "enunciado": "Un cliente te escribe alarmado un viernes a la tarde porque vio que su cartera bajó 1,5% durante el día. ¿Cuál es la respuesta más apropiada como primer paso?",
    "opciones": [
      "Recomendarle vender todo de inmediato para evitar más pérdidas",
      "Contextualizar la magnitud del movimiento (una variación diaria de 1-2% es habitual y esperable en activos de renta variable o renta fija con algo de volatilidad) antes de considerar cualquier cambio de estrategia, y confirmar si hay algún evento puntual relevante detrás de ese movimiento o si es simplemente ruido normal de mercado",
      "Ignorar completamente el mensaje del cliente sin responder",
      "Decirle que nunca más debería mirar la pantalla de su cartera"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Parte de la educación financiera del cliente es ayudarlo a calibrar qué magnitud de movimiento amerita preocupación real y cuál es simplemente la volatilidad normal y esperable de los mercados. Reaccionar con pánico ante variaciones diarias chicas (1-2%) sin contexto adicional puede llevar a decisiones apresuradas que dañan más que ayudan al plan de largo plazo."
  }
];
