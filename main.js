// Importar datos y estilos
import './style.css'
import {
  products,
  sellerOptions,
  brandOptions,
  menuOptions,
  menuImages,
  footerInfo,
  RRSS,
  myRRSS
} from './data'

// Selección del contenedor principal
const app$$ = document.querySelector('#app')

// Función para crear el encabezado
const createHeader = () => {
  const header$$ = document.createElement('header')
  header$$.style.position = 'fixed'
  header$$.style.top = '0'
  header$$.style.width = '100%'

  const aLogoHeader$$ = document.createElement('a')
  const imgLogoHeader$$ = document.createElement('img')
  aLogoHeader$$.href = 'https://www.pixelatoy.com/es/'
  imgLogoHeader$$.src = './assets/planetcomics.png'
  imgLogoHeader$$.className = 'logo'
  aLogoHeader$$.className = 'logo-a'
  aLogoHeader$$.appendChild(imgLogoHeader$$)
  header$$.appendChild(aLogoHeader$$)

  // Función para crear el menú
  const createMenu = () => {
    const navBar$$ = document.createElement('nav')
    navBar$$.style.position = 'fixed'
    navBar$$.style.marginTop = '50px'
    navBar$$.style.width = '100%'
    document.body.style.marginTop = `${header$$.offsetHeight}px`

    const inputMenu$$ = document.createElement('input')
    inputMenu$$.type = 'checkbox'
    inputMenu$$.id = 'menu'

    const label$$ = document.createElement('label')
    label$$.htmlFor = 'menu'
    const menuImg$$ = document.createElement('img')
    menuImg$$.src = './assets/menu-img.png'
    menuImg$$.className = 'menu_img'

    const ul$$ = document.createElement('ul')
    ul$$.className = 'nav-ul'
    menuOptions.forEach((option) => {
      const li$$ = document.createElement('li')
      li$$.className = 'nav-li'
      const a$$ = document.createElement('a')
      a$$.className = 'nav-a'
      a$$.innerText = option.name
      a$$.href = option.href
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })
    menuImages.forEach((option) => {
      const li$$ = document.createElement('li')
      li$$.className = 'nav-li'
      const a$$ = document.createElement('a')
      a$$.className = 'nav-a'
      a$$.href = option.href
      const img$$ = document.createElement('img')
      img$$.src = option.src
      img$$.className = 'menu_tiny'
      a$$.appendChild(img$$)
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })

    navBar$$.appendChild(inputMenu$$)
    label$$.appendChild(menuImg$$)
    navBar$$.appendChild(label$$)
    navBar$$.appendChild(ul$$)
    header$$.appendChild(navBar$$)
  }

  createMenu()
  app$$.appendChild(header$$)
  document.body.style.marginTop = `${header$$.offsetHeight}px`
  document.body.appendChild(header$$)
}

createHeader()

// Función para crear las etiquetas de filtro
const createFilterTags = () => {
  const aside$$ = document.createElement('aside')
  aside$$.id = 'aside'

  const filterSection$$ = document.createElement('section')
  filterSection$$.className = 'filterSection'

  // Crear formulario para filtrar productos
  const form$$ = document.createElement('form')
  const h3$$ = document.createElement('h3')
  h3$$.className = 'filter-title'
  h3$$.textContent = 'Filtrar productos'

  // Crear select para tipo de vendedor
  const select$$ = document.createElement('select')
  select$$.id = 'select'
  select$$.className = 'select'
  const disabledOptions$$ = document.createElement('option')
  disabledOptions$$.disabled = true
  disabledOptions$$.value = ''
  disabledOptions$$.defaultSelected = true
  disabledOptions$$.textContent = 'Filtrar por Tipo'
  select$$.appendChild(disabledOptions$$)
  sellerOptions.forEach((option) => {
    const option$$ = document.createElement('option')
    option$$.textContent = option
    option$$.className = 'option'
    option$$.value = option
    select$$.appendChild(option$$)
  })

  // Crear select para marca
  const brandLabel$$ = document.createElement('select')
  brandLabel$$.id = 'brandInput' // Cambiado: ID único para el select de marca
  brandLabel$$.className = 'select'
  const disabledOption$$ = document.createElement('option')
  disabledOption$$.disabled = true
  disabledOption$$.value = ''
  disabledOption$$.defaultSelected = true
  disabledOption$$.textContent = 'Filtrar por Marca/Editorial'
  brandLabel$$.appendChild(disabledOption$$)
  brandOptions.forEach((option) => {
    const option$$ = document.createElement('option')
    option$$.textContent = option
    option$$.className = 'option'
    option$$.value = option
    brandLabel$$.appendChild(option$$)
  })

  // Crear input para filtrar por precio
  const label$$ = document.createElement('label')
  const input$$ = document.createElement('input')
  input$$.id = 'input'
  input$$.type = 'number'
  input$$.className = 'priceInput'
  input$$.placeholder = 'Filtrar por Precio'
  const button$$ = document.createElement('button')
  button$$.id = 'priceFilter'
  button$$.className = 'filterButton'
  button$$.textContent = 'Filtrar'
  button$$.type = 'button'
  const resetButton$$ = document.createElement('button')
  resetButton$$.id = 'resetButton'
  resetButton$$.className = 'resetButton'
  resetButton$$.type = 'reset'
  resetButton$$.id = 'resetButton'
  resetButton$$.textContent = 'Limpiar filtros'
  label$$.appendChild(input$$)
  label$$.appendChild(button$$)

  form$$.appendChild(h3$$)
  form$$.appendChild(select$$)
  form$$.appendChild(brandLabel$$)
  form$$.appendChild(label$$)
  form$$.appendChild(resetButton$$)
  filterSection$$.appendChild(form$$)

  aside$$.appendChild(form$$)
  app$$.appendChild(aside$$)
}

