# E-commerce

Site e-commerce desenvolvido com Nextjs, Sanity e Stripe

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

#### Tela principal
![imagem_2023-03-02_105021650](https://user-images.githubusercontent.com/105292489/222447020-931455bc-8b8f-4858-80fd-42a4b86c4ecf.png)
#### Tela de produto
![image](https://user-images.githubusercontent.com/105292489/222447426-0a59c98f-77b7-4188-bfd1-51e666e08a98.png)

### Links

- Repo URL: [Here](https://github.com/muryllohenriq/ecommerce-muryllohenriq)
- Deploy URL: [Here](https://ecommerce-mh.vercel.app)

## My process

Foi meu primeiro projeto com nextjs e eu queria construir algo que trouxesse valor, fosse simples e funcional. Com esses aspectos em mente, sanity e stripe foram perfeitos, ambas bibliotecas tem uma excelente documentação, mas foram escolhidas principalmente pela interface amigável e intuitiva, que no caso será utilizado pelos proprietários do site.

### Built with

- React
- Nextjs
- CSS
- Sanity
- Stripe

### What I learned

Foi meu primeiro projeto conectando tanto o sanity quanto o stripe, então tudo era novidade e uma aventura. Confesso que o stripe foi tranquilo, mas o sanity deu um trabalhinnho e não saberei dizer em qual tentativa que tudo saiu como o esperado, mas no final deu tudo certo 😅 

Abaixo segue uma requisição para o backend, no caso o sanity

```js
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
```

### Continued development

Pretendo colocar o modo escuro.
Retornar a quantidade de produtos a 1 após trocar de produto.

### Useful resources

- [Resource 1](https://nextjs.org/docs/getting-started) - Documentação nextjs.
- [Resource 2](https://www.sanity.io/docs) - Documentação do sanity.
- [Resource 3](https://stripe.com/docs) - Documentação do stripe.

## Author

- Website - [muryllohenriq](https://github.com/muryllohenriq)
- LinkedIn - [Muryllo Henrique](https://www.linkedin.com/in/muryllohenrique/)

## Acknowledgments

Eu amei esse projeto, foi feito para mim como teste e projeto de estudo para a criação do meu primeiro freela, e estou bastante feliz que tudo correu bem :)
