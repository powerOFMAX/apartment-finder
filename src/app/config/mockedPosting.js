const postings = [
  {
    posting_id: '44557981', // id del aviso
    posting_location: { // direccion del aviso
      address: 'Guido 1800', // direccion
      zone: 'Recoleta', // barrio
      city: 'Capital Federal', // ciudad
    },
    posting_prices: [ // precio por tipo de operacion
      {
        operation_type: 1, // id del tipo de operacion (1 ALQUILER, 2 COMPRA/VENTA, 3 ALQUILER TEMPORAL)
        price: { amount: 13500, currency: 'ARS' }, // precio y moneda
        expenses: { amount: 3500, currency: 'ARS' }, // expensas y moneda
      },
    ],
    operation_type: { operation_type_id: 1, operation_type_name: 'Alquiler' }, // tipo de operacion id y nombre
    publication_plan: 'SIMPLE', // tipo del plan de publicacion
    publish_date: '23/01/2020', // fecha de publicacion
    posting_status: { status: 'AVAILABLE', label: 'Disponible' }, // estado del aviso ( AVAILABLE : disponible, RESERVED: reservado, FINALIZED: finalizado)
    title: 'Guido y Callao, 2amb coc y lav todo luz 50m impec amob categoría ', // titulo del aviso (sera el titulo de la card)
    posting_picture: 'https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg', // imagen principal del aviso card
    posting_slug: 'guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981', // url a la que debe apuntarse al hacer click sobre el titulo del aviso (abajo la descripcion del aviso)
    posting_description: 'Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id.',
  },
  {
    posting_id: '44554144',
    posting_location: {
      address: 'San Lorenzo 1300',
      zone: 'Güemes',
      city: 'Mar del Plata',
    },
    posting_prices: [
      {
        operation_type: 2,
        price: { amount: 110500, currency: 'USD' },
        expenses: { amount: 3000, currency: 'ARS' },
      },
    ],
    operation_type: { operation_type_id: 2, operation_type_name: 'Venta' },
    publication_plan: 'SUPERHIGHLIGHTED',
    publish_date: '18/07/2019',
    posting_status: { status: 'AVAILABLE', label: 'Disponible' },
    title: 'Dueño San Lorenzo/Güemes. LC  2 d, a balcón terraza a jardín. A nvo. cochera',
    posting_picture: 'https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/41/44/360x266/1693069558.jpg',
    posting_slug: 'dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144',
    posting_description: 'Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique.',
  },
  {
    posting_id: '44186948',
    posting_location: {
      address: 'Juncal 3000',
      zone: 'Barrio Norte',
      city: 'Capital Federal',
    },
    posting_prices: [
      {
        operation_type: 3,
        price: { amount: 22500, currency: 'ARS' },
        expenses: null,
      },
    ],
    operation_type: {
      operation_type_id: 3,
      operation_type_name: 'Alquiler Temporal',
    },
    publication_plan: 'HIGHLIGHTED',
    publish_date: '02/12/2019',
    posting_status: { status: 'RESERVED', label: 'Reservado' },
    title: 'Juncal/Coronel Díaz. Al frente, 63m, gran balcón terraza. Todo luz',
    posting_picture: 'https://preprostatic.zonapropcdn.com/avisos/1/00/44/18/69/48/360x266/1688441607.jpg',
    posting_slug: 'juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948',
    posting_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor.',
  },
]

export default postings