createFilterTags()

// Contenedor de la tienda
const shopContainer = document.createElement('section')
const cardsArticle$$ = document.createElement('article')
cardsArticle$$.className = 'CardsContainer'
shopContainer.appendChild(cardsArticle$$)
app$$.appendChild(shopContainer)

// Función para crear los productos
const createProducts = (productsToPrint) => {
  cardsArticle$$.innerHTML = ''
  for (let i = 0; i < productsToPrint.length; i++) {
    const card$$ = document.createElement('div')
    card$$.className = 'cardContainer'
    card$$.classList = 'card'
    const img$$ = document.createElement('img')
    img$$.src = productsToPrint[i].imgUrl
    img$$.className = 'cardImage'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'cardTitle'
    h3$$.textContent = productsToPrint[i].name
    const p$$ = document.createElement('p')
    p$$.className = 'cardType'
    p$$.textContent = productsToPrint[i].type
    const ps$$ = document.createElement('p')
    ps$$.className = 'cardBrand'
    ps$$.textContent = productsToPrint[i].brand
    const h4$$ = document.createElement('h4')
    h4$$.className = 'cardPrice'
    h4$$.textContent = `${productsToPrint[i].price} €`
    const quantityInput$$ = document.createElement('input')
    quantityInput$$.type = 'number'
    quantityInput$$.value = 1
    quantityInput$$.min = 1
    quantityInput$$.className = 'quantityInput'

    const addButton$$ = document.createElement('button')
    addButton$$.innerHTML = 'Añadir'
    addButton$$.className = 'addButton'

    addButton$$.addEventListener('click', () => {
      const quantity = parseInt(quantityInput$$.value)
      handleAddButtonClick(productsToPrint[i].name)
      console.log(`Añadir ${quantity} ${productsToPrint[i].name} al carrito`)
    })

    card$$.appendChild(img$$)
    card$$.appendChild(h3$$)
    card$$.appendChild(p$$)
    card$$.appendChild(ps$$)
    card$$.appendChild(h4$$)
    card$$.appendChild(quantityInput$$)
    card$$.appendChild(addButton$$)

    cardsArticle$$.appendChild(card$$)
  }
  shopContainer.appendChild(cardsArticle$$)
}

createProducts(products)

// Función para crear el formulario de suscripción
const createForm = () => {
  const section$$ = document.createElement('section')
  section$$.className = 'formSection'
  const h2$$ = document.createElement('h2')
  h2$$.className = 'formTitle'
  h2$$.textContent = 'Suscríbete a nuestra newsletter'
  const h4$$ = document.createElement('h4')
  h4$$.className = 'formContent'
  h4$$.textContent = 'Recibe nuestras promociones y novedades en tu e-mail'
  const form$$ = document.createElement('form')
  form$$.className = 'finalForm'
  const inputName$$ = document.createElement('input')
  inputName$$.className = 'nameInput'
  inputName$$.type = 'text'
  inputName$$.placeholder = 'Nombre'
  const inputMail$$ = document.createElement('input')
  inputMail$$.className = 'emailInput'
  inputMail$$.placeholder = 'E-mail'
  inputMail$$.type = 'text'
  const button$$ = document.createElement('button')
  button$$.type = 'button'
  button$$.className = 'sendButton'
  button$$.textContent = 'Enviar'

  form$$.appendChild(inputName$$)
  form$$.appendChild(inputMail$$)
  form$$.appendChild(button$$)
  section$$.appendChild(h2$$)
  section$$.appendChild(h4$$)
  section$$.appendChild(form$$)
  app$$.appendChild(section$$)
}

createForm()

