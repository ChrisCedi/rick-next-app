## Feedback Técnico para Christian Javier

Gracias por participar en el proceso de selección para el puesto de desarrollador React en Ktdra. A continuación, te proporcionamos un feedback detallado sobre tu prueba técnica:

- **Mejora en la configuración de Apollo:**

  - Para una mejor integración de TypeScript con Apollo Client, asegúrate de configurar adecuadamente los tipos y las consultas. Aquí tienes un ejemplo de configuración:

  ````typescript
  // Archivo: httpLink.ts
  import { ENV } from '@/constants';
  import { HttpLink } from '@apollo/client';

  export const httpLink = new HttpLink({
    uri: ENV.NEXT_PUBLIC_BACKEND_URL,
  });```
  ````

  ```typescript
  //Archivo: client.ts
  'use server';
  import { from } from '@apollo/client';
  import {
  	registerApolloClient,
  	InMemoryCache,
  	ApolloClient,
  } from '@apollo/experimental-nextjs-app-support';
  import { authLink, errorLink, httpLink } from './link';

  export const { getClient, PreloadQuery, query } = registerApolloClient(() => {
  	return new ApolloClient({
  		cache: new InMemoryCache(),
  		link: from([authLink, errorLink, httpLink]),
  		ssrMode: true,
  	});
  });
  ```

- **Manejo del estado de carga:**

  - Implementar manejo de loading es crucial para proporcionar una mejor experiencia de usuario. Puedes aprender cómo implementarlo en la [documentación de Apollo Client](https://www.apollographql.com/docs/react/data/queries/).

- **Mejora en la búsqueda:**

  - Implementar un debounce en la función de búsqueda ayudará a reducir el número de peticiones al servidor. Puedes aprender más sobre cómo implementar debounce en JavaScript en [useHooks](https://usehooks.com/usedebounce/).

- **Mejora en la asercion de tipos de la API de rick y morty:**
  - La implementacion de herramientas como `GraphQL Code Generator` puede ayudar a mejorar la calidad de la documentacion de la API de rick y morty. Estas herramientas pueden generar documentacion automática de los tipos de datos y consultas de la API, lo que puede ser útil para la documentación de la API. Puedes encontrar más información sobre `GraphQL Code Generator` en [su sitio web oficial](https://the-guild.dev/graphql/codegen).

Apreciamos el esfuerzo y el tiempo dedicado a la prueba técnica. Nos comunicaremos contigo en los próximos días para informarte sobre el siguiente paso en el proceso de selección.

Gracias nuevamente por tu interés en unirte a Ktdra.

Saludos cordiales,
Angel Ramirez
Coordinador de Desarrollo de Software
Ktdra