// Función para crear el pie de página
const createFooter = () => {
  const footer$$ = document.createElement('footer')
  const divContainer = document.createElement('div')
  divContainer.className = 'divFooterContainer'
  for (const option in footerInfo) {
    const div$$ = document.createElement('div')
    div$$.className = 'footerSection'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'footerTitle'
    h3$$.textContent = option
    const ul$$ = document.createElement('ul')
    footerInfo[option].forEach((element) => {
      const li$$ = document.createElement('li')
      li$$.className = 'footerLi'
      const a$$ = document.createElement('a')
      a$$.textContent = element
      a$$.className = 'footerA'
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })
    div$$.appendChild(h3$$)
    div$$.appendChild(ul$$)
    divContainer.appendChild(div$$)
    footer$$.appendChild(divContainer)
  }

  const divRRSS$$ = document.createElement('div')
  divRRSS$$.className = 'footerSection'
  const h3RRSS$$ = document.createElement('h3')
  h3RRSS$$.className = 'footerTitle'
  h3RRSS$$.textContent = 'Síguenos'
  const ulRRSS$$ = document.createElement('ul')
  ulRRSS$$.className = 'RRSS'
  RRSS.forEach((element) => {
    const li$$ = document.createElement('li')
    li$$.className = 'footerLi'
    const a$$ = document.createElement('a')
    a$$.className = 'footerA'
    a$$.href = element.linkTo
    a$$.target = '_blank'
    const img$$ = document.createElement('img')
    img$$.className = 'footerImg'
    img$$.src = element.imgUrl
    img$$.alt = 'Icono de Red Social'
    a$$.appendChild(img$$)
    li$$.appendChild(a$$)
    ulRRSS$$.appendChild(li$$)
  })
  const divCR = document.createElement('div')
  const divRRSS = document.createElement('div')
  divRRSS.className = 'myRRSSContainer'
  divCR.className = 'myFooterContainer'
  const copyRight = document.createElement('p')
  copyRight.className = 'myFooterP'
  copyRight.textContent = 'Created by RaulMF for '
  const linkToRTC = document.createElement('a')
  linkToRTC.className = 'myFooterA'
  linkToRTC.href = 'https://thepower.education/'
  linkToRTC.textContent = 'Rock{theCode}!'
  linkToRTC.target = '_blank'
  const myUlFooter = document.createElement('ul')
  myRRSS.forEach((element) => {
    const li$$ = document.createElement('li')
    li$$.className = 'myFooterLi'
    const a$$ = document.createElement('a')
    a$$.className = 'myFooterA'
    a$$.href = element.linkTo
    a$$.target = '_blank'
    const img$$ = document.createElement('img')
    img$$.className = 'myFooterImg'
    img$$.src = element.imgUrl
    img$$.alt = 'Icono de Red Social'
    a$$.appendChild(img$$)
    li$$.appendChild(a$$)
    myUlFooter.appendChild(li$$)
  })
  divRRSS.appendChild(myUlFooter)
  copyRight.appendChild(linkToRTC)
  divCR.appendChild(copyRight)
  divCR.appendChild(divRRSS)
  divRRSS$$.appendChild(ulRRSS$$)
  divContainer.appendChild(divRRSS$$)
  footer$$.appendChild(divContainer)
  footer$$.appendChild(divCR)
  app$$.appendChild(footer$$)
}

createFooter()

// Función para restablecer los filtros
const resetFilters = () => {
  createProducts(products)
  const FormToReset = document.querySelector('form')
  FormToReset.reset()
}

// Función para filtrar por tipo seleccionado en el select
const filterBySelect = (e) => {
  const CopyProducts = [...products]
  let selected = e.target.value
  const productByType = CopyProducts.filter((product) => {
    return product.type === selected
  })
  createProducts(productByType)
}

// Función para filtrar por marca ingresada en el input
const filterByBrandInput = () => {
  const CopyProducts = [...products]
  const selectedType = document.querySelector('#select').value
  const selectedBrand = document.querySelector('#brandInput').value

  if (selectedType !== '') {
    const productByType = CopyProducts.filter((product) => {
      return (
        product.type === selectedType &&
        (selectedBrand === '' || product.brand === selectedBrand)
      )
    })

    cardsArticle$$.innerHTML = ''
    createProducts(productByType)
  } else {
    const productByBrand = CopyProducts.filter((product) => {
      return product.brand === selectedBrand
    })
    cardsArticle$$.innerHTML = ''
    createProducts(productByBrand)
  }
}

let inputValue = ''
const input$$ = document.querySelector('#input')
input$$.addEventListener('input', (e) => {
  inputValue = e.target.value
})

// Función para filtrar por todos los criterios (precio, tipo y marca)
const filterByAll = () => {
  const CopyProducts = [...products]
  const selectedType = document.querySelector('#select').value
  const selectedBrand = document.querySelector('#brandInput').value

  if (selectedType !== '') {
    const productByPriceAndType = CopyProducts.filter((product) => {
      return (
        product.price <= parseFloat(inputValue) &&
        product.type === selectedType &&
        (selectedBrand === '' || product.brand === selectedBrand)
      )
    })

    cardsArticle$$.innerHTML = ''
    createProducts(productByPriceAndType)
  } else {
    const productByPrice = CopyProducts.filter((product) => {
      return (
        product.price <= inputValue &&
        (selectedBrand === '' || product.brand === selectedBrand)
      )
    })
    cardsArticle$$.innerHTML = ''
    createProducts(productByPrice)
  }
}

// Event listeners para los elementos de filtro
const selectOpt = document.querySelector('#select')
const brandInput$$ = document.querySelector('#brandInput')
const filterButton = document.querySelector('#priceFilter')
const resetButton = document.querySelector('#resetButton')
selectOpt.addEventListener('change', filterBySelect)
brandInput$$.addEventListener('input', filterByBrandInput)
filterButton.addEventListener('click', filterByAll)
resetButton.addEventListener('click', resetFilters)
